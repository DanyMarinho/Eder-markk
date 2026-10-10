import React from 'react';

interface BrandLogoProps {
  id: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ id, className = 'h-8 w-auto' }) => {
  switch (id) {
    case 'grupo-koch':
      // Grupo Koch (Komprão Koch Atacadista & SuperKoch) - SC
      return (
        <svg viewBox="0 0 180 50" fill="currentColor" className={className} aria-label="Grupo Koch">
          {/* Crown symbol */}
          <path d="M22 10 L28 22 L22 26 L16 22 Z" opacity="0.9" />
          <path d="M12 14 L16 22 L10 24 L8 18 Z" opacity="0.8" />
          <path d="M32 14 L36 18 L34 24 L28 22 Z" opacity="0.8" />
          <circle cx="22" cy="8" r="2" />
          <circle cx="11" cy="12" r="1.8" />
          <circle cx="33" cy="12" r="1.8" />
          {/* KOCH bold typography */}
          <text x="46" y="30" fontFamily="'Figtree', 'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">
            KOCH
          </text>
          <text x="48" y="42" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="8" letterSpacing="3" opacity="0.65">
            GRUPO SUPERMERCADOS
          </text>
        </svg>
      );

    case 'tigre':
      // Tigre Tubos e Conexões - Joinville SC
      return (
        <svg viewBox="0 0 160 48" fill="currentColor" className={className} aria-label="Tigre">
          {/* Tiger paw / claws emblem */}
          <g transform="translate(4, 8)">
            <ellipse cx="14" cy="22" rx="10" ry="7" />
            <ellipse cx="5" cy="11" rx="3.5" ry="5.5" transform="rotate(-18 5 11)" />
            <ellipse cx="12" cy="7" rx="3.5" ry="6" />
            <ellipse cx="20" cy="8" rx="3.5" ry="6" transform="rotate(10 20 8)" />
            <ellipse cx="26" cy="13" rx="3.2" ry="5" transform="rotate(25 26 13)" />
          </g>
          {/* TIGRE bold wordmark */}
          <text x="42" y="32" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="26" letterSpacing="2">
            TIGRE
          </text>
        </svg>
      );

    case 'docol':
      // Docol Metais Sanitários - Joinville SC
      return (
        <svg viewBox="0 0 160 48" fill="currentColor" className={className} aria-label="Docol">
          <text x="10" y="33" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="28" letterSpacing="4">
            DOCOL
          </text>
          <circle cx="148" cy="18" r="4.5" />
        </svg>
      );

    case 'sicredi':
      // Sicredi - Instituição Financeira Cooperativa
      return (
        <svg viewBox="0 0 170 48" fill="currentColor" className={className} aria-label="Sicredi">
          {/* Sicredi pinwheel / cata-vento */}
          <g transform="translate(6, 6)">
            <path d="M16 4 C16 4 24 10 20 18 C16 14 16 4 16 4 Z" opacity="0.9" />
            <path d="M28 16 C28 16 22 24 14 20 C18 16 28 16 28 16 Z" opacity="0.75" />
            <path d="M16 28 C16 28 8 22 12 14 C16 18 16 28 16 28 Z" opacity="0.9" />
            <path d="M4 16 C4 16 10 8 18 12 C14 16 4 16 4 16 Z" opacity="0.75" />
          </g>
          <text x="42" y="31" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="23" letterSpacing="0.5">
            Sicredi
          </text>
        </svg>
      );

    case 'expogestao':
      // ExpoGestão Joinville - Maior evento de gestão
      return (
        <svg viewBox="0 0 190 48" fill="currentColor" className={className} aria-label="ExpoGestão">
          <text x="4" y="28" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="21" letterSpacing="0.5">
            EXPO<tspan fontWeight="400">GESTÃO</tspan>
          </text>
          <text x="6" y="40" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="3.5" opacity="0.6">
            CONGRESSO & NEGÓCIOS
          </text>
        </svg>
      );

    case 'eccel':
      // Eccel Incorporadora - Imóveis de alto padrão
      return (
        <svg viewBox="0 0 170 48" fill="currentColor" className={className} aria-label="Eccel Incorporadora">
          <g transform="translate(6, 10)">
            <rect x="0" y="0" width="16" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <line x1="5" y1="7" x2="11" y2="7" stroke="currentColor" strokeWidth="2" />
            <line x1="5" y1="13" x2="11" y2="13" stroke="currentColor" strokeWidth="2" />
            <line x1="5" y1="19" x2="11" y2="19" stroke="currentColor" strokeWidth="2" />
          </g>
          <text x="32" y="26" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="19" letterSpacing="3">
            ECCEL
          </text>
          <text x="33" y="38" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="2" opacity="0.6">
            INCORPORADORA
          </text>
        </svg>
      );

    case 'agora-tech':
      // Ágora Tech Park - Joinville SC
      return (
        <svg viewBox="0 0 190 48" fill="currentColor" className={className} aria-label="Ágora Tech Park">
          {/* Hexagon innovation icon */}
          <polygon points="16,6 26,12 26,24 16,30 6,24 6,12" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="16" cy="18" r="3" />
          <text x="34" y="26" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="19" letterSpacing="1">
            ÁGORA
          </text>
          <text x="35" y="37" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="8" letterSpacing="2.5" opacity="0.6">
            TECH PARK JOINVILLE
          </text>
        </svg>
      );

    case 'altenburg':
      // Altenburg - Têxtil SC
      return (
        <svg viewBox="0 0 180 48" fill="currentColor" className={className} aria-label="Altenburg">
          <text x="8" y="28" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="21" letterSpacing="4">
            ALTENBURG
          </text>
          <text x="10" y="39" fontFamily="'Figtree', sans-serif" fontWeight="500" fontSize="7.5" letterSpacing="3" opacity="0.6">
            BEM VIVER EM CASA
          </text>
        </svg>
      );

    case 'drogaria-catarinense':
      // Drogaria Catarinense / Grupo Clamed
      return (
        <svg viewBox="0 0 200 48" fill="currentColor" className={className} aria-label="Drogaria Catarinense">
          {/* Cross emblem */}
          <g transform="translate(6, 10)">
            <rect x="7" y="0" width="8" height="24" rx="2" />
            <rect x="0" y="8" width="22" height="8" rx="2" />
          </g>
          <text x="36" y="23" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="13" letterSpacing="1">
            DROGARIA
          </text>
          <text x="36" y="37" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="15" letterSpacing="1">
            CATARINENSE
          </text>
        </svg>
      );

    case 'sinapro':
      // Sinapro SC - Sindicato das Agências de Propaganda
      return (
        <svg viewBox="0 0 170 48" fill="currentColor" className={className} aria-label="Sinapro SC">
          <text x="6" y="28" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="22" letterSpacing="2">
            SINAPRO
          </text>
          <text x="120" y="28" fontFamily="'Figtree', sans-serif" fontWeight="800" fontSize="14" opacity="0.7">
            /SC
          </text>
          <text x="8" y="39" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="7" letterSpacing="1.5" opacity="0.6">
            AGÊNCIAS DE PROPAGANDA
          </text>
        </svg>
      );

    case 'delicious-fish':
      // Delicious Fish da Amazônia
      return (
        <svg viewBox="0 0 190 48" fill="currentColor" className={className} aria-label="Delicious Fish">
          {/* Fish wave geometry */}
          <g transform="translate(6, 12)">
            <path d="M0 12 C8 4 18 4 26 12 C18 20 8 20 0 12 Z" />
            <polygon points="24,12 32,5 32,19" />
          </g>
          <text x="44" y="25" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">
            DELICIOUS FISH
          </text>
          <text x="45" y="37" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="2" opacity="0.6">
            DA AMAZÔNIA PRO MUNDO
          </text>
        </svg>
      );

    case 'fassa-pneus':
      // Fassa Pneus
      return (
        <svg viewBox="0 0 170 48" fill="currentColor" className={className} aria-label="Fassa Pneus">
          <circle cx="16" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="16" cy="22" r="6" />
          <text x="36" y="27" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="20" letterSpacing="1">
            FASSA
          </text>
          <text x="37" y="38" fontFamily="'Figtree', sans-serif" fontWeight="700" fontSize="8" letterSpacing="3" opacity="0.65">
            PNEUS & FROTAS
          </text>
        </svg>
      );

    case 'machado':
      // Supermercado Machado
      return (
        <svg viewBox="0 0 180 48" fill="currentColor" className={className} aria-label="Supermercado Machado">
          <rect x="6" y="10" width="22" height="22" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M11 27 L11 15 L17 22 L23 15 L23 27" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="36" y="26" fontFamily="'Figtree', sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">
            MACHADO
          </text>
          <text x="37" y="37" fontFamily="'Figtree', sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="2" opacity="0.6">
            SUPERMERCADOS
          </text>
        </svg>
      );

    default:
      return (
        <span className="font-display font-black text-lg tracking-tight uppercase">
          {id}
        </span>
      );
  }
};
