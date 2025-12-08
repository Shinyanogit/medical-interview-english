import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { IncomingMessage, ServerResponse } from "http";

const isProduction = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL;
// Vercel配信時はルート直下に置かれるので base="/" にする。GitHub Pages向けなど
// サブパス配信が必要な場合は従来通りのパスを使う。
const base = isProduction && !isVercel ? "/medical-interview-english/" : "/";

const OPENAI_PROXY_TARGET =
  process.env.OPENAI_REALTIME_BASE_URL ||
  "https://api.openai.com/v1/realtime";
const GEMINI_PROXY_TARGET =
  process.env.GOOGLE_GEMINI_BASE_URL ||
  "https://generativelanguage.googleapis.com/v1beta/models";

function readBody(req: IncomingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk) =>
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    );
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

const devRealtimeProxy = {
  name: "realtime-dev-proxy",
  configureServer(server: any) {
    server.middlewares.use(
      "/api/openai",
      async (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }
        try {
          const requestUrl = new URL(
            req.url ?? "/api/openai",
            "http://localhost"
          );
          const model = requestUrl.searchParams.get("model");
          if (!model) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing model parameter" }));
            return;
          }
          const apiKey = req.headers["x-api-key"];
          if (typeof apiKey !== "string") {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing X-Api-Key header" }));
            return;
          }
          const body = await readBody(req);
          console.log(
            "[proxy/openai] forwarding to",
            `${OPENAI_PROXY_TARGET}?model=${model}`
          );
          const upstream = await fetch(
            `${OPENAI_PROXY_TARGET}?model=${encodeURIComponent(model)}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/sdp",
                Authorization: `Bearer ${apiKey}`,
              },
              body,
            }
          );
          console.log("[proxy/openai] upstream status", upstream.status);
          if (!upstream.ok) {
            const text = await upstream.text();
            console.log("[proxy/openai] upstream body", text);
            res.statusCode = upstream.status;
            res.end(
              JSON.stringify({
                error: "upstream openai error",
                status: upstream.status,
              })
            );
            return;
          }
          const buffer = Buffer.from(await upstream.arrayBuffer());
          res.statusCode = upstream.status;
          upstream.headers.forEach((value, key) => {
            if (key.toLowerCase() === "content-length") return;
            res.setHeader(key, value);
          });
          res.end(buffer);
        } catch (error) {
          console.error("OpenAI dev proxy error:", error);
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              error: error instanceof Error ? error.message : String(error),
            })
          );
        }
      }
    );

    server.middlewares.use(
      "/api/gemini",
      async (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }
        try {
          const requestUrl = new URL(
            req.url ?? "/api/gemini",
            "http://localhost"
          );
          const pathSegment =
            requestUrl.pathname
              .replace(/^\/api\/gemini\/?/, "")
              .replace(/^\/+/, "") ||
            requestUrl.searchParams.get("model") ||
            "";
          if (!pathSegment) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing model path" }));
            return;
          }
          const apiKey = req.headers["x-api-key"];
          if (typeof apiKey !== "string") {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing X-Api-Key header" }));
            return;
          }
          const body = await readBody(req);
          const upstreamUrl = `${GEMINI_PROXY_TARGET}/${pathSegment}:connect?key=${encodeURIComponent(
            apiKey
          )}`;
          console.log("[proxy/gemini] forwarding to", upstreamUrl);
          const upstream = await fetch(
            upstreamUrl,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/sdp",
              },
              body,
            }
          );
          console.log("[proxy/gemini] upstream status", upstream.status);
          if (!upstream.ok) {
            const text = await upstream.text();
            console.log("[proxy/gemini] upstream body", text);
            res.statusCode = upstream.status;
            res.end(
              JSON.stringify({
                error: "upstream gemini error",
                status: upstream.status,
                body: text,
              })
            );
            return;
          }
          const buffer = Buffer.from(await upstream.arrayBuffer());
          res.statusCode = upstream.status;
          upstream.headers.forEach((value, key) => {
            if (key.toLowerCase() === "content-length") return;
            res.setHeader(key, value);
          });
          res.end(buffer);
        } catch (error) {
          console.error("Gemini dev proxy error:", error);
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              error: error instanceof Error ? error.message : String(error),
            })
          );
        }
      }
    );
  },
};

export default defineConfig({
  plugins: [react(), devRealtimeProxy],
  base,
  build: {
    // Vercel デプロイに合わせて常に dist に出力
    outDir: "dist",
    emptyOutDir: true,
  },
});
