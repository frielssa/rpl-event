# Activity Diagram — Pendaftaran Acara

Alur aktivitas **peserta mendaftar acara** hingga memperoleh kode tiket.

```mermaid
flowchart TD
    S((Mulai)) --> A[Peserta membuka daftar acara]
    A --> B[Pilih acara dan lihat detail]
    B --> C[Isi form: nama, email, no HP]
    C --> D{Input valid?}
    D -- Tidak --> E[Tampilkan pesan kesalahan]
    E --> C
    D -- Ya --> F{Kuota tersedia?}
    F -- Tidak --> G[Tampilkan "Kuota penuh"]
    G --> Z((Selesai))
    F -- Ya --> H{Email sudah terdaftar di acara ini?}
    H -- Ya --> I[Tampilkan "Sudah terdaftar"]
    I --> Z
    H -- Tidak --> J[Simpan data pendaftaran]
    J --> K[Generate kode tiket unik]
    K --> L[Kurangi sisa kuota]
    L --> M[Tampilkan konfirmasi dan kode tiket]
    M --> Z
```

## Keterangan

| Elemen | Representasi |
|--------|--------------|
| `(( ))` | Titik awal / akhir aktivitas |
| `[ ]` | Aktivitas / aksi |
| `{ }` | Keputusan (*decision*) |

## Kebutuhan Terkait

- **FR:** FR-04, FR-05, FR-06, FR-07
- **User Story:** US-03, US-04
- **Use Case:** UC-03 (beserta UC-13 & UC-14)
