import type { MenuData } from "@/types/menu";
import { formatPrice } from "@/lib/format";
import { TagPill } from "@/components/TagPill";

export function TodaySpecial({
  data,
  soldOut,
}: {
  data: MenuData;
  soldOut: boolean;
}) {
  const item = data.categories
    .flatMap((c) => c.items)
    .find((i) => i.id === data.todaySpecial.itemId);

  if (!item) return null;

  return (
    <section
      id="special"
      aria-labelledby="special-heading"
      className="scroll-mt-28 px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="mx-auto max-w-page">
        <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-amber">
          Today&rsquo;s special
        </p>
        <h2
          id="special-heading"
          className="mt-3 max-w-xl font-serif text-4xl leading-tight text-brown sm:text-5xl"
        >
          {soldOut
            ? "Today's special sold out fast."
            : "The plate we're proud of this morning."}
        </h2>

        <div
          className={`relative mt-10 overflow-hidden rounded-card border p-8 sm:p-12 ${
            soldOut
              ? "border-brown/[0.06] bg-card"
              : "border-amber/15 bg-card shadow-[0_30px_80px_rgba(180,83,9,0.15)]"
          }`}
        >
          {!soldOut && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-glow blur-3xl"
            />
          )}

          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-lg">
              <div className="flex flex-wrap items-center gap-2">
                {soldOut ? (
                  <span className="inline-flex items-center rounded-pill bg-soldout-bg px-3 py-1 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-soldout-text">
                    Sold out for today
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-pill bg-amber-glow px-3 py-1 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-amber">
                    Chef&rsquo;s recommendation
                  </span>
                )}
                {item.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>

              <h3 className="mt-4 font-serif text-3xl text-brown sm:text-[34px]">
                {item.name}
              </h3>

              <p className="mt-3 font-body text-base leading-relaxed text-muted">
                {soldOut
                  ? "We sold out of this one this morning — it's popular for a reason. It'll be back tomorrow."
                  : data.todaySpecial.blurb}
              </p>
            </div>

            <div className="flex items-center gap-6 sm:flex-col sm:items-end sm:gap-4">
              <p
                className={`font-serif text-3xl ${soldOut ? "text-muted line-through" : "text-amber"}`}
              >
                {formatPrice(item.price)}
              </p>
              <a
                href={soldOut ? "#brunch" : "#brunch"}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("brunch")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-pill px-6 py-3 font-accent text-sm font-semibold transition-all duration-300 ease-luxury ${
                  soldOut
                    ? "border border-brown/10 text-muted hover:border-brown/20"
                    : "bg-amber text-white shadow-[0_16px_30px_rgba(180,83,9,0.25)] hover:-translate-y-0.5"
                }`}
              >
                {soldOut ? "See full brunch menu" : "See it on the menu"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
