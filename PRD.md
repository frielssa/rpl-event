# Product Requirements Document (PRD) — RPL Event

| Item | Keterangan |
|------|------------|
| Produk | RPL Event — Aplikasi Manajemen & Pendaftaran Acara |
| Versi | 1.0 |
| Tanggal | 11 November 2026 |
| Pengembang | M Syafril Hayaddi (NIM 24554010003) |
| Status | Draft / Perencanaan |

---

## 1. Ringkasan Produk

**RPL Event** adalah aplikasi berbasis web yang membantu *event organizer* (EO) mengelola acara dan pendaftaran peserta dalam satu tempat: menampilkan acara, menerima pendaftaran dengan validasi kuota, menghasilkan kode tiket, serta merekap peserta.

## 2. Latar Belakang & Masalah

Saat ini pendaftaran acara sering dilakukan secara manual (formulir daring, pesan pribadi, lalu direkap ke spreadsheet). Akibatnya:

- Data peserta **tersebar** di banyak kanal.
- Rawan **duplikasi** dan **salah hitung kuota**.
- Rekap peserta **memakan waktu**.
- Tidak ada **bukti pendaftaran** yang seragam (kode tiket).

## 3. Tujuan & Sasaran

**Tujuan produk:**

1. Menyatukan proses pendaftaran acara ke satu sistem web.
2. Mengurangi kesalahan/duplikasi data peserta.
3. Mengontrol kuota secara otomatis.
4. Menyediakan kode tiket sebagai bukti pendaftaran.
5. Mempermudah admin merekap/mengekspor data peserta.

**Sasaran terukur (target v1.0):**

- Peserta dapat mendaftar ≤ 3 langkah.
- Sistem mencegah pendaftaran ganda dan pendaftaran saat kuota penuh.
- Admin dapat mengekspor daftar peserta ke CSV.

## 4. Target Pengguna & Persona

| Persona | Kebutuhan Utama |
|---------|-----------------|
| **Peserta** | Melihat acara, mendaftar cepat, memperoleh kode tiket. |
| **Admin / EO** | Mengelola acara & kuota, memantau dan merekap peserta. |
| **Panitia Lapangan** | Mengunduh daftar peserta untuk *check-in*. |

## 5. Value Proposition

- **Satu tempat** untuk acara dan pendaftaran.
- **Kontrol kuota** otomatis dan anti-duplikat.
- **Tiket digital** yang konsisten.
- **Rekap instan** (ekspor CSV).

## 6. Ruang Lingkup

**Termasuk (v1.0):**
- Manajemen acara (CRUD) oleh admin.
- Daftar & detail acara untuk peserta.
- Pendaftaran + validasi kuota + kode tiket.
- Pembatalan pendaftaran.
- Daftar peserta + ekspor CSV.
- Ringkasan keterisian acara.

**Tidak termasuk (v1.0):**
- Integrasi *payment gateway*.
- QR code / pemindaian tiket.
- Aplikasi *mobile* native.
- Notifikasi email/*push* otomatis.
- Autentikasi lanjutan & *multi-tenant*.

## 7. Fitur & Prioritas (MoSCoW)

| Fitur | Prioritas | User Story | FR |
|-------|-----------|-----------|----|
| Melihat daftar acara | Must | US-01 | FR-02 |
| Melihat detail acara | Must | US-02 | FR-03 |
| Mendaftar acara | Must | US-03 | FR-04 |
| Validasi kuota & anti-duplikat | Must | US-03 | FR-05, FR-06 |
| Kode tiket | Must | US-04 | FR-07 |
| CRUD acara (admin) | Must | US-07, US-08 | FR-01 |
| Kelola kuota | Must | US-09 | FR-10 |
| Daftar peserta | Must | US-10 | FR-11 |
| Pembatalan pendaftaran | Should | US-05 | FR-08 |
| Ekspor CSV | Should | US-11 | FR-12 |
| Lihat tiket saya | Could | US-06 | FR-09 |
| Ringkasan acara | Could | US-12 | FR-13 |
| Autentikasi & *role-based access* | Won't | — | NFR-04 |
| *Payment gateway* | Won't | — | — |
| QR / check-in | Won't | US-13 | — |

## 8. User Flow Utama

**Alur Peserta Mendaftar:**
`Buka daftar acara → Pilih acara → Isi form → Validasi → Ketemu konfirmasi + kode tiket`

**Alur Admin Mengelola Acara:**
`Login dashboard → Buat/Ubah/Hapus acara → Atur kuota → Lihat & ekspor peserta`

**Alur Pembatalan:**
`Tiket Saya → Pilih tiket → Konfirmasi → Status dibatalkan → Kuota kembali`

## 9. Metrik Keberhasilan

- Waktu rekap peserta menurun dibanding proses manual.
- Nol kejadian data ganda pada acara yang sama.
- Kuota tidak pernah terlampaui.
- Peserta berhasil memperoleh kode tiket pada setiap pendaftaran sukses.
- Umpan balik pengguna: alur pendaftaran dianggap mudah.

## 10. Asumsi & Ketergantungan

- Tersedia browser modern dan akses internet.
- Admin memiliki data acara yang valid.
- Bergantung pada ekosistem Next.js/Tailwind/Bun.
- Bun 1.4+ sebagai *package manager* & *runtime* (Node.js 18+ sebagai *fallback*).
- Versi awal memakai *mock data*/JSON sebelum basis data.

## 11. Risiko

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Waktu pengembangan terbatas | Fitur tidak selesai | Prioritaskan MoSCoW; kerjakan *Must* dulu. |
| Validasi kuota/dobel kurang ketat | Data tidak konsisten | Uji skenario batas & duplikat. |
| Ketergantungan AI tanpa pemahaman | Kode sulit dipelihara | Wajib *review* & pahami hasil AI. |
| Kebocoran data peserta | Masalah privasi | Larang data sensitif di commit/prompt. |

## 12. Milestone & Rilis

| Milestone | Fokus | Status |
|-----------|-------|--------|
| Sprint 0 | Dokumentasi (SRS, backlog, UML, PRD) | ✅ |
| Sprint 1 | Scaffold + katalog acara + pendaftaran & tiket | ⏳ |
| Sprint 2 | Manajemen admin + rekap/ekspor | ⏳ |
| Sprint 3 | Penyempurnaan & stabilisasi | ⏳ |
| v2.0 | Autentikasi, pembayaran, QR/check-in | 🔮 |

## 13. Referensi

- `docs/srs.md` — kebutuhan fungsional & non-fungsional.
- `docs/elisitasi/user-story.md` — user story & acceptance criteria.
- `docs/product-backlog.md` — backlog & rencana sprint.
- `docs/uml/` — use case, skenario, activity diagram.
- `aturan proyek.md` — aturan pengembangan.

## 14. Riwayat Versi

| Versi | Tanggal | Perubahan | Penulis |
|-------|---------|-----------|---------|
| 1.0 | 11-11-2026 | Versi awal PRD | M Syafril Hayaddi |
