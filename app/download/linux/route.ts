import { getCloudflareContext } from "@opennextjs/cloudflare";

const KEY = "Mousify-x86_64.AppImage";

export async function GET() {
  try {
    const { env } = getCloudflareContext();
    const object = await env.DOWNLOADS.get(KEY);
    if (!object) {
      return new Response("Not found", { status: 404 });
    }
    const headers = new Headers({
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${KEY}"`,
    });
    if (object.size != null) {
      headers.set("Content-Length", String(object.size));
    }
    return new Response(object.body, { headers });
  } catch {
    return new Response("Something went wrong", { status: 500 });
  }
}
