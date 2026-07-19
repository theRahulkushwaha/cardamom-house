"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { menuData } from "@/data/menu";
import { getOpenStatus } from "@/lib/hours";
import { getScenario, parseDemoState } from "@/lib/demo-state";

import { Hero } from "@/components/Hero";
import { ClosedBanner } from "@/components/ClosedBanner";
import { TodaySpecial } from "@/components/TodaySpecial";
import { CategoryNav } from "@/components/CategoryNav";
import { MenuSection } from "@/components/MenuSection";
import { HoursBlock } from "@/components/HoursBlock";
import { Footer } from "@/components/Footer";
import { DemoStateSwitcher } from "@/components/DemoStateSwitcher";

import DietaryFilter, {
  FilterType,
} from "@/components/DietaryFilter";

export function MenuExperience() {
  const searchParams = useSearchParams();

  const demoState = parseDemoState(searchParams.get("state"));
  const scenario = getScenario(demoState);

  const [filter, setFilter] = useState<FilterType>("all");

  const status = getOpenStatus(menuData.restaurant.hours, scenario.now);

  const soldOutItemId = scenario.specialSoldOut
    ? menuData.todaySpecial.itemId
    : undefined;

  // Check if at least one item matches the selected filter
  const hasItems = menuData.categories.some((category) =>
    category.items.some((item) => {
      if (filter === "veg") return item.tags.includes("V");

      if (filter === "gf") return item.tags.includes("GF");

      return true;
    })
  );

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip Link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to menu
      </a>

      {/* Hero */}
      <Hero
        restaurant={menuData.restaurant}
        status={status}
        nowLabel={scenario.now.label}
      />

      {/* Closed Banner */}
      {!status.isOpen && (
        <div className="pb-4">
          <ClosedBanner status={status} />
        </div>
      )}

      {/* Today's Special */}
      <TodaySpecial
        data={menuData}
        soldOut={scenario.specialSoldOut}
      />

      {/* Dietary Filter */}
      <DietaryFilter
        value={filter}
        onChange={setFilter}
      />

      {/* Category Navigation */}
      <CategoryNav categories={menuData.categories} />

      {/* Main Content */}
      <main id="main" className="flex-1">
        {hasItems ? (
          menuData.categories.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
              soldOutItemId={soldOutItemId}
              filter={filter}
            />
          ))
        ) : (
          <div className="mx-auto max-w-page px-6 py-24 text-center sm:px-10">
            <h2 className="font-serif text-4xl text-brown">
              No items found
            </h2>

            <p className="mt-4 text-muted">
              No menu items match the selected dietary filter.
            </p>
          </div>
        )}

        <div className="border-t border-brown/[0.05]">
          <HoursBlock
            hours={menuData.restaurant.hours}
            now={scenario.now}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer restaurant={menuData.restaurant} />

      {/* Demo Switcher */}
      <DemoStateSwitcher current={demoState} />
    </div>
  );
}