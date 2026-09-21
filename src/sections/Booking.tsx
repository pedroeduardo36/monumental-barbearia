import { ArrowUpRight } from "lucide-react";
import { contact, bookingSteps } from "../data/barbeariaData";
import { Button } from "../components/ui/Button";
import type { BookingProps } from "../types";
export function Booking({ onBook }: BookingProps) {
  return (
    <section className="section booking" id="agendar">
      <div className="container booking__inner">
        <header className="section-heading section-heading--center">
          <p className="eyebrow">Marcar horário</p>
          <h2>Seu próximo ritual</h2>
          <em>para agendar seu horário</em>
        </header>
        <Button onClick={() => onBook()}>Agendar no AppBarber</Button>
        <p className="demo-note">
          Escolha seu serviço, profissional e horário diretamente no AppBarber.
        </p>
        <ol>
          {bookingSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <a
          className="button button--gold"
          href={contact.bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Agendar agora <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
