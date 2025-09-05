'use client'
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import {
    Search,
} from "lucide-react";
import { useState } from "react";
import Link from 'next/link';


const EditingPage = () => {

    const [completed, setCompleted] = useState<number[]>([]);

    const toggleItem = (id: number) => {
        setCompleted((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const items = [
        {
            id: 1,
            title: "Find every semicolon and double-check if it is used correctly.",
            desc: "Review your text for grammatical errors and proper punctuation.",
        },
        {
            id: 2,
            title:
                "Highlight every sentence that is more than two lines long. Look for long sentences together and edit to add variety.",
        },
        {
            id: 3,
            title:
                "I only have capital letters where I start a sentence or use a proper noun.",
        },
        {
            id: 4,
            title:
                "Search for every usage of the word “like” and remove any that are used casually.",
        },
    ];
    type SkillKey = "punctuation" | "sentence" | "capitalization" | "wordChoice";

    const [skills, setSkills] = useState<Record<SkillKey, string>>({
        punctuation: "",
        sentence: "",
        capitalization: "",
        wordChoice: "",
    });

    const handleSelect = (skill: SkillKey, level: string) => {
        setSkills((prev) => ({ ...prev, [skill]: level }));
    };

    const levels = ["Low", "Medium", "High"];

    const categories: { id: SkillKey; label: string }[] = [
        { id: "punctuation", label: "Punctuation Precision" },
        { id: "sentence", label: "Sentence Structure Variety" },
        { id: "capitalization", label: "Capitalization Consistency" },
        { id: "wordChoice", label: "Word Choice Awareness" },
    ];

    return (
        <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
            <header className="flex items-center justify-between px-10 py-4 shadow-sm bg-white bg-cover bg-center">
                <Image
                    src="/logo.png"
                    alt="ASU Logo"
                    width={80}
                    height={80}
                    className="h-20 w-auto"
                />
                <nav className="hidden md:flex gap-8 text-lg">
                    <Link href="/" className="hover:text-yellow-500">Home</Link>
                    <a href="#" className="hover:text-yellow-500">Resources</a>
                    <a href="#" className="hover:text-yellow-500">Tutors</a>
                    <a href="#" className="hover:text-yellow-500">About</a>
                    <a href="#" className="hover:text-yellow-500">Contact</a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="text-black text-lg">Sign in</button>
                    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">Get Started</button>
                </div>
            </header>

            <div className="flex w-full mx-auto px-10 mt-12 gap-8">
                <div className="w-80 sticky top-24 self-start">
                    <Sidebar currentStep='editing' />
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
                                placeholder="Writing"
                            />
                        </div>
                    </form>
                    <div className="py-6">
                        <ProgressSteps progress={100} />
                    </div>
                    <div className="py-10">
                        <Image src="/EditingHeader.png" alt="Editing Header"
                            width={1200}
                            height={400}
                            className="rounded-2xl shadow-md" /></div>
                    <div className="space-y-8">
                        <div className="bg-amber-50 border border-amber-200 rounded-xl text-center py-4 px-6 shadow-sm">
                            <h2 className="text-xl font-bold">Boom! You crushed it!</h2>
                            <p className="text-gray-800">
                                Your editing game is officially on point – keep slaying those
                                sentences
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
                                <h2 className="text-2xl font-bold mb-4">Checkpoints Achieved!</h2>
                                <img
                                    src="/notebook.png"
                                    alt="Notebook Checklist"
                                    className="w-40 sm:w-48 lg:w-56 h-auto"
                                />
                            </div>

                            <div className="flex-1 w-full space-y-4">
                                {items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleItem(item.id)}
                                        className={`w-full flex items-start gap-3 p-4 border rounded-lg shadow-sm text-left transition ${completed.includes(item.id)
                                            ? "bg-green-100 border-green-400"
                                            : "bg-white hover:bg-gray-50"
                                            }`}
                                    >
                                        <div
                                            className={`w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center ${completed.includes(item.id)
                                                ? "bg-green-500 border-green-500"
                                                : "border-gray-400"
                                                }`}
                                        >
                                            {completed.includes(item.id) && (
                                                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            {item.desc && (
                                                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                            )}
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
                            <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto items-center">
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
                                    <div
                                        key={cat.id}
                                        className="col-span-4 grid grid-cols-4 items-center gap-6"
                                    >
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
                                <li>
                                    Read your paper aloud, feeling confident in the meaning and word
                                    choice in each sentence.
                                </li>
                                <li>
                                    Find and correct errors that may interfere with your audience&apos;s
                                    understanding of your work.
                                </li>
                                <li>
                                    Consider your audience and purpose for writing and adapt your word
                                    choice appropriately.
                                </li>
                            </ol>
                            <p className="mt-4 font-semibold text-red-700">
                                All set? Let&apos;s move on to Citing!
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/EdifingPage4"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Previous Section: <br /> Section 3 of Editing
                        </a>
                        <a
                            href="/app"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to Citation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditingPage;