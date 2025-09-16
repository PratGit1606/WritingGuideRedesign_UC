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
            <header className="flex items-center justify-between px-10 shadow-sm bg-white bg-cover bg-center">
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
                    <Sidebar currentStep='flow' />
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
                        <ProgressSteps progress={67} />
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
                                    <h2 className="text-xl font-bold text-gray-900">Section 2</h2>
                                </div>
                            </div>

                            <h2 className="text-[30px] font-bold mb-2">
                                Looking at the flow between my sentences and paragraphs
                            </h2>
                            <div className="py-4">
                                <p className="text-[18px] text-black leading-relaxed">
                                    The feeling of <span className="italic">“flow”</span> in writing comes from the shape of our sentences and paragraphs,
                                    the way key ideas are organized within the sentence or the paragraph (Willams &amp; Bizup, 2017).
                                </p>
                                <p className="text-[18px] text-black leading-relaxed mt-4">
                                    When the end of one sentence sets up the start of the next sentence, the reader feels like your writing is cohesive.
                                    This is a <span className="font-bold">good rule of thumb for sentence flow</span>, and it can also work for paragraphs.
                                    Below are some strategies to help you edit the flow of your writing.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[18px] font-bold mb-2 bg-[#FFC627] inline-block px-2">
                                    Repeat key terms in your transitions
                                </h3>
                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    When you are moving from one idea to another in your writing, it’s good practice to{" "}
                                    <span className="font-semibold">repeat some key terms or words</span> and indicate{" "}
                                    <span className="font-semibold">how your ideas are connected</span> to each other and your overall topic.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[18px] font-bold mb-2 bg-[#FFC627] inline-block px-2">
                                    Use transitional words correctly
                                </h3>
                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    Transitional words like <span className="font-semibold">“additionally,” “however,” “alternatively,”</span> etc.
                                    help your reader understand the relationship between your sentences, paragraphs, and larger ideas.{" "}
                                    <span className="font-semibold">Double-check your usage of these words</span> when you edit your paper to ensure you are
                                    creating the correct relationships between ideas.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-[18px] font-bold mb-2 bg-[#FFC627] inline-block px-2">
                                    Crafting Cohesive Sentences:
                                </h3>
                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    Cohesive sentences flow from one to another by starting with old or familiar information and ending with new
                                    or less familiar information. <br />
                                    Let us point out something important here - we emphasize this practice under editing, not drafting. It will
                                    be difficult to write our thoughts down if you spend too much time thinking about sentence cohesion in the
                                    drafting stage.
                                </p>
                            </div>

                            <div className="flex items-center mt-6 max-w-2xl mx-auto justify-between border rounded-xl p-6 mt-6 shadow-sm bg-white">
                                <div className="text-center flex-1">
                                    <h2 className="text-lg font-bold">Whoa there, wordsmith!</h2>
                                    <p className="text-gray-800 mt-2">You&apos;ve been scrolling away for a while. Take a breath and stretch it out!</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h2 className="text-[22px] font-bold mb-4">
                                    There are three steps you can take in the editing process to help your sentences flow and ensure cohesion in your writing:
                                </h2>
                                <ol className="list-decimal pl-6 space-y-2 text-[18px] text-gray-800 leading-relaxed">
                                    <li>Begin sentences with information familiar to your readers</li>
                                    <li>End sentences with information that readers cannot anticipate</li>
                                    <li>
                                        Begin sentences with information that readers will find simple; end with information they will find complex. (2017, p. 67)
                                    </li>
                                </ol>
                                <p className="text-[18px] text-gray-800 leading-relaxed mt-4">
                                    What is familiar and what cannot be anticipated will change for each paper and each audience, but as the author, you can critically
                                    consider your readers and then determine what topics they are or aren’t exposed to.
                                </p>
                            </div>
                        </div>
                    } />

                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/EdifingPage2"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Previous Section: <br /> Section 1 of Editing
                        </a>
                        <a
                            href="/EditingPage4"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to Section 3 of Editing
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditingPage;