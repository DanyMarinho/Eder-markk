import React from 'react';
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { EditorialVisual } from './EditorialVisual';
import { METRICS, MARKK_CONTACT } from '../data/markkData';

interface HeroProps {
  onOpenIntakeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntakeModal }) => {
  return (
    <div className="pt-24 sm:pt-28 bg-white text-[#141414]">
      {/* 1. HERO TOP STATEMENT (Exit.ag caliber: huge typographic impact) */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-neutral-500 mb-6">
          <span>MARKK AGÊNCIA</span>
          <span aria-hidden="true">·</span>
          <span>JOINVILLE / SC</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#ff5a23] font-semibold">ESTRATÉGIA, BRANDING & VENDAS</span>
        </div>

        <div className="space-y-6 max-w-6xl">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-black leading-[0.98] text-balance">
            Marcas, mentes e negócios.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
            <p className="lg:col-span-8 text-lg sm:text-2xl text-neutral-600 font-normal leading-snug">
              Transformamos empresas em referências sólidas através de direção estratégica, redes sociais com método, anúncios de alta conversão e inteligência comercial.
            </p>

            <div className="lg:col-span-4 flex items-center gap-4">
              <button
                onClick={onOpenIntakeModal}
                className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] transition-colors rounded-full cursor-pointer shadow-xs active:scale-95"
              >
                <span>Marcar uma conversa</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#taranua"
                className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black transition-colors inline-flex items-center gap-1.5"
              >
                <span>Ver projetos</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. S-VIDEO: Prominent Showreel Carrier (Exit.ag primary visual) */}
        <div className="mt-12 sm:mt-16">
          <EditorialVisual type="hero-reel" />
        </div>
      </section>

      {/* 3. S-ABOUT: MANIFESTO BLOCK (Exact Exit.ag editorial rhythm) */}
      <section id="sobre" className="py-20 sm:py-28 bg-[#f8f8f8] border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-5xl space-y-8">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-semibold">
              O MANIFESTO MARKK
            </div>

            <p className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-[1.12] text-balance">
              A gente acredita que a mesma rota de sempre não vai levar sua marca ao lugar que ela precisa. Por isso questionamos o óbvio e provocamos novos caminhos.
            </p>

            <p className="text-base sm:text-xl text-neutral-600 leading-relaxed font-normal max-w-3xl">
              Com metodologia exclusiva que une visão de negócio, posicionamento e criatividade orientada a resultados comerciais para transformar negócios em marcas fortes.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#gps"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black hover:text-[#ff5a23] transition-colors group"
              >
                <span>Conheça nosso GPS e metodologia</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={MARKK_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-black transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#ff5a23]" />
                <span>Conversar direto pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="mt-16 pt-12 border-t border-neutral-300/80 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display text-3xl sm:text-5xl font-black text-black tracking-tight tabular-nums">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-neutral-900">
                  {metric.label}
                </div>
                <div className="text-xs text-neutral-500">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
