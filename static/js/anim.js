(function() {
  var doc = document;
  /* scroll progress bar */
  var bar = doc.getElementById('scroll-bar');
  function updateBar() {
    var st = window.pageYOffset || doc.documentElement.scrollTop || 0;
    var sh = doc.documentElement.scrollHeight - doc.documentElement.clientHeight;
    // scaleX keeps the bar on the compositor (no layout/paint per scroll).
    if (bar) bar.style.transform = 'scaleX(' + (sh > 0 ? st / sh : 0) + ')';
  }
  if (bar) {
    window.addEventListener('scroll', updateBar, { passive: true });
    window.addEventListener('resize', updateBar);
    updateBar();
  }

  /* stat counters */
  var counts = doc.querySelectorAll('.stat-count');
  function animateCount(targetEl) {
    var target = parseInt(targetEl.getAttribute('data-count'), 10) || 0;
    var dur = 900;
    var start = null;
    function frame(now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      targetEl.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  for (var c = 0; c < counts.length; c++) {
    (function(el) {
      var io2 = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            animateCount(el);
            io2.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      io2.observe(el);
    })(counts[c]);
  }

  /* image skeleton shimmer cleanup when loaded */
  var imgs = doc.querySelectorAll('.chapter-illustration img, .illustrations-gallery img');
  imgs.forEach(function(img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function() {
        img.classList.add('loaded');
      }, { once: true });
    }
  });

  /* low connection detection & adaptive indicator */
  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (conn) {
    var isSlow = conn.saveData || (conn.effectiveType && (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g'));
    if (isSlow) {
      doc.documentElement.classList.add('low-conn');
      var notice = doc.createElement('div');
      notice.id = 'conn-notice';
      notice.className = 'conn-notice';
      notice.setAttribute('role', 'status');
      notice.innerHTML = '<span class="conn-dot"></span> Low connection detected &mdash; skeleton placeholders active';
      var topNav = doc.querySelector('nav.top');
      if (topNav && topNav.parentNode) {
        topNav.parentNode.insertBefore(notice, topNav.nextSibling);
      }
    }
  }
})();
