import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import {
    Search,
} from "lucide-react";
import Tabs from '../components/Tabs';
import GrammarExercise from '../components/Editing1Check';

const EditingPage = () => {
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
                    <a href="#" className="hover:text-yellow-500">Home</a>
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
                    <Sidebar currentStep='grammar' />
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
                        <ProgressSteps progress={33} />
                    </div>
                    <div className="py-10">
                        <Image src="/EditingHeader.png" alt="Editing Header"
                            width={1200}
                            height={400}
                            className="rounded-2xl shadow-md" /></div>
                    <Tabs overviewContent={
                        <div className="py-4">
                            <div className="flex items-center shadow-md mb-6">
                                <div className="w-5 bg-[#FFC627] self-stretch"></div>

                                <div className="px-4 py-3 bg-white w-full">
                                    <h2 className="text-xl font-bold text-gray-900">Section 1</h2>
                                </div>
                            </div>

                            <h2 className="text-[30px] font-bold mb-2">Checking my grammar and punctuation</h2>
                            <div className="py-4">
                                <p className="text-[18px] text-black">
                                    When you begin editing, <span className="font-bold">reviewing your grammar</span> and punctuation can feel daunting. However, learning strategies for how to spot and correct errors in your writing can help make this step more manageable.<br /><br />
                                    Checking your grammar and punctuation is not simply about obedience to distant grammar rules. Instead, consider grammar and punctuation as <span className="font-bold">critical components in being understood by your audience.</span>
                                </p>
                            </div>
                            <div className="flex items-center max-w-2xl mx-auto justify-between border rounded-xl p-6 mt-6 shadow-sm bg-white">
                                <div className="text-center flex-1">
                                    <h2 className="text-lg font-bold">Writing Tip of the Day</h2>
                                    <p className="text-gray-800 mt-2">Dive in and be scared later.</p>
                                </div>
                            </div>
                            <div className="mt-6 mb-4">
                                <h2 className="text-[22px] font-bold mb-4">
                                    Below are some strategies to help you with checking your grammar and punctuation!
                                </h2>

                                <div className="mb-6">
                                    <h3 className="text-[18px] font-semibold mb-2">Read aloud and print out your writing:</h3>
                                    <p className=" text-[18px] text-gray-800 leading-relaxed">
                                        Reading your writing aloud will help you catch areas that do not flow well or have grammatical issues.
                                        This is because <span className="font-semibold">reading aloud</span> requires you to{" "}
                                        <span className="font-semibold">read slower</span>, which makes it easier to{" "}
                                        <span className="font-semibold">identify potential errors</span>. Printing your writing allows
                                        you to annotate your writing and more easily look at things on a larger scale.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-[22px] font-semibold mb-2">Ask for peer feedback:</h3>
                                    <p className="text-[18px] text-gray-800 leading-relaxed">
                                        Your peers can more easily <span className="font-semibold">spot errors or miscommunications</span> in your writing
                                        because they haven’t spent hours or days thinking about the writing like you have. They can also provide you with a{" "}
                                        <span className="font-semibold">reader response</span>, helping you determine if you’ve made your points clearly.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <GrammarExercise />
                                </div>
                            </div>
                        </div>
                    } />
                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/EditingPage"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Previous Section: <br /> Section 1 of Editing
                        </a>
                        <a
                            href="/EditingPage3"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to Section 2 of Editing
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditingPage;