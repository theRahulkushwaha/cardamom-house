"use client";

export type FilterType = "all" | "veg" | "gf";

interface DietaryFilterProps {
  value: FilterType;
  onChange: (value: FilterType) => void;
}

const filters = [
  { id: "all", label: "All" },
  { id: "veg", label: "Vegetarian" },
  { id: "gf", label: "Gluten-Free" },
] as const;

export default function DietaryFilter({
  value,
  onChange,
}: DietaryFilterProps) {
  return (
    <section className="no-print border-b border-brown/10 bg-card">
      <div className="mx-auto flex max-w-page flex-wrap items-center gap-3 px-6 py-5 sm:px-10">
        <span className="font-accent text-sm font-semibold text-muted">
          Filter:
        </span>

        {filters.map((filter) => {
          const active = value === filter.id;

          return (
            <button
              key={filter.id}
              onClick={() => onChange(filter.id)}
              aria-pressed={active}
              className={`rounded-pill px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                active
                  ? "bg-amber text-white shadow-md"
                  : "bg-card text-brown border border-brown/10 hover:bg-brown/5"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}