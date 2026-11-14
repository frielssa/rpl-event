# Use Case Diagram — RPL Event

Diagram *use case* menggambarkan interaksi antara **aktor** dan **fungsi sistem** pada aplikasi RPL Event.

## Aktor

| Aktor | Deskripsi |
|-------|-----------|
| **Peserta** | Pengguna yang melihat dan mendaftar acara. |
| **Admin / EO** | Pengguna yang mengelola acara, kuota, dan peserta. |
| **Panitia Lapangan** | Pengguna yang memanfaatkan data peserta untuk *check-in*. |

## Diagram Use Case

```mermaid
flowchart LR
    P((Peserta))
    A((Admin / EO))
    PL((Panitia Lapangan))

    subgraph SYS[Sistem RPL Event]
        UC01([UC-01 Melihat Daftar Acara])
        UC02([UC-02 Melihat Detail Acara])
        UC03([UC-03 Mendaftar Acara])
        UC04([UC-04 Melihat Tiket Saya])
        UC05([UC-05 Membatalkan Pendaftaran])
        UC06([UC-06 Membuat Acara])
        UC07([UC-07 Mengubah Acara])
        UC08([UC-08 Menghapus Acara])
        UC09([UC-09 Mengelola Kuota])
        UC10([UC-10 Melihat Daftar Peserta])
        UC11([UC-11 Mengekspor Data Peserta])
        UC12([UC-12 Melihat Ringkasan Acara])
        UC13([UC-13 Validasi Kuota])
        UC14([UC-14 Generate Kode Tiket])
        UC15([UC-15 Memperbarui Sisa Kuota])
    end

    P --> UC01
    P --> UC02
    P --> UC03
    P --> UC04
    P --> UC05

    A --> UC06
    A --> UC07
    A --> UC08
    A --> UC09
    A --> UC10
    A --> UC11
    A --> UC12

    PL --> UC10
    PL --> UC11

    UC03 -.->|include| UC13
    UC03 -.->|include| UC14
    UC05 -.->|include| UC15
```

## Keterangan Relasi

| Relasi | Arti |
|--------|------|
| `-->` | Asosiasi aktor dengan *use case*. |
| `-.->|include|` | *Use case* yang **wajib** dijalankan sebagai bagian dari *use case* utama. |

- **UC-03 Mendaftar Acara** selalu menyertakan **UC-13 Validasi Kuota** dan **UC-14 Generate Kode Tiket**.
- **UC-05 Membatalkan Pendaftaran** menyertakan **UC-15 Memperbarui Sisa Kuota**.

## Catatan Notasi

Mermaid **tidak menyediakan notasi diagram *use case* UML secara native**. Diagram di atas direpresentasikan dengan `flowchart`:

- **Aktor** digambarkan sebagai node lingkaran `(( ))`.
- ***Use case*** digambarkan sebagai node *stadium* `([ ])`.
- **Batas sistem** digambarkan dengan `subgraph`.

## Keterkaitan

- Konsisten dengan `docs/srs.md` (FR-01…FR-13) dan `docs/elisitasi/user-story.md` (US-01…US-13).
- Skenario rinci tiap *use case*: `docs/uml/skenario-use-case.md`.
- Model data, relasi, dan ERD: `docs/data-model.md`.
- Verifikasi diagram: `docs/uml/verifikasi-diagram.md`.

## Hasil Render (Verifikasi Visual)

![Use Case Diagram](rendered/use-case.svg)
