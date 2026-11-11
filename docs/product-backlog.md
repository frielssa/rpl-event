# Product Backlog — RPL Event

## 1. Pengantar

Dokumen ini memuat **Product Backlog** untuk aplikasi **RPL Event**, yaitu daftar terprioritas dari seluruh pekerjaan yang perlu diselesaikan. Backlog disusun dari *Epic* → *User Story* → *Task*, dan menjadi acuan perencanaan *sprint*.

- **Sumber kebutuhan:** `docs/srs.md` (FR/NFR), `docs/elisitasi/user-story.md` (US-01…US-13).
- **Metode prioritas:** MoSCoW (*Must / Should / Could / Won't*).
- **Estimasi:** *story points* (Fibonacci: 1, 2, 3, 5, 8).
- **Status:** `To Do` / `In Progress` / `Review` / `Done`.

---

## 2. Epic Overview

| Epic ID | Nama Epic | Deskripsi Singkat | Prioritas |
|---------|-----------|-------------------|-----------|
| **EPIC-1** | Fondasi & Dokumentasi | Inisialisasi repo, dokumentasi, *scaffold* proyek. | Must |
| **EPIC-2** | Katalog Acara | Menampilkan daftar & detail acara untuk peserta. | Must |
| **EPIC-3** | Pendaftaran & Tiket | Alur daftar peserta, validasi kuota, kode tiket, pembatalan. | Must |
| **EPIC-4** | Manajemen Admin & Rekap | CRUD acara, kelola kuota, daftar peserta, ekspor CSV. | Must |
| **EPIC-5** | Peningkatan Lanjutan | Autentikasi, pembayaran, QR/check-in. | Won't (v1.0) |

---

## 3. Product Backlog Items

| ID | Epic | Item / User Story | Deskripsi | FR | Prioritas | Estimasi | Status | Sprint |
|----|------|-------------------|-----------|----|-----------|----------|--------|--------|
| **PB-01** | EPIC-1 | Inisialisasi repo & dokumentasi | README, docs elisitasi, kesepakatan tim, SRS, backlog. | — | Must | 3 | Done | Sprint 0 |
| **PB-02** | EPIC-1 | *Scaffold* Next.js + TypeScript + Tailwind via Bun | Setup proyek via Bun, struktur folder, konfigurasi lint. | — | Must | 3 | Done | Sprint 1 |
| **PB-03** | EPIC-2 | Lihat daftar acara *(US-01)* | Halaman daftar acara *upcoming* + sisa kuota. | FR-02 | Must | 3 | To Do | Sprint 1 |
| **PB-04** | EPIC-2 | Lihat detail acara *(US-02)* | Halaman detail acara + tombol daftar. | FR-03 | Must | 2 | To Do | Sprint 1 |
| **PB-05** | EPIC-3 | Formulir pendaftaran *(US-03)* | Form nama, email, no HP + submit. | FR-04 | Must | 3 | To Do | Sprint 1 |
| **PB-06** | EPIC-3 | Validasi kuota & cegah daftar ganda | Tolak jika kuota penuh / email dobel. | FR-05, FR-06 | Must | 3 | To Do | Sprint 1 |
| **PB-07** | EPIC-3 | Generate kode tiket *(US-04)* | Kode unik per pendaftaran + halaman konfirmasi. | FR-07 | Must | 3 | To Do | Sprint 1 |
| **PB-08** | EPIC-3 | Pembatalan pendaftaran *(US-05)* | Batalkan + kuota kembali. | FR-08 | Should | 3 | To Do | Sprint 2 |
| **PB-09** | EPIC-3 | Lihat tiket saya *(US-06)* | Daftar tiket milik peserta. | FR-09 | Could | 2 | To Do | Sprint 3 |
| **PB-10** | EPIC-4 | CRUD acara admin *(US-07, US-08)* | Buat/ubah/hapus acara + validasi. | FR-01 | Must | 5 | To Do | Sprint 2 |
| **PB-11** | EPIC-4 | Kelola kuota *(US-09)* | Ubah kuota, tidak < peserta aktif. | FR-10 | Must | 3 | To Do | Sprint 2 |
| **PB-12** | EPIC-4 | Daftar peserta *(US-10)* | List peserta per acara + filter status. | FR-11 | Must | 3 | To Do | Sprint 2 |
| **PB-13** | EPIC-4 | Ekspor peserta CSV *(US-11)* | Unduh CSV sesuai filter. | FR-12 | Should | 3 | To Do | Sprint 2 |
| **PB-14** | EPIC-4 | Ringkasan acara *(US-12)* | Statistik keterisian acara. | FR-13 | Could | 2 | To Do | Sprint 3 |
| **PB-15** | EPIC-5 | Autentikasi & *role-based access* | Login peserta/admin. | NFR-04 | Won't | 5 | To Do | Backlog |
| **PB-16** | EPIC-5 | Integrasi *payment gateway* | Pembayaran tiket daring. | — | Won't | 8 | To Do | Backlog |
| **PB-17** | EPIC-5 | QR code & *check-in* *(US-13)* | Tiket QR + pemindaian panitia. | — | Won't | 8 | To Do | Backlog |

> Catatan: `Won't` berarti **di luar cakupan versi 1.0** dan disimpan untuk pengembangan lanjutan.

---

## 4. Rencana Sprint (Milestone)

### Sprint 0 — Fondasi Dokumentasi ✅
- PB-01 Inisialisasi repo & dokumentasi.
- **Outcome:** README, elisitasi, kesepakatan tim, SRS, product backlog tersedia.

### Sprint 1 — Katalog & Pendaftaran
- PB-02 *Scaffold* proyek (selesai via Bun)
- PB-03 daftar acara · PB-04 detail acara
- PB-05 formulir daftar · PB-06 validasi · PB-07 kode tiket
- **Outcome:** peserta dapat melihat acara dan mendaftar hingga memperoleh kode tiket.

### Sprint 2 — Manajemen Admin & Rekap
- PB-10 CRUD acara · PB-11 kelola kuota · PB-12 daftar peserta
- PB-08 pembatalan · PB-13 ekspor CSV
- **Outcome:** admin dapat mengelola acara dan merekap peserta.

### Sprint 3 — Penyempurnaan
- PB-09 lihat tiket saya · PB-14 ringkasan acara
- Perbaikan *bug*, peningkatan UX/aksesibilitas.
- **Outcome:** fitur *nice-to-have* dan stabilisasi.

### Backlog Lanjutan (v2.0)
- PB-15 autentikasi · PB-16 pembayaran · PB-17 QR/check-in.

---

## 5. Definition of Ready (DoR)

Sebuah backlog item siap dikerjakan apabila:

- Deskripsi dan *acceptance criteria* jelas (lihat `user-story.md`).
- Prioritas dan estimasi sudah ditetapkan.
- Ketergantungan (*dependency*) teridentifikasi.
- Desain/kebutuhan data (jika perlu) sudah cukup.

## 6. Definition of Done (DoD)

Backlog item dianggap selesai apabila memenuhi DoD proyek (lihat `kesepakatan-tim.md` §9): AC terpenuhi, lolos *review*, build tanpa *error*, responsif, dan dokumentasi diperbarui.

---

## 7. Cara Menjaga Backlog

- Backlog ditinjau ulang pada rapat mingguan (*backlog grooming*).
- Item baru ditambahkan di bawah sesuai prioritas; item `Won't` dipisahkan.
- Status diperbarui setiap kali pekerjaan dimulai/selesai.
- Perubahan prioritas dicatat di riwayat versi.

---

## 8. Riwayat Versi

| Versi | Tanggal | Perubahan | Penulis |
|-------|---------|-----------|---------|
| 1.0 | 11-11-2026 | Versi awal product backlog | Tim RPL Event |
