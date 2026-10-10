import React, { useState } from 'react';
import { METHODOLOGY_STAGES } from '../data/markkData';
import { ArrowUpRight, Compass, CheckCircle2, ChevronRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div id="gps">
      {/* =========================================================================
          S-BANNER-GPS (Exact Exit.ag section: #ebebeb background with GPS logo & text)
         ========================================================================= */}
      <section className="bg-[#ebebeb] text-black py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left GPS Logo SVG representation (Geometric Exit Compass) */}
          <div className="shrink-0 flex items-center justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-neutral-400 rounded-full" />
              <div className="absolute inset-4 border border-dashed border-neutral-300 rounded-full" />
              <div className="text-center space-y-1">
                <span className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-black block">
                  GPS
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff5a23]">
                  MARKK
                </span>
              </div>
            </div>
          </div>

          {/* Right GPS Content Block */}
          <div className="space-y-6 max-w-xl">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 leading-snug">
              <p>
                Uma visão completa e transversal, capaz de potencializar branding e comunicação,{' '}
                <strong className="text-black font-extrabold">
                  transformando as empresas de dentro para fora.
                </strong>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#gps-framework"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-transparent border-2 border-black hover:bg-black hover:text-white rounded-full transition-colors"
              >
                <span>Explore o GPS MARKK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GPS DEEP DIVE (The Triad of Convergence + 4 Operational Stages)
         ========================================================================= */}
      <section id="gps-framework" className="py-20 sm:py-28 bg-white text-black border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
              METODOLOGIA TRANSVERSAL
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Como o GPS Markk opera no seu negócio
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              Convergência entre branding estratégico, atração de clientes e conversão comercial.
            </p>
          </div>

          {/* The 3 Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-2xl bg-[#f8f8f8] border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  01. A ALMA
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                  Branding & Posicionamento
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Sem posicionamento sólido, a empresa disputa por preço na vala comum. Construímos identidade, autoridade e percepção de valor inabalável.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                IMPACTO: Margem de Lucro & Desejo
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f8f8] border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  02. A TRAÇÃO
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                  Redes Sociais & Performance
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Conteúdo com rotina editorial e testes científicos de anúncios pagos para atrair o público ideal no momento exato de compra.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                IMPACTO: Fluxo Constante de Oportunidades
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f8f8] border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  03. A CONVERSÃO
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                  CRM & Gestão Comercial
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Estruturamos processos para que o comercial não perca oportunidades. Implantação de CRM, cadência de follow-up e SLA de vendas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 text-xs font-mono text-neutral-500">
                IMPACTO: Receita Real no Caixa
              </div>
            </div>
          </div>

          {/* 4 Interactive Stages Navigation */}
          <div className="border border-neutral-200 rounded-3xl p-8 sm:p-12 bg-[#fafafa]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6 mb-8">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
                  ETAPAS DO GPS MARKK
                </span>
                <h4 className="text-2xl font-display font-bold uppercase tracking-tight text-black mt-1">
                  Navegando a jornada de ponta a ponta
                </h4>
              </div>

              <div className="flex items-center gap-2">
                {METHODOLOGY_STAGES.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-10 h-10 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeStep === idx
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-white text-neutral-600 border border-neutral-200 hover:border-black'
                    }`}
                  >
                    {s.step}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="text-xs font-mono text-[#ff5a23] font-bold">
                  ETAPA {METHODOLOGY_STAGES[activeStep].step} DE 04
                </div>

                <h5 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
                  {METHODOLOGY_STAGES[activeStep].name}
                </h5>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  {METHODOLOGY_STAGES[activeStep].concept}
                </p>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-xs font-mono uppercase text-neutral-500 font-semibold">
                    Ação Prática Executada pela Markk:
                  </div>
                  <div className="text-sm text-neutral-900 font-medium">
                    {METHODOLOGY_STAGES[activeStep].action}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-neutral-200 space-y-2.5 font-mono text-xs">
                <div className="text-neutral-500 uppercase pb-2 border-b border-neutral-100 font-bold">
                  ROTEIRO DE EXECUÇÃO
                </div>
                {METHODOLOGY_STAGES.map((s, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
                      activeStep === idx
                        ? 'bg-black text-white font-bold'
                        : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                    }`}
                  >
                    <span>{s.step}. {s.name}</span>
                    {activeStep === idx && <CheckCircle2 className="w-4 h-4 text-[#ff5a23]" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
