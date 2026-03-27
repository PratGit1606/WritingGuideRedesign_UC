"use client";

import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { LessonFooter } from "../LessonFooter";

export default function ResearchingLesson3() {
  return (
    <>
      <form className="flex w-full mx-auto mb-6">
        <div className="relative w-full">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="text"
            id="researching-search"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Reading and evaluating my sources..."
          />
        </div>
      </form>

      <div className="py-10">
        <Image
          src="/ResearchingHeader.png"
          alt="Researching Header"
          width={1200}
          height={400}
          className="rounded-2xl shadow-md w-full h-auto"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <div>
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
        </div>

        <div>
          <div className="p-6 space-y-6">

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
                <li>What question is the author answering?</li>
                <li>What is the author’s main claim?</li>
                <li>What evidence is used?</li>
                <li>What did you already know vs. learn?</li>
                <li>What questions remain?</li>
              </ul>
            </div>

            <div>
              <h3 className="bg-asu-gold inline-block px-2 py-1 font-bold">Read Rhetorically:</h3>
              <p className="mt-3 text-gray-800">
                Evaluate how effectively the author achieves their purpose.
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-800">
                <li>How does the text make you feel?</li>
                <li>How is it structured?</li>
                <li>Is the evidence credible?</li>
                <li>Who is the audience?</li>
              </ul>
            </div>

            <div className="border rounded-xl p-6 bg-gray-50">
              <h3 className="text-lg font-bold mb-2">Resource Spotlight</h3>
              <p>Use Power Notes to save quotes and insights while reading.</p>
            </div>

            <div className="border rounded p-4">
              <h4 className="font-semibold mb-2">Take Notes</h4>

              <textarea className="w-full border rounded p-2 mb-3" rows={3} placeholder="Goal..." />
              <textarea className="w-full border rounded p-2 mb-3" rows={3} placeholder="Preview..." />
              <textarea className="w-full border rounded p-2 mb-3" rows={4} placeholder="Notes..." />
              <textarea className="w-full border rounded p-2 mb-3" rows={3} placeholder="Summary..." />

              <button className="px-4 py-2 bg-black text-white rounded">Save</button>
            </div>

          </div>
        </div>
      </div>

      <LessonFooter
        prev={{ kind: "section", id: "researching-2", label: "Go Back to Section 2 of Researching" }}
        next={{ kind: "section", id: "researching-4", label: "Continue to Section 3 of Researching" }}
      />
    </>
  );
}