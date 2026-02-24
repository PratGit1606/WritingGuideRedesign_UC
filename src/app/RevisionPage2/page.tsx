// RevisionPage2.jsx
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import { Search } from "lucide-react";
import ProgressSteps from '../components/ProgressSteps';
import Tabs from '../components/AnalysingTabs';
import Link from 'next/link';

const RevisionPage2 = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentStep='revision' />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="revision-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Search revision strategies..."
              />
            </div>
          </form>

          <div className="py-6">
            <ProgressSteps progress={50} />
          </div>

          <div className="py-10">
            <Image src="/RevisionHeader.png" alt="Revision Header" width={1200} height={400} className="rounded-2xl shadow-md" />
          </div>

          <Tabs overviewContent={
            <div className="py-4">
              <div className="flex items-center shadow-md mb-6">
                <div className="w-5 bg-[#FFC627] self-stretch"></div>
                <div className="px-4 py-3 bg-white w-full">
                  <h2 className="text-xl font-bold text-gray-900">Section 2</h2>
                </div>
              </div>

              <h2 className="text-[26px] font-bold mb-4">Considering the order of my ideas in the assignment</h2>

              <p className="text-[16px] text-gray-800 leading-relaxed mb-4">
                To revise literally means to “re-examine” or to “take another look at.” Revising your writing involves refining the content and the meaning of your writing, making sure your main ideas are clearly expressed.
              </p>

              <p className="text-[16px] text-gray-800 mb-4">
                One important thing to consider while revising is the order in which your ideas are presented in your paper.
              </p>

              <div className="border rounded-xl p-4 bg-gray-50 mb-4">
                <strong>Is that order logical?</strong>
                <p className="mt-2">Does each paragraph build on the previous one? Do your paragraphs support and clearly connect back to your thesis or main point?</p>
              </div>

              <p className="text-[16px] text-gray-800 mb-4">
                Below we share strategies for how to consider and revise the order of your ideas and give you a chance to practice.
              </p>

              <h3 className="text-lg font-semibold mb-2">Step away from your writing:</h3>
              <ul className="list-disc list-inside text-gray-800 mb-4 space-y-2">
                <li>Once you have finished a draft, take some time away from your project before jumping into revisions.</li>
                <li>Giving your mind time and space to think about other things will help you gain critical distance. Come back to your writing with a rested mind and a fresh perspective.</li>
                <li><strong>Don&apos;t delete:</strong> Create a new document where you can cut and paste sentences or paragraphs that you feel don&apos;t fit or rework and reorder sentences and paragraphs in that new document.</li>
                <li>Revising does not mean you have to start deleting parts of your draft entirely. You may find you need those ideas later!</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Try a Reverse Outline:</h3>
              <p className="text-[16px] text-gray-800 mb-4">
                An especially effective strategy for revision is making a reverse outline of your draft. Reverse outlining can help you determine:
              </p>
              <ul className="list-disc list-inside text-gray-800 mb-6">
                <li>Whether each paragraph expresses a coherent idea</li>
                <li>Whether the main idea of each paragraph ties back to your thesis statement</li>
                <li>Whether the organization of your ideas is clear and logical</li>
              </ul>

              <div className="border rounded p-4 mb-6 bg-white">
                <h4 className="font-bold mb-2">Resource Spotlight: Get Help From a Robot</h4>
                <p className="text-gray-800">Here’s an idea: use <a href="https://www.grammarly.com" target="_blank" rel="noopener noreferrer" className="underline text-[#0a58ca]">Grammarly</a> to help you brainstorm topic ideas and create a potential outline for your work.</p>
              </div>

              <h3 className="text-lg font-semibold mb-3">To create a reverse outline:</h3>
              <ol className="list-decimal list-inside text-gray-800 space-y-3 mb-6">
                <li>
                  Create a new document or blank piece of paper and write your thesis statement at the top.
                </li>
                <li>
                  Summarize each of your paragraphs in one sentence (or write out the topic sentence of each paragraph). Note where it might be difficult to do that:
                  <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
                    <li>Your paragraph may contain multiple ideas that need to be split into separate paragraphs.</li>
                    <li>Your paragraph may contain a lot of evidence that is not synthesized or connected to a main point.</li>
                  </ul>
                </li>
                <li>
                  If two summary sentences sound really similar:
                  <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
                    <li>You may need to combine those two paragraphs and cut down on examples or evidence.</li>
                    <li>You may need to rework one paragraph so that it makes a different point.</li>
                  </ul>
                </li>
                <li>
                  Look over each summary sentence and answer the following questions:
                  <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
                    <li>Does it connect to the thesis statement or main point of your paper?</li>
                    <li>Does it express one cohesive idea?</li>
                    <li>Does the idea expressed in each sentence logically flow into the next?</li>
                    <li>Do you need to rearrange any of the paragraphs in order to improve the flow?</li>
                    <li>Are they all necessary? Do you need to cut some paragraphs?</li>
                  </ul>
                </li>
              </ol>

            </div>
          } />

          <div className="flex justify-between items-center p-6">
            <Link href="/RevisionPage" className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center">
              Go Back to Intro of Revision
            </Link>

            <Link href="/RevisionPage3" className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Section 2 of Revision
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionPage2;
