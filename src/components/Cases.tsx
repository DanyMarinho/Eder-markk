import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/markkData';
import { CaseStudy, PillarCategory } from '../types';
import { EditorialVisual } from './EditorialVisual';
import { ArrowUpRight } from 'lucide-react';

interface CasesProps {
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export const Cases: React.FC<CasesProps> = ({ onSelectCase }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | PillarCategory>('all');

  const filteredCases = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === activeFilter);

  return (
    <section id="taranua" className="py-20 sm:py-28 bg-white border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Exact Exit.ag Section Header: "Tá na rua" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-black leading-none">
              Tá na rua.
            </h2>
            <p className="text-lg sm:text-2xl text-neutral-600 font-normal">
              Projetos e campanhas que pensamos e realizamos.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 bg-[#f4f4f4] rounded-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-full transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Todos ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveFilter('branding')}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-full transition-colors cursor-pointer ${
                activeFilter === 'branding'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Branding
            </button>
            <button
              onClick={() => setActiveFilter('social')}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-full transition-colors cursor-pointer ${
                activeFilter === 'social'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Redes Sociais
            </button>
            <button
              onClick={() => setActiveFilter('performance')}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-full transition-colors cursor-pointer ${
                activeFilter === 'performance'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Performance
            </button>
            <button
              onClick={() => setActiveFilter('crm')}
              className={`px-4 py-2 text-xs font-bold uppercase rounded-full transition-colors cursor-pointer ${
                activeFilter === 'crm'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              CRM & Vendas
            </button>
          </div>
        </div>

        {/* Large Format 2-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
          {filteredCases.map((caseStudy) => {
            const visualType = caseStudy.id as
              | 'supermercado-machado'
              | 'fassa-pneus'
              | 'delicious-fish'
              | 'disjoi-distribuidora';

            return (
              <div
                key={caseStudy.id}
                onClick={() => onSelectCase(caseStudy)}
                className="group cursor-pointer flex flex-col justify-between space-y-6"
              >
                {/* Visual Artwork Showcase */}
                <div className="overflow-hidden rounded-2xl bg-black">
                  <EditorialVisual type={visualType} />
                </div>

                {/* Case Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono uppercase text-neutral-500">
                    <span className="text-black font-bold">{caseStudy.client}</span>
                    <span>{caseStudy.year} · {caseStudy.categoryLabel}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black group-hover:text-[#ff5a23] transition-colors leading-tight">
                    {caseStudy.title}
                  </h3>

                  <p className="text-sm text-neutral-600 line-clamp-2">
                    {caseStudy.summary}
                  </p>

                  {/* Quantitative Results Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {caseStudy.results.map((res, idx) => (
                      <div key={idx} className="p-3 bg-[#f8f8f8] rounded-xl border border-neutral-200">
                        <div className="text-black font-mono font-bold text-base sm:text-lg tabular-nums">
                          {res.value}
                        </div>
                        <div className="text-[10px] text-neutral-500 uppercase font-mono tracking-tight truncate">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#ff5a23] transition-colors">
                    <span>Ver Estudo de Caso Completo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Works Link */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setActiveFilter('all')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
          >
            <span>Veja mais trabalhos na rua</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
