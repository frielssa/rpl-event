# RPL Event — Aplikasi Manajemen & Pendaftaran Acara

Aplikasi berbasis web untuk mengelola acara (*event*) dan pendaftaran peserta. Peserta dapat melihat daftar acara, mendaftar, dan mendapatkan kode tiket; admin/*event organizer* (EO) dapat membuat acara, mengatur kuota, dan memantau peserta.

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

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data:** mock data / JSON (tahap awal)
- **Package Manager:** npm

## Prasyarat

- Node.js 18+
- npm 9+

## Instalasi

```bash
npm install
```

## Menjalankan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Folder

```
rpl-event/
├── src/
│   ├── app/          # halaman & routing (App Router)
│   ├── components/   # komponen UI
│   ├── lib/          # helper & utilitas
│   └── data/         # mock data & model
├── docs/             # dokumentasi proyek
│   └── elisitasi/    # catatan & pedoman wawancara, user story
└── README.md
```

## Model Data

| Entity | Atribut Utama |
|--------|---------------|
| `Event` | id, nama, deskripsi, lokasi, tanggal, kuota, tiketTerjual, status |
| `User` | id, nama, email, peran (peserta/admin) |
| `Registration` | id, eventId, userId, kodeTiket, status, tanggalDaftar |

## Roadmap

- [x] Inisialisasi repositori & dokumentasi
- [ ] *Scaffold* Next.js + Tailwind
- [ ] Halaman daftar & detail acara
- [ ] Alur pendaftaran + *generate* tiket
- [ ] *Dashboard* admin (CRUD acara)
- [ ] Ekspor data peserta
- [ ] Autentikasi & *role-based access*

## Lisensi

MIT
