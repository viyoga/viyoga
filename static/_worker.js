const OVERRIDE_CSS = '<link rel="stylesheet" href="/0/assets/override.css?v=20261122a">';
const OVERRIDE_JS = '<script defer src="/0/assets/override.js?v=20261122a"></script>';
const PRELOADS =
  '<link rel="preload" href="/0/assets/fonts/Iosevka-Regular.woff2" as="font" type="font/woff2" crossorigin>' +
  '<link rel="preload" href="/0/assets/fonts/Iosevka-Bold.woff2" as="font" type="font/woff2" crossorigin>';

const HEAD_SCRIPT = `<script>(function(){
  // Keep the replica's preferences separate from the old site's theme/font
  // keys, so visiting /0 never rewrites the / UI's stored choices.
  try {
    var _real = window.localStorage;
    var _map = function (k) {
      return (k === "theme" || k === "font") ? "v0-" + k : k;
    };
    var _wrap = new Proxy(_real, {
      get: function (target, prop) {
        if (prop === "getItem") return function (k) { return target.getItem(_map(k)); };
        if (prop === "setItem") return function (k, v) { return target.setItem(_map(k), v); };
        if (prop === "removeItem") return function (k) { return target.removeItem(_map(k)); };
        if (prop === "clear") return function () { return target.clear(); };
        if (prop === "key") return function (i) { return target.key(i); };
        if (prop === "length") return target.length;
        if (typeof prop === "string" && (prop === "theme" || prop === "font")) {
          return target.getItem(_map(prop));
        }
        return target[prop];
      },
      set: function (target, prop, value) {
        if (typeof prop === "string" && (prop === "theme" || prop === "font")) {
          target.setItem(_map(prop), value);
          return true;
        }
        target[prop] = value;
        return true;
      }
    });
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      get: function () { return _wrap; }
    });
  } catch (e) {}

  var root = document.documentElement;
  var themes = ["amber", "mallow", "safelight"];
  window.__THEMES__ = themes;
  var t = null;
  try { t = new URLSearchParams(window.location.search).get("theme"); } catch (e) {}
  var tmap = {
    caelus: "amber",
    "catppuccin-mocha": "mallow",
    dracula: "safelight",
    amber: "amber",
    mallow: "mallow",
    safelight: "safelight",
    tungsten: "amber",
    nyctophobia: "safelight"
  };
  if (!t) { try { t = localStorage.getItem("theme"); } catch (e) {} }
  if (t && tmap[t]) t = tmap[t];
  if (themes.indexOf(t) < 0) t = "amber";
  root.setAttribute("data-theme", t);
  try { localStorage.setItem("theme", t); } catch (e) {}

  var fonts = ["maple", "iosevka", "space"];
  var f = null;
  try { f = new URLSearchParams(window.location.search).get("font"); } catch (e) {}
  var fmap = {
    annotation: "maple",
    "annotation-mono": "maple",
    maple: "maple",
    iosevka: "iosevka",
    nunito: "space",
    space: "space"
  };
  if (!f) { try { f = localStorage.getItem("font"); } catch (e) {} }
  if (f && fmap[f]) f = fmap[f];
  if (fonts.indexOf(f) < 0) f = "iosevka";
  root.setAttribute("data-font", f);
  try { localStorage.setItem("font", f); } catch (e) {}
})();</script>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;

    if (p.startsWith("/0/assets/")) return env.ASSETS.fetch(request);
    if (p === "/0") return Response.redirect(url.origin + "/0/", 302);

    // Old SPA bookmarks: the replica keeps the old site's flat paths.
    if (p === "/0/novels" || p === "/0/novels/") {
      return Response.redirect(url.origin + "/0/#notes", 302);
    }
    if (p.startsWith("/0/novels/")) {
      return Response.redirect(
        url.origin + "/0/" + p.slice("/0/novels/".length) + url.search,
        302
      );
    }
    if (p === "/0/tools" || p === "/0/tools/") {
      return Response.redirect(url.origin + "/0/#stack", 302);
    }
    if (p.startsWith("/0/tools/")) {
      return Response.redirect(
        url.origin + "/0/" + p.slice("/0/tools/".length) + url.search,
        302
      );
    }

    if (!p.startsWith("/0/")) return env.ASSETS.fetch(request);
    if (request.method !== "GET" && request.method !== "HEAD") {
      return env.ASSETS.fetch(request);
    }

    const oldPath = p.slice(2) || "/";
    const fetchHeaders = new Headers(request.headers);
    fetchHeaders.delete("accept-encoding");
    fetchHeaders.delete("if-none-match");
    fetchHeaders.delete("if-modified-since");

    let res = await env.ASSETS.fetch(
      new Request(new URL(oldPath + url.search, url.origin), {
        method: "GET",
        headers: fetchHeaders
      })
    );

    let hops = 0;
    while (res.status >= 300 && res.status < 400 && hops++ < 5) {
      const loc = res.headers.get("location");
      if (!loc) break;
      res = await env.ASSETS.fetch(
        new Request(new URL(loc, url.origin), {
          method: "GET",
          headers: fetchHeaders
        })
      );
    }

    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("text/html")) return res;

    let html = await res.text();
    html = html.replace(/<a\b([^>]*?)\bhref="\/(?!\/)(?!0\/)/g, '<a$1href="/0/');
    html = html.replace("</head>", PRELOADS + OVERRIDE_CSS + HEAD_SCRIPT + "</head>");
    html = html.replace("</body>", OVERRIDE_JS + "</body>");

    const headers = new Headers(res.headers);
    headers.set("content-type", "text/html; charset=utf-8");
    headers.delete("content-length");
    headers.delete("content-encoding");
    headers.set("cache-control", "no-cache");
    return new Response(html, {
      status: res.status,
      statusText: res.statusText,
      headers
    });
  }
};
