# Catatan Wawancara Elisitasi Kebutuhan

## Informasi Wawancara

| Item | Keterangan |
|------|------------|
| Proyek | RPL Event — Aplikasi Manajemen & Pendaftaran Acara |
| Metode | Wawancara semi-terstruktur |
| Narasumber | Event Organizer (EO) — *disimulasikan* |
| Pewawancara | Tim RPL |
| Tanggal | *(simulasi)* |
| Durasi | ±45 menit |

> **Disclaimer:** Dokumen ini merupakan **simulasi** untuk keperluan tugas RPL. Jawaban narasumber ditulis sendiri oleh penulis berdasarkan asumsi yang wajar terhadap kebutuhan aplikasi *event management*. Setiap jawaban diberi status **[FAKTA]** atau **[ASUMSI]**:
> - **[FAKTA]** — mengacu pada hal yang sudah pasti/terverifikasi dalam konteks proyek (mis. kebutuhan fungsional yang sudah disepakati).
> - **[ASUMSI]** — dugaan wajar yang masih perlu divalidasi ke narasumber sebenarnya.

---

## Daftar Pertanyaan & Jawaban

### 1. Bagaimana proses pendaftaran acara yang berjalan saat ini?

**Jawaban:** Saat ini peserta mendaftar melalui *Google Form* atau menghubungi admin lewat WhatsApp. Admin lalu mencatat manual ke spreadsheet dan membuat grup peserta.

**Status:** [ASUMSI]

### 2. Kendala apa yang paling sering muncul dari proses tersebut?

**Jawaban:** Data peserta tersebar di banyak tempat (form, chat, spreadsheet), rawan dobel, dan sulit dipantau ketika peserta banyak. Rekap manual memakan waktu dan sering salah hitung kuota.

**Status:** [ASUMSI]

### 3. Data apa saja yang perlu dikelola oleh sistem?

**Jawaban:** Data acara (nama, deskripsi, lokasi, tanggal, kuota), data peserta (nama, email, nomor HP), dan data pendaftaran (acara yang diikuti, kode tiket, status).

**Status:** [ASUMSI]

### 4. Siapa saja pengguna yang akan memakai sistem ini?

**Jawaban:** Dua kelompok utama: **peserta** (melihat dan mendaftar acara) dan **admin/EO** (mengelola acara dan peserta).

**Status:** [FAKTA]

### 5. Apakah kuota peserta penting untuk dibatasi?

**Jawaban:** Penting. Setiap acara punya kapasitas maksimal. Sistem harus menolak pendaftaran jika kuota sudah penuh.

**Status:** [ASUMSI]

### 6. Apakah peserta memerlukan bukti pendaftaran?

**Jawaban:** Ya, berupa **kode tiket** unik yang bisa ditunjukkan saat hari acara. Idealnya nanti berupa QR code, tetapi untuk tahap awal cukup kode teks.

**Status:** [ASUMSI]

### 7. Bagaimana mekanisme pembayaran tiket?

**Jawaban:** Sebagian acara gratis, sebagian berbayar. Untuk versi awal, sistem cukup mencatat status pembayaran secara manual (belum integrasi *payment gateway*).

**Status:** [ASUMSI]

### 8. Bagaimana jika peserta ingin membatalkan pendaftaran?

**Jawaban:** Peserta boleh membatalkan, dan kuota otomatis bertambah kembali. Admin juga perlu melihat riwayat pembatalan.

**Status:** [ASUMSI]

### 9. Laporan seperti apa yang dibutuhkan admin?

**Jawaban:** Daftar peserta per acara yang bisa diunduh (CSV) untuk keperluan *check-in* dan rekap.

**Status:** [ASUMSI]

### 10. Apakah sistem perlu mendukung banyak acara sekaligus?

**Jawaban:** Ya, EO biasanya mengelola beberapa acara dalam periode yang berbeda. Sistem harus bisa menampilkan banyak acara sekaligus.

**Status:** [ASUMSI]

### 11. Batasan atau kendala teknis apa yang perlu diperhatikan?

**Jawaban:** Tim masih kecil dan waktu pengembangan terbatas, jadi sistem sebaiknya sederhana, berbasis web, dan mudah di-*deploy*. Belum ada kebutuhan aplikasi *mobile* native.

**Status:** [ASUMSI]

### 12. Apa harapan utama terhadap sistem ini?

**Jawaban:** Pendaftaran cepat dan rapi, data peserta terpusat, kuota terkontrol otomatis, serta admin lebih hemat waktu dalam rekap.

**Status:** [ASUMSI]

---

## Kesimpulan Sementara

1. **Masalah utama:** proses pendaftaran masih manual dan tersebar, sehingga rawan kesalahan dan sulit dipantau.
2. **Kebutuhan inti:** satu sistem terpusat untuk mengelola acara, pendaftaran, kuota, dan kode tiket.
3. **Pengguna:** dua peran jelas — peserta dan admin/EO.
4. **Prioritas fitur:** daftar acara, pendaftaran dengan validasi kuota, kode tiket, dan rekap/ekspor peserta.
5. **Di luar cakupan awal:** integrasi *payment gateway* dan QR code (bisa jadi *future work*).
6. **Asumsi yang perlu divalidasi:** mekanisme pembayaran, kebijakan pembatalan, dan format laporan yang diinginkan narasumber sebenarnya.

> Kesimpulan ini bersifat **sementara** dan dapat berubah setelah wawancara dengan narasumber riil serta setelah tahap observasi dan analisis dokumen.
