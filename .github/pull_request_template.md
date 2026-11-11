---
name: Pull Request
about: Template untuk mengajukan perubahan (mendukung alur vibe coding)
title: "[tipe] deskripsi singkat"
labels: ""
assignees: ""
---

## Ringkasan Perubahan

<!-- Jelaskan secara singkat APA yang diubah dan MENGAPA. -->

...

## Tipe Perubahan

- [ ] `feat` — Fitur baru
- [ ] `fix` — Perbaikan bug
- [ ] `docs` — Dokumentasi
- [ ] `refactor` — Perubahan struktur tanpa mengubah perilaku
- [ ] `style` — Format kode
- [ ] `test` — Pengujian
- [ ] `chore` — Konfigurasi/tugas rutin

## Keterkaitan

<!-- Isi jika ada. Contoh: US-03, FR-05, PB-06, Issue #12 -->

- User Story / FR / Backlog Item: ...
- Issue terkait: ...

## Perubahan Utama

<!-- Daftar perubahan penting. -->
- ...
- ...

## Cara Menguji (How to Test)

<!-- Langkah-langkah agar reviewer bisa memverifikasi. -->
1. Jalankan `npm install`
2. Jalankan `npm run dev`
3. Buka `http://localhost:3000`
4. Lakukan: ...
5. Ekspektasi: ...

## Tangkapan Layar / Rekaman (Opsional)

<!-- Tempel screenshot/GIF bila ada perubahan UI. -->

## Penggunaan AI (*Vibe Coding*)

<!-- WAJIB diisi bila perubahan dibantu AI. -->

- [ ] Perubahan ini **tidak** menggunakan bantuan AI
- [ ] Perubahan ini **menggunakan** bantuan AI

Jika menggunakan AI, jelaskan:

| Aspek | Keterangan |
|-------|------------|
| Alat AI | contoh: ChatGPT, Copilot, opencode |
| Bagian yang dibantu | contoh: generate komponen form, dokumentasi |
| Ringkasan prompt | contoh: "buat form registrasi dengan validasi kuota" |
| Sudah ditinjau manusia? | Ya / Tidak |
| Penjelasan logika | *Jelaskan singkat bahwa kamu memahami kode yang dihasilkan* |

> **Penting:** Jangan pernah menempelkan token, password, atau data pribadi ke prompt AI maupun ke PR ini.

## Checklist

- [ ] Kode sudah saya uji secara lokal.
- [ ] Build berjalan tanpa error (`npm run build`).
- [ ] Lint/format lolos (`npm run lint`).
- [ ] Acceptance Criteria terkait terpenuhi.
- [ ] Tampilan responsif (desktop & ponsel) bila menyentuh UI.
- [ ] Dokumentasi terkait diperbarui (bila perlu).
- [ ] Tidak ada secret/token/data sensitif yang ikut ter-commit.
- [ ] Sudah ditinjau minimal 1 anggota lain (sesuai kesepakatan tim).

## Catatan untuk Reviewer

<!-- Hal yang ingin ditanyakan/ditegaskan ke reviewer. -->
...
