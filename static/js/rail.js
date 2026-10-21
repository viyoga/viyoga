(() => {
  'use strict';

  // Section index rail: a compact terminal-style "lineup" on the right edge.
  // Built from the page's own .reveal sections, so any page with 3+ sections
  // gets one for free. Hidden by CSS below 1500px.
  const sections = Array.from(document.querySelectorAll('.reveal[id]'));
  if (sections.length < 3) return;

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function labelFor(el, i) {
    if (el.id === 'hero') return 'home';
    const h = el.querySelector('.section-heading');
    if (h) {
      const t = h.textContent.replace(/[~/\\|]+/g, ' ').replace(/\s+/g, ' ').trim();
      if (t) return t.toLowerCase();
    }
    return el.id.replace(/-/g, ' ');
  }

  const rail = document.createElement('nav');
  rail.className = 'section-rail';
  rail.setAttribute('aria-label', 'Section index');

  const head = document.createElement('div');
  head.className = 'rail-head';
  head.innerHTML = '<span class="rail-sym">~/</span> index';
  rail.appendChild(head);

  const list = document.createElement('div');
  list.className = 'rail-list';
  rail.appendChild(list);

  const items = sections.map((sec, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'rail-item';
    b.innerHTML =
      '<span class="rail-num">' + String(i).padStart(2, '0') + '</span>' +
      '<span class="rail-name"></span>' +
      '<span class="rail-rule" aria-hidden="true"></span>';
    b.querySelector('.rail-name').textContent = labelFor(sec, i);
    b.addEventListener('click', () => {
      if (window.__lenis) window.__lenis.scrollTo(sec, { offset: -70 });
      else sec.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    });
    list.appendChild(b);
    return b;
  });

  const foot = document.createElement('div');
  foot.className = 'rail-foot';
  foot.innerHTML =
    '<span class="rail-pos">00</span>' +
    '<span class="rail-sep">/</span>' +
    '<span class="rail-total">' + String(sections.length - 1).padStart(2, '0') + '</span>' +
    '<span class="rail-progress" aria-hidden="true"><i></i></span>';
  rail.appendChild(foot);
  document.body.appendChild(rail);

  const posEl = foot.querySelector('.rail-pos');
  const fill = foot.querySelector('.rail-progress i');
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
      posEl.textContent = String(idx).padStart(2, '0');
    }
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0) + ')';
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
