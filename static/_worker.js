export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const p = url.pathname;
    const isNovels = p === '/0/novels' || p === '/0/novels/' || p.startsWith('/0/novels/');
    const isTools = p === '/0/tools' || p === '/0/tools/' || p.startsWith('/0/tools/');
    if (isNovels || isTools) {
      const indexUrl = new URL('/0/', url.origin);
      let res = await env.ASSETS.fetch(new Request(indexUrl, { method: 'GET' }));
      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get('location');
        if (loc) res = await env.ASSETS.fetch(new Request(new URL(loc, url.origin), { method: 'GET' }));
      }
      const headers = new Headers(res.headers);
      headers.set('content-type', 'text/html; charset=utf-8');
      headers.set('cache-control', 'no-cache');
      return new Response(res.body, { status: 200, headers });
    }
    return env.ASSETS.fetch(request);
  }
};
