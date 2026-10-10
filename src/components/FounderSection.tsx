import React from 'react';
import { MARKK_CONTACT } from '../data/markkData';
import { ArrowUpRight, Award, CheckCircle2, Instagram, MessageCircle, Mic, Target, Users, Zap } from 'lucide-react';

interface FounderSectionProps {
  onOpenIntakeModal: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenIntakeModal }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#fbfbfb] border-y border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card of Éder Cavalheiro & Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-black text-white p-8 sm:p-10 shadow-xl border border-neutral-800">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5a23]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-[#ff5a23] flex items-center justify-center font-display font-black text-2xl text-[#ff5a23] shadow-md">
                    k
                  </div>
                  <a
                    href={MARKK_CONTACT.founderInstagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#ff5a23]" />
                    <span>{MARKK_CONTACT.founderInstagram}</span>
                  </a>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                    {MARKK_CONTACT.founder}
                  </h3>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                    {MARKK_CONTACT.founderRole}
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {MARKK_CONTACT.founderBio}
                </p>

                {/* Specialties Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Aceleração Comercial</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Treinamento de Equipe</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Gestão de Marketing</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-2">
                    <Mic className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Palestrante</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>MARKK BRASIL</span>
                  <span className="text-[#ff5a23] font-bold">JOINVILLE / SC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative of Business Acceleration & Sales Leadership */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
              LIDERANÇA & DNA MARKK
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight text-balance">
              Não fazemos marketing para ganhar aplauso. Fazemos marketing para encher o caixa.
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              A Markk nasceu da inconformidade com agências que entregam apenas peças bonitas, mas não entendem a dor do dono de empresa: <strong>vender, bater meta e treinar o time comercial.</strong>
            </p>

            <div className="space-y-3.5 py-3 text-sm text-neutral-800">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff5a23] shrink-0 mt-0.5" />
                <span>
                  <strong>Atraia mais clientes e venda mais:</strong> campanhas desenhadas com foco exclusivo em atrair compradores reais no WhatsApp e na loja.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff5a23] shrink-0 mt-0.5" />
                <span>
                  <strong>Treinamento de equipes no chão da empresa:</strong> alinhamos a postura do seu time de vendas com rotinas agressivas de fechamento e superação de metas.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff5a23] shrink-0 mt-0.5" />
                <span>
                  <strong>Campanhas temáticas de alta tração:</strong> do varejo alimentar e automotivo à indústria B2B e grandes distribuidoras.
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenIntakeModal}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer shadow-md"
              >
                <span>Agendar Reunião com o Éder</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={MARKK_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 text-xs font-mono uppercase text-black border border-neutral-300 hover:border-black rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#ff5a23]" />
                <span>WhatsApp Direto: {MARKK_CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
