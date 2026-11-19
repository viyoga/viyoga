(function () {
  var D = window.LV_DATA;
  if (!D) return;
  var $ = function (id) { return document.getElementById(id); };
  var base = '/the-lustful-villain-every-milfs-and-gilfs-are-mine/';
  var REX = {
    name: 'Rex Rexilion',
    aka: 'The Lustful Villain, Lord Xerollion',
    bio: 'The narrator and protagonist: a reincarnated cynic who uses the Desire system, Lustia\'s blessing, and a growing network of allies to climb Aethelgard\'s power structure. Publicly branded the Lustful Villain, he later takes the name Lord Xerollion.'
  };
  var current = 1;
  var tab = 'chapter';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function chapterUrl(n) { return base + 'chapter-' + String(n).padStart(3, '0') + '/'; }
  function titleOf(n) { return D.titles[String(n)] || ''; }
  function clamp(n) { return Math.max(D.min, Math.min(D.max, n)); }
  function rangeText(r) { return r[0] === r[1] ? String(r[0]) : r[0] + '\u2013' + r[1]; }

  function chapterLink(n, label) {
    var a = el('a', 'lv-chlink', label == null ? String(n) : label);
    a.href = chapterUrl(n);
    return a;
  }
  function jumpLink(n) {
    var a = el('a', null, String(n));
    a.href = '#ch' + n;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      showChapter(n);
      setTab('chapter');
    });
    return a;
  }

  function setTab(name) {
    tab = name;
    ['chapter', 'chars', 'groups', 'summary'].forEach(function (k) {
      var view = $('lv-view-' + k);
      var btn = $('lv-tab-' + k);
      if (view) view.hidden = k !== name;
      if (btn) btn.setAttribute('aria-selected', k === name ? 'true' : 'false');
    });
    if (name === 'chars') renderChars();
    if (name === 'groups') renderGroups();
    if (name === 'summary') renderSummaryList();
  }

  function showChapter(n) {
    n = clamp(parseInt(n, 10) || 1);
    current = n;
    $('lv-num').value = n;
    try { localStorage.setItem('lv-last', String(n)); } catch (e) {}
    if (location.hash !== '#ch' + n) history.replaceState(null, '', '#ch' + n);
    renderChapter();
    renderSummaryCurrent();
  }

  function renderChapter() {
    var out = $('lv-chapter-out');
    out.textContent = '';
    var n = current;
    var row = D.chapters[String(n)] || [[], []];
    var chars = row[0] || [], orgs = row[1] || [];

    var head = el('div', 'lv-chapter-head');
    var h = el('h2', null, 'Chapter ' + n);
    head.appendChild(h);
    var t = titleOf(n);
    if (t) head.appendChild(el('span', 'lv-chapter-title', t));
    out.appendChild(head);

    if (D.summaries[String(n)]) {
      var sp = el('div', 'lv-panel lv-summary-box');
      sp.appendChild(el('div', 'lv-label', 'SUMMARY'));
      sp.appendChild(el('p', 'lv-summary', D.summaries[String(n)]));
      out.appendChild(sp);
    }

    var read = el('p', 'lv-readline');
    var a = el('a', null, 'Read chapter ' + n + ' \u2192');
    a.href = chapterUrl(n);
    read.appendChild(a);
    out.appendChild(read);

    var main = el('details', 'lv-panel lv-main');
    var ms = el('summary', null, 'Main character: ' + REX.name);
    main.appendChild(ms);
    var mb = el('div', 'lv-main-body');
    mb.appendChild(el('p', 'lv-meta', 'Also called: ' + REX.aka));
    mb.appendChild(el('p', 'lv-bio', REX.bio));
    main.appendChild(mb);
    out.appendChild(main);

    var panel = el('div', 'lv-panel');
    var ul = el('ul', 'lv-list');
    if (!chars.length) {
      ul.appendChild(el('li', 'lv-empty', 'No listed characters detected in this chapter.'));
    }
    var items = chars.map(function (x) { return { c: D.chars[x[0]], k: x[1] }; });
    items.sort(function (a, b) { return ((b.c.first === n) - (a.c.first === n)) || (b.k - a.k); });
    items.forEach(function (o) {
      ul.appendChild(charRow(o.c, o.k, o.c.first === n));
    });
    panel.appendChild(ul);
    out.appendChild(panel);

    if (orgs.length) {
      var d = el('details', 'lv-more lv-panel');
      d.open = true;
      d.appendChild(el('summary', null, 'Groups & terms in this chapter'));
      var box = el('div', 'lv-chips');
      var bio = el('p', 'lv-chipbio');
      bio.hidden = true;
      orgs.forEach(function (x) {
        var org = D.orgs[x[0]];
        var chip = el('button', 'lv-chip', org.name);
        chip.type = 'button';
        chip.addEventListener('click', function () {
          bio.hidden = false;
          bio.textContent = org.bio;
        });
        box.appendChild(chip);
      });
      d.appendChild(box);
      d.appendChild(bio);
      out.appendChild(d);
    }
  }

  function charRow(c, here, isNew) {
    var li = el('li', 'lv-row' + (isNew ? ' is-new' : ''));
    var top = el('div', 'lv-row-top');
    top.appendChild(el('span', 'lv-name', c.name));
    if (c.aka) top.appendChild(el('span', 'lv-aka', c.aka));
    top.appendChild(el('span', 'lv-tag', c.group));
    if (isNew) top.appendChild(el('span', 'lv-new', 'NEW'));
    li.appendChild(top);
    li.appendChild(el('p', 'lv-bio', c.bio));
    var meta = el('p', 'lv-meta');
    meta.appendChild(document.createTextNode('First seen ch. ' + c.first + ' \u00b7 ' + c.count + ' mentions \u00b7 '));
    if (here != null) meta.appendChild(document.createTextNode('appears ' + here + '\u00d7 here \u00b7 '));
    var ranges = el('span', 'lv-ranges');
    c.ranges.slice(0, 8).forEach(function (r, i) {
      if (i) ranges.appendChild(document.createTextNode(' '));
      ranges.appendChild(jumpLink(r[0]));
      if (r[1] !== r[0]) ranges.appendChild(document.createTextNode('\u2013' + r[1]));
    });
    if (c.ranges.length > 8) ranges.appendChild(document.createTextNode(' \u2026'));
    meta.appendChild(ranges);
    li.appendChild(meta);
    return li;
  }

  function renderChars() {
    var q = ($('lv-q').value || '').toLowerCase();
    var grp = $('lv-grp').value;
    var out = $('lv-chars-out');
    out.textContent = '';
    var rows = D.chars.filter(function (c) {
      if (grp && c.group !== grp) return false;
      if (!q) return true;
      return (c.name + ' ' + c.aka + ' ' + c.bio + ' ' + c.group).toLowerCase().indexOf(q) >= 0;
    });
    rows.sort(function (a, b) { return b.count - a.count; });
    if (!rows.length) { out.appendChild(el('li', 'lv-empty', 'No characters match.')); return; }
    rows.forEach(function (c) { out.appendChild(charRow(c, null, false)); });
  }

  function renderGroups() {
    var out = $('lv-groups-out');
    out.textContent = '';
    D.orgs.forEach(function (o) {
      var li = el('li', 'lv-row');
      li.appendChild(el('p', 'lv-name', o.name));
      li.appendChild(el('p', 'lv-bio', o.bio));
      var meta = el('p', 'lv-meta');
      meta.appendChild(document.createTextNode('First seen ch. ' + o.first + ' \u00b7 ' + o.count + ' mentions'));
      li.appendChild(meta);
      out.appendChild(li);
    });
  }

  function renderSummaryCurrent() {
    var out = $('lv-summary-current');
    if (!out) return;
    out.textContent = '';
    var head = el('div', 'lv-chapter-head');
    head.appendChild(el('h2', null, 'Chapter ' + current));
    var t = titleOf(current);
    if (t) head.appendChild(el('span', 'lv-chapter-title', t));
    out.appendChild(head);
    var s = D.summaries[String(current)];
    var box = el('div', 'lv-panel lv-summary-box');
    if (s === undefined) {
      box.appendChild(el('p', 'lv-empty', current > D.sumMax ? 'No summary yet — summaries cover chapters ' + D.sumMin + ' to ' + D.sumMax + '.' : 'No summary for this chapter.'));
    } else {
      box.appendChild(el('div', 'lv-label', 'SUMMARY'));
      box.appendChild(el('p', 'lv-summary', s));
    }
    out.appendChild(box);
  }

  function renderSummaryList() {
    var out = $('lv-summary-list');
    if (!out || out.dataset.done) return;
    out.dataset.done = '1';
    var frag = document.createDocumentFragment();
    for (var n = D.sumMin; n <= D.sumMax; n++) {
      var s = D.summaries[String(n)];
      if (!s) continue;
      var item = el('article', 'lv-sum-item');
      var h = el('h3', null);
      h.appendChild(chapterLink(n, 'Chapter ' + n));
      var t = titleOf(n);
      if (t) h.appendChild(el('span', 'lv-sum-title', ' \u2014 ' + t));
      item.appendChild(h);
      item.appendChild(el('p', 'lv-summary', s));
      frag.appendChild(item);
    }
    out.appendChild(frag);
  }

  function init() {
    var groups = {};
    D.chars.forEach(function (c) { groups[c.group] = 1; });
    var sel = $('lv-grp');
    Object.keys(groups).sort().forEach(function (g) {
      var o = el('option', null, g); o.value = g; sel.appendChild(o);
    });
    sel.addEventListener('change', renderChars);
    $('lv-q').addEventListener('input', renderChars);

    $('lv-tab-chapter').addEventListener('click', function () { setTab('chapter'); });
    $('lv-tab-chars').addEventListener('click', function () { setTab('chars'); });
    $('lv-tab-groups').addEventListener('click', function () { setTab('groups'); });
    $('lv-tab-summary').addEventListener('click', function () { setTab('summary'); });

    $('lv-prev').addEventListener('click', function () { showChapter(current - 1); });
    $('lv-next').addEventListener('click', function () { showChapter(current + 1); });
    $('lv-num').addEventListener('change', function () { showChapter(this.value); });

    var start = 1;
    var h = /#ch(\d+)/.exec(location.hash);
    if (h) start = +h[1];
    else { try { start = parseInt(localStorage.getItem('lv-last'), 10) || 1; } catch (e) {} }
    showChapter(start);
    setTab('chapter');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
