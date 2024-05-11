import { z } from "zod";

export const env = {
  NEXT_PUBLIC_API_URL: z.string().parse(process.env.NEXT_PUBLIC_API_URL),
  NODE_ENV: z.enum(["development", "production"]).parse(process.env.NODE_ENV),
};
