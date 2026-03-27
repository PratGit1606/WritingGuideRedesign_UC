"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { LessonFooter } from "../LessonFooter";

export default function ResearchingLesson2() {
  const rows = [
    {
      label: "Scholarly Sources",
      cols: [
        "Research papers, journal articles, academic books",
        "Peer-reviewed by other experts in the field",
        "Written for academics and professionals in the field",
        "Include a full list of references or works cited",
        "Found in academic journals or published by universities",
      ],
    },
    {
      label: "Popular Sources",
      cols: [
        "News articles, blog posts, .com and .org websites",
        "Not usually peer-reviewed",
        "Written for the general public",
        "May not include works cited or references",
        "Found on the internet, in magazines, blogs, newspapers",
      ],
    },
  ];

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
            placeholder="Understanding my topic and searching for sources..."
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
            Time to understand your topic better, <br />
            <span className="underline decoration-asu-gold font-extrabold">
              let’s search for sources that strengthen your ideas!
            </span>
          </h1>

          <p className="text-lg">
            Learn how to <span className="font-semibold">find the right sources</span>, identify keywords, and understand what type of evidence your assignment needs.
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
        <div className="border-2 border-black rounded-sm shadow-md overflow-hidden bg-white">
          <div className="border-b-2 border-black bg-gray-100 py-3 px-6">
            <h3 className="text-xl font-bold">Decide what type of sources you need</h3>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <p className="text-gray-800 leading-relaxed">
              Different assignments call for different source types. Broadly, sources can be classified as scholarly or popular.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rows.map((r, i) => (
                <div key={i} className="border border-black/70 rounded-lg p-5 bg-gray-50">
                  <h4 className="font-bold text-lg mb-2">{r.label}</h4>
                  <p className="mb-3 text-gray-800">{r.cols[0]}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                    {r.cols.slice(1).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border border-black/70 rounded-lg p-5 bg-gray-50">
              <h4 className="font-bold text-lg mb-4">Example — Topic: The effect of microplastics on humans</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Question(s):</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                    <li>How high are levels of microplastics in the oceans?</li>
                    <li>Do humans have microplastics in their bodies?</li>
                    <li>What adverse effects do microplastics have on human health?</li>
                    <li>Where do microplastics come from?</li>
                    <li>How long has microplastic pollution been considered an environmental problem?</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Keywords:</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    microplastics, plastic pollution, microplastics AND health, history of plastic pollution, microplastics cleanup
                  </p>

                  <p className="font-semibold mb-2">Potential sources:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                    <li>News articles from science-oriented publications about microplastic pollution</li>
                    <li>Journal articles about the history of plastic pollution</li>
                    <li>Historical news articles about plastics pollution</li>
                    <li>Journal articles from scientific journals about studies of microplastics on human health</li>
                    <li>Research studies on levels of microplastics in the human body</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LessonFooter
        prev={{
          kind: "section",
          id: "researching-1",
          label: "Go Back to Intro of Researching",
        }}
        next={{
          kind: "section",
          id: "researching-3",
          label: "Continue to Section 2 of Researching",
        }}
      />
    </>
  );
}