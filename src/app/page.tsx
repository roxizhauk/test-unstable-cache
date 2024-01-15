import { Fragment } from "react";
// import { getWords } from "@/lib/word";

export const dynamic = "force-dynamic";
export default async function Home() {
  // const options = await getWords();
  const options: { word: string; num: number }[] = await fetch(
    "https://my-next-lab.vercel.app//api/words",
  ).then((res) => res.json());

  if (!options) return <>Loading...</>;
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {options.map(({ word, num }) => (
          <Fragment key={word + num}>
            <div>{num}</div>
            <div>{word}</div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
