const KEY = "Mousify-x86_64.AppImage";
// R2 public (r2.dev) URL — bucket mousify-downloads, Zain ke OWN account.
// Worker se 35 MB stream karne par slow clients par Cloudflare Error 1102
// (Worker exceeded resource limits) aata tha aur site bhi down ho jati thi
// (2026-11-17, v2.7 live check) — is liye download seedha R2 se hota hai.
// User ko sirf /download/linux dikhta hai (redirect browser ke andar hota
// hai); filename URL se hi Mousify-x86_64.AppImage aata hai.
const PUBLIC_BASE =
  "https://pub-1efc0a820909499989fd445b05310151.r2.dev";

export async function GET() {
  return Response.redirect(`${PUBLIC_BASE}/${KEY}`, 302);
}
