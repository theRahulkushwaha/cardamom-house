import type { DemoState } from "@/types/menu";
import type { SimulatedNow } from "@/lib/hours";

export interface DemoScenario {
  now: SimulatedNow;
  specialSoldOut: boolean;
}

export function parseDemoState(value: string | null): DemoState {
  if (value === "closed" || value === "special-sold-out") return value;
  return "open";
}

export function getScenario(state: DemoState): DemoScenario {
  switch (state) {
    case "closed":
      // A Monday — the one day the café is fully closed.
      return {
        now: { day: "monday", minutes: 11 * 60, label: "Monday, 11:00" },
        specialSoldOut: false,
      };
    case "special-sold-out":
      return {
        now: { day: "tuesday", minutes: 11 * 60 + 30, label: "Tuesday, 11:30" },
        specialSoldOut: true,
      };
    case "open":
    default:
      return {
        now: { day: "tuesday", minutes: 11 * 60 + 30, label: "Tuesday, 11:30" },
        specialSoldOut: false,
      };
  }
}
