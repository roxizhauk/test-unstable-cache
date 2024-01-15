import { NextResponse } from "next/server";
import { getWordsAsc } from "@/lib/word";

export async function GET(req: Request) {
  const data = await getWordsAsc();
  return NextResponse.json(data);
}
