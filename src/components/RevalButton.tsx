"use client";

import { revalidate } from "@/lib/word";

export default function RevalButton() {
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
