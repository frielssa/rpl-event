# Aturan Proyek — RPL Event

Dokumen ini berisi **aturan dan pedoman** yang berlaku di seluruh repositori **RPL Event**. Aturan ini melengkapi `docs/kesepakatan-tim.md` dan wajib dipatuhi oleh setiap kontributor.

## 1. Tujuan & Ruang Lingkup

- Menjaga konsistensi kode, dokumentasi, dan alur kerja di repositori.
- Memastikan setiap perubahan dapat ditinjau, diuji, dan dipertanggungjawabkan.
- Menjadi acuan bersama agar proyek RPL Event terkelola dengan rapi.

Aturan berlaku untuk seluruh file di repositori, baik kode maupun dokumentasi.

## 2. Prinsip Pengembangan

1. **Sederhana dulu** — utamakan solusi paling sederhana yang memenuhi kebutuhan.
2. **Dokumentasi mengikuti kode** — perubahan penting wajib memperbarui dokumentasi terkait.
3. **Transparan** — bantu AI yang dipakai wajib dicatat (lihat bagian 11).
4. **Kolaboratif** — hormati proses *review* dan kesepakatan tim.
5. **Keamanan utama** — tidak ada data sensitif di repositori maupun di *prompt* AI.

## 3. Struktur Repositori

```
rpl-event/
├── README.md                  # gambaran proyek
├── aturan proyek.md           # aturan proyek (dokumen ini)
├── PRD.md                     # product requirements document
├── package.json               # dependensi & skrip
├── bun.lock                   # lockfile Bun
├── next.config.ts             # konfigurasi Next.js
├── tsconfig.json              # konfigurasi TypeScript
├── eslint.config.mjs          # konfigurasi ESLint
├── .github/                   # template & konfigurasi GitHub
│   └── pull_request_template.md
├── docs/                      # dokumentasi proyek
│   ├── elisitasi/             # catatan & pedoman wawancara, user story
│   ├── uml/                   # diagram & skenario
│   ├── data-model.md          # model data & ERD
│   ├── kesepakatan-tim.md
│   ├── product-backlog.md
│   └── srs.md
├── public/                    # aset statis
└── src/                       # kode aplikasi
    ├── app/                   # halaman & routing (App Router)
    ├── components/            # komponen UI
    ├── lib/                   # helper & utilitas
    └── data/                  # mock data & model
```

- File tingkat proyek (`README.md`, `aturan proyek.md`, `PRD.md`) berada di **root**.
- Dokumentasi diletakkan di `docs/` sesuai kategorinya.
- Kode aplikasi diletakkan di `src/`.
- *Package manager* & *runtime*: **Bun** (lockfile `bun.lock`; jangan campur dengan `package-lock.json`).

## 4. Konvensi Penamaan File

- Dokumen Markdown: gunakan huruf kecil dan tanda hubung, mis. `activity-pendaftaran-acara.md`.
- File khusus tingkat proyek boleh menggunakan kapital, mis. `README.md`, `PRD.md`.
- Nama file harus deskriptif dan mencerminkan isinya.
- Hindari spasi pada nama file kode; spasi hanya ditoleransi pada dokumen proyek tertentu.

## 5. Konvensi Commit & Branch

### 5.1 Branch

| Branch | Fungsi |
|--------|--------|
| `main` | Kode stabil; perubahan masuk via *merge*/PR. |
| `feature/<nama>` | Fitur baru. |
| `docs/<nama>` | Dokumentasi. |
| `fix/<nama>` | Perbaikan bug. |
| `chore/<nama>` | Konfigurasi/tugas rutin. |

### 5.2 Commit

Format: `<tipe>: <deskripsi singkat>`

- `feat` — fitur baru
- `fix` — perbaikan bug
- `docs` — dokumentasi
- `refactor` — restrukturisasi tanpa mengubah perilaku
- `style` — format kode
- `test` — pengujian
- `chore` — konfigurasi/tugas rutin

Contoh: `docs: tambah pedoman wawancara`

## 6. Standar Kode & Dokumentasi

- Penamaan variabel/fungsi dalam **bahasa Inggris**; komentar & dokumentasi dalam **bahasa Indonesia**.
- Ikuti *lint*/*formatter* proyek (ESLint/Prettier) saat kode tersedia.
- Setiap dokumen diawali judul, tujuan, dan (jika perlu) riwayat versi.
- Gunakan *heading* dan *list* yang konsisten; hindari duplikasi informasi.

## 7. Alur Kerja & Review

1. Ambil `main` terbaru (`git pull`).
2. Buat branch sesuai jenis pekerjaan.
3. Kerjakan perubahan & *commit* dengan pesan yang jelas.
4. *Push* branch dan buka **Pull Request** menggunakan template.
5. Minimal **1 anggota** meninjau sebelum *merge*.
6. *Merge* ke `main` setelah disetujui.

## 8. Manajemen Tugas

- Pekerjaan dicatat di `docs/product-backlog.md` atau *issue* GitHub.
- Status: **To Do → In Progress → Review → Done**.
- Prioritas mengikuti MoSCoW pada backlog.

## 9. Kualitas & Pengujian

- Setiap fitur harus memenuhi *acceptance criteria* terkait.
- Lakukan uji lokal sebelum membuka PR.
- Build wajib lolos (`bun run build`) dan lint bersih (`bun run lint`).
- Perubahan UI harus responsif (desktop & ponsel).

## 10. Keamanan & Data

- **Dilarang** meng-*commit* token, *password*, API key, atau data pribadi.
- Data peserta diperlakukan sebagai data sensitif; jangan ditampilkan ke publik.
- Gunakan file `.env` (tidak di-*commit*) untuk konfigurasi rahasia.

## 11. Penggunaan AI (*Vibe Coding*)

- AI **boleh** dipakai untuk membantu menulis kode, dokumentasi, dan *debugging*.
- Hasil AI **wajib dipahami dan ditinjau** manusia sebelum di-*commit*.
- Bagian yang dibantu AI **wajib dicatat** pada template PR.
- **Dilarang** menempelkan data sensitif ke *prompt* AI.
- Tanggung jawab akhir ada pada kontributor yang meng-*commit*.

## 12. Larangan

- Meng-*commit* langsung ke `main` tanpa *review* (kecuali darurat yang disepakati).
- Menghapus/menimpa pekerjaan anggota lain tanpa koordinasi.
- Menggunakan materi berhak cipta tanpa izin.
- Meng-*commit* file besar yang tidak relevan (mis. *build artifact*).

## 13. Kepatuhan

Pelanggaran aturan akan dibahas bersama tim. Aturan dapat diperbarui melalui *pull request* dan disetujui tim.

## 14. Riwayat Versi

| Versi | Tanggal | Perubahan | Penulis |
|-------|---------|-----------|---------|
| 1.0 | 11-11-2026 | Versi awal aturan proyek | M Syafril Hayaddi |
