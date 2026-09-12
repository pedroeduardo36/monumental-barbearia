import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, Menu, MessageCircle, Scissors, X } from 'lucide-react';
import { saveCustomerContact } from './supabase';
import './styles.css';

const BOOKING_URL = 'https://sites.appbarber.com.br/monumentalbarbe-m9fd';
const asset = name => `${import.meta.env.BASE_URL}images/${name}`;

const services = [
  { icon: Scissors, title: 'Corte de Cabelo', duration: '45 min', description: 'Tesoura, máquina e navalha. Corte desenhado para o formato do rosto, finalizado com acabamento na nuca e nas laterais.' },
  { icon: MapPin, title: 'Barba e Toalha Quente', duration: '40 min', description: 'Ritual completo: toalha quente, óleo, barbear com navalha, contorno definido e finalização com bálsamo calmante.' },
  { icon: Clock3, title: 'Corte & Barba', duration: '1h 20 min', description: 'Os dois serviços em uma única visita, com o tempo necessário para sair pronto — sem pressa e sem retoque pela metade.' },
];

const gallery = [
  { image: asset('gallery-razor.jpg'), alt: 'Acabamento preciso com navalha', caption: 'Acabamento na navalha' },
  { image: asset('gallery-machine.jpg'), alt: 'Máquina usada durante o corte', caption: 'Precisão em cada detalhe' },
  { image: asset('gallery-beard.jpg'), alt: 'Barba sendo aparada com tesoura', caption: 'Desenho de barba' },
  { image: asset('hero.jpg'), alt: 'Barbeiro atendendo cliente na Monumental', caption: 'Um cliente por vez' },
];

const bookingSteps = [
  'Se ainda não tiver o app, baixe “AppBarber” gratuitamente na App Store ou Google Play.',
  'Abra o app, toque em “Buscar Barbearia”, digite “Monumental Barbearia” e selecione a casa.',
  'Consulte horários, profissionais, preços, endereço e telefone na página da barbearia.',
  'Escolha o serviço, a data e a hora; toque em “Agendar” e confirme. Os lembretes chegam pelo app ou e-mail.',
];

function Brand({ compact = false }) {
  return <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#inicio" aria-label="Monumental Barbearia — início"><img src={asset('logo.png')} alt="Monumental Barbearia" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);
  return <header className="header">
    <nav className="nav container" aria-label="Navegação principal">
      <div className={`nav__links ${open ? 'is-open' : ''}`}>
        <a href="#servicos" onClick={() => setOpen(false)}>Serviços</a>
        <a href="#barbeiros" onClick={() => setOpen(false)}>Barbeiros</a>
        <a href="#localizacao" onClick={() => setOpen(false)}>Localização</a>
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
      </div>
      <Brand compact />
      <a className="button button--outline nav__booking" href="#agendar">Agendar agora</a>
      <button className="nav__toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</button>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="inicio">
    <div className="hero__shade" />
    <div className="container hero__content">
      <p className="eyebrow">Eixo Monumental · Brasília</p>
      <h1>A Experiência Monumental:<br /><em>Cuidando do Seu Visual.</em></h1>
      <p>Corte, barba e toalha quente no coração da cidade. Atendimento por horário marcado, de segunda a sábado.</p>
      <a className="button button--gold" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar agora <ArrowUpRight size={15} /></a>
    </div>
    <span className="hero__monogram" aria-hidden="true">M</span>
  </section>;
}

function Services() {
  return <section className="section services" id="servicos"><div className="container">
    <header className="section-heading section-heading--center"><p className="eyebrow">Serviços</p><h2>O ofício, feito com calma</h2></header>
    <div className="services__grid">{services.map(({ icon: Icon, title, duration, description }) => <article className="service" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p><span>{duration}</span></article>)}</div>
  </div></section>;
}

function About() {
  return <section className="section about" id="barbeiros"><div className="container about__grid">
    <div className="about__copy"><p className="eyebrow">A barbearia</p><h2>Um endereço, <em>um padrão</em></h2><p>A Monumental nasceu de uma ideia simples: no meio de uma cidade que corre, a barbearia deve ser o lugar onde o tempo desacelera. Instalada no Hotel Manhattan Plaza, às margens do Eixo Monumental, a casa recebe quem trabalha, mora e passa pelo centro de Brasília.</p><p>O método é o mesmo desde o primeiro dia: um cliente por vez, horário marcado, ferramentas limpas e conversa quando o cliente quiser.</p><div className="stats"><span><strong>2</strong> barbeiros</span><span><strong>6</strong> dias por semana</span><span><strong>1</strong> cliente por vez</span></div></div>
    <article className="barber"><img src={asset('barber-jp.jpg')} alt="JP, proprietário e barbeiro" /><h3>JP</h3><span>Proprietário & barbeiro</span><p>Fundador da casa. Corte clássico, tesoura e atendimento de sala.</p></article>
    <article className="barber"><img src={asset('barber-leo.jpg')} alt="Leo, barbeiro especialista" /><h3>Leo</h3><span>Barbeiro especialista</span><p>Navalha, desenho de barba e acabamento de precisão.</p></article>
  </div></section>;
}

function Gallery() {
  const [active, setActive] = useState(0);
  const move = direction => setActive(current => (current + direction + gallery.length) % gallery.length);
  return <section className="section proof" aria-labelledby="proof-title"><div className="container">
    <header className="proof__header"><div><p className="eyebrow">Prova de vida</p><h2 id="proof-title">Dentro da casa</h2></div><div className="proof__controls"><button onClick={() => move(-1)} aria-label="Foto anterior"><ArrowLeft /></button><button onClick={() => move(1)} aria-label="Próxima foto"><ArrowRight /></button></div></header>
    <figure className="proof__stage"><img src={gallery[active].image} alt={gallery[active].alt} /><figcaption>{gallery[active].caption}<span>{String(active + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span></figcaption></figure>
    <div className="proof__thumbs">{gallery.map((item, index) => <button className={active === index ? 'is-active' : ''} key={item.image} onClick={() => setActive(index)} aria-label={`Ver foto ${index + 1}: ${item.caption}`}><img src={item.image} alt="" /></button>)}</div>
  </div></section>;
}

function Location() {
  return <><section className="section location" id="localizacao"><div className="container location__grid">
    <div className="map-card" aria-label="Representação da localização"><MapPin /><span>Monumental Barbearia</span><small>Eixo Monumental · SHN Q.1</small></div>
    <div><p className="eyebrow">Nossa localização</p><h2>No eixo <em>da cidade</em></h2><h3>Nosso endereço</h3><address>Eixo Monumental, SHN Q.1,<br />Hotel Manhattan Plaza.</address><p>Entrada pela recepção do hotel. Estacionamento no local e acesso direto pela Via N1.</p><a className="button button--gold" href="https://maps.google.com/?q=Hotel+Manhattan+Plaza+Brasilia" target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={15} /></a></div>
  </div></section>
  <section className="section hours"><div className="container hours__grid"><div className="clock" aria-hidden="true"><i /><i /><i /></div><div><p className="eyebrow">Horário de funcionamento</p><h2>Quando a <em>casa abre</em></h2><div className="hours__card"><strong>Segunda à sábado</strong><span>09<small>h</small>00 <i>às</i> 19<small>h</small>00</span></div><p>Domingos e feriados fechado. Últimos atendimentos iniciam às 18h.</p></div></div></section></>;
}

function Booking() {
  return <section className="section booking" id="agendar"><div className="container booking__inner"><header className="section-heading section-heading--center"><p className="eyebrow">Marcar horário</p><h2>Passo a passo</h2><em>para agendar seu horário</em></header><ol>{bookingSteps.map(step => <li key={step}>{step}</li>)}</ol><a className="button button--gold" href={BOOKING_URL} target="_blank" rel="noreferrer">Agendar agora <ArrowUpRight size={15} /></a></div></section>;
}

function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    if (values.website) return;
    setStatus('loading'); setFeedback('');
    try {
      await saveCustomerContact({ name: values.name.trim(), email: values.email.trim().toLowerCase(), phone: values.phone.trim() || null, message: values.message.trim(), consent: values.consent === 'on' });
      form.reset(); setStatus('success'); setFeedback('Mensagem recebida. Em breve a Monumental entra em contato.');
    } catch {
      setStatus('error'); setFeedback('Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.');
    }
  }
  return <form className="contact-form" onSubmit={submit} aria-busy={status === 'loading'}>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex="-1" autoComplete="off" /></div>
    <label htmlFor="name">Nome</label><input id="name" name="name" minLength="2" maxLength="120" autoComplete="name" required placeholder="Seu nome" />
    <label htmlFor="email">E-mail</label><input id="email" name="email" type="email" maxLength="254" autoComplete="email" required placeholder="voce@exemplo.com" />
    <label htmlFor="phone">Telefone <span>(opcional)</span></label><input id="phone" name="phone" type="tel" maxLength="30" autoComplete="tel" placeholder="(61) 99999-9999" />
    <label htmlFor="message">Mensagem</label><textarea id="message" name="message" minLength="2" maxLength="2000" required rows="3" placeholder="Como podemos ajudar?" />
    <label className="consent"><input name="consent" type="checkbox" required /> <span>Concordo com o uso destes dados para receber o retorno da barbearia.</span></label>
    <button className="button button--dark" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando…' : 'Enviar mensagem'} <ArrowUpRight size={15} /></button>
    <p className={`form-feedback ${status}`} role="status" aria-live="polite">{feedback}</p>
  </form>;
}

function Footer() {
  return <footer className="footer" id="contato"><div className="container footer__grid"><div><Brand /><p className="eyebrow">Endereço</p><address>Eixo Monumental, SHN Q.1,<br />Hotel Manhattan Plaza — Brasília, DF</address><p className="eyebrow footer__label">Funcionamento</p><p>Segunda à sábado, 09h00 às 19h00</p><div className="social"><a href="https://www.instagram.com/monumentalbarbearia/" target="_blank" rel="noreferrer" aria-label="Instagram">IG</a><a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a><a href="mailto:contato@monumentalbarbearia.com.br" aria-label="E-mail"><Mail /></a></div></div><div><p className="eyebrow">Contato</p><h2>Fale com a barbearia</h2><ContactForm /></div></div><div className="container footer__bottom"><span>© 2026 Monumental Barbearia</span><span>Brasília · Eixo Monumental</span></div></footer>;
}

function App() { return <><Header /><main><Hero /><Services /><About /><Gallery /><Location /><Booking /></main><Footer /></>; }

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
