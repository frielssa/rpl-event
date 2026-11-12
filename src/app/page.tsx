import { EventTicket } from "@/components/event-ticket";
import { FeaturedTicket } from "@/components/featured-ticket";
import { TicketIcon } from "@/components/icons";
import { events } from "@/data/events";
import { getRemainingQuota, getUpcomingEvents } from "@/lib/events";

const registrationSteps = [
  {
    title: "Pilih acara",
    description:
      "Cek tanggal, lokasi, dan sisa kuota. Acara yang penuh ditandai jelas.",
  },
  {
    title: "Isi data diri",
    description:
      "Nama, email, dan nomor HP. Sistem menolak pendaftaran ganda dan kuota yang sudah habis.",
  },
  {
    title: "Simpan kode tiket",
    description:
      "Kode tiket unik langsung terbit sebagai bukti pendaftaran.",
  },
];

export default function Home() {
  const upcomingEvents = getUpcomingEvents(events);
  const [featuredEvent, ...otherEvents] = upcomingEvents;
  const availableTickets = upcomingEvents.reduce(
    (total, event) => total + getRemainingQuota(event),
    0,
  );

  return (
    <main id="konten" className="flex-1">
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden border-b border-dashed border-line bg-butter-soft"
      >
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 xl:grid-cols-12 xl:items-center xl:gap-10 xl:py-24">
          <div className="xl:col-span-7">
            <h1
              id="hero-title"
              className="text-pretty font-display text-[clamp(2.65rem,6.4vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-ink [font-stretch:95%]"
            >
              Dari seminar sampai festival kampus.{" "}
              <span className="block">Tiketnya ada di sini.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Lihat jadwal acara terdekat, cek sisa kuota, dan simpan kode
              tiketmu. Semua tanpa rekap manual lewat spreadsheet.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#acara"
                className="inline-flex h-12 items-center justify-center rounded-full bg-cobalt px-6 text-sm font-semibold text-on-tone-light transition-colors hover:bg-butter hover:text-on-tone-dark"
              >
                Lihat acara
              </a>
              <a
                href="#panduan"
                className="inline-flex items-center text-sm font-semibold text-ink underline decoration-link decoration-2 underline-offset-4 transition-colors hover:text-link"
              >
                Cara mendaftar
              </a>
            </div>
          </div>

          <div className="xl:col-span-5">
            {featuredEvent ? (
              <FeaturedTicket event={featuredEvent} />
            ) : (
              <div className="mx-auto w-full max-w-md rounded-2xl border-2 border-dashed border-line bg-surface p-8 text-center">
                <TicketIcon className="mx-auto h-10 w-10 text-muted" />
                <p className="mt-4 font-display text-xl font-bold text-ink">
                  Belum ada tiket berikutnya
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Acara baru akan muncul di sini. Cek lagi nanti, ya.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        aria-label="Ringkasan acara"
        className="border-b border-dashed border-line bg-paper"
      >
        <dl className="mx-auto grid w-full max-w-6xl grid-cols-3 divide-x divide-dashed divide-line px-4 sm:px-6">
          <div className="px-3 py-7 first:pl-0 sm:px-6 sm:py-9">
            <dt className="text-[0.68rem] font-semibold leading-snug text-muted sm:text-xs">
              Acara akan datang
            </dt>
            <dd className="mt-1 font-display text-lg font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
              {upcomingEvents.length}
            </dd>
          </div>
          <div className="px-3 py-7 sm:px-6 sm:py-9">
            <dt className="text-[0.68rem] font-semibold leading-snug text-muted sm:text-xs">
              Tiket tersisa
            </dt>
            <dd className="mt-1 font-display text-lg font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
              {availableTickets}
            </dd>
          </div>
          <div className="px-3 py-7 last:pr-0 sm:px-6 sm:py-9">
            <dt className="text-[0.68rem] font-semibold leading-snug text-muted sm:text-xs">
              Kode tiket
            </dt>
            <dd className="mt-1 font-display text-lg font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Otomatis
            </dd>
          </div>
        </dl>
      </section>

      <section
        id="acara"
        aria-labelledby="acara-heading"
        className="scroll-mt-24 bg-paper py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="acara-heading"
                className="text-balance font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl"
              >
                Acara lainnya
              </h2>
              <p className="mt-2 max-w-xl text-pretty text-sm leading-6 text-muted sm:text-base">
                {otherEvents.length > 0
                  ? `Masih ada ${otherEvents.length} acara berikutnya setelah tiket terdekat. Cek tanggal dan sisa kuotanya.`
                  : "Belum ada acara lain yang akan datang. Cek lagi nanti, ya."}
              </p>
            </div>
            {otherEvents.length > 0 ? (
              <p className="shrink-0 text-xs font-semibold text-muted">
                Diurutkan dari yang terdekat
              </p>
            ) : null}
          </div>

          {otherEvents.length > 0 ? (
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {otherEvents.map((event, index) => (
                <li key={event.id} className="h-full">
                  <EventTicket event={event} toneIndex={index} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-line bg-surface p-10 text-center">
              <TicketIcon className="mx-auto h-9 w-9 text-muted" />
              <p className="mt-4 font-display text-xl font-bold text-ink">
                Belum ada acara lain
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Cek lagi nanti untuk acara berikutnya.
              </p>
            </div>
          )}
        </div>
      </section>

      <section
        id="panduan"
        aria-labelledby="panduan-heading"
        className="scroll-mt-24 border-y border-dashed border-line bg-butter-soft py-16 sm:py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2
              id="panduan-heading"
              className="text-balance font-display text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl"
            >
              Cara mendaftar
            </h2>
            <p className="mt-2 text-pretty text-sm leading-6 text-muted sm:text-base">
              Tiga langkah, satu tiket. Tidak perlu rekap manual.
            </p>
          </div>

          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {registrationSteps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-surface font-display text-lg font-extrabold text-ink">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                  {step.description}
                </p>
                {index < registrationSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-14 top-[1.375rem] hidden w-[calc(100%-2rem)] border-t border-dashed border-ink/30 md:block"
                  />
                ) : null}
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm font-medium text-ink">
            Siap?{" "}
            <a
              href="#acara"
              className="font-semibold text-link underline decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
            >
              Lihat acara yang masih buka
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
