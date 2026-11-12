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

interface FeaturedTicketProps {
  event: Event;
}

export function FeaturedTicket({ event }: FeaturedTicketProps) {
  const { weekday, day, month } = getEventDateParts(event.date);
  const remainingQuota = getRemainingQuota(event);
  const full = isEventFull(event);

  return (
    <div className="ticket-enter relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-x-4 top-4 hidden h-full rotate-[3deg] rounded-2xl border-2 border-ink bg-coral sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-2 top-2 hidden h-full -rotate-2 rounded-2xl border-2 border-ink bg-butter sm:block"
      />

      <article className="relative z-10 flex flex-col rounded-2xl border-2 border-ink bg-surface sm:flex-row">
        <div className="flex h-16 items-center justify-between gap-4 rounded-t-2xl bg-cobalt px-5 py-3 text-on-tone-light sm:h-auto sm:w-28 sm:flex-col sm:justify-center sm:gap-2 sm:rounded-l-2xl sm:rounded-tr-none sm:px-3 sm:py-6">
          <time
            dateTime={event.date}
            aria-hidden="true"
            className="flex items-center gap-3 sm:flex-col sm:items-center sm:gap-0"
          >
            <span className="text-[0.65rem] font-semibold">{weekday}</span>
            <span className="font-display text-4xl font-extrabold leading-none sm:text-5xl">
              {day}
            </span>
            <span className="text-[0.65rem] font-semibold">{month}</span>
          </time>
          <span className="text-xs font-semibold">
            {full ? "Penuh" : `Sisa ${remainingQuota}`}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col border-t border-dashed border-ink/30 sm:border-l sm:border-t-0">
          <div className="flex items-center justify-between gap-3 bg-ink px-5 py-2.5 text-paper">
            <span className="text-[0.68rem] font-semibold tracking-[0.08em]">
              Tiket berikutnya
            </span>
            <span
              aria-hidden="true"
              className="text-[0.65rem] font-medium tracking-[0.08em] text-paper/70"
            >
              {getEventCode(event.date)}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h2 className="text-balance font-display text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
              {event.name}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
              {event.description}
            </p>

            <dl className="mt-4 space-y-2 text-xs leading-5 text-muted">
              <div className="flex items-start gap-2">
                <CalendarIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
                <div>
                  <dt className="sr-only">Tanggal</dt>
                  <dd>
                    <time dateTime={event.date}>
                      {formatEventDate(event.date)}
                    </time>
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

            <div className="mt-5">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[0.68rem] font-semibold text-muted">
                    Sisa tiket
                  </p>
                  <p
                    className={`mt-0.5 font-display text-2xl font-extrabold ${
                      full ? "text-danger" : "text-ink"
                    }`}
                  >
                    {full ? "Habis" : remainingQuota}
                  </p>
                </div>
                <p className="text-[0.68rem] text-muted">
                  {event.ticketsSold}/{event.quota} terisi
                </p>
              </div>
              <QuotaMeter event={event} className="mt-2" />
            </div>

            <div className="mt-5 flex items-end justify-between gap-4 border-t border-dashed border-line pt-4">
              <div>
                <div
                  aria-hidden="true"
                  className="ticket-barcode h-7 w-28 text-ink/70"
                />
                <p
                  aria-hidden="true"
                  className="mt-1.5 text-[0.65rem] tracking-[0.08em] text-muted"
                >
                  {getEventCode(event.date)}
                </p>
              </div>
              <p className="max-w-36 text-right text-[0.68rem] leading-4 text-muted">
                Kode tiket terbit setelah mendaftar.
              </p>
            </div>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="absolute -left-2 top-16 z-20 h-4 w-4 -translate-y-1/2 rounded-full bg-butter-soft sm:hidden"
        />
        <span
          aria-hidden="true"
          className="absolute -right-2 top-16 z-20 h-4 w-4 -translate-y-1/2 rounded-full bg-butter-soft sm:hidden"
        />
        <span
          aria-hidden="true"
          className="absolute left-28 -top-2 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-butter-soft sm:block"
        />
        <span
          aria-hidden="true"
          className="absolute -bottom-2 left-28 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-butter-soft sm:block"
        />
      </article>
    </div>
  );
}
