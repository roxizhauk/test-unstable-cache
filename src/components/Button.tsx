"use client";

import { revalidate } from "@/lib/word";

export default function Button() {
  return (
    <button
      onClick={() => {
        revalidate();
        console.log("revalidated!");
      }}
    >
      Revalidate
    </button>
  );
}
