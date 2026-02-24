import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import {
    Search,
} from "lucide-react";
import Tabs from '../components/AnalysingTabs';

const BrainstormingPage3 = () => {
    return (
        <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">

            <div className="flex w-full mx-auto px-10 mt-12 gap-8">
                <div className="w-80 sticky top-24 self-start">
                    <Sidebar currentSection='analysing' currentStep='mapping' />
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
                                placeholder="Outline or mind-map your ideas..."
                            />
                        </div>
                    </form>
                    <div className="py-6">
                        <ProgressSteps progress={67} />
                    </div>
                    <div className="py-10">
                        <Image src="/BrainstormingHeader.png" alt="Brainstorming Header"
                            width={1200}
                            height={400}
                            className="rounded-2xl shadow-md" /></div>
                    <Tabs overviewContent={
                        <div className="py-4">
                            <div className="flex items-center shadow-md mb-6">
                                <div className="w-5 bg-[#FFC627] self-stretch"></div>
                                <div className="px-4 py-3 bg-white w-full">
                                    <h2 className="text-xl font-bold text-gray-900">Section 2</h2>
                                </div>
                            </div>

                            <h2 className="text-[28px] font-bold mb-4">Outlining or mind-mapping my ideas</h2>

                            <p className="text-[18px] text-black leading-relaxed mb-4">
                                Once you have a preliminary thesis or research question in mind, you can start planning the direction your argument will take. When outlining or mind-mapping, you can connect main ideas, evaluate what sources you will need, and assess what you do and don’t know.
                            </p>

                            <p className="text-[16px] text-gray-800 mb-6">
                                Below, we share strategies for how to both outline and mind-map your way through an assignment and give you space to practice. Use information from the analyzing step to begin brainstorming your thoughts either physically (paper and pencil) or electronically (Word or Google Docs).
                            </p>

                            <div className="border rounded-xl p-4 bg-gray-50 mb-6">
                                <h3 className="text-lg font-bold mb-2">Resource Spotlight: Draw it out!</h3>
                                <p className="text-gray-700">
                                    Here’s an idea: use <a href="https://miro.com" className="text-blue-600 underline">Miro</a> as a visual workspace where you can map your ideas and draw connections.
                                </p>
                            </div>

                            <div className="mt-4 mb-4">
                                <h3 className="text-[20px] font-semibold mb-2">Outlining</h3>
                                <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-800 mb-4">
                                    <li>Create a basic outline for your paper: Introduction, Main Idea 1, Main Idea 2, Main Idea 3, and Conclusion.</li>
                                    <li>Fill in what you know for each section first; then list what you don’t know and need to find.</li>
                                    <li>Talk to someone about your topic if you need more ideas; consider getting help from the Writing Center.</li>
                                </ul>
                            </div>

                            <div className="mt-4 mb-4">
                                <h3 className="text-[20px] font-semibold mb-2">Mind-mapping</h3>
                                <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-800 mb-6">
                                    <li>Start with a blank page and put your central idea or question in the center.</li>
                                    <li>Add circles connected by lines for supporting points and evidence.</li>
                                    <li>Keep expanding connections — mind maps let you see relationships you may later use in your outline.</li>
                                </ul>
                            </div>

                            <p className="text-[16px] text-gray-800">
                                It’s okay if your first outline or mind map is messy — brainstorming is not always a tidy process. As your ideas shift, remake your outline and map to make them clearer.
                            </p>
                        </div>


                    } />
                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/BrainstormingPage2"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Section 2 of Brainstorming
                        </a>
                        <a
                            href="/BrainstormingPage4"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to Section 3 of Brainstorming
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrainstormingPage3;
