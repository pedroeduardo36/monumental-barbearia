import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gallery } from "../data/barbeariaData";
export function Gallery() {
  const [active, setActive] = useState(0);
  const move = (direction: number) =>
    setActive(
      (current) => (current + direction + gallery.length) % gallery.length,
    );
  return (
    <section className="section proof" aria-labelledby="proof-title">
      <div className="container">
        <header className="proof__header">
          <div>
            <p className="eyebrow">Prova de vida</p>
            <h2 id="proof-title">Dentro da casa</h2>
          </div>
          <div className="proof__controls">
            <button onClick={() => move(-1)} aria-label="Foto anterior">
              <ArrowLeft />
            </button>
            <button onClick={() => move(1)} aria-label="Próxima foto">
              <ArrowRight />
            </button>
          </div>
        </header>
        <figure className="proof__stage">
          <img src={gallery[active].image} alt={gallery[active].alt} />
          <figcaption aria-live="polite" aria-atomic="true">
            {gallery[active].caption}
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>
          </figcaption>
        </figure>
        <div className="proof__thumbs">
          {gallery.map((item, index) => (
            <button
              className={active === index ? "is-active" : ""}
              key={item.image}
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              aria-label={`Ver foto ${index + 1}: ${item.caption}`}
            >
              <img src={item.image} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
