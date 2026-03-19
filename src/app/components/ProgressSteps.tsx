'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import React from "react";


export default function ProgressSteps(_: { progress?: number } = {}) {
  const pathname = usePathname() || "";
  const path = pathname.split("/").filter(Boolean).pop() || "";

  const steps = [
    { key: "analysing", title: "Analysing" },
    { key: "brainstorming", title: "Brainstorming" },
    { key: "researching", title: "Researching" },
    { key: "drafting", title: "Drafting" },
    { key: "revision", title: "Revision" },
    { key: "editing", title: "Editing" },
    { key: "citing", title: "Citing" },
    { key: "final", title: "Final" },
  ];

  const pageToProgress = [0, 33, 67, 98, 100];


  const normalize = (s: string) => s.toLowerCase();

  const matchedStepIndex = steps.findIndex((s) => {
    const k = s.key.toLowerCase();
    return normalize(path).includes(k); 
  });


  let parsedPageNum = 1; 
  const pageRegex1 = /page-?(\d+)/i; 
  const pageRegex2 = /(\d+)$/; 
  const pageRegex3 = /-(\d+)-/; 

  const lowerPath = path.toLowerCase();
  const numMatch = lowerPath.match(pageRegex1) ?? lowerPath.match(pageRegex3) ?? lowerPath.match(pageRegex2);

  if (numMatch && numMatch[1]) {
    const v = parseInt(numMatch[1], 10);
    if (!Number.isNaN(v) && v >= 1) parsedPageNum = v;
  } else {
    const pageNumInName = path.match(/page(\d+)/i);
    if (pageNumInName && pageNumInName[1]) {
      const v = parseInt(pageNumInName[1], 10);
      if (!Number.isNaN(v) && v >= 1) parsedPageNum = v;
    }
  }

  if (parsedPageNum < 1) parsedPageNum = 1;
  if (parsedPageNum > pageToProgress.length) parsedPageNum = pageToProgress.length;

  const computedProgress = pageToProgress[parsedPageNum - 1] ?? 0;
  const currentIndex = matchedStepIndex >= 0 ? matchedStepIndex : 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
      {steps.map((step, idx) => {
        let status: "done" | "progress" | "upcoming" = "upcoming";

        if (idx < currentIndex) status = "done";
        else if (idx === currentIndex) status = "progress";
        else status = "upcoming";

        if (idx === currentIndex && computedProgress === 100) status = "done";

        return (
          <div key={step.key} className="flex flex-col items-center space-y-2">
            {status === "progress" ? (
              <div
                className="relative flex items-center justify-center w-16 h-16 rounded-full"
                style={{
                  background: `conic-gradient(var(--asu-gold) ${computedProgress}%, #e5e5e5 ${computedProgress}%)`,
                }}
              >
                <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-black">
                    {computedProgress}%
                  </span>
                </div>
              </div>
            ) : (
              <div
                className={`
                  flex items-center justify-center w-16 h-16 rounded-full border-4
                  ${status === "done" ? "bg-asu-black border-asu-black text-asu-white" : ""}
                  ${status === "upcoming" ? "bg-gray-300 border-gray-300 text-gray-500" : ""}
                `}
              >
                {status === "done" && (
                  <FontAwesomeIcon icon={faCheck} className="text-xl" />
                )}
              </div>
            )}

            <p className="font-semibold">{step.title}</p>

            <p className="text-sm text-gray-600">
              {status === "progress"
                ? `${computedProgress}% Complete`
                : status === "done"
                ? "Completed"
                : "Pending"}
            </p>
          </div>
        );
      })}
    </div>
  );
}