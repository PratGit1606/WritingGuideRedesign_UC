'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ProgressSteps({ progress = 0 }) {
  const steps = [
    { title: "Analysing", subtitle: "Completed", status: "done" },
    { title: "Brainstorming", subtitle: "Completed 2 times", status: "done" },
    { title: "Researching", subtitle: "Completed 4 times", status: "done" },
    { title: "Drafting", subtitle: "Completed", status: "done" },
    { title: "Revision", subtitle: "Completed", status: "done" },
    { title: "Editing", subtitle: "In Progress", status: "progress" },
    { title: "Citing", subtitle: "Pending", status: "upcoming" },
    { title: "Final", subtitle: "Pending", status: "upcoming" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center space-y-2">
          <div
            className={`
              flex items-center justify-center w-16 h-16 rounded-full 
              border-4 relative
              ${step.status === "done" ? "bg-black border-black text-white" : ""}
              ${step.status === "upcoming" ? "bg-gray-300 border-gray-300 text-gray-500" : ""}
            `}
            style={
              step.status === "progress"
                ? {
                    borderColor: "lightgray",
                    background: `conic-gradient(#000 ${progress}%, #fff ${progress}%)`,
                  }
                : {}
            }
          >
            {step.status === "done" && (
              <FontAwesomeIcon icon={faCheck} className="text-xl" />
            )}
            {step.status === "progress" && (
              <FontAwesomeIcon icon={faSpinner} spin className="text-xl text-black" />
            )}
          </div>
          <p className="font-semibold">{step.title}</p>
          <p className="text-sm text-gray-600">
            {step.status === "progress" ? `${progress}% Complete` : step.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
}
