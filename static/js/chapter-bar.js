(function () {
  var head = document.querySelector(".chapter-head");
  var bar = document.querySelector(".chapter-bar");
  if (!head || !bar) return;

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
    window.requestAnimationFrame(function () {
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
  });

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
  }, { passive: true });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", syncTop, { passive: true });
  window.addEventListener("load", syncTop);
  if (window.ResizeObserver && nav) {
    new ResizeObserver(syncTop).observe(nav);
  }

  syncTop();
  lastY = window.pageYOffset || 0;
})();
