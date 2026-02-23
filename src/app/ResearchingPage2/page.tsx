// ResearchingPage2.jsx
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import { Search } from "lucide-react";
import ProgressSteps from '../components/AnalysingProgressSteps';
import Tabs from '../components/AnalysingTabs';
import Link from 'next/link';

const ResearchingPage2 = () => {
  // data for responsive table
  const rows = [
    { label: 'Scholarly Sources', cols: [
      'Research papers, journal articles, academic books',
      '• Peer-reviewed by other experts in the field',
      '• Written for academics and professionals in the field',
      '• Include a full list of references or works cited',
      '• Found in academic journals or published by universities'
    ]},
    { label: 'Popular Sources', cols: [
      'News articles, blog posts, .com and .org websites',
      '• Not usually peer-reviewed',
      '• Written for the general public',
      '• May not include works cited or references',
      '• Found on the internet, in magazines, blogs, newspapers'
    ]},
  ];

  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentStep='researching' />
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
                placeholder="Understanding my topic and searching for sources..."
              />
            </div>
          </form>

          <div className="py-6">
            <ProgressSteps progress={25} />
          </div>

          <div className="py-10">
            <Image src="/ResearchingHeader.png" alt="Researching Header" width={1200} height={400} className="rounded-2xl shadow-md" />
          </div>

          <Tabs overviewContent={
            <div className="py-4">
              <div className="flex items-center shadow-md mb-6">
                <div className="w-5 bg-[#FFC627] self-stretch"></div>
                <div className="px-4 py-3 bg-white w-full">
                  <h2 className="text-xl font-bold text-gray-900">Section 1</h2>
                </div>
              </div>

              <h2 className="text-[26px] font-bold mb-4">Understanding my topic better and searching for sources</h2>

              <p className="text-[18px] text-black leading-relaxed mb-4">
                Academic writing is, at its heart, a conversation. You don’t need to know everything there is to know about your topic before you set out to write, nor do you need to address every piece of information about your topic in your own writing. But, as you’ve probably experienced, any time you try to join a conversation mid-way through, it is helpful to listen for a bit and get a sense of what is being said before you jump in and offer your own point. That is where research comes into the writing process.
              </p>

              <p className="text-[16px] text-gray-800 mb-4">
                Below, we will share some strategies for searching for sources and understanding your topic better, as well as some tips for practice! When researching, remember the conversation about your topic occurs at multiple levels — considering those levels helps you see what work is being done and where your work might fit.
              </p>

              <div className="border rounded-xl p-4 bg-gray-50 mb-6">
                <h3 className="text-lg font-bold mb-2">Writing Tip of the Day</h3>
                <p className="text-gray-800">Dive in and be scared later.</p>
              </div>

              <p className="text-[16px] text-gray-800 mb-4">
                You do not need to limit yourself to one type of source. Look at current news and opinion pieces, first-person accounts and interviews, and also search for journal articles and scholarly work.
              </p>

              <p className="text-[16px] text-gray-800 mb-4">
                Decide where to look for sources — Google can be a start, but narrow your search to a few places (library databases, scholarly search engines, specialty archives) to find more reliable material.
              </p>

              <p className="text-[16px] text-gray-800 mb-6">
                Decide on keywords — write a list of nouns and phrases related to your topic and use them as search keywords. Get a sense of the conversation by looking at multiple source levels: secondary, tertiary, and primary sources all play different roles.
              </p>

              <div className="mt-6 mb-6">
                <h3 className="text-[20px] font-semibold mb-3">Decide what type of sources you need</h3>
                <p className="text-gray-800 mb-4">
                  Different assignments call for different source types. Broadly, sources can be classified as scholarly or popular.
                </p>

                <div className="hidden md:grid md:grid-cols-2 md:gap-6">
                  {rows.map((r, i) => (
                    <div key={i} className="border rounded p-4">
                      <h4 className="font-bold mb-2">{r.label}</h4>
                      <p className="mb-2">{r.cols[0]}</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {r.cols.slice(1).map((item, idx) => <li key={idx}>{item.replace('• ', '')}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="md:hidden space-y-4">
                  {rows.map((r, i) => (
                    <div key={i} className="border rounded p-4">
                      <h4 className="font-bold mb-2">{r.label}</h4>
                      <p className="mb-2">{r.cols[0]}</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {r.cols.slice(1).map((item, idx) => <li key={idx}>{item.replace('• ', '')}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border rounded p-4">
                  <h4 className="font-bold mb-2">Example — Topic: The effect of microplastics on humans</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Question(s):</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        <li>How high are levels of microplastics in the oceans?</li>
                        <li>Do humans have microplastics in their bodies?</li>
                        <li>What adverse effects do microplastics have on human health?</li>
                        <li>Where do microplastics come from?</li>
                        <li>How long has microplastic pollution been considered an environmental problem?</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold">Keywords:</p>
                      <p className="text-sm text-gray-700 mb-2">microplastics, plastic pollution, microplastics AND health, history of plastic pollution, microplastics cleanup</p>

                      <p className="font-semibold">Potential sources:</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
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
          } />

          <div className="flex justify-between items-center p-6">
            <Link href="/ResearchingPage" className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center">
              Go Back to Previous Section: Researching Intro
            </Link>
            <Link href="/ResearchingPage3" className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Section 2 of Researching
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchingPage2;
