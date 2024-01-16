import { db } from "@/db";
import { unstable_cache } from "next/cache";

export const getWords = unstable_cache(
  async () =>
    await db.query.words.findMany({
      columns: { word: true, num: true },
      orderBy: ({ num }, { desc }) => [desc(num)],
    }),
  ["words"],
  { tags: ["words"] },
);
