"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { ModuleLessonProvider } from "./ModuleLessonContext";
import { loadModuleLesson } from "./moduleLessonLoader";

export default function ModuleLessonCanvas({
  sectionId,
  onNavigateToSection,
}: {
  sectionId: string;
  onNavigateToSection: (id: string) => void;
}) {
  const [Comp, setComp] = useState<ComponentType<object> | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setErr(null);
    setComp(null);
    void loadModuleLesson(sectionId)
      .then((C) => {
        if (!cancelled) setComp(() => C);
      })
      .catch((e: unknown) => {
        if (!cancelled) setErr(e instanceof Error ? e.message : "Failed to load lesson");
      });
    return () => {
      cancelled = true;
    };
  }, [sectionId]);

  return (
    <ModuleLessonProvider value={{ onNavigateToSection }}>
      <div className="w-full max-w-[1100px] mx-auto">
        {err && (
          <p className="p-6 text-red-600 text-sm" role="alert">
            {err}
          </p>
        )}
        {!Comp && !err && (
          <div className="flex items-center justify-center py-24 text-asu-gray text-sm">Loading module…</div>
        )}
        {Comp && <Comp />}
      </div>
    </ModuleLessonProvider>
  );
}
