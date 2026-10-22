(function() {
  var html = document.documentElement;
  var btn = document.getElementById('theme-btn');
  if (!btn || !window.createPicker) return;

  /* The inline boot script ships the authoritative list so a cached copy of
     this file can never reject a newly added theme. */
  var VALID = (window.__THEMES__ && window.__THEMES__.length)
    ? window.__THEMES__.slice()
    : ['amber', 'mallow', 'safelight', 'tungsten', 'nyctophobia'];
  var DEF = 'safelight';
  var current = html.getAttribute('data-theme') || DEF;
  if (VALID.indexOf(current) < 0) {
    current = DEF;
    html.setAttribute('data-theme', current);
    try { localStorage.setItem('theme', current); } catch (e) {}
  }

  function describe() {
    btn.setAttribute('aria-label', 'Theme: ' + current + ' (click for options)');
    btn.setAttribute('title', 'Theme: ' + current + ' (click for options)');
  }

  describe();

  window.createPicker({
    button: btn,
    label: 'Theme',
    groups: function() {
      return [{
        label: 'Theme',
        items: VALID.map(function(id) {
          return {
            id: id, label: id, swatch: id, active: id === current,
            onPick: function() {
              current = id;
              html.setAttribute('data-theme', id);
              try { localStorage.setItem('theme', id); } catch (err) {}
              describe();
              document.dispatchEvent(new Event('themechange'));
            }
          };
        })
      }];
    }
  });
})();
