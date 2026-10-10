import React, { useState } from 'react';
import { ArrowUpRight, Play, Volume2, VolumeX, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { MARKK_CONTACT, METRICS } from '../data/markkData';

interface HeroExitProps {
  onOpenMenu: () => void;
  onOpenIntakeModal: () => void;
}

export const HeroExit: React.FC<HeroExitProps> = ({ onOpenMenu, onOpenIntakeModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      {/* =========================================================================
          S-HEADER (Transparent header positioned over hero, identical to Exit.ag)
         ========================================================================= */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 sm:px-12 py-7 sm:py-9 flex items-center justify-between">
        {/* Left: Logo Markk in bold clean white with vibrant dot */}
        <a
          href="#"
          className="flex items-baseline gap-0.5 text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tighter text-white hover:opacity-90 transition-opacity select-none group"
          aria-label="Agência Markk - Início"
        >
          <span>MARKK</span>
          <span className="text-[#ff5a23] group-hover:scale-125 transition-transform">.</span>
        </a>

        {/* Center: Clean desktop navigation links in lowercase / exit style */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-white/80 tracking-wide">
          <a href="#gps" className="hover:text-white transition-colors">
            GPS Markk
          </a>
          <a href="#taranua" className="hover:text-white transition-colors">
            portfólio
          </a>
          <a href="#clientes" className="hover:text-white transition-colors">
            clientes
          </a>
          <a href="#ecossistema-parceiros" className="hover:text-white transition-colors">
            parceiros & mídia
          </a>
          <a href="#fundador" className="hover:text-white transition-colors">
            nós
          </a>
        </nav>

        {/* Right: Quick CTA + Minimalist 3-line hamburger menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenIntakeModal}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white transition-all rounded-full cursor-pointer shadow-sm active:scale-95"
          >
            <span>Seja marca forte</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenMenu}
            className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors cursor-pointer flex items-center gap-3 text-white border border-white/20 group"
            aria-label="Abrir menu"
          >
            <span className="text-xs font-mono uppercase tracking-widest font-bold hidden sm:inline">
              ABRIR
            </span>
            <div className="w-6 flex flex-col items-center justify-center gap-1">
              <span className="w-5 h-0.5 bg-white group-hover:scale-x-110 transition-transform" />
              <span className="w-5 h-0.5 bg-white group-hover:scale-x-110 transition-transform" />
              <span className="w-5 h-0.5 bg-white group-hover:scale-x-110 transition-transform" />
            </div>
          </button>
        </div>
      </header>

      {/* =========================================================================
          S-VIDEO (Hero section with showreel video from Exit.ag + dynamic fallback)
         ========================================================================= */}
      <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
        {/* Ambient Animated Mesh & Glow Fallback */}
        <div className="absolute inset-0 bg-[#0d0d0d]">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff5a23]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#fd3b31]/15 rounded-full blur-[100px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Vimeo Background Video (Exit.ag official showreel) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/1119099653?background=1&dnt=1&byline=0&portrait=0&title=0&mute=${isMuted ? '1' : '0'}&autoplay=1&loop=1`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] object-cover scale-105 opacity-85"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Markk Showreel"
          />
        </div>

        {/* Ambient Dark Overlay to protect contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Subtle Bottom Indicators */}
        <div className="absolute bottom-8 left-6 sm:left-12 z-10 flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xs border border-white/20 cursor-pointer"
            aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <span className="text-white/60 text-xs font-mono uppercase tracking-wider hidden sm:inline">
            SHOWREEL MARKK 2026
          </span>
        </div>

        <div className="absolute bottom-8 right-6 sm:right-12 z-10 text-white/60 text-xs font-mono uppercase tracking-widest">
          JOINVILLE / SC
        </div>
      </section>

      {/* =========================================================================
          S-ABOUT (Exact glowing orange gradient section from Exit.ag)
         ========================================================================= */}
      <section
        id="sobre"
        className="relative py-24 sm:py-32 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(120.88deg, #fd3b31 16.57%, #ff771f 118.3%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          {/* Main Manifesto Copy (matches Exit.ag visual with Markk & Éder DNA) */}
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-white/90 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>O MANIFESTO MARKK · ATRAIA MAIS CLIENTES E VENDA MAIS</span>
            </div>

            <p className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.15] text-balance">
              A gente acredita que a mesma rota de sempre não vai levar sua marca ao lugar que ela precisa. Por isso questionamos o óbvio e provocamos novos caminhos.
            </p>

            <p className="text-lg sm:text-2xl font-normal text-white/95 leading-relaxed">
              Com a metodologia de Éder Cavalheiro e da Markk, unimos visão de negócio, inteligência de marca e redes sociais com método para transformar empresas em líderes de mercado.
            </p>
          </div>

          {/* Button pill "Conheça mais sobre nós" on the right */}
          <div className="shrink-0">
            <a
              href="#gps"
              className="inline-flex items-center gap-2 px-9 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white rounded-full transition-all shadow-xl active:scale-95"
            >
              <span>Conheça o GPS Markk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Audited Metrics Strip in Manifesto */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 mt-16 pt-12 border-t border-white/25 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white/95 leading-tight">
                {metric.label}
              </div>
              <div className="text-[11px] text-white/80 font-mono">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
