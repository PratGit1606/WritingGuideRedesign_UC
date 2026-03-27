"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { LessonFooter } from "../LessonFooter";

export default function ResearchingLesson4() {
  return (
    <>
      <form className="flex w-full mx-auto mb-6">
        <div className="relative w-full">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="text"
            id="researching-search"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Tracking my research..."
            aria-label="Search researching tips"
          />
        </div>
      </form>

      <div className="py-10">
        <Image
          src="/ResearchingHeader.png"
          alt="Researching Header"
          width={1200}
          height={400}
          className="rounded-2xl shadow-md w-full h-auto"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-8 py-10 max-w-6xl mx-auto gap-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-snug">
            Time to organize your research, <br />
            <span className="underline decoration-asu-gold font-extrabold">
              let’s keep track of sources and make writing easier!
            </span>
          </h1>

          <p className="text-lg">
            Learn how to <span className="font-semibold">record, organize, and evaluate your sources</span> so you can use them effectively later.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/EditingFrontGraphic.png"
            alt="Researching illustration"
            width={420}
            height={420}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto space-y-8">

        <div>
          <div className="p-6 md:p-8 space-y-4">
            <h2 className="text-[26px] font-bold mb-4">Tracking my research</h2>

            <p className="text-[16px] text-gray-800 mb-4">
              Especially with longer assignments you may need to use information from multiple sources. Keep track of what you use from each source so you can easily recall and use it while writing. Below we share a strategy for keeping track of research and give you an opportunity to practice.
            </p>

            <h3 className="text-[20px] font-semibold mb-3">Make an Annotated Bibliography:</h3>
            <p className="text-gray-800 mb-3">
              An annotated bibliography collects all the sources you read and a summary of your notes about those sources in one place. This helps you refer to sources while writing and make connections between the different sources.
            </p>

            <h4 className="text-[18px] font-semibold mb-2">Start with citations:</h4>
            <p className="text-gray-800 mb-3">
              The first component of an annotated bibliography entry is a full citation of the source (APA, MLA, etc.). This helps you build your references later.
            </p>

            <h4 className="text-[18px] font-semibold mb-2">Capture your understanding:</h4>
            <p className="text-gray-800 mb-3">
              Write a short paragraph summarizing the source and its key points. Highlight what parts are most relevant to your work. Include: who the author is and their field, the intended audience, the main claim and supporting evidence, and the conclusion.
            </p>

            <h4 className="text-[18px] font-semibold mb-2">Measure the source’s rhetorical effects:</h4>
            <p className="text-gray-800 mb-3">
              Reflect on how you might use the source and whether the author achieved their purpose. Consider the author’s audience, perspective, and whether they effectively supported their claim.
            </p>

            <h4 className="text-[18px] font-semibold mb-2">Organize your sources:</h4>
            <p className="text-gray-800 mb-4">
              You can organize your annotated bibliography alphabetically, chronologically, or thematically — choose the method that helps you most.
            </p>

            <div className="border rounded p-4 mb-6">
              <h4 className="font-semibold mb-2">Practice: Fill out the table to get started</h4>
              <p className="text-sm text-gray-700 mb-4">Use this form to begin an annotated bibliography entry.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Title of your source</label>
                  <input className="w-full border rounded p-2" placeholder="Enter source title" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">Citation (APA)</label>
                  <input className="w-full border rounded p-2" placeholder="Author, year, title, source..." />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1">Summary paragraph</label>
                  <textarea className="w-full border rounded p-2" rows={4} placeholder="Summarize the source and main points..." />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-1">Evaluation paragraph</label>
                  <textarea className="w-full border rounded p-2" rows={4} placeholder="Evaluate credibility and usefulness..." />
                </div>
              </div>

              <div className="mt-4 text-right">
                <button
                  type="button"
                  onClick={() => alert("Saved (stub)")}
                  className="px-4 py-2 rounded-md bg-black text-white"
                >
                  Save entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LessonFooter
        prev={{
          kind: "section",
          id: "researching-3",
          label: "Go Back to Section 2 of Researching",
        }}
        next={{
          kind: "section",
          id: "researching-5",
          label: "Continue to Outro of Researching",
        }}
      />
    </>
  );
}