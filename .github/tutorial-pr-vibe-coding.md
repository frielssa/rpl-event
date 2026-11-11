# Tutorial: Pull Request & Vibe Coding — RPL Event

Panduan ini menjelaskan cara **menjalankan proyek**, **mengajukan perubahan lewat Pull Request (PR)**, serta **etika penggunaan AI (*vibe coding*)** di repositori RPL Event.

> Template PR otomatis dipakai GitHub dari `.github/pull_request_template.md` setiap kali kamu membuka PR baru.

---

## 1. Prasyarat

- **Git** terpasang → `git --version`
- **Node.js 18+** dan **npm** → `node -v`, `npm -v`
- **Akun GitHub** dan akses ke repo `frielssa/rpl-event`
- (Opsional) Editor seperti VS Code.

---

## 2. Menjalankan Proyek Secara Lokal

> Catatan: perintah berikut berlaku setelah kode aplikasi di-*scaffold* (lihat `docs/product-backlog.md` PB-02). Saat ini repo masih berisi dokumentasi.

```powershell
# 1. Clone repo
git clone https://github.com/frielssa/rpl-event.git
cd rpl-event

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka `http://localhost:3000` di browser.

**Perintah lain:**

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Menjalankan *development server* |
| `npm run build` | Build untuk produksi |
| `npm run lint` | Memeriksa kualitas kode |

---

## 3. Alur Kontribusi dengan Pull Request

Alur ini mensimulasikan kerja tim: **setiap perubahan dibuat di branch sendiri, lalu digabung ke `main` lewat PR**.

### Langkah 1 — Ambil kode terbaru

```powershell
git checkout main
git pull origin main
```

### Langkah 2 — Buat branch baru

Gunakan penamaan yang jelas:

```powershell
git checkout -b feature/registrasi-acara
# variasi: docs/nama-dokumen, fix/nama-bug, chore/nama-tugas
```

### Langkah 3 — Kerjakan perubahan & commit

```powershell
git add .
git commit -m "feat: tambah form registrasi acara"
```

Konvensi commit: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `test:`, `chore:`.

### Langkah 4 — Push branch ke GitHub

```powershell
git push -u origin feature/registrasi-acara
```

### Langkah 5 — Buka Pull Request

1. Buka tautan yang muncul di terminal, **atau** buka repo → tab **Pull requests** → **New pull request**.
2. Pilih branch `feature/registrasi-acara` → `main`.
3. **Template PR otomatis terisi** — lengkapi semua bagian.
4. Klik **Create pull request**.

### Langkah 6 — Review & Merge

- Minta minimal **1 anggota lain** meninjau (sesuai `docs/kesepakatan-tim.md`).
- Perbaiki bila ada permintaan perubahan.
- Setelah disetujui, klik **Merge pull request**.
- (Opsional) Hapus branch setelah di-*merge*.

---

## 4. Mengisi Template PR

Template di `.github/pull_request_template.md` berisi bagian berikut:

| Bagian | Yang Diisi |
|--------|-----------|
| **Ringkasan Perubahan** | Apa yang diubah dan mengapa. |
| **Tipe Perubahan** | Centang jenisnya (`feat`, `fix`, `docs`, dst.). |
| **Keterkaitan** | User Story / FR / Backlog / Issue terkait. |
| **Perubahan Utama** | Daftar poin perubahan. |
| **Cara Menguji** | Langkah verifikasi untuk reviewer. |
| **Screenshot** | Bukti visual untuk perubahan UI. |
| **Penggunaan AI** | Transparansi bagian yang dibantu AI. |
| **Checklist** | Uji lokal, build, lint, AC, responsif, keamanan. |
| **Catatan Reviewer** | Hal yang perlu ditegaskan. |

Isi dengan jujur dan ringkas. PR yang baik memudahkan reviewer memahami dan memverifikasi.

---

## 5. Etika *Vibe Coding* (Penggunaan AI)

Proyek ini berbasis *vibe coding*, yaitu pengembangan yang dibantu AI. Agar tetap bertanggung jawab:

**Boleh:**
- Memakai AI untuk menyusun draf kode, dokumentasi, dan membantu *debugging*.
- Meminta AI menjelaskan konsep atau *error*.

**Wajib:**
- **Memahami** kode yang dihasilkan sebelum di-*commit*.
- Mengisi bagian **Penggunaan AI** pada template PR.
- Meninjau & menguji hasil AI secara manual.

**Dilarang:**
- Menempelkan **token, password, API key, atau data pribadi** ke prompt AI.
- Meng-*commit* kode AI yang tidak dipahami.
- Mengklaim pekerjaan AI sebagai hasil sendiri tanpa transparansi.

Penanggung jawab akhir tetap **anggota yang meng-commit** kode tersebut.

---

## 6. Tips & Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Push ditolak (*rejected*) | `git pull --rebase origin main` lalu push lagi. |
| Lupa pindah branch | `git branch` untuk cek, `git checkout <branch>` untuk pindah. |
| Konflik saat merge | Selesaikan konflik di editor, `git add .`, lalu lanjutkan merge. |
| Template PR tidak muncul | Pastikan file ada di `.github/pull_request_template.md` pada branch `main`. |
| Port 3000 dipakai | Hentikan proses lain atau jalankan `npm run dev -- -p 3001`. |

---

## 7. Referensi

- `docs/kesepakatan-tim.md` — alur Git, peran, DoD.
- `docs/srs.md` — kebutuhan fungsional & non-fungsional.
- `docs/product-backlog.md` — daftar item pekerjaan & sprint.
- `docs/elisitasi/user-story.md` — user story & acceptance criteria.
