'use client'
import { useState } from "react";
import {
    BookOpen,
    Pen,
    FileText,
    CheckSquare,
    Search,
    Edit,
    ListChecks,
} from "lucide-react";

const steps = [
    { id: "analysing", label: "Analysing", icon: <Search size={18} />, time: "3 mins read" },
    { id: "brainstorming", label: "Brainstorming", icon: <BookOpen size={18} />, time: "3 mins read" },
    { id: "researching", label: "Researching", icon: <FileText size={18} />, time: "3 mins read" },
    { id: "drafting", label: "Drafting", icon: <Pen size={18} />, time: "3 mins read" },
    { id: "revision", label: "Revision", icon: <CheckSquare size={18} />, time: "3 mins read" },
    {
        id: "editing",
        label: "Editing",
        icon: <Edit size={18} />,
        time: "3 mins read",
        children: [
            { id: "grammar", label: "Checking my grammar and punctuation", time: "3 mins read" },
            { id: "flow", label: "Looking at the flow between my sentences and paragraphs", time: "3 mins read" },
            { id: "word", label: "Considering my word choice", time: "3 mins read" },
        ],
    },
    { id: "citing", label: "Citing", icon: <ListChecks size={18} />, time: "3 mins read" },
];

export default function Sidebar() {
    const [active, setActive] = useState("editing");
    const [expanded, setExpanded] = useState<string | null>("editing");

    return (
        <div className="w-80 bg-white border rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-black text-white px-4 py-3">
                <h2 className="text-lg font-semibold">ASU Writing Guide</h2>
                <p className="text-sm">My ENG108 Assignment</p>
                <p className="text-xl font-semibold py-1">Editing</p>
            </div>

            {/* Steps */}
            <div className="divide-y">
                {steps.map((step) => (
                    <div key={step.id}>
                        <button
                            onClick={() => {
                                setActive(step.id);
                                if (step.children) {
                                    setExpanded(expanded === step.id ? null : step.id);
                                }
                            }}
                            className={`flex w-full items-center justify-between px-4 py-4 text-left transition ${active === step.id ? "bg-[#E5E1E1]" : "hover:bg-gray-100"
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                {step.icon && <span className="text-gray-600">{step.icon}</span>}
                                <span className="text-sm font-medium">{step.label}</span>
                            </div>
                            <span className="text-xs bg-gray-900 text-white rounded-full px-2 py-0.5">
                                {step.time}
                            </span>
                        </button>

                        {/* Children (with sliding animation) */}
                        {step.children && expanded === step.id && (
                            <div className="mt-2 mb-2 space-y-3 px-2">
                                {step.children.map((child) => (
                                    <button
                                        key={child.id}
                                        onClick={() => setActive(child.id)}
                                        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm rounded-lg shadow-sm no-scrollbar transition ${active === child.id ? "bg-gray-300" : "bg-[#E4E4E4] hover:bg-gray-200"
                                            }`}
                                    >
                                        <span className="font-medium flex-1 pr-4">{child.label}</span>
                                        <span className="shrink-0 text-xs bg-black text-white rounded-full px-3 py-1">
                                            {child.time}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}

                    </div>
                ))}
            </div>

            {/* Notebook button */}
            <div className="p-4">
                <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                    My Notebook
                </button>
            </div>
        </div>
    );
}
