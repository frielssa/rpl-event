# Pedoman Wawancara Elisitasi Kebutuhan

**Proyek:** RPL Event — Aplikasi Manajemen & Pendaftaran Acara
**Tujuan:** Menggali kebutuhan pengguna secara terstruktur sebelum tahap desain dan implementasi.

---

## 1. Gambaran Umum Proyek

RPL Event adalah aplikasi berbasis web yang dirancang untuk membantu *event organizer* (EO) mengelola acara dan pendaftaran peserta dalam satu tempat. Saat ini proses pendaftaran dilakukan secara manual melalui formulir daring dan pesan pribadi, kemudian direkap ke spreadsheet. Proyek ini bertujuan menyatukan seluruh proses tersebut ke dalam satu sistem: menampilkan acara, menerima pendaftaran, membatasi kuota secara otomatis, menghasilkan kode tiket, dan menyediakan rekap peserta bagi admin.

Hasil akhir yang diharapkan adalah aplikasi web ringan (Next.js + Tailwind CSS) yang mudah digunakan oleh peserta maupun admin, serta mudah di-*deploy* oleh tim yang masih kecil.

## 2. Identifikasi Masalah Awal

Berdasarkan pengamatan awal, terdapat beberapa masalah yang mendasari perlunya sistem ini:

- **Data tersebar:** informasi peserta berada di banyak kanal (form, chat, spreadsheet) sehingga sulit disatukan.
- **Rawan duplikasi dan salah hitung:** pendaftaran manual berpotensi menimbulkan data ganda dan kesalahan hitung kuota.
- **Rekap memakan waktu:** admin harus menyalin data secara manual untuk keperluan *check-in* dan laporan.
- **Tidak ada bukti pendaftaran baku:** peserta tidak memiliki kode tiket resmi yang seragam.

## 3. Pemangku Kepentingan (Stakeholder)

| Stakeholder | Peran / Kepentingan |
|-------------|---------------------|
| **Peserta** | Melihat acara, mendaftar, memperoleh kode tiket, membatalkan pendaftaran. |
| **Admin / Event Organizer** | Membuat dan mengelola acara, mengatur kuota, memantau dan merekap peserta. |
| **Panitia lapangan** | Melakukan *check-in* peserta menggunakan daftar peserta yang diekspor. |
| **Tim pengembang (mahasiswa)** | Membangun dan memelihara sistem sesuai kebutuhan tugas RPL. |

## 4. Ruang Lingkup Sistem (Scope)

**Termasuk dalam cakupan:**

- Manajemen acara (CRUD) oleh admin.
- Menampilkan daftar dan detail acara untuk peserta.
- Pendaftaran peserta dengan validasi kuota.
- Pembuatan kode tiket unik.
- Pembatalan pendaftaran.
- Rekap dan ekspor daftar peserta (CSV).

**Di luar cakupan (untuk versi awal):**

- Integrasi *payment gateway*.
- QR code / pemindaian tiket.
- Aplikasi *mobile* native.
- Notifikasi *push* / email otomatis.
- Manajemen multi-tenant yang kompleks.

## 5. Batasan dan Kendala

- **Waktu & tenaga:** dikerjakan oleh tim kecil dalam kerangka tugas kuliah.
- **Teknologi:** fokus pada web (Next.js + Tailwind), tanpa backend kompleks pada tahap awal (menggunakan *mock data*).
- **Sumber daya:** belum ada infrastruktur *server* produksi; cukup berjalan lokal atau *deploy* gratis.
- **Data:** data awal bersifat simulasi; integrasi data riil menyusul.
- **Regulasi data pribadi:** perlu kehati-hatian dalam menyimpan data peserta (nama, email, nomor HP).

---

## 6. (B / 2) Teknik Elisitasi Kebutuhan

Teknik elisitasi dipilih agar kebutuhan dapat digali dari berbagai sudut pandang dan divalidasi silang.

### 6.1 Wawancara

Wawancara semi-terstruktur dilakukan dengan narasumber (EO dan/atau panitia) untuk memahami proses bisnis, kendala, dan harapan. Pendekatan semi-terstruktur dipilih agar pewawancara dapat menggali jawaban lebih dalam tanpa keluar dari topik. Hasil wawancara dicatat dalam `catatan-wawancara.md`.

### 6.2 Observasi

Observasi dilakukan dengan mengamati langsung proses pendaftaran acara yang sedang berjalan (mis. bagaimana peserta mengisi form, bagaimana admin merekap). Tujuannya memverifikasi proses nyata di lapangan dan menemukan langkah manual yang tidak terungkap saat wawancara.

### 6.3 Analisis Dokumen

Analisis dokumen dilakukan terhadap artefak yang sudah ada, seperti formulir pendaftaran, spreadsheet peserta, dan tangkapan layar percakapan admin–peserta. Dokumen ini membantu memetakan atribut data yang benar-benar dipakai dan format laporan yang diharapkan.

---

## 7. (C / 3) Daftar Pertanyaan Wawancara

### 7.1 Proses Operasional Saat Ini

- Bagaimana alur pendaftaran acara dari awal sampai peserta dinyatakan terdaftar?
- Siapa yang menangani pendaftaran dan pada tahap mana?
- Bagaimana peserta mendapatkan konfirmasi setelah mendaftar?
- Bagaimana proses *check-in* peserta pada hari acara?

### 7.2 Kendala yang Dihadapi

- Kendala apa yang paling sering terjadi selama proses pendaftaran?
- Bagian mana yang paling memakan waktu?
- Pernahkah terjadi kesalahan data (dobel, hilang, salah hitung)? Bagaimana penanganannya?

### 7.3 Kebutuhan Data

- Data apa saja yang wajib diisi peserta saat mendaftar?
- Data apa yang perlu dilihat dan dikelola admin?
- Berapa lama data peserta perlu disimpan?
- Apakah ada kebutuhan data tambahan (mis. instansi, ukuran kaos, kebutuhan khusus)?

### 7.4 Pengguna Sistem

- Siapa saja yang akan menggunakan sistem dan apa perannya?
- Apakah setiap peran membutuhkan hak akses berbeda?
- Seberapa terbiasa pengguna dengan aplikasi berbasis web?

### 7.5 Batasan dan Kebutuhan Sistem

- Perangkat apa yang dipakai pengguna (laptop, ponsel)?
- Apakah sistem harus bisa diakses banyak pengguna bersamaan?
- Apakah ada kebutuhan khusus terkait keamanan atau data pribadi?
- Apakah sistem perlu terhubung dengan layanan lain (pembayaran, email)?

### 7.6 Harapan terhadap Sistem

- Apa hasil terbaik yang diharapkan dari sistem ini?
- Fitur apa yang paling penting dan harus ada lebih dulu?
- Bagaimana ukuran keberhasilan sistem menurut narasumber?

---

## 8. (D / 4) Pertanyaan Lanjutan

Pertanyaan lanjutan diajukan setelah wawancara awal untuk memperjelas dan memvalidasi temuan.

### 8.1 Klarifikasi / Pendalaman

- Ketika Anda menyebut "sering salah hitung kuota", pada kondisi seperti apa itu terjadi?
- Boleh dijelaskan contoh kasus pendaftaran yang paling rumit yang pernah ditangani?

### 8.2 Prioritas Kebutuhan

- Dari sekian kebutuhan, mana yang **wajib** ada pada rilis pertama?
- Fitur mana yang bisa ditunda ke tahap berikutnya?
- Jika waktu pengembangan terbatas, apa yang boleh dikorbankan?

### 8.3 Ekspektasi & Kriteria Keberhasilan

- Bagaimana Anda mengetahui sistem ini berhasil? (mis. waktu rekap turun, tidak ada data dobel)
- Apakah ada target waktu atau jumlah peserta tertentu?
- Siapa yang akan menilai bahwa sistem ini layak dipakai?

---

## 9. (E / 5) Permintaan Contoh Dokumen atau Data

Untuk mendukung analisis dokumen, pewawancara meminta narasumber menyediakan contoh:

- **Formulir pendaftaran** acara yang pernah digunakan (beserta daftar pertanyaannya).
- **File spreadsheet** rekap peserta (dengan data pribadi disamarkan).
- **Tangkapan layar** percakapan admin–peserta terkait pendaftaran.
- **Contoh laporan/rekap** yang biasa dibuat setelah acara selesai.
- **Dokumentasi acara** (poster, jadwal, rincian tiket) untuk memahami atribut acara.

Tujuan permintaan ini adalah memperoleh gambaran nyata tentang struktur data, format laporan, dan alur kerja yang harus didukung sistem.

---

## 10. (F / 6) Pemeriksaan Kualitas Pertanyaan

Sebelum wawancara dilakukan, daftar pertanyaan diperiksa agar berkualitas baik:

- **Jelas dan tidak ambigu:** setiap pertanyaan hanya menanyakan satu hal.
- **Tidak menuntun (*leading*):** pertanyaan tidak mengarahkan jawaban ke opsi tertentu.
- **Terbuka:** menggunakan pertanyaan terbuka agar narasumber bebas menjelaskan.
- **Relevan:** setiap pertanyaan terkait langsung dengan tujuan elisitasi.
- **Tidak berasumsi berlebihan:** tidak mengandaikan solusi sebelum kebutuhan jelas.
- **Berurutan logis:** dari proses umum menuju detail kendala dan harapan.
- **Cakupan seimbang:** mencakup proses, kendala, data, pengguna, batasan, dan harapan.

Hasil pemeriksaan: pertanyaan dinilai cukup baik, dengan catatan perlu menambahkan pertanyaan klarifikasi (bagian D) setelah wawancara awal.

---

## 11. (G / 7) Evaluasi Penggunaan AI

Penggunaan AI dalam penyusunan pedoman dan catatan wawancara ini dievaluasi sebagai berikut:

- **Manfaat:** AI membantu menyusun struktur pertanyaan secara sistematis, mempercepat pembuatan draf, dan menjaga konsistensi antar bagian.
- **Keterbatasan:** jawaban narasumber pada `catatan-wawancara.md` merupakan **simulasi/asumsi**, bukan data riil. AI tidak dapat menggantikan wawancara langsung dengan pemangku kepentingan.
- **Risiko:** terdapat potensi bias atau asumsi yang tidak sesuai konteks nyata; karena itu seluruh asumsi wajib divalidasi.
- **Peran manusia:** pewawancara tetap menentukan pertanyaan final, melakukan wawancara riil, dan memverifikasi temuan.
- **Etika:** AI digunakan sebagai alat bantu draf; data pribadi narasumber tidak dimasukkan ke dalam prompt.
- **Kesimpulan:** AI layak dipakai untuk mempercepat penyusunan instrumen, dengan syarat hasilnya ditinjau dan divalidasi secara manusiawi sebelum digunakan.

---

> **Catatan:** Pedoman ini bersifat hidup (*living document*) dan dapat diperbarui setelah wawancara, observasi, serta analisis dokumen dilakukan.
