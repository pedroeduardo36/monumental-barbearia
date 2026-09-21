import { LocationScene } from "../components/ui/LocationScene";
import { ArrowUpRight } from "lucide-react";
import { contact, hours } from "../data/barbeariaData";
export function Location() {
  return (
    <>
      <section className="section location" id="localizacao">
        <div className="container location__grid">
          <LocationScene />
          <div>
            <p className="eyebrow">Nossa localização</p>
            <h2>
              No eixo <em>da cidade</em>
            </h2>
            <h3>Nosso endereço</h3>
            <address>
              SHN Quadra 2, Bloco A, 294,
              <br />
              Asa Norte — Brasília/DF.
            </address>
            <p>
              Entrada pela recepção do hotel. Estacionamento no local e acesso
              direto pela Via N1.
            </p>
            <a
              className="button button--gold"
              href={contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Como chegar <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      <section className="section hours">
        <div className="container hours__grid">
          <div className="clock" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div>
            <p className="eyebrow">Horário de funcionamento</p>
            <h2>
              Quando a <em>casa abre</em>
            </h2>
            <div className="hours__card">
              <strong>{hours.days}</strong>
              <span>
                {hours.opensAt} <i>às</i> {hours.closesAt}
              </span>
            </div>
            <p>{hours.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
