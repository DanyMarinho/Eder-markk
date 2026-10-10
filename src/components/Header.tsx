import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { MARKK_CONTACT } from '../data/markkData';

interface HeaderProps {
  onOpenIntakeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenIntakeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 py-4 shadow-xs'
            : 'bg-white border-b border-neutral-100 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Logo Markk (Exit.ag caliber: bold uppercase sans with dot) */}
          <a
            href="#"
            className="flex items-baseline gap-0.5 text-2xl sm:text-3xl font-display font-extrabold tracking-tighter text-black whitespace-nowrap shrink-0 group"
            aria-label="Markk Agência - Início"
          >
            <span>MARKK</span>
            <span className="text-[#ff5a23] group-hover:scale-125 transition-transform">.</span>
          </a>

          {/* Navigation Links (Exit.ag lowercase/clean rhythm) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-neutral-600">
            <a
              href="#gps"
              className="hover:text-black transition-colors whitespace-nowrap shrink-0"
            >
              GPS Markk
            </a>
            <a
              href="#taranua"
              className="hover:text-black transition-colors whitespace-nowrap shrink-0"
            >
              Tá na rua
            </a>
            <a
              href="#pilares"
              className="hover:text-black transition-colors whitespace-nowrap shrink-0"
            >
              4 Pilares
            </a>
            <a
              href="#clientes"
              className="hover:text-black transition-colors whitespace-nowrap shrink-0"
            >
              Clientes
            </a>
            <a
              href="#sobre"
              className="hover:text-black transition-colors whitespace-nowrap shrink-0"
            >
              Nós
            </a>
          </nav>

          {/* Right Action & Menu Toggle (Exit.ag style: CTA button + ABRIR hamburger) */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenIntakeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] transition-colors rounded-full cursor-pointer shadow-xs active:scale-95"
            >
              <span>Seja marca forte</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Exit-style ABRIR menu toggle with 2 lines */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider text-black hover:text-[#ff5a23] transition-colors cursor-pointer group"
              aria-label="Abrir menu de navegação"
            >
              <span className="hidden sm:inline font-mono">ABRIR</span>
              <div className="flex flex-col gap-1 w-5">
                <span className="h-0.5 w-full bg-black group-hover:bg-[#ff5a23] transition-colors" />
                <span className="h-0.5 w-full bg-black group-hover:bg-[#ff5a23] transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Exit-Style Fullscreen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#111111] text-white flex flex-col justify-between p-8 sm:p-14 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-display font-extrabold tracking-tight text-white flex items-baseline"
            >
              MARKK<span className="text-[#ff5a23]">.</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar menu"
            >
              <span>FECHAR</span>
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="my-auto py-10 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#ff5a23] font-mono mb-4">
              MENU INSTITUCIONAL · MARKK AGÊNCIA
            </div>
            {[
              { label: 'GPS Markk (Metodologia)', href: '#gps' },
              { label: 'Tá na rua (Projetos & Cases)', href: '#taranua' },
              { label: 'Os 4 Pilares de Atuação', href: '#pilares' },
              { label: 'Nossos Clientes', href: '#clientes' },
              { label: 'Sobre Nós (Manifesto)', href: '#sobre' },
              { label: 'Diagnóstico de Negócio', href: '#diagnostico' },
              { label: 'Contato & Localização', href: '#contato' },
            ].map((item, idx) => (
              <div key={idx}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white hover:text-[#ff5a23] transition-colors leading-tight"
                >
                  {item.label}
                </a>
              </div>
            ))}

            <div className="pt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenIntakeModal();
                }}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors"
              >
                <span>Marcar uma conversa estratégica</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-neutral-400">
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
                className="text-white hover:text-[#ff5a23] transition-colors"
              >
                Instagram {MARKK_CONTACT.instagram}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
