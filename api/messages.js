// Vercel serverless proxy: keeps ANTHROPIC_API_KEY server-side and streams Anthropic's response back.
// Env vars: ANTHROPIC_API_KEY (required), ACCESS_CODE (optional but recommended).

const ALLOWED_MODELS = ['claude-sonnet-5-5', 'claude-opus-5-5', 'claude-haiku-4-5-20251001'];
const MAX_TOKENS_CAP = 8192;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: { message: 'Method not allowed' } });
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(500).json({ error: { message: 'Server is missing ANTHROPIC_API_KEY' } });
    return;
  }
  if (process.env.ACCESS_CODE && req.headers['x-access-code'] !== process.env.ACCESS_CODE) {
    res.status(401).json({ error: { message: 'Invalid access code' } });
    return;
  }

  const { model, system, messages, max_tokens } = req.body || {};
  if (!ALLOWED_MODELS.includes(model) || !Array.isArray(messages)) {
    res.status(400).json({ error: { message: 'Invalid request' } });
    return;
  }

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      system,
      messages,
      max_tokens: Math.min(Number(max_tokens) || 4096, MAX_TOKENS_CAP),
      stream: true,
    }),
  });

  res.status(upstream.status);
  res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-transform');

  const reader = upstream.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(Buffer.from(value));
  }
  res.end();
};
