/* A small popover shared by the theme and typeface buttons. Both stay one
   icon in the bar; the menu is built on open so the font list can depend on
   the page (reading faces only exist on chapter pages). */
(function() {
  var open = null;

  function close() {
    if (!open) return;
    open.panel.hidden = true;
    open.btn.setAttribute('aria-expanded', 'false');
    open = null;
  }

  document.addEventListener('pointerdown', function(e) {
    if (open && !open.wrap.contains(e.target)) close();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && open) {
      var btn = open.btn;
      close();
      btn.focus();
    }
  });

  window.createPicker = function(opts) {
    var btn = opts.button;
    var wrap = btn.parentNode;
    var panel = document.createElement('div');
    panel.className = 'picker';
    panel.id = btn.id + '-menu';
    panel.setAttribute('role', 'menu');
    panel.setAttribute('aria-label', opts.label);
    panel.hidden = true;
    wrap.appendChild(panel);

    btn.setAttribute('aria-haspopup', 'menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', panel.id);

    function render() {
      panel.textContent = '';
      opts.groups().forEach(function(group) {
        if (!group.items.length) return;
        var g = document.createElement('div');
        g.className = 'picker-group';
        var label = document.createElement('div');
        label.className = 'picker-label';
        label.textContent = group.label;
        g.appendChild(label);
        group.items.forEach(function(it) {
          var item = document.createElement('button');
          item.type = 'button';
          item.className = 'picker-item' + (it.active ? ' is-active' : '');
          item.setAttribute('role', 'menuitemradio');
          item.setAttribute('aria-checked', it.active ? 'true' : 'false');
          if (it.css) item.style.fontFamily = it.css;
          if (it.swatch) {
            var dot = document.createElement('span');
            dot.className = 'picker-dot';
            dot.setAttribute('data-t', it.swatch);
            dot.setAttribute('aria-hidden', 'true');
            item.appendChild(dot);
          }
          var name = document.createElement('span');
          name.className = 'picker-name';
          name.textContent = it.label;
          item.appendChild(name);
          if (it.note) {
            var note = document.createElement('span');
            note.className = 'picker-note';
            note.textContent = it.note;
            item.appendChild(note);
          }
          if (it.active) {
            var mark = document.createElement('span');
            mark.className = 'picker-mark';
            mark.textContent = '\u2713';
            mark.setAttribute('aria-hidden', 'true');
            item.appendChild(mark);
          }
          item.addEventListener('click', function() {
            var back = btn;
            close();
            it.onPick();
            back.focus();
          });
          g.appendChild(item);
        });
        panel.appendChild(g);
      });
    }

    btn.addEventListener('click', function(e) {
      var wasOpen = open && open.panel === panel;
      close();
      if (wasOpen) return;
      render();
      panel.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      open = { btn: btn, panel: panel, wrap: wrap };
      /* Keyboard activation (detail === 0) moves focus into the menu so the
         arrow keys work at once. A pointer open leaves focus on the button,
         which keeps the focus ring out of the way. */
      if (e.detail === 0) {
        var target = panel.querySelector('.picker-item.is-active') || panel.querySelector('.picker-item');
        if (target) target.focus({ preventScroll: true });
      }
    });

    panel.addEventListener('keydown', function(e) {
      var items = Array.prototype.slice.call(panel.querySelectorAll('.picker-item'));
      if (!items.length) return;
      var i = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        items[(i + 1) % items.length].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        items[(i - 1 + items.length) % items.length].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        items[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        items[items.length - 1].focus();
      }
    });
  };
})();
