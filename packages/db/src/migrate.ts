import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../utils/env.js";

const migrationClient = postgres(env.DB_URL, { max: 1 });

await migrate(drizzle(migrationClient), { migrationsFolder: ".drizzle" });

await migrationClient.end();
