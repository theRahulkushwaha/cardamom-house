"use client";

import type { DemoState } from "@/types/menu";

const OPTIONS: { value: DemoState; label: string }[] = [
  { value: "open", label: "Open" },
  { value: "closed", label: "Closed" },
  { value: "special-sold-out", label: "Special sold out" },
];

export function DemoStateSwitcher({ current }: { current: DemoState }) {
  return (
    <div className="no-print fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-6">
      <div className="flex items-center gap-1 rounded-pill border border-brown/10 bg-white/80 p-1 shadow-[0_20px_40px_rgba(180,83,9,0.15)] backdrop-blur-xl">
        <span className="pl-3 pr-1 font-accent text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
          Demo
        </span>
        {OPTIONS.map((opt) => (
          <a
            key={opt.value}
            href={`?state=${opt.value}`}
            aria-current={current === opt.value ? "true" : undefined}
            className={`rounded-pill px-3 py-1.5 font-accent text-xs font-medium transition-colors duration-300 ${
              current === opt.value
                ? "bg-amber text-white"
                : "text-brown hover:bg-brown/[0.05]"
            }`}
          >
            {opt.label}
          </a>
        ))}
      </div>
    </div>
  );
}
