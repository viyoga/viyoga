/**
 * Viyoga TTS Worker
 * ─────────────────
 * Proxies text → Microsoft Edge TTS neural voices.
 * Uses edge-tts-universal for the WebSocket session (handles Sec-MS-GEC, MUID, etc.)
 *
 * Endpoint: GET /tts?voice=en-US-JennyNeural&rate=+0%&text=<encoded text>
 * Returns:  audio/mpeg (MP3 stream)
 *
 * Deploy:
 *   cd worker-tts && npx wrangler deploy
 */

import { EdgeTTS } from 'edge-tts-universal';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    /* ── CORS preflight ── */
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    /* ── Health ── */
    if (url.pathname === '/') {
      return new Response(JSON.stringify({ ok: true, service: 'viyoga-tts' }), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      });
    }

    /* ── TTS endpoint ── */
    if (url.pathname !== '/tts') {
      return new Response('Not found', { status: 404, headers: corsHeaders() });
    }

    const text  = url.searchParams.get('text')  || '';
    const voice = url.searchParams.get('voice') || 'en-US-JennyNeural';
    /* rate param is like "+25%" or "-25%" — convert to edge-tts rate string */
    const rate  = url.searchParams.get('rate')  || '+0%';

    if (!text.trim()) {
      return new Response('Missing text', { status: 400, headers: corsHeaders() });
    }
    if (text.length > 8000) {
      return new Response('Text too long (max 8000 chars)', { status: 413, headers: corsHeaders() });
    }

    try {
      const tts    = new EdgeTTS(text, voice, rate);
      const result = await tts.synthesize();
      const buf    = await result.audio.arrayBuffer();

      return new Response(buf, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'public, max-age=3600',
          'Content-Length': String(buf.byteLength),
          ...corsHeaders(),
        },
      });
    } catch (err) {
      console.error('TTS error:', err);
      return new Response('TTS error: ' + (err?.message || String(err)), {
        status: 502,
        headers: corsHeaders(),
      });
    }
  },
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
