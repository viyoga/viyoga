(function () {
  var cleanup = null;

  function init() {
    var head = document.querySelector(".chapter-head");
    var bar = document.querySelector(".chapter-bar");
    if (!head || !bar) return null;

    var root = document.documentElement;
    var nav = document.querySelector("nav.top");
    var auto = false;
    var tucked = false;
    var lastY = window.pageYOffset || 0;
    var lastTap = 0;
    var lastTouchToggle = 0;
    var tapX = 0;
    var tapY = 0;
    var ticking = false;
    var rafId = 0;
    var ro = null;
    var ac = new AbortController();
    var signal = ac.signal;

    function navHeight() {
      if (!nav) return 0;
      var cs = window.getComputedStyle(nav);
      if (cs.display === "none" || cs.visibility === "hidden") return 0;
      return Math.round(nav.getBoundingClientRect().height);
    }

    function syncTop() {
      root.style.setProperty("--chapter-sticky-top", navHeight() + "px");
    }

    function show() {
      if (!tucked) return;
      tucked = false;
      head.classList.remove("is-tucked");
    }

    function hide() {
      if (!auto || tucked) return;
      tucked = true;
      head.classList.add("is-tucked");
    }

    function setAuto(on) {
      auto = on;
      document.body.classList.toggle("chapter-autohide", auto);
      if (!auto) {
        show();
        lastY = window.pageYOffset || 0;
      } else if ((window.pageYOffset || 0) > 8) {
        hide();
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(function () {
        ticking = false;
        var y = window.pageYOffset || 0;
        if (!auto || y <= 8) {
          show();
        } else if (y > lastY + 6) {
          hide();
        }
        lastY = y;
      });
    }

    function interactive(target) {
      return !!(target && target.closest && target.closest("a, button, input, textarea, select, label, [role='button'], .chapter-bar-title"));
    }

    function toggle() {
      setAuto(!auto);
    }

    bar.addEventListener("dblclick", function (e) {
      if (Date.now() - lastTouchToggle < 500) return;
      if (!interactive(e.target)) toggle();
    }, { signal: signal });

    bar.addEventListener("pointerup", function (e) {
      if (e.pointerType !== "touch" || interactive(e.target)) return;
      var now = Date.now();
      if (now - lastTap < 360 && Math.abs(e.clientX - tapX) < 28 && Math.abs(e.clientY - tapY) < 28) {
        lastTap = 0;
        lastTouchToggle = now;
        toggle();
      } else {
        lastTap = now;
        tapX = e.clientX;
        tapY = e.clientY;
      }
    }, { passive: true, signal: signal });

    window.addEventListener("scroll", onScroll, { passive: true, signal: signal });
    window.addEventListener("resize", syncTop, { passive: true, signal: signal });
    window.addEventListener("load", syncTop, { signal: signal });
    if (window.ResizeObserver && nav) {
      ro = new ResizeObserver(syncTop);
      ro.observe(nav);
    }

    syncTop();
    lastY = window.pageYOffset || 0;

    return function destroy() {
      ac.abort();
      if (rafId) cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      document.body.classList.remove("chapter-autohide");
      head.classList.remove("is-tucked");
      root.style.removeProperty("--chapter-sticky-top");
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
    window.ViyogaPage.register('chapter-bar', { init: start, destroy: stop });
  } else {
    start();
  }
})();
