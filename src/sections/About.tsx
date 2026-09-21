import { barbers } from "../data/barbeariaData";
export function About() {
  return (
    <section className="section about" id="barbeiros">
      <div className="container about__grid">
        <div className="about__copy">
          <p className="eyebrow">A barbearia</p>
          <h2>
            Um endereço, <em>um padrão</em>
          </h2>
          <p>
            A Monumental nasceu de uma ideia simples: no meio de uma cidade que
            corre, a barbearia deve ser o lugar onde o tempo desacelera.
            Instalada no Hotel Manhattan Plaza, às margens do Eixo Monumental, a
            casa recebe quem trabalha, mora e passa pelo centro de Brasília.
          </p>
          <p>
            O método é o mesmo desde o primeiro dia: um cliente por vez, horário
            marcado, ferramentas limpas e conversa quando o cliente quiser.
          </p>
          <div className="stats">
            <span>
              <strong>2</strong> barbeiros
            </span>
            <span>
              <strong>6</strong> dias por semana
            </span>
            <span>
              <strong>1</strong> cliente por vez
            </span>
          </div>
        </div>
        {barbers.map((barber) => (
          <article className="barber" key={barber.id}>
            <img
              src={barber.image}
              alt={`${barber.name}, ${barber.role}`}
              loading="lazy"
              width="480"
              height="615"
            />
            <h3>{barber.name}</h3>
            <span>{barber.role}</span>
            <p>{barber.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
