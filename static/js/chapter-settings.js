/* Reading settings for phones.
   The site nav is hidden on chapter pages at <=768px, so the theme and font
   buttons live here too. Everything writes to the same storage keys the
   desktop buttons use and fires the same events the canvas layers listen for,
   which keeps a phone and a laptop on one set of preferences. */
(function() {
  var root = document.documentElement;
  var btn = document.getElementById('chapter-settings-btn');
  var panel = document.getElementById('chapter-settings');
  if (!btn || !panel) return;

  var FONTS = ['maple', 'iosevka', 'space'];
  var THEMES = (window.__THEMES__ && window.__THEMES__.length)
    ? window.__THEMES__.slice()
    : ['amber', 'mallow', 'safelight', 'tungsten', 'nyctophobia'];
  var STEPS = [85, 90, 95, 100, 105, 110, 120];
  var DEF_SIZE = 100;

  var fontBtns = panel.querySelectorAll('[data-font-choice]');
  var themeBtns = panel.querySelectorAll('[data-theme-choice]');
  var sizeBtns = panel.querySelectorAll('[data-size-step]');
  var sizeOut = document.getElementById('cs-size-value');

  function store(key, value) {
    try { localStorage.setItem(key, String(value)); } catch (e) {}
  }
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ── Font ── */
  function paintFont(name) {
    for (var i = 0; i < fontBtns.length; i++) {
      fontBtns[i].setAttribute('aria-pressed', fontBtns[i].dataset.fontChoice === name ? 'true' : 'false');
    }
  }
  function setFont(name, announce) {
    if (FONTS.indexOf(name) < 0) name = 'iosevka';
    root.setAttribute('data-font', name);
    store('font', name);
    paintFont(name);
    if (announce) document.dispatchEvent(new Event('fontchange'));
  }

  /* ── Theme ── */
  function paintTheme(name) {
    for (var i = 0; i < themeBtns.length; i++) {
      themeBtns[i].setAttribute('aria-pressed', themeBtns[i].dataset.themeChoice === name ? 'true' : 'false');
    }
  }
  function setTheme(name, announce) {
    if (THEMES.indexOf(name) < 0) name = 'safelight';
    root.setAttribute('data-theme', name);
    store('theme', name);
    paintTheme(name);
    if (announce) document.dispatchEvent(new Event('themechange'));
  }

  /* ── Size ──
     One CSS variable, scoped to the chapter column on phones. Steps rather
     than a slider: three or four taps to a comfortable size, no fiddling. */
  var size = DEF_SIZE;
  var savedSize = parseInt(load('rsize'), 10);
  if (!isNaN(savedSize) && STEPS.indexOf(savedSize) >= 0) size = savedSize;

  function paintSize() {
    root.style.setProperty('--read-scale', String(size / 100));
    if (sizeOut) sizeOut.textContent = size + '%';
    for (var i = 0; i < sizeBtns.length; i++) {
      var dir = Number(sizeBtns[i].dataset.sizeStep);
      var atEnd = dir < 0 ? size <= STEPS[0] : size >= STEPS[STEPS.length - 1];
      sizeBtns[i].disabled = atEnd;
    }
  }
  function stepSize(dir) {
    var i = STEPS.indexOf(size);
    if (i < 0) i = STEPS.indexOf(DEF_SIZE);
    var next = Math.min(STEPS.length - 1, Math.max(0, i + dir));
    if (next === i) return;
    size = STEPS[next];
    store('rsize', size);
    paintSize();
  }

  /* ── Panel ── */
  var openAt = 0;
  function isOpen() { return panel.classList.contains('is-open'); }
  function open() {
    openAt = window.pageYOffset || 0;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
  }

  setFont(root.getAttribute('data-font') || load('font') || 'iosevka', false);
  setTheme(root.getAttribute('data-theme') || load('theme') || 'safelight', false);
  paintSize();

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isOpen()) close(); else open();
  });

  panel.addEventListener('click', function(e) { e.stopPropagation(); });

  document.addEventListener('click', function() {
    if (isOpen()) close();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen()) {
      close();
      btn.focus();
    }
  });
  /* Following a chapter link with the sheet open would leave it open on the
     next page; the browser restores nothing, but a bfcache return can. */
  window.addEventListener('pagehide', close);

  /* The bar scrolls away with the page, so a sheet hanging off it would be
     stranded mid-prose. Dismiss it as soon as the reader moves on. */
  window.addEventListener('scroll', function() {
    if (isOpen() && Math.abs((window.pageYOffset || 0) - openAt) > 24) close();
  }, { passive: true });

  for (var i = 0; i < fontBtns.length; i++) {
    fontBtns[i].addEventListener('click', function() {
      setFont(this.dataset.fontChoice, true);
    });
  }
  for (var j = 0; j < themeBtns.length; j++) {
    themeBtns[j].addEventListener('click', function() {
      setTheme(this.dataset.themeChoice, true);
    });
  }
  for (var k = 0; k < sizeBtns.length; k++) {
    sizeBtns[k].addEventListener('click', function() {
      stepSize(Number(this.dataset.sizeStep));
    });
  }

  // Desktop never shows the sheet; if a resize crosses the breakpoint with it
  // open, drop the state so the hidden markup cannot trap focus.
  var mq = window.matchMedia('(max-width: 768px)');
  var onChange = function() { if (!mq.matches) close(); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
