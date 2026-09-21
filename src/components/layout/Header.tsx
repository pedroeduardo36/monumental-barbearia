import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand } from "./Brand";
import { Button } from "../ui/Button";
import { useScrolled } from "../../hooks/useScrolled";
import type { BookingProps } from "../../types";
export function Header({ onBook }: BookingProps) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <nav className="nav container" aria-label="Navegação principal">
        <div
          id="mobile-navigation"
          className={`nav__links ${open ? "is-open" : ""}`}
        >
          <a href="#servicos" onClick={() => setOpen(false)}>
            Serviços
          </a>
          <a href="#barbeiros" onClick={() => setOpen(false)}>
            Barbeiros
          </a>
          <a href="#localizacao" onClick={() => setOpen(false)}>
            Localização
          </a>
          <a href="#contato" onClick={() => setOpen(false)}>
            Contato
          </a>
        </div>
        <Brand compact />
        <Button
          variant="outline"
          className="nav__booking"
          onClick={() => onBook()}
        >
          Agendar agora
        </Button>
        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
