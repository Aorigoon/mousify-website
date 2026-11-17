// D1 binding for the closed-testing signup (see wrangler.jsonc).
// Minimal surface for the one query the /api/tester route runs —
// @cloudflare/workers-types is not installed, so no full D1 types here.
interface CloudflareEnv {
  DB: {
    prepare(query: string): {
      bind(...values: unknown[]): {
        run(): Promise<{ meta?: { changes?: number } }>;
      };
    };
  };
}
