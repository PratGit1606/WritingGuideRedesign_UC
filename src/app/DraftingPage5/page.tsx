'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import { Search } from "lucide-react";
import Link from 'next/link';

const DraftingPage5 = () => {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const items = [
    {
      id: 1,
      title: "I've written down every idea that comes to mind — no filtering yet.",
    },
    {
      id: 2,
      title: "I've explored different directions I could take with my assignment.",
    },
    {
      id: 3,
      title: "I've considered my audience and how my ideas might connect to them.",
    },
    {
      id: 4,
      title: "I've chosen the strongest ideas to develop further.",
    },
  ];

  type SkillKey = "ideaGen" | "creative" | "relevance" | "audience";

  const [skills, setSkills] = useState<Record<SkillKey, string>>({
    ideaGen: "",
    creative: "",
    relevance: "",
    audience: "",
  });

  const handleSelect = (skill: SkillKey, level: string) => {
    setSkills((prev) => ({ ...prev, [skill]: level }));
  };

  const levels = ["Low", "Medium", "High"];

  const categories: { id: SkillKey; label: string }[] = [
    { id: "ideaGen", label: "Idea Generation" },
    { id: "creative", label: "Creative Exploration" },
    { id: "relevance", label: "Relevance to Assignment" },
    { id: "audience", label: "Audience Connection" },
  ];

  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-6 md:px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentSection="drafting" currentStep="final" />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-4">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="simple-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Reflect on your drafting progress..."
              />
            </div>
          </form>

          <div className="py-4">
            <ProgressSteps progress={100} />
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

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <h2 className="text-xl font-bold">Checkpoints Achieved!</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/notebook.png"
                  alt="Checklist Illustration"
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 w-full space-y-4">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`w-full flex items-start gap-4 p-4 border rounded-lg shadow-sm text-left transition ${completed.includes(item.id)
                      ? "bg-green-50 border-green-300"
                      : "bg-white hover:bg-gray-50"
                      }`}
                    aria-pressed={completed.includes(item.id)}
                  >
                    <div
                      className={`w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center ${completed.includes(item.id)
                        ? "bg-green-500 border-green-500"
                        : "border-gray-400"
                        }`}
                    >
                      {completed.includes(item.id) && (
                        <span className="w-2.5 h-2.5 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{item.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold inline-block px-6 py-2 border-4 border-black">
                Skill Confidence
              </h2>
            </div>

            <div className="overflow-x-auto">
              <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto items-center">
                <div></div>
                {levels.map((level) => (
                  <div
                    key={level}
                    className="text-center font-semibold text-white bg-[#A65D3B] px-4 py-1 rounded-md"
                  >
                    {level}
                  </div>
                ))}

                {categories.map((cat) => (
                  <div key={cat.id} className="col-span-4 grid grid-cols-4 items-center gap-6">
                    <div className="bg-amber-100 px-4 py-2 font-semibold text-center rounded-md">
                      {cat.label}
                    </div>
                    {levels.map((level) => (
                      <button
                        key={level}
                        onClick={() => handleSelect(cat.id, level)}
                        className={`w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center ${skills[cat.id] === level
                          ? "bg-[#A65D3B] border-[#A65D3B]"
                          : "border-gray-400"
                          }`}
                        aria-pressed={skills[cat.id] === level}
                        aria-label={`${cat.label} ${level}`}
                      >
                        {skills[cat.id] === level && (
                          <span className="w-3 h-3 bg-white rounded-full"></span>
                        )}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="font-semibold mb-2">
                By the time you&apos;re done with this step, you should be able to:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                <li>Create your outline and evaluate how your argument will be presented in your draft.</li>
                <li>Understand how to integrate and leverage your research in your writing.</li>
                <li>Identify potential counterarguments and understand where there are places for disagreement in your thesis.</li>
              </ol>

              <p className="mt-4 font-semibold text-red-700">
                All set? Let&apos;s move on to Researching!
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center p-6">
            <Link
              href="/DraftingPage4"
              className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-100 shadow-sm text-center"
            >
              Go Back to Section 3 of Drafting
            </Link>
            <Link
              href="/RevisionPage"
              className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
            >
              Continue to Revision
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftingPage5;