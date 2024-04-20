import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NODE_ENV: z.enum(["development", "production"]),
});

console.log(process.env.NEXT_PUBLIC_API_URL);

export const env = {
  NEXT_PUBLIC_API_URL: z.string().parse(process.env.NEXT_PUBLIC_API_URL),
  NODE_ENV: z.enum(["development", "production"]).parse(process.env.NODE_ENV),
};
