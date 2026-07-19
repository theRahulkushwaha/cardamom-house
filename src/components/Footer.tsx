import type { Restaurant } from "@/types/menu";

export function Footer({ restaurant }: { restaurant: Restaurant }) {
  return (
    <footer className="mt-8 bg-brown px-6 py-16 text-cream sm:px-10 sm:py-24">
      <div className="mx-auto max-w-page">
        <p className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-amber">
          Cardamom House
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
          Slow brunch. Strong coffee. See you soon.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Visit
            </h3>
            <address className="mt-3 font-body text-[15px] not-italic leading-relaxed text-cream/80">
              {restaurant.address}
            </address>
          </div>

          <div>
            <h3 className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Contact
            </h3>
            <ul className="mt-3 space-y-1.5 font-body text-[15px] text-cream/80">
              <li>
                <a
                  href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-amber"
                >
                  {restaurant.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${restaurant.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber"
                >
                  {restaurant.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Hours
            </h3>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-cream/80">
              Tue–Fri 8:00–15/16:00
              <br />
              Sat–Sun 9:00–17:00
              <br />
              Closed Mondays
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
