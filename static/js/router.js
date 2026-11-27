/* Client-side navigation for reading/content pages.
   App/tool pages intentionally stay on normal full-page navigation so their
   module state and timers are always torn down by the browser. */
(function () {
  'use strict';

  var APP_PATH = /^\/(?:dictionary|studio|walldiff|typing|tool1|abeyant)(?:\/|$)/;
  var APP_NESTED = /\/(?:family-tree|character-list)(?:\/|$)/;

  function isAppPath(url) {
    var path;
    try {
      path = new URL(url, window.location.href).pathname;
    } catch (err) {
      path = String(url || '').split(/[?#]/)[0];
    }
    return APP_PATH.test(path) || APP_NESTED.test(path);
  }

  function syncLenis() {
    if (!window.__lenis) return;
    window.__lenis.resize();
    window.__lenis.scrollTo(window.scrollY || window.pageYOffset || 0, {
      immediate: true,
      force: true
    });
  }

  if (window.Swup && document.body.classList.contains('content-page')) {
    var plugins = [];
    if (window.SwupPreloadPlugin) {
      plugins.push(new window.SwupPreloadPlugin({
        preloadInitialPage: false,
        preloadHoveredLinks: true,
        preloadVisibleLinks: {
          enabled: true,
          threshold: 0.15,
          delay: 450,
          containers: ['#swup']
        }
      }));
    }
    if (window.SwupHeadPlugin) {
      plugins.push(new window.SwupHeadPlugin({
        persistAssets: true,
        awaitAssets: false
      }));
    }
    if (window.SwupBodyClassPlugin) {
      plugins.push(new window.SwupBodyClassPlugin());
    }

    var swup = new window.Swup({
      containers: ['#swup'],
      animationSelector: '[class*="transition-"]',
      cache: true,
      ignoreVisit: function (url, opts) {
        var el = opts && opts.el;
        if (el) {
          if (el.closest && el.closest('[data-no-swup]')) return true;
          if (el.target === '_blank') return true;
          if (el.hasAttribute && el.hasAttribute('download')) return true;
        }
        return isAppPath(url);
      },
      plugins: plugins
    });

    window.__viyogaSwup = swup;

    swup.hooks.before('content:replace', function () {
      if (window.ViyogaPage) window.ViyogaPage.destroyAll();
    });

    swup.hooks.on('page:view', function () {
      if (window.ViyogaPage) window.ViyogaPage.refresh();
      if (window.__refreshDesignOverrides) window.__refreshDesignOverrides();
      syncLenis();
    });

    swup.hooks.on('visit:end', function () {
      if (window.__lenis) window.__lenis.resize();
    });
  }

  if (window.ViyogaPage) {
    window.ViyogaPage.boot();
    if (window.__refreshDesignOverrides) window.__refreshDesignOverrides();
  }
})();
