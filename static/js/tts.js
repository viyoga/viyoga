/**
 * tts.js — High Performance Reading HUD for Viyoga
 * ──────────────────────────────────────────────────
 * Plays chapters using high-definition neural voices.
 *
 * Architecture & Stability:
 *  - Persistent single Audio element (prevents mobile gesture drops & orphaned listeners)
 *  - In-memory Blob cache (0ms instant playback for pre-buffered & replayed paragraphs)
 *  - Abort-safe: switching paragraphs, speed, or pausing never triggers false error loops
 *  - No runaway scroll: errors pause cleanly and allow retry instead of skipping
 *  - Real-time highlight: scrolls active paragraph into view
 *  - Lock-screen controls via navigator.mediaSession
 *  - Screen Wake Lock API prevents mobile screen sleeping
 */

(function () {
  'use strict';

  /* ── Configuration ───────────────────────────────────────────────────── */
  var IS_LOCAL = location.hostname === '127.0.0.1' || location.hostname === 'localhost';
  var WORKER_URL = IS_LOCAL ? 'http://127.0.0.1:8787' : 'https://viyoga-tts.kabir.workers.dev';

  var VOICES = [
    { id: 'google-us',                 label: 'Android (Soul Browser)' },
    { id: 'en-US-AriaNeural',          label: 'Aria (US Novel)' },
    { id: 'en-US-ChristopherNeural',   label: 'Christopher (Epic Male)' },
    { id: 'en-US-GuyNeural',           label: 'Guy (US Story)' },
    { id: 'en-US-JennyNeural',         label: 'Jenny (US Soft)' },
    { id: 'en-US-MichelleNeural',      label: 'Michelle (US Warm)' },
    { id: 'en-US-EricNeural',          label: 'Eric (US Calm)' },
    { id: 'en-US-EmmaMultilingualNeural', label: 'Emma (US Clear)' },
    { id: 'en-US-AndrewMultilingualNeural', label: 'Andrew (US Warm)' },
    { id: 'en-US-BrianMultilingualNeural', label: 'Brian (US Casual)' },
    { id: 'en-GB-RyanNeural',          label: 'Ryan (GB British Male)' },
    { id: 'en-GB-SoniaNeural',         label: 'Sonia (GB British)' },
    { id: 'en-IN-NeerjaExpressiveNeural', label: 'Neerja (IN Expressive)' },
    { id: 'google-uk',                 label: 'Android UK (Google)' },
  ];

  var SPEEDS = [
    { label: '0.75×', rate: '-25%' },
    { label: '1×',    rate: '+0%'  },
    { label: '1.25×', rate: '+25%' },
    { label: '1.5×',  rate: '+50%' },
    { label: '2×',    rate: '+100%' },
  ];

  var DEFAULT_VOICE = 'google-us';
  var DEFAULT_SPEED_IDX = 1; // 1×

  /* ── State ────────────────────────────────────────────────────────────── */
  var paras = [];            // [{ el, text }, ...]
  var currentIdx = -1;
  var isPlaying = false;
  var voiceId = DEFAULT_VOICE;
  var speedIdx = DEFAULT_SPEED_IDX;

  // Single persistent HTML5 Audio element
  var audio = null;
  var currentPlayPromise = null;
  var activeFetchController = null;

  // Blob cache: key -> blobUrl (instant replay, zero latency)
  var blobCache = new Map();
  var prefetchController = null;

  // Screen Wake Lock
  var wakeLock = null;

  // Load preferences
  try {
    voiceId = localStorage.getItem('tts-voice') || DEFAULT_VOICE;
    speedIdx = parseInt(localStorage.getItem('tts-speed') || DEFAULT_SPEED_IDX, 10);
    if (isNaN(speedIdx) || speedIdx < 0 || speedIdx >= SPEEDS.length) speedIdx = DEFAULT_SPEED_IDX;
  } catch (_) {}

  /* ── DOM References ───────────────────────────────────────────────────── */
  var dock, playBtn, prevBtn, nextBtn, speedBtn, voiceSelect, progressBar, progressWrap, statusDot, labelEl;

  /* ── Helpers ──────────────────────────────────────────────────────────── */
  function savePref(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }

  function cleanText(el) {
    return (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function getCacheKey(idx, vId, sIdx) {
    return idx + ':' + vId + ':' + sIdx;
  }

  function setHighlight(idx) {
    for (var i = 0; i < paras.length; i++) {
      paras[i].el.classList.toggle('tts-active', i === idx);
    }
    if (idx >= 0 && paras[idx]) {
      paras[idx].el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function clearHighlight() {
    for (var i = 0; i < paras.length; i++) {
      paras[i].el.classList.remove('tts-active');
    }
  }

  function setPlayIcon(playing) {
    if (dock) {
      var playIco = dock.querySelector('#tts-icon-play');
      var pauseIco = dock.querySelector('#tts-icon-pause');
      if (playIco) playIco.style.display = playing ? 'none' : '';
      if (pauseIco) pauseIco.style.display = playing ? '' : 'none';
    }
    updateTopBtnState();
  }

  function setLabel(txt) {
    if (labelEl) labelEl.textContent = txt;
  }

  function setDotState(state) {
    // state: '' | 'loading' | 'playing' | 'error'
    if (statusDot) statusDot.className = state ? 'tts-dot-' + state : '';
    if (topBtn) {
      topBtn.classList.toggle('tts-loading', state === 'loading');
    }
  }

  function updateTopBtnState() {
    if (!topBtn) return;
    topBtn.classList.toggle('tts-playing', isPlaying);
    topBtn.setAttribute('title', isPlaying
      ? 'Speaking (Click: Pause · Double-click: Controls)'
      : 'Text-to-Speech (Click: Play · Double-click: Controls)');
  }

  async function requestWakeLock() {
    try {
      if ('wakeLock' in navigator && !wakeLock) {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', function () { wakeLock = null; });
      }
    } catch (_) {}
  }

  function releaseWakeLock() {
    if (wakeLock) {
      try { wakeLock.release(); } catch (_) {}
      wakeLock = null;
    }
  }

  /* ── Audio Engine ─────────────────────────────────────────────────────── */
  function initAudio() {
    if (audio) return;
    audio = new Audio();
    audio.preload = 'auto';

    audio.addEventListener('timeupdate', function () {
      if (!audio.duration || !isFinite(audio.duration)) return;
      if (progressBar) {
        progressBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
      }
    });

    audio.addEventListener('playing', function () {
      setDotState('playing');
      setPlayIcon(true);
      // As soon as this paragraph is playing, prefetch the NEXT paragraph in background
      prefetchPara(currentIdx + 1);
    });

    audio.addEventListener('waiting', function () {
      setDotState('loading');
    });

    audio.addEventListener('ended', function () {
      if (!isPlaying) return;
      var next = currentIdx + 1;
      if (next < paras.length) {
        playPara(next);
      } else {
        stopAll();
      }
    });

    audio.addEventListener('error', function (e) {
      // If error occurred due to empty src or user abort, ignore
      if (!audio.src || !isPlaying) return;
      console.warn('[tts] audio playback error:', e);
      setDotState('error');
      setLabel('error (tap play)');
      isPlaying = false;
      setPlayIcon(false);
    });
  }

  /* ── Fetch / Pre-buffer Audio ─────────────────────────────────────────── */
  function buildApiUrl(text, vId, sRate) {
    return WORKER_URL + '/tts'
      + '?voice=' + encodeURIComponent(vId)
      + '&rate='  + encodeURIComponent(sRate)
      + '&text='  + encodeURIComponent(text);
  }

  async function fetchAudioBlob(idx, vId, sIdx, signal) {
    var key = getCacheKey(idx, vId, sIdx);
    if (blobCache.has(key)) {
      return blobCache.get(key);
    }
    var text = paras[idx].text;
    var rate = SPEEDS[sIdx].rate;
    var url = buildApiUrl(text, vId, rate);

    var res = await fetch(url, { signal: signal });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var blob = await res.blob();
    var blobUrl = URL.createObjectURL(blob);
    blobCache.set(key, blobUrl);
    return blobUrl;
  }

  function prefetchPara(idx) {
    if (idx < 0 || idx >= paras.length) return;
    var key = getCacheKey(idx, voiceId, speedIdx);
    if (blobCache.has(key)) return;

    if (prefetchController) prefetchController.abort();
    prefetchController = new AbortController();

    fetchAudioBlob(idx, voiceId, speedIdx, prefetchController.signal).catch(function () {
      // Prefetch failure is silent, will retry on actual play
    });
  }

  /* ── Playback Control ─────────────────────────────────────────────────── */
  async function playPara(idx) {
    if (idx < 0 || idx >= paras.length) {
      stopAll();
      return;
    }

    initAudio();
    isPlaying = true;
    currentIdx = idx;
    dock.classList.add('tts-active');
    setHighlight(idx);
    setLabel('' + (idx + 1) + ' / ' + paras.length);
    setDotState('loading');
    setPlayIcon(true);
    requestWakeLock();
    updateMediaSession(idx);

    // Cancel any pending fetch for previous paragraph
    if (activeFetchController) {
      activeFetchController.abort();
    }
    activeFetchController = new AbortController();
    var signal = activeFetchController.signal;

    // Safely stop current audio before switching source
    if (audio.src) {
      try { audio.pause(); } catch (_) {}
    }

    try {
      var blobUrl = await fetchAudioBlob(idx, voiceId, speedIdx, signal);
      if (signal.aborted || currentIdx !== idx) return;

      audio.src = blobUrl;
      audio.playbackRate = [0.75, 1.0, 1.25, 1.5, 2.0][speedIdx] || 1.0;
      currentPlayPromise = audio.play();
      await currentPlayPromise;
      currentPlayPromise = null;
    } catch (err) {
      if (err.name === 'AbortError' || signal.aborted) {
        // User clicked another paragraph, speed, or pause — harmless interruption
        return;
      }
      console.error('[tts] Failed to play paragraph ' + idx + ':', err);
      setDotState('error');
      setLabel('retry');
      isPlaying = false;
      setPlayIcon(false);
    }
  }

  function pauseAudio() {
    isPlaying = false;
    releaseWakeLock();
    if (activeFetchController) {
      activeFetchController.abort();
      activeFetchController = null;
    }
    if (audio) {
      try { audio.pause(); } catch (_) {}
    }
    setPlayIcon(false);
    setDotState('');
    setLabel('paused');
    if (navigator.mediaSession) navigator.mediaSession.playbackState = 'paused';
  }

  function resumeAudio() {
    if (currentIdx < 0 || currentIdx >= paras.length) {
      playPara(0);
    } else {
      if (audio && audio.src && !audio.ended) {
        isPlaying = true;
        setPlayIcon(true);
        setDotState('playing');
        requestWakeLock();
        audio.play().catch(function (err) {
          if (err.name !== 'AbortError') playPara(currentIdx);
        });
      } else {
        playPara(currentIdx);
      }
    }
  }

  function stopAll() {
    isPlaying = false;
    currentIdx = -1;
    releaseWakeLock();
    if (activeFetchController) {
      activeFetchController.abort();
      activeFetchController = null;
    }
    if (prefetchController) {
      prefetchController.abort();
      prefetchController = null;
    }
    if (audio) {
      try {
        audio.pause();
        audio.removeAttribute('src');
      } catch (_) {}
    }
    clearHighlight();
    if (progressBar) progressBar.style.width = '0%';
    setPlayIcon(false);
    setDotState('');
    setLabel('listen');
    dock.classList.remove('tts-active');
    if (navigator.mediaSession) navigator.mediaSession.playbackState = 'none';
  }

  /* ── User Interactions ────────────────────────────────────────────────── */
  function onPlayPause() {
    if (isPlaying) {
      pauseAudio();
    } else {
      resumeAudio();
    }
  }

  function onSpeed() {
    speedIdx = (speedIdx + 1) % SPEEDS.length;
    speedBtn.textContent = SPEEDS[speedIdx].label;
    savePref('tts-speed', speedIdx);

    var mult = [0.75, 1.0, 1.25, 1.5, 2.0][speedIdx] || 1.0;
    if (audio) {
      audio.playbackRate = mult;
    }
  }

  function onVoiceChange() {
    voiceId = voiceSelect.value;
    savePref('tts-voice', voiceId);

    // Voice changed: reload current paragraph with new voice
    if (currentIdx >= 0) {
      if (isPlaying) {
        playPara(currentIdx);
      } else {
        if (audio) audio.removeAttribute('src');
      }
    }
  }

  function attachParaClick() {
    paras.forEach(function (p, idx) {
      p.el.classList.add('tts-para');
      p.el.addEventListener('click', function () {
        playPara(idx);
      });
    });
  }

  /* ── Lock Screen MediaSession ─────────────────────────────────────────── */
  function updateMediaSession(idx) {
    if (!('mediaSession' in navigator)) return;
    var titleEl = document.querySelector('.page-header h2');
    var novelEl = document.querySelector('.back-link a');
    navigator.mediaSession.metadata = new MediaMetadata({
      title: titleEl ? titleEl.textContent.trim() : document.title,
      artist: novelEl ? novelEl.textContent.trim() : 'Viyoga',
      album: 'Viyoga',
    });
    navigator.mediaSession.playbackState = 'playing';
    navigator.mediaSession.setActionHandler('play', function () { resumeAudio(); });
    navigator.mediaSession.setActionHandler('pause', function () { pauseAudio(); });
    navigator.mediaSession.setActionHandler('stop', function () { stopAll(); });
    navigator.mediaSession.setActionHandler('nexttrack', function () {
      if (currentIdx + 1 < paras.length) playPara(currentIdx + 1);
    });
    navigator.mediaSession.setActionHandler('previoustrack', function () {
      if (currentIdx > 0) playPara(currentIdx - 1);
    });
  }

  /* ── DOM Builder ──────────────────────────────────────────────────────── */
  function buildDock() {
    dock = document.createElement('div');
    dock.id = 'tts-dock';
    dock.setAttribute('aria-label', 'Text-to-speech controls');
    dock.innerHTML =
      '<div id="tts-progress-wrap" aria-hidden="true">' +
        '<div id="tts-progress-bar"></div>' +
      '</div>' +
      '<div id="tts-controls">' +
        '<span id="tts-status-dot" aria-hidden="true"></span>' +
        '<button id="tts-prev" type="button" aria-label="Previous Paragraph" title="Previous Paragraph">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true"><polygon points="12,3 5,8 12,13"/><rect x="3" y="3" width="2" height="10"/></svg>' +
        '</button>' +
        '<button id="tts-play" type="button" aria-label="Play / Pause">' +
          '<svg id="tts-icon-play" viewBox="0 0 16 16" aria-hidden="true"><polygon points="4,2 14,8 4,14"/></svg>' +
          '<svg id="tts-icon-pause" viewBox="0 0 16 16" aria-hidden="true" style="display:none"><rect x="3" y="2" width="3.5" height="12"/><rect x="9.5" y="2" width="3.5" height="12"/></svg>' +
        '</button>' +
        '<button id="tts-next" type="button" aria-label="Next Paragraph" title="Next Paragraph">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true"><polygon points="4,3 11,8 4,13"/><rect x="11" y="3" width="2" height="10"/></svg>' +
        '</button>' +
        '<button id="tts-stop" type="button" aria-label="Stop" title="Stop">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3" width="10" height="10"/></svg>' +
        '</button>' +
        '<button id="tts-speed" type="button" aria-label="Speed" title="Speed">' +
          SPEEDS[speedIdx].label +
        '</button>' +
        '<div id="tts-voice-wrap">' +
          '<select id="tts-voice" aria-label="Voice">' +
            VOICES.map(function (v) {
              return '<option value="' + v.id + '"' + (v.id === voiceId ? ' selected' : '') + '>' + v.label + '</option>';
            }).join('') +
          '</select>' +
        '</div>' +
        '<label id="tts-label" aria-live="polite" aria-atomic="true">listen</label>' +
        '<button id="tts-close" type="button" aria-label="Close Controls" title="Hide Bar (Double-click top button to reopen)">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>' +
        '</button>' +
      '</div>';

    document.body.appendChild(dock);

    progressWrap = dock.querySelector('#tts-progress-wrap');
    progressBar  = dock.querySelector('#tts-progress-bar');
    playBtn      = dock.querySelector('#tts-play');
    prevBtn      = dock.querySelector('#tts-prev');
    nextBtn      = dock.querySelector('#tts-next');
    speedBtn     = dock.querySelector('#tts-speed');
    voiceSelect  = dock.querySelector('#tts-voice');
    statusDot    = dock.querySelector('#tts-status-dot');
    labelEl      = dock.querySelector('#tts-label');

    playBtn.addEventListener('click', onPlayPause);
    prevBtn.addEventListener('click', function () { if (currentIdx > 0) playPara(currentIdx - 1); });
    nextBtn.addEventListener('click', function () { if (currentIdx + 1 < paras.length) playPara(currentIdx + 1); });
    dock.querySelector('#tts-stop').addEventListener('click', stopAll);
    speedBtn.addEventListener('click', onSpeed);
    voiceSelect.addEventListener('change', onVoiceChange);

    var closeBtn = dock.querySelector('#tts-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        toggleDock(false);
      });
    }

    progressWrap.addEventListener('click', function (e) {
      var ratio = e.offsetX / progressWrap.offsetWidth;
      var targetIdx = Math.floor(ratio * paras.length);
      playPara(targetIdx);
    });
  }

  /* ── Top Bar Trigger Button ───────────────────────────────────────────── */
  var topBtn = null;
  var topPick = null;

  function buildTopBtn() {
    var fontBtn = document.getElementById('font-btn');
    if (!fontBtn || !fontBtn.parentElement) return;

    topPick = document.createElement('div');
    topPick.className = 'theme-pick';
    topPick.id = 'tts-pick';

    topBtn = document.createElement('button');
    topBtn.className = 'theme-btn';
    topBtn.id = 'tts-top-btn';
    topBtn.type = 'button';
    topBtn.setAttribute('aria-label', 'Text-to-Speech');
    topBtn.setAttribute('title', 'Text-to-Speech (Click: Play · Double-click: Controls)');
    topBtn.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square">' +
        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="none"/>' +
        '<path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>' +
        '<path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>' +
      '</svg>';

    topPick.appendChild(topBtn);
    fontBtn.parentElement.parentElement.insertBefore(topPick, fontBtn.parentElement);

    var clickTimer = null;
    var lastClickTime = 0;

    topBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var now = Date.now();
      if (now - lastClickTime < 320) {
        // Double click / double tap: toggle bottom controls bar!
        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
        }
        lastClickTime = 0;
        toggleDock();
      } else {
        lastClickTime = now;
        clickTimer = setTimeout(function () {
          clickTimer = null;
          lastClickTime = 0;
          onPlayPause();
        }, 280);
      }
    });
  }

  function toggleDock(forceOpen) {
    if (!dock) return;
    var shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !dock.classList.contains('open');
    dock.classList.toggle('open', shouldOpen);
    if (topBtn) topBtn.classList.toggle('tts-open', shouldOpen);
  }

  /* ── Boot ─────────────────────────────────────────────────────────────── */
  function boot() {
    var body = document.querySelector('.chapter-body');
    if (!body) return;

    var allParas = body.querySelectorAll('p');
    allParas.forEach(function (el) {
      var txt = cleanText(el);
      if (txt.length > 5) paras.push({ el: el, text: txt });
    });
    if (paras.length === 0) return;

    buildDock();
    buildTopBtn();
    attachParaClick();

    document.body.classList.add('tts-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
