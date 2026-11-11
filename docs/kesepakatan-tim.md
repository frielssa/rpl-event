# Kesepakatan Tim (Team Agreement) — RPL Event

## 1. Informasi Proyek

| Item | Keterangan |
|------|------------|
| Nama Proyek | RPL Event — Aplikasi Manajemen & Pendaftaran Acara |
| Mata Kuliah | Rekayasa Perangkat Lunak (RPL) |
| Repositori | https://github.com/frielssa/rpl-event |
| Tech Stack | Next.js + TypeScript + Tailwind CSS |
| Tanggal Dibuat | 11 November 2026 |
| Versi Dokumen | 1.0 |

## 2. Anggota Tim & Peran

| No | Nama | NIM | Peran | Tanggung Jawab Utama |
|----|------|-----|-------|----------------------|
| 1 | `<Nama Anggota 1>` | `<NIM 1>` | Ketua / Project Manager | Koordinasi tim, jadwal, review akhir, komunikasi dengan dosen. |
| 2 | `<Nama Anggota 2>` | `<NIM 2>` | Developer (Frontend) | Implementasi UI, integrasi halaman, responsivitas. |
| 3 | `<Nama Anggota 3>` | `<NIM 3>` | Developer (Logic/Data) | Model data, validasi, alur pendaftaran & kuota. |
| 4 | `<Nama Anggota 4>` | `<NIM 4>` | Dokumentasi & QA | SRS, user story, pengujian, laporan akhir. |

> Ganti `<Nama Anggota>` dan `<NIM>` sesuai data tim. Jika anggota kurang/lebih, sesuaikan tabel.

## 3. Tujuan & Ruang Lingkup Kolaborasi

- Menyelesaikan proyek **RPL Event** tepat waktu dengan kualitas yang dapat dipertanggungjawabkan.
- Membagi pekerjaan secara adil dan jelas agar setiap anggota memahami tanggung jawabnya.
- Menjaga komunikasi terbuka dan menyelesaikan konflik secara musyawarah.
- Menghasilkan kode dan dokumentasi yang konsisten, mudah dibaca, dan mudah dipelihara.

## 4. Peran & Tanggung Jawab

| Peran | Tanggung Jawab |
|-------|----------------|
| **Project Manager** | Menyusun jadwal, memantau progres, memimpin rapat, menjadi penghubung ke dosen. |
| **Frontend Developer** | Membangun antarmuka, memastikan tampilan responsif, mengikuti desain yang disepakati. |
| **Logic/Data Developer** | Mengelola model data, validasi form, logika kuota & tiket, integrasi data. |
| **Dokumentasi & QA** | Menyusun dokumen (SRS, user story), menguji fitur, mencatat *bug*, menyusun laporan. |

Setiap anggota wajib memahami pekerjaan anggota lain (minimal pada level konsep) agar dapat saling menggantikan saat darurat.

## 5. Aturan Komunikasi

- **Kanal utama:** grup WhatsApp/Discord tim (diskusi harian & koordinasi cepat).
- **Kanal resmi:** *issue* di GitHub untuk tugas, *bug*, dan keputusan teknis yang perlu tercatat.
- **Jam respons:** maksimal **12 jam** pada hari kerja untuk pesan yang menandai (`@`) anggota.
- **Rapat rutin:** minimal **1× per minggu** (online/offline), dengan agenda dan notulen.
- **Etika:** saling menghargai, tidak menyerang pribadi, fokus pada masalah bukan orang.

## 6. Alur Kerja Git (Branching & Commit)

Kami bekerja dengan **branch terpisah** lalu menggabungkannya ke `main` agar riwayat rapi dan setiap perubahan dapat ditinjau.

### 6.1 Strategi Branch

| Branch | Fungsi |
|--------|--------|
| `main` | Kode stabil yang siap dinilai/dijalankan. |
| `feature/<nama-fitur>` | Pengembangan fitur baru (mis. `feature/registrasi-acara`). |
| `docs/<nama-dokumen>` | Penulisan/perubahan dokumentasi (mis. `docs/srs`). |
| `fix/<nama-bug>` | Perbaikan *bug* (mis. `fix/validasi-kuota`). |

Aturan:
- `main` **dilindungi**: perubahan masuk melalui *pull request* / *merge*, bukan *commit* langsung (kecuali kondisi darurat yang disepakati).
- Setiap branch dibuat dari `main` terbaru.
- Setelah selesai, branch di-*merge* ke `main` lalu dihapus (opsional).

### 6.2 Konvensi Commit

Format: `<tipe>: <deskripsi singkat>`

| Tipe | Kegunaan |
|------|----------|
| `feat` | Fitur baru |
| `fix` | Perbaikan *bug* |
| `docs` | Perubahan dokumentasi |
| `style` | Format kode (tanpa mengubah logika) |
| `refactor` | Perubahan struktur kode tanpa mengubah perilaku |
| `test` | Menambah/memperbaiki pengujian |
| `chore` | Tugas rutin/konfigurasi |

Contoh: `feat: tambah validasi kuota saat registrasi`

### 6.3 Pull Request & Review

- Setiap *pull request* (PR) minimal ditinjau **1 anggota lain** sebelum di-*merge*.
- Deskripsi PR memuat: tujuan, perubahan utama, dan cara menguji.
- Konflik wajib diselesaikan oleh pembuat PR sebelum *merge*.

## 7. Standar Kode & Dokumentasi

- **Bahasa kode:** penamaan variabel/fungsi dalam bahasa Inggris, komentar seperlunya dalam bahasa Indonesia.
- **Konsistensi:** ikuti *lint* dan *formatter* proyek (ESLint/Prettier).
- **Struktur:** ikuti struktur folder yang disepakati (`src/app`, `src/components`, `src/lib`, `src/data`).
- **Dokumentasi:** setiap dokumen diberi judul, tujuan, dan riwayat versi. README diperbarui bila ada perubahan penting.

## 8. Manajemen Tugas

- Tugas dicatat sebagai *issue* di GitHub (atau papan Kanban).
- Setiap *issue* memiliki: deskripsi, *assignee*, dan tenggat.
- Status tugas: **To Do → In Progress → Review → Done**.
- Progres dilaporkan pada rapat mingguan.

## 9. Definition of Done (DoD)

Sebuah tugas dianggap selesai apabila:

- Semua *acceptance criteria* terpenuhi.
- Kode lolos *review* minimal 1 anggota dan sudah di-*merge* ke `main`.
- Build berjalan tanpa *error* (`npm run build`).
- Tampilan responsif di desktop & ponsel.
- Dokumentasi terkait diperbarui bila perlu.

## 10. Kebijakan Keterlambatan & Penanganan Konflik

- Keterlambatan tugas harus diinformasikan **sebelum** tenggat, bukan sesudahnya.
- Bila anggota berhalangan, tugas dialihkan ke anggota lain melalui kesepakatan.
- Konflik diselesaikan secara musyawarah; bila tidak selesai, dieskalasi ke Ketua, lalu ke dosen pembimbing bila perlu.
- Anggota yang tidak berkontribusi signifikan akan dicatat dan dibahas dalam evaluasi tim.

## 11. Kebijakan Penggunaan AI

Proyek ini berbasis ***vibe coding***, sehingga penggunaan AI diatur agar tetap etis dan bertanggung jawab:

- **Boleh:** memakai AI untuk membantu menulis draf kode, dokumentasi, dan *debugging*.
- **Wajib:** setiap keluaran AI **ditinjau dan dipahami** oleh anggota sebelum di-*commit*.
- **Larangan:** memasukkan data sensitif (token, *password*, data pribadi narasumber) ke dalam *prompt*.
- **Transparansi:** bagian yang dibantu AI dicatat di laporan/evaluasi penggunaan AI (`docs/elisitasi/pedoman-wawancara.md` bagian G).
- **Tanggung jawab:** anggota yang meng-*commit* bertanggung jawab penuh atas kode, apa pun alat bantu yang dipakai.

## 12. Persetujuan

Dengan menandatangani/mengisi tabel ini, seluruh anggota menyetujui kesepakatan di atas.

| No | Nama | Tanda Tangan | Tanggal |
|----|------|--------------|---------|
| 1 | `<Nama Anggota 1>` |  |  |
| 2 | `<Nama Anggota 2>` |  |  |
| 3 | `<Nama Anggota 3>` |  |  |
| 4 | `<Nama Anggota 4>` |  |  |

## 13. Riwayat Versi

| Versi | Tanggal | Perubahan | Penulis |
|-------|---------|-----------|---------|
| 1.0 | 11-11-2026 | Versi awal kesepakatan tim | Tim RPL Event |
