import type { Hours } from "@/types/menu";
import { DAY_ORDER, DAY_LABEL, isClosedDay } from "@/lib/hours";
import type { SimulatedNow } from "@/lib/hours";

export function HoursBlock({ hours, now }: { hours: Hours; now: SimulatedNow }) {
  return (
    <section aria-labelledby="hours-heading" className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-page gap-10 sm:grid-cols-2 sm:gap-16">
        <div>
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            Opening hours
          </p>
          <h2
            id="hours-heading"
            className="mt-3 font-serif text-4xl leading-tight text-brown sm:text-5xl"
          >
            Come whenever the morning feels slow.
          </h2>
          <p className="mt-4 max-w-sm font-body text-base leading-relaxed text-muted">
            The kitchen opens with the sunrise and the coffee never stops. No reservations
            needed before 11am.
          </p>
        </div>

        <div className="rounded-card border border-brown/[0.05] bg-card p-3 shadow-[0_8px_30px_rgba(180,83,9,0.03)] sm:p-4">
          <dl>
            {DAY_ORDER.map((day) => {
              const isToday = day === now.day;
              const closed = isClosedDay(hours[day]);
              return (
                <div
                  key={day}
                  className={`flex items-center justify-between rounded-small px-4 py-3.5 sm:px-5 ${
                    isToday ? "bg-amber text-white" : ""
                  }`}
                >
                  <dt
                    className={`font-accent text-sm font-medium ${
                      isToday ? "text-white" : "text-brown"
                    }`}
                  >
                    {DAY_LABEL[day]}
                    {isToday && (
                      <span className="ml-2 rounded-pill bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em]">
                        Today
                      </span>
                    )}
                  </dt>
                  <dd
                    className={`font-body text-sm ${
                      isToday
                        ? "text-white/90"
                        : closed
                        ? "text-muted/70"
                        : "text-muted"
                    }`}
                  >
                    {hours[day]}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
