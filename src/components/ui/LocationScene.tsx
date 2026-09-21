import { useState } from "react";
import { MapPin, Pause, Play } from "lucide-react";
import buildingImage from "../../assets/images/manhattan-plaza-aerial.jpg";
export function LocationScene() {
  const [paused, setPaused] = useState(false);
  return (
    <figure
      className={`location-scene ${paused ? "location-scene--paused" : ""}`}
    >
      <div className="location-scene__viewport">
        <img
          className="location-scene__image"
          src={buildingImage}
          alt="Vista elevada do Hotel Manhattan Plaza ao lado do Eixo Monumental, em Brasília"
          loading="lazy"
          width={4000}
          height={2250}
        />
      </div>
      <figcaption className="location-scene__caption">
        <MapPin aria-hidden="true" size={20} />
        <div>
          <strong>Hotel Manhattan Plaza</strong>
          <span>A casa da Monumental · Brasília</span>
        </div>
      </figcaption>
      <button
        className="location-scene__toggle"
        type="button"
        onClick={() => setPaused((current) => !current)}
        aria-label={
          paused
            ? "Reproduzir animação da localização"
            : "Pausar animação da localização"
        }
        aria-pressed={paused}
      >
        {paused ? (
          <Play size={16} aria-hidden="true" />
        ) : (
          <Pause size={16} aria-hidden="true" />
        )}
      </button>
    </figure>
  );
}
