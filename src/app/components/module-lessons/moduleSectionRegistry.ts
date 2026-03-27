import type { ModuleKey } from "./moduleKeys";

export type ModuleSectionMeta = {
  id: string;
  moduleKey: ModuleKey;
  label: string;
  legacyPath: string;
};

export const MODULE_SECTIONS: ModuleSectionMeta[] = [
  { id: "analyzing-1", moduleKey: "analyzing", label: "Analysing — Overview", legacyPath: "/AnalysingPage" },
  { id: "analyzing-2", moduleKey: "analyzing", label: "Reading My Assignment Description", legacyPath: "/AnalysingPage1" },
  { id: "analyzing-3", moduleKey: "analyzing", label: "Understanding my Audience", legacyPath: "/AnalysingPage2" },
  { id: "analyzing-4", moduleKey: "analyzing", label: "Understanding the Rubric", legacyPath: "/AnalysingPage3" },
  { id: "analyzing-5", moduleKey: "analyzing", label: "Wrap Up", legacyPath: "/AnalysingPage5" },

  { id: "brainstorming-1", moduleKey: "brainstorming", label: "Brainstorming — Overview", legacyPath: "/BrainstormingPage" },
  { id: "brainstorming-2", moduleKey: "brainstorming", label: "Developing a preliminary thesis or question", legacyPath: "/BrainstormingPage2" },
  { id: "brainstorming-3", moduleKey: "brainstorming", label: "Outlining or mind-mapping my ideas", legacyPath: "/BrainstormingPage3" },
  { id: "brainstorming-4", moduleKey: "brainstorming", label: "Identifying more info and questions", legacyPath: "/BrainstormingPage4" },
  { id: "brainstorming-5", moduleKey: "brainstorming", label: "Wrap Up", legacyPath: "/BrainstormingPage5" },

  { id: "researching-1", moduleKey: "researching", label: "Researching — Overview", legacyPath: "/ResearchingPage" },
  { id: "researching-2", moduleKey: "researching", label: "Understanding my topic & searching", legacyPath: "/ResearchingPage2" },
  { id: "researching-3", moduleKey: "researching", label: "Reading and evaluating sources", legacyPath: "/ResearchingPage3" },
  { id: "researching-4", moduleKey: "researching", label: "Taking notes & collecting citations", legacyPath: "/ResearchingPage4" },
  { id: "researching-5", moduleKey: "researching", label: "Wrap Up", legacyPath: "/ResearchingPage5" },

  { id: "drafting-1", moduleKey: "drafting", label: "Drafting — Overview", legacyPath: "/DraftingPage" },
  { id: "drafting-2", moduleKey: "drafting", label: "Writing out my thesis or argument", legacyPath: "/DraftingPage2" },
  { id: "drafting-3", moduleKey: "drafting", label: "Integrating evidence into assignment", legacyPath: "/DraftingPage3" },
  { id: "drafting-4", moduleKey: "drafting", label: "Addressing counterarguments", legacyPath: "/DraftingPage4" },
  { id: "drafting-5", moduleKey: "drafting", label: "Wrap Up", legacyPath: "/DraftingPage5" },

  { id: "revision-1", moduleKey: "revision", label: "Revision — Overview", legacyPath: "/RevisionPage" },
  { id: "revision-2", moduleKey: "revision", label: "Considering the order of ideas", legacyPath: "/RevisionPage2" },
  { id: "revision-3", moduleKey: "revision", label: "Establishing my voice & perspective", legacyPath: "/RevisionPage3" },
  { id: "revision-4", moduleKey: "revision", label: "Measuring effectiveness of argument", legacyPath: "/RevisionPage4" },
  { id: "revision-5", moduleKey: "revision", label: "Wrap Up", legacyPath: "/RevisionPage5" },

  { id: "editing-1", moduleKey: "editing", label: "Editing — Overview", legacyPath: "/EditingPage" },
  { id: "editing-2", moduleKey: "editing", label: "Checking grammar and punctuation", legacyPath: "/EditingPage2" },
  { id: "editing-3", moduleKey: "editing", label: "Looking at flow between sentences", legacyPath: "/EditingPage3" },
  { id: "editing-4", moduleKey: "editing", label: "Considering word choice", legacyPath: "/EditingPage4" },
  { id: "editing-5", moduleKey: "editing", label: "Wrap Up", legacyPath: "/EditingPage5" },

  { id: "citing-1", moduleKey: "citing", label: "Citing — Overview", legacyPath: "/CitingPage" },
  { id: "citing-2", moduleKey: "citing", label: "Checking paper formatting", legacyPath: "/CitingPage2" },
  { id: "citing-3", moduleKey: "citing", label: "Verifying all sources are cited", legacyPath: "/CitingPage3" },
  { id: "citing-4", moduleKey: "citing", label: "Ensuring footnotes & in-text citations match", legacyPath: "/CitingPage4" },
  { id: "citing-5", moduleKey: "citing", label: "Wrap Up", legacyPath: "/CitingPage5" },
];
const byId = new Map(MODULE_SECTIONS.map((s) => [s.id, s]));

export function getSectionMeta(id: string): ModuleSectionMeta | undefined {
  return byId.get(id);
}

export function getLegacyPathForSection(id: string): string {
  return getSectionMeta(id)?.legacyPath ?? "/Notebook";
}

export function sectionsForModule(moduleKey: ModuleKey): ModuleSectionMeta[] {
  return MODULE_SECTIONS.filter((s) => s.moduleKey === moduleKey);
}

const SECTION_RING_PERCENT: readonly number[] = [0, 33, 67, 98, 100];

export function moduleProgressPercentForSelection(
  moduleKey: ModuleKey,
  selectedSectionId: string | null
): number {
  if (!selectedSectionId) return 0;
  const meta = getSectionMeta(selectedSectionId);
  if (!meta || meta.moduleKey !== moduleKey) return 0;
  const sections = sectionsForModule(moduleKey);
  const idx = sections.findIndex((s) => s.id === selectedSectionId);
  if (idx < 0) return 0;
  return SECTION_RING_PERCENT[idx] ?? 0;
}
