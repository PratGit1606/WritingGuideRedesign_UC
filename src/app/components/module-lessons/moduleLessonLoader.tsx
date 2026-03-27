import type { ComponentType } from "react";

export async function loadModuleLesson(sectionId: string): Promise<ComponentType<object>> {
  switch (sectionId) {
    case "analyzing-1":
      return (await import("./analyzing/AnalyzingLesson1")).default;
    case "analyzing-2":
      return (await import("./analyzing/AnalyzingLesson2")).default;
    case "analyzing-3":
      return (await import("./analyzing/AnalyzingLesson3")).default;
    case "analyzing-4":
      return (await import("./analyzing/AnalyzingLesson4")).default;
    case "analyzing-5":
      return (await import("./analyzing/AnalyzingLesson5")).default;
    case "brainstorming-1":
      return (await import("./brainstorming/BrainstormingLesson1")).default;
    case "brainstorming-2":
      return (await import("./brainstorming/BrainstormingLesson2")).default;
    case "brainstorming-3":
      return (await import("./brainstorming/BrainstormingLesson3")).default;
    case "brainstorming-4":
      return (await import("./brainstorming/BrainstormingLesson4")).default;
    case "brainstorming-5":
      return (await import("./brainstorming/BrainstormingLesson5")).default;
    case "researching-1":
      return (await import("./researching/ResearchingLesson1")).default;
    case "researching-2":
      return (await import("./researching/ResearchingLesson2")).default;
    case "researching-3":
      return (await import("./researching/ResearchingLesson3")).default;
    case "researching-4":
      return (await import("./researching/ResearchingLesson4")).default;
    case "researching-5":
      return (await import("./researching/ResearchingLesson5")).default;

    case "drafting-1":
      return (await import("./drafting/DraftingLesson1")).default;
    case "drafting-2":
      return (await import("./drafting/DraftingLesson2")).default;
    case "drafting-3":
      return (await import("./drafting/DraftingLesson3")).default;
    case "drafting-4":
      return (await import("./drafting/DraftingLesson4")).default;
    case "drafting-5":
      return (await import("./drafting/DraftingLesson5")).default;
    case "revision-1":
      return (await import("./revision/RevisionLesson1")).default;
    case "revision-2":
      return (await import("./revision/RevisionLesson2")).default;
    case "revision-3":
      return (await import("./revision/RevisionLesson3")).default;
    case "revision-4":
      return (await import("./revision/RevisionLesson4")).default;
    case "revision-5":
      return (await import("./revision/RevisionLesson5")).default;
    case "editing-1":
      return (await import("./editing/EditingLesson1")).default;
    case "editing-2":
      return (await import("./editing/EditingLesson2")).default;
    case "editing-3":
      return (await import("./editing/EditingLesson3")).default;
    case "editing-4":
      return (await import("./editing/EditingLesson4")).default;
    case "editing-5":
      return (await import("./editing/EditingLesson5")).default;
    case "citing-1":
      return (await import("./citing/CitingLesson1")).default;
    case "citing-2":
      return (await import("./citing/CitingLesson2")).default;
    case "citing-3":
      return (await import("./citing/CitingLesson3")).default;
    case "citing-4":
      return (await import("./citing/CitingLesson4")).default;
    case "citing-5":
      return (await import("./citing/CitingLesson5")).default;
    default: {
      const { default: LegacyEmbedLesson } = await import("./LegacyEmbedLesson");
      const sid = sectionId;
      return function DynamicLegacyEmbed() {
        return <LegacyEmbedLesson sectionId={sid} />;
      };
    }
  }
}
