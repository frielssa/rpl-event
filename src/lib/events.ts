import type { Event } from "@/data/types";

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

const timeFormatter = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Jakarta",
});

const weekdayFormatter = new Intl.DateTimeFormat("id-ID", {
  weekday: "short",
  timeZone: "Asia/Jakarta",
});

const dayFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  timeZone: "Asia/Jakarta",
});

const monthFormatter = new Intl.DateTimeFormat("id-ID", {
  month: "short",
  timeZone: "Asia/Jakarta",
});

const codeFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  timeZone: "Asia/Jakarta",
});

/** Bagian tanggal yang dipakai pada stub tiket. */
export interface EventDateParts {
  weekday: string;
  day: string;
  month: string;
}

/** Menghitung sisa kuota acara, tidak pernah bernilai negatif. */
export function getRemainingQuota(event: Event): number {
  return Math.max(event.quota - event.ticketsSold, 0);
}

/** Menghitung persentase keterisian acara (0–100). */
export function getOccupancyPercentage(event: Event): number {
  if (event.quota <= 0) {
    return 0;
  }

  return Math.min(Math.round((event.ticketsSold / event.quota) * 100), 100);
}

/** Memeriksa apakah kuota acara sudah habis. */
export function isEventFull(event: Event): boolean {
  return getRemainingQuota(event) === 0;
}

/**
 * Mengambil acara yang akan datang, diurutkan dari jadwal paling dekat.
 * Status `done`/`ongoing` tidak ditampilkan, sesuai BR-07 pada `docs/srs.md`.
 * Nilai `status` menjadi sumber kebenaran agar hasil render tetap stabil.
 */
export function getUpcomingEvents(eventList: Event[]): Event[] {
  return eventList
    .filter((event) => event.status === "upcoming")
    .sort(
      (first, second) =>
        new Date(first.date).getTime() - new Date(second.date).getTime(),
    );
}

/** Memformat tanggal dan waktu acara ke gaya bahasa Indonesia. */
export function formatEventDate(date: string): string {
  const parsedDate = new Date(date);

  return `${dateFormatter.format(parsedDate)}, ${timeFormatter.format(parsedDate)} WIB`;
}

/** Mengambil hari, tanggal, dan bulan singkat untuk stub tiket. */
export function getEventDateParts(date: string): EventDateParts {
  const parsedDate = new Date(date);

  return {
    weekday: weekdayFormatter.format(parsedDate),
    day: dayFormatter.format(parsedDate),
    month: monthFormatter.format(parsedDate),
  };
}

/** Kode dekoratif pada tiket, mis. `RPL-2111` untuk 21 November. */
export function getEventCode(date: string): string {
  const parsedDate = new Date(date);

  return `RPL-${codeFormatter.format(parsedDate).replaceAll("/", "")}`;
}
