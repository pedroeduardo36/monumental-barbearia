import { Scissors, Droplets, Sparkles } from "lucide-react";
import type {
  ServiceItem,
  Barber,
  GalleryItem,
  OpeningHours,
  ContactInfo,
} from "../types";
import hero from "../assets/images/hero.jpg";
import gallery_razor from "../assets/images/gallery-razor-clean.png";
import gallery_machine from "../assets/images/gallery-machine-clean.png";
import gallery_beard from "../assets/images/gallery-beard.jpg";
import barber_jp from "../assets/images/barber-jp.jpg";
import barber_leo from "../assets/images/barber-leo.jpg";
export const services: readonly ServiceItem[] = [
  {
    id: "service-1",
    title: "Acabamento do Cabelo",
    price: 25,
    durationMinutes: 15,
    duration: "15 min",
    icon: Scissors,
    description: "Acabamento para renovar o contorno do cabelo.",
  },
  {
    id: "service-2",
    title: "Barba",
    price: 60,
    durationMinutes: 40,
    duration: "40 min",
    icon: Droplets,
    description: "Cuidado e definição da barba.",
  },
  {
    id: "service-3",
    title: "Camuflagem",
    price: 50,
    durationMinutes: 30,
    duration: "30 min",
    icon: Sparkles,
    description: "Camuflagem para o visual dos cabelos.",
  },
  {
    id: "service-4",
    title: "Corte",
    price: 65,
    durationMinutes: 40,
    duration: "40 min",
    icon: Scissors,
    description: "Corte de cabelo com atenção ao seu estilo.",
  },
  {
    id: "service-5",
    title: "Corte e Barba",
    price: 125,
    durationMinutes: 60,
    duration: "60 min",
    icon: Scissors,
    description: "Corte e cuidado da barba em um único atendimento.",
  },
  {
    id: "service-6",
    title: "Corte Longo",
    price: 120,
    durationMinutes: 80,
    duration: "80 min",
    icon: Scissors,
    description: "Atendimento dedicado ao corte de cabelos longos.",
  },
  {
    id: "service-7",
    title: "Corte Maquina Unica",
    price: 45,
    durationMinutes: 30,
    duration: "30 min",
    icon: Scissors,
    description: "Corte com máquina em uma única altura.",
  },
  {
    id: "service-8",
    title: "Depilação Nariz",
    price: 35,
    durationMinutes: 30,
    duration: "30 min",
    icon: Sparkles,
    description: "Remoção dos pelos do nariz.",
  },
  {
    id: "service-9",
    title: "Depilação Orelha",
    price: 35,
    durationMinutes: 30,
    duration: "30 min",
    icon: Sparkles,
    description: "Remoção dos pelos da orelha.",
  },
  {
    id: "service-10",
    title: "Hidratação",
    price: 50,
    durationMinutes: 15,
    duration: "15 min",
    icon: Droplets,
    description: "Cuidado para hidratar os cabelos.",
  },
  {
    id: "service-11",
    title: "Penteado",
    price: 20,
    durationMinutes: 40,
    duration: "40 min",
    icon: Sparkles,
    description: "Finalização e modelagem do penteado.",
  },
  {
    id: "service-12",
    title: "Selagem/Progressiva/Botox",
    price: 120,
    durationMinutes: 60,
    duration: "60 min",
    icon: Droplets,
    description: "Tratamento capilar; escolha a opção com o profissional.",
  },
  {
    id: "service-13",
    title: "Sobrancelha Com Navalha",
    price: 35,
    durationMinutes: 15,
    duration: "15 min",
    icon: Scissors,
    description: "Acabamento das sobrancelhas com navalha.",
  },
];

export const gallery: readonly GalleryItem[] = [
  {
    image: gallery_razor,
    alt: "Acabamento preciso com navalha",
    caption: "Acabamento na navalha",
  },
  {
    image: gallery_machine,
    alt: "Máquina usada durante o corte",
    caption: "Precisão em cada detalhe",
  },
  {
    image: gallery_beard,
    alt: "Barba sendo aparada com tesoura",
    caption: "Desenho de barba",
  },
  {
    image: hero,
    alt: "Barbeiro atendendo cliente na Monumental",
    caption: "Um cliente por vez",
  },
];

export const bookingSteps = [
  "Se ainda não tiver o app, baixe “AppBarber” gratuitamente na App Store ou Google Play.",
  "Abra o app, toque em “Buscar Barbearia”, digite “Monumental Barbearia” e selecione a casa.",
  "Consulte horários, profissionais, preços, endereço e telefone na página da barbearia.",
  "Escolha o serviço, a data e a hora; toque em “Agendar” e confirme. Os lembretes chegam pelo app ou e-mail.",
];

export const barbers: readonly Barber[] = [
  {
    id: "jp",
    name: "JP",
    role: "Proprietário & barbeiro",
    description:
      "Fundador da casa. Corte clássico, tesoura e atendimento de sala.",
    image: barber_jp,
  },
  {
    id: "leo",
    name: "Leo",
    role: "Barbeiro especialista",
    description: "Navalha, desenho de barba e acabamento de precisão.",
    image: barber_leo,
  },
];
export const hours: OpeningHours = {
  days: "Segunda a sábado",
  opensAt: "09h00",
  closesAt: "19h00",
  note: "Atendimento das 09h às 12h e das 13h às 19h, de segunda a sábado. Consulte os horários disponíveis no AppBarber.",
};
export const contact: ContactInfo = {
  address:
    "SHN Quadra 2, Bloco A, 294 — Asa Norte, Brasília/DF · CEP 70702-900",
  email: "contato@monumentalbarbearia.com.br",
  instagram: "https://www.instagram.com/monumentalbarbearia/",
  bookingUrl: "https://sites.appbarber.com.br/monumentalbarbe-m9fd",
  phone: "(61) 99874-3605",
  whatsappUrl: "https://wa.me/5561998743605",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=-15.79074383%2C-47.88608932",
};
export const barbeariaData = {
  services,
  barbers,
  gallery,
  hours,
  contact,
};
export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);
