# Skenario Use Case — RPL Event

Dokumen ini menjabarkan **skenario** setiap *use case* pada `docs/uml/use-case.md` secara terstruktur.

## Format Skenario

Setiap skenario memuat: **Aktor**, **Tujuan**, **Pra-kondisi**, **Pasca-kondisi**, **Alur Utama**, **Alur Alternatif**, dan **Kebutuhan Terkait**.

---

## UC-01 — Melihat Daftar Acara

- **Aktor:** Peserta
- **Tujuan:** Melihat daftar acara yang akan datang.
- **Pra-kondisi:** Aplikasi dapat diakses.
- **Pasca-kondisi:** Peserta melihat daftar acara *upcoming*.
- **Alur Utama:**
  1. Peserta membuka halaman utama.
  2. Sistem memuat daftar acara berstatus *upcoming*.
  3. Sistem menampilkan nama, tanggal, lokasi, dan sisa kuota tiap acara.
- **Alur Alternatif:**
  - A1 — Tidak ada acara *upcoming*: sistem menampilkan pesan "Belum ada acara".
- **Kebutuhan Terkait:** FR-02; US-01.

---

## UC-02 — Melihat Detail Acara

- **Aktor:** Peserta
- **Tujuan:** Melihat informasi lengkap suatu acara.
- **Pra-kondisi:** Peserta berada pada daftar acara.
- **Pasca-kondisi:** Peserta melihat detail acara.
- **Alur Utama:**
  1. Peserta memilih salah satu acara.
  2. Sistem menampilkan deskripsi, tanggal, lokasi, kuota, dan sisa tiket.
  3. Sistem menampilkan tombol "Daftar" bila kuota tersedia.
- **Alur Alternatif:**
  - A1 — Kuota penuh: tombol "Daftar" dinonaktifkan.
- **Kebutuhan Terkait:** FR-03; US-02.

---

## UC-03 — Mendaftar Acara

- **Aktor:** Peserta
- **Tujuan:** Mendaftar pada acara dan memperoleh kode tiket.
- **Pra-kondisi:** Acara berstatus *upcoming* dan masih memiliki kuota.
- **Pasca-kondisi:** Pendaftaran tersimpan, kuota berkurang, kode tiket dibuat.
- **Alur Utama:**
  1. Peserta klik "Daftar" pada detail acara.
  2. Sistem menampilkan formulir (nama, email, nomor HP).
  3. Peserta mengisi dan mengirim formulir.
  4. Sistem memvalidasi input.
  5. Sistem memvalidasi kuota (**UC-13**).
  6. Sistem memeriksa pendaftaran ganda.
  7. Sistem menyimpan pendaftaran dan membuat kode tiket (**UC-14**).
  8. Sistem mengurangi sisa kuota.
  9. Sistem menampilkan halaman konfirmasi beserta kode tiket.
- **Alur Alternatif:**
  - A1 — Input tidak valid: sistem menampilkan pesan kesalahan, formulir ditampilkan kembali.
  - A2 — Kuota penuh: sistem menampilkan "Kuota penuh", pendaftaran dibatalkan.
  - A3 — Email sudah terdaftar pada acara tersebut: sistem menampilkan "Sudah terdaftar".
- **Kebutuhan Terkait:** FR-04, FR-05, FR-06, FR-07; US-03, US-04.

---

## UC-04 — Melihat Tiket Saya

- **Aktor:** Peserta
- **Tujuan:** Melihat daftar tiket miliknya.
- **Pra-kondisi:** Peserta pernah mendaftar minimal satu acara.
- **Pasca-kondisi:** Peserta melihat tiket beserta statusnya.
- **Alur Utama:**
  1. Peserta membuka menu "Tiket Saya".
  2. Sistem menampilkan daftar acara yang diikuti beserta kode tiket.
  3. Sistem menampilkan status tiket (aktif/dibatalkan).
- **Alur Alternatif:**
  - A1 — Belum ada tiket: sistem menampilkan pesan kosong.
- **Kebutuhan Terkait:** FR-09; US-06.

---

## UC-05 — Membatalkan Pendaftaran

- **Aktor:** Peserta
- **Tujuan:** Membatalkan pendaftaran yang sudah dilakukan.
- **Pra-kondisi:** Peserta memiliki tiket aktif dan acara belum berlangsung.
- **Pasca-kondisi:** Status pendaftaran menjadi *dibatalkan*, kuota bertambah kembali.
- **Alur Utama:**
  1. Peserta membuka "Tiket Saya" dan memilih tiket.
  2. Peserta klik "Batalkan".
  3. Sistem meminta konfirmasi.
  4. Peserta mengonfirmasi.
  5. Sistem mengubah status menjadi *dibatalkan*.
  6. Sistem memperbarui sisa kuota (**UC-15**).
  7. Sistem menampilkan pesan berhasil.
- **Alur Alternatif:**
  - A1 — Acara sudah berlangsung: sistem menolak pembatalan.
  - A2 — Peserta membatalkan konfirmasi: tidak ada perubahan.
- **Kebutuhan Terkait:** FR-08; US-05.

---

## UC-06 — Membuat Acara

- **Aktor:** Admin / EO
- **Tujuan:** Menambahkan acara baru.
- **Pra-kondisi:** Admin sudah masuk ke *dashboard*.
- **Pasca-kondisi:** Acara baru tersimpan dan tampil di daftar *upcoming*.
- **Alur Utama:**
  1. Admin memilih "Buat Acara".
  2. Sistem menampilkan formulir acara.
  3. Admin mengisi nama, deskripsi, lokasi, tanggal, dan kuota.
  4. Admin menyimpan.
  5. Sistem memvalidasi input (nama & tanggal wajib, kuota > 0).
  6. Sistem menyimpan acara dan menampilkannya di daftar.
- **Alur Alternatif:**
  - A1 — Data tidak valid: sistem menampilkan kesalahan, formulir tetap terbuka.
- **Kebutuhan Terkait:** FR-01; US-07.

---

## UC-07 — Mengubah Acara

- **Aktor:** Admin / EO
- **Tujuan:** Memperbarui data acara.
- **Pra-kondisi:** Acara sudah ada.
- **Pasca-kondisi:** Perubahan acara tersimpan.
- **Alur Utama:**
  1. Admin memilih acara dan klik "Ubah".
  2. Sistem menampilkan formulir terisi data lama.
  3. Admin mengubah data dan menyimpan.
  4. Sistem memvalidasi dan menyimpan perubahan.
- **Alur Alternatif:**
  - A1 — Data tidak valid: sistem menampilkan kesalahan.
- **Kebutuhan Terkait:** FR-01; US-08.

---

## UC-08 — Menghapus Acara

- **Aktor:** Admin / EO
- **Tujuan:** Menghapus acara.
- **Pra-kondisi:** Acara sudah ada.
- **Pasca-kondisi:** Acara terhapus dari sistem.
- **Alur Utama:**
  1. Admin memilih acara dan klik "Hapus".
  2. Sistem menampilkan konfirmasi (disertai peringatan bila ada peserta aktif).
  3. Admin mengonfirmasi.
  4. Sistem menghapus acara.
- **Alur Alternatif:**
  - A1 — Admin membatalkan: acara tidak dihapus.
- **Kebutuhan Terkait:** FR-01; US-08.

---

## UC-09 — Mengelola Kuota

- **Aktor:** Admin / EO
- **Tujuan:** Mengatur kapasitas peserta acara.
- **Pra-kondisi:** Acara sudah ada.
- **Pasca-kondisi:** Kuota acara diperbarui.
- **Alur Utama:**
  1. Admin membuka pengaturan kuota acara.
  2. Admin memasukkan kuota baru.
  3. Sistem memvalidasi kuota ≥ jumlah peserta aktif.
  4. Sistem menyimpan kuota baru.
- **Alur Alternatif:**
  - A1 — Kuota < peserta aktif: sistem menampilkan kesalahan.
- **Kebutuhan Terkait:** FR-10; US-09.

---

## UC-10 — Melihat Daftar Peserta

- **Aktor:** Admin / EO, Panitia Lapangan
- **Tujuan:** Melihat peserta suatu acara.
- **Pra-kondisi:** Acara memiliki pendaftar.
- **Pasca-kondisi:** Daftar peserta ditampilkan.
- **Alur Utama:**
  1. Pengguna memilih acara.
  2. Sistem menampilkan daftar peserta (nama, email, no HP, kode tiket, status).
  3. Pengguna dapat memfilter berdasarkan status.
- **Alur Alternatif:**
  - A1 — Belum ada peserta: sistem menampilkan pesan kosong.
- **Kebutuhan Terkait:** FR-11; US-10.

---

## UC-11 — Mengekspor Data Peserta

- **Aktor:** Admin / EO, Panitia Lapangan
- **Tujuan:** Mengunduh daftar peserta dalam format CSV.
- **Pra-kondisi:** Terdapat data peserta.
- **Pasca-kondisi:** File CSV terunduh sesuai filter.
- **Alur Utama:**
  1. Pengguna membuka daftar peserta.
  2. Pengguna mengatur filter (opsional) lalu klik "Ekspor CSV".
  3. Sistem menyusun data sesuai filter.
  4. Sistem membuat dan mengunduh file CSV.
- **Alur Alternatif:**
  - A1 — Tidak ada data sesuai filter: sistem menampilkan pesan.
- **Kebutuhan Terkait:** FR-12; US-11.

---

## UC-12 — Melihat Ringkasan Acara

- **Aktor:** Admin / EO
- **Tujuan:** Melihat statistik keterisian acara.
- **Pra-kondisi:** Acara sudah ada.
- **Pasca-kondisi:** Ringkasan keterisian ditampilkan.
- **Alur Utama:**
  1. Admin membuka ringkasan acara.
  2. Sistem menampilkan jumlah terdaftar, sisa kuota, dan persentase keterisian.
- **Alur Alternatif:** —
- **Kebutuhan Terkait:** FR-13; US-12.
