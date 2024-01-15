import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  breakpoints: true,
  dbCredentials: {
    uri: process.env.DATABASE_URL!,
  },
} satisfies Config;
