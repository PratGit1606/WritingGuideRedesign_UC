"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import TabWithChecklist from "@/app/components/Tabs";
import { LessonFooter } from "../LessonFooter";

export default function CitingLesson2() {
  return (
    <>
      <form className="flex w-full mx-auto mb-6">
        <div className="relative w-full">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="text"
            id="citing2-search"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Check formatting rules and ask your professor..."
            aria-label="Search citing tips"
          />
        </div>
      </form>


      <div className="py-8">
        <Image
          src="/CitingHeader.png"
          alt="Citing header"
          width={1200}
          height={360}
          className="rounded-2xl shadow-md object-cover w-full h-auto"
        />
      </div>

      <TabWithChecklist
        pageId="CitingPage2"
        overviewContent={
          <div className="py-4">
            <div className="flex items-center shadow-md mb-6">
              <div className="w-5 bg-asu-gold self-stretch" />
              <div className="px-4 py-3 bg-white w-full">
                <h2 className="text-xl font-bold text-gray-900">Section 1</h2>
              </div>
            </div>

            <h2 className="text-[26px] font-bold mb-4">Checking the paper formatting aligns with the citation style guide</h2>

            <p className="text-[16px] text-gray-800 mb-4">
              Different citation style guides have varying rules on how to format a written paper and how to cite sources both in text and
              in the reference list. For example, the American Psychological Association Style (APA) will have different rules compared to
              the Modern Language Association Style (MLA).
            </p>

            <p className="text-[16px] text-gray-800 mb-4">
              These citation style guides can also have varying editions — it is common practice to write in the most current edition
              (e.g., APA 7th Edition). The format and details of citations can also depend on the writing assignment, the discipline, and
              the course instructor.
            </p>

            <p className="text-[16px] text-gray-800 mb-4">
              To check if the formatting of your paper aligns with the citation style guide you are using for your assignment, reference
              the style guide’s rules on how to format your paper. Below are example style guides and some strategies you can use.
            </p>

            <ul className="list-disc list-inside mb-6 text-gray-800">
              <li>MLA 9th Edition</li>
              <li>APA 7th Edition</li>
              <li>Chicago Manual of Style 17th Edition</li>
              <li>Turabian Style 9th Edition</li>
              <li>AMA Style 11th Edition</li>
              <li>IEEE Guide</li>
            </ul>

            <div className="border rounded-xl p-4 bg-gray-50 mb-6">
              <h3 className="text-lg font-bold mb-2">Resource Spotlight: Citation Managers</h3>
              <p className="text-gray-800">
                Here’s an idea: use a{" "}
                <a href="https://www.zotero.org" target="_blank" rel="noreferrer" className="underline text-blue-600">
                  citation manager
                </a>{" "}
                to keep track of the sources you use and generate citations automatically.
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-3">Reference resources</h3>
            <ul className="list-disc list-inside mb-4 text-gray-800">
              <li>Most citation style guides have a printed or digital manual you can reference for formatting guidelines.</li>
              <li>Online resources such as Purdue OWL, Scribbr, or OWL Excelsior also have helpful citation examples.</li>
            </ul>

            <div className="mt-6 border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Ask your professor</h3>
              <p className="text-gray-800 mb-4">
                Your professor can answer questions on formatting your paper in the citation style they requested. Check office hours or set
                a meeting to go over formatting questions. Use the template below to prepare what to ask or paste the relevant paragraphs
                from your paper.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                  <label htmlFor="course" className="font-semibold">
                    Course
                  </label>
                  <input
                    id="course"
                    name="course"
                    type="text"
                    className="md:col-span-2 border rounded px-3 py-2 w-full"
                    placeholder="e.g., HIST 101"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                  <label htmlFor="requiredStyle" className="font-semibold">
                    Required Citation Style Guide
                  </label>
                  <select id="requiredStyle" name="requiredStyle" className="md:col-span-2 border rounded px-3 py-2 w-full">
                    <option value="">Select style (e.g., APA 7th)</option>
                    <option>APA 7th Edition</option>
                    <option>MLA 9th Edition</option>
                    <option>Chicago 17th Edition</option>
                    <option>Turabian 9th Edition</option>
                    <option>AMA 11th Edition</option>
                    <option>IEEE</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                  <label htmlFor="primaryResource" className="font-semibold">
                    Primary Resource I am using to check my writing
                  </label>
                  <input
                    id="primaryResource"
                    name="primaryResource"
                    type="text"
                    className="md:col-span-2 border rounded px-3 py-2 w-full"
                    placeholder="e.g., Purdue OWL, Course syllabus, APA manual"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                  <label htmlFor="anticipated" className="font-semibold">
                    Anticipated style issues I want to look out for
                  </label>
                  <textarea
                    id="anticipated"
                    name="anticipated"
                    className="md:col-span-2 border rounded px-3 py-2 w-full"
                    rows={4}
                    placeholder="e.g., in-text citation format for multiple authors, block quote formatting, reference list order..."
                  />
                </div>

                <div className="flex gap-3 justify-end">
                  <button type="button" className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50">
                    Clear
                  </button>
                  <button type="submit" className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800">
                    Save template
                  </button>
                </div>
              </form>
            </div>
          </div>
        }
      />

      <LessonFooter
        prev={{
          kind: "section",
          id: "citing-1",
          label: "Go Back to Citing Intro",
        }}
        next={{
          kind: "section",
          id: "citing-3",
          label: "Continue to Section 2 of Citing",
        }}
      />
    </>
  );
}
