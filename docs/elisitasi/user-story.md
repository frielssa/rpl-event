# User Story — RPL Event

Dokumen ini memuat *user story* untuk aplikasi **RPL Event**, yaitu aplikasi manajemen & pendaftaran acara berbasis web.

## Pengantar

*User story* adalah deskripsi singkat kebutuhan dari sudut pandang pengguna. Format yang digunakan:

> **Sebagai** `<peran>`, **saya ingin** `<tujuan>`, **agar** `<manfaat>`.

Setiap *story* dilengkapi **Acceptance Criteria (AC)** sebagai syarat terpenuhinya cerita, serta **prioritas** menggunakan metode **MoSCoW**:

- **Must** — wajib ada pada rilis pertama.
- **Should** — penting, tetapi bisa menyusul.
- **Could** — nice to have.
- **Won't** — di luar cakupan versi ini.

## Peran (Persona)

| Peran | Deskripsi |
|-------|-----------|
| **Peserta** | Pengguna yang melihat dan mendaftar acara. |
| **Admin / Event Organizer (EO)** | Pengguna yang mengelola acara, kuota, dan peserta. |
| **Panitia lapangan** | Pengguna yang melakukan *check-in* berdasarkan daftar peserta. |

---

## A. User Story — Peserta

### US-01 — Melihat daftar acara
**Sebagai** peserta, **saya ingin** melihat daftar acara yang akan datang, **agar** saya dapat memilih acara yang ingin diikuti.
- **Prioritas:** Must
- **AC:**
  - Daftar acara menampilkan nama, tanggal, lokasi, dan sisa kuota.
  - Acara yang sudah lewat tidak ditampilkan pada daftar *upcoming*.
  - Halaman dapat diakses tanpa login.

### US-02 — Melihat detail acara
**Sebagai** peserta, **saya ingin** melihat detail acara, **agar** saya tahu informasi lengkap sebelum mendaftar.
- **Prioritas:** Must
- **AC:**
  - Menampilkan deskripsi, tanggal, lokasi, kuota, dan sisa tiket.
  - Tombol "Daftar" tampil dan aktif jika kuota masih tersedia.

### US-03 — Mendaftar acara
**Sebagai** peserta, **saya ingin** mendaftar acara secara *online*, **agar** saya terdaftar tanpa perlu menghubungi admin.
- **Prioritas:** Must
- **AC:**
  - Formulir meminta nama, email, dan nomor HP.
  - Sistem menolak pendaftaran jika kuota penuh.
  - Sistem mencegah pendaftaran ganda untuk acara yang sama dengan email sama.
  - Setelah berhasil, peserta mendapat kode tiket.

### US-04 — Mendapatkan kode tiket
**Sebagai** peserta, **saya ingin** menerima kode tiket unik, **agar** saya punya bukti pendaftaran saat hari acara.
- **Prioritas:** Must
- **AC:**
  - Setiap pendaftaran menghasilkan kode tiket unik.
  - Kode tiket ditampilkan di halaman konfirmasi.

### US-05 — Membatalkan pendaftaran
**Sebagai** peserta, **saya ingin** membatalkan pendaftaran, **agar** kuota saya dapat dilepas bila berhalangan.
- **Prioritas:** Should
- **AC:**
  - Peserta dapat membatalkan selama acara belum berlangsung.
  - Kuota bertambah kembali setelah pembatalan.
  - Status pendaftaran berubah menjadi "dibatalkan".

### US-06 — Melihat tiket saya
**Sebagai** peserta, **saya ingin** melihat daftar tiket milik saya, **agar** saya dapat mengakses kode tiket kembali.
- **Prioritas:** Could
- **AC:**
  - Menampilkan daftar acara yang diikuti beserta kode tiket.
  - Status tiket (aktif/dibatalkan) terlihat jelas.

---

## B. User Story — Admin / Event Organizer

### US-07 — Membuat acara
**Sebagai** admin, **saya ingin** membuat acara baru, **agar** acara dapat dipublikasikan ke peserta.
- **Prioritas:** Must
- **AC:**
  - Formulir berisi nama, deskripsi, lokasi, tanggal, dan kuota.
  - Acara baru langsung tampil di daftar *upcoming*.
  - Validasi: nama dan tanggal wajib diisi, kuota > 0.

### US-08 — Mengubah dan menghapus acara
**Sebagai** admin, **saya ingin** mengubah atau menghapus acara, **agar** data acara selalu akurat.
- **Prioritas:** Must
- **AC:**
  - Admin dapat mengedit seluruh atribut acara.
  - Penghapusan meminta konfirmasi.
  - Menghapus acara dengan peserta aktif menampilkan peringatan.

### US-09 — Mengelola kuota
**Sebagai** admin, **saya ingin** mengatur kuota acara, **agar** jumlah peserta terkontrol.
- **Prioritas:** Must
- **AC:**
  - Kuota tidak boleh lebih kecil dari jumlah peserta terdaftar.
  - Sisa kuota dihitung otomatis (kuota − tiket terjual).

### US-10 — Melihat daftar peserta
**Sebagai** admin, **saya ingin** melihat daftar peserta per acara, **agar** saya dapat memantau pendaftaran.
- **Prioritas:** Must
- **AC:**
  - Menampilkan nama, email, nomor HP, kode tiket, dan status.
  - Dapat difilter berdasarkan status (aktif/dibatalkan).

### US-11 — Mengekspor data peserta
**Sebagai** admin, **saya ingin** mengekspor daftar peserta ke CSV, **agar** panitia dapat melakukan *check-in* dan rekap.
- **Prioritas:** Should
- **AC:**
  - File CSV berisi kolom yang dibutuhkan panitia.
  - Ekspor mengikuti filter yang sedang aktif.

### US-12 — Melihat ringkasan acara
**Sebagai** admin, **saya ingin** melihat ringkasan (jumlah pendaftar vs kuota), **agar** saya cepat menilai keterisian acara.
- **Prioritas:** Could
- **AC:**
  - Menampilkan jumlah terdaftar, sisa kuota, dan persentase keterisian.

---

## C. User Story — Panitia Lapangan

### US-13 — Melakukan check-in peserta
**Sebagai** panitia lapangan, **saya ingin** menandai peserta hadir berdasarkan kode tiket, **agar** proses *check-in* cepat dan rapi.
- **Prioritas:** Won't (versi awal)
- **AC:**
  - Panitia dapat mencari peserta berdasarkan kode tiket.
  - Status kehadiran dapat ditandai.
  - *(Di luar cakupan versi awal; dirancang untuk tahap berikutnya.)*

---

## D. Prioritas Ringkas (MoSCoW)

| Prioritas | Story ID |
|-----------|----------|
| **Must** | US-01, US-02, US-03, US-04, US-07, US-08, US-09, US-10 |
| **Should** | US-05, US-11 |
| **Could** | US-06, US-12 |
| **Won't** | US-13 |

## E. Definition of Done (DoD)

Sebuah *story* dianggap selesai apabila:

- Semua **Acceptance Criteria** terpenuhi.
- Kode sudah di-*review* dan di-*merge* ke *branch* utama.
- Tidak ada *error* saat build (`bun run build`).
- Tampilan responsif di desktop dan ponsel.
- Dokumentasi singkat (jika perlu) diperbarui.
