import { createTRPCRouter, publicProcedure } from "../trpc.js";
import { z } from "zod";

export const healthRouter = createTRPCRouter({
  healthCheck: publicProcedure.input(z.void()).query(() => true),
});
