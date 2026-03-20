"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import TabWithChecklist from "@/app/components/Tabs";
import { LessonFooter } from "../LessonFooter";

export default function AnalyzingLesson2() {
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
        pageId="AnalysingPage2"
        overviewContent={
          <div className="py-4">
            <div className="flex items-center shadow-md mb-6">
              <div className="w-5 bg-asu-gold self-stretch" />
              <div className="px-4 py-3 bg-white w-full">
                <h2 className="text-xl font-bold text-gray-900">Section 1</h2>
              </div>
            </div>

            <h2 className="text-[30px] font-bold mb-2">Reading my assignment description</h2>

            <div className="py-4">
              <p className="text-[18px] text-black leading-relaxed">
                Reading your assignment description requires you to{" "}
                <span className="font-bold">understand the directions given by your faculty or whoever you are writing for</span>. They can “prompt” your
                writing and will often let you know key information about the assignment, such as citation style, genre, required number of sources, page
                length/word count, and audience.
              </p>
              <br />
              <p className="text-[18px] text-black leading-relaxed">
                When reading a prompt or assignment description, you want to{" "}
                <span className="font-bold">pay attention to the verbs (actions) and nouns (people, places, things, ideas)</span> that your professor has
                included.
              </p>
            </div>

            <div className="mt-6 mb-4">
              <h2 className="text-[22px] font-bold mb-2">Verbs can tell you the genre or type of paper you will be writing:</h2>
              <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-800">
                <li>What are you expected to do? Argue, explain, explore, reflect?</li>
                <li>What is your audience expected to do with the information you give them?</li>
              </ul>
            </div>

            <div className="mt-6 mb-4">
              <h2 className="text-[22px] font-bold mb-2">Nouns can tell you content directions:</h2>
              <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-800">
                <li>Is someone specific supposed to be discussed? A particular text? System? Event?</li>
                <li>Who is the audience for what you are writing? What information might they need?</li>
              </ul>
            </div>

            <div className="flex items-center max-w-2xl mx-auto justify-center border rounded-xl p-6 mt-6 shadow-sm bg-white">
              <div className="text-center flex-1">
                <h2 className="text-lg font-bold">Writing Tip of the Day</h2>
                <p className="text-gray-800 mt-2">Dive in and be scared later.</p>
              </div>
            </div>

            <div className="mt-6 mb-4">
              <h2 className="text-[22px] font-bold mb-4">Let’s look at an example!</h2>
              <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-800">
                <li>Read through the example assignment description below.</li>
                <li>Notice how key terms in the assignment are highlighted.</li>
                <li>Select a source from your annotated bibliography to analyze.</li>
                <li>Use APA format for citations.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-[20px] font-bold mb-2">Introduction:</h3>
              <p className="text-[18px] text-gray-800 leading-relaxed mb-4">
                Your introduction will outline the issue with background information and begin with something to attract the attention of your reader. Your
                thesis statement will follow a formula:
              </p>
              <p className="font-bold text-[18px] mb-4">
                Author’s name, source type & title is/is not reliable/credible/effective based on the rhetorical situation.
              </p>

              <p className="text-[18px] font-semibold mb-2">EXAMPLE:</p>
              <p className="text-[18px] text-gray-800 leading-relaxed mb-6">
                Jan Researcher’s academic journal article entitled “How to Conduct Effective Research” is effective and reliable based on the article’s
                rhetorical situation and lack of logical fallacy.
              </p>

              <h3 className="text-[20px] font-bold mb-2">Body:</h3>
              <p className="text-[18px] text-gray-800 leading-relaxed mb-4">Write at least one paragraph on each of the following topics based on your source:</p>
              <ol className="list-decimal list-inside space-y-2 text-[18px] text-gray-800">
                <li>
                  <span className="font-semibold">Ethos -</span> Discuss the credibility of not only the author of your source, but also of the sources used in
                  the article.
                </li>
                <li>
                  <span className="font-semibold">Logos -</span> Point out the logical organization pattern and keywords and discuss whether the article is
                  logically coherent.
                </li>
                <li>
                  <span className="font-semibold">Pathos -</span> Does the source play on the emotions of the audience? Look for terms such as “always,”
                  “never,” etc. to explore this topic.
                </li>
              </ol>

              <h3 className="text-[20px] font-bold mt-6 mb-2">Conclusion:</h3>
              <p className="text-[18px] text-gray-800 leading-relaxed">
                Restate your thesis in light of the rhetorical situation, offer a solution to make the source better, and discuss the implications of this
                source and its rhetorical situation.
              </p>
            </div>
          </div>
        }
      />
      <LessonFooter
        prev={{
          kind: "section",
          id: "analyzing-1",
          label: (
            <>
              Go Back to Previous Section: <br /> Section 1 of Analysing
            </>
          ),
        }}
        next={{
          kind: "section",
          id: "analyzing-3",
          label: "Continue to Section 2 of Analysing",
        }}
      />
    </>
  );
}
