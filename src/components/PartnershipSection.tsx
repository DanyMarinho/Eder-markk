import React from 'react';
import { MARKK_CONTACT, PARTNERSHIP_MODELS } from '../data/markkData';
import { ArrowUpRight, CheckCircle2, Handshake, MessageCircle, ShieldCheck, Users } from 'lucide-react';

interface PartnershipSectionProps {
  onOpenIntakeModal: (context?: string) => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onOpenIntakeModal }) => {
  return (
    <section id="parcerias" className="py-20 sm:py-28 bg-white border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
            PARCERIAS ESTRATÉGICAS & ALIANÇAS B2B
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight text-balance">
            Mais do que fornecedor, o seu parceiro de crescimento.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Acreditamos em parcerias de longo prazo onde todos ganham. Atuamos tanto no modelo de parceria contínua com empresas clientes quanto através de alianças comerciais e co-produção com consultores e parceiros B2B.
          </p>
        </div>

        {/* 2 Partnership Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PARTNERSHIP_MODELS.map((model, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#fafafa] border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  {model.tag}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                  {model.title}
                </h3>

                <p className="text-xs font-mono uppercase text-neutral-500 font-semibold">
                  {model.subtitle}
                </p>

                <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                  {model.description}
                </p>

                <div className="pt-4 border-t border-neutral-200 space-y-2.5">
                  <div className="text-xs font-mono uppercase text-neutral-500 font-bold mb-2">
                    VANTAGENS DO MODELO:
                  </div>
                  {model.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onOpenIntakeModal(`Interesse em: ${model.title}`)}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
                >
                  <span>{model.cta}</span>
                </button>

                <a
                  href={`https://wa.me/${MARKK_CONTACT.phoneClean}?text=Ol%C3%A1%20%C3%89der%2C%20gostaria%20de%20conversar%20sobre%20o%20${encodeURIComponent(model.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-neutral-600 hover:text-black transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#ff5a23]" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Trust Bar */}
        <div className="p-8 rounded-3xl bg-[#f5f5f5] border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
              <Handshake className="w-6 h-6 text-[#ff5a23]" />
            </div>
            <div>
              <div className="font-bold text-black text-base">
                Deseja propor uma parceria específica com a Markk?
              </div>
              <div className="text-xs text-neutral-600">
                Estamos sempre abertos a conversar com empresas, indústrias, veículos e consultores que somam forças.
              </div>
            </div>
          </div>

          <a
            href={MARKK_CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white border border-neutral-300 rounded-full transition-colors whitespace-nowrap"
          >
            Conversar com a Diretoria
          </a>
        </div>
      </div>
    </section>
  );
};
