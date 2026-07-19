import type { DietaryTag } from "@/types/menu";

const TAG_CONFIG: Record<DietaryTag, { label: string; bg: string; text: string }> = {
  V: { label: "Vegetarian", bg: "bg-veg-bg", text: "text-veg-text" },
  GF: { label: "Gluten-free", bg: "bg-gf-bg", text: "text-gf-text" },
  spicy: { label: "Spicy", bg: "bg-spicy-bg", text: "text-spicy-text" },
};

export function TagPill({ tag }: { tag: DietaryTag }) {
  const config = TAG_CONFIG[tag];
  return (
    <span
      className={`inline-flex items-center rounded-pill px-2.5 py-1 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
}

export function SoldOutPill() {
  return (
    <span className="inline-flex items-center rounded-pill bg-soldout-bg px-2.5 py-1 font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-soldout-text">
      Sold out
    </span>
  );
}
