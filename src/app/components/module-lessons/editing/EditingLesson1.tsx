"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { LessonFooter } from "../LessonFooter";

export default function EditingLesson1() {
  return (
    <>
      <form className="flex w-full mx-auto w-full mb-6">
        <div className="relative w-full">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="text"
            id="simple-search"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Writing"
          />
        </div>
      </form>
      <div className="py-10">
        <Image src="/EditingHeader.png" alt="Editing Header" width={1200} height={400} className="rounded-2xl shadow-md w-full h-auto" />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-8 py-10 max-w-6xl mx-auto gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-snug">
            Time to put on your Editor’s hat, <br />
            Let’s turn those drafts <br />
            from Meh to <span className="underline decoration-asu-gold font-extrabold">Magnificent!</span>
          </h1>

          <p className="text-lg">
            Find every <span className="font-semibold">semicolon</span> and <span className="font-semibold">double-check</span> if it is used
            correctly.
          </p>

          <div className="border rounded-lg shadow-md bg-gray-50 px-4 py-3 text-sm">
            <span className="text-red-500 font-bold">X </span>
            Hi my name is Bob; what’s your name?
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image src="/EditingFrontGraphic.png" alt="EditingFrontGraphic" width={600} height={600} className="max-w-full h-auto" />
        </div>
      </section>
      <div className="max-w-6xl mx-auto border-2 border-black rounded-sm shadow-md">
        <div className="border-b-2 border-black bg-gray-100 py-3 text-center">
          <h2 className="text-xl font-bold">Future Checkpoints to look out for</h2>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="flex sm:flex-col justify-between py-6 px-4 bg-white border-b-2 sm:border-b-0 sm:border-r-2 border-black sm:w-16 shrink-0">
            <div className="w-5 h-5 rounded-full bg-black mb-4 sm:mb-16 mx-auto" />
            <div className="w-5 h-5 rounded-full bg-black mb-4 sm:mb-16 mx-auto" />
            <div className="w-5 h-5 rounded-full bg-black mx-auto" />
          </div>

          <div className="flex-1 p-6 space-y-4">
            <ul className="list-disc list-inside space-y-3">
              <li>
                Find every <span className="font-semibold">semicolon</span> and <span className="font-semibold">double-check</span> if it is
                used correctly.
              </li>
              <li>
                <span className="font-semibold">Highlight every sentence</span> that is more than two lines long. Look for long sentences
                together and edit to add variety.
              </li>
              <li>
                <span className="font-semibold">Review my comma use.</span> Do I have two complete sentences separated by only a comma?
              </li>
              <li>
                Double-check all punctuation where I include <span className="font-semibold">sources and in-text citations</span>.
              </li>
              <li>
                I <span className="font-semibold">only have capital letters</span> where I <span className="font-semibold">start a sentence</span>{" "}
                or use a proper noun.
              </li>
              <li>
                I’ve written in the <span className="font-semibold">same tense</span> throughout my paper (past or present).
              </li>
              <li>
                Search for every usage of the word <span className="font-semibold">“like”</span> and remove any that are used casually.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LessonFooter
        prev={{
          kind: "section",
          id: "revision-5",
          label: (
            <>
              Go Back to Previous Section: <br /> Revision
            </>
          ),
        }}
        next={{
          kind: "section",
          id: "editing-2",
          label: "Continue to Section 1 of Editing",
        }}
      />
    </>
  );
}
