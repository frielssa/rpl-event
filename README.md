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
| **Node.js + npm** | *Runtime* dan *package manager* untuk *development* & *build*. |
| **Mock data (JSON)** | Sumber data tahap awal sebelum integrasi basis data. |
| **Git & GitHub** | *Version control*, kolaborasi, dan alur *pull request*. |

## Tutorial Instalasi (Singkat)

**Prasyarat:** Node.js 18+, npm 9+, Git.

```bash
# 1. Clone repositori
git clone https://github.com/frielssa/rpl-event.git
cd rpl-event

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

> Catatan: perintah di atas berlaku setelah kode aplikasi di-*scaffold* (lihat `docs/product-backlog.md` PB-02). Saat ini repositori berfokus pada dokumentasi.

**Perintah lain:**

| Perintah | Fungsi |
|----------|--------|
| `npm run build` | Build untuk produksi |
| `npm run lint` | Memeriksa kualitas kode |

## Struktur Dokumen

```
rpl-event/
├── README.md                    # gambaran proyek (dokumen ini)
├── aturan proyek.md             # aturan & pedoman pengembangan
├── PRD.md                       # product requirements document
├── .github/
│   └── pull_request_template.md # template & panduan PR
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
- [ ] *Scaffold* Next.js + Tailwind
- [ ] Halaman daftar & detail acara
- [ ] Alur pendaftaran + *generate* tiket
- [ ] *Dashboard* admin (CRUD acara)
- [ ] Ekspor data peserta
- [ ] Autentikasi & *role-based access*

## Lisensi

MIT
