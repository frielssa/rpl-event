# Software Requirements Specification (SRS) — RPL Event

**Nama Proyek:** RPL Event — Aplikasi Manajemen & Pendaftaran Acara
**Versi Dokumen:** 1.1
**Tanggal:** 11 November 2026
**Revisi Terakhir:** 14 November 2026
**Mengacu pada:** IEEE 830 / ISO/IEC/IEEE 29148 (gaya ringkas)

---

## 1. Pendahuluan

### 1.1 Purpose (Tujuan)

Dokumen ini mendefinisikan kebutuhan perangkat lunak untuk aplikasi **RPL Event**, yaitu aplikasi berbasis web untuk mengelola acara dan pendaftaran peserta. Dokumen ini menjadi acuan bagi tim pengembang, penguji, dan pemangku kepentingan dalam memahami **apa** yang harus dibangun.

### 1.2 Scope (Ruang Lingkup)

Aplikasi **RPL Event** memungkinkan:

- Admin/*Event Organizer* (EO) membuat dan mengelola acara.
- Peserta melihat daftar/detail acara, mendaftar, dan memperoleh kode tiket.
- Sistem membatasi pendaftaran sesuai kuota dan mencegah pendaftaran ganda.
- Admin mengekspor data peserta untuk keperluan *check-in* dan rekap.

**Di luar ruang lingkup versi 1.0:** integrasi *payment gateway*, QR code, aplikasi *mobile* native, notifikasi otomatis (email/push), dan *multi-tenant*.

### 1.3 Definitions & Acronyms (Definisi & Akronim)

| Istilah | Definisi |
|---------|----------|
| **Event** | Acara yang dapat diikuti peserta. |
| **Peserta** | Pengguna yang mendaftar acara. |
| **Admin / EO** | Pengguna yang mengelola acara dan peserta. |
| **Registration** | Data pendaftaran peserta pada suatu acara. |
| **Kode Tiket** | Kode unik sebagai bukti pendaftaran. |
| **Kuota** | Kapasitas maksimum peserta suatu acara. |
| **FR** | *Functional Requirement* (kebutuhan fungsional). |
| **NFR** | *Non-Functional Requirement* (kebutuhan non-fungsional). |
| **User Story** | Deskripsi kebutuhan dari sudut pandang pengguna (lihat `user-story.md`). |

### 1.4 References (Referensi)

- `README.md` — gambaran proyek & tech stack.
- `docs/elisitasi/pedoman-wawancara.md` — pedoman & teknik elisitasi.
- `docs/elisitasi/catatan-wawancara.md` — hasil wawancara (simulasi).
- `docs/elisitasi/user-story.md` — daftar *user story* & prioritas.
- `docs/data-model.md` — model data rinci, relasi, constraint, dan ERD (Mermaid).

### 1.5 Overview (Ikhtisar Dokumen)

Bagian 2 menjelaskan deskripsi keseluruhan sistem. Bagian 3 & 4 memuat kebutuhan fungsional dan non-fungsional. Bagian 5–9 memuat antarmuka, model data, aturan bisnis, batasan, dan matriks *traceability*.

---

## 2. Deskripsi Keseluruhan (Overall Description)

### 2.1 Product Perspective (Perspektif Produk)

RPL Event adalah aplikasi web mandiri (*stand-alone*) yang menggantikan proses pendaftaran manual berbasis formulir daring dan spreadsheet. Pada tahap awal data disimpan sebagai *mock data*/JSON, dengan rencana pengembangan ke basis data pada tahap berikutnya.

### 2.2 Product Functions (Fungsi Produk)

- Manajemen acara (CRUD).
- Menampilkan daftar & detail acara.
- Pendaftaran peserta dengan validasi kuota.
- Pembuatan kode tiket unik.
- Pembatalan pendaftaran.
- Pengelolaan kuota.
- Daftar peserta per acara.
- Ekspor data peserta (CSV).
- Ringkasan keterisian acara.

### 2.3 User Classes & Characteristics (Kelas Pengguna)

| Kelas Pengguna | Karakteristik | Hak Akses Utama |
|----------------|---------------|-----------------|
| **Peserta** | Pengguna umum, mungkin awam teknologi. | Lihat acara, daftar, lihat tiket, batalkan. |
| **Admin / EO** | Mengelola acara, paham alur kerja EO. | CRUD acara, kelola kuota, lihat/ekspor peserta. |
| **Panitia lapangan** | Melakukan *check-in*. | Melihat/mengunduh daftar peserta (via CSV). |

### 2.4 Operating Environment (Lingkungan Operasi)

- **Browser:** Chrome, Firefox, Edge, Safari (versi terbaru).
- **Perangkat:** desktop dan ponsel (*responsive web*).
- **Server:** *development* lokal (Node.js) / *hosting* statis gratis untuk versi awal.
- **Runtime:** Node.js 18+.

### 2.5 Constraints (Batasan)

- Dikerjakan oleh tim kecil dalam kerangka tugas RPL (waktu & tenaga terbatas).
- Fokus web; tanpa aplikasi *mobile* native.
- Tanpa integrasi pembayaran pada versi awal.
- Data awal bersifat simulasi.

### 2.6 Assumptions & Dependencies (Asumsi & Ketergantungan)

- Pengguna memiliki akses internet dan browser modern.
- Admin memiliki data acara yang valid.
- Pengembangan bergantung pada Next.js, Tailwind CSS, dan ekosistem Bun (Bun 1.4+ sebagai *package manager* & *runtime*).

---

## 3. Kebutuhan Fungsional (Functional Requirements)

| ID | Kebutuhan | Deskripsi | Prioritas | Sumber |
|----|-----------|-----------|-----------|--------|
| **FR-01** | Manajemen acara | Admin dapat membuat, melihat, mengubah, dan menghapus acara (nama, deskripsi, lokasi, tanggal, kuota). | Must | US-07, US-08 |
| **FR-02** | Daftar acara | Sistem menampilkan daftar acara *upcoming* beserta informasi ringkas & sisa kuota. | Must | US-01 |
| **FR-03** | Detail acara | Sistem menampilkan detail acara lengkap. | Must | US-02 |
| **FR-04** | Pendaftaran peserta | Peserta dapat mendaftar dengan mengisi nama, email, dan nomor HP. | Must | US-03 |
| **FR-05** | Validasi kuota | Sistem menolak pendaftaran bila kuota penuh. | Must | US-03, US-09 |
| **FR-06** | Cegah pendaftaran ganda | Sistem mencegah pendaftaran ganda (email sama pada acara sama). | Must | US-03 |
| **FR-07** | Kode tiket | Sistem menghasilkan kode tiket unik per pendaftaran. | Must | US-04 |
| **FR-08** | Pembatalan pendaftaran | Peserta dapat membatalkan pendaftaran; kuota bertambah kembali. | Should | US-05 |
| **FR-09** | Lihat tiket saya | Peserta dapat melihat daftar tiket miliknya. | Could | US-06 |
| **FR-10** | Kelola kuota | Admin dapat mengubah kuota; kuota tidak boleh < jumlah peserta terdaftar. | Must | US-09 |
| **FR-11** | Daftar peserta | Admin dapat melihat daftar peserta per acara (filter status). | Must | US-10 |
| **FR-12** | Ekspor CSV | Admin dapat mengekspor daftar peserta ke CSV sesuai filter. | Should | US-11 |
| **FR-13** | Ringkasan acara | Admin dapat melihat ringkasan keterisian (terdaftar, sisa, persentase). | Could | US-12 |

---

## 4. Kebutuhan Non-Fungsional (Non-Functional Requirements)

| ID | Kategori | Kebutuhan | Target/Ukuran |
|----|----------|-----------|---------------|
| **NFR-01** | Performance | Halaman utama dan daftar acara termuat cepat. | Waktu muat awal < 3 detik pada koneksi normal. |
| **NFR-02** | Usability | Antarmuka mudah dipahami peserta awam. | Alur daftar ≤ 3 langkah; tanpa pelatihan khusus. |
| **NFR-03** | Responsiveness | Tampilan baik di desktop & ponsel. | Berfungsi pada lebar 360px–1440px. |
| **NFR-04** | Security | Validasi input & perlindungan data peserta. | Validasi *server-side*; tidak menampilkan data pribadi ke publik. |
| **NFR-05** | Reliability | Data pendaftaran konsisten. | Tidak terjadi pendaftaran ganda/kuota melebihi batas. |
| **NFR-06** | Maintainability | Kode terstruktur & mudah dipelihara. | Mengikuti *lint*, struktur folder baku, komponen modular. |
| **NFR-07** | Portability | Mudah dijalankan/di-*deploy*. | Berjalan dengan `bun run dev`; dapat di-*deploy* statis. |
| **NFR-08** | Compatibility | Kompatibel dengan browser modern. | Chrome, Firefox, Edge, Safari versi terbaru. |
| **NFR-09** | Accessibility | Dapat digunakan semaksimal mungkin. | Kontras teks memadai, elemen form berlabel. |

---

## 5. Kebutuhan Antarmuka Eksternal (External Interface Requirements)

### 5.1 User Interfaces

- Halaman **daftar acara** (publik), **detail acara**, **formulir pendaftaran**, **konfirmasi/tiket**, dan **dashboard admin**.
- Desain responsif dengan Tailwind CSS; navigasi sederhana dan konsisten.

### 5.2 Hardware Interfaces

- Tidak ada antarmuka perangkat keras khusus; cukup perangkat dengan browser.

### 5.3 Software Interfaces

- **Next.js** (App Router) sebagai *framework*.
- **Bun 1.4+** untuk *package manager* & *runtime* (Node.js 18+ sebagai *fallback*).
- Penyimpanan data: *mock data*/JSON (tahap awal); basis data menyusul.

### 5.4 Communication Interfaces

- Protokol HTTP/HTTPS standar.
- Tidak ada integrasi layanan eksternal pada versi 1.0.

---

## 6. Model & Kamus Data

Model data rinci, relasi, constraint, dan ERD tersedia di `docs/data-model.md`.

### 6.1 Entity `Event`

| Atribut | Tipe | Wajib | Keterangan |
|---------|------|-------|------------|
| `id` | string | Ya | Identitas unik acara. |
| `nama` | string | Ya | Nama acara. |
| `deskripsi` | text | Ya | Deskripsi acara. |
| `lokasi` | string | Ya | Lokasi acara. |
| `tanggal` | datetime | Ya | Tanggal & waktu pelaksanaan. |
| `kuota` | integer | Ya | Kapasitas maksimum (> 0). |
| `tiketTerjual` | integer | — (turunan) | **Nilai turunan** (jumlah pendaftar aktif); dihitung dari `Registration`, tidak disimpan di tabel `Event`. |
| `status` | enum | Ya | `upcoming` / `ongoing` / `done`. |

### 6.2 Entity `User`

| Atribut | Tipe | Wajib | Keterangan |
|---------|------|-------|------------|
| `id` | string | Ya | Identitas unik pengguna. |
| `nama` | string | Ya | Nama lengkap. |
| `email` | string | Ya | Format email valid & unik. |
| `peran` | enum | Ya | `peserta` / `admin`. |

### 6.3 Entity `Registration`

| Atribut | Tipe | Wajib | Keterangan |
|---------|------|-------|------------|
| `id` | string | Ya | Identitas unik pendaftaran. |
| `eventId` | string | Ya | Referensi ke `Event.id`. |
| `userId` | string | Ya | Referensi ke `User.id`. |
| `namaPeserta` | string | Ya | Nama saat mendaftar. |
| `email` | string | Ya | Email saat mendaftar. |
| `noHp` | string | Ya | Nomor HP peserta. |
| `kodeTiket` | string | Ya | Kode unik tiket. |
| `status` | enum | Ya | `aktif` / `dibatalkan`. |
| `tanggalDaftar` | datetime | Ya | Waktu pendaftaran. |

> **Catatan model:** `email` pada `Registration` unik per acara untuk pendaftaran aktif (BR-02), sedangkan `kodeTiket` unik global (BR-04). `tanggalBatal` dapat ditambahkan sebagai atribut audit opsional. Atribut turunan seperti `tiketTerjual`, `sisaKuota`, dan persentase keterisian tidak disimpan; model rinci & ERD ada di `docs/data-model.md`.

---

## 7. Aturan Bisnis (Business Rules)

- **BR-01:** Pendaftaran hanya diterima jika jumlah pendaftar aktif < `kuota` (sisa kuota > 0).
- **BR-02:** Satu email tidak boleh mendaftar dua kali pada acara yang sama.
- **BR-03:** `kuota` tidak boleh lebih kecil dari jumlah peserta aktif.
- **BR-04:** Kode tiket harus unik untuk setiap pendaftaran.
- **BR-05:** Pembatalan hanya boleh dilakukan sebelum acara berlangsung.
- **BR-06:** Pembatalan mengubah status menjadi `dibatalkan` dan mengurangi jumlah pendaftar aktif (kuota tersedia bertambah).
- **BR-07:** Acara yang sudah lewat tidak ditampilkan pada daftar *upcoming*.

---

## 8. Batasan & Asumsi

- Versi 1.0 tidak menangani pembayaran daring; status pembayaran dicatat manual.
- Kode tiket berupa teks (QR code menyusul).
- Data disimpan sebagai *mock data*/JSON; migrasi ke basis data direncanakan.
- Diasumsikan satu instance aplikasi melayani satu EO (belum *multi-tenant*).

---

## 9. Matriks Traceability (FR ↔ User Story)

| FR | User Story | Keterangan |
|----|------------|-----------|
| FR-01 | US-07, US-08 | CRUD acara oleh admin. |
| FR-02 | US-01 | Daftar acara *upcoming*. |
| FR-03 | US-02 | Detail acara. |
| FR-04 | US-03 | Formulir pendaftaran. |
| FR-05 | US-03, US-09 | Validasi kuota. |
| FR-06 | US-03 | Cegah daftar ganda. |
| FR-07 | US-04 | Kode tiket. |
| FR-08 | US-05 | Pembatalan. |
| FR-09 | US-06 | Lihat tiket saya. |
| FR-10 | US-09 | Kelola kuota. |
| FR-11 | US-10 | Daftar peserta. |
| FR-12 | US-11 | Ekspor CSV. |
| FR-13 | US-12 | Ringkasan acara. |

---

## 10. Riwayat Versi

| Versi | Tanggal | Perubahan | Penulis |
|-------|---------|-----------|---------|
| 1.0 | 11-11-2026 | Versi awal SRS | Tim RPL Event |
| 1.1 | 14-11-2026 | Tandai atribut turunan, perjelas tipe tanggal, tautkan model data & ERD | Tim RPL Event |
