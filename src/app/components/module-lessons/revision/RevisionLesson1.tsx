"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { LessonFooter } from "../LessonFooter";

export default function RevisionLesson1() {
  return (
    <>
      <form className="flex w-full mx-auto mb-6">
        <div className="relative w-full">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="text"
            id="revision-search"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Search revision tips..."
          />
        </div>
      </form>


      <div className="py-10">
        <Image
          src="/RevisionHeader.png"
          alt="Revision Header — polish and perfect"
          width={1200}
          height={400}
          className="rounded-2xl shadow-md w-full h-auto"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-8 py-10 max-w-6xl mx-auto gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-snug">
            Time to polish and perfect, <br />
            <span className="underline decoration-asu-gold font-extrabold">Let’s turn rough drafts into Refined Writing!</span>
          </h1>

          <p className="text-lg">
            Review your draft with <span className="font-semibold">fresh eyes</span> and make changes to{" "}
            <span className="font-semibold">strengthen your writing</span>.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image src="/EditingFrontGraphic.png" alt="Revision illustration" width={420} height={420} className="max-w-full h-auto" />
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
              <li>I have re-read my draft and looked for clarity and organization.</li>
              <li>I have improved areas where my ideas were unclear or weak.</li>
              <li>I have checked that my introduction and conclusion support my message.</li>
              <li>I have made revisions based on feedback (if I got any).</li>
              <li>I have strengthened my writing to better connect with my audience.</li>
              <li>I feel confident my ideas are clear, organized, and easy to follow.</li>
            </ul>
          </div>
        </div>
      </div>

      <LessonFooter
        prev={{
          kind: "section",
          id: "drafting-5",
          label: "Go Back to Previous Section: Drafting",
        }}
        next={{
          kind: "section",
          id: "revision-2",
          label: "Continue to Section 1 of Revision",
        }}
      />
    </>
  );
}
