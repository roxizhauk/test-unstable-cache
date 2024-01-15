"use server";

import { db } from "@/db";
import { unstable_cache, revalidateTag } from "next/cache";

export const getWords = unstable_cache(
  async () =>
    await db.query.words.findMany({
      columns: { word: true, num: true },
      orderBy: ({ num }, { desc }) => [desc(num)],
    }),
  [],
  { tags: ["words"] },
);

// export const getWordsAsc = async () =>
//   await db.query.words.findMany({
//     columns: { word: true, num: true },
//     orderBy: ({ num }, { asc }) => [asc(num)],
//   });

export const revalidate = () => {
  revalidateTag("words");
};
