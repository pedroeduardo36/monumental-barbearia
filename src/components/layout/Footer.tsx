import { Camera, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Brand } from "./Brand";
import { contact, hours } from "../../data/barbeariaData";
export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer__grid">
        <div>
          <Brand />
          <p className="eyebrow">Endereço</p>
          <address>{contact.address}</address>
          <p className="eyebrow footer__label">Funcionamento</p>
          <p>{hours.note}</p>
          <div className="social">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Monumental"
            >
              <Camera aria-hidden="true" />
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp da Monumental"
            >
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Fale com a barbearia</h2>
          <p>
            Para tirar dúvidas ou falar com nossa equipe, entre em contato pelo
            WhatsApp.
          </p>
          <a className="contact-phone" href="tel:+5561998743605">
            <Phone size={20} aria-hidden="true" />
            {contact.phone}
          </a>
          <a
            className="button button--dark"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Falar pelo WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Monumental Barbearia</span>
        <span>Brasília · Eixo Monumental</span>
      </div>
    </footer>
  );
}
