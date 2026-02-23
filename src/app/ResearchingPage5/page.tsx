// ResearchingPage5.jsx
'use client'
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/AnalysingProgressSteps';
import { Search } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

const ResearchingPage5 = () => {
  const [completed, setCompleted] = useState<number[]>([]);
  const toggleItem = (id:number) => setCompleted(prev => prev.includes(id) ? prev.filter(x => x!==id) : [...prev, id]);

  const items = [
    { id: 1, title: "I've gathered reliable sources related to my topic." },
    { id: 2, title: "I've kept track of where each source comes from for easy citation later." },
    { id: 3, title: "I've skimmed my sources to see how they support or challenge my ideas." },
    { id: 4, title: "I've double-checked that my sources are relevant and credible." },
  ];

  type SkillKey = "selection" | "organization" | "credibility" | "connection";
  const [skills, setSkills] = useState<Record<SkillKey, string>>({
    selection: "", organization: "", credibility: "", connection: ""
  });
  const levels = ["Low", "Medium", "High"];
  const categories = [
    { id: "selection" as SkillKey, label: "Source Selection" },
    { id: "organization" as SkillKey, label: "Research Organization" },
    { id: "credibility" as SkillKey, label: "Evaluating Credibility" },
    { id: "connection" as SkillKey, label: "Connecting Research to Ideas" },
  ];

  const handleSelect = (k: SkillKey, level:string) => setSkills(prev => ({...prev, [k]: level}));

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

              <input type="text" id="simple-search"
                     className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                     placeholder="Reflect on your research progress..." />
            </div>
          </form>

          <div className="py-6">
            <ProgressSteps progress={100} />
          </div>

          <div className="py-10">
            <Image src="/ResearchingHeader.png" alt="Researching Header" width={1200} height={400} className="rounded-2xl shadow-md" />
          </div>

          <div className="space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl text-center py-4 px-6 shadow-sm">
              <h2 className="text-xl font-bold">Checkpoints Achieved!</h2>
              <p className="text-gray-800 mt-2">You’re tracking your research well — review the checklist and tune your skill confidence.</p>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-shrink-0">
                <Image src="/notebook.png" alt="Notebook Checklist" width={220} height={220} className="object-contain" />
              </div>

              <div className="flex-1 w-full space-y-4">
                {items.map(it => (
                  <button key={it.id} onClick={()=>toggleItem(it.id)}
                          className={`w-full flex items-start gap-4 p-4 border rounded-lg shadow-sm text-left transition ${completed.includes(it.id) ? "bg-green-50 border-green-300" : "bg-white hover:bg-gray-50"}`}>
                    <div className={`w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center ${completed.includes(it.id) ? "bg-green-500 border-green-500" : "border-gray-400"}`}>
                      {completed.includes(it.id) && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
                    </div>
                    <div>
                      <p className="font-semibold">{it.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold inline-block px-6 py-2 border-4 border-black">Skill Confidence</h2>
            </div>

            <div className="overflow-x-auto">
              <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto items-center">
                <div></div>
                {levels.map(level => (
                  <div key={level} className="text-center font-semibold text-white bg-[#A65D3B] px-4 py-1 rounded-md">{level}</div>
                ))}

                {categories.map(cat => (
                  <div key={cat.id} className="col-span-4 grid grid-cols-4 items-center gap-6">
                    <div className="bg-amber-100 px-4 py-2 font-semibold text-center rounded-md">{cat.label}</div>
                    {levels.map(level => (
                      <button key={level} onClick={()=>handleSelect(cat.id, level)} className={`w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center ${skills[cat.id]===level ? "bg-[#A65D3B] border-[#A65D3B]" : "border-gray-400"}`}>
                        {skills[cat.id]===level && <span className="w-3 h-3 bg-white rounded-full"></span>}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="font-semibold mb-2">By the time you&apos;re done with this step, you should be able to:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                <li>Understand how to track down sources on your topic</li>
                <li>Critically read and evaluate your sources</li>
                <li>Have a plan for tracking and organizing your research</li>
              </ol>
              <p className="mt-4 font-semibold text-red-700">All set? Let&apos;s move on to Drafting!</p>
            </div>
          </div>

          <div className="flex justify-between items-center p-6">
            <Link href="/ResearchingPage4" className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center">
              Go Back to Previous Section: Researching Section 3
            </Link>
            <Link href="/DraftingPage" className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Drafting
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResearchingPage5;
