const KEY = "Mousify-Windows-x86_64.zip";
// R2 public (r2.dev) URL — bucket mousify-downloads, Zain ke OWN account.
// Linux route wala hi pattern: Worker se file stream nahi karni (35 MB
// wali AppImage par Error 1102 + site down ho gaya tha, 2026-11-17) —
// download seedha R2 se hota hai. User ko sirf /download/windows
// dikhta hai (redirect browser ke andar hota hai); filename URL se hi
// Mousify-Windows-x86_64.zip aata hai.
const PUBLIC_BASE =
  "https://pub-1efc0a820909499989fd445b05310151.r2.dev";

export async function GET() {
  return Response.redirect(`${PUBLIC_BASE}/${KEY}`, 302);
}
