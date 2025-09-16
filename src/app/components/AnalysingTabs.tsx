'use client'
import { useState, useEffect } from "react";

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "checklist", label: "Checklist" },
    { id: "tools", label: "Tools" },
];

const checklistItems = [
    {
        id: 1,
        title:
            "I have carefully read my assignment description and identified the important verbs and nouns.",
        description:
            "Make sure you underline or highlight key action words and important terms your professor included.",
    },
    {
        id: 2,
        title:
            "I understand what genre or type of writing I am expected to produce.",
        description:
            "Clarify if your task is to argue, explain, analyze, or reflect, so you know the structure to follow.",
    },
    {
        id: 3,
        title:
            "I know who my audience is and what they need to know to understand my writing.",
        description:
            "Think about whether you are writing for your professor, classmates, or a general audience.",
    },
    {
        id: 4,
        title:
            "I can clearly state the purpose of my assignment and what I am trying to accomplish.",
        description:
            "Be able to explain in one or two sentences what your assignment is asking you to achieve.",
    },
];

export default function TabWithChecklist({ overviewContent }: { overviewContent: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState("overview");
    const [completed, setCompleted] = useState<number[]>([]);
    const [completed1, setCompleted1] = useState<number[]>([]);


    useEffect(() => {
        const saved = localStorage.getItem("editing-checklist");
        if (saved) setCompleted1(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("editing-checklist", JSON.stringify(completed));
    }, [completed]);

    const toggleItem = (id: number) => {
        setCompleted((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const progress = (completed.length / checklistItems.length) * 100;

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-1 bg-gray-200 rounded-lg overflow-hidden">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 text-center font-semibold transition ${activeTab === tab.id
                                ? "bg-[#FFC627] text-black"
                                : "hover:bg-gray-300 text-black"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="ml-4 px-4 py-1 text-xs font-medium bg-amber-50 text-red-700 rounded-full shadow-sm align-right">
                    {completed1.length} out of 3 completed
                </div>
            </div>

            {activeTab === "overview" && <div>{overviewContent}</div>}
            {activeTab === "checklist" && (
                <div className="bg-white border rounded-xl shadow-md p-6 py-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold">Editing Checklist</h2>
                        <span className="text-sm text-gray-600">
                            {completed.length} out of {checklistItems.length} completed
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                        <div
                            className="h-2 bg-[#01673e] rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <div className="space-y-4">
                        {checklistItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={`w-full flex items-start gap-3 p-4 border rounded-lg shadow-sm text-left transition ${completed.includes(item.id)
                                    ? "bg-[#09FF84] border-[#01673E]"
                                    : "bg-white hover:bg-gray-50"
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center ${completed.includes(item.id)
                                        ? "bg-[#01673e] border-[#01673e]"
                                        : "border-gray-400"
                                        }`}
                                >
                                    {completed.includes(item.id) && (
                                        <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                                    )}
                                </div>

                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    {item.description && (
                                        <p className="text-sm text-gray-600 mt-1">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "tools" && (
                <div>
                    <h2 className="text-xl font-bold mb-2 py-4">Tools</h2>
                    <p className="text-gray-700">
                        Here you can find helpful resources and tools for your writing.
                    </p>
                </div>
            )}
        </div>
    );
}
