(function () {
  var cleanup = null;

  function init() {
    var toolbar = document.querySelector('[data-chapter-toolbar]');
    var grid = document.querySelector('.chapter-grid');
    if (!toolbar || !grid) return null;

    var search = toolbar.querySelector('[data-chapter-search]');
    var sortBtn = toolbar.querySelector('[data-chapter-sort]');
    var sortLabel = toolbar.querySelector('[data-chapter-sort-label]');
    var sortArrow = toolbar.querySelector('[data-chapter-sort-arrow]');
    var count = toolbar.querySelector('[data-chapter-count]');
    var empty = document.querySelector('[data-chapter-empty]');
    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-chapter-card]'));
    if (!cards.length || !search || !sortBtn || !count) return null;

    var ac = new AbortController();
    var signal = ac.signal;
    var total = cards.length;
    var ascending = true;

    function fmt(n) {
      return Number(n).toLocaleString('en-US');
    }

    function order(card) {
      var n = parseFloat(card.getAttribute('data-order'));
      return isNaN(n) ? 0 : n;
    }

    function applyFilter() {
      var q = (search.value || '').trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var text = (card.getAttribute('data-chapter-text') || '').toLowerCase();
        var match = !q || text.indexOf(q) !== -1;
        card.hidden = !match;
        if (match) shown++;
      });
      count.textContent = shown === total ? fmt(total) + ' shown' : fmt(shown) + ' / ' + fmt(total);
      if (empty) empty.hidden = shown !== 0;
    }

    function applySort() {
      cards.sort(function (a, b) {
        var d = order(a) - order(b);
        return ascending ? d : -d;
      });
      var frag = document.createDocumentFragment();
      cards.forEach(function (card) { frag.appendChild(card); });
      grid.appendChild(frag);
      applyFilter();
    }

    sortBtn.addEventListener('click', function () {
      ascending = !ascending;
      if (sortLabel) sortLabel.textContent = ascending ? 'oldest first' : 'newest first';
      if (sortArrow) sortArrow.textContent = ascending ? '↑' : '↓';
      sortBtn.setAttribute('aria-pressed', ascending ? 'false' : 'true');
      applySort();
    }, { signal: signal });

    search.addEventListener('input', applyFilter, { signal: signal });

    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || e.defaultPrevented) return;
      var tag = (document.activeElement && document.activeElement.tagName) || '';
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
      e.preventDefault();
      search.focus();
    }, { signal: signal });

    toolbar.classList.add('is-ready');
    applySort();

    return function destroy() {
      ac.abort();
      toolbar.classList.remove('is-ready');
    };
  }

  function start() {
    stop();
    cleanup = init();
  }

  function stop() {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
  }

  if (window.ViyogaPage) {
    window.ViyogaPage.register('chapter-tools', { init: start, destroy: stop });
  } else {
    start();
  }
})();
