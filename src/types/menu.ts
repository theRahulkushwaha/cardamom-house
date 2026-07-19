export type DietaryTag = "V" | "GF" | "spicy";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  tags: DietaryTag[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type Hours = Record<DayKey, string>;

export interface Restaurant {
  name: string;
  tagline: string;
  address: string;
  hours: Hours;
  brandColor: string;
  phone: string;
  instagram: string;
}

export interface TodaySpecial {
  itemId: string;
  blurb: string;
}

export interface MenuData {
  restaurant: Restaurant;
  todaySpecial: TodaySpecial;
  categories: MenuCategory[];
}

/**
 * The three demo states the trial task asks for, driven by ?state= in the URL.
 * - open: Tuesday 11:30, café open, special available.
 * - closed: Monday, café closed.
 * - special-sold-out: café open, but today's special item is sold out.
 */
export type DemoState = "open" | "closed" | "special-sold-out";
