import type { OpenStatus } from "@/lib/hours";

export function ClosedBanner({ status }: { status: OpenStatus }) {
  if (status.isOpen) return null;

  return (
    <div
      role="status"
      className="mx-auto max-w-page px-6 sm:px-10"
    >
      <div className="flex flex-col items-start gap-2 rounded-small border border-terracotta/20 bg-beige/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-[15px] leading-relaxed text-brown">
          <span className="font-semibold">We&rsquo;re closed today</span> — resting up so tomorrow&rsquo;s
          brunch is worth the wait.
        </p>
        {status.nextOpenLabel && (
          <p className="font-accent text-sm font-medium text-amber">
            Next opening: {status.nextOpenLabel}
          </p>
        )}
      </div>
    </div>
  );
}
