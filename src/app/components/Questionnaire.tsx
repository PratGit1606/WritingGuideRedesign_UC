import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBrain,
  faCircleExclamation,
  faCircleQuestion,
  faFaceDizzy,
  faLightbulb,
  faPenNib,
  faPenToSquare,
  faPlay,
  faScaleBalanced,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ModuleKey = "analyzing" | "brainstorming" | "drafting" | "revision" | "editing" | "citing";

const CHIP_INACTIVE =
  "bg-white border border-asu-gray/40 text-asu-black hover:border-asu-gray/55 hover:bg-asu-gray/5";
const CHIP_ACTIVE = "border border-asu-gold bg-asu-gold/15 text-asu-black";

type Emotion = {
  key: string;
  label: string;
  icon: IconDefinition;
  moduleKey: ModuleKey;
  moduleLabel: string;
};

const EMOTIONS: Emotion[] = [
  {
    key: "lost_assignment",
    label: "Lost",
    icon: faFaceDizzy,
    moduleKey: "analyzing",
    moduleLabel: "Understand Assignment",
  },
  {
    key: "asking_assignment",
    label: "What is this asking?",
    icon: faCircleQuestion,
    moduleKey: "analyzing",
    moduleLabel: "Understand Assignment",
  },
  {
    key: "no_ideas",
    label: "No ideas",
    icon: faLightbulb,
    moduleKey: "brainstorming",
    moduleLabel: "Brainstorm",
  },
  {
    key: "brain_blank",
    label: "Brain feels blank",
    icon: faBrain,
    moduleKey: "brainstorming",
    moduleLabel: "Brainstorm",
  },
  {
    key: "messy_draft",
    label: "Messy draft",
    icon: faPenNib,
    moduleKey: "drafting",
    moduleLabel: "Drafting",
  },
  {
    key: "dont_know_start",
    label: "Don’t know how to start",
    icon: faPlay,
    moduleKey: "drafting",
    moduleLabel: "Drafting",
  },
  {
    key: "weak_argument",
    label: "Weak argument",
    icon: faScaleBalanced,
    moduleKey: "revision",
    moduleLabel: "Revision",
  },
  {
    key: "does_it_make_sense",
    label: "Does this even make sense?",
    icon: faCircleQuestion,
    moduleKey: "revision",
    moduleLabel: "Revision",
  },
  {
    key: "fix_grammar",
    label: "Fix grammar",
    icon: faPenToSquare,
    moduleKey: "editing",
    moduleLabel: "Editing",
  },
  {
    key: "sounds_off",
    label: "Sounds kinda off",
    icon: faWandMagicSparkles,
    moduleKey: "editing",
    moduleLabel: "Editing",
  },
  {
    key: "citations_panic",
    label: "Citations panic",
    icon: faBook,
    moduleKey: "citing",
    moduleLabel: "Citing",
  },
  {
    key: "citing_right",
    label: "Am I citing this right?",
    icon: faCircleExclamation,
    moduleKey: "citing",
    moduleLabel: "Citing",
  },
];

const MODULE_LABELS: Record<ModuleKey, string> = {
  analyzing: "Analysing",
  brainstorming: "Brainstorming",
  drafting: "Drafting",
  revision: "Revision",
  editing: "Editing",
  citing: "Citing",
};

export default function Questionnaire({
  onSelectionChange,
}: {
  onSelectionChange: (selectedEmotionKeys: string[]) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    onSelectionChange(selected);
  }, [selected, onSelectionChange]);

  const recommendedModules = useMemo(() => {
    const modules = new Set<ModuleKey>();
    for (const key of selected) {
      const e = EMOTIONS.find((x) => x.key === key);
      if (e) modules.add(e.moduleKey);
    }
    return Array.from(modules);
  }, [selected]);

  const recommendedText = recommendedModules.length
    ? `Recommended: ${recommendedModules.map((m) => MODULE_LABELS[m]).join(", ")}`
    : "Select what feels true for you (you can pick multiple).";

  const toggle = (key: string) => {
    setSelected((prev) => {
      const isOn = prev.includes(key);
      const next = isOn ? prev.filter((k) => k !== key) : [...prev, key];
      return next;
    });
  };

  return (
    <div className="space-y-5">
      <motion.h2
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-xl font-bold text-asu-black text-center"
      >
        How do you feel with your current writing assignment/paper/article?
      </motion.h2>

      <p className="text-center text-asu-gray text-sm">{recommendedText}</p>

      <div className="flex flex-wrap gap-2.5">
        {EMOTIONS.map((e) => {
          const active = selected.includes(e.key);
          return (
            <motion.button
              key={e.key}
              type="button"
              onClick={() => toggle(e.key)}
              whileTap={{ scale: 0.99 }}
              title={e.moduleLabel}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold border transition ${
                active ? CHIP_ACTIVE : CHIP_INACTIVE
              }`}
            >
              <FontAwesomeIcon icon={e.icon} className="text-sm" />
              <span>{e.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}