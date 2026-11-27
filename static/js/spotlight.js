(() => {
  'use strict';

  // Cursor spotlight for glossy boxes (see .spot in style.css).
  // Tracks the pointer per card and exposes it as --mx/--my; the ::before
  // overlay renders a static sheen plus a cursor-following accent glow.
  // Skipped entirely on touch devices (no cursor to follow — the CSS also
  // hides the overlay) and under prefers-reduced-motion.
  const mq = window.matchMedia ? window.matchMedia.bind(window) : null;
  const SEL = '.novel-card,.stack-card,.stat-card,.chapter-card,.grid-item,.terminal,.playlist,.code-block,.dict-result,nav.top,.section-heading,.section-badge,.page-header h2,.chapter-body';

  function attach(el, signal) {
    el.classList.add('spot');

    function track(e) {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }

    el.addEventListener('pointermove', track, { signal });
    // Touch has no hover: light the panel under the finger and hold it while
    // pressed (`.touching` forces the overlay to full opacity).
    el.addEventListener('pointerdown', (e) => {
      track(e);
      el.classList.add('touching');
    }, { signal });
    const release = () => el.classList.remove('touching');
    el.addEventListener('pointerup', release, { signal });
    el.addEventListener('pointercancel', release, { signal });
    el.addEventListener('pointerleave', release, { signal });
  }

  function init() {
    if (mq && mq('(hover: none), (pointer: coarse)').matches) return null;
    if (mq && mq('(prefers-reduced-motion: reduce)').matches) return null;

    const ac = new AbortController();
    document.querySelectorAll(SEL).forEach((el) => attach(el, ac.signal));
    return function destroy() { ac.abort(); };
  }

  let cleanup = null;
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
    window.ViyogaPage.register('spotlight', { init: start, destroy: stop });
  } else {
    start();
  }
})();
