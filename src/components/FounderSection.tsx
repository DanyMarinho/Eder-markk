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
            <div className="relative rounded-3xl overflow-hidden bg-[#0d0d0d] text-white shadow-2xl border border-neutral-800">
              {/* Executive Portrait Visual Art */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#1a1a1a] via-[#121212] to-[#0d0d0d] overflow-hidden flex items-end justify-center border-b border-neutral-800">
                {/* Ambient glow behind portrait */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff5a23]/25 rounded-full blur-3xl pointer-events-none" />

                {/* Highly detailed stylized executive portrait SVG illustration */}
                <svg
                  viewBox="0 0 400 320"
                  className="w-full h-full object-cover relative z-10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Retrato Profissional de Éder Cavalheiro"
                >
                  <defs>
                    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e2229" />
                      <stop offset="50%" stopColor="#14171d" />
                      <stop offset="100%" stopColor="#0b0c10" />
                    </linearGradient>
                    <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f3c6a5" />
                      <stop offset="100%" stopColor="#dfa783" />
                    </linearGradient>
                    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2b1d16" />
                      <stop offset="100%" stopColor="#160e0a" />
                    </linearGradient>
                    <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff5a23" />
                      <stop offset="100%" stopColor="#ff8533" />
                    </linearGradient>
                  </defs>

                  {/* Studio background geometry */}
                  <circle cx="200" cy="130" r="110" fill="#ff5a23" opacity="0.08" />
                  <path d="M50 320 L150 160 L250 320" stroke="#ffffff" strokeWidth="1" opacity="0.04" />
                  <path d="M150 320 L250 160 L350 320" stroke="#ffffff" strokeWidth="1" opacity="0.04" />

                  {/* Shoulders & Tailored Blazer */}
                  <path
                    d="M100 320 L120 250 L155 210 L175 220 L195 270 L205 270 L225 220 L245 210 L280 250 L300 320 Z"
                    fill="url(#suitGrad)"
                  />
                  {/* Blazer lapels */}
                  <path d="M155 210 L190 270 L170 320 L130 320 L120 250 Z" fill="#181b22" />
                  <path d="M245 210 L210 270 L230 320 L270 320 L280 250 Z" fill="#181b22" />
                  {/* Charcoal inner shirt & collar */}
                  <path d="M185 220 L200 250 L215 220 L200 205 Z" fill="#2d333f" />

                  {/* Neck */}
                  <path d="M185 185 L185 220 L215 220 L215 185 Z" fill="#d29672" />
                  {/* Head base */}
                  <ellipse cx="200" cy="150" rx="38" ry="46" fill="url(#faceGrad)" />
                  {/* Ears */}
                  <ellipse cx="160" cy="155" rx="6" ry="11" fill="#dfa783" />
                  <ellipse cx="240" cy="155" rx="6" ry="11" fill="#dfa783" />

                  {/* Modern Styled Hair */}
                  <path
                    d="M162 142 C162 105 178 95 200 95 C222 95 238 105 238 142 C230 115 215 110 200 110 C182 110 170 120 162 142 Z"
                    fill="url(#hairGrad)"
                  />
                  {/* Eyebrows & Eyes with confident expression */}
                  <path d="M175 140 Q186 137 193 141" stroke="#22150f" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M207 141 Q214 137 225 140" stroke="#22150f" strokeWidth="2.5" strokeLinecap="round" />
                  <ellipse cx="185" cy="148" rx="3.5" ry="3.5" fill="#1e130c" />
                  <ellipse cx="215" cy="148" rx="3.5" ry="3.5" fill="#1e130c" />
                  <circle cx="186" cy="147" r="1" fill="#ffffff" />
                  <circle cx="216" cy="147" r="1" fill="#ffffff" />

                  {/* Nose & Friendly Confident Smile */}
                  <path d="M200 148 L198 162 L204 163" stroke="#c0825c" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M188 174 Q200 182 212 174" stroke="#8e3d29" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Well groomed beard stubble texture */}
                  <path d="M178 165 C178 188 190 196 200 196 C210 196 222 188 222 165" stroke="#332219" strokeWidth="3" strokeDasharray="1.5 2.5" strokeLinecap="round" opacity="0.65" />

                  {/* Presenter / Keynote microphone subtle indicator */}
                  <path d="M166 170 Q160 185 180 188" stroke="#ff5a23" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.85" />
                  <circle cx="180" cy="188" r="2.5" fill="#ff5a23" />

                  {/* Overlay brand badge at bottom left */}
                  <g transform="translate(24, 260)">
                    <rect width="130" height="28" rx="14" fill="#000000" fillOpacity="0.85" stroke="#333333" strokeWidth="1" />
                    <circle cx="14" cy="14" r="4" fill="#ff5a23" />
                    <text x="26" y="18" fill="#ffffff" fontSize="10" fontFamily="'Figtree', sans-serif" fontWeight="800" letterSpacing="1">
                      ÉDER CAVALHEIRO
                    </text>
                  </g>
                </svg>

                {/* Verified badge top right */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-neutral-700 text-[11px] font-mono text-[#ff5a23] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>ESTRATEGISTA & MENTOR</span>
                </div>
              </div>

              {/* Founder Information & Authority Badges */}
              <div className="p-8 sm:p-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white">
                      {MARKK_CONTACT.founder}
                    </h3>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold mt-0.5">
                      {MARKK_CONTACT.founderRole}
                    </div>
                  </div>

                  <a
                    href={MARKK_CONTACT.founderInstagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#ff5a23] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#ff5a23]" />
                    <span>{MARKK_CONTACT.founderInstagram}</span>
                  </a>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {MARKK_CONTACT.founderBio}
                </p>

                {/* Specialties Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Aceleração Comercial</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Treinamento de Equipe</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Gestão de Marketing</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-2">
                    <Mic className="w-4 h-4 text-[#ff5a23] shrink-0" />
                    <span>Palestrante & Treinador</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
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
