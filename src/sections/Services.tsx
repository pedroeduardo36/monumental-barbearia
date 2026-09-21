import { services, formatPrice } from "../data/barbeariaData";
import { Button } from "../components/ui/Button";
import type { BookingProps } from "../types";
export function Services({ onBook }: BookingProps) {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <header className="section-heading section-heading--center">
          <p className="eyebrow">Serviços</p>
          <h2>O ofício, feito com calma</h2>
        </header>
        <div className="services__grid">
          {services.map(
            ({ id, icon: Icon, title, duration, price, description }) => (
              <article className="service" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="service__meta">
                  <span>{duration}</span>
                  <strong>{formatPrice(price)}</strong>
                </div>
                <Button variant="dark" onClick={() => onBook(id)}>
                  Escolher serviço
                </Button>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
