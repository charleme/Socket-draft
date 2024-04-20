import { z } from "zod";

const envSchema = z.object({
  API_PORT: z.coerce.number(),
});

export const env = envSchema.parse(process.env);
