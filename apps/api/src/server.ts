import fastify from "fastify";
import { tprcRouter } from "./trpc/router.js";
import { createTRPCContext } from "./trpc/trpc.js";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

const server = fastify();

server.get("/ping", async (_request, _reply) => {
  return "pong\n";
});

void server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: tprcRouter,
    createContext: createTRPCContext,
  },
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
