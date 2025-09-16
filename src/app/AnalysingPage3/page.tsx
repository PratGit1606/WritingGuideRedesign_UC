import React from 'react';
import Image from 'next/image';
import AnalysingSidebar from '../components/AnalysingSidebar';
import ProgressSteps from '../components/AnalysingProgressSteps';
import {
    Search,
} from "lucide-react";
import Tabs from '../components/AnalysingTabs';
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
                    <AnalysingSidebar currentStep='audience' />
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
                        <Image src="/AnalysingHeader.png" alt="Analysing Header"
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

                            <h2 className="text-[30px] font-bold mb-4">Understanding my audience</h2>

                            <p className="text-[18px] text-black leading-relaxed mb-6">
                                Understanding your audience requires you to{" "}
                                <span className="font-bold">understand what the needs of your audience are.</span>{" "}
                                Whether they are reading your paper, using your website, or listening to your
                                presentation, you want to consider what their needs, expectations, and knowledge
                                levels are. Keeping this in mind will help you ensure that your message will come across.
                            </p>

                            <div className="flex justify-center my-8">
                                <img
                                    src="/AnalysingDoc2.png"
                                    alt="Writing Situation Triangle"
                                    className="max-w-xs md:max-w-sm lg:max-w-md"
                                />
                            </div>

                            <p className="text-[18px] text-black leading-relaxed mb-6">
                                Think of each writing situation as a triangle. As you write, you always need to keep a{" "}
                                <span className="font-bold">
                                    balance between the choices you make as a writer, the needs of your audience,
                                    and the overall purpose you have for your writing.
                                </span>
                            </p>

                            <h3 className="text-[20px] font-semibold mb-3">When thinking about your audience, map out:</h3>

                            <div className="grid gap-6 mt-6">
                                {[
                                    {
                                        question: "Who is my audience?",
                                        hint: "Hint: even for class, your instructor is not always your audience",
                                        example: "I’m acting as though I’m writing a policy memo for my local politician",
                                        placeholder: "Who might be interested in reading the thing you’re writing?",
                                    },
                                    {
                                        question: "What kind of information does my audience need?",
                                        example: "What the issue is; what people think about it; what possible solutions have been proposed; what experts say",
                                        placeholder: "What do they need to know to understand what you’re talking about?",
                                    },
                                    {
                                        question: "What kind of knowledge about your topic do you think your audience has?",
                                        example: "How the issue has been dealt with in the past; previous laws and policies that have been passed about it",
                                        placeholder: "What might they already know based on their life and experiences?",
                                    },
                                    {
                                        question: "What might be the best way to organize or present the information to your audience?",
                                        example: "Bullet points and short sentences; getting straight to the point; lots of clear headings and section breaks",
                                        placeholder: "How could you structure the information so it’s clearest?",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm"
                                    >
                                        <h4 className="text-lg font-bold text-black mb-2">{item.question}</h4>
                                        {item.hint && (
                                            <p className="text-sm text-gray-500 italic mb-2">{item.hint}</p>
                                        )}
                                        <p className="text-[16px] text-gray-700 mb-4">
                                            <span className="font-semibold">Example:</span> {item.example}
                                        </p>
                                        <textarea
                                            placeholder={item.placeholder}
                                            className="w-full border border-gray-300 rounded-lg p-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            rows={3}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>


                    } />
                    <div className="flex justify-between items-center p-6">
                        <a
                            href="/AnalysingPage2"
                            className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm text-center"
                        >
                            Go Back to Previous Section: <br /> Section 2 of Analysing
                        </a>
                        <a
                            href="/AnalysingPage4"
                            className="px-6 py-3 rounded-lg border-2 border-[#FFC627] bg-black text-white hover:bg-gray-800 shadow-md text-center"
                        >
                            Continue to Section 3 of Analysing
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditingPage;