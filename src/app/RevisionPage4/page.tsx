// RevisionPage4.jsx
'use client'
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import { Search } from "lucide-react";
import ProgressSteps from '../components/ProgressSteps';
import Tabs from '../components/AnalysingTabs';
import Link from 'next/link';

const RevisionPage4 = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-6 md:px-10 mt-12 gap-8">
        <div className="w-72 md:w-80 sticky top-24 self-start">
          <Sidebar currentStep="revision" />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="revision4-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Measure argument effectiveness & check assignment fit..."
                aria-label="Search revision guidance"
              />
            </div>
          </form>

          <div className="py-4">
            <ProgressSteps progress={100} />
          </div>

          <div className="py-8">
            <Image src="/RevisionHeader.png" alt="Revision Header — measuring effectiveness" width={1200} height={400} className="rounded-2xl shadow-md" />
          </div>

          <Tabs overviewContent={
            <div className="py-2 md:py-4">
              <div className="flex items-center shadow-md mb-6">
                <div className="w-5 bg-[#FFC627] self-stretch"></div>
                <div className="px-4 py-3 bg-white w-full">
                  <h2 className="text-xl font-bold text-gray-900">Section 4</h2>
                </div>
              </div>

              <h2 className="text-[26px] font-bold mb-4">Measuring the effectiveness of my argument and determining if it fits the assignment parameters</h2>

              <p className="text-[16px] text-gray-800 mb-4">
                The most important question to answer during the revision process is, <em>“have I said what I need to and said it well?”</em> This is the stage of the writing process at which you fine-tune what you have written, make your points clear and strong, and make sure you have met all the requirements of your assignment. Below, we will share some strategies for strengthening your argument and some tips for practice!
              </p>

              <h3 className="text-lg font-semibold mb-2">Read Rhetorically:</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800 space-y-2">
                <li>You may have heard the term “rhetorical appeals” (logos, ethos, pathos, kairos). These terms describe features of effective arguments. As you re-read and revise your argument, use rhetorical appeals as tools to analyze and strengthen your argument.</li>
                <li>Think of the rhetorical appeals as tools, and ask yourself whether you have effectively used those tools in your writing. Below are some questions to ask yourself when evaluating your writing.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Use the Assignment Description:</h3>
              <p className="text-[16px] text-gray-800 mb-4">
                Go back to the verbs you identified in the assignment description and use them as a checklist. To visualize this, open a new document, create a list of the different parts of your assignment description, and copy-paste the sections of your paper beneath the verbs/parts of the assignment description they correspond to. This can help you determine if you have addressed everything the assignment is asking for, as well as if you need to add more to certain sections.
              </p>

              <div className="border rounded p-4 mb-6 bg-gray-50">
                <h4 className="font-bold mb-2">Resource Spotlight: Talk to a Tutor</h4>
                <p className="text-gray-700">
                  Want to talk it out? <a href="#" className="underline text-blue-600">Schedule an appointment</a> or drop in to chat with a writing tutor.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-3">Practice:</h3>
              <p className="text-[15px] text-gray-800 mb-3">
                Use the table below to deconstruct your assignment description and your essay to make sure you have all the components you need. Paste the paragraphs of your essay that address each assignment component into the matching box.
              </p>

              <div className="mt-4">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="hidden md:block font-semibold">Assignment Component</div>
                    <div className="hidden md:block md:col-span-2 font-semibold">Paste paragraph(s) of your essay that address this part of the assignment</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <label htmlFor="component1" className="md:flex md:items-center md:justify-start font-semibold">
                      <span className="inline-block md:hidden mb-1 font-semibold">Assignment Component #1</span>
                      <span className="hidden md:inline">Assignment Component #1</span>
                    </label>
                    <textarea id="component1" aria-label="Assignment component 1 text" className="md:col-span-2 w-full min-h-[120px] border rounded p-3" placeholder="Paste the paragraphs of your essay that address this part of the assignment here..." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <label htmlFor="component2" className="md:flex md:items-center md:justify-start font-semibold">
                      <span className="inline-block md:hidden mb-1 font-semibold">Assignment Component #2</span>
                      <span className="hidden md:inline">Assignment Component #2</span>
                    </label>
                    <textarea id="component2" aria-label="Assignment component 2 text" className="md:col-span-2 w-full min-h-[120px] border rounded p-3" placeholder="Paste the paragraphs of your essay that address this part of the assignment here..." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <label htmlFor="component3" className="md:flex md:items-center md:justify-start font-semibold">
                      <span className="inline-block md:hidden mb-1 font-semibold">Assignment Component #3</span>
                      <span className="hidden md:inline">Assignment Component #3</span>
                    </label>
                    <textarea id="component3" aria-label="Assignment component 3 text" className="md:col-span-2 w-full min-h-[120px] border rounded p-3" placeholder="Paste the paragraphs of your essay that address this part of the assignment here..." />
                  </div>

                  <p className="text-sm text-gray-600">
                    <strong>Remember:</strong> look for verbs like “argue” or “explore” that signal what you need to do and nouns that show what subject you are meant to address.
                  </p>

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => alert('Saved (stub)')}
                      className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
                    >
                      Save entries
                    </button>
                    <button
                      type="reset"
                      className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </div>

            </div>
          } />

          <div className="flex justify-between items-center p-4 mt-4">
            <Link href="/RevisionPage3" className="px-5 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-100 shadow-sm text-center">
              Go Back to Section 2 of Revision
            </Link>

            <Link href="/RevisionPage5" className="px-5 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Revision Outro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionPage4;
