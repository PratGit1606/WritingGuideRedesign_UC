"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import TabWithChecklist from "@/app/components/Tabs";
import { LessonFooter } from "../LessonFooter";

export default function CitingLesson4() {
  return (
    <>
      <form className="flex w-full mx-auto mb-4">
        <div className="relative w-full">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="text"
            id="simple-search"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Search within citing resources..."
          />
        </div>
      </form>


      <div className="py-6">
        <Image
          src="/CitingHeader.png"
          alt="Citing Header"
          width={1200}
          height={400}
          className="rounded-2xl shadow-md w-full h-auto"
        />
      </div>

      <TabWithChecklist
        pageId="CitingPage4"
        overviewContent={
          <div className="py-4">
            <div className="flex items-center shadow-md mb-6">
              <div className="w-5 bg-asu-gold self-stretch" />
              <div className="px-4 py-3 bg-white w-full">
                <h2 className="text-xl font-bold text-gray-900">Section 3</h2>
              </div>
            </div>

            <h2 className="text-[28px] font-bold mb-4">
              Verifying that all footnotes, in-text citations, and full references match the style guide
            </h2>

            <p className="text-[16px] text-gray-800 mb-4">
              In addition to formatting, citation style guides also have rules on how to create footnotes, in-text citations, and
              references. Varying disciplines write for different purposes and different audiences, and researchers in different disciplines
              cite different types of resources. Citation style allows writers to share their knowledge with their audience in a consistent
              manner alongside other researchers. Verifying that your formatting, citations, references, and footnotes all follow the
              citation style guide is important because it shows how you are participating in the academic community your writing is a
              part of.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Footnotes</h3>
            <p className="text-[16px] text-gray-800 mb-3">
              You will need to use footnotes when you want to add more commentary on a point, provide another citation, or any other
              additional information while not disrupting the flow of your writing. Be sure to double-check your style guide. Some citation
              styles, like Chicago, use footnotes for citations.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">In-text citations</h3>
            <p className="text-[16px] text-gray-800 mb-3">
              You will need to use in-text citations when you are directly quoting, paraphrasing, or summarizing information from a source.
              Be sure to double-check your style guide. Some citation styles, like Chicago, don’t often use in-text citations.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">References</h3>
            <p className="text-[16px] text-gray-800 mb-4">
              You will need to use references within your paper to list all of the sources you have cited in your paper. Below are some tips
              on how to verify that your citations and formatting are following the citation style guidelines.
            </p>

            <div className="border rounded-xl p-4 bg-gray-50 mb-6">
              <h4 className="text-lg font-bold mb-2">Resource Spotlight: Consult a LibGuide</h4>
              <p className="text-gray-700">
                Here’s an idea: check the ASU Libraries’ Library Guides for information on how to approach citations.
              </p>
            </div>

            <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[18px] font-semibold mb-2">Reference resources</h4>
                <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-800">
                  <li>
                    Most citation style guides have a printed or digital manual you can reference to check the proper in-text and reference
                    guidelines.
                  </li>
                  <li>
                    Online resources such as Purdue OWL, Scribbr, or OWL Excelsior also have information on in-text citations and
                    references.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-[18px] font-semibold mb-2">Reach out to your support network</h4>
                <ul className="list-disc list-inside space-y-2 text-[15px] text-gray-800">
                  <li>
                    Ask your peers, colleagues, or professor questions about in-text citations, references, footnotes, or other parts of a
                    citation style guide.
                  </li>
                  <li>They are all written in the same or a similar citation style guide and can point you in the right direction.</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 mb-6">
              <h4 className="text-[17px] font-semibold mb-2">Quick checklist</h4>
              <ul className="list-inside space-y-2 text-[15px] text-gray-800">
                <li>Confirm each in-text citation matches an entry in your reference list.</li>
                <li>Verify punctuation and order of authors/years against the style manual.</li>
                <li>Ensure URLs, DOIs, and page ranges are formatted correctly.</li>
              </ul>
            </div>
          </div>
        }
      />

      <LessonFooter
        prev={{
          kind: "section",
          id: "citing-3",
          label: "Go Back to Citing Section 2",
        }}
        next={{
          kind: "section",
          id: "citing-5",
          label: "Continue to Citing Outro",
        }}
      />
    </>
  );
}
