# Cardamom House — Menu Page

A single-page, mobile-first menu experience for a fictional Lisbon brunch café, built for the
Kwill frontend trial task.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** (strict mode, no `any`)
- **Tailwind CSS v4** (CSS-native `@theme` tokens, no `tailwind.config.js`)
- **lucide-react** available for icons (kept usage minimal — the design leans on
  typography and color rather than iconography)

No backend, no CMS. Menu data is a typed object in `src/data/menu.ts`.

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

> Note: `next/font/google` fetches font files at build time, so the build step needs
> network access to `fonts.googleapis.com` (this is automatic on Vercel).

## The three demo states

The task asks for three states, switchable via a URL query param:

- `?state=open` (default) — simulated as Tuesday, 11:30. Café open, special available.
- `?state=closed` — simulated as Monday. Café closed, with a friendly banner and the
  next opening time.
- `?state=special-sold-out` — simulated as Tuesday, 11:30, but the Saffron French Toast
  is sold out: it shows a dimmed card with a "Sold out" pill in the menu list, and the
  Today's Special callout at the top updates its copy, price styling, and CTA
  accordingly instead of just disappearing.

There's also a small floating **Demo** switcher pinned to the bottom of the page (hidden
in print) so a reviewer can flip between all three states without editing the URL by hand.

The "current time" logic lives in `src/lib/hours.ts` (pure functions, parses the hours
strings and returns open/closed + next-opening info) and `src/lib/demo-state.ts` (maps the
query param to a simulated point in time). I chose to simulate time rather than use the
visitor's real clock/timezone — the task explicitly allows this, and it makes the three
states reliably demoable regardless of when someone reviews the page.

## Structure

```
src/
  app/            # App Router entry: layout, page, global styles
  components/     # Presentational + a couple of small client components
  data/menu.ts    # Hard-coded, typed menu data
  lib/            # Pure helper functions (hours parsing, demo state, price formatting)
  types/menu.ts   # Shared TypeScript types
```

Most components are plain server components. Only three things are client components,
and each needs to be for a concrete reason:

- `MenuExperience` — reads the `?state=` query param via `useSearchParams`.
- `CategoryNav` — needs `IntersectionObserver` for scroll-spy and click handlers for
  smooth-scrolling.
- `DemoStateSwitcher` — just renders links, but lives alongside the other client
  components for consistency.

## Design decisions

- **Typography-led, no photography.** I leaned on the editorial brief (large serif
  headlines, generous whitespace, warm neutral palette) rather than sourcing stock food
  photography, which tends to read as generic. This is called out as a defensible option
  in the brief.
- **Amber (`#B45309`) is used with intent, not decoration**: the "open" status dot, the
  primary CTA, prices, the active category pill, the today's-special glow border, the
  "today" row in the hours table, and hover/focus states. Everything else stays in warm
  neutrals so the amber keeps its weight.
- **One sticky nav, not two.** The design system sketches a floating top nav on desktop
  and a bottom nav on mobile. I built a single horizontally-scrollable sticky pill nav
  that works at both sizes — it's simpler to keep accessible and consistent, and a
  second, separate mobile-only nav felt like more surface area than the task needed.
- **Scroll-spy uses `IntersectionObserver`**, not scroll-position math, so it stays cheap
  and accurate as sections resize.
- **Sold-out degrades in place.** The item stays visible (so people know it existed and
  what it costs) but is dimmed and tagged "Sold out" rather than removed, and the
  special callout swaps its copy/CTA rather than hiding.

## What I'm proud of

The hours/status logic (`src/lib/hours.ts`) is a small, pure, fully-typed function that
parses the raw hours strings and handles "closed all day," "before opening," and "after
closing" as distinct cases, with a real (not padded) "next opening" calculation that
walks forward through the week. It's unit-testable in isolation from any component.

## What I'd revisit with another half-day

- Add `prefers-color-scheme` dark mode (stretch goal, not attempted) — the token setup
  in `globals.css` would make this a fairly mechanical addition.
- A dietary filter (V / GF / all) — the tag data is already modeled for it; I'd add a
  small client component with a filtered view rather than mutating the shared data.
- Real unit tests for `getOpenStatus` (edge cases: midnight rollover, a day with no
  entry at all) — I hand-verified the three required scenarios but didn't wire up a test
  runner given the time box.
- A subtle Motion-driven entrance instead of the current CSS `@keyframes fade-up` — kept
  it CSS-only to avoid an extra dependency for a small effect, but Framer Motion's
  stagger/shared-layout primitives would make the category-nav active-pill transition
  nicer.

## Deployment

Push to GitHub, import into Vercel, no environment variables required. `npm run build`
is the only build step.
