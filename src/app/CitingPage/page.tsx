// CitingPage.jsx
'use client'
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import { Search } from "lucide-react";
import ProgressSteps from '../components/ProgressSteps';
import Link from 'next/link';

const CitingPage = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentStep="citing" />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="citing-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Search citing & formatting tips..."
                aria-label="Search citing tips"
              />
            </div>
          </form>

          <div className="py-6">
            <ProgressSteps progress={0} />
          </div>

          <div className="py-10">
            <Image
              src="/CitingHeader.png"
              alt="Citing Header — give credit and ready-to-submit"
              width={1200}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 items-center px-8 py-10 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold leading-snug">
                Time to give credit where it’s due, <br />
                <span className="underline decoration-yellow-400 font-extrabold">
                  Let’s turn research into Ready-to-Submit writing!
                </span>
              </h1>

              <p className="text-lg">
                Make sure <span className="font-semibold">your sources are properly cited</span> and your work meets academic standards.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/EditingFrontGraphic.png"
                alt="Citing illustration"
                width={420}
                height={420}
              />
            </div>
          </section>

          <div className="max-w-6xl mx-auto border-2 border-black rounded-sm shadow-md">
            <div className="border-b-2 border-black bg-gray-100 py-3 text-center">
              <h2 className="text-xl font-bold">Future Checkpoints to look out for</h2>
            </div>

            <div className="flex">
              <div className="flex flex-col justify-between py-6 px-4 bg-white border-r-2 border-black">
                <div className="w-5 h-5 rounded-full bg-black mb-16"></div>
                <div className="w-5 h-5 rounded-full bg-black mb-16"></div>
                <div className="w-5 h-5 rounded-full bg-black"></div>
              </div>

              <div className="flex-1 p-6 space-y-4">
                <ul className="list-disc list-inside space-y-3 text-gray-800">
                  <li>I have checked which citation style (APA, MLA, etc.) I need to follow.</li>
                  <li>I have properly cited all my sources, both in-text and on the reference page.</li>
                  <li>I have made sure my formatting follows the style guide.</li>
                  <li>I have double-checked for accidental plagiarism by paraphrasing carefully.</li>
                  <li>I have included a complete and correctly formatted reference list.</li>
                  <li>I feel confident that my assignment is polished and ready to submit.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-6">
            <Link
              href="/EditingPage"
              className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
            >
              Go Back to Previous Section: Editing
            </Link>

            <Link
              href="/CitingPage2"
              className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
            >
              Continue to Section 1 of Citing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitingPage;
