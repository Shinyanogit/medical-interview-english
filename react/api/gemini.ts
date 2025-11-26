// @ts-nocheck
const GEMINI_API_BASE =
  process.env.GOOGLE_GEMINI_BASE_URL ||
  "https://generativelanguage.googleapis.com/v1beta/models";

async function readBody(req: any): Promise<Buffer> {
  if (req.body) {
    if (typeof req.body === "string") return Buffer.from(req.body);
    if (Buffer.isBuffer(req.body)) return req.body;
  }
  return await new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: any) =>
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    );
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export default async function handler(req: any, res: any) {
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

  // Accept /api/gemini/:model or /api/gemini?model=...
  const pathSegment =
    (req.query.model as string | undefined) ||
    (Array.isArray(req.query.path)
      ? req.query.path.join("/")
      : (req.query.path as string | undefined)) ||
    "";
  if (!pathSegment) {
    res.status(400).json({ error: "Missing model in request path" });
    return;
  }

  const upstreamUrl = `${GEMINI_API_BASE}/${encodeURIComponent(
    pathSegment
  )}:connect?alt=sdp&key=${encodeURIComponent(apiKey)}`;

  try {
    console.log("[react/api/gemini] incoming", {
      method: req.method,
      url: req.url,
      pathSegment,
      hasApiKey: Boolean(apiKey),
      headers: {
        "content-type": req.headers["content-type"],
        "x-api-key": req.headers["x-api-key"] ? "<present>" : "<missing>",
      },
      upstreamUrl,
    });

    const upstreamResponse = await fetch(upstreamUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/sdp",
      },
      body: await readBody(req),
    });

    const status = upstreamResponse.status;
    const ct = upstreamResponse.headers.get("content-type") ?? "";
    if (status >= 400 && ct.includes("application/json")) {
      const text = await upstreamResponse.text();
      console.log("[react/api/gemini] upstream error body", text);
    }

    const buffer = Buffer.from(await upstreamResponse.arrayBuffer());

    for (const [key, value] of upstreamResponse.headers.entries()) {
      if (key.toLowerCase() === "content-length") continue;
      res.setHeader(key, value);
    }

    res.status(upstreamResponse.status);
    res.end(buffer);
  } catch (error) {
    console.error("Gemini proxy error:", error);
    res.status(500).json({
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
