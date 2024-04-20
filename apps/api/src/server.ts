import fastify from "fastify";
import { tprcRouter } from "./trpc/router.js";
import { createTRPCContext } from "./trpc/trpc.js";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { env } from "./utils/env.js";
import cors from "@fastify/cors";

const server = fastify();

await server.register(cors, {
  // put your options here
});

server.get("/ping", async (_request, _reply) => {
  return "pong\n";
});

await server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: tprcRouter,
    createContext: createTRPCContext,
  },
});

server.listen({ port: env.API_PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
