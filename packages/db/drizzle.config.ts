import { Config, defineConfig } from "drizzle-kit";
import { env } from "./utils/env.ts";

export default defineConfig({
  schema: "./src/schema.ts",
  out: ".drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DB_URL,
  },
  verbose: true,
  strict: true,
}) satisfies Config;
