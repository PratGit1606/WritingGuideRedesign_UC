import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import {
    Search,
} from "lucide-react";
import Tabs from '../components/Tabs';
import Link from 'next/link';

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
                    <Sidebar currentStep='word' />
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
                        <ProgressSteps progress={98} />
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
                                    <h2 className="text-xl font-bold text-gray-900">Section 3</h2>
                                </div>
                            </div>

                            <h2 className="text-[30px] font-bold mb-2">Considering my word choice</h2>
                            <div className="py-4">
                                <p className="text-[18px] text-black leading-relaxed">
                                    Word choice is a key element of an author’s style and helps create the emotional tone of the writing.
                                    The purpose of the writing should help direct the tone you decide to create.
                                </p>
                                <p className="text-[18px] text-black leading-relaxed mt-4">
                                    To explain this further, let’s dig into an analogy: Consider the color wheel. Think about your favorite color.
                                    How many different shades of that color would you have to choose from if you were looking to paint your room?
                                </p>
                            </div>

                            <div className="flex items-center max-w-2xl mx-auto justify-between border rounded-xl p-6 mt-6 shadow-sm bg-white">
                                <div className="text-center flex-1">
                                    <h2 className="text-lg font-bold">Writing Tip of the Day</h2>
                                    <p className="text-gray-800 mt-2">Dive in and be scared later.</p>
                                </div>
                            </div>

                            <div className="py-6">
                                <p className="text-[18px] text-black leading-relaxed mb-4">
                                    We can think about word choice just as we think about the different shades of a color.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-[18px] text-gray-800 leading-relaxed">
                                    <li>To what degree of saturation do you want your reader to experience the information presented in any given sentence?</li>
                                    <li>Do you want to use a lighter word to just pique interest or a more saturated word to ignite passion?</li>
                                    <li>
                                        The “strength” of a word can be just as important as the definition.
                                        <span className="block ml-4">Consider: meander, walk, jog, sprint, and run. These all describe a way to move through the world, but they all imply something different.</span>
                                    </li>
                                </ul>
                                <p className="text-[18px] text-black leading-relaxed mt-4">
                                    When you are editing your paper, you have the chance to think closely about the words you are using and what impact they have.
                                    These edits can have impacts on your tone and voice.
                                </p>
                            </div>

                            <h2 className="text-[22px] font-bold mb-4">
                                Below, you will find some strategies to help you consider how you can strengthen your writing:
                            </h2>

                            <div className="mb-6">
                                <h3 className="text-[18px] font-bold mb-2 bg-[#FFC627] inline-block px-2">
                                    Check for correct word choice
                                </h3>
                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    When you start checking your word choice, scan first to ensure you are using words correctly.
                                    This will help your reader understand your meaning and improve your overall tone. <br /><br />
                                    It is best to check over transitional words and jargon to be sure you’ve used them correctly.
                                    When in doubt, check the definition of a word to be sure it’s right.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[18px] font-bold mb-2 bg-[#FFC627] inline-block px-2">
                                    Consider the tone you need to have for the paper
                                </h3>
                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    Be sure you are aware of your audience and the tone you want to use when you write.
                                    If you are completing an assignment, check over the materials you were provided. <br /><br />
                                    If you are writing for personal or professional reasons, consider who will be reading your work and what purpose it will be used for.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[18px] font-bold mb-2 bg-[#FFC627] inline-block px-2">
                                    How Word Choice Impacts Tone
                                </h3>
                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    One common way writers vary their word choice is by using a thesaurus.
                                    However, a thesaurus will only provide similar words based on denotation, or the literal definition, of the word.
                                    As the author, you’ll need to consider the connotation as well.
                                </p>
                            </div>
                        </div>
                    } />


                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/EdifingPage3"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Previous Section: <br /> Section 2 of Editing
                        </a>
                        <a
                            href="/EditingPage5"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to End of Editing
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditingPage;