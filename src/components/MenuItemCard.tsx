import type { MenuItem } from "@/types/menu";
import { formatPrice } from "@/lib/format";
import { TagPill, SoldOutPill } from "@/components/TagPill";

export function MenuItemCard({
  item,
  soldOut = false,
}: {
  item: MenuItem;
  soldOut?: boolean;
}) {
  return (
    <li
      className={`group rounded-small border border-brown/[0.05] bg-card p-6 shadow-[0_8px_30px_rgba(180,83,9,0.03)] transition-all duration-500 ease-luxury sm:p-7 ${
        soldOut
          ? "opacity-55"
          : "hover:-translate-y-0.5 hover:shadow-xl"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl text-brown sm:text-[22px]">{item.name}</h3>
        <p
          className="whitespace-nowrap font-serif text-lg text-amber"
          aria-label={`Price: ${formatPrice(item.price)}`}
        >
          {formatPrice(item.price)}
        </p>
      </div>

      {item.description && (
        <p className="mt-2 max-w-md font-body text-[15px] leading-relaxed text-muted">
          {item.description}
        </p>
      )}

      {(item.tags.length > 0 || soldOut) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {soldOut && <SoldOutPill />}
          {item.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      )}
    </li>
  );
}
