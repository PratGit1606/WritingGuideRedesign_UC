'use client'

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { Search } from "lucide-react";
import ProgressSteps from '../components/ProgressSteps';
import TabWithChecklist from "../components/Tabs";
import Link from "next/link";

export default function DraftingPage2() {
  const [freewrite, setFreewrite] = useState<string>("");

  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-6 md:px-10 mt-12 gap-8">
        <aside className="w-80 sticky top-24 self-start hidden lg:block">
          <Sidebar currentStep="drafting" />
        </aside>

        <main className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="simple-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Search drafting tips..."
              />
            </div>
          </form>

          <div className="py-4">
            <ProgressSteps progress={10} />
          </div>

          <div className="py-6">
            <Image
              src="/DraftingHeader.png"
              alt="Drafting Header — put words on the page"
              width={1200}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>

          <TabWithChecklist pageId="DraftingPage2"
            overviewContent={
              <div className="py-4">
                <div className="flex items-center shadow-md mb-6">
                  <div className="w-5 bg-asu-gold self-stretch"></div>
                  <div className="px-4 py-3 bg-white w-full">
                    <h2 className="text-xl font-bold text-gray-900">Section 1</h2>
                  </div>
                </div>

                <h2 className="text-[26px] font-bold mb-4">Writing out my thesis statement or argument</h2>

                <p className="text-[16px] text-gray-800 leading-relaxed mb-4">
                  Writing a thesis statement requires you to consider what your assignment description is asking you to take a stance on and how you plan to present that stance by presenting your argument. By reviewing your ideas and the research you have read so far, you can begin to craft your own argument and thesis statement. Your thesis should include the scope of your topic, how you will present your argument, and why it is significant to your audience.
                </p>

                <p className="text-[16px] text-gray-800 mb-4">
                  Below, we share strategies for drafting a thesis and give you a chance to practice. When drafting a thesis statement, consider your brainstorming and research so far and determine what you want to argue and how you want to convince your audience of your stance.
                </p>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">List or Bullet:</h3>
                  <p className="text-gray-800 mb-2">
                    List words or phrases related to your particular topic. Using multiple lists can help you see other authors’ perspectives and help you gather and organize your ideas. Create lists based on:
                  </p>
                  <ul className="list-disc list-inside text-gray-800 ml-4 space-y-1">
                    <li>Your topic</li>
                    <li>Words from other arguments you have read in your research</li>
                    <li>Words opposite their original ideas or thesis</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Freewrite:</h3>
                  <p className="text-gray-800 mb-2">
                    Write whatever comes to mind about the topic you are addressing with your thesis statement. You can write a paragraph, a list, ask questions, or draft an outline — there is no structure to a free write.
                  </p>
                  <ul className="list-disc list-inside text-gray-800 ml-4 space-y-1">
                    <li>Don’t worry about spelling or grammar, and write about why you feel stuck if you don’t know what to write about. These thoughts may form ideas or questions for your thesis.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Discuss:</h3>
                  <p className="text-gray-800 mb-2">
                    Sit down and talk to a peer, professor, or writing tutor. Talking about your ideas will help you organize your thoughts on your argument. Share things such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-800 ml-4 space-y-1">
                    <li>What do you already know?</li>
                    <li>What do you think is cool?</li>
                    <li>What are things you think are confusing?</li>
                  </ul>

                  <p className="text-gray-800 mt-3">
                    Once you get your initial thoughts out, you will then be able to refine your thesis into an arguable statement that can support your overall argument.
                  </p>
                </div>

                <div className="border rounded-xl p-6 bg-gray-50 mb-6 flex items-center gap-4">
                  <div className="flex-1 text-center">
                    <h3 className="text-lg font-bold">Writing Tip of the Day</h3>
                    <p className="text-gray-800 mt-2">Dive in and be scared later.</p>
                  </div>

                  <div className="w-28 hidden sm:block">
                    <Image src="/coffee-pot.png" alt="Coffee pouring" width={120} height={120} />
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Start a Freewrite below</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Continuously write for two minutes about what you are looking for and how you want to say it in your writing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div className="md:col-span-2">
                      <textarea
                        value={freewrite}
                        onChange={(e) => setFreewrite(e.target.value)}
                        placeholder="Start typing your freewrite here..."
                        className="w-full min-h-[220px] md:min-h-[300px] border border-gray-300 rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-vertical"
                      />
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-sm text-gray-600">Tip: write without editing — you can polish later.</div>
                        <div className="space-x-2">
                          <button
                            type="button"
                            onClick={() => setFreewrite("")}
                            className="px-3 py-2 border rounded-md text-sm bg-white hover:bg-gray-50"
                          >
                            Clear
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              // placeholder: you can replace with a real save handler
                              try {
                                localStorage.setItem("drafting_freewrite", freewrite || "");
                                alert("Freewrite saved locally.");
                              } catch {
                                alert("Unable to save locally.");
                              }
                            }}
                            className="px-3 py-2 rounded-md text-sm bg-black text-white hover:bg-gray-800"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </div>


                <div className="mt-8 flex justify-between items-center">
                  <Link
                    href="/DraftingPage"
                    className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm"
                  >
                    Go Back to Intro of Drafting
                  </Link>

                  <Link
                    href="/DraftingPage3"
                    className="px-6 py-3 rounded-lg border-2 border-asu-gold bg-black text-white hover:bg-gray-800 shadow-md"
                  >
                    Continue to Section 2 of Drafting
                  </Link>
                </div>
              </div>
            }
          />
        </main>
      </div>
    </div>
  );
}
