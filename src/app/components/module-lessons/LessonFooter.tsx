"use client";

import Link from "next/link";
import { useModuleLessonNav } from "./ModuleLessonContext";
import { getLegacyPathForSection } from "./moduleSectionRegistry";

export type FooterNav =
  | { kind: "section"; id: string; label: React.ReactNode }
  | { kind: "home"; label: React.ReactNode }
  | { kind: "href"; href: string; label: React.ReactNode };

const btnClass =
  "px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-100 shadow-sm text-center transition";
const btnPrimaryClass =
  "px-6 py-3 rounded-lg border-2 border-asu-gold bg-black text-white hover:bg-gray-800 shadow-md text-center transition";

export function LessonFooter({ prev, next }: { prev?: FooterNav; next?: FooterNav }) {
  const ctx = useModuleLessonNav();

  const render = (nav: FooterNav | undefined, variant: "secondary" | "primary") => {
    if (!nav) return null;
    const cls = variant === "primary" ? btnPrimaryClass : btnClass;

    if (nav.kind === "home") {
      return (
        <Link href="/" className={cls}>
          {nav.label}
        </Link>
      );
    }
    if (nav.kind === "href") {
      return (
        <Link href={nav.href} className={cls}>
          {nav.label}
        </Link>
      );
    }
    if (ctx) {
      return (
        <button type="button" className={cls} onClick={() => ctx.onNavigateToSection(nav.id)}>
          {nav.label}
        </button>
      );
    }
    return (
      <Link href={getLegacyPathForSection(nav.id)} className={cls}>
        {nav.label}
      </Link>
    );
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-4 p-6">
      <div className="min-w-0">{render(prev, "secondary")}</div>
      <div className="min-w-0 text-right">{render(next, "primary")}</div>
    </div>
  );
}
