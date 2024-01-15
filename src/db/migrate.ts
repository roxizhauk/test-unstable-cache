import { migrate } from "drizzle-orm/mysql2/migrator";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { config } from "dotenv";
config({ path: ".env.local" });

const main = async () => {
  const connection = await mysql.createConnection({
    uri: process.env.DATABASE_URL!,
    multipleStatements: true,
  });

  try {
    const db = drizzle(connection);
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migration complete!");
  } catch (error) {
    console.error(error);
  } finally {
    await connection.end();
  }
};

main();
