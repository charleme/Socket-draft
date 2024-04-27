import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../utils/env.ts";
import * as schema from "./schema.ts";
export * from "./schema.ts";

const queryClient = postgres(env.DB_URL);
export const db = drizzle(queryClient, { schema });
