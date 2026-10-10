import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroExitProps {
  onOpenMenu: () => void;
  onOpenIntakeModal: () => void;
}

export const HeroExit: React.FC<HeroExitProps> = ({ onOpenMenu, onOpenIntakeModal }) => {
  return (
    <>
      {/* =========================================================================
          S-HEADER (Transparent header positioned over hero, identical to Exit.ag)
         ========================================================================= */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 sm:px-12 py-8 flex items-center justify-between">
        {/* Logo Markk in vibrant Exit Orange (#FF5A23 / #FD3B31) */}
        <a
          href="#"
          className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-[#ff5a23] hover:opacity-90 transition-opacity select-none"
        >
          MARKK
        </a>

        {/* Minimalist 3-line white hamburger icon in rounded button (matches Exit.ag screenshot) */}
        <button
          onClick={onOpenMenu}
          className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-colors cursor-pointer group"
          aria-label="Abrir menu"
        >
          <span className="w-6 h-0.5 bg-white group-hover:scale-x-110 transition-transform" />
          <span className="w-6 h-0.5 bg-white group-hover:scale-x-110 transition-transform" />
          <span className="w-6 h-0.5 bg-white group-hover:scale-x-110 transition-transform" />
        </button>
      </header>

      {/* =========================================================================
          S-VIDEO (Hero section with 3D ribbons showreel video from Exit.ag)
         ========================================================================= */}
      <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
        {/* Vimeo Background Video (identical to Exit.ag: 1119099653 with animated typography) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1119099653?background=1&dnt=1&byline=0&portrait=0&title=0&mute=1&autoplay=1&loop=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] object-cover scale-105"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Markk Reel"
          />
        </div>

        {/* Subtle Bottom Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs font-mono uppercase tracking-widest flex items-center gap-2 pointer-events-none">
          <span>ROLE PARA EXPLORAR</span>
        </div>
      </section>

      {/* =========================================================================
          S-ABOUT (Exact glowing orange gradient section from Exit.ag screenshot)
         ========================================================================= */}
      <section
        id="sobre"
        className="relative py-20 sm:py-28 text-white"
        style={{
          background: 'linear-gradient(120.88deg, #fd3b31 16.57%, #ff771f 118.3%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          {/* Main Manifesto Copy (matches Exit.ag visual with Markk & Éder DNA) */}
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold">
              MARCAS, MENTES E NEGÓCIOS · ATRAIA MAIS CLIENTES E VENDA MAIS
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              A gente acredita que a mesma rota de sempre não vai levar sua marca ao lugar que ela precisa. Por isso questionamos o óbvio e provocamos novos caminhos.
            </p>
            <p className="text-lg sm:text-xl font-normal opacity-95 pt-2">
              Com a metodologia de Éder Cavalheiro e da Markk, unimos visão de negócio, aceleração comercial e direção criativa para transformar empresas em marcas líderes que vendem mais.
            </p>
          </div>

          {/* Button pill "Conheça mais sobre nós" on the right */}
          <div className="shrink-0">
            <a
              href="#gps"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white rounded-full transition-colors shadow-md"
            >
              <span>Conheça mais sobre nós</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
