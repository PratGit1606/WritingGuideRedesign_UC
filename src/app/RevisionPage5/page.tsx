// RevisionPage5.jsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import { Search } from "lucide-react";
import Link from 'next/link';

const RevisionPage5 = () => {
  const [completed, setCompleted] = useState<number[]>([]);
  const toggleItem = (id:number) =>
    setCompleted(prev => prev.includes(id) ? prev.filter(x => x!==id) : [...prev, id]);

  type SkillKey = 'clarity'|'arguments'|'bigPicture'|'feedback';
  const [skills, setSkills] = useState<Record<SkillKey, string>>({
    clarity: '', arguments: '', bigPicture: '', feedback: ''
  });
  const levels = ['Low','Medium','High'];
  const categories: { id: SkillKey; label: string }[] = [
    { id: 'clarity', label: 'Clarity and Organization' },
    { id: 'arguments', label: 'Strengthening Arguments' },
    { id: 'bigPicture', label: 'Big-Picture Thinking' },
    { id: 'feedback', label: 'Feedback Incorporation' },
  ];
  const handleSelect = (k: SkillKey, level: string) =>
    setSkills(prev => ({ ...prev, [k]: level }));

  const items = [
    { id: 1, title: "I've re-read my draft with fresh eyes." },
    { id: 2, title: "I've checked if my ideas are clear, organized, and easy to follow." },
    { id: 3, title: "I've made sure my introduction and conclusion support my argument." },
    { id: 4, title: "I've made changes to strengthen my writing based on feedback and self-review." },
  ];

  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-6 md:px-10 mt-12 gap-8">
        <aside className="w-72 md:w-80 sticky top-24 self-start">
          <Sidebar currentStep="revision" />
        </aside>

        <main className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-6">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="revision5-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Reflect on your revision progress..."
                aria-label="Search revision guidance"
              />
            </div>
          </form>

          <div className="py-4">
            <ProgressSteps progress={100} />
          </div>

          <div className="py-6">
            <Image src="/RevisionHeader.png" alt="Revision header" width={1200} height={300} className="rounded-2xl shadow-md object-cover" />
          </div>

          <section className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <Image src="/notebook.png" alt="Checklist notebook" width={200} height={200} className="object-contain" />
              </div>

              <div className="flex-1 w-full space-y-4">
                <h2 className="text-xl font-bold">Checkpoints Achieved!</h2>
                <p className="text-gray-700">Review these final checklist items and mark what you&apos;ve completed.</p>

                <div className="space-y-3">
                  {items.map(it => (
                    <button
                      key={it.id}
                      onClick={() => toggleItem(it.id)}
                      className={`w-full flex items-start gap-4 p-4 border rounded-lg shadow-sm text-left transition ${completed.includes(it.id) ? 'bg-green-50 border-green-300' : 'bg-white hover:bg-gray-50'}`}
                      aria-pressed={completed.includes(it.id)}
                    >
                      <div className={`w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center ${completed.includes(it.id) ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}>
                        {completed.includes(it.id) && <span className="w-2.5 h-2.5 bg-white rounded-full" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{it.title}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold inline-block px-6 py-2 border-4 border-black">Skill Confidence</h3>
              </div>

              <div className="overflow-x-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-4 md:grid-cols-4 gap-4 items-center mb-2">
                    <div className="hidden md:block"></div>
                    {levels.map(l => (
                      <div key={l} className="text-center font-semibold text-white bg-[#A65D3B] px-4 py-1 rounded-md">
                        {l}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {categories.map(cat => (
                      <div key={cat.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="bg-amber-100 md:px-4 md:py-2 font-semibold text-center rounded-md">
                          {cat.label}
                        </div>

                        {levels.map(level => (
                          <div key={level} className="flex justify-center md:justify-center">
                            <button
                              onClick={() => handleSelect(cat.id as SkillKey, level)}
                              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition ${skills[cat.id as SkillKey] === level ? 'bg-[#A65D3B] border-[#A65D3B]' : 'border-gray-300'}`}
                              aria-pressed={skills[cat.id as SkillKey] === level}
                              aria-label={`${cat.label} ${level}`}
                            >
                              {skills[cat.id as SkillKey] === level && <span className="w-3 h-3 bg-white rounded-full" />}
                            </button>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <p className="font-semibold mb-2">By the time you&apos;re done with this step, you should be able to:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-800 mb-4">
                  <li>Critically evaluate the effectiveness of your own writing, including organization and the strength of your main argument.</li>
                  <li>Bring out your own perspective and voice by synthesizing your evidence.</li>
                  <li>Analyze and strengthen your own argument.</li>
                </ol>
                <p className="mt-2 font-semibold text-red-700">All set? Let&apos;s move on to Editing!</p>
              </div>
            </div>
          </section>

          <div className="flex justify-between items-center p-6 mt-6">
            <Link href="/RevisionPage4" className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-100 shadow-sm text-center">
              Go Back to Section 3 of Revision
            </Link>

            <Link href="/EditingPage" className="px-6 py-3 rounded-lg border-2 border-asu-gold bg-black text-white hover:bg-gray-800 shadow-md text-center">
              Continue to Editing
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RevisionPage5;
