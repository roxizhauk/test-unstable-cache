import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schema from "./schema";

declare module global {
  let client: ReturnType<typeof connect> | undefined;
}

let client;
if (process.env.NODE_ENV == "production") {
  client = connect({ url: process.env.DATABASE_URL! });
} else {
  if (!global.client) global.client = connect({ url: process.env.DATABASE_URL! });
  client = global.client;
}

export const db = drizzle(client, { schema });
