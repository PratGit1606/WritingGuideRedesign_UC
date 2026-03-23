"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { LessonFooter } from "../LessonFooter";

export default function DraftingLesson1() {
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
            placeholder="Search drafting tips..."
          />
        </div>
      </form>


      <div className="py-10">
        <Image
          src="/DraftingHeader.png"
          alt="Drafting Header — put words on the page"
          width={1200}
          height={400}
          className="rounded-2xl shadow-md w-full h-auto"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-8 py-6 max-w-6xl mx-auto gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Time to let the words flow,
            <br />
            Let’s turn rough ideas into{" "}
            <span className="relative inline-block">
              <span className="font-extrabold">Real Writing!</span>

              <svg
                viewBox="0 0 220 18"
                className="absolute left-0 -bottom-2 w-full h-5 pointer-events-none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 10 C20 2, 60 16, 110 8 C160 0, 190 12, 218 9"
                  stroke="var(--asu-gold)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.95"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg">
            Start writing your <span className="font-semibold">rough draft</span> — no need for perfection yet,{" "}
            <span className="font-semibold">just get your ideas on the page.</span>
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image src="/EditingFrontGraphic.png" alt="Drafting illustration" width={420} height={420} className="max-w-full h-auto" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto border-2 border-black rounded-sm shadow-md mt-6">
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
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li>I have created an outline or structure for my assignment.</li>
              <li>I have written a full rough draft, focusing on getting my ideas down.</li>
              <li>I have made sure my introduction, body, and conclusion are included.</li>
              <li>I have connected my research and ideas clearly in my writing.</li>
              <li>I have kept my audience and assignment purpose in mind as I draft.</li>
              <li>I feel confident that I have a complete first draft to work with.</li>
            </ul>
          </div>
        </div>
      </div>

      <LessonFooter
        prev={{
          kind: "section",
          id: "brainstorming-5",
          label: "Go Back to Previous Section: Brainstorming",
        }}
        next={{
          kind: "section",
          id: "drafting-2",
          label: "Continue to Section 1 of Drafting",
        }}
      />
    </>
  );
}
