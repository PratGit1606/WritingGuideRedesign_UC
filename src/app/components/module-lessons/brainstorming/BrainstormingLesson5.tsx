"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import { LessonFooter } from "../LessonFooter";

type SkillKey = "ideaGen" | "creative" | "relevance" | "audience";

export default function BrainstormingLesson5() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCompleted((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
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
      title: "I've considered how my ideas connect to my audience.",
    },
    {
      id: 4,
      title: "I've chosen the strongest ideas to develop further.",
    },
  ];

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
    <>
      <form className="flex w-full mx-auto w-full mb-6">
        <div className="relative w-full">
          <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          <input
            type="text"
            id="simple-search"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Reflect on your brainstorming progress..."
          />
        </div>
      </form>
      <div className="py-10">
        <Image
          src="/BrainstormingHeader.png"
          alt="Brainstorming Header"
          width={1200}
          height={400}
          className="rounded-2xl shadow-md w-full h-auto"
        />
      </div>

      <div className="space-y-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl text-center py-4 px-6 shadow-sm">
          <h2 className="text-xl font-bold">Checkpoints Achieved!</h2>
          <p className="text-gray-800 mt-2">
            Nice work — you’ve finished Brainstorming. Review the checklist and rate your confidence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/notebook.png"
              alt="Notebook Checklist"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>

          <div className="flex-1 w-full space-y-4">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleItem(item.id)}
                className={`w-full flex items-start gap-4 p-4 border rounded-lg shadow-sm text-left transition ${
                  completed.includes(item.id) ? "bg-green-50 border-green-300" : "bg-white hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center ${
                    completed.includes(item.id) ? "bg-green-500 border-green-500" : "border-gray-400"
                  }`}
                >
                  {completed.includes(item.id) && <span className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
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
            <div />
            {levels.map((level) => (
              <div key={level} className="text-center font-semibold text-white bg-[#A65D3B] px-4 py-1 rounded-md">
                {level}
              </div>
            ))}

            {categories.map((cat) => (
              <div key={cat.id} className="col-span-4 grid grid-cols-4 items-center gap-6">
                <div className="bg-amber-100 px-4 py-2 font-semibold text-center rounded-md">{cat.label}</div>
                {levels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => handleSelect(cat.id, level)}
                    className={`w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center ${
                      skills[cat.id] === level ? "bg-[#A65D3B] border-[#A65D3B]" : "border-gray-400"
                    }`}
                  >
                    {skills[cat.id] === level && <span className="w-3 h-3 bg-white rounded-full" />}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-2">By the time you&apos;re done with this step, you should be able to:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            <li>Identify a topic and thesis that matches your assignment description.</li>
            <li>Create an outline or mind-map of your assignment based on your thesis.</li>
            <li>Develop a short research plan based on your outline/mind map.</li>
          </ol>
          <p className="mt-4 font-semibold text-red-700">All set? Let&apos;s move on to Drafting!</p>
        </div>
      </div>

      <LessonFooter
        prev={{
          kind: "section",
          id: "brainstorming-4",
          label: "Go Back to Section 3 of Brainstorming",
        }}
        next={{
          kind: "section",
          id: "drafting-1",
          label: "Continue to Drafting",
        }}
      />
    </>
  );
}
