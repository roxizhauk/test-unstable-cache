import { Fragment } from "react";
import { getWords } from "@/lib/word";

export default async function Home() {
  const options = await getWords();

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {options.map(({ word, num }) => (
          <Fragment key={word + num}>
            <div className="rounded border-2 border-purple-400 bg-pink-400 p-1">{num}</div>
            <div>{word}</div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
