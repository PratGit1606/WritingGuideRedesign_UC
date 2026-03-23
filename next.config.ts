import type { NextConfig } from "next";

/** Legacy lesson routes → Notebook Modules tab with matching section */
const NOTEBOOK_MODULE_REDIRECTS: { source: string; section: string }[] = [
  { source: "/AnalysingPage", section: "analyzing-1" },
  { source: "/AnalysingPage2", section: "analyzing-2" },
  { source: "/AnalysingPage3", section: "analyzing-3" },
  { source: "/AnalysingPage4", section: "analyzing-4" },
  { source: "/AnalysingPage5", section: "analyzing-5" },
  { source: "/BrainstormingPage", section: "brainstorming-1" },
  { source: "/BrainstormingPage2", section: "brainstorming-2" },
  { source: "/BrainstormingPage3", section: "brainstorming-3" },
  { source: "/BrainstormingPage4", section: "brainstorming-4" },
  { source: "/BrainstormingPage5", section: "brainstorming-5" },
  { source: "/DraftingPage", section: "drafting-1" },
  { source: "/DraftingPage2", section: "drafting-2" },
  { source: "/DraftingPage3", section: "drafting-3" },
  { source: "/DraftingPage4", section: "drafting-4" },
  { source: "/DraftingPage5", section: "drafting-5" },
  { source: "/RevisionPage", section: "revision-1" },
  { source: "/RevisionPage2", section: "revision-2" },
  { source: "/RevisionPage3", section: "revision-3" },
  { source: "/RevisionPage4", section: "revision-4" },
  { source: "/RevisionPage5", section: "revision-5" },
  { source: "/EditingPage", section: "editing-1" },
  { source: "/EditingPage2", section: "editing-2" },
  { source: "/EditingPage3", section: "editing-3" },
  { source: "/EditingPage4", section: "editing-4" },
  { source: "/EditingPage5", section: "editing-5" },
  { source: "/CitingPage", section: "citing-1" },
  { source: "/CitingPage2", section: "citing-2" },
  { source: "/CitingPage3", section: "citing-3" },
  { source: "/CitingPage4", section: "citing-4" },
  { source: "/CitingPage5", section: "citing-5" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return NOTEBOOK_MODULE_REDIRECTS.map(({ source, section }) => ({
      source,
      destination: `/Notebook?tab=modules&section=${encodeURIComponent(section)}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
