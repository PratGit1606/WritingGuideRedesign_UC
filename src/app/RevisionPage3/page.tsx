// RevisionPage3.jsx
'use client'
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import { Search } from "lucide-react";
import ProgressSteps from '../components/AnalysingProgressSteps';
import Tabs from '../components/AnalysingTabs';
import Link from 'next/link';

const RevisionPage3 = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentStep="revision" />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="revision3-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Refine voice, perspective, summary vs. synthesis..."
              />
            </div>
          </form>

          <div className="py-6">
            <ProgressSteps progress={75} />
          </div>

          <div className="py-10">
            <Image src="/RevisionHeader.png" alt="Revision Header — voice & synthesis" width={1200} height={400} className="rounded-2xl shadow-md" />
          </div>

          <Tabs overviewContent={
            <div className="py-4">
              <div className="flex items-center shadow-md mb-6">
                <div className="w-5 bg-[#FFC627] self-stretch"></div>
                <div className="px-4 py-3 bg-white w-full">
                  <h2 className="text-xl font-bold text-gray-900">Section 3</h2>
                </div>
              </div>

              <h2 className="text-[28px] font-bold mb-4">Establishing my voice and perspective in my assignment</h2>

              <p className="text-[16px] text-gray-800 mb-4">
                A first draft can often be messy, and messiness is encouraged in the drafting process. Drafting is about getting what you want to say out of your mind and onto paper. Revision involves fine-tuning your writing so that your ideas and unique perspective shine through.
              </p>

              <p className="text-[16px] text-gray-800 mb-4">
                Below, we share some considerations for establishing your perspective and voice in your writing and give you a chance to practice.
              </p>

              <h3 className="text-lg font-semibold mb-2">So What?</h3>
              <p className="text-[16px] text-gray-800 mb-3">
                Reread your writing with fresh eyes and a new perspective, as if you were a reader brand new to the topic. If you find yourself as a reader asking, “so what?” after reading a claim or a statement, that may be an indication that you as a writer need to elaborate on that point and explain why it is important.
              </p>

              <h4 className="font-semibold mb-2">Consider the following examples:</h4>
              <ul className="list-disc list-inside text-gray-800 mb-4 space-y-2">
                <li>The general public should also be included as a stakeholder in discussions about the ethics of genetic engineering and policymaking about genetic engineering technologies.</li>
                <li>The general public should also be included as a stakeholder in discussions about the ethics of genetic engineering and policymaking about genetic engineering technologies because the consequences of genetic engineering will affect everyone.</li>
              </ul>

              <p className="text-[16px] text-gray-800 mb-4">
                The first example introduces a topic and an argument but may still leave a reader asking, “so what?” The second example elaborates on the first sentence, adding the reasoning that because the general public will be affected, they should be involved.
              </p>

              <h4 className="font-semibold mb-2">Practice:</h4>
              <p className="text-[16px] text-gray-800 mb-6">
                Pretend you know nothing about your topic and read through your draft. Do any statements make you think, “so what?” Mark those sections for revision.
              </p>

              <div className="border rounded p-4 mb-6 bg-white">
                <h4 className="font-bold mb-2">Resource Spotlight: Watch a Workshop!</h4>
                <p className="text-gray-800">Here’s an idea: Use ASN’s <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="underline text-[#0a58ca]">YouTube Channel</a> to review past workshops on revision strategies.</p>
              </div>

              <h2 className="text-[24px] font-bold mb-3">Summary vs. Synthesis</h2>
              <p className="text-[16px] text-gray-800 mb-3">
                Remember that summary means restating another author’s writing in your own terms, while synthesis means combining what multiple sources have said with your own perspective to make an argument. A first draft may involve more summary than synthesis since the main focus is getting everything you want to say onto the page.
              </p>

              <p className="text-[16px] text-gray-800 mb-3">
                In the revision stage, moving from summary to synthesis will help bring your own voice and perspective out in your writing.
              </p>

              <h4 className="font-semibold mb-2">Practice:</h4>
              <p className="text-[16px] text-gray-800 mb-3">Go through your draft and highlight both summary and synthesis to get a sense of the balance between them. Where there are long stretches of summary or multiple sources summarized but not connected to each other, consider the following questions:</p>

              <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
                <li>Why did you use those sources? How are they relevant to your main point? Have you explained that to your reader in your draft?</li>
                <li>Which of your sources are making similar points or supporting the same piece of your argument? Are they grouped together in your draft?</li>
                <li>Have you made your sources talk to each other in your draft?</li>
              </ul>

              <div className="pl-6 text-gray-700">
                <p className="mb-2">For example:</p>
                <ul className="list-disc list-inside">
                  <li>Let’s say you have two sources, A and B, that make similar points about your topic but differ in some areas. In your first draft you may have a summary of A followed by a summary of B and then some commentary.</li>
                  <li>Rather than having those be three separate sections, try weaving them together, comparing A and B point by point and offering your own commentary throughout. As a writer, you are in a unique position to offer your analysis of these sources and their relation to one another.</li>
                </ul>
              </div>

            </div>
          } />

          <div className="flex justify-between items-center p-6">
            <Link href="/RevisionPage2" className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center">
              Go Back to Previous Section: Revision 1
            </Link>

            <Link href="/RevisionPage4" className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Section 3 of Revision
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionPage3;
