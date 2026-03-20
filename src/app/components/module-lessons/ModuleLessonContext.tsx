"use client";

import { createContext, useContext } from "react";

export type ModuleLessonContextValue = {
  onNavigateToSection: (sectionId: string) => void;
};

const ModuleLessonContext = createContext<ModuleLessonContextValue | null>(null);

export function ModuleLessonProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ModuleLessonContextValue;
}) {
  return (
    <ModuleLessonContext.Provider value={value}>{children}</ModuleLessonContext.Provider>
  );
}

export function useModuleLessonNav(): ModuleLessonContextValue | null {
  return useContext(ModuleLessonContext);
}
