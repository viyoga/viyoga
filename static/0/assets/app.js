(function () {
  'use strict';

  var PREFIX = '/0';
  var app = document.getElementById('app');
  var DATA = null;
  var cache = new Map();

  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  var norm = function (p) {
    if (!p) return '/';
    p = p.replace(/\/{2,}/g, '/');
    if (p.length > 1) p = p.replace(/\/+$/, '');
    return p;
  };

  var abs = function (href) {
    if (!href) return '#';
    if (/^https?:/i.test(href)) return href;
    return href.charAt(0) === '/' ? href : '/' + href;
  };

  var parentPath = function (p) {
    p = norm(p);
    var i = p.lastIndexOf('/');
    return i <= 0 ? '/' : p.slice(0, i + 1);
  };

  var loading = function () {
    return '<div class="loading"><span class="spinner"></span>loading…</div>';
  };

  var fetchText = function (url) {
    if (cache.has(url)) return Promise.resolve(cache.get(url));
    return fetch(url, { credentials: 'same-origin' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text().then(function (t) {
        cache.set(url, t);
        return t;
      });
    });
  };

  var getData = function () {
    if (DATA) return Promise.resolve(DATA);
    var inline = document.getElementById('v0-data');
    if (inline) {
      try {
        DATA = JSON.parse(inline.textContent);
        return Promise.resolve(DATA);
      } catch (e) {}
    }
    return fetch(PREFIX + '/assets/data.json', { credentials: 'same-origin' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (d) {
        DATA = d;
        return d;
      });
  };

  var parse = function (html) {
    return new DOMParser().parseFromString(html, 'text/html');
  };

  var setTitle = function (t) {
    document.title = t ? t + ' — viyoga /0' : 'viyoga /0';
  };

  var top = function () {
    try { window.scrollTo(0, 0); } catch (e) {}
  };

  var novelFor = function (path) {
    if (!DATA || !DATA.novels) return null;
    var best = null;
    DATA.novels.forEach(function (n) {
      if (path.indexOf(n.path) === 0 && (!best || n.path.length > best.path.length)) best = n;
    });
    return best;
  };

  var novelCard = function (n) {
    return '<a class="card" data-link href="' + PREFIX + '/novels' + esc(n.path) + '">' +
      '<h3>' + esc(n.title) + '</h3>' +
      '<div class="meta">' + esc(n.author || 'unknown') + ' · ' + esc(n.chapters) + '</div>' +
      '<p>' + esc(n.summary) + '</p>' +
      '<span class="tag">book ' + esc(n.book) + '</span>' +
      '</a>';
  };

  var toolCard = function (t) {
    var ext = t.external || /^https?:/i.test(t.path);
    return '<a class="card"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') +
      ' href="' + esc(t.path) + '">' +
      '<h3>' + esc(t.title) + '</h3>' +
      '<div class="meta">' + esc(t.kicker || 'tool') + '</div>' +
      '<p>' + esc(t.desc) + '</p>' +
      '</a>';
  };

  var novelsSection = function (novels, label) {
    return '<section class="section">' +
      '<div class="section-head"><h2>' + esc(label) + '</h2><span class="count">' + novels.length + ' titles</span></div>' +
      '<div class="grid">' + novels.map(novelCard).join('') + '</div>' +
      '</section>';
  };

  var toolsSection = function (tools) {
    return '<section class="section">' +
      '<div class="section-head"><h2>tools</h2><span class="count">' + tools.length + ' tools</span></div>' +
      '<div class="grid">' + tools.map(toolCard).join('') + '</div>' +
      '</section>';
  };

  var renderHome = function () {
    app.innerHTML = loading();
    getData().then(function (d) {
      app.innerHTML =
        '<section class="hero">' +
          '<h1>viyoga<em>/0</em></h1>' +
          '<p>Solid. Plain. Simple. A square-cornered reading room for the archive — three themes, three fonts, no glass.</p>' +
          '<span class="kbd">caelus · catppuccin mocha · dracula</span>' +
        '</section>' +
        novelsSection(d.novels, 'novels') +
        toolsSection(d.tools);
      setTitle('home');
      top();
    }).catch(function (e) {
      renderError(e);
    });
  };

  var renderNovels = function () {
    app.innerHTML = loading();
    getData().then(function (d) {
      app.innerHTML =
        '<section class="hero"><h1>novels</h1><p>Every book in the archive. Pick one and read.</p></section>' +
        novelsSection(d.novels, 'all novels');
      setTitle('novels');
      top();
    }).catch(function (e) {
      renderError(e);
    });
  };

  var renderTools = function () {
    app.innerHTML = loading();
    getData().then(function (d) {
      app.innerHTML =
        '<section class="hero"><h1>tools</h1><p>Client-side tools. They open on the original UI.</p></section>' +
        toolsSection(d.tools);
      setTitle('tools');
      top();
    }).catch(function (e) {
      renderError(e);
    });
  };

  var renderNovel = function (target, doc) {
    var cards = Array.prototype.slice.call(doc.querySelectorAll('a.chapter-card'));
    var titleEl = doc.querySelector('.novel-hero-title');
    var title = titleEl ? titleEl.textContent.trim() : '';
    var novel = novelFor(target);
    if (!title) title = novel ? novel.title : target;
    var summaryEl = doc.querySelector('.novel-hero-quote .quote-text');
    var summary = summaryEl ? summaryEl.textContent.trim() : '';
    var back = novel && norm(target) === norm(novel.path)
      ? PREFIX + '/novels/'
      : PREFIX + '/novels' + parentPath(target);

    var items = cards.map(function (c) {
      var href = abs(c.getAttribute('href'));
      var numEl = c.querySelector('.chapter-num');
      var titleEl2 = c.querySelector('.chapter-card-title');
      var num = numEl ? numEl.textContent.trim() : '';
      var label = titleEl2 ? titleEl2.textContent.trim() : href;
      return '<a class="chapter" data-link href="' + PREFIX + '/novels' + esc(href) + '">' +
        '<span class="n">' + esc(num) + '</span>' +
        '<span class="t">' + esc(label) + '</span>' +
        '</a>';
    }).join('');

    var meta = [];
    if (novel && novel.author) meta.push(novel.author);
    if (novel && novel.chapters) meta.push(novel.chapters);
    if (!meta.length) meta.push(cards.length + ' chapters');

    app.innerHTML =
      '<header class="novel-head">' +
        '<p class="crumbs"><a data-link href="' + PREFIX + '/novels/">novels</a> /</p>' +
        '<h1>' + esc(title) + '</h1>' +
        '<div class="meta">' + esc(meta.join(' · ')) + '</div>' +
        (summary ? '<p class="summary">' + esc(summary) + '</p>' : '') +
      '</header>' +
      '<div class="chapters">' + items + '</div>';

    setTitle(title);
    top();
  };

  var renderChapter = function (target, doc) {
    var body = doc.querySelector('.chapter-body');
    if (!body) return renderNotFound();
    var nameEl = doc.querySelector('.chapter-name');
    var barEl = doc.querySelector('.chapter-bar-title');
    var name = nameEl ? nameEl.textContent.trim() : '';
    var bar = barEl ? barEl.textContent.trim() : '';
    var prev = doc.querySelector('a.chapter-bar-prev');
    var next = doc.querySelector('a.chapter-bar-next');
    var parent = parentPath(target);
    var novel = novelFor(target);
    var back = PREFIX + '/novels' + parent;

    var frag = document.createElement('div');
    frag.innerHTML = body.innerHTML;
    var dupName = frag.querySelector('.chapter-name');
    if (dupName) dupName.remove();
    Array.prototype.forEach.call(frag.querySelectorAll('img[src], a[href]'), function (el) {
      var attr = el.hasAttribute('src') ? 'src' : 'href';
      var v = el.getAttribute(attr);
      if (!v) return;
      if (/^(https?:|mailto:|#|\/)/i.test(v)) return;
      el.setAttribute(attr, '/' + v.replace(/^\.?\//, ''));
    });

    var prevLink = prev
      ? '<a data-link href="' + PREFIX + '/novels' + esc(abs(prev.getAttribute('href'))) + '">← prev</a>'
      : '<span class="off">← prev</span>';
    var nextLink = next
      ? '<a data-link href="' + PREFIX + '/novels' + esc(abs(next.getAttribute('href'))) + '">next →</a>'
      : '<span class="off">next →</span>';

    app.innerHTML =
      '<div class="reader">' +
        '<div class="reader-head">' +
          '<a class="r-title" data-link href="' + esc(back) + '">← ' + esc(novel ? novel.title : 'index') + '</a>' +
          '<div class="reader-nav">' + prevLink + nextLink + '</div>' +
        '</div>' +
        (name ? '<h2 class="chapter-name">' + esc(name) + '</h2>' : '') +
        '<div class="chapter-body">' + frag.innerHTML + '</div>' +
        '<div class="reader-foot">' +
          '<a data-link href="' + esc(back) + '">← back to index</a>' +
          '<span>' + esc(bar) + '</span>' +
        '</div>' +
      '</div>';

    setTitle((bar && name && bar !== name) ? bar + ': ' + name : (name || bar || 'chapter'));
    top();
  };

  var renderTarget = function (target) {
    app.innerHTML = loading();
    fetchText(target).then(function (html) {
      var doc = parse(html);
      if (doc.querySelector('.chapter-body')) return renderChapter(target, doc);
      if (doc.querySelector('.chapter-grid') || doc.querySelector('.novel-hero')) return renderNovel(target, doc);
      renderNotFound();
    }).catch(function (e) {
      renderError(e);
    });
  };

  var renderNotFound = function () {
    app.innerHTML =
      '<div class="error">' +
        '<p>Not found.</p>' +
        '<p><a data-link href="' + PREFIX + '/">← home</a> · <a data-link href="' + PREFIX + '/novels/">novels</a></p>' +
      '</div>';
    setTitle('not found');
    top();
  };

  var renderError = function (e) {
    app.innerHTML =
      '<div class="error">' +
        '<p>Could not load this page' + (e && e.message ? ' (' + esc(e.message) + ')' : '') + '.</p>' +
        '<p><a data-link href="' + PREFIX + '/">← home</a> · <a href="/">old ui</a></p>' +
      '</div>';
    setTitle('error');
    top();
  };

  var route = function () {
    var path = norm(location.pathname);
    if (path === PREFIX) return renderHome();
    if (path === PREFIX + '/novels') return renderNovels();
    if (path.indexOf(PREFIX + '/novels/') === 0) {
      var target = location.pathname.slice((PREFIX + '/novels').length);
      return renderTarget(target);
    }
    if (path === PREFIX + '/tools') return renderTools();
    renderNotFound();
  };

  var initControls = function () {
    var d = document.documentElement;
    var sync = function () {
      Array.prototype.forEach.call(document.querySelectorAll('#theme-switch button'), function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-theme') === d.getAttribute('data-theme')));
      });
      Array.prototype.forEach.call(document.querySelectorAll('#font-switch button'), function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-font') === d.getAttribute('data-font')));
      });
    };

    var ts = document.getElementById('theme-switch');
    if (ts) ts.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-theme]');
      if (!b) return;
      d.setAttribute('data-theme', b.getAttribute('data-theme'));
      try { localStorage.setItem('v0-theme', b.getAttribute('data-theme')); } catch (_) {}
      sync();
    });

    var fs = document.getElementById('font-switch');
    if (fs) fs.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-font]');
      if (!b) return;
      d.setAttribute('data-font', b.getAttribute('data-font'));
      try { localStorage.setItem('v0-font', b.getAttribute('data-font')); } catch (_) {}
      sync();
    });

    sync();
  };

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-link]');
    if (!a) return;
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var href = a.getAttribute('href');
    if (!href || /^https?:/i.test(href) || href.charAt(0) === '#') return;
    e.preventDefault();
    if (href === location.pathname) return route();
    history.pushState(null, '', href);
    route();
  });

  window.addEventListener('popstate', route);

  initControls();
  route();
})();
