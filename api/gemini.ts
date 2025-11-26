import type { VercelRequest, VercelResponse } from "@vercel/node";

// Gemini Live (native audio) proxy for Vercel.
// Follows https://ai.google.dev/gemini-api/docs/live and forwards SDP offers to :connect.
const GEMINI_API_BASE =
  process.env.GOOGLE_GEMINI_BASE_URL ||
  "https://generativelanguage.googleapis.com/v1beta/models";

async function readBody(req: VercelRequest): Promise<Buffer> {
  if (req.body) {
    if (typeof req.body === "string") return Buffer.from(req.body);
    if (Buffer.isBuffer(req.body)) return req.body;
  }
  return await new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) =>
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    );
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey =
    req.headers["x-api-key"]?.toString() ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    res
      .status(400)
      .json({ error: "Missing Gemini API key (X-Api-Key header)" });
    return;
  }

  // Accept both /api/gemini/:model and /api/gemini?model=...
  const pathSegment =
    (req.query.model as string | undefined) ||
    (Array.isArray(req.query.path)
      ? req.query.path.join("/")
      : (req.query.path as string | undefined)) ||
    "";

  const model = pathSegment || "";
  if (!model) {
    res.status(400).json({ error: "Missing model in request path" });
    return;
  }

  const upstreamUrl = `${GEMINI_API_BASE}/${encodeURIComponent(
    model
  )}:connect?alt=sdp&key=${encodeURIComponent(apiKey)}`;

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method: "POST",
      headers: { "Content-Type": "application/sdp" },
      body: await readBody(req),
    });

    const buffer = Buffer.from(await upstreamResponse.arrayBuffer());

    upstreamResponse.headers.forEach((value, key) => {
      if (key.toLowerCase() === "content-length") return;
      res.setHeader(key, value);
    });

    res.status(upstreamResponse.status).send(buffer);
  } catch (error) {
    console.error("Gemini proxy error:", error);
    res.status(500).json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
