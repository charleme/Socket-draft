import { user } from "./schema.ts";
import postgres from "postgres";
import { env } from "../utils/env.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema.js";
import { fakerFR as faker } from "@faker-js/faker";

const queryClient = postgres(env.DB_URL, { max: 1 });
const db = drizzle(queryClient, { schema });

async function main() {
  const userRequest: Promise<unknown>[] = [];

  for (let i = 0; i < 10; i++) {
    userRequest.push(
      db
        .insert(user)
        .values({
          email: faker.internet.email(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          password: faker.internet.password(), // TODO: encrypt this
        })
        .execute(),
    );
  }

  await Promise.all(userRequest);
}

await main();
console.log(await db.query.user.findMany().execute());

await queryClient.end();
