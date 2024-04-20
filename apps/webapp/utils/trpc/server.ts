import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { TrpcRouter } from "api";
import SuperJSON from "superjson";

export const api = createTRPCProxyClient<TrpcRouter>({
  transformer: SuperJSON,
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api" + "/trpc",
      fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          authorization: "",
          "x-trpc-source": "rsc",
        };
      },
    }),
  ],
});
