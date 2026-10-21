(() => {
  'use strict';

  // Full-height "lineup" rail, built from the page's own .reveal sections.
  // Any page with 3+ sections gets one; CSS shows it at >=1500px.
  const sections = Array.from(document.querySelectorAll('.reveal[id]'));
  if (sections.length < 3) return;

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function labelFor(el) {
    if (el.id === 'hero') return 'home';
    const h = el.querySelector('.section-heading');
    if (h) {
      const t = h.textContent.replace(/[~/\\|]+/g, ' ').replace(/\s+/g, ' ').trim();
      if (t) return t.toLowerCase();
    }
    return el.id.replace(/-/g, ' ');
  }

  const rail = document.createElement('aside');
  rail.className = 'lineup';
  rail.setAttribute('aria-label', 'Section lineup');
  rail.innerHTML =
    '<div class="lineup-head">' +
      '<span class="lineup-kicker"><span class="lineup-sym">~/</span> viyoga</span>' +
      '<span class="lineup-title">LINEUP</span>' +
    '</div>' +
    '<div class="lineup-body">' +
      '<div class="lineup-list"></div>' +
      '<span class="lineup-ruler" aria-hidden="true"><i></i></span>' +
    '</div>' +
    '<div class="lineup-foot">' +
      '<span class="lineup-count"><b>00</b> / ' + String(sections.length - 1).padStart(2, '0') + '</span>' +
      '<button class="lineup-top" type="button">top ↑</button>' +
    '</div>';
  document.body.appendChild(rail);

  const list = rail.querySelector('.lineup-list');
  const items = sections.map((sec, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'lineup-item';
    b.innerHTML =
      '<span class="lineup-num">' + String(i).padStart(2, '0') + '</span>' +
      '<span class="lineup-name"></span>';
    b.querySelector('.lineup-name').textContent = labelFor(sec);
    b.addEventListener('click', () => {
      if (window.__lenis) window.__lenis.scrollTo(sec, { offset: -70 });
      else sec.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
    list.appendChild(b);
    return b;
  });

  rail.querySelector('.lineup-top').addEventListener('click', () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });

  const countEl = rail.querySelector('.lineup-count b');
  const fill = rail.querySelector('.lineup-ruler i');
  let active = -1;

  function update() {
    const probe = window.scrollY + window.innerHeight * 0.35;
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= probe) idx = i;
    }
    if (idx !== active) {
      active = idx;
      items.forEach((b, i) => {
        if (i === idx) b.setAttribute('aria-current', 'true');
        else b.removeAttribute('aria-current');
        b.classList.toggle('is-past', i < idx);
      });
      countEl.textContent = String(idx).padStart(2, '0');
    }
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.transform = 'scaleY(' + (max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0) + ')';
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', update);

  update();
})();
