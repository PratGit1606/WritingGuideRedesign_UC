"use client"
import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/AnalysingProgressSteps';
import {
    Search,
} from "lucide-react";
import Tabs from '../components/AnalysingTabs';

const BrainstormingPage4 = () => {
    return (
        <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
            <div className="flex w-full mx-auto px-10 mt-12 gap-8">
                <div className="w-80 sticky top-24 self-start">
                    <Sidebar currentStep='rubric' />
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
                                placeholder="Identify missing information and questions..."
                            />
                        </div>
                    </form>
                    <div className="py-6">
                        <ProgressSteps progress={98} />
                    </div>
                    <div className="py-10">
                        <Image src="/AnalysingHeader.png" alt="Brainstorming Header"
                            width={1200}
                            height={400}
                            className="rounded-2xl shadow-md" /></div>
                    <Tabs overviewContent={
                        <div className="py-4">
                            <div className="flex items-center shadow-md mb-6">
                                <div className="w-5 bg-[#FFC627] self-stretch"></div>
                                <div className="px-4 py-3 bg-white w-full">
                                    <h2 className="text-xl font-bold text-gray-900">Section 3</h2>
                                </div>
                            </div>

                            <h2 className="text-[30px] font-bold mb-4">Identifying where I need more information</h2>

                            <p className="text-[18px] text-black leading-relaxed mb-6">
                                Once you have your outline and thesis written, you can begin figuring out what you know and what you need to explore your topic further. By identifying what you know and don’t know, you will be able to start developing your research plan. In this section, we will discuss tools that you can use, such as questions to help you flesh out where you need additional information, considering your topic choice and paper requirements.
                            </p>

                            <h3 className="text-[20px] font-semibold mb-3">Questions to help identify gaps</h3>
                            <ul className="list-disc list-inside space-y-2 text-[18px] text-gray-800 mb-6">
                                <li>What would my reader need to know to accept this idea?</li>
                                <li>Which claims need evidence or examples?</li>
                                <li>What aspects of my idea are vague or underdeveloped?</li>
                            </ul>

                            <div className="border rounded-xl p-6 bg-gray-50 mb-8">
                                <h3 className="text-lg font-bold mb-2">Resource Spotlight: Talk to a Tutor</h3>
                                <p className="text-gray-700">
                                    If you’re stuck, tutors can help you spot missing links in your logic and suggest sources to consult.
                                </p>
                            </div>

                            <div className="mt-6 mb-6">
                                <h3 className="text-[22px] font-bold mb-2">Create a &quot;missing links&quot; checklist (responsive)</h3>
                                <p className="text-gray-700 mb-4">
                                    Use the form below to capture the information you still need. On small screens each question stacks into its own labeled input; on larger screens the layout looks and behaves like a compact table.
                                </p>

                                {/* Responsive "table" form */}
                                <form className="space-y-4">
                                    {/* Header row for wide screens */}
                                    <div className="hidden md:grid md:grid-cols-3 md:gap-4 md:items-center md:py-2 md:px-2 md:mb-2">
                                        <div className="font-semibold">Item</div>
                                        <div className="font-semibold">What to fill in</div>
                                        <div className="font-semibold">Notes / Next step</div>
                                    </div>

                                    {/* Grid rows */}
                                    {[
                                        {
                                            key: 'mainIdea',
                                            label: 'Paste the main idea of your paper here',
                                            placeholder: 'A one-sentence summary of your main idea / thesis',
                                        },
                                        {
                                            key: 'whatToAchieve',
                                            label: 'What do I want to achieve or accomplish in this paper?',
                                            placeholder: 'E.g., persuade readers, inform policy makers, analyze a text',
                                        },
                                        {
                                            key: 'audienceKnowledge',
                                            label: 'What might my audience already know?',
                                            placeholder: 'List assumed knowledge or background your readers have',
                                        },
                                        {
                                            key: 'readersNeed',
                                            label: 'What would my readers need to know to understand my point?',
                                            placeholder: 'Facts, context, terminology, or examples to include',
                                        },
                                        {
                                            key: 'whatIKnow',
                                            label: 'What do I already know about my topic?',
                                            placeholder: 'Notes, memories, initial sources or examples',
                                        },
                                        {
                                            key: 'counterArgs',
                                            label: 'What counterarguments do I need to address?',
                                            placeholder: 'Potential opposing views and how to respond to them',
                                        },
                                        {
                                            key: 'additionalEvidence',
                                            label: 'Is there any additional evidence that I need?',
                                            placeholder: 'Types of evidence or specific sources to look for',
                                        },
                                        {
                                            key: 'needsMoreInfo',
                                            label: 'Is there any part of my topic that I feel I need more information on to be ready to write about it?',
                                            placeholder: 'Short list of gaps you want to research',
                                        },
                                        {
                                            key: 'myQ1',
                                            label: 'My Additional Question 1',
                                            placeholder: 'Add a question to guide your research',
                                        },
                                        {
                                            key: 'myQ2',
                                            label: 'My Additional Question 2',
                                            placeholder: 'Add another question to guide your research',
                                        },
                                    ].map((row) => (
                                        <div
                                            key={row.key}
                                            className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start md:items-center"
                                        >
                                            {/* Column 1 - label (on small screens becomes top label) */}
                                            <label htmlFor={row.key} className="text-sm font-semibold md:pr-2">
                                                <span className="inline-block md:hidden mb-1 text-gray-700">{row.label}</span>
                                                <span className="hidden md:inline">{row.label}</span>
                                            </label>

                                            {/* Column 2 - main input */}
                                            <div className="md:col-span-1">
                                                <input
                                                    id={row.key}
                                                    name={row.key}
                                                    type="text"
                                                    placeholder={row.placeholder}
                                                    className="w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                                />
                                            </div>

                                            {/* Column 3 - notes / next step */}
                                            <div className="md:col-span-1">
                                                <input
                                                    name={`${row.key}-notes`}
                                                    type="text"
                                                    placeholder="Notes / next step (optional)"
                                                    className="w-full rounded border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <div className="flex justify-end gap-3 mt-2">
                                        <button
                                            type="reset"
                                            className="px-4 py-2 border rounded-md bg-white text-gray-800 hover:bg-gray-100"
                                        >
                                            Clear
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                // noop - replace with your submit handler if needed
                                                // kept client-side and non-breaking for template usage
                                                // optionally you can hook this into your notebook saving logic
                                                alert('Saved to notebook (stub). Replace with real handler as needed.');
                                            }}
                                            className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
                                        >
                                            Save entries
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    } />
                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/BrainstormingPage3"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Previous Section
                        </a>
                        <a
                            href="/BrainstormingPage5"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to Finale of Brainstorming
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrainstormingPage4;
