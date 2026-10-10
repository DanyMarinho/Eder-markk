/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroExit } from './components/HeroExit';
import { Methodology } from './components/Methodology';
import { Services } from './components/Services';
import { GoogleEcosystemSection } from './components/GoogleEcosystemSection';
import { PartnersEcosystemSection } from './components/PartnersEcosystemSection';
import { Cases } from './components/Cases';
import { ClientsSocialProof } from './components/ClientsSocialProof';
import { FounderSection } from './components/FounderSection';
import { PartnershipSection } from './components/PartnershipSection';
import { DiagnosticTool } from './components/DiagnosticTool';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseModal } from './components/CaseModal';
import { ProjectIntakeModal } from './components/ProjectIntakeModal';
import { CaseStudy, ServicePillar } from './types';
import { MARKK_CONTACT } from './data/markkData';
import { X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPillarForIntake, setSelectedPillarForIntake] = useState<ServicePillar | null>(null);
  const [intakeContext, setIntakeContext] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleOpenIntake = (contextMessage?: string) => {
    setSelectedPillarForIntake(null);
    setIntakeContext(contextMessage || '');
    setIntakeModalOpen(true);
  };

  const handleSelectPillar = (pillar: ServicePillar) => {
    setSelectedPillarForIntake(pillar);
    setIntakeContext(`Interesse no pilar: ${pillar.title} (${pillar.subtitle})`);
    setIntakeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#141414] font-sans selection:bg-[#ff5a23] selection:text-white relative">
      {/* =========================================================================
          STICKY SCROLL HEADER (Appears smoothly when scrolling down)
         ========================================================================= */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'translate-y-0 opacity-100 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-4 shadow-xs'
            : '-translate-y-full opacity-0 pointer-events-none py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <a
            href="#"
            className="text-3xl font-display font-black tracking-tighter text-[#ff5a23]"
          >
            MARKK
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-neutral-600">
            <a href="#gps" className="hover:text-black transition-colors">
              GPS Markk
            </a>
            <a href="#clientes" className="hover:text-black transition-colors">
              Clientes
            </a>
            <a href="#taranua" className="hover:text-black transition-colors">
              Tá na rua
            </a>
            <a href="#ecossistema-parceiros" className="hover:text-black transition-colors">
              Parceiros & Mídia
            </a>
            <a href="#pilares" className="hover:text-black transition-colors">
              Serviços & Sites
            </a>
            <a href="#google-trafego" className="hover:text-black transition-colors">
              Google & Tráfego
            </a>
            <a href="#fundador" className="hover:text-black transition-colors">
              Éder & DNA
            </a>
            <a href="#diagnostico" className="hover:text-black transition-colors">
              Diagnóstico
            </a>
            <a href="#contato" className="hover:text-black transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleOpenIntake('Contato rápido via topo')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
            >
              Fale conosco
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer"
              aria-label="Abrir menu"
            >
              <span className="w-5 h-0.5 bg-black" />
              <span className="w-5 h-0.5 bg-black" />
              <span className="w-5 h-0.5 bg-black" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          EXIT-STYLE FULLSCREEN MENU DRAWER
         ========================================================================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111111] text-white flex flex-col justify-between p-8 sm:p-14 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <span className="text-4xl font-display font-black tracking-tighter text-[#ff5a23]">
              MARKK
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar menu"
            >
              <span>FECHAR</span>
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="my-auto py-10 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#ff5a23] font-mono mb-4 font-bold">
              ESTRUTURA DO SITE
            </div>
            {[
              { label: '01. Abertura & Showreel', href: '#' },
              { label: '02. Sobre Nós (Manifesto)', href: '#sobre' },
              { label: '03. GPS Markk (Metodologia)', href: '#gps' },
              { label: '04. Nossos Clientes (Marcas Reais)', href: '#clientes' },
              { label: '05. Tá na rua (Portfólio & Cases)', href: '#taranua' },
              { label: '06. Ecossistema & Especialistas Parceiros', href: '#ecossistema-parceiros' },
              { label: '07. Os Pilares de Serviços da Markk', href: '#pilares' },
              { label: '08. Google Ads, Busca Local & Sites', href: '#google-trafego' },
              { label: '09. Éder Cavalheiro (DNA & Liderança)', href: '#fundador' },
              { label: '10. Modelo de Parcerias B2B', href: '#parcerias' },
              { label: '11. Diagnóstico Interativo de Negócio', href: '#diagnostico' },
              { label: '12. Vamos Tomar um Café (Contato)', href: '#contato' },
            ].map((item, idx) => (
              <div key={idx}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white hover:text-[#ff5a23] transition-colors leading-tight"
                >
                  {item.label}
                </a>
              </div>
            ))}

            <div className="pt-8">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleOpenIntake();
                }}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors cursor-pointer"
              >
                <span>Marcar uma conversa estratégica</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-400">
            <div>
              <div className="font-bold text-white uppercase tracking-wider mb-1 font-mono">
                Sede Joinville / SC
              </div>
              <p>{MARKK_CONTACT.address}</p>
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider mb-1 font-mono">
                Contato Direto
              </div>
              <p>{MARKK_CONTACT.email}</p>
              <a
                href={MARKK_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#ff5a23] mt-1 inline-flex items-center gap-1 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#ff5a23]" />
                <span>{MARKK_CONTACT.phone}</span>
              </a>
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider mb-1 font-mono">
                Canais Sociais
              </div>
              <a
                href={MARKK_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#ff5a23] transition-colors block"
              >
                Instagram {MARKK_CONTACT.instagram}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MAIN PAGE CONTENT IN EXACT EXIT.AG SEQUENCE
         ========================================================================= */}
      <main>
        {/* 1. HERO S-VIDEO & S-ABOUT (Exact Exit.ag visual in the user screenshot) */}
        <HeroExit
          onOpenMenu={() => setMenuOpen(true)}
          onOpenIntakeModal={() => handleOpenIntake('Solicitação via Hero')}
        />

        {/* 2. S-BANNER-GPS (Exact Exit.ag #ebebeb banner + framework) */}
        <Methodology />

        {/* 3. S-CLIENTES (Nossos Clientes com marcas reais) */}
        <ClientsSocialProof />

        {/* 4. S-JOBS: TÁ NA RUA (Projetos e Campanhas de alto impacto) */}
        <Cases onSelectCase={(caseStudy) => setSelectedCase(caseStudy)} />

        {/* 5. MODELO DE HUB & PARCEIROS HOMOLOGADOS (Tráfego Pago, Sites e Google) */}
        <PartnersEcosystemSection onOpenIntakeModal={() => handleOpenIntake('Interesse em Tráfego, Sites e Ecossistema')} />

        {/* 6. OS PILARES DE SERVIÇOS (Markk Core Capabilities) */}
        <Services onSelectPillar={handleSelectPillar} />

        {/* 7. ECOSSISTEMA GOOGLE, SITES & TRÁFEGO DE ALTA INTENÇÃO */}
        <GoogleEcosystemSection onOpenIntakeModal={() => handleOpenIntake('Interesse no Ecossistema Google & Tráfego')} />

        {/* 8. LIDERANÇA & CULTURA: ÉDER CAVALHEIRO (DNA Markk) */}
        <FounderSection onOpenIntakeModal={() => handleOpenIntake('Solicitação de reunião com Éder Cavalheiro')} />

        {/* 8. MODELO DE PARCERIA & ALIANÇAS B2B */}
        <PartnershipSection onOpenIntakeModal={handleOpenIntake} />

        {/* 9. FERRAMENTA INTERATIVA: DIAGNÓSTICO DE NEGÓCIO */}
        <DiagnosticTool />

        {/* 10. CONVERSÃO & CTA ("Negócios valem mais quando viram marcas fortes") */}
        <ContactSection initialMessage={intakeContext} />
      </main>

      {/* 8. FOOTER INSTITUCIONAL */}
      <Footer />

      {/* CASE DETAILS MODAL */}
      <CaseModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenIntake={(context) => handleOpenIntake(context)}
      />

      {/* PROJECT INTAKE MODAL */}
      <ProjectIntakeModal
        isOpen={intakeModalOpen}
        onClose={() => setIntakeModalOpen(false)}
        selectedPillar={selectedPillarForIntake}
        customContext={intakeContext}
      />
    </div>
  );
}
