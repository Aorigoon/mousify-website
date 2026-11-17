// D1 binding for the closed-testing signup (see wrangler.jsonc).
// Minimal surface for the one query the /api/tester route runs —
// @cloudflare/workers-types is not installed, so no full D1 types here.
// Same for the R2 binding: only the get() the /download/linux route uses.
interface CloudflareEnv {
  DB: {
    prepare(query: string): {
      bind(...values: unknown[]): {
        run(): Promise<{ meta?: { changes?: number } }>;
      };
    };
  };
  DOWNLOADS: {
    get(key: string): Promise<{
      body: ReadableStream;
      size?: number;
    } | null>;
  };
}
