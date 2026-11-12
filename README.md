# RPL Event — Aplikasi Manajemen & Pendaftaran Acara

Aplikasi berbasis web untuk mengelola acara (*event*) dan pendaftaran peserta. Peserta dapat melihat daftar acara, mendaftar, dan mendapatkan kode tiket; admin/*event organizer* (EO) dapat membuat acara, mengatur kuota, dan memantau peserta.

## Informasi Pengembang

| Nama | NIM |
|------|-----|
| **M Syafril Hayaddi** | **24554010003** |

## Tujuan Pembuatan

RPL Event dibuat sebagai **tugas mata kuliah Rekayasa Perangkat Lunak (RPL)** berbasis *vibe coding*. Tujuannya:

1. Menyatukan proses pendaftaran acara yang masih manual (formulir, chat, spreadsheet) ke dalam satu sistem web.
2. Mengurangi duplikasi data dan kesalahan hitung kuota.
3. Menyediakan kode tiket sebagai bukti pendaftaran yang seragam.
4. Mempermudah admin merekap dan mengekspor data peserta.

## Fitur

- Melihat daftar acara yang akan datang (*upcoming events*)
- Melihat detail acara beserta kuota dan sisa tiket
- Pendaftaran peserta secara *online*
- *Generate* kode tiket otomatis per peserta
- Pembatalan pendaftaran oleh peserta
- Admin: CRUD acara (*create, read, update, delete*)
- Admin: melihat daftar peserta dan mengelola kuota
- Admin: ekspor data peserta (CSV)

## Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| **Next.js (App Router)** | *Framework* React untuk routing, rendering, dan struktur aplikasi web. |
| **TypeScript** | Bahasa ber-*type* agar kode lebih aman dan mudah dipelihara. |
| **Tailwind CSS** | *Utility-first CSS* untuk tampilan responsif dan konsisten. |
| **Bun 1.4+** | *Runtime* + *package manager* (install, run, build). Node.js 18+ didukung sebagai *fallback*. |
| **Mock data (JSON)** | Sumber data tahap awal sebelum integrasi basis data. |
| **Git & GitHub** | *Version control*, kolaborasi, dan alur *pull request*. |

## Tutorial Instalasi (Singkat)

**Prasyarat:** Bun 1.4+, Git. (Node.js 18+ opsional sebagai *fallback*.)

> Belum punya Bun? Windows: `winget install Oven-sh.Bun` atau `powershell -c "irm bun.sh/install.ps1 | iex"`.

```bash
# 1. Clone repositori
git clone https://github.com/frielssa/rpl-event.git
cd rpl-event

# 2. Install dependencies
bun install

# 3. Jalankan development server
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

**Perintah lain:**

| Perintah | Fungsi |
|----------|--------|
| `bun run build` | Build untuk produksi |
| `bun run start` | Menjalankan hasil build |
| `bun run lint` | Memeriksa kualitas kode |

> *Fallback* npm: `npm install` lalu `npm run dev|build|lint`. Jangan mencampur *lockfile* (`bun.lock` vs `package-lock.json`).

## Struktur Proyek & Dokumen

```
rpl-event/
├── README.md                    # gambaran proyek (dokumen ini)
├── aturan proyek.md             # aturan & pedoman pengembangan
├── PRD.md                       # product requirements document
├── package.json                 # dependensi & skrip
├── bun.lock                     # lockfile Bun
├── next.config.ts               # konfigurasi Next.js
├── tsconfig.json                # konfigurasi TypeScript
├── eslint.config.mjs            # konfigurasi ESLint
├── .github/
│   └── pull_request_template.md # template & panduan PR
├── src/
│   ├── app/                     # halaman & routing (App Router)
│   ├── components/              # komponen UI (header, footer, kartu acara)
│   ├── lib/                     # helper & utilitas (logika acara)
│   └── data/                    # mock data & model (types, events)
├── public/                      # aset statis
└── docs/
    ├── elisitasi/
    │   ├── catatan-wawancara.md
    │   ├── pedoman-wawancara.md
    │   └── user-story.md
    ├── uml/
    │   ├── use-case.md
    │   ├── skenario-use-case.md
    │   ├── activity-pendaftaran-acara.md
    │   ├── activity-pembatalan-pendaftaran.md
    │   ├── activity-kelola-acara.md
    │   ├── activity-ekspor-peserta.md
    │   ├── verifikasi-diagram.md
    │   └── rendered/            # hasil render SVG
    ├── kesepakatan-tim.md
    ├── product-backlog.md
    └── srs.md
```

## Model Data

| Entity | Atribut Utama |
|--------|---------------|
| `Event` | id, nama, deskripsi, lokasi, tanggal, kuota, tiketTerjual, status |
| `User` | id, nama, email, peran (peserta/admin) |
| `Registration` | id, eventId, userId, kodeTiket, status, tanggalDaftar |

## Roadmap

- [x] Inisialisasi repositori & dokumentasi
- [x] *Scaffold* Next.js + Tailwind (via Bun)
- [x] Halaman katalog acara (`upcoming`)
- [ ] Halaman detail acara
- [ ] Alur pendaftaran + *generate* tiket
- [ ] *Dashboard* admin (CRUD acara)
- [ ] Ekspor data peserta
- [ ] Autentikasi & *role-based access*

## Lisensi

MIT
