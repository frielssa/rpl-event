# Activity Diagram — Ekspor Data Peserta

Alur aktivitas **admin/panitia mengekspor daftar peserta** ke CSV.

```mermaid
flowchart TD
    S((Mulai)) --> A[Admin membuka daftar peserta acara]
    A --> B[Atur filter status opsional]
    B -->     C{Klik Ekspor CSV?}
    C -- Tidak --> Z((Selesai))
    C -- Ya --> D[Sistem menyusun data sesuai filter]
    D --> E{Ada data?}
    E -- Tidak --> F[Tampilkan Tidak ada data]
    F --> Z
    E -- Ya --> G[Generate file CSV]
    G --> H[Unduh file CSV]
    H --> Z
```

## Kebutuhan Terkait

- **FR:** FR-12
- **User Story:** US-11
- **Use Case:** UC-11

## Hasil Render (Verifikasi Visual)

![Activity Diagram Ekspor Data Peserta](rendered/activity-ekspor-peserta.svg)
