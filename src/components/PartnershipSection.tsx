import React, { useState } from 'react';
import { MARKK_CONTACT } from '../data/markkData';
import { ArrowUpRight, CheckCircle2, Code, Globe, Handshake, Layers, MessageCircle, ShieldCheck, Sparkles, TrendingUp, Users, Video } from 'lucide-react';

interface PartnershipSectionProps {
  onOpenIntakeModal: (context?: string) => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({ onOpenIntakeModal }) => {
  const [activeTab, setActiveTab] = useState<'clientes' | 'fornecedores'>('clientes');

  const partnerServices = [
    {
      category: 'Tráfego Pago & Google Ads',
      role: 'Gestores de Mídia de Alta Performance',
      description: 'Especialistas parceiros em campanhas cirúrgicas de Google Ads, Meta Ads e otimização contínua de ROAS.',
      icon: TrendingUp,
    },
    {
      category: 'Criação de Sites & Landing Pages',
      role: 'Desenvolvedores & Designers Web',
      description: 'Especialistas parceiros em páginas velozes, seguras, integradas com WhatsApp, Pixel e métricas avançadas.',
      icon: Globe,
    },
    {
      category: 'Produção Audiovisual & Reels',
      role: 'Filmmakers, Editores & Estúdios',
      description: 'Especialistas parceiros na captação profissional de vídeos, fotos de produtos, frotas e cobertura de eventos.',
      icon: Video,
    },
    {
      category: 'CRM, Processos & Automação',
      role: 'Integradores RD Station, HubSpot & PipeRun',
      description: 'Especialistas parceiros na parametrização de funis, automações de follow-up e dashboards de vendas.',
      icon: Layers,
    },
  ];

  return (
    <section id="parcerias" className="py-20 sm:py-28 bg-[#fafafa] border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
            MODELO DE PARCERIAS & REDE DE ESPECIALISTAS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight text-balance">
            Estratégia centralizada. Os melhores parceiros executando cada serviço.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Na Markk, a estratégia, a direção criativa e o treinamento de vendas são liderados por <strong>Éder Cavalheiro</strong>. E os serviços técnicos especializados — como <strong>Tráfego Pago, Criação de Sites, Google e Audiovisual</strong> — são fornecidos por uma <strong>rede selecionada de parceiros homologados</strong> de alto nível.
          </p>
        </div>

        {/* Tab Selector: Visão Cliente vs Visão Fornecedor Parceiro */}
        <div className="flex items-center gap-2 p-1.5 bg-neutral-200/80 rounded-full w-fit mb-12">
          <button
            onClick={() => setActiveTab('clientes')}
            className={`px-5 py-2 text-xs font-bold uppercase rounded-full transition-colors cursor-pointer ${
              activeTab === 'clientes'
                ? 'bg-black text-white shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Para Empresas & Clientes
          </button>
          <button
            onClick={() => setActiveTab('fornecedores')}
            className={`px-5 py-2 text-xs font-bold uppercase rounded-full transition-colors cursor-pointer ${
              activeTab === 'fornecedores'
                ? 'bg-black text-white shadow-xs'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Seja um Parceiro Fornecedor da Markk
          </button>
        </div>

        {activeTab === 'clientes' ? (
          <div className="space-y-12">
            {/* Grid of Specialized Partner Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerServices.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white border border-neutral-200 hover:border-black transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#ff5a23]/10 text-[#ff5a23] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-xs font-mono uppercase text-[#ff5a23] font-bold">
                        PARCEIRO HOMOLOGADO
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase text-black leading-tight">
                        {p.category}
                      </h3>
                      <p className="text-xs font-mono uppercase text-neutral-500 font-semibold">
                        {p.role}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a23] shrink-0" />
                      <span>Gestão e validação Markk</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefit Box for Clients */}
            <div className="p-8 sm:p-10 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  A VANTAGEM PARA O SEU NEGÓCIO
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                  Você não precisa gerenciar 5 prestadores avulsos. A Markk orquestra tudo.
                </h4>
                <p className="text-sm text-neutral-300">
                  Um único ponto de contato, estratégia unificada e a certeza de que cada parceiro técnico está entregando o melhor resultado no seu tráfego, no seu site e no seu Google Ads.
                </p>
              </div>

              <button
                onClick={() => onOpenIntakeModal('Quero contratar o modelo de serviços integrados com a Markk')}
                className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                Solicitar Proposta Integrada
              </button>
            </div>
          </div>
        ) : (
          /* For Partners / Suppliers */
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200">
              <div className="max-w-3xl space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  REDE DE FORNECEDORES & PARCEIROS HOMOLOGADOS MARKK
                </span>

                <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
                  Você fornece serviços de tráfego, sites, vídeo ou tecnologia?
                </h3>

                <p className="text-base text-neutral-700 leading-relaxed">
                  Estamos constantemente homologando novos parceiros e prestadores de serviços especializados para atender as contas da Markk. Se você é um profissional ou agência especialista com foco em entrega impecável, queremos conhecer seu trabalho.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 space-y-1">
                    <div className="font-bold text-black text-sm">Tráfego Pago & Google Ads</div>
                    <div className="text-xs text-neutral-600">Gestão de contas com alta verba e foco em ROAS.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 space-y-1">
                    <div className="font-bold text-black text-sm">Desenvolvimento de Sites</div>
                    <div className="text-xs text-neutral-600">Landing pages, WordPress, Next.js e e-commerces.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 space-y-1">
                    <div className="font-bold text-black text-sm">Produção Audiovisual & Vídeos</div>
                    <div className="text-xs text-neutral-600">Captação em Joinville, Santa Catarina e região.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 space-y-1">
                    <div className="font-bold text-black text-sm">Especialistas em CRM</div>
                    <div className="text-xs text-neutral-600">Automações comerciais e parametrização técnica.</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={`https://wa.me/${MARKK_CONTACT.phoneClean}?text=Ol%C3%A1%20%C3%89der%2C%20sou%20prestador%2Fespecialista%20e%20gostaria%20de%20me%20cadastrar%20como%20parceiro%20fornecedor%20da%20Markk.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
                  >
                    <Handshake className="w-4 h-4 text-[#ff5a23]" />
                    <span>Quero Ser um Parceiro Fornecedor da Markk</span>
                  </a>

                  <a
                    href={`mailto:${MARKK_CONTACT.email}?subject=Apresentacao%20de%20Parceiro%20Fornecedor%20Markk`}
                    className="text-xs font-mono text-neutral-600 hover:text-black transition-colors"
                  >
                    Enviar portfólio por e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
