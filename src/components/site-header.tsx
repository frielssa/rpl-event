import Link from "next/link";
import { TicketIcon } from "./icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div aria-hidden="true" className="flex h-1 w-full">
        <span className="flex-1 bg-cobalt" />
        <span className="flex-1 bg-butter" />
        <span className="flex-1 bg-coral" />
      </div>

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 -rotate-3 items-center justify-center rounded-xl bg-cobalt text-on-tone-light">
            <TicketIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-extrabold tracking-tight text-ink">
              RPL Event
            </span>
            <span className="text-[0.65rem] font-medium text-muted">
              Katalog acara kampus
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-1 text-sm font-semibold text-muted sm:flex"
        >
          <a
            href="#acara"
            className="rounded-full px-3 py-2 transition-colors hover:bg-surface hover:text-ink"
          >
            Acara
          </a>
          <a
            href="#panduan"
            className="rounded-full px-3 py-2 transition-colors hover:bg-surface hover:text-ink"
          >
            Cara daftar
          </a>
        </nav>

        <a
          href="#acara"
          className="inline-flex h-10 items-center justify-center rounded-full bg-cobalt px-4 text-sm font-semibold text-on-tone-light transition-colors hover:bg-butter hover:text-on-tone-dark"
        >
          Lihat acara
        </a>
      </div>
    </header>
  );
}
