import React from 'react';
import { ArrowUpRight, CheckCircle2, Code2, Globe, Layers, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';
import { MARKK_CONTACT } from '../data/markkData';

interface PartnersEcosystemSectionProps {
  onOpenIntakeModal: () => void;
}

export const PartnersEcosystemSection: React.FC<PartnersEcosystemSectionProps> = ({ onOpenIntakeModal }) => {
  return (
    <section id="ecossistema-parceiros" className="py-24 sm:py-32 bg-[#fafafa] border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tag & Main Title */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-200 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
            <span className="w-2 h-2 rounded-full bg-[#ff5a23] animate-pulse" />
            <span>ECOSSISTEMA & PARCEIROS HOMOLOGADOS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight text-balance">
            Estratégia unificada. Especialistas de ponta na execução.
          </h2>

          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
            Como a Markk entrega <strong className="text-black font-semibold">Tráfego Pago</strong>, <strong className="text-black font-semibold">Criação de Sites</strong> e <strong className="text-black font-semibold">Ecossistema Google</strong>? Através de um modelo inteligente de hub com parceiros técnicos certificados.
          </p>
        </div>

        {/* Model Explanation Banner */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff5a23]">
              NOSSO MODELO DE ATUAÇÃO
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
              A Markk lidera a mente e a marca. Os parceiros executam a tecnologia e o leilão de mídia.
            </h3>
            <p className="text-base text-neutral-600 leading-relaxed">
              Agências tradicionais tentam abraçar tudo com equipes genéricas e entregam resultados superficiais. Na Markk, <strong className="text-black">Éder Cavalheiro</strong> e nossa equipe sênior definem a direção estratégica, o posicionamento do seu negócio e a narrativa das redes sociais. Para a execução técnica de tráfego, desenvolvimento de sites e SEO, ativamos <strong className="text-black">parceiros homologados e certificados</strong> que são autoridades em suas áreas.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#f4f4f4] p-6 rounded-2xl border border-neutral-200 space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-neutral-500">
              O QUE O SEU NEGÓCIO GANHA:
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-800 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                <span>Uma única interlocução estratégica, sem bater cabeça com múltiplos fornecedores.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                <span>Especialistas dedicados 100% a leilões de anúncios e códigos de alta performance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                <span>Metas comerciais e ROAS alinhados com o faturamento da sua empresa.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Specialist Partner Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* 1. Tráfego Pago & Performance */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 flex flex-col justify-between hover:border-black transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                PARCEIROS DE PERFORMANCE
              </div>
              <h4 className="font-display text-2xl font-black uppercase tracking-tight text-black">
                Tráfego Pago & Mídia
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Gestão científica de verba em Meta Ads (Instagram/Facebook) e Google Ads. Parceiros especialistas em testes A/B, otimização diária de lances e escala de leads qualificados.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                  ENTREGAS DOS PARCEIROS:
                </span>
                <ul className="text-xs text-neutral-700 space-y-1.5">
                  <li>• Campanhas de Google Rede de Pesquisa & Maps</li>
                  <li>• Meta Ads com segmentação avançada</li>
                  <li>• Otimização contínua de CPL e ROAS</li>
                  <li>• Relatórios de inteligência de tráfego</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>FORNECEDOR:</span>
              <span className="font-bold text-black">Gestores & Parceiros Certificados</span>
            </div>
          </div>

          {/* 2. Criação de Sites & Landing Pages */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 flex flex-col justify-between hover:border-black transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                PARCEIROS DEV & WEB
              </div>
              <h4 className="font-display text-2xl font-black uppercase tracking-tight text-black">
                Criação de Sites & LPs
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Desenvolvimento de sites corporativos e landing pages ultrarrápidas, desenhadas para converter cliques em contatos no WhatsApp e orçamentos.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                  ENTREGAS DOS PARCEIROS:
                </span>
                <ul className="text-xs text-neutral-700 space-y-1.5">
                  <li>• Landing Pages de alta conversão (Mobile-First)</li>
                  <li>• Sites institucionais responsivos</li>
                  <li>• Integração com WhatsApp e CRM comercial</li>
                  <li>• Rastreamento avançado de GA4 e Pixel</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>FORNECEDOR:</span>
              <span className="font-bold text-black">Desenvolvedores & Web Designers Homologados</span>
            </div>
          </div>

          {/* 3. Ecossistema Google & Presença Local */}
          <div className="p-8 rounded-3xl bg-white border border-neutral-200 flex flex-col justify-between hover:border-black transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                PARCEIROS SEO & GOOGLE
              </div>
              <h4 className="font-display text-2xl font-black uppercase tracking-tight text-black">
                Google & Presença Local
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Estruturação e domínio do Google Meu Negócio (Maps), SEO orgânico e captação de clientes que já estão prontos para comprar no raio da sua empresa.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                  ENTREGAS DOS PARCEIROS:
                </span>
                <ul className="text-xs text-neutral-700 space-y-1.5">
                  <li>• Otimização de Google Meu Negócio / Maps</li>
                  <li>• Estratégia de avaliações 5 estrelas</li>
                  <li>• SEO local para termos de busca de compra</li>
                  <li>• Integração comercial com ligação e rota</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>FORNECEDOR:</span>
              <span className="font-bold text-black">Especialistas em Busca & SEO</span>
            </div>
          </div>
        </div>

        {/* CTA to talk about the project */}
        <div className="p-8 sm:p-10 rounded-3xl bg-black text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#ff5a23] uppercase tracking-wider font-bold">
              ESTRUTURA COMPLETA PARA A SUA EMPRESA
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Quer estruturar Marca, Redes, Site e Tráfego com governança unificada?
            </h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              Nós montamos o escopo ideal para o seu momento e orquestramos a melhor equipe técnica do ecossistema.
            </p>
          </div>

          <button
            onClick={onOpenIntakeModal}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors shrink-0 cursor-pointer shadow-md"
          >
            <span>Montar meu projeto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
