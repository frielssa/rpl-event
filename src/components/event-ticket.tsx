import type { Event } from "@/data/types";
import {
  formatEventDate,
  getEventCode,
  getEventDateParts,
  getRemainingQuota,
  isEventFull,
} from "@/lib/events";
import { CalendarIcon, MapPinIcon } from "./icons";
import { QuotaMeter } from "./quota-meter";

interface EventTicketProps {
  event: Event;
  toneIndex: number;
}

const ticketTones = [
  { stub: "bg-butter text-on-tone-dark" },
  { stub: "bg-coral text-on-tone-dark" },
  { stub: "bg-cobalt text-on-tone-light" },
] as const;

export function EventTicket({ event, toneIndex }: EventTicketProps) {
  const { weekday, day, month } = getEventDateParts(event.date);
  const remainingQuota = getRemainingQuota(event);
  const full = isEventFull(event);
  const tone = ticketTones[toneIndex % ticketTones.length];

  return (
    <article className="relative flex h-full flex-col rounded-2xl border-2 border-ink bg-surface sm:flex-row">
      <div
        className={`flex h-16 items-center gap-3 rounded-t-2xl px-5 py-3 sm:h-auto sm:w-24 sm:flex-col sm:justify-center sm:gap-1 sm:rounded-l-2xl sm:rounded-tr-none sm:px-3 sm:py-6 ${tone.stub}`}
      >
        <time
          dateTime={event.date}
          aria-hidden="true"
          className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-0"
        >
          <span className="text-[0.65rem] font-semibold">{weekday}</span>
          <span className="font-display text-3xl font-extrabold leading-none sm:text-4xl">
            {day}
          </span>
          <span className="text-[0.65rem] font-semibold">{month}</span>
        </time>
      </div>

      <div className="flex min-w-0 flex-1 flex-col border-t border-dashed border-ink/30 p-5 sm:border-l sm:border-t-0">
        <div className="flex items-center justify-between gap-3">
          <span
            aria-hidden="true"
            className="text-[0.65rem] font-semibold tracking-[0.08em] text-muted"
          >
            {getEventCode(event.date)}
          </span>
          {full ? (
            <span className="-rotate-6 rounded border-2 border-danger px-2 py-0.5 font-display text-[0.65rem] font-extrabold tracking-[0.12em] text-danger">
              PENUH
            </span>
          ) : (
            <span className="text-[0.65rem] font-semibold text-muted">
              Tiket digital
            </span>
          )}
        </div>

        <h3 className="mt-3 text-balance font-display text-xl font-extrabold leading-tight tracking-tight text-ink">
          {event.name}
        </h3>

        <dl className="mt-3 space-y-2 text-sm text-muted">
          <div className="flex items-start gap-2">
            <CalendarIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
            <div>
              <dt className="sr-only">Tanggal</dt>
              <dd>
                <time dateTime={event.date}>{formatEventDate(event.date)}</time>
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
            <div>
              <dt className="sr-only">Lokasi</dt>
              <dd>{event.location}</dd>
            </div>
          </div>
        </dl>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
          {event.description}
        </p>

        <div className="mt-auto border-t border-dashed border-line pt-4">
          <div className="flex items-end justify-between gap-3">
            <p
              className={`text-sm font-semibold ${
                full ? "text-danger" : "text-ink"
              }`}
            >
              {full ? "Kuota penuh" : `Sisa ${remainingQuota} tiket`}
            </p>
            <p className="text-[0.68rem] text-muted">
              {event.ticketsSold}/{event.quota} terisi
            </p>
          </div>
          <QuotaMeter event={event} className="mt-2" />
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute -left-2 top-16 z-20 h-4 w-4 -translate-y-1/2 rounded-full bg-paper sm:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute -right-2 top-16 z-20 h-4 w-4 -translate-y-1/2 rounded-full bg-paper sm:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute left-24 -top-2 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-paper sm:block"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-2 left-24 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-paper sm:block"
      />
    </article>
  );
}
