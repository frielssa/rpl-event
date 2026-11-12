export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-dashed border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight text-ink">
              RPL Event
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
              Katalog acara kampus dengan tiket digital. Dibuat untuk tugas
              Rekayasa Perangkat Lunak.
            </p>
          </div>

          <nav
            aria-label="Navigasi footer"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-muted"
          >
            <a
              href="#acara"
              className="transition-colors hover:text-ink hover:underline hover:underline-offset-4"
            >
              Acara
            </a>
            <a
              href="#panduan"
              className="transition-colors hover:text-ink hover:underline hover:underline-offset-4"
            >
              Cara daftar
            </a>
            <a
              href="#konten"
              className="transition-colors hover:text-ink hover:underline hover:underline-offset-4"
            >
              Kembali ke atas
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 RPL Event.</p>
          <p>Next.js, TypeScript, Tailwind CSS, dan Bun.</p>
        </div>
      </div>
    </footer>
  );
}
