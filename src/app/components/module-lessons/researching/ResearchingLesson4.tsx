'use client'
import React from 'react';
import Image from 'next/image';
import Sidebar from '../../Sidebar';
import { Search } from "lucide-react";
import ProgressSteps from '../../ProgressSteps';
import Tabs from '../../Tabs';
import Link from 'next/link';

const ResearchingPage4 = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentStep='tracking' />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-8 min-h-screen">
          <form className="flex w-full mx-auto w-full mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="simple-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Tracking my research..."
              />
            </div>
          </form>

          <div className="py-6">
            <ProgressSteps progress={75} />
          </div>

          <div className="py-10">
            <Image src="/ResearchingHeader.png" alt="Researching Header" width={1200} height={400} className="rounded-2xl shadow-md" />
          </div>

          <Tabs pageId="ResearchingPage4" overviewContent={
            <div className="py-4">
              <div className="flex items-center shadow-md mb-6">
                <div className="w-5 bg-asu-gold self-stretch"></div>
                <div className="px-4 py-3 bg-white w-full">
                  <h2 className="text-xl font-bold text-gray-900">Section 3</h2>
                </div>
              </div>

              <h2 className="text-[26px] font-bold mb-4">Tracking my research</h2>

              <p className="text-[16px] text-gray-800 mb-4">
                Especially with longer assignments you may need to use information from multiple sources. Keep track of what you use from each source so you can easily recall and use it while writing. Below we share a strategy for keeping track of research and give you an opportunity to practice.
              </p>

              <h3 className="text-[20px] font-semibold mb-3">Make an Annotated Bibliography:</h3>
              <p className="text-gray-800 mb-3">
                An annotated bibliography collects all the sources you read and a summary of your notes about those sources in one place. This helps you refer to sources while writing and make connections between the different sources.
              </p>

              <h4 className="text-[18px] font-semibold mb-2">Start with citations:</h4>
              <p className="text-gray-800 mb-3">The first component of an annotated bibliography entry is a full citation of the source (APA, MLA, etc.). This helps you build your references later.</p>

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
                  <button type="button" onClick={() => alert('Saved (stub)')} className="px-4 py-2 rounded-md bg-black text-white">Save entry</button>
                </div>
              </div>

            </div>
          } />

          <div className="flex justify-between items-center p-6">
            <Link href="/ResearchingPage3" className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center">
              Go Back to Section 2 of Researching
            </Link>
            <Link href="/ResearchingPage5" className="px-6 py-3 rounded-lg border-2 border-asu-gold bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Outro of Researching
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResearchingPage4;
