import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";

export const words = mysqlTable("words", {
  id: int("id").primaryKey().autoincrement(),
  word: varchar("word", { length: 255 }).unique().notNull(),
  num: int("num").unique().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
