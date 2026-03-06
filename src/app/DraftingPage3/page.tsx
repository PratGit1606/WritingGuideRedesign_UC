'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { Search } from "lucide-react";
import ProgressSteps from '../components/ProgressSteps';
import TabWithChecklist from "../components/Tabs";
import Link from "next/link";

export default function DraftingPage3() {
  const [assignmentDesc, setAssignmentDesc] = useState<string>("");
  const [outlineNotes, setOutlineNotes] = useState<string>("");

  useEffect(() => {
    try {
      const savedDesc = localStorage.getItem("drafting_assignment_desc");
      const savedOutline = localStorage.getItem("drafting_outline_notes");
      if (savedDesc) setAssignmentDesc(savedDesc);
      if (savedOutline) setOutlineNotes(savedOutline);
    } catch {
    }
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem("drafting_assignment_desc", assignmentDesc);
      localStorage.setItem("drafting_outline_notes", outlineNotes);
      alert("Saved locally.");
    } catch {
      alert("Unable to save locally.");
    }
  };

  const handleClear = () => {
    setAssignmentDesc("");
    setOutlineNotes("");
    try {
      localStorage.removeItem("drafting_assignment_desc");
      localStorage.removeItem("drafting_outline_notes");
    } catch {}
  };

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
                aria-label="Search drafting tips"
              />
            </div>
          </form>

          <div className="py-4">
            <ProgressSteps progress={50} />
          </div>

          <div className="py-6">
            <Image
              src="/DraftingHeader.png"
              alt="Drafting Header"
              width={1200}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>

          <TabWithChecklist pageId="DraftingPage3"
            overviewContent={
              <div className="py-4">
                <div className="flex items-center shadow-md mb-6">
                  <div className="w-5 bg-[#FFC627] self-stretch"></div>
                  <div className="px-4 py-3 bg-white w-full">
                    <h2 className="text-xl font-bold text-gray-900">Section 2</h2>
                  </div>
                </div>

                <h2 className="text-[26px] font-bold mb-4">Integrating my evidence into my assignment</h2>

                <p className="text-[16px] text-gray-800 leading-relaxed mb-4">
                  After drafting your thesis statement, continue to refine your ideas and create an outline for your assignment. From your outline you can visualize how to present your thesis to your audience and integrate evidence into your writing to support it. Integrating evidence is essential in academic writing because it shows authority, presents a position or critique, refers to work that supports your own, and adds depth to your writing.
                </p>

                <p className="text-[16px] text-gray-800 mb-4">
                  To integrate your evidence into your writing, you will need to summarize and synthesize your sources.
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold bg-[#FFC627] inline-block px-2 py-1 mb-3">Here’s what we mean by summary and synthesis:</h3>

                  <div className="hidden md:block border rounded">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-white">
                          <th className="border px-4 py-3 font-semibold">Term Definition</th>
                          <th className="border px-4 py-3 font-semibold">What Does It Do for You?</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-3 align-top">
                            <strong>A summary</strong> is a condensed and objective restatement, in your own words, of an author’s core message or argument.
                          </td>
                          <td className="border px-4 py-3 align-top">
                            A <strong>summary</strong> helps the writer set up a problem or present background information for their audience.
                          </td>
                        </tr>

                        <tr>
                          <td className="border px-4 py-3 align-top">
                            <strong>Synthesis</strong> is breaking sources into differing or similar parts and assembling them in a new way to create something original.
                          </td>
                          <td className="border px-4 py-3 align-top">
                            <strong>Synthesis</strong> combines multiple voices from current research with your perspective to create a new argument.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="md:hidden space-y-3">
                    <div className="border rounded p-3">
                      <h4 className="font-semibold mb-2">Term Definition</h4>
                      <p><strong>A summary</strong> is a condensed and objective restatement, in your own words, of an author’s core message or argument.</p>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-semibold mb-2">What Does It Do for You?</h4>
                      <p>A <strong>summary</strong> helps the writer set up a problem or present background information for their audience.</p>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-semibold mb-2">Term Definition</h4>
                      <p><strong>Synthesis</strong> is breaking sources into differing or similar parts and assembling them in a new way to create something original.</p>
                    </div>
                    <div className="border rounded p-3">
                      <h4 className="font-semibold mb-2">What Does It Do for You?</h4>
                      <p><strong>Synthesis</strong> combines multiple voices from current research with your perspective to create a new argument.</p>
                    </div>
                  </div>
                </div>

                <p className="text-[16px] text-gray-800 mb-4">
                  To balance summary and synthesis and to integrate evidence, you will need to quote or paraphrase your sources.
                </p>

                <ul className="list-disc list-inside text-gray-800 mb-6">
                  <li><strong>Direct Quotation:</strong> Quoting a sentence or phrase exactly as it appears when the words are vivid or significant and have an impact on the reader.</li>
                  <li><strong>Paraphrasing:</strong> Your rendition of essential information and ideas expressed by someone else, presented in a new form.</li>
                </ul>

                <p className="text-[16px] text-gray-800 mb-6">
                  Below are strategies for drafting an outline that helps you organize, summarize and synthesize your evidence. Consider how you want to organize the evidence you have collected so far.
                </p>

                <h3 className="text-lg font-semibold mb-3">Build an Outline from your Assignment Description</h3>
                <p className="text-gray-800 mb-4">
                  Take your assignment description and use it as a starting outline:
                </p>
                <ul className="list-disc list-inside text-gray-800 mb-4">
                  <li>Break up each point that the assignment description wants you to address.</li>
                  <li>Summarize the evidence you have so far that can answer those points — this may be a paragraph, list, collection of quotes, or other research notes.</li>
                  <li>Once you have a draft beneath each section, review your evidence and ensure you’re addressing what the prompt asks.</li>
                </ul>

                <div className="mb-6">
                  <h4 className="font-semibold inline-block bg-[#FFC627] px-2 py-1">Let’s practice building an outline below!</h4>
                </div>

                <div className="border rounded p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="assignmentDesc" className="block text-sm font-semibold mb-2">Paste your assignment description here</label>
                      <textarea
                        id="assignmentDesc"
                        value={assignmentDesc}
                        onChange={(e) => setAssignmentDesc(e.target.value)}
                        placeholder="Break your assignment description into sections and plug in where your evidence can support the point it is asking you to make."
                        className="w-full min-h-[160px] md:min-h-[220px] border border-gray-300 rounded p-3 resize-vertical focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        aria-label="Assignment description"
                      />
                    </div>

                    <div>
                      <label htmlFor="outlineNotes" className="block text-sm font-semibold mb-2">Outline / Evidence notes</label>
                      <textarea
                        id="outlineNotes"
                        value={outlineNotes}
                        onChange={(e) => setOutlineNotes(e.target.value)}
                        placeholder="For each section, note supporting evidence, quotes, and how you will connect it to your argument."
                        className="w-full min-h-[160px] md:min-h-[220px] border border-gray-300 rounded p-3 resize-vertical focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        aria-label="Outline notes"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 mt-4">
                    <div className="text-sm text-gray-600">
                      Tip: paste the prompt, then under each prompt section write which piece of evidence you will use there.
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleClear}
                        className="px-3 py-2 border rounded-md text-sm bg-white hover:bg-gray-50"
                      >
                        Clear
                      </button>

                      <button
                        type="button"
                        onClick={handleSave}
                        className="px-3 py-2 rounded-md text-sm bg-black text-white hover:bg-gray-800"
                      >
                        Save outline
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <Link
                    href="/DraftingPage2"
                    className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm"
                  >
                    Go Back to Section 1 of Drafting
                  </Link>

                  <Link
                    href="/DraftingPage4"
                    className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md"
                  >
                    Continue to Section 3 of Drafting
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
