export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;

    // /0 is retired; old links land on the same page with the redesign on.
    if (p === "/0" || p.startsWith("/0/")) {
      let rest = p.slice(2) || "/";

      if (rest === "/novels" || rest === "/novels/") {
        return Response.redirect(url.origin + "/?design=new#notes", 301);
      }
      if (rest.startsWith("/novels/")) {
        rest = "/" + rest.slice("/novels/".length);
      } else if (rest === "/tools" || rest === "/tools/") {
        return Response.redirect(url.origin + "/?design=new#stack", 301);
      } else if (rest.startsWith("/tools/")) {
        rest = "/" + rest.slice("/tools/".length);
      }

      const q = url.search ? url.search + "&design=new" : "?design=new";
      return Response.redirect(url.origin + rest + q, 301);
    }

    return env.ASSETS.fetch(request);
  }
};
