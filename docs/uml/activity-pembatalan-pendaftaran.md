# Activity Diagram — Pembatalan Pendaftaran

Alur aktivitas **peserta membatalkan pendaftaran** dan pengembalian kuota.

```mermaid
flowchart TD
    S((Mulai)) --> A[Peserta membuka "Tiket Saya"]
    A --> B[Pilih tiket aktif]
    B --> C{Acara sudah berlangsung?}
    C -- Ya --> D[Tampilkan "Tidak dapat dibatalkan"]
    D --> Z((Selesai))
    C -- Tidak --> E[Minta konfirmasi pembatalan]
    E --> F{Peserta yakin?}
    F -- Tidak --> Z
    F -- Ya --> G[Ubah status pendaftaran menjadi "dibatalkan"]
    G --> H[Tambah kembali sisa kuota]
    H --> I[Tampilkan pesan berhasil]
    I --> Z
```

## Kebutuhan Terkait

- **FR:** FR-08
- **User Story:** US-05
- **Use Case:** UC-05 (beserta UC-15)
