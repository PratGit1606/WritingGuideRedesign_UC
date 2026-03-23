"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  Pen,
  FileText,
  CheckSquare,
  Search,
  Edit,
  ListChecks,
} from "lucide-react";

/**
 * Sidebar with:
 * - small "Go to section main page" under each top-level item (not a child style)
 * - client-side navigation via router.push with a loading overlay
 * - auto-expand section that matches the current page and keep it open until user toggles
 *
 * NOTE: URLs are set to follow your "AnalysingPage / AnalysingPage1 / AnalysingPage2" pattern.
 * Update URLs as needed to match your actual pages.
 */

type ChildItem = {
  id: string;
  label: string;
  time?: string;
  url: string;
};

type Step = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  time?: string;
  url?: string;
  children?: ChildItem[];
};

const steps: Step[] = [
  {
    id: "analysing",
    label: "Analysing",
    icon: <Search size={18} />,
    time: "3 mins read",
    url: "/AnalysingPage",
    children: [
      { id: "analysing-1", label: "Reading My Assignment Description", time: "3 mins read", url: "/AnalysingPage1" },
      { id: "analysing-2", label: "Understanding my Audience", time: "3 mins read", url: "/AnalysingPage2" },
      { id: "analysing-3", label: "Understanding the Rubric", time: "3 mins read", url: "/AnalysingPage3" },
    ],
  },

  {
    id: "brainstorming",
    label: "Brainstorming",
    icon: <BookOpen size={18} />,
    time: "5 mins read",
    url: "/BrainstormingPage",
    children: [
      { id: "brain-1", label: "Developing a preliminary thesis or question", time: "3 mins read", url: "/BrainstormingPage2" },
      { id: "brain-2", label: "Outlining or mind-mapping my ideas", time: "3 mins read", url: "/BrainstormingPage3" },
      { id: "brain-3", label: "Identifying more info and questions", time: "3 mins read", url: "/BrainstormingPage4" },
    ],
  },

  {
    id: "researching",
    label: "Researching",
    icon: <FileText size={18} />,
    time: "8 mins read",
    url: "/ResearchingPage",
    children: [
      { id: "res-1", label: "Understanding my topic & searching", time: "3 mins read", url: "/ResearchingPage2" },
      { id: "res-2", label: "Reading and evaluating sources", time: "3 mins read", url: "/ResearchingPage3" },
      { id: "res-3", label: "Taking notes & collecting citations", time: "3 mins read", url: "/ResearchingPage4" },
    ],
  },

  {
    id: "drafting",
    label: "Drafting",
    icon: <Pen size={18} />,
    time: "10 mins read",
    url: "/DraftingPage",
    children: [
      { id: "draft-1", label: "Writing out my thesis or argument", time: "3 mins read", url: "/DraftingPage2" },
      { id: "draft-2", label: "Integrating evidence into assignment", time: "3 mins read", url: "/DraftingPage3" },
      { id: "draft-3", label: "Addressing counterarguments", time: "3 mins read", url: "/DraftingPage4" },
    ],
  },

  {
    id: "revision",
    label: "Revision",
    icon: <CheckSquare size={18} />,
    time: "6 mins read",
    url: "/RevisionPage",
    children: [
      { id: "rev-1", label: "Considering the order of ideas", time: "3 mins read", url: "/RevisionPage2" },
      { id: "rev-2", label: "Establishing my voice & perspective", time: "3 mins read", url: "/RevisionPage3" },
      { id: "rev-3", label: "Measuring effectiveness of argument", time: "3 mins read", url: "/RevisionPage4" },
    ],
  },

  {
    id: "editing",
    label: "Editing",
    icon: <Edit size={18} />,
    time: "5 mins read",
    url: "/EditingPage",
    children: [
      { id: "edit-1", label: "Checking grammar and punctuation", time: "3 mins read", url: "/EditingPage2" },
      { id: "edit-2", label: "Looking at flow between sentences", time: "3 mins read", url: "/EditingPage3" },
      { id: "edit-3", label: "Considering word choice", time: "3 mins read", url: "/EditingPage4" },
    ],
  },

  {
    id: "citing",
    label: "Citing",
    icon: <ListChecks size={18} />,
    time: "4 mins read",
    url: "/CitingPage",
    children: [
      { id: "cite-1", label: "Checking paper formatting", time: "3 mins read", url: "/CitingPage2" },
      { id: "cite-2", label: "Verifying all sources are cited", time: "3 mins read", url: "/CitingPage3" },
      { id: "cite-3", label: "Ensuring footnotes & in-text citations match", time: "3 mins read", url: "/CitingPage4" },
    ],
  },
];

export default function Sidebar({
  currentSection,
  currentStep,
}: {
  currentSection?: string;
  currentStep?: string;
}) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  const detectedSection = useMemo(() => {
    const lower = pathname.toLowerCase();
    const found = steps.find((s) => {
      const idMatch = lower.includes(s.id.toLowerCase());
      const urlMatch = s.url ? lower.includes(s.url.replace("/", "").toLowerCase()) : false;
      return idMatch || urlMatch;
    });
    return found?.id ?? null;
  }, [pathname]);

  const detectedChild = useMemo(() => {
    const lower = pathname.toLowerCase();
    const found = steps
      .flatMap((s) => s.children ?? [])
      .find((c) => {
        const cu = c.url.replace("/", "").toLowerCase();
        return lower === cu || lower.startsWith(cu + "/");
      });
    return found?.id ?? null;
  }, [pathname]);

  const initialSection = currentSection ?? detectedSection ?? steps[0].id;
  const initialActiveChild = currentStep ?? detectedChild ?? null;

  const [expanded, setExpanded] = useState<string | null>(initialSection);
  const [activeChild, setActiveChild] = useState<string | null>(initialActiveChild);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (detectedSection) {
      setExpanded(detectedSection);
    }
    setActiveChild(detectedChild);
    setLoading(false);
  }, [pathname, detectedSection, detectedChild]);

  const navigate = async (url: string) => {
    setLoading(true);
    setTimeout(() => {
      router.push(url);
    }, 80);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-lg">
            <div className="animate-spin border-4 border-black border-t-transparent rounded-full w-6 h-6" />
            <div className="text-sm font-medium">Loading page…</div>
          </div>
        </div>
      )}

      <aside className="w-80 bg-white border rounded-xl shadow-md overflow-hidden">
        <div className="bg-black text-white px-4 py-3">
          <h2 className="text-lg font-semibold">ASU Writing Guide</h2>
        </div>

        <div className="divide-y">
          {steps.map((step) => {
            const isExpanded = expanded === step.id;
            return (
              <div key={step.id}>
                <div className={`flex items-center justify-between px-4 py-4 ${isExpanded ? "bg-[#E5E1E1]" : ""}`}>
                  <div className="flex items-center gap-2">
                    {step.icon && <span className="text-gray-600">{step.icon}</span>}
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-gray-900 text-white rounded-full px-2 py-0.5">{step.time}</span>

                    <button
                      aria-expanded={isExpanded}
                      aria-controls={`${step.id}-children`}
                      onClick={() => {
                        setExpanded((prev) => (prev === step.id ? null : step.id));
                        if (!step.children) setActiveChild(null);
                      }}
                      className="p-2 rounded-md hover:bg-gray-200"
                      title={isExpanded ? "Collapse" : "Expand"}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform ${isExpanded ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>


                {step.children && isExpanded && (
                  <div id={`${step.id}-children`} className="mt-2 mb-2 space-y-3 px-2" role="region" aria-label={`${step.label} children`}>
                    <div className="px-4 pt-2 pb-1">
                      <button
                        onClick={() => navigate(step.url ?? "/")}
                        className="text-xs text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-full hover:bg-asu-gold hover:text-black transition"
                        aria-label={`Go to ${step.label} main page`}
                      >
                        Open {step.label} Home page
                      </button>
                    </div>
                    {step.children.map((child) => {
                      const isCurrent = activeChild === child.id || pathname.toLowerCase() === child.url.replace("/", "").toLowerCase();
                      return (
                        <button
                          key={child.id}
                          onClick={() => navigate(child.url)}
                          className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm rounded-lg shadow-sm transition ${isCurrent ? "bg-asu-gold text-black font-semibold" : "bg-[#E4E4E4] text-black hover:bg-asu-gold"
                            }`}
                        >
                          <span className="font-medium flex-1 pr-4">{child.label}</span>
                          <span className="shrink-0 text-xs bg-black text-white rounded-full px-3 py-1">{child.time}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-4">
          <button onClick={() => navigate("/notebook")} className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition">
            My Notebook
          </button>
        </div>
      </aside>
    </>
  );
}
