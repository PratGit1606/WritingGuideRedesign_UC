import type { ModuleKey } from "./moduleKeys";

export type ModuleSectionMeta = {
  id: string;
  moduleKey: ModuleKey;
  label: string;
  legacyPath: string;
};

/** Full parity: 5 sections per module × 6 modules = 30 */
export const MODULE_SECTIONS: ModuleSectionMeta[] = [
  { id: "analyzing-1", moduleKey: "analyzing", label: "Overview — Clarity", legacyPath: "/AnalysingPage" },
  { id: "analyzing-2", moduleKey: "analyzing", label: "Section 1 — Assignment description", legacyPath: "/AnalysingPage2" },
  { id: "analyzing-3", moduleKey: "analyzing", label: "Section 2 — Audience", legacyPath: "/AnalysingPage3" },
  { id: "analyzing-4", moduleKey: "analyzing", label: "Section 3 — Rubric", legacyPath: "/AnalysingPage4" },
  { id: "analyzing-5", moduleKey: "analyzing", label: "Section 4 — Wrap up", legacyPath: "/AnalysingPage5" },
  { id: "brainstorming-1", moduleKey: "brainstorming", label: "Overview", legacyPath: "/BrainstormingPage" },
  { id: "brainstorming-2", moduleKey: "brainstorming", label: "Section 1", legacyPath: "/BrainstormingPage2" },
  { id: "brainstorming-3", moduleKey: "brainstorming", label: "Section 2", legacyPath: "/BrainstormingPage3" },
  { id: "brainstorming-4", moduleKey: "brainstorming", label: "Section 3", legacyPath: "/BrainstormingPage4" },
  { id: "brainstorming-5", moduleKey: "brainstorming", label: "Section 4", legacyPath: "/BrainstormingPage5" },
  { id: "drafting-1", moduleKey: "drafting", label: "Overview", legacyPath: "/DraftingPage" },
  { id: "drafting-2", moduleKey: "drafting", label: "Section 1", legacyPath: "/DraftingPage2" },
  { id: "drafting-3", moduleKey: "drafting", label: "Section 2", legacyPath: "/DraftingPage3" },
  { id: "drafting-4", moduleKey: "drafting", label: "Section 3", legacyPath: "/DraftingPage4" },
  { id: "drafting-5", moduleKey: "drafting", label: "Section 4", legacyPath: "/DraftingPage5" },
  { id: "revision-1", moduleKey: "revision", label: "Overview", legacyPath: "/RevisionPage" },
  { id: "revision-2", moduleKey: "revision", label: "Section 1", legacyPath: "/RevisionPage2" },
  { id: "revision-3", moduleKey: "revision", label: "Section 2", legacyPath: "/RevisionPage3" },
  { id: "revision-4", moduleKey: "revision", label: "Section 3", legacyPath: "/RevisionPage4" },
  { id: "revision-5", moduleKey: "revision", label: "Section 4", legacyPath: "/RevisionPage5" },
  { id: "editing-1", moduleKey: "editing", label: "Overview", legacyPath: "/EditingPage" },
  { id: "editing-2", moduleKey: "editing", label: "Section 1", legacyPath: "/EditingPage2" },
  { id: "editing-3", moduleKey: "editing", label: "Section 2", legacyPath: "/EditingPage3" },
  { id: "editing-4", moduleKey: "editing", label: "Section 3", legacyPath: "/EditingPage4" },
  { id: "editing-5", moduleKey: "editing", label: "Section 4", legacyPath: "/EditingPage5" },
  { id: "citing-1", moduleKey: "citing", label: "Overview", legacyPath: "/CitingPage" },
  { id: "citing-2", moduleKey: "citing", label: "Section 1", legacyPath: "/CitingPage2" },
  { id: "citing-3", moduleKey: "citing", label: "Section 2", legacyPath: "/CitingPage3" },
  { id: "citing-4", moduleKey: "citing", label: "Section 3", legacyPath: "/CitingPage4" },
  { id: "citing-5", moduleKey: "citing", label: "Section 4", legacyPath: "/CitingPage5" },
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

/** Matches former ProgressSteps ring: section index 1–5 → 0%, 33%, 67%, 98%, 100% */
const SECTION_RING_PERCENT: readonly number[] = [0, 33, 67, 98, 100];

/** Progress (0–100) for the mini ring in the module accordion when a section in that module is selected */
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
