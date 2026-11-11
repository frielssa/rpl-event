# Activity Diagram — Kelola Acara (Admin)

Alur aktivitas **admin mengelola acara**: membuat, mengubah, dan menghapus.

```mermaid
flowchart TD
    S((Mulai)) --> A[Admin membuka dashboard]
    A --> B{Aksi yang dipilih}
    B -- Buat --> C[Isi form acara baru]
    B -- Ubah --> D[Pilih acara dan ubah data]
    B -- Hapus --> E[Pilih acara]
    C --> F{Data valid?}
    D --> F
    F -- Tidak --> G[Tampilkan pesan kesalahan]
    G --> B
    F -- Ya --> H[Simpan acara]
    E --> I{Ada peserta aktif?}
    I -- Ya --> J[Tampilkan peringatan konfirmasi]
    J --> K{Admin yakin?}
    K -- Tidak --> B
    K -- Ya --> L[Hapus acara]
    I -- Tidak --> L
    H --> M[Tampilkan pesan sukses]
    L --> M
    M --> Z((Selesai))
```

## Kebutuhan Terkait

- **FR:** FR-01, FR-10
- **User Story:** US-07, US-08, US-09
- **Use Case:** UC-06, UC-07, UC-08
