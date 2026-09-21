import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/images/hero.jpg";
import { Button } from "../components/ui/Button";
import type { BookingProps } from "../types";
export function Hero({ onBook }: BookingProps) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={heroImage}
        alt=""
        fetchPriority="high"
      />
      <div className="hero__shade" />
      <div className="container hero__content">
        <p className="eyebrow">Eixo Monumental · Brasília</p>
        <h1 id="hero-title">
          A Experiência Monumental:
          <br />
          <em>Cuidando do Seu Visual.</em>
        </h1>
        <p>
          Corte, barba e toalha quente no coração da cidade. Atendimento por
          horário marcado, de segunda a sábado.
        </p>
        <Button onClick={() => onBook()}>
          Agendar agora <ArrowUpRight size={15} />
        </Button>
      </div>
      <span className="hero__monogram" aria-hidden="true">
        M
      </span>
    </section>
  );
}
