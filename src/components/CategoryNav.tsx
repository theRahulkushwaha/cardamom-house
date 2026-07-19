"use client";

import { useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/types/menu";

export function CategoryNav({ categories }: { categories: MenuCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's currently intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  // Keep the active pill scrolled into view on mobile's horizontally-scrolling nav.
  useEffect(() => {
    const activeButton = navRef.current?.querySelector<HTMLElement>(
      `[data-id="${activeId}"]`
    );
    activeButton?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <nav
  className="no-print sticky top-0 z-40 border-b border-brown/[0.05] bg-card/80 py-3 backdrop-blur-xl"
    >
      <div
        ref={navRef}
        className="mx-auto flex max-w-page items-center gap-2 overflow-x-auto px-6 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <a
              key={category.id}
              data-id={category.id}
              href={`#${category.id}`}
              onClick={handleClick(category.id)}
              aria-current={isActive ? "true" : undefined}
              className={`relative flex-shrink-0 rounded-pill px-4 py-2 font-accent text-sm font-medium transition-colors duration-300 ease-luxury ${
                isActive
                  ? "bg-amber text-white shadow-[0_8px_20px_rgba(180,83,9,0.25)]"
                  : "text-muted hover:bg-brown/[0.04] hover:text-brown"
              }`}
            >
              {category.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
