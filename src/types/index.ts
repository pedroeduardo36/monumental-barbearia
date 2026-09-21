import type { LucideIcon } from "lucide-react";
export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  durationMinutes: number;
  price: number;
  description: string;
}
export interface Barber {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}
export interface GalleryItem {
  image: string;
  alt: string;
  caption: string;
}
export interface OpeningHours {
  days: string;
  opensAt: string;
  closesAt: string;
  note: string;
}
export interface ContactInfo {
  phone: string;
  whatsappUrl: string;
  address: string;
  email: string;
  instagram: string;
  bookingUrl: string;
  mapsUrl: string;
}
export interface BookingDetails {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  name: string;
}
export interface BookingProps {
  onBook: (serviceId?: string) => void;
}
export interface CustomerContact {
  name: string;
  email: string;
  phone: string | null;
  message: string;
  consent: boolean;
}
export type FormStatus = "idle" | "loading" | "success" | "error";
