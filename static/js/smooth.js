(() => {
  'use strict';

  const root = document.documentElement;

  // Shared "the page is moving" signal. CSS uses it to skip expensive effects
  // mid-scroll; grid.js pauses its canvas loop while it is set.
  let idle;
  function markScrolling() {
    root.classList.add('is-scrolling');
    clearTimeout(idle);
    idle = setTimeout(() => root.classList.remove('is-scrolling'), 140);
  }
  window.addEventListener('scroll', markScrolling, { passive: true });

  // Lenis turns the wheel into an eased target instead of discrete jumps:
  // continuous motion at display refresh is what reads as "buttery" on 60Hz.
  if (!window.Lenis) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lenis = new window.Lenis({
    lerp: 0.11,        // a touch snappier than Lenis' 0.1 default
    wheelMultiplier: 1,
    smoothWheel: true,
    syncTouch: false,  // keep native momentum scrolling on phones
    anchors: true,
  });

  function frame(time) {
    lenis.raf(time);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // Handy for debugging and for anything that needs to drive the scroller.
  window.__lenis = lenis;
})();
