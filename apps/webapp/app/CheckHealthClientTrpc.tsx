"use client";

import { api } from "@/utils/trpc/react";

export const CheckHealthClientTrpc = () => {
  const { data } = api.healthRouter.healthCheck.useQuery();
  return <div>client : {data}</div>;
};
