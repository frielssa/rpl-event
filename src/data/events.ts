import type { Event } from "./types";

/**
 * Mock data acara untuk tahap awal (belum memakai basis data).
 * Tanggal memakai zona waktu Asia/Jakarta (WIB).
 */
export const events: Event[] = [
  {
    id: "evt-seminar-nasional-2026",
    name: "Seminar Nasional Teknologi 2026",
    description:
      "Diskusi bersama praktisi industri tentang tren kecerdasan buatan, keamanan siber, dan masa depan rekayasa perangkat lunak di Indonesia.",
    location: "Auditorium Kampus Utama, Bandung",
    date: "2026-11-21T08:00:00+07:00",
    quota: 200,
    ticketsSold: 168,
    status: "upcoming",
  },
  {
    id: "evt-workshop-uiux-2026",
    name: "Workshop UI/UX untuk Pemula",
    description:
      "Belajar dasar desain antarmuka dan pengalaman pengguna, mulai dari riset pengguna, wireframe, hingga prototipe interaktif dengan Figma.",
    location: "Lab Komputer 3, Gedung TIK",
    date: "2026-11-28T09:00:00+07:00",
    quota: 40,
    ticketsSold: 40,
    status: "upcoming",
  },
  {
    id: "evt-hackathon-rpl-2026",
    name: "Hackathon RPL 2026",
    description:
      "Kompetisi 24 jam untuk membangun solusi digital bagi masalah nyata di kampus. Terbuka untuk mahasiswa dari seluruh program studi.",
    location: "Co-working Space Inkubator, Jakarta",
    date: "2026-12-05T07:30:00+07:00",
    quota: 100,
    ticketsSold: 76,
    status: "upcoming",
  },
  {
    id: "evt-festival-musik-kampus",
    name: "Festival Musik Kampus",
    description:
      "Malam penuh musik dari band mahasiswa dan bintang tamu nasional. Bawa temanmu dan nikmati food truck serta bazar komunitas.",
    location: "Lapangan Utama Kampus, Surabaya",
    date: "2026-12-19T16:00:00+07:00",
    quota: 500,
    ticketsSold: 312,
    status: "upcoming",
  },
  {
    id: "evt-career-talk-it",
    name: "Career Talk: Siap Kerja di Bidang IT",
    description:
      "Sesi berbagi bersama alumni tentang cara menyusun portofolio, menghadapi wawancara teknis, dan memilih jalur karier di industri teknologi.",
    location: "Auditorium Perpustakaan Pusat, Yogyakarta",
    date: "2027-01-16T13:00:00+07:00",
    quota: 150,
    ticketsSold: 54,
    status: "upcoming",
  },
  {
    id: "evt-pelatihan-git",
    name: "Pelatihan Git & GitHub untuk Pemula",
    description:
      "Pelatihan daring tentang dasar version control: commit, branch, pull request, dan kolaborasi tim menggunakan GitHub.",
    location: "Ruang Kelas Daring (Zoom)",
    date: "2026-11-11T13:00:00+07:00",
    quota: 60,
    ticketsSold: 48,
    status: "ongoing",
  },
  {
    id: "evt-rpl-gathering-2026",
    name: "RPL Gathering 2026",
    description:
      "Acara temu alumni dan mahasiswa Rekayasa Perangkat Lunak untuk berbagi pengalaman, membangun jaringan, dan merayakan pencapaian bersama.",
    location: "Gedung Serba Guna Kampus",
    date: "2026-10-10T10:00:00+07:00",
    quota: 120,
    ticketsSold: 120,
    status: "done",
  },
];
