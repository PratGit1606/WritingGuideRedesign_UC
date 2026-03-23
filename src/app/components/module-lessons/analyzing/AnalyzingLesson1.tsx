"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { LessonFooter } from "../LessonFooter";

export default function AnalyzingLesson1() {
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
        <Image
          src="/AnalysingHeader.png"
          alt="Analysing Header"
          width={1200}
          height={400}
          className="rounded-2xl shadow-md w-full h-auto"
        />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-8 py-10 max-w-6xl mx-auto gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-snug">
            Time to channel your inner detective, Let’s crack this assignment from <br />
            from Confusion to{" "}
            <span className="underline decoration-asu-gold font-extrabold">Clarity!</span>
          </h1>

          <p className="text-lg">
            Break Down <span className="font-semibold">every part of the assignment</span> and{" "}
            <span className="font-semibold">double-check you understand</span> exactly what’s being asked.
          </p>
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
                I have carefully <span className="font-semibold">read my assignment description</span> and identified the important{" "}
                <span className="font-semibold">verbs and nouns</span>.
              </li>
              <li>
                I understand what <span className="font-semibold">genre or type of writing</span> I am expected to produce.
              </li>
              <li>
                I know who my <span className="font-semibold">audience</span> is and what they need to know to{" "}
                <span className="font-semibold">understand my writing</span>.
              </li>
              <li>
                I can clearly state the <span className="font-semibold">purpose of my assignment</span> and what I am{" "}
                <span className="font-semibold">trying to accomplish</span>.
              </li>
              <li>
                I have reviewed how my assignment will be <span className="font-semibold">graded</span> and know the important{" "}
                <span className="font-semibold">metrics to focus on</span>.
              </li>
              <li>
                I have written down any <span className="font-semibold">questions</span> I still have for my professor so I can get{" "}
                <span className="font-semibold">clarification</span> before I start writing.
              </li>
              <li>
                I feel <span className="font-semibold">confident</span> that I understand what the <span className="font-semibold">assignment</span> is asking me to do.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LessonFooter
        prev={{ kind: "home", label: <>Go Back to Previous Section: <br /> Home</> }}
        next={{
          kind: "section",
          id: "analyzing-2",
          label: "Continue to Section 1 of Analysing",
        }}
      />
    </>
  );
}
