import type { MenuCategory } from "@/types/menu";
import { MenuItemCard } from "@/components/MenuItemCard";

export function MenuSection({
  category,
  soldOutItemId,
}: {
  category: MenuCategory;
  soldOutItemId?: string;
}) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="scroll-mt-28 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-page px-6 sm:px-10">
        <div className="max-w-xl">
          <h2
            id={`${category.id}-heading`}
            className="font-serif text-4xl leading-tight text-brown sm:text-[44px]"
          >
            {category.name}
          </h2>
          {category.description && (
            <p className="mt-3 font-body text-base leading-relaxed text-muted">
              {category.description}
            </p>
          )}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {category.items.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              soldOut={item.id === soldOutItemId}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
