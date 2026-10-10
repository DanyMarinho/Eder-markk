export type PillarCategory = 'branding' | 'sites' | 'social' | 'performance' | 'crm' | 'parceria';

export interface ServicePillar {
  id: PillarCategory;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  kpi: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: PillarCategory;
  categoryLabel: string;
  year: string;
  summary: string;
  challenge: string;
  strategy: string;
  results: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
  visualColor: string;
  accentTag: string;
}

export interface ClientPartner {
  name: string;
  segment: string;
  metric: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  results: string;
}
