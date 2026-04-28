import { useRef, useState, useEffect, useMemo, type FC } from 'react';
import iconRealmadrid from '@/assets/img/icons/realmadrid.png';
import iconPesas from '@/assets/img/icons/pesas.png';
import iconFutbol from '@/assets/img/icons/futbol.png';
import iconLeer from '@/assets/img/icons/leer.png';
import iconPadel from '@/assets/img/icons/padel.png';
import iconFamilia from '@/assets/img/icons/familia.png';
import iconCodigo from '@/assets/img/icons/codigo.png';
import iconTech from '@/assets/img/icons/tecnologias.png';
import './PassionsCardStack.scss';

/* ─────────── DATA ─────────── */

interface Passion {
  id: string;
  title: string;
  suit: string;
  desc: string;
  icon: string;
  accentColor?: string;
}

const PASSIONS: Passion[] = [
    {
    id: 'pesas',
    title: 'Gimnasio',
    suit: '🏋️',
    desc: 'El gimnasio es mi reset diario. Entrenar con disciplina me enseña que los resultados vienen del esfuerzo constante, no de la motivación esporádica. Mente sana, código limpio.',
    icon: iconPesas,
    },
    {
        id: 'futbol',
        title: 'Fútbol',
        suit: '⚽',
        desc: 'El fútbol es pasión, estrategia y trabajo en equipo. Desde jugarlo hasta analizarlo tácticamente, este deporte me enseña que los grandes logros siempre son colectivos.',
        icon: iconFutbol,
    },
    {
        id: 'realmadrid',
        title: 'Real Madrid',
        suit: '⚽',
        desc: 'Madridista desde la cuna. El Real Madrid no es solo fútbol, es una filosofía de vida: nunca rendirse, siempre competir al máximo nivel. ¡Hala Madrid y nada más!',
        icon: iconRealmadrid,
        accentColor: '#fbbf24',
    },
    {
        id: 'codigo',
        title: 'Código',
        suit: '⌨️',
        desc: 'Programar es mi forma de crear impacto. Desde arquitecturas frontend complejas hasta micro-interacciones de nivel Awwwards, cada línea de código resuelve problemas reales con elegancia.',
        icon: iconCodigo,
    },
  
  
  {
    id: 'padel',
    title: 'Pádel',
    suit: '🎾',
    desc: 'El pádel es mi deporte social favorito. Combina reflejos, estrategia y diversión. Cada partido es una oportunidad de desconectar y competir sanamente.',
    icon: iconPadel,
  },
  {
    id: 'tech',
    title: 'Tecnología',
    suit: '🤖',
    desc: 'La IA está redefiniendo todo. Exploro activamente modelos de lenguaje, generación de código y automatización para potenciar mi productividad y crear herramientas inteligentes.',
    icon: iconTech,
  },
  {
    id: 'familia',
    title: 'Familia',
    suit: '❤️',
    desc: 'La familia es mi pilar. Todo lo que construyo tiene sentido porque lo comparto con las personas que más quiero. Son mi motivación y mi refugio.',
    icon: iconFamilia,
  },
  {
    id: 'leer',
    title: 'Lectura',
    suit: '📖',
    desc: 'La lectura es mi puerta a otros mundos. Devoro libros de desarrollo personal, tecnología, historia y ciencia ficción. Leer me mantiene en constante evolución.',
    icon: iconLeer,
  },
];

const CARD_COUNT = PASSIONS.length;

/* ─────────── COMPONENT ─────────── */

const PassionsCardStack: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dockVisible, setDockVisible] = useState(false);
  const rafRef = useRef(0);

  /* — Show dock only when the scroll area is in view — */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setDockVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* — Detect active card via scroll position — */
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const cards = cardRefs.current;
        // Find the last card whose top has scrolled past the viewport top
        // (i.e. the topmost "stuck" card in the sticky stack)
        let active = 0;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          if (!card) continue;
          const rect = card.getBoundingClientRect();
          // Card is stuck or above its sticky position when its top
          // is near the top of the viewport. Use a generous threshold.
          if (rect.top <= window.innerHeight * 0.35) {
            active = i;
          }
        }
        setActiveIndex((prev) => (prev !== active ? active : prev));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const activePassion = useMemo(() => PASSIONS[activeIndex], [activeIndex]);

  return (
    <div className="card-stack" ref={sectionRef} style={{ '--card-count': CARD_COUNT } as React.CSSProperties}>
      <div className="card-stack__header">
        <p className="card-stack__label">Pasiones</p>
        <h2 className="card-stack__title">Lo que me define</h2>
      </div>

      <div className="card-stack__scroll" ref={scrollRef}>
        {PASSIONS.map((p, i) => (
          <div
            key={p.id}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`card-stack__card${activeIndex === i ? ' card-stack__card--active' : ''}`}
            data-index={i}
            style={{
              '--i': i,
              '--accent': p.accentColor ?? 'var(--color-accent)',
            } as React.CSSProperties}
          >
            {/* Corner top-left */}
            <span className="card-stack__corner card-stack__corner--tl">
              <span className="card-stack__corner-suit">{p.suit}</span>
              <span className="card-stack__corner-letter">{p.title[0]}</span>
            </span>

            {/* Center icon */}
            <div className="card-stack__center">
              <img src={p.icon} alt={p.title} className="card-stack__icon" loading="lazy" />
            </div>

            {/* Corner bottom-right (inverted) */}
            <span className="card-stack__corner card-stack__corner--br">
              <span className="card-stack__corner-suit">{p.suit}</span>
              <span className="card-stack__corner-letter">{p.title[0]}</span>
            </span>
          </div>
        ))}
        {/* Spacer so the last card can reach its sticky position */}
        <div className="card-stack__spacer" />
      </div>

      {/* Dock — fixed on mobile, sticky on desktop */}
      {dockVisible && (
        <div className="card-stack__dock">
          <div className="card-stack__dock-inner">
            <span className="card-stack__dock-badge">
              {activePassion.suit} {activePassion.title}
            </span>
            <p className="card-stack__dock-text">{activePassion.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassionsCardStack;
