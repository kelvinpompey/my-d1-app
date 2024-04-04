import type { Config } from "drizzle-kit";
export default {
  schema: "./src/schema.ts",
  out: "./src/app/db",
  dbCredentials: {
    wranglerConfigPath: "wrangler.toml",
    dbName: "demodb",
  },
  driver: "d1",
} satisfies Config;
