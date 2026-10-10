import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { EditorialVisual } from './EditorialVisual';
import { ArrowUpRight, Check, MessageCircle, X } from 'lucide-react';
import { MARKK_CONTACT } from '../data/markkData';

interface CaseModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenIntake: (contextMessage?: string) => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({
  caseStudy,
  onClose,
  onOpenIntake,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const visualType = caseStudy.id as
    | 'supermercado-machado'
    | 'fassa-pneus'
    | 'delicious-fish'
    | 'disjoi-distribuidora';

  const whatsappCaseUrl = `https://wa.me/${MARKK_CONTACT.phoneClean}?text=Ol%C3%A1%2C%20vi%20o%20case%20${encodeURIComponent(
    caseStudy.client
  )}%20no%20site%20da%20Markk%20e%20gostaria%20de%20um%20projeto%20semelhante%20para%20minha%20empresa.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white text-black border border-neutral-300 rounded-3xl overflow-y-auto shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky Header with Title and Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-white/95 backdrop-blur border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#ff5a23] font-bold">
              ESTUDO DE CASO MARKK
            </span>
            <span className="text-neutral-400">/</span>
            <span className="text-xs font-mono uppercase text-black font-extrabold">
              {caseStudy.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Visual Showcase */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <EditorialVisual type={visualType} className="max-h-[380px]" />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500">
              <span className="text-black font-bold">{caseStudy.year}</span>
              <span>·</span>
              <span>{caseStudy.categoryLabel}</span>
              <span>·</span>
              <span className="text-[#ff5a23] font-bold">{caseStudy.accentTag}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight">
              {caseStudy.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Results Grid */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] border border-neutral-200 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#ff5a23] font-bold">
              Métricas & Impacto Mensurado
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.results.map((res, idx) => (
                <div key={idx} className="p-5 bg-white rounded-xl border border-neutral-200 shadow-2xs">
                  <div className="font-display text-3xl sm:text-4xl font-black text-black tabular-nums">
                    {res.value}
                  </div>
                  <div className="text-xs text-neutral-600 font-mono uppercase mt-1">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Strategy Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 p-6 rounded-2xl bg-[#fafafa] border border-neutral-200">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                O Desafio Inicial
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#fafafa] border border-neutral-200">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                A Estratégia da Markk
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                {caseStudy.strategy}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
              Entregáveis do Projeto
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800 p-3 rounded-xl bg-[#fafafa] border border-neutral-200">
                  <Check className="w-4 h-4 text-[#ff5a23] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="sticky bottom-0 z-20 px-6 sm:px-8 py-5 bg-white/95 backdrop-blur border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-600 text-center sm:text-left font-medium">
            Deseja resultados semelhantes para seu negócio?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappCaseUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 border border-neutral-300 rounded-full hover:border-black transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#ff5a23]" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenIntake(`Interesse no modelo do case: ${caseStudy.title}`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
            >
              <span>Marcar Conversa</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
