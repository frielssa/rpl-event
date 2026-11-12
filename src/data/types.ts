/**
 * Model data domain RPL Event.
 * Nama field mengikuti konvensi kode (bahasa Inggris), sedangkan istilah
 * bisnisnya mengacu pada kamus data di `docs/srs.md` bagian 6.
 */

/** Status penyelenggaraan acara. */
export type EventStatus = "upcoming" | "ongoing" | "done";

/** Status pendaftaran peserta. */
export type RegistrationStatus = "active" | "cancelled";

/** Peran pengguna pada aplikasi. */
export type UserRole = "participant" | "admin";

/** Acara yang dapat dilihat dan diikuti peserta. */
export interface Event {
  /** Identitas unik acara. */
  id: string;
  /** Nama acara. */
  name: string;
  /** Deskripsi lengkap acara. */
  description: string;
  /** Lokasi acara (offline atau tautan daring). */
  location: string;
  /** Tanggal & waktu pelaksanaan dalam format ISO 8601. */
  date: string;
  /** Kapasitas maksimum peserta (lebih dari 0). */
  quota: number;
  /** Jumlah pendaftar aktif saat ini. */
  ticketsSold: number;
  /** Status penyelenggaraan acara. */
  status: EventStatus;
}

/** Pengguna aplikasi, baik peserta maupun admin. */
export interface User {
  /** Identitas unik pengguna. */
  id: string;
  /** Nama lengkap pengguna. */
  name: string;
  /** Email valid dan unik. */
  email: string;
  /** Peran pengguna di aplikasi. */
  role: UserRole;
}

/** Data pendaftaran peserta pada suatu acara. */
export interface Registration {
  /** Identitas unik pendaftaran. */
  id: string;
  /** Referensi ke `Event.id`. */
  eventId: string;
  /** Referensi ke `User.id`. */
  userId: string;
  /** Nama peserta saat mendaftar. */
  participantName: string;
  /** Email peserta saat mendaftar. */
  email: string;
  /** Nomor HP peserta. */
  phoneNumber: string;
  /** Kode unik sebagai bukti pendaftaran. */
  ticketCode: string;
  /** Status pendaftaran. */
  status: RegistrationStatus;
  /** Waktu pendaftaran dalam format ISO 8601. */
  registeredAt: string;
}
