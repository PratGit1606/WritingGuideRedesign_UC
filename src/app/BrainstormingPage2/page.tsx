import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import {
    Search,
} from "lucide-react";
import TabWithChecklist from '../components/Tabs';
const BrainstormingPage2 = () => {
    return (
        <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">

            <div className="flex w-full mx-auto px-10 mt-12 gap-8">
                <div className="w-80 sticky top-24 self-start">
                    <Sidebar currentStep='description' />
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
                                placeholder="Search for thesis tips..."
                            />
                        </div>
                    </form>
                    <div className="py-6">
                        <ProgressSteps progress={33} />
                    </div>
                    <div className="py-10">
                        <Image src="/BrainstormingHeader.png" alt="Brainstorming Header"
                            width={1200}
                            height={400}
                            className="rounded-2xl shadow-md" /></div>
                    <TabWithChecklist pageId="BrainstormingPage2" overviewContent={
                        <div className="py-4">
                            <div className="flex items-center shadow-md mb-6">
                                <div className="w-5 bg-[#FFC627] self-stretch"></div>
                                <div className="px-4 py-3 bg-white w-full">
                                    <h2 className="text-xl font-bold text-gray-900">Section 1</h2>
                                </div>
                            </div>

                            <h2 className="text-[26px] font-bold mb-2">Developing a preliminary thesis statement or research question</h2>

                            <p className="text-[18px] text-black leading-relaxed mb-4">
                                Developing your thesis is the most important step in the writing process because it helps contextualize for the reader what you are going to discuss in a clear statement. In this section, we will discuss strategies you can use to develop a strong thesis statement.
                            </p>

                            <p className="text-[18px] text-black leading-relaxed mb-4">
                                When you write a thesis statement — whether it is for an analytical, explanatory, or persuasive essay — you are making connections between the overarching topic and the main ideas that you will explore.
                            </p>

                            <div className="mb-4">
                                <h3 className="text-[20px] font-semibold mb-2">It can be helpful to:</h3>
                                <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-800">
                                    <li>Read the assignment description and identify the main topic.</li>
                                    <li>Outline the questions you are exploring and the requirements.</li>
                                    <li>Consider how your topic and questions connect to the assignment requirements.</li>
                                </ul>
                            </div>

                            <p className="text-[16px] text-gray-800 mb-6">
                                Once you outline these items, you can begin to weave together a complete sentence that connects the prompt, the main topic, and the questions you are exploring.
                            </p>

                            <div className="flex items-center max-w-2xl mx-auto justify-center border rounded-xl p-6 mt-6 shadow-sm bg-white">
                                <div className="text-center flex-1">
                                    <h2 className="text-lg font-bold">Writing Tip of the Day</h2>
                                    <p className="text-gray-800 mt-2">Dive in and be scared later.</p>
                                </div>
                            </div>

                            <div className="mt-6 mb-6">
                                <h3 className="text-[22px] font-bold mb-2">Let’s look at an example!</h3>

                                <h4 className="text-[18px] font-semibold mb-2">Example Prompt:</h4>
                                <p className="text-[16px] text-gray-800 mb-3">
                                    Write a 700-word persuasive essay about your favorite restaurant.
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-800 mb-4">
                                    <li>Why is it the best, in your opinion?</li>
                                    <li>What about the restaurant sets it above the rest?</li>
                                    <li>Does the food taste good, or is it the atmosphere you like best?</li>
                                    <li>Include three resources, cited using APA, found in ASU Library to help persuade your audience.</li>
                                </ul>

                                <h4 className="text-[18px] font-semibold mb-2">Example Thesis:</h4>
                                <p className="text-[16px] text-gray-800 mb-4">
                                    Fazoli’s is the best Italian fast-food restaurant in the Phoenix Valley because of its ideal location, fresh flavor, and the welcoming atmosphere that creates memorable family moments.
                                </p>

                                <p className="text-[16px] text-gray-800 mb-6">
                                    This thesis takes the main idea of “what is your favorite restaurant?” and lays out why, based on location, flavor, atmosphere, and memories, the restaurant is the best. These become the main ideas you can develop in the body of your paper.
                                </p>
                            </div>

                            <div className="border rounded-xl p-4 bg-gray-50">
                                <h3 className="text-lg font-bold mb-2">Resource Spotlight: Get Help From a Robot</h3>
                                <p className="text-gray-700">
                                    Here’s an idea: use <a href="https://www.grammarly.com" className="text-blue-600 underline">Grammarly</a> to help brainstorm topic ideas and create a potential outline for your work.
                                </p>
                            </div>
                        </div>

                    } />
                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/BrainstormingPage"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Brainstorming Intro
                        </a>
                        <a
                            href="/BrainstormingPage3"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to Section 2 of Brainstorming
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrainstormingPage2;
