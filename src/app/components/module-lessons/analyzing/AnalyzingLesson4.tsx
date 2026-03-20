"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import TabWithChecklist from "@/app/components/Tabs";
import { LessonFooter } from "../LessonFooter";

export default function AnalyzingLesson4() {
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
        <Image src="/AnalysingHeader.png" alt="Analysing Header" width={1200} height={400} className="rounded-2xl shadow-md w-full h-auto" />
      </div>
      <TabWithChecklist
        pageId="AnalysingPage4"
        overviewContent={
          <div className="py-4">
            <div className="flex items-center shadow-md mb-6">
              <div className="w-5 bg-asu-gold self-stretch" />
              <div className="px-4 py-3 bg-white w-full">
                <h2 className="text-xl font-bold text-gray-900">Section 3</h2>
              </div>
            </div>

            <h2 className="text-[30px] font-bold mb-4">Understanding the Rubric</h2>

            <p className="text-[18px] text-black leading-relaxed mb-6">
              Assignment rubrics are meant to give you insight into what your faculty expects to see in your writing. It also gives you clues about how your
              writing will be evaluated. The rubric is a document that you can continually return to to measure how well you are addressing your faculty’s
              expectations. It is important to remember that even if you have not been given a formal rubric, the assignment description will often give you
              clues based on what ideas and expectations it emphasizes for you to consider.
            </p>

            <p className="text-[18px] text-black leading-relaxed mb-6">
              When reading your assignment rubric, it can be helpful to go by category and summarize what a high score in that category might look like. This
              can help you measure how well you feel like you understand a category and generate questions you can take back to your faculty.
            </p>

            <div className="border rounded-xl p-6 bg-gray-50 mb-8">
              <h3 className="text-lg font-bold mb-2">Resource Spotlight: Review a Workshop</h3>
              <p className="text-gray-700">
                Use the{" "}
                <a
                  href="https://inscribe.education/main/asu/6754110229502419/compositions/6749461750026802?backToListTab=all"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Spotlight Workshops
                </a>{" "}
                to delve deeper into strategies for breaking down your assignment’s rubrics.
              </p>
            </div>

            <div className="grid gap-6 mt-6">
              {[
                {
                  label: "Category Description",
                  example:
                    "Audience Awareness: From the title on, essays engage readers in an academic environment using appropriate language and tone.",
                  placeholder: "Summarize the rubric’s category here...",
                },
                {
                  label: "High Score Description",
                  example: "An A-grade essay typically has a mature sense of voice and awareness of a specific audience.",
                  placeholder: "What does high performance in this category look like?",
                },
                {
                  label: "My Summary",
                  example:
                    "To get an A, I need to show that there is a clear audience that I am talking to and address them appropriately in my tone and language.",
                  placeholder: "Write your own summary here...",
                },
                {
                  label: "Potential Faculty Questions",
                  example:
                    "What does mature sense of voice mean? Are there particular examples of what you are looking for so I can keep them in mind as I write?",
                  placeholder: "List questions you’d want to ask your professor...",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
                  <h4 className="text-lg font-bold text-black mb-2">{item.label}</h4>
                  <p className="text-[16px] text-gray-700 mb-4">
                    <span className="font-semibold">Example:</span> {item.example}
                  </p>
                  <textarea
                    placeholder={item.placeholder}
                    className="w-full border border-gray-300 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-asu-gold"
                    rows={3}
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />
      <LessonFooter
        prev={{
          kind: "section",
          id: "analyzing-3",
          label: (
            <>
              Go Back to Previous Section: <br /> Section 2 of Analysing
            </>
          ),
        }}
        next={{
          kind: "section",
          id: "analyzing-5",
          label: "Continue to Finale of Analysing",
        }}
      />
    </>
  );
}
