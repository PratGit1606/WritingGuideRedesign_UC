"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ModuleKey } from "./moduleKeys";
import { MODULE_SECTIONS, moduleProgressPercentForSelection, type ModuleSectionMeta } from "./moduleSectionRegistry";
import ModuleAccordionProgressRing from "./ModuleAccordionProgressRing";
import cn from "clsx";

const MODULE_LABEL: Record<ModuleKey, string> = {
  analyzing: "Analysing",
  brainstorming: "Brainstorming",
  drafting: "Drafting",
  revision: "Revision",
  editing: "Editing",
  citing: "Citing",
  researching: "Researching",
};
const MODULE_ORDER: ModuleKey[] = [
  "analyzing",
  "brainstorming",
  "drafting",
  "revision",
  "editing",
  "citing",
  "researching",
];

function sectionsForModule(moduleKey: ModuleKey): ModuleSectionMeta[] {
  return MODULE_SECTIONS.filter((s) => s.moduleKey === moduleKey);
}

export default function ModuleSidebarAccordion({
  searchQuery,
  recommendedModules,
  expandedModuleKey,
  onExpandedChange,
  selectedSectionId,
  onSelectSection,
}: {
  searchQuery: string;
  recommendedModules: ModuleKey[];
  expandedModuleKey: ModuleKey | null;
  onExpandedChange: (key: ModuleKey | null) => void;
  selectedSectionId: string | null;
  onSelectSection: (id: string) => void;
}) {
  const q = searchQuery.trim().toLowerCase();

  const filterSections = (sections: ModuleSectionMeta[]) => {
    if (!q) return sections;
    return sections.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        MODULE_LABEL[s.moduleKey].toLowerCase().includes(q)
    );
  };

  return (
    <div className="space-y-2">
      {MODULE_ORDER.map((moduleKey) => {
        const sections = filterSections(sectionsForModule(moduleKey));
        if (sections.length === 0) return null;

        const isOpen = expandedModuleKey === moduleKey;
        const isRecommended = recommendedModules.includes(moduleKey);
        const label = MODULE_LABEL[moduleKey];
        const moduleProgress = moduleProgressPercentForSelection(moduleKey, selectedSectionId);

        return (
          <div
            key={moduleKey}
            className={cn(
              "rounded-lg border overflow-hidden transition-colors",
              isRecommended ? "border-asu-gold bg-asu-gold/10" : "border-[#E7E7E7] bg-white"
            )}
          >
            <button
              type="button"
              onClick={() => onExpandedChange(isOpen ? null : moduleKey)}
              className="w-full flex items-center justify-between gap-2 px-3 py-3 text-left hover:bg-black/[0.03] transition"
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "text-sm font-semibold truncate min-w-0 flex-1",
                  isRecommended ? "text-asu-black" : "text-asu-gray"
                )}
              >
                {label}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <ModuleAccordionProgressRing percent={moduleProgress} />
                {isRecommended && (
                  <span className="text-[10px] font-semibold text-asu-black bg-asu-gold/40 px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                )}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: "easeOut" }}>
                  <ChevronDown className="size-4 text-asu-gray" aria-hidden />
                </motion.span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden border-t border-asu-gray/10"
                >
                  <ul className="py-1 px-1 space-y-0.5" role="list">
                    {sections.map((s) => {
                      const active = selectedSectionId === s.id;
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => onSelectSection(s.id)}
                            className={cn(
                              "w-full text-left px-3 py-2.5 rounded-md text-sm transition",
                              active
                                ? "bg-asu-gold/25 text-asu-black font-semibold border border-asu-gold/50"
                                : "text-asu-gray hover:bg-asu-gray/10"
                            )}
                          >
                            {s.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
