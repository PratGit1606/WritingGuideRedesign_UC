"use client";

/**
 * Small circular progress ring for module accordion headers (replaces full ProgressSteps in lesson body).
 */
export default function ModuleAccordionProgressRing({ percent }: { percent: number }) {
  const p = Math.min(100, Math.max(0, percent));
  return (
    <div
      className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(var(--asu-gold) ${p}%, #e5e5e5 ${p}%)`,
      }}
      title={`${p}% through this module`}
      role="img"
      aria-label={`Module progress ${p} percent`}
    >
      <div className="absolute flex h-[1.375rem] w-[1.375rem] items-center justify-center rounded-full bg-white">
        <span className="text-[9px] font-semibold leading-none text-asu-black tabular-nums">{p}</span>
      </div>
    </div>
  );
}
