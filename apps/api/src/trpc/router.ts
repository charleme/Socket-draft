import { createTRPCRouter } from "./trpc.js";
import { healthRouter } from "./routes/health.js";

export const tprcRouter = createTRPCRouter({
  healthRouter: healthRouter,
});

// export type definition of API
export type TrpcRouter = typeof tprcRouter;
