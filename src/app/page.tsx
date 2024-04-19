import { getWords } from "@/lib/word";

export default async function Home() {
  const options = await getWords();

  return (
    <>
      <div className="rounded-2xl bg-white p-4 drop-shadow-2xl">
        <div className="flex flex-col gap-3 rounded-xl border-2 border-slate-300 p-3">
          {options.map(({ word, num }) => (
            <div
              key={word + num}
              className="flex items-center gap-2 rounded-lg border border-slate-200 p-1"
            >
              <div className="w-8 rounded-xl border border-slate-200 p-1 font-mono text-sm">
                {num}
              </div>
              <div>{word}</div>
            </div>
          ))}
          <div>..</div>
        </div>
      </div>
    </>
  );
}
