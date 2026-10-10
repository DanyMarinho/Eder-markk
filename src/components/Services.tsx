import React, { useState } from 'react';
import { SERVICE_PILLARS } from '../data/markkData';
import { ServicePillar } from '../types';
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Layers, Share2, Sparkles, TrendingUp } from 'lucide-react';

interface ServicesProps {
  onSelectPillar: (pillar: ServicePillar) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectPillar }) => {
  const [expandedPillar, setExpandedPillar] = useState<string>('branding');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-black" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-black" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-black" />;
      default:
        return <Layers className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="pilares" className="py-20 sm:py-28 bg-[#f8f8f8] border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-semibold">
              ESCOPO DE ATUAÇÃO
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight">
              Os Quatro Pilares Markk
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Estruturas integradas para empresas que buscam liderança de mercado. Cada pilar opera de forma autônoma ou em sinergia completa.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            MODELO TRANSVERSAL DE SERVIÇOS
          </div>
        </div>

        {/* 4 Pillars Grid (Clean, High-End Light Agency Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICE_PILLARS.map((pillar) => {
            const isExpanded = expandedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`group rounded-3xl border transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-black bg-white shadow-lg'
                    : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl sm:text-5xl font-black text-neutral-300 group-hover:text-black transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-neutral-200 bg-[#f8f8f8] flex items-center justify-center">
                      {getIcon(pillar.iconName)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#ff5a23] font-bold">
                      {pillar.subtitle}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-6">
                    {pillar.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 pt-6 border-t border-neutral-100">
                    <div className="text-xs font-mono uppercase text-neutral-500 flex items-center justify-between">
                      <span>ENTREGÁVEIS PRINCIPAIS</span>
                      <button
                        onClick={() => setExpandedPillar(isExpanded ? '' : pillar.id)}
                        className="text-neutral-500 hover:text-black transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
                      >
                        {isExpanded ? 'Recolher' : 'Ver todos'}
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className={`space-y-2.5 transition-all ${isExpanded ? 'block' : 'hidden sm:block'}`}>
                      {pillar.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <Check className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <div className="text-xs font-mono text-neutral-500">
                    FOCO: <span className="text-black font-semibold">{pillar.kpi}</span>
                  </div>
                  <button
                    onClick={() => onSelectPillar(pillar)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black hover:text-[#ff5a23] transition-colors cursor-pointer"
                  >
                    <span>Contratar Pilar</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Full Scope Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
              PROGRAMA COMPLETO · FULL SCOPE MARKK
            </div>
            <div className="text-2xl font-bold font-display uppercase tracking-tight text-white">
              Sua empresa precisa dos 4 pilares operando juntos?
            </div>
            <div className="text-sm text-neutral-400 max-w-xl">
              A Markk atua como o departamento transversal de branding, marketing e inteligência de vendas do seu negócio.
            </div>
          </div>
          <button
            onClick={() => onSelectPillar(SERVICE_PILLARS[0])}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Montar Escopo Integrado
          </button>
        </div>
      </div>
    </section>
  );
};
