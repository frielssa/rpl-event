import type { Event } from "@/data/types";
import { getOccupancyPercentage, isEventFull } from "@/lib/events";

interface QuotaMeterProps {
  event: Event;
  className?: string;
}

/** Meter kuota bergaya kartu punch, dipakai di tiket hero dan grid. */
export function QuotaMeter({ event, className = "" }: QuotaMeterProps) {
  const occupancy = getOccupancyPercentage(event);
  const full = isEventFull(event);
  const filledSegments = Math.ceil(occupancy / 10);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={occupancy}
      aria-label={`Keterisian ${event.name}: ${occupancy} persen`}
      className={`flex gap-1 ${className}`}
    >
      {Array.from({ length: 10 }, (_, index) => (
        <span
          key={index}
          className={`h-1.5 flex-1 rounded-sm ${
            index < filledSegments
              ? full
                ? "bg-danger"
                : "bg-ink"
              : "bg-line"
          }`}
        />
      ))}
    </div>
  );
}
