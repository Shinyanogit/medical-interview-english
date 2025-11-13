import type { VercelRequest, VercelResponse } from "@vercel/node";

const OPENAI_API_BASE =
  process.env.OPENAI_REALTIME_BASE_URL ||
  "https://api.openai.com/v1/realtime";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey =
    req.headers["x-api-key"]?.toString() ||
    process.env.OPENAI_REALTIME_API_KEY;
  if (!apiKey) {
    res
      .status(400)
      .json({ error: "Missing OpenAI API key (X-Api-Key header)" });
    return;
  }

  const model = req.query.model;
  if (typeof model !== "string" || !model.length) {
    res.status(400).json({ error: "Missing model in request path" });
    return;
  }

  const upstreamUrl = `${OPENAI_API_BASE}?model=${encodeURIComponent(model)}`;

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/sdp",
        Authorization: `Bearer ${apiKey}`,
      },
      body: req.body,
    });

    const buffer = Buffer.from(await upstreamResponse.arrayBuffer());

    for (const [key, value] of upstreamResponse.headers.entries()) {
      if (key.toLowerCase() === "content-length") continue;
      res.setHeader(key, value);
    }

    res.status(upstreamResponse.status).send(buffer);
  } catch (error) {
    console.error("OpenAI proxy error:", error);
    res.status(500).json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

