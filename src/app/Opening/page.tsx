"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Search, BookOpen, FileText, Pen, CheckSquare, Edit, ListChecks, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import EmotionRecommendationModal from "../components/EmotionRecommendationModal";

type ModuleKey = "analyzing" | "brainstorming" | "drafting" | "revision" | "editing" | "citing";

const EMOTION_TO_MODULE: Record<string, ModuleKey> = {
  lost_assignment: "analyzing",
  asking_assignment: "analyzing",
  no_ideas: "brainstorming",
  brain_blank: "brainstorming",
  messy_draft: "drafting",
  dont_know_start: "drafting",
  weak_argument: "revision",
  does_it_make_sense: "revision",
  fix_grammar: "editing",
  sounds_off: "editing",
  citations_panic: "citing",
  citing_right: "citing",
};

const STEP_LABEL_TO_MODULE: Partial<Record<string, ModuleKey>> = {
  Analysing: "analyzing",
  Brainstorming: "brainstorming",
  Drafting: "drafting",
  Revision: "revision",
  Editing: "editing",
  Citing: "citing",
};

/** Pastel fills derived from ASU secondary palette (#00A3E0, #78BE20, #FF7F32, #AF674B, #4AB7C4, #E74973) */
const ASU_SECONDARY_PASTEL = {
  blue: "bg-[#D5ECF7]", // #00A3E0
  blueAlt: "bg-[#E0F4FC]", // #00A3E0 (second tint for another module)
  green: "bg-[#E6F3D6]", // #78BE20
  orange: "bg-[#FFE5D0]", // #FF7F32
  brown: "bg-[#EDE0DA]", // #AF674B
  teal: "bg-[#D9F0F3]", // #4AB7C4
  pink: "bg-[#FBD8E4]", // #E74973
} as const;

const steps = [
  {
    id: 1,
    label: "Analysing",
    desc: "Still wrapping my head around the assignment",
    icon: <Search size={20} />,
    color: ASU_SECONDARY_PASTEL.blue,
  },
  {
    id: 2,
    label: "Brainstorming",
    desc: "Brainstorming ideas for my paper",
    icon: <BookOpen size={20} />,
    color: ASU_SECONDARY_PASTEL.green,
  },
  {
    id: 3,
    label: "Researching",
    desc: "Trying to find my sources",
    icon: <FileText size={20} />,
    color: ASU_SECONDARY_PASTEL.teal,
  },
  {
    id: 4,
    label: "Drafting",
    desc: "Trying to write out my ideas",
    icon: <Pen size={20} />,
    color: ASU_SECONDARY_PASTEL.orange,
  },
  {
    id: 5,
    label: "Revision",
    desc: "Reworking my ideas and making sure my message is coming across",
    icon: <CheckSquare size={20} />,
    color: ASU_SECONDARY_PASTEL.brown,
  },
  {
    id: 6,
    label: "Editing",
    desc: "Checking my grammar and word choice",
    icon: <Edit size={20} />,
    color: ASU_SECONDARY_PASTEL.pink,
  },
  {
    id: 7,
    label: "Citing",
    desc: "Making sure my citations and format are right",
    icon: <ListChecks size={20} />,
    color: ASU_SECONDARY_PASTEL.blueAlt,
  },
];

const NOTEBOOK_TITLE = "Track your Progress";
const NOTEBOOK_DESC =
  "Keep all your writing projects organized in one place. Track your progress and access your notes anytime, anywhere.";

export default function Page() {
  const [recommendedModules, setRecommendedModules] = useState<Set<ModuleKey>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [showRecommendModal, setShowRecommendModal] = useState(false);

  const loadRecommendationsFromStorage = useCallback(() => {
    try {
      const raw = localStorage.getItem("writingGuide_selectedEmotionKeys_v1");
      if (!raw) {
        setRecommendedModules(new Set());
        return;
      }
      const emotionKeys = JSON.parse(raw) as string[];
      const next = new Set<ModuleKey>();
      for (const key of emotionKeys) {
        const mk = EMOTION_TO_MODULE[key];
        if (mk) next.add(mk);
      }
      setRecommendedModules(next);
    } catch {
      setRecommendedModules(new Set());
    }
  }, []);

  useEffect(() => {
    loadRecommendationsFromStorage();
  }, [loadRecommendationsFromStorage]);

  const handleModalClose = () => {
    setShowRecommendModal(false);
    loadRecommendationsFromStorage();
  };

  const isRecommendedStep = useMemo(() => {
    return (label: string) => {
      const mk = STEP_LABEL_TO_MODULE[label];
      if (!mk) return false;
      return recommendedModules.has(mk);
    };
  }, [recommendedModules]);

  const filteredSteps = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return steps;
    return steps.filter(
      (s) =>
        s.label.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const showNotebook = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    const hay = `${NOTEBOOK_TITLE} ${NOTEBOOK_DESC}`.toLowerCase();
    return hay.includes(q);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[url(/background.jpeg)] bg-cover bg-center font-sans text-black">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-14 pb-6">
        <header className="text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-asu-black tracking-tight">
            Writing <span className="text-asu-gold">Guide</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-asu-gray leading-relaxed">
            Your reference for writing assignments—from understanding the prompt to submitting your final draft.
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-6 border-b border-asu-gray/15 pb-3">
            <span
              className="text-2xl font-semibold text-asu-black border-b-2 border-asu-black -mb-[13px] pb-3"
              role="tab"
              aria-selected="true"
            >
              Modules
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center lg:max-w-xl">
            <div className="relative flex-1 min-w-0">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-asu-gray pointer-events-none"
                size={18}
                aria-hidden
              />
              <input
                type="search"
                placeholder="Search modules…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-asu-gray/25 bg-white pl-10 pr-4 py-2.5 text-sm text-asu-black placeholder:text-asu-gray/60 focus:outline-none focus:ring-2 focus:ring-asu-maroon/25 focus:border-asu-maroon/30"
                aria-label="Search modules"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowRecommendModal(true)}
              className="inline-flex items-center justify-center gap-2 shrink-0 rounded-full bg-white text-asu-black border border-asu-gray/20 px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-zinc-50 hover:border-asu-gray/30"
            >
              <Sparkles
                size={18}
                className="shrink-0 fill-asu-gold text-asu-gold"
                strokeWidth={1.5}
                aria-hidden
              />
              Recommend
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-16">
        <ul className="flex flex-col gap-2 list-none p-0 m-0" role="list">
          {filteredSteps.map((step) => {
            const link = `/${step.label.replace(/\s+/g, "")}Page`;

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`rounded-xl px-4 py-4 sm:px-5 sm:py-4 transition-[box-shadow,border-color] duration-200 ease-out bg-white border flex flex-row items-center justify-between gap-3 sm:gap-4 w-full ${
                  isRecommendedStep(step.label)
                    ? "border-asu-gold/60 hover:border-asu-gold/80 hover:shadow-sm"
                    : "border-asu-gray/15 hover:border-asu-gray/25 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                  <div
                    className={`rounded-full p-2.5 sm:p-3 shadow-sm ring-1 ring-black/5 shrink-0 ${step.color}`}
                  >
                    {step.icon}
                  </div>
                  <div className="min-w-0 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-asu-black leading-tight">
                      {step.label}
                    </h3>
                    <p className="mt-0.5 text-sm text-asu-gray leading-snug">{step.desc}</p>
                  </div>
                </div>
                {isRecommendedStep(step.label) && (
                  <div className="flex items-center shrink-0">
                    <span className="text-xs border-1 font-regular px-2 py-1 rounded-full bg-asu-gold/20 text-asu-gold whitespace-nowrap">
                      Recommended
                    </span>
                  </div>
                )}
              </motion.div>
            );

            return (
              <li key={step.id} className="w-full">
                <Link href={link} className="cursor-pointer block w-full">
                  {content}
                </Link>
              </li>
            );
          })}

          {showNotebook && (
            <li className="w-full">
              <Link href="/Notebook" className="cursor-pointer block w-full">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-asu-gray/15 bg-white px-4 py-4 sm:px-5 flex flex-row items-center justify-between gap-4 w-full transition-[box-shadow,border-color] duration-200 ease-out hover:border-asu-gray/25 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <div className="rounded-full p-2.5 sm:p-3 bg-asu-gray/10 ring-1 ring-black/5 shrink-0">
                      <BookOpen size={20} className="text-asu-black" />
                    </div>
                    <div className="min-w-0 text-left">
                      <h3 className="text-base sm:text-lg font-bold text-asu-black leading-tight">
                        {NOTEBOOK_TITLE}
                      </h3>
                      <p className="mt-0.5 text-sm text-asu-gray leading-snug">{NOTEBOOK_DESC}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-asu-black text-white px-3 py-1.5 rounded-full shrink-0">
                    My Notebook
                  </span>
                </motion.div>
              </Link>
            </li>
          )}
        </ul>

        {filteredSteps.length === 0 && !showNotebook && (
          <p className="text-center text-asu-gray py-12 text-sm">
            No modules match &ldquo;{searchQuery}&rdquo;. Try a different search.
          </p>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 text-center pb-12">
        <p className="mb-4 text-asu-gray">
          Feel like you know the basics, but just need a look over?
        </p>
        <button
          type="button"
          className="bg-asu-black text-asu-white px-6 py-3 rounded-full font-medium hover:bg-asu-black/85 transition"
        >
          Talk to one of our tutors.
        </button>
      </div>

      <EmotionRecommendationModal
        open={showRecommendModal}
        onClose={handleModalClose}
        mode="opening"
      />
    </div>
  );
}
