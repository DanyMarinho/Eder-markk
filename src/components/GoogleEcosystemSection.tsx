import React from 'react';
import { GOOGLE_ECOSYSTEM_PILLARS, MARKK_CONTACT } from '../data/markkData';
import { ArrowUpRight, Check, Compass, Globe, MessageCircle, Search, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';

interface GoogleEcosystemSectionProps {
  onOpenIntakeModal: (context?: string) => void;
}

export const GoogleEcosystemSection: React.FC<GoogleEcosystemSectionProps> = ({ onOpenIntakeModal }) => {
  return (
    <section id="google-trafego" className="py-20 sm:py-28 bg-[#f5f5f5] border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
            TRÁFEGO PAGO, GOOGLE & CRIAÇÃO DE SITES
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight text-balance">
            A Tríade que faz o lead chegar pronto para comprar.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Não adianta investir em anúncios no Google se o seu site for lento. E não adianta ter um site lindo se ninguém encontrar você. Na Markk, unimos <strong>Tráfego Pago de Alta Precisão</strong>, <strong>Criação de Sites de Alta Conversão</strong> e o <strong>Ecossistema Google</strong> em uma única engrenagem.
          </p>
        </div>

        {/* The 3-Step Mechanics Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ff5a23]/10 text-[#ff5a23] flex items-center justify-center font-mono font-bold text-lg">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#ff5a23] font-bold">PASSO 1 · A BUSCA</span>
              <h3 className="font-display text-xl font-bold uppercase text-black">Google Ads & Fundo de Funil</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              O cliente pesquisa exatamente pelo que precisa comprar no Google. Ele já tem o problema e o dinheiro na mão; só precisa encontrar a sua empresa no topo.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              FOCO: Clientes com alta intenção de compra imediata.
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ff5a23]/10 text-[#ff5a23] flex items-center justify-center font-mono font-bold text-lg">
              <Globe className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#ff5a23] font-bold">PASSO 2 · O DESTINO</span>
              <h3 className="font-display text-xl font-bold uppercase text-black">Site & Landing Page Ultrarrápida</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              O cliente clica e cai numa página moderna, veloz e pensada para celulares. O carregamento é instantâneo e a proposta de valor quebra qualquer dúvida.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              FOCO: Conversão sem perda de cliques ou lentidão.
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ff5a23]/10 text-[#ff5a23] flex items-center justify-center font-mono font-bold text-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#ff5a23] font-bold">PASSO 3 · A VENDA</span>
              <h3 className="font-display text-xl font-bold uppercase text-black">WhatsApp do Vendedor & Meta Ads</h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              O lead clica direto no botão de WhatsApp e cai no time comercial com SLA de atendimento rápido. E no Instagram, anúncios de remarketing o acompanham até o fechamento.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              FOCO: Venda rápida, CRM abastecido e ROAS medido.
            </div>
          </div>
        </div>

        {/* Detail Cards of Google Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {GOOGLE_ECOSYSTEM_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  0{idx + 1}. ECOSSISTEMA
                </div>
                <h4 className="font-display text-lg font-bold uppercase text-black leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.concept}
                </p>
                <div className="p-2.5 rounded-lg bg-[#fafafa] border border-neutral-100 text-[11px] text-neutral-500 font-mono">
                  {item.example}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 text-xs font-mono font-semibold text-black flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#ff5a23] shrink-0" />
                <span>{item.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
              DIAGNÓSTICO DIGITAL MARKK
            </span>
            <div className="text-2xl font-bold font-display uppercase tracking-tight text-white">
              Quer avaliar como estão seu site e suas campanhas no Google?
            </div>
            <p className="text-sm text-neutral-400 max-w-xl">
              Fazemos uma auditoria completa da velocidade do seu site, posicionamento no Google e oportunidades de tráfego pago na sua região.
            </p>
          </div>

          <button
            onClick={() => onOpenIntakeModal('Auditoria de Site, Google Ads e Tráfego Pago')}
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Solicitar Auditoria Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};
