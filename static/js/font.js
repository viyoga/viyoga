(function() {
  var html = document.documentElement;
  var btn = document.getElementById('font-btn');
  if (!btn || !window.createPicker) return;

  /* Faces that set the whole site. */
  var FACES = [
    { id: 'maple', label: 'Maple Mono', css: '"Maple Mono NF", monospace' },
    { id: 'iosevka', label: 'Iosevka', css: '"Iosevka", monospace' },
    { id: 'space', label: 'Space Mono', css: '"Space Mono", monospace' }
  ];
  /* Faces that only ever reach the prose column. The stylesheet that declares
     them is linked from page.html alone, so off a chapter these are inert. */
  var READING = [
    { id: 'literata', label: 'Literata', css: '"Literata", serif' },
    { id: 'libron', label: 'Libron', css: '"Libron", serif' },
    { id: 'opendyslexic', label: 'OpenDyslexic', css: '"OpenDyslexic", sans-serif' }
  ];

  function byId(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  var isReading = document.body.classList.contains('reading');
  var current = html.getAttribute('data-font') || 'iosevka';
  if (!byId(FACES, current)) {
    current = 'iosevka';
    html.setAttribute('data-font', current);
    try { localStorage.setItem('font', current); } catch (e) {}
  }
  var currentRead = html.getAttribute('data-reading-font') || 'default';
  if (currentRead !== 'default' && !byId(READING, currentRead)) {
    currentRead = 'default';
    html.setAttribute('data-reading-font', currentRead);
  }

  function describe() {
    var text = isReading && currentRead !== 'default'
      ? 'Reading font: ' + byId(READING, currentRead).label
      : 'Typeface: ' + byId(FACES, current).label;
    btn.setAttribute('aria-label', text + ' (click for options)');
    btn.setAttribute('title', text + ' (click for options)');
  }

  function setInterface(id) {
    current = id;
    html.setAttribute('data-font', id);
    try { localStorage.setItem('font', id); } catch (e) {}
    describe();
    document.dispatchEvent(new Event('fontchange'));
  }

  function setReading(id) {
    currentRead = id;
    html.setAttribute('data-reading-font', id);
    try { localStorage.setItem('reading-font', id); } catch (e) {}
    describe();
    document.dispatchEvent(new Event('fontchange'));
  }

  describe();

  window.createPicker({
    button: btn,
    label: 'Typeface',
    groups: function() {
      var groups = [{
        label: 'Interface',
        items: FACES.map(function(f) {
          return {
            id: f.id, label: f.label, css: f.css, active: current === f.id,
            onPick: function() { setInterface(f.id); }
          };
        })
      }];
      if (isReading) {
        groups.push({
          label: 'Reading',
          items: [{
            id: 'default', label: 'Match interface',
            note: byId(FACES, current).label,
            active: currentRead === 'default',
            onPick: function() { setReading('default'); }
          }].concat(READING.map(function(f) {
            return {
              id: f.id, label: f.label, css: f.css, active: currentRead === f.id,
              onPick: function() { setReading(f.id); }
            };
          }))
        });
      }
      return groups;
    }
  });
})();
