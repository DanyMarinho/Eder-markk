import { ServicePillar, CaseStudy, ClientPartner, Testimonial } from '../types';

export const MARKK_CONTACT = {
  founder: 'Éder Cavalheiro',
  founderRole: 'Fundador & Estrategista de Negócios',
  founderBio: 'Especialista em Gestão de Marketing, Aceleração Comercial, Treinador de Vendas e Palestrante. À frente da Markk, une visão de liderança e metodologia prática para transformar empresas em máquinas de vendas.',
  founderInstagram: '@edercavalheiro1',
  founderInstagramUrl: 'https://instagram.com/edercavalheiro1',
  phone: '+55 47 98419-6744',
  phoneClean: '5547984196744',
  email: 'comercial@markk.com.br',
  address: 'Rua Indaial, 786 - Sala 5 - Saguaçu - Joinville/SC',
  city: 'Joinville, Santa Catarina',
  instagram: '@markk.brasil',
  instagramUrl: 'https://instagram.com/markk.brasil',
  whatsappUrl: 'https://wa.me/5547984196744?text=Ol%C3%A1%20%C3%89der%2C%20gostaria%20de%20conversar%20sobre%20o%20crescimento%20da%20minha%20empresa%20com%20a%20Markk.',
  slogan: 'Marcas, Mentes e Negócios',
  subheadline: 'Atraia mais clientes e venda mais!',
};

export const METRICS = [
  { value: '+R$ 24M', label: 'Em vendas geradas para clientes', detail: 'Faturamento mensurado nas operações atendidas' },
  { value: '+60', label: 'Empresas aceleradas', detail: 'Varejo, indústria, construtoras e distribuição' },
  { value: '5.8x', label: 'ROAS médio em anúncios pagos', detail: 'Retorno sobre investimento em tráfego de alta conversão' },
  { value: '4', label: 'Pilares estratégicos integrados', detail: 'Branding, Social, Tráfego e Treinamento Comercial' },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Criação de Marcas',
    subtitle: 'Branding, Naming & Identidade Visual',
    description: 'Direção estratégica e identidade visual que constroem valor, autoridade e desejo. Criamos marcas que se destacam na mente do consumidor para você nunca mais disputar por centavos.',
    deliverables: [
      'Identidade Visual Completa & Redesign de Marca',
      'Arquitetura, Posicionamento & Naming',
      'Manual de Marca & Diretrizes de Aplicação',
      'Fachadas, Embalagens, Frotas & Materiais de PDV',
      'Comunicação Visual Integrada'
    ],
    kpi: 'Percepção de Valor & Diferenciação no Mercado',
    iconName: 'Sparkles',
  },
  {
    id: 'social',
    number: '02',
    title: 'Gestão de Redes Sociais',
    subtitle: 'Conteúdo com Método, Rotina & Vendas',
    description: 'Conteúdo estratégico com método e rotina comercial. Gravamos, editamos e direcionamos pautas que posicionam a sua empresa como autoridade máxima no seu segmento e atraem compradores.',
    deliverables: [
      'Pautas Estratégicas Orientadas a Fechamento',
      'Direção de Arte & Criação de Carrosséis',
      'Captação e Edição de Vídeos em Formato Reels',
      'Posicionamento de Liderança dos Sócios e Especialistas',
      'Planejamento de Linha Editorial & Relatórios Semanais'
    ],
    kpi: 'Audiência Qualificada & Engajamento Comercial',
    iconName: 'Share2',
  },
  {
    id: 'performance',
    number: '03',
    title: 'Anúncios Pagos',
    subtitle: 'Tráfego de Alta Precisão & ROAS',
    description: 'Campanhas cirúrgicas de Meta Ads e Google Ads orientadas a encher o WhatsApp da sua equipe com leads qualificados todos os dias. Otimização diária de verba e foco no menor custo por cliente.',
    deliverables: [
      'Campanhas de Geração de Leads para WhatsApp e Ligações',
      'Google Ads para Capturar Quem Já Está Buscando Seu Produto',
      'Meta Ads com Segmentação Geográfica e de Renda',
      'Criação de Anúncios e Criativos de Alta Conversão',
      'Otimização Diária de ROAS e Custo por Oportunidade'
    ],
    kpi: 'Volume Diário de Leads & Retorno sobre Investimento',
    iconName: 'TrendingUp',
  },
  {
    id: 'crm',
    number: '04',
    title: 'Aceleração Comercial & Vendas',
    subtitle: 'Treinamento de Equipe, CRM & Fechamento',
    description: 'O grande diferencial da Markk liderado por Éder Cavalheiro. Treinamos a sua equipe de vendedores, estruturamos processos no CRM e criamos campanhas de fechamento agressivas para bater metas.',
    deliverables: [
      'Treinamento Motivacional e Técnico para Vendedores',
      'Campanhas de Vendas de Alto Impacto (Super Fecha Mês)',
      'Implantação de CRM e Mapeamento de Funil',
      'Definição de SLA e Tempo de Resposta ao Lead',
      'Acompanhamento de Metas e Alinhamento de Postura'
    ],
    kpi: 'Taxa de Fechamento de Vendas & Batimento de Metas',
    iconName: 'Layers',
  },
];

export const METHODOLOGY_STAGES = [
  {
    step: '01',
    name: 'Diagnóstico & Alinhamento de Meta',
    concept: 'Entendemos o momento da empresa, o ticket médio, os concorrentes e a meta financeira estipulada.',
    action: 'Análise do funil atual, do atendimento dos vendedores e dos pontos fortes a serem valorizados.',
  },
  {
    step: '02',
    name: 'Estruturação da Marca & Oferta',
    concept: 'Definimos a narrativa que convence e a identidade visual que transmite credibilidade imediata.',
    action: 'Criação de materiais, comunicação de autoridade e padronização visual em todos os pontos de contato.',
  },
  {
    step: '03',
    name: 'Ativação de Tráfego & Redes Sociais',
    concept: 'Colocamos a máquina para rodar: anúncios ativos e redes sociais com rotina consistente.',
    action: 'Geração contínua de novos contatos qualificados no WhatsApp e canais de atendimento da sua empresa.',
  },
  {
    step: '04',
    name: 'Treinamento Comercial & Escala',
    concept: 'O método Éder Cavalheiro: garantir que o vendedor atenda rápido, quebre objeções e feche negócios.',
    action: 'Acompanhamento do CRM, treinamento de postura e cadência comercial para multiplicar as vendas.',
  },
];

// CLIENTES REAIS RETIRADOS DIRETAMENTE DO INSTAGRAM DA MARKK (@markk.brasil)
export const CLIENT_LOGOS: ClientPartner[] = [
  { name: 'Supermercado Machado', segment: 'Varejo Alimentício & Hipermercado', metric: 'Branding & Campanhas de Alto Volume' },
  { name: 'Fassa Pneus', segment: 'Atacado & Varejo de Pneus e Frotas', metric: 'Captação Contínua de Clientes' },
  { name: 'Delicious Fish', segment: 'Frigorífico & Indústria de Pescados', metric: 'Da Amazônia pro Mundo' },
  { name: 'Disjoi Gaúcha', segment: 'Distribuição & Logística de Grande Porte', metric: 'Posicionamento B2B Consolidado' },
  { name: 'Dunquer Mat. Elétricos', segment: 'Materiais Elétricos & Iluminação', metric: 'Varejo & Comercial Especializado' },
  { name: 'Azul Viagens Sinop', segment: 'Turismo, Viagens & Experiências', metric: 'Geração de Leads Qualificados' },
  { name: 'AM Construtora', segment: 'Engenharia Civil & Construção', metric: 'Autoridade & Empreendimentos' },
  { name: 'Gaspar Imobiliária', segment: 'Imobiliária & Construtora', metric: 'Campanhas de Lançamentos' },
  { name: 'JM Piscinas', segment: 'Fabricação, Venda & Instalação', metric: 'Atração de Clientes Locais' },
  { name: 'Magalhães Automóveis', segment: 'Revenda & Veículos Multimarcas', metric: 'Campanhas de Giro de Estoque' },
  { name: 'Espaço do Celular', segment: 'Varejo de Tecnologia & Smartphones', metric: 'Engajamento & Redes Sociais' },
  { name: 'Lear Corporativo', segment: 'Indústria & Manufatura', metric: 'Comunicação Interna & Alinhamento' },
];

// CASES REAIS DO INSTAGRAM DA MARKK COM O ESCOPO EXATO
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'supermercado-machado',
    title: 'Supermercado Machado: Campanhas de Alto Impacto e Giro Rápido de Estoque',
    client: 'Supermercado Machado',
    category: 'performance',
    categoryLabel: 'Varejo de Grande Porte & Campanhas',
    year: '2025',
    summary: 'Estratégia completa de ofertas, branding e anúncios com grande volume de atração para o ponto de venda físico e televendas.',
    challenge: 'Manter a liderança de mercado diante da chegada de grandes atacarejos, comunicando qualidade e preço competitivo sem perder margem.',
    strategy: 'Criação de identidade visual vibrante para ofertas semanais, anúncios hiper-localizados em raio de 10km no Meta Ads e alinhamento de campanhas sazonais de alto impacto.',
    results: [
      { label: 'Crescimento de Fluxo em Loja', value: '+35%' },
      { label: 'Alcance Médio Mensal', value: '+180 mil' },
      { label: 'ROAS Médio de Campanhas', value: '7.4x' },
    ],
    deliverables: ['Identidade Visual de Campanhas', 'Encartes Digitais & Impressos', 'Anúncios Hiper-Locais', 'Vídeos Promocionais para Redes Sociais'],
    visualColor: '#d9381e',
    accentTag: 'Varejo & Alto Volume',
  },
  {
    id: 'fassa-pneus',
    title: 'Fassa Pneus: Autoridade no Segmento Pesado e Captação Ativa de Transportadoras',
    client: 'Fassa Pneus',
    category: 'crm',
    categoryLabel: 'Aceleração Comercial & Tráfego B2B',
    year: '2025',
    summary: 'Construção de autoridade no segmento de pneus de carga e frotas, gerando orçamentos diários para os consultores de vendas.',
    challenge: 'Expandir as vendas para frotas e empresas de transporte que compravam de representantes tradicionais.',
    strategy: 'Campanhas no Google Ads para termos de busca de alta intenção (pneus para caminhão, recapagem) e treinamento comercial para follow-up imediato via WhatsApp.',
    results: [
      { label: 'Aumento nas Cotações B2B', value: '+140%' },
      { label: 'Tempo de Resposta ao Lead', value: '< 5 min' },
      { label: 'Volume de Pneus Vendidos', value: '+52%' },
    ],
    deliverables: ['Campanhas de Google Ads & Meta Ads', 'Treinamento de Vendas B2B', 'Roteiro de Atendimento no WhatsApp', 'Identidade para Ponto de Venda'],
    visualColor: '#f59e0b',
    accentTag: 'B2B & Pneus Pesados',
  },
  {
    id: 'delicious-fish',
    title: 'Delicious Fish: Da Amazônia pro Mundo — Posicionamento de Marca e Exportação',
    client: 'Delicious Fish',
    category: 'branding',
    categoryLabel: 'Criação de Marcas & Indústria',
    year: '2024 - 2025',
    summary: 'Construção da identidade visual e narrativa institucional de frigorífico de pescados nobres para o mercado nacional e internacional.',
    challenge: 'Transmitir a pureza, sustentabilidade e excelência dos peixes nativos da Amazônia em embalagens e catálogos para distribuidores e grandes redes.',
    strategy: 'Desenvolvimento do posicionamento "Da Amazônia pro Mundo", novo universo visual com tons solares e embalagens com alto apelo de prateleira e exportação.',
    results: [
      { label: 'Novos Distribuidores Nacionais', value: '+24' },
      { label: 'Abertura de Mercados Externos', value: '3 países' },
      { label: 'Percepção de Valor do Produto', value: '+40%' },
    ],
    deliverables: ['Manual de Identidade Visual', 'Design de Embalagens', 'Catálogo Comercial para Exportação', 'Filme Institucional'],
    visualColor: '#c2410c',
    accentTag: 'Branding & Exportação',
  },
  {
    id: 'disjoi-distribuidora',
    title: 'Disjoi Gaúcha: Consolidação da Força de Distribuição e Presença Digital B2B',
    client: 'Disjoi Gaúcha Distribuidora',
    category: 'social',
    categoryLabel: 'Redes Sociais & Endomarketing',
    year: '2024',
    summary: 'Posicionamento estratégico da distribuidora e intralogística, valorizando a frota, a rapidez de entrega e a solidez operacional.',
    challenge: 'Humanizar a operação logística e gerar autoridade perante indústrias e clientes varejistas do sul do Brasil.',
    strategy: 'Conteúdo em vídeo mostrando bastidores, agilidade de despacho e tecnologia de armazenagem, integrando com treinamentos de engajamento da equipe.',
    results: [
      { label: 'Engajamento no Setor Logístico', value: '+290%' },
      { label: 'Retenção de Clientes B2B', value: '94%' },
      { label: 'Captação de Novos Parceiros', value: '+18 no ano' },
    ],
    deliverables: ['Pauta Editorial Semanal', 'Vídeos de Bastidores e Frota', 'Comunicação Interna e Endomarketing', 'Catálogo Digital'],
    visualColor: '#b91c1c',
    accentTag: 'Logística & Distribuição',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'O Éder e a equipe da Markk trouxeram uma injeção de ânimo e método para os nossos vendedores. Não é apenas postar em rede social; eles entendem de fechar negócio e de bater meta.',
    author: 'Equipe de Operações',
    role: 'Diretoria Comercial',
    company: 'Supermercado Machado',
    results: '+35% de fluxo de clientes e campanhas com ROAS de 7.4x',
  },
  {
    quote: 'Com a Markk, nossos consultores passaram a receber ligações e mensagens de transportadoras todos os dias. O treinamento do Éder fez toda a diferença no tempo de fechamento.',
    author: 'Gestão de Frotas',
    role: 'Gerência Geral',
    company: 'Fassa Pneus',
    results: '+140% de aumento nas cotações e vendas de pneus de carga',
  },
  {
    quote: 'A criação da marca Delicious Fish colocou o nosso pescado em outro patamar de negociação com grandes redes e importadores. O posicionamento fez a diferença.',
    author: 'Diretoria Executiva',
    role: 'Fundador',
    company: 'Delicious Fish da Amazônia',
    results: 'Expansão para distribuidores de todo o Brasil e exportação',
  },
];
