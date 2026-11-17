import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  const rawEmail = (body as { email?: unknown } | null)?.email;
  if (typeof rawEmail !== "string") {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  const email = rawEmail.trim().toLowerCase();
  if (email.length === 0 || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  try {
    const { env } = getCloudflareContext();
    const result = await env.DB.prepare(
      "INSERT OR IGNORE INTO testers (email) VALUES (?)",
    )
      .bind(email)
      .run();
    return NextResponse.json({ ok: true, already: result.meta?.changes === 0 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
