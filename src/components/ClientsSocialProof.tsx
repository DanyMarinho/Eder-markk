import React, { useState, useMemo } from 'react';
import { TESTIMONIALS } from '../data/markkData';
import { BrandLogo } from './BrandLogo';
import { Quote, ArrowUpRight, Search, X, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export interface ClientItem {
  id: string;
  name: string;
  segment: string;
  metric: string;
  category: 'varejo' | 'industria' | 'tech' | 'servicos';
  city?: string;
  description?: string;
}

export const REAL_CLIENTS: ClientItem[] = [
  {
    id: 'grupo-koch',
    name: 'Grupo Koch',
    segment: 'Supermercados & Atacarejo',
    metric: 'Maior Rede de SC',
    category: 'varejo',
    city: 'Tijucas / SC',
    description: '1ª maior rede de supermercados de Santa Catarina e top 10 do Brasil com Komprão Koch Atacadista e SuperKoch.',
  },
  {
    id: 'tigre',
    name: 'Tigre',
    segment: 'Tubos, Conexões & Soluções',
    metric: 'Líder Multinacional',
    category: 'industria',
    city: 'Joinville / SC',
    description: 'Multinacional brasileira líder em soluções para construção civil e gestão de água.',
  },
  {
    id: 'docol',
    name: 'Docol',
    segment: 'Metais Sanitários & Design',
    metric: 'Tecnologia & Inovação',
    category: 'industria',
    city: 'Joinville / SC',
    description: 'Maior exportadora de metais sanitários da América Latina, referência global em design e sustentabilidade.',
  },
  {
    id: 'sicredi',
    name: 'Sicredi',
    segment: 'Instituição Financeira Cooperativa',
    metric: 'Presença Nacional',
    category: 'servicos',
    city: 'Brasil',
    description: 'Mais de 8 milhões de associados em todo o território nacional, impulsionando a economia colaborativa.',
  },
  {
    id: 'expogestao',
    name: 'ExpoGestão',
    segment: 'Congresso & Feira Corporativa',
    metric: 'Maior Evento de SC',
    category: 'servicos',
    city: 'Joinville / SC',
    description: 'Principal hub de liderança, tendências de negócios e governança do sul do Brasil.',
  },
  {
    id: 'eccel',
    name: 'Eccel Incorporadora',
    segment: 'Construção Civil & Alto Padrão',
    metric: 'Empreendimentos Premium',
    category: 'industria',
    city: 'Joinville / SC',
    description: 'Incorporação imobiliária de luxo com arquitetura autoral e alto valor de metro quadrado.',
  },
  {
    id: 'agora-tech',
    name: 'Ágora Tech Park',
    segment: 'Inovação & Perini Business Park',
    metric: 'Hub Tecnológico',
    category: 'tech',
    city: 'Joinville / SC',
    description: 'O maior ecossistema de inovação aberta, venture capital e startups instalado dentro do Perini.',
  },
  {
    id: 'drogaria-catarinense',
    name: 'Drogaria Catarinense',
    segment: 'Varejo Farma & Grupo Clamed',
    metric: '+600 Unidades',
    category: 'varejo',
    city: 'Sul do Brasil',
    description: 'Rede centenária do Grupo Clamed presente nos três estados do Sul com alta fidelização omnichannel.',
  },
  {
    id: 'altenburg',
    name: 'Altenburg',
    segment: 'Têxtil, Cama & Bem Viver',
    metric: 'Líder em Travesseiros',
    category: 'industria',
    city: 'Blumenau / SC',
    description: 'Maior fabricante de travesseiros do Brasil e referência nacional em têxteis para cama, mesa e banho.',
  },
  {
    id: 'sinapro',
    name: 'Sinapro SC',
    segment: 'Sindicato das Agências de Propaganda',
    metric: 'Representação Estadual',
    category: 'servicos',
    city: 'Florianópolis / SC',
    description: 'Entidade que fomenta a indústria criativa, inteligência de negócios e ética do mercado publicitário.',
  },
  {
    id: 'machado',
    name: 'Supermercado Machado',
    segment: 'Varejo Alimentício & Hipermercado',
    metric: '+35% Fluxo em Loja',
    category: 'varejo',
    city: 'Mato Grosso',
    description: 'Rede supermercadista com expansão regional de alta densidade e presença digital transformadora.',
  },
  {
    id: 'fassa-pneus',
    name: 'Fassa Pneus',
    segment: 'Atacado & Frotas de Carga',
    metric: '+140% Cotações B2B',
    category: 'industria',
    city: 'Paraná / SC',
    description: 'Distribuição automotiva e frotista pesada com geração de leads e campanhas digitais de alta tração.',
  },
  {
    id: 'delicious-fish',
    name: 'Delicious Fish',
    segment: 'Frigorífico & Indústria de Pescados',
    metric: 'Exportação & Marca',
    category: 'industria',
    city: 'Brasil',
    description: 'Indústria de pescados nobres e tilápia com padrão internacional de inspeção e branding B2B/B2C.',
  },
];

const CATEGORIES = [
  { id: 'todas', label: 'Todas as Marcas' },
  { id: 'varejo', label: 'Supermercados & Varejo' },
  { id: 'industria', label: 'Indústria & Construção' },
  { id: 'tech', label: 'Tecnologia & Inovação' },
  { id: 'servicos', label: 'Cooperativas & Serviços' },
];

export const ClientsSocialProof: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  const filteredClients = useMemo(() => {
    if (selectedCategory === 'todas') return REAL_CLIENTS;
    return REAL_CLIENTS.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const modalFilteredClients = useMemo(() => {
    return REAL_CLIENTS.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.segment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.city?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section id="clientes" className="py-24 sm:py-32 bg-white border-t border-neutral-200 text-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* =========================================================================
            HEADER - EXACT EXIT.AG STYLE
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#ff5a23]">
              <span className="w-2 h-2 rounded-full bg-[#ff5a23] animate-ping" />
              <span>MARCAS VIVAS</span>
              <span className="text-neutral-400">→</span>
              <span className="text-neutral-500">NOSSOS CLIENTES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black leading-tight">
              Nossos clientes.
            </h2>
            <p className="text-lg sm:text-2xl text-neutral-600 font-normal">
              Negócios que ajudamos a valorizar com marcas vivas e resultados comerciais.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 font-bold uppercase tracking-wider text-black">
              +150 Marcas Transformadas
            </span>
            <span className="text-neutral-500 uppercase tracking-wider">
              SC · PR · RS · SP · BRASIL
            </span>
          </div>
        </div>

        {/* =========================================================================
            EXIT.AG SIGNATURE INFINITE MARQUEE TICKERS (Fitas Contínuas de Marcas Vivas)
           ========================================================================= */}
        <div className="relative my-10 py-6 bg-[#f7f7f7] border-y border-neutral-200/80 rounded-3xl overflow-hidden shadow-inner group">
          {/* Gradient Masks for ultra smooth fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#f7f7f7] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#f7f7f7] to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Running Left */}
          <div className="overflow-hidden mb-3">
            <div className="animate-marquee-left flex items-center gap-4">
              {[...REAL_CLIENTS, ...REAL_CLIENTS].map((client, idx) => (
                <div
                  key={`row1-${client.id}-${idx}`}
                  className="flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-neutral-200 hover:border-black hover:bg-black hover:text-white transition-all shadow-xs cursor-pointer shrink-0 group/pill"
                  onClick={() => setModalOpen(true)}
                >
                  <div className="text-black group-hover/pill:text-white transition-colors">
                    <BrandLogo id={client.id} className="h-5 sm:h-6 w-auto max-w-[110px]" />
                  </div>
                  <span className="h-3 w-px bg-neutral-200 group-hover/pill:bg-neutral-800" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ff5a23] group-hover/pill:text-[#ff771f]">
                    {client.metric}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Running Right (Reverse) */}
          <div className="overflow-hidden">
            <div className="animate-marquee-right flex items-center gap-4">
              {[...REAL_CLIENTS.slice().reverse(), ...REAL_CLIENTS.slice().reverse()].map((client, idx) => (
                <div
                  key={`row2-${client.id}-${idx}`}
                  className="flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-neutral-200 hover:border-[#ff5a23] hover:bg-[#ff5a23] hover:text-white transition-all shadow-xs cursor-pointer shrink-0 group/pill2"
                  onClick={() => setModalOpen(true)}
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 group-hover/pill2:text-white/90">
                    {client.segment}
                  </span>
                  <span className="h-3 w-px bg-neutral-200 group-hover/pill2:bg-white/30" />
                  <div className="text-black group-hover/pill2:text-white transition-colors">
                    <BrandLogo id={client.id} className="h-5 sm:h-6 w-auto max-w-[110px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro hint on hover */}
          <div className="text-center pt-3 text-[11px] font-mono text-neutral-400 tracking-wider uppercase">
            Passe o mouse para pausar · Clique para ver ficha completa da marca
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTER TABS (Exit.ag Editorial Filters)
           ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-black border border-neutral-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-transparent border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <span>Conheça todas as marcas atendidas</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[#ff5a23] text-white text-[10px]">
              {REAL_CLIENTS.length}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* =========================================================================
            SPOTLIGHT CARDS GRID - EXIT.AG FLIP & GLOW EFFECT
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {filteredClients.map((client) => {
            const isHovered = hoveredClient === client.id;
            return (
              <div
                key={client.id}
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
                onClick={() => setModalOpen(true)}
                className="group relative p-7 sm:p-8 rounded-2xl border border-neutral-200 bg-[#fafafa] hover:bg-[#111111] hover:border-neutral-900 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer shadow-xs hover:shadow-2xl overflow-hidden"
              >
                {/* Glowing Top Border Accent on Hover (Exit signature) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff5a23] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top: Segment & Live Tag */}
                <div className="flex items-center justify-between text-[11px] font-mono tracking-wider">
                  <span className="text-neutral-500 uppercase group-hover:text-neutral-400 transition-colors line-clamp-1">
                    {client.segment}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 text-[#ff5a23] font-bold uppercase text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a23] animate-pulse" />
                    MARCA VIVA
                  </span>
                </div>

                {/* Center: Brand Logo with Smooth Scale & Color Transition */}
                <div className="my-6 flex items-center justify-start text-black group-hover:text-white transition-all duration-300">
                  <BrandLogo
                    id={client.id}
                    className="h-8 sm:h-9 w-auto max-w-[160px] object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Bottom: Highlight Metric & Arrow */}
                <div className="pt-3 border-t border-neutral-200 group-hover:border-neutral-800 flex items-center justify-between text-xs font-mono transition-colors">
                  <div>
                    <span className="text-neutral-400 text-[10px] block">RESULTADO AUDITADO</span>
                    <span className="text-neutral-900 group-hover:text-[#ff5a23] font-bold text-xs transition-colors">
                      {client.metric}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-neutral-200/80 group-hover:bg-[#ff5a23] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            TESTIMONIALS BLOCK (O QUE DIZEM OS LÍDERES)
           ========================================================================= */}
        <div className="bg-[#f8f8f8] border border-neutral-200 rounded-3xl p-8 sm:p-14 relative">
          <div className="max-w-4xl space-y-6">
            <Quote className="w-10 h-10 text-[#ff5a23]" />

            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-snug">
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>

            <div className="pt-6 border-t border-neutral-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="font-bold text-black text-lg">
                  {TESTIMONIALS[activeTestimonial].author}
                </div>
                <div className="text-sm text-neutral-600">
                  {TESTIMONIALS[activeTestimonial].role} · {TESTIMONIALS[activeTestimonial].company}
                </div>
                <div className="text-xs font-mono text-[#ff5a23] font-bold mt-1">
                  Resultado Auditado: {TESTIMONIALS[activeTestimonial].results}
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-9 h-9 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer ${
                      activeTestimonial === idx
                        ? 'bg-black text-white'
                        : 'bg-white text-neutral-600 border border-neutral-300 hover:border-black'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          EXIT-STYLE "CONHEÇA TODAS AS MARCAS ATENDIDAS" MODAL
         ========================================================================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-neutral-200">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ÍNDICE DE MARCAS ATENDIDAS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-black tracking-tight mt-1">
                  Todas as marcas atendidas
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center text-black transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Box */}
            <div className="p-6 border-b border-neutral-200 bg-white">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar por marca, segmento ou localidade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-neutral-300 focus:outline-none focus:border-[#ff5a23] text-sm font-sans"
                />
              </div>
            </div>

            {/* Brands List */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 divide-y divide-neutral-100">
              {modalFilteredClients.length === 0 ? (
                <div className="py-12 text-center text-neutral-500 font-mono text-sm">
                  Nenhuma marca encontrada para "{searchQuery}".
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {modalFilteredClients.map((client) => (
                    <div
                      key={client.id}
                      className="p-5 rounded-2xl border border-neutral-200 hover:border-black hover:bg-neutral-50 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-black">
                          <BrandLogo id={client.id} className="h-6 w-auto max-w-[130px]" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ff5a23]/10 text-[#ff5a23] font-bold">
                          {client.metric}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-sm font-bold text-black">{client.name}</div>
                        <div className="text-xs text-neutral-500">{client.segment}</div>
                        {client.description && (
                          <p className="text-xs text-neutral-600 pt-1 leading-relaxed">
                            {client.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span>{client.city}</span>
                        <span className="text-black font-semibold">Parceria Markk</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-600 font-mono">
                Deseja colocar sua marca no mesmo patamar dessas empresas?
              </span>
              <a
                href="#contato"
                onClick={() => setModalOpen(false)}
                className="px-6 py-3 rounded-full bg-black hover:bg-[#ff5a23] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Falar com Éder Cavalheiro</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
