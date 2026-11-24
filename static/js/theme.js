(function() {
  var html = document.documentElement;
  var btn = document.getElementById('theme-btn');
  if (!btn) return;
  // The inline boot script ships the authoritative list so a cached copy of
  // this file can never reject a newly added theme.
  var VALID = (window.__THEMES__ && window.__THEMES__.length)
    ? window.__THEMES__.slice()
    : ['amber', 'zeel', 'safelight', 'tungsten', 'ocean', 'nyctophobia'];
  var DEF = 'safelight';
  var current = html.getAttribute('data-theme') || DEF;
  if (VALID.indexOf(current) < 0) {
    current = DEF;
    html.setAttribute('data-theme', current);
    try { localStorage.setItem('theme', current); } catch (e) {}
  }

  function describe() {
    btn.setAttribute('aria-label', 'Theme: ' + current + ' (click to switch)');
    btn.setAttribute('title', 'Theme: ' + current + ' (click to switch)');
  }

  describe();

  btn.addEventListener('click', function() {
    var idx = VALID.indexOf(current);
    current = VALID[(idx + 1) % VALID.length];
    (window.__themeSwap || function (fn) { fn(); })(function () {
      html.setAttribute('data-theme', current);
      try { localStorage.setItem('theme', current); } catch (err) {}
      describe();
      document.dispatchEvent(new Event('themechange'));
    });
  });
})();
