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
    : ['amber', 'zeel', 'safelight', 'tungsten', 'ocean', 'nyctophobia'];

  var fontBtns = panel.querySelectorAll('[data-font-choice]');
  var themeBtns = panel.querySelectorAll('[data-theme-choice]');
  var range = document.getElementById('cs-size');
  var themeName = document.getElementById('cs-theme-name');
  var THEME_LABELS = {
    amber: 'Amber', zeel: 'Zeel', safelight: 'Safelight',
    tungsten: 'Tungsten', ocean: 'Ocean Blue', nyctophobia: 'Nyctophobia'
  };

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
    if (themeName) themeName.textContent = THEME_LABELS[name] || name;
  }
  function setTheme(name, announce) {
    if (THEMES.indexOf(name) < 0) name = 'safelight';
    root.setAttribute('data-theme', name);
    store('theme', name);
    paintTheme(name);
    if (announce) document.dispatchEvent(new Event('themechange'));
  }

  /* ── Size ──
     One CSS variable, scoped to the chapter column on phones. The rail runs
     85–130% in 5% steps; the thumb is the readout, so no numbers are needed. */
  var MIN = 85, MAX = 130, DEF = 100;
  var size = parseInt(load('rsize'), 10);
  if (isNaN(size)) size = DEF;
  size = Math.min(MAX, Math.max(MIN, size));

  function paintSize() {
    root.style.setProperty('--read-scale', String(size / 100));
    if (range) range.value = String(size);
  }
  function setSize(next) {
    next = Math.min(MAX, Math.max(MIN, Math.round(next / 5) * 5));
    if (next === size) return;
    size = next;
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
  if (range) {
    range.addEventListener('input', function() { setSize(Number(this.value)); });
    range.addEventListener('change', function() { setSize(Number(this.value)); });
  }

  // Desktop never shows the sheet; if a resize crosses the breakpoint with it
  // open, drop the state so the hidden markup cannot trap focus.
  var mq = window.matchMedia('(max-width: 768px)');
  var onChange = function() { if (!mq.matches) close(); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
