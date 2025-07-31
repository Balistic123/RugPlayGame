import { b as PUBLIC_B2_ENDPOINT, P as PUBLIC_B2_BUCKET } from './public-B3YCMw9Q.js';
import { e as error } from './index-DzcLzHBX.js';

async function GET({ params, request }) {
  const path = params.path;
  if (!path) {
    throw error(400, "Path is required");
  }
  try {
    const s3Url = `${PUBLIC_B2_ENDPOINT}/${PUBLIC_B2_BUCKET}/${path}`;
    const response = await fetch(s3Url);
    if (!response.ok) {
      throw error(response.status, "Failed to fetch from S3");
    }
    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const buffer = await response.arrayBuffer();
    let cacheControl;
    if (path.includes("/coin/") || path.includes("coin-icon")) {
      cacheControl = "public, max-age=31536000, immutable";
    } else if (path.includes("/avatars/") || path.includes("profile-") || path.includes("avatar")) {
      cacheControl = "public, max-age=60";
    } else {
      cacheControl = "public, max-age=86400";
    }
    return new Response(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": cacheControl,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  } catch (e) {
    console.error("Proxy error:", e);
    throw error(500, "Failed to proxy S3 request");
  }
}

export { GET };
//# sourceMappingURL=_server.ts-CXQzCB6t.js.map
