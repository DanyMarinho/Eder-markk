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
  whatsappUrl: 'https://wa.me/5547984196744?text=Ol%C3%A1%20%C3%89der%2C%20gostaria%20de%20conversar%20sobre%20parceria%20e%20crescimento%20da%20minha%20empresa%20com%20a%20Markk.',
  slogan: 'Marcas, Mentes e Negócios',
  subheadline: 'Atraia mais clientes e venda mais!',
};

export const METRICS = [
  { value: '+R$ 24M', label: 'Em vendas geradas para clientes', detail: 'Faturamento mensurado nas operações atendidas' },
  { value: '+60', label: 'Empresas aceleradas', detail: 'Varejo, indústria, construtoras e distribuição' },
  { value: '5.8x', label: 'ROAS médio em anúncios pagos', detail: 'Retorno sobre investimento em Meta Ads e Google Ads' },
  { value: '100%', label: 'Alinhamento em modelo de parceria', detail: 'Atuamos lado a lado com a diretoria das empresas' },
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
      'Arquitetura, Posicionamento & Naming Comercial',
      'Manual de Marca & Diretrizes de Aplicação',
      'Fachadas, Embalagens, Frotas & Materiais de PDV',
      'Comunicação Visual Integrada'
    ],
    kpi: 'Percepção de Valor & Diferenciação no Mercado',
    iconName: 'Sparkles',
  },
  {
    id: 'sites',
    number: '02',
    title: 'Criação de Sites & Landing Pages',
    subtitle: 'Páginas de Alta Conversão & Presença Digital',
    description: 'Desenvolvimento de sites institucionais de alto padrão, landing pages velozes e e-commerces projetados com uma única meta: converter visitantes em contatos no WhatsApp e pedidos de orçamento.',
    deliverables: [
      'Landing Pages de Alta Conversão com Carregamento Ultrarrápido',
      'Sites Institucionais com Design Editorial de Alto Padrão',
      'Integração Completa com WhatsApp, CRM e Formulários',
      'Rastreamento Avançado de Eventos (Google Analytics 4 e Pixel)',
      'Otimização Completa para Dispositivos Móveis (Mobile-First)'
    ],
    kpi: 'Taxa de Conversão de Visitantes em Leads Qualificados',
    iconName: 'Globe',
  },
  {
    id: 'performance',
    number: '03',
    title: 'Tráfego Pago & Ecossistema Google',
    subtitle: 'Google Ads, Meta Ads & Alta Intenção de Compra',
    description: 'Gestão científica de anúncios online. No Google, capturamos quem já está buscando o seu produto agora (Rede de Pesquisa, Shopping e Google Maps). No Meta Ads, geramos demanda e autoridade para o seu público ideal.',
    deliverables: [
      'Google Ads de Alta Intenção (Rede de Pesquisa e Palavras de Fundo de Funil)',
      'Google Meu Negócio & Otimização de Busca Local (Maps)',
      'Meta Ads (Instagram e Facebook) com Segmentação por Renda e Comportamento',
      'Criação Contínua de Criativos e Anúncios de Alta Conversão',
      'Otimização Diária de Custo por Lead (CPL) e ROAS'
    ],
    kpi: 'Volume Diário de Contatos no WhatsApp & ROAS Positivo',
    iconName: 'TrendingUp',
  },
  {
    id: 'social',
    number: '04',
    title: 'Gestão de Redes Sociais',
    subtitle: 'Conteúdo com Método, Rotina & Vendas',
    description: 'Conteúdo estratégico com método e rotina comercial. Gravamos, editamos e direcionamos pautas que posicionam a sua empresa como autoridade máxima no seu segmento e atraem compradores prontos para fechar.',
    deliverables: [
      'Pautas Estratégicas Orientadas a Fechamento e Vendas',
      'Direção de Arte & Criação de Carrosséis Informativos',
      'Captação e Edição de Vídeos em Formato Reels',
      'Posicionamento de Liderança dos Sócios e Especialistas',
      'Planejamento de Linha Editorial & Relatórios Semanais'
    ],
    kpi: 'Audiência Qualificada & Engajamento Comercial',
    iconName: 'Share2',
  },
  {
    id: 'crm',
    number: '05',
    title: 'Aceleração Comercial & Vendas',
    subtitle: 'Treinamento de Equipe, CRM & Fechamento',
    description: 'O grande diferencial da Markk liderado por Éder Cavalheiro. Treinamos a sua equipe de vendedores, estruturamos processos no CRM e criamos campanhas de fechamento agressivas para bater metas.',
    deliverables: [
      'Treinamento Motivacional e Técnico para Vendedores',
      'Campanhas de Vendas de Alto Impacto (Super Fecha Mês)',
      'Implantação de CRM e Mapeamento de Funil Comercial',
      'Definição de SLA e Tempo de Resposta ao Lead',
      'Acompanhamento de Metas e Alinhamento de Postura'
    ],
    kpi: 'Taxa de Fechamento de Vendas & Batimento de Metas',
    iconName: 'Layers',
  },
];

export const PARTNERSHIP_MODELS = [
  {
    tag: 'MODELO DE PARCERIA 01',
    title: 'Parceiro Estratégico de Crescimento (Skin in the Game)',
    subtitle: 'Para empresas que buscam um braço de marketing e vendas completo',
    description: 'A Markk não atua como fornecedora terceirizada fria. Nós sentamos na mesa da diretoria, definimos metas de faturamento conjuntas e operamos branding, sites, Google Ads, redes e treinamento comercial de forma contínua.',
    benefits: [
      'Reuniões quinzenais de alinhamento com diretores e sócios',
      'Equipe multidisciplinar dedicada (design, tráfego, web e estratégia)',
      'Alinhamento direto com o time de vendas para garantir aproveitamento dos leads',
      'Acompanhamento de ROI e faturamento gerado'
    ],
    cta: 'Quero a Markk como Parceira do Meu Negócio',
  },
  {
    tag: 'MODELO DE PARCERIA 02',
    title: 'Aliança Comercial & Co-produção B2B',
    subtitle: 'Para consultores, softwares de CRM, representantes e desenvolvedores',
    description: 'Programa de parcerias para profissionais e empresas que atendem clientes B2B e querem oferecer a força de atração, criação de sites e aceleração comercial da Markk, com modelo estruturado de receita compartilhada.',
    benefits: [
      'Remuneração por indicação e receita compartilhada estruturada',
      'Atendimento prioritário para os clientes indicados',
      'Soluções complementares que aumentam o valor do seu serviço',
      'Apoio consultivo direto de Éder Cavalheiro nas propostas'
    ],
    cta: 'Quero Ser um Parceiro Homologado Markk',
  },
];

export const GOOGLE_ECOSYSTEM_PILLARS = [
  {
    title: 'Google Rede de Pesquisa (Fundo de Funil)',
    concept: 'Quem pesquisa no Google quer comprar agora. Colocamos sua empresa no topo quando o cliente digitar exatamente o que você vende.',
    example: 'Ex: "distribuidora de pneus em Joinville", "piscina de fibra preço", "consultoria engenharia civil"',
    benefit: 'Leads com alta intenção de compra imediata'
  },
  {
    title: 'Google Meu Negócio & Busca Local (Maps)',
    concept: 'Mais de 70% das decisões de compra no comércio e serviços começam no mapa do Google. Otimizamos sua presença para dominar a sua região.',
    example: 'Avaliações estratégicas, fotos profissionais, palavras-chave locais e botão direto para ligar ou abrir WhatsApp.',
    benefit: 'Fluxo constante de clientes na sua porta física'
  },
  {
    title: 'Landing Pages & Sites Ultrarrápidos',
    concept: 'O Google penaliza sites lentos e o cliente desiste em 3 segundos. Criamos páginas modernas, rápidas e pensadas para o clique de contato.',
    example: 'Estrutura pensada para celulares, carregamento abaixo de 1.5s e botão de WhatsApp flutuante com rastreamento.',
    benefit: 'Menor custo por lead e maior taxa de conversão'
  },
  {
    title: 'Google Shopping & Remarketing em Display/YouTube',
    concept: 'Para catálogos, distribuidores e e-commerces: exibição visual dos seus produtos com foto e preço direto na vitrine do Google.',
    example: 'Anúncios que perseguem quem visitou seu site e lembram da sua proposta até a decisão final.',
    benefit: 'Presença de marca massiva e recuperação de orçamentos'
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
    name: 'Estruturação da Marca, Site & Oferta',
    concept: 'Definimos a narrativa que convence, a identidade visual e o site/landing page de alta conversão.',
    action: 'Criação de páginas rápidas, materiais comerciais de autoridade e padronização visual em todos os canais.',
  },
  {
    step: '03',
    name: 'Ativação do Tráfego Google & Meta Ads',
    concept: 'Colocamos a máquina para rodar: campanhas no Google e redes sociais para atrair clientes todos os dias.',
    action: 'Geração contínua de novos contatos qualificados no WhatsApp e canais de atendimento da sua empresa.',
  },
  {
    step: '04',
    name: 'Treinamento Comercial, CRM & Parceria Contínua',
    concept: 'O método Éder Cavalheiro: garantir que o vendedor atenda rápido, quebre objeções e feche negócios.',
    action: 'Acompanhamento do CRM, treinamento de postura e cadência comercial para multiplicar as vendas.',
  },
];

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
