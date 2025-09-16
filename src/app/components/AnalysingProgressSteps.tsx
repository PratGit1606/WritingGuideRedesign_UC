'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ProgressSteps({ progress = 0 }) {
    const steps = [
        {
            title: "Analysing", subtitle: progress === 100 ? "Completed" : "In Progress",
            status: progress === 100 ? "done" : "progress"
        },
        { title: "Brainstorming", subtitle: "Completed 2 times", status: "done" },
        { title: "Researching", subtitle: "Completed 4 times", status: "done" },
        { title: "Drafting", subtitle: "Completed", status: "done" },
        { title: "Revision", subtitle: "Completed", status: "done" },
        {
            title: "Editing", subtitle: "Completed 2 times", status: "done"
        },
        { title: "Citing", subtitle: "Pending", status: "upcoming" },
        { title: "Final", subtitle: "Pending", status: "upcoming" },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2">
                    {step.status === "progress" ? (
                        <div
                            className="relative flex items-center justify-center w-16 h-16 rounded-full"
                            style={{
                                background: `conic-gradient(#FFC627 ${progress}%, #e5e5e5 ${progress}%)`,
                            }}
                        >
                            <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faSpinner} spin className="text-xl text-black" />
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`
                flex items-center justify-center w-16 h-16 rounded-full border-4
                ${step.status === "done" ? "bg-black border-black text-white" : ""}
                ${step.status === "upcoming" ? "bg-gray-300 border-gray-300 text-gray-500" : ""}
              `}
                        >
                            {step.status === "done" && (
                                <FontAwesomeIcon icon={faCheck} className="text-xl" />
                            )}
                        </div>
                    )}
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-sm text-gray-600">
                        {step.status === "progress" ? `${progress}% Complete` : step.subtitle}
                    </p>
                </div>
            ))}
        </div>
    );
}
