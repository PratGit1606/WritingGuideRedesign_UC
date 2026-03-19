'use client'
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import { Search } from "lucide-react";
import ProgressSteps from '../components/ProgressSteps';
import Tabs from '../components/Tabs';
import Link from 'next/link';

const ResearchingPage3 = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentStep='reading' />
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
                placeholder="Reading and evaluating my sources..."
              />
            </div>
          </form>

          <div className="py-6">
            <ProgressSteps progress={50} />
          </div>

          <div className="py-10">
            <Image src="/ResearchingHeader.png" alt="Researching Header" width={1200} height={400} className="rounded-2xl shadow-md" />
          </div>

          <Tabs pageId="ResearchingPage3" overviewContent={
            <div className="py-4">
              <div className="flex items-center shadow-md mb-6">
                <div className="w-5 bg-asu-gold self-stretch"></div>
                <div className="px-4 py-3 bg-white w-full">
                  <h2 className="text-xl font-bold text-gray-900">Section 2</h2>
                </div>
              </div>

              <h2 className="text-[28px] font-bold mb-4">Reading and evaluating my sources</h2>

              <p className="text-[16px] text-gray-800 mb-4">
                Now that you have found some promising sources, how do you read them effectively? When you read a source, it is important to understand the information the source is conveying and to keep track of your own thoughts and reactions. Ultimately, your reactions plus the source’s content become what you will write about.
              </p>

              <p className="text-[16px] text-gray-800 mb-4">
                As you read, have a goal for what you want to learn and keep track of it. Below are approaches for reading and evaluating sources and a few practice tips.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="bg-asu-gold inline-block px-2 py-1 font-bold">Read Critically:</h3>
                  <p className="mt-3 text-gray-800">
                    Reading critically means going beyond absorbing information and actually having a conversation with what you read. Notice and keep track of your own reactions to what you read — critical reading prioritizes reflection on what a text makes you think and how it makes you feel. This includes checking for rhetorical clarity and understanding.
                  </p>
                </div>

                <div>
                  <h3 className="bg-asu-gold inline-block px-2 py-1 font-bold">Read for Understanding:</h3>
                  <p className="mt-3 text-gray-800">
                    Read to understand what the author is saying. Keep these questions in mind and document answers in your notes:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-800">
                    <li>What question is the author answering, or what topic is the author exploring? Why is that topic important to them?</li>
                    <li>What is the author’s main claim, main idea, or argument?</li>
                    <li>What evidence does the author introduce to support their claim, main idea, or argument?</li>
                    <li>What did you already know about the topic before reading this text? What new information do you know now?</li>
                    <li>What do you still have questions about?</li>
                  </ul>
                </div>

                <div>
                  <h3 className="bg-asu-gold inline-block px-2 py-1 font-bold">Read Rhetorically:</h3>
                  <p className="mt-3 text-gray-800">
                    Reading rhetorically means evaluating how effectively the author achieves their purpose and builds an argument. Keep these questions in mind:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-800">
                    <li>How does this text make you feel as you read it? Which elements cause that reaction?</li>
                    <li>How is the text structured? Can you follow the author’s reasoning and connections?</li>
                    <li>Where does the author draw evidence from? Do you feel confident in their credibility?</li>
                    <li>What is the author’s background and expertise?</li>
                    <li>Who is the author’s intended audience?</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-xl p-6 bg-gray-50 mt-6">
                <h3 className="text-lg font-bold mb-2">Resource Spotlight: Take Notes As You Go</h3>
                <p className="text-gray-700">
                  Here’s an idea: use <a href="#" className="text-blue-600 underline">Power Notes</a> to save important quotes and take notes from the sources you read.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-[20px] font-semibold mb-3">Take notes and review them</h3>
                <p className="text-gray-800 mb-4">
                  As you read, keep track of your goals and reactions. The combination of source content and your notes is what you’ll use in writing. Below is a responsive note-taking / reflection tool that works like the printed checklist but is friendly on phones and desktops.
                </p>

                <div className="space-y-4">
                  <div className="md:flex md:gap-6">
                    <div className="md:flex-1">
                      <div className="border rounded p-4">
                        <h4 className="font-semibold mb-2">Fill out the table to get started</h4>
                        <div className="grid grid-cols-1 gap-3">
                          <label className="text-sm font-semibold">Stage: Define your goal</label>
                          <textarea className="w-full border rounded p-2" rows={3} placeholder="What do you hope to learn from this text?" />
                          <label className="text-sm font-semibold">Preview the text</label>
                          <textarea className="w-full border rounded p-2" rows={3} placeholder="What do the title and headings tell you? Are there figures or tables?" />
                          <label className="text-sm font-semibold">Take notes</label>
                          <textarea className="w-full border rounded p-2" rows={4} placeholder="Experiment with notetaking strategies that work for you..." />
                          <label className="text-sm font-semibold">Review your notes</label>
                          <textarea className="w-full border rounded p-2" rows={3} placeholder="Write a summary of the main points you learned from the source." />
                        </div>
                      </div>
                    </div>

                    <div className="md:w-96 mt-4 md:mt-0">
                      <div className="border rounded p-4">
                        <h4 className="font-semibold mb-2">How will you indicate each component?</h4>
                        <p className="text-sm text-gray-700 mb-2">Write out a short annotation that records your answers and reactions as you read.</p>
                        <textarea className="w-full border rounded p-2" rows={8} placeholder="Write an annotation here..." />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-4 text-right">
                  <button
                    type="button"
                    onClick={() => alert('Save stub — replace with actual handler')}
                    className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
                  >
                    Save notes
                  </button>
                </div>
              </div>

            </div>
          } />

          <div className="flex justify-between items-center p-6">
            <Link href="/ResearchingPage2" className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center">
              Go Back to Section 2 of Researching
            </Link>
            <Link href="/ResearchingPage4" className="px-6 py-3 rounded-lg border-2 border-asu-gold bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Section 3 of Researching
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResearchingPage3;
