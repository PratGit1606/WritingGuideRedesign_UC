'use client'

import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { Search } from "lucide-react";
import ProgressSteps from '../components/ProgressSteps';
import Tabs from "../components/Tabs";
import Link from "next/link";

export default function DraftingPage4() {
    return (
        <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
            <div className="flex w-full mx-auto px-10 mt-12 gap-8">
                <div className="w-80 sticky top-24 self-start">
                    <Sidebar currentStep="drafting" />
                </div>

                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 min-h-screen">
                    <form className="flex w-full mx-auto mb-6">
                        <div className="relative w-full">
                            <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                                <Search className="w-5 h-5 text-gray-400" />
                            </div>

                            <input
                                type="text"
                                id="simple-search"
                                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                                placeholder="Search drafting tips..."
                                aria-label="Search drafting tips"
                            />
                        </div>
                    </form>

                    <div className="py-4">
                        <ProgressSteps progress={75} />
                    </div>

                    <div className="py-6">
                        <Image
                            src="/DraftingHeader.png"
                            alt="Drafting Header"
                            width={1200}
                            height={400}
                            className="rounded-2xl shadow-md"
                        />
                    </div>

                    <Tabs pageId="DraftingPage4" overviewContent={
                        <main className="min-h-[400px]">
                            <div className="space-y-6">
                                {/* Main Section Title */}
                                <h2 className="text-[30px] font-bold text-black">
                                    Addressing Potential Counterarguments
                                </h2>

                                {/* Intro paragraph */}
                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    A counterargument is a set of reasons or arguments that challenge, question,
                                    oppose, or expand on what an author is arguing in their work. While preparing
                                    for and writing your assignment, it is important to consider your audiences
                                    and the potential viewpoints they might have on the topic you are addressing.
                                </p>

                                <p className="text-[18px] text-gray-800 leading-relaxed">
                                    Considering counterarguments and addressing them in your work shows your
                                    audience that you understand and respect multiple sides of an argument or
                                    topic. This strengthens your writing because it demonstrates that you have
                                    reflected on and addressed varying perspectives.
                                </p>

                                {/* Subsection */}
                                <h3 className="text-[22px] font-semibold mt-8">
                                    Finding Counterarguments in Research
                                </h3>

                                <ol className="list-decimal list-inside space-y-3 text-[18px] text-gray-800">
                                    <li>
                                        As you read sources for your writing, take note of the differing
                                        perspectives present in the research you collect.
                                    </li>
                                    <li>
                                        Pay attention to your own reactions. Do you strongly agree or disagree
                                        with an author? Does an argument raise new questions? These reactions can
                                        help shape your own argument.
                                    </li>
                                    <li>
                                        Think of your writing as part of a larger conversation between sources.
                                        What would you say to the author if you were speaking to them directly?
                                    </li>
                                </ol>

                                {/* Subsection */}
                                <h3 className="text-[22px] font-semibold mt-8">
                                    Incorporating Counterarguments in Your Writing
                                </h3>

                                <div className="space-y-6 text-[18px] text-gray-800">
                                    <div>
                                        <p className="font-semibold">
                                            1. When should I address counterarguments?
                                        </p>
                                        <p className="mt-2">
                                            It depends on what you want to demonstrate to your audience.
                                        </p>

                                        <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                                            <li>
                                                <span className="font-semibold">Before making your own argument:</span>{" "}
                                                Show that you have anticipated other perspectives.
                                                <div className="italic mt-1">
                                                    “Some people might believe that… While their perspective is valid, I
                                                    argue that… because…”
                                                </div>
                                            </li>

                                            <li>
                                                <span className="font-semibold">After making your own argument:</span>{" "}
                                                Test your position against opposing views.
                                                <div className="italic mt-1">
                                                    “Some authors question whether my proposal considers [X] factors…
                                                    however, I maintain that my solution is the most effective and
                                                    practical.”
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-semibold">
                                            2. How do I respond to counterarguments?
                                        </p>
                                        <p className="mt-2">
                                            By clearly defining the boundaries of your argument.
                                        </p>

                                        <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                                            <li>
                                                <span className="font-semibold">Agree and Expand:</span> Build on
                                                another perspective.
                                                <div className="italic mt-1">
                                                    “X demonstrates that ___ is a problem. I appreciate this
                                                    perspective, and my analysis extends it by showing…”
                                                </div>
                                            </li>

                                            <li>
                                                <span className="font-semibold">Disagree and Explain:</span> Explain
                                                why a claim falls short.
                                                <div className="italic mt-1">
                                                    “X argues that ___ has little impact; however, this argument does not
                                                    hold because…”
                                                </div>
                                            </li>

                                            <li>
                                                <span className="font-semibold">Agree and Disagree:</span> Acknowledge
                                                strengths while noting limitations.
                                                <div className="italic mt-1">
                                                    “X makes a valid point; however, my argument shows that this does not
                                                    fully address…”
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-between items-center">
                                <Link
                                    href="/DraftingPage3"
                                    className="px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-300 shadow-sm"
                                >
                                    Go Back to Section 2 of Drafting
                                </Link>

                                <Link
                                    href="/DraftingPage5"
                                    className="px-6 py-3 rounded-lg border-2 border-asu-gold bg-black text-white hover:bg-gray-800 shadow-md"
                                >
                                    Continue to Drafting Outro
                                </Link>
                            </div>
                        </main>
                    } />

                </div>
            </div>
        </div>
    );
}