import type { DayKey, Hours } from "@/types/menu";

export const DAY_ORDER: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const DAY_LABEL: Record<DayKey, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

/** A simulated "now" — day of week + minutes since midnight. */
export interface SimulatedNow {
  day: DayKey;
  minutes: number; // minutes since 00:00
  label: string; // human readable, e.g. "Tuesday, 11:30"
}

function parseRange(value: string): { open: number; close: number } | null {
  if (!value || value.toLowerCase() === "closed") return null;
  // e.g. "08:00 – 15:00" (en dash) or "08:00 - 15:00"
  const parts = value.split(/–|-/).map((p) => p.trim());
  if (parts.length !== 2) return null;
  const toMinutes = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + (m || 0);
  };
  return { open: toMinutes(parts[0]), close: toMinutes(parts[1]) };
}

export interface OpenStatus {
  isOpen: boolean;
  closesAtLabel?: string;
  nextOpenLabel?: string; // e.g. "Tuesday at 08:00"
}

export function getOpenStatus(hours: Hours, now: SimulatedNow): OpenStatus {
  const todayRange = parseRange(hours[now.day]);

  if (todayRange && now.minutes >= todayRange.open && now.minutes < todayRange.close) {
    return {
      isOpen: true,
      closesAtLabel: minutesToLabel(todayRange.close),
    };
  }

  // Closed — find the next day (starting today, later today, or upcoming days) that opens.
  const todayIndex = DAY_ORDER.indexOf(now.day);

  // Still today, but before opening?
  if (todayRange && now.minutes < todayRange.open) {
    return {
      isOpen: false,
      nextOpenLabel: `today at ${minutesToLabel(todayRange.open)}`,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const idx = (todayIndex + i) % 7;
    const dayKey = DAY_ORDER[idx];
    const range = parseRange(hours[dayKey]);
    if (range) {
      return {
        isOpen: false,
        nextOpenLabel: `${DAY_LABEL[dayKey]} at ${minutesToLabel(range.open)}`,
      };
    }
  }

  return { isOpen: false };
}

function minutesToLabel(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function isClosedDay(value: string): boolean {
  return !value || value.toLowerCase() === "closed";
}
