(function () {
  if (!/[?&]fps=1(?:&|$)/.test(location.search)) return;

  var box = document.createElement('div');
  box.setAttribute('aria-hidden', 'true');
  box.style.cssText = [
    'position:fixed',
    'left:calc(8px + env(safe-area-inset-left,0px))',
    'bottom:calc(8px + env(safe-area-inset-bottom,0px))',
    'z-index:2147483647',
    'pointer-events:none',
    'padding:7px 9px',
    'border:1px solid rgba(255,255,255,.22)',
    'border-radius:8px',
    'background:rgba(0,0,0,.76)',
    'color:#fff',
    'font:11px/1.45 ui-monospace,SFMono-Regular,Menlo,monospace',
    'letter-spacing:.02em',
    'text-shadow:0 1px 2px #000',
    'white-space:pre',
    'backdrop-filter:none',
    '-webkit-backdrop-filter:none'
  ].join(';');
  document.body.appendChild(box);

  var frames = [];
  var longTasks = 0;
  var last = performance.now();
  var windowStart = last;
  var raf = 0;

  if (window.PerformanceObserver) {
    try {
      new PerformanceObserver(function (list) {
        longTasks += list.getEntries().length;
      }).observe({ entryTypes: ['longtask'] });
    } catch (e) {}
  }

  function pct(list, p) {
    if (!list.length) return 0;
    var sorted = list.slice().sort(function (a, b) { return a - b; });
    return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];
  }

  function tick(now) {
    var dt = now - last;
    last = now;
    if (dt > 0 && dt < 1000) frames.push(dt);

    var span = now - windowStart;
    if (span >= 500) {
      var fps = frames.length * 1000 / span;
      var p95 = pct(frames, 0.95);
      var worst = frames.length ? Math.max.apply(null, frames) : 0;
      box.textContent =
        'FPS ' + fps.toFixed(1) +
        '  p95 ' + p95.toFixed(0) + 'ms' +
        '  max ' + worst.toFixed(0) + 'ms' +
        '\nlong ' + longTasks +
        '  y ' + Math.round(window.scrollY) +
        (document.documentElement.classList.contains('is-scrolling') ? '  scrolling' : '');
      frames = [];
      windowStart = now;
      longTasks = 0;
    }
    raf = requestAnimationFrame(tick);
  }

  raf = requestAnimationFrame(tick);
  window.addEventListener('pagehide', function () { cancelAnimationFrame(raf); }, { once: true });
})();
