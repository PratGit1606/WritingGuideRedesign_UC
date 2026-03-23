"use client";

import { getSectionMeta } from "./moduleSectionRegistry";

export default function LegacyEmbedLesson({ sectionId }: { sectionId: string }) {
  const meta = getSectionMeta(sectionId);
  if (!meta) {
    return <p className="p-6 text-asu-gray text-sm">Unknown module section.</p>;
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-asu-gray/20 bg-white shadow-sm">
      <iframe
        title={meta.label}
        src={meta.legacyPath}
        className="w-full min-h-[min(85vh,1000px)] border-0"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}
