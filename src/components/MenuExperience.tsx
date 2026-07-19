"use client";

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

export function MenuExperience() {
  const searchParams = useSearchParams();
  const demoState = parseDemoState(searchParams.get("state"));
  const scenario = getScenario(demoState);

  const status = getOpenStatus(menuData.restaurant.hours, scenario.now);
  const soldOutItemId = scenario.specialSoldOut
    ? menuData.todaySpecial.itemId
    : undefined;

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to menu
      </a>

      <Hero restaurant={menuData.restaurant} status={status} nowLabel={scenario.now.label} />

      {!status.isOpen && (
        <div className="pb-4">
          <ClosedBanner status={status} />
        </div>
      )}

      <TodaySpecial data={menuData} soldOut={scenario.specialSoldOut} />

      <CategoryNav categories={menuData.categories} />

      <main id="main" className="flex-1">
        {menuData.categories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            soldOutItemId={soldOutItemId}
          />
        ))}

        <div className="border-t border-brown/[0.05]">
          <HoursBlock hours={menuData.restaurant.hours} now={scenario.now} />
        </div>
      </main>

      <Footer restaurant={menuData.restaurant} />

      <DemoStateSwitcher current={demoState} />
    </div>
  );
}
