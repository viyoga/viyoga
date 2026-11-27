/* Small lifecycle registry for content that is replaced by the client router.
   Page scripts register init/destroy pairs; the registry runs them once on the
   initial page and again after every swup content swap. */
(function () {
  'use strict';

  var modules = [];
  var active = [];
  var booted = false;

  function call(module, method) {
    if (!module || typeof module[method] !== 'function') return;
    try {
      module[method]();
    } catch (err) {
      if (window.console && console.error) {
        console.error('[viyoga] ' + (module.name || 'page module') + ' ' + method, err);
      }
    }
  }

  function register(name, module) {
    if (!name || !module) return;
    for (var i = 0; i < modules.length; i++) {
      if (modules[i].name === name) {
        modules[i].module = module;
        if (booted) call(module, 'init');
        return;
      }
    }
    modules.push({ name: name, module: module });
    if (booted) {
      call(module, 'init');
      active.push(module);
    }
  }

  function destroyAll() {
    for (var i = active.length - 1; i >= 0; i--) {
      call(active[i], 'destroy');
    }
    active = [];
  }

  function refresh() {
    destroyAll();
    for (var i = 0; i < modules.length; i++) {
      var module = modules[i].module;
      call(module, 'init');
      active.push(module);
    }
  }

  function boot() {
    if (booted) return;
    booted = true;
    refresh();
  }

  window.ViyogaPage = {
    register: register,
    refresh: refresh,
    destroyAll: destroyAll,
    boot: boot
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
