(function () {
  'use strict';

  var clockTimer = null;
  var typeTimer = null;

  function stop() {
    if (clockTimer) {
      clearInterval(clockTimer);
      clockTimer = null;
    }
    if (typeTimer) {
      clearTimeout(typeTimer);
      typeTimer = null;
    }
  }

  function startClock() {
    var clock = document.getElementById('live-clock');
    var date = document.getElementById('live-date');
    if (!clock) return;

    function tick() {
      var d = new Date();
      var opts = { timeZone: 'Asia/Kolkata', hour12: false };
      clock.textContent = d.toLocaleTimeString('en-US', opts);
      if (date) {
        date.textContent = d.toLocaleDateString('en-US', {
          timeZone: 'Asia/Kolkata',
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    }

    tick();
    clockTimer = setInterval(tick, 1000);
  }

  function startTypewriter() {
    var tw = document.getElementById('typewriter');
    var cursor = document.getElementById('cursor');
    var tag = document.querySelector('.tagline');
    if (!tw || !tag) return;

    var chars = Array.from(tw.dataset.text || '');
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function moveCursorBelow() {
      var row = document.getElementById('cursor-row');
      if (cursor) {
        if (row) row.appendChild(cursor);
        cursor.classList.add('below');
      }
    }

    if (reduceMotion || chars.length === 0) {
      tw.textContent = chars.join('');
      moveCursorBelow();
      return;
    }

    var msPerChar = 45;
    var i = 0;

    tw.textContent = '';

    function type() {
      tw.textContent = chars.slice(0, i).join('');
      if (i < chars.length) {
        i++;
        typeTimer = setTimeout(type, msPerChar);
      } else {
        typeTimer = null;
        moveCursorBelow();
      }
    }

    type();
  }

  function init() {
    stop();
    startClock();
    startTypewriter();
  }

  if (window.ViyogaPage) {
    window.ViyogaPage.register('home', { init: init, destroy: stop });
  } else {
    init();
  }
})();
