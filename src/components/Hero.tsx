import type { Restaurant } from "@/types/menu";
import type { OpenStatus } from "@/lib/hours";

import ThemeToggle from "./ThemeToggle";

export function Hero({
  restaurant,
  status,
  nowLabel,
}: {
  restaurant: Restaurant;
  status: OpenStatus;
  nowLabel: string;
}) {
  return (
    <header className="relative overflow-hidden px-6 pb-16 pt-14 sm:px-10 sm:pb-24 sm:pt-20">
      {/* Soft organic background glow — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-glow blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-beige/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-page">
        <div className="absolute right-0 top-0">
          <ThemeToggle />
        </div>
        <div
          className={`inline-flex items-center gap-2 rounded-pill border px-3.5 py-1.5 font-accent text-xs font-semibold uppercase tracking-[0.15em] animate-fade-up ${
            status.isOpen
              ? "border-sage/30 bg-veg-bg text-veg-text"
              : "border-brown/10 bg-brown/[0.04] text-muted"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              status.isOpen ? "bg-sage" : "bg-muted"
            }`}
          />
          {status.isOpen
            ? `Open now · until ${status.closesAtLabel}`
            : status.nextOpenLabel
              ? `Closed · opens ${status.nextOpenLabel}`
              : "Closed"}
        </div>

        <h1 className="mt-6 animate-fade-up font-serif text-[56px] leading-[0.95] tracking-tight text-brown [animation-delay:80ms] sm:text-[88px] md:text-[112px]">
          {restaurant.name}
        </h1>

        <p className="mt-6 max-w-md animate-fade-up font-body text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
          {restaurant.tagline}
        </p>

        <div className="no-print mt-9 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
          <a
            href="#brunch"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("brunch")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-pill bg-amber px-6 py-3.5 font-accent text-sm font-semibold text-white shadow-[0_20px_40px_rgba(180,83,9,0.2)] transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(180,83,9,0.3)]"
          >
            View menu
          </a>
          <a
            href="#special"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("special")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-pill border border-brown/10 bg-white/60 px-6 py-3.5 font-accent text-sm font-medium text-brown backdrop-blur-md transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:border-amber/30"
          >
            Today&rsquo;s special
          </a>
        </div>

        <p className="sr-only">Current time for demo purposes: {nowLabel}.</p>
      </div>
    </header>
  );
}
