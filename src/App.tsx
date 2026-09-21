import { CalendarDays } from "lucide-react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { About } from "./sections/About";
import { Gallery } from "./sections/Gallery";
import { Location } from "./sections/Location";
import { Booking } from "./sections/Booking";
import { contact } from "./data/barbeariaData";
export default function App() {
  const openBooking = () => window.location.assign(contact.bookingUrl);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header onBook={openBooking} />
      <main id="main-content" tabIndex={-1}>
        <Hero onBook={openBooking} />
        <Services onBook={openBooking} />
        <About />
        <Gallery />
        <Location />
        <Booking onBook={openBooking} />
      </main>
      <Footer />
      <button
        className="floating-booking"
        type="button"
        onClick={() => openBooking()}
        aria-label="Agendar no AppBarber"
      >
        <CalendarDays aria-hidden="true" />
        <span>Agendar</span>
      </button>
    </>
  );
}
