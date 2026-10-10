import React from 'react';
import { MARKK_CONTACT } from '../data/markkData';
import { ArrowUp, ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 text-sm border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Main Footer Layout (Exit.ag structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Manifesto Slogan */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-baseline text-4xl font-display font-extrabold tracking-tight text-white">
              <span>MARKK</span>
              <span className="text-[#ff5a23]">.</span>
            </div>

            <p className="font-display text-xl sm:text-2xl text-white font-bold uppercase tracking-tight max-w-sm">
              Marcas, mentes e negócios.
            </p>

            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Agência de comunicação e inteligência comercial de Joinville/SC. Unimos direção de arte de alto padrão, gestão com método de redes sociais, tráfego de alta precisão e estruturação de CRM.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={MARKK_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white hover:border-[#ff5a23] hover:text-[#ff5a23] transition-colors"
                aria-label="Instagram da Markk"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={MARKK_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white hover:border-[#ff5a23] hover:text-[#ff5a23] transition-colors"
                aria-label="WhatsApp da Markk"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${MARKK_CONTACT.email}`}
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white hover:border-[#ff5a23] hover:text-[#ff5a23] transition-colors"
                aria-label="E-mail da Markk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
              ESTRUTURA DO SITE
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#gps" className="text-white hover:text-[#ff5a23] transition-colors">
                  GPS Markk (Metodologia)
                </a>
              </li>
              <li>
                <a href="#pilares" className="text-white hover:text-[#ff5a23] transition-colors">
                  Pilares & Criação de Sites
                </a>
              </li>
              <li>
                <a href="#google-trafego" className="text-white hover:text-[#ff5a23] transition-colors">
                  Google Ads & Tráfego Pago
                </a>
              </li>
              <li>
                <a href="#taranua" className="text-white hover:text-[#ff5a23] transition-colors">
                  Tá na rua (Portfólio)
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-white hover:text-[#ff5a23] transition-colors">
                  Nossos Clientes
                </a>
              </li>
              <li>
                <a href="#parcerias" className="text-white hover:text-[#ff5a23] transition-colors">
                  Modelo de Parceria & B2B
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="text-white hover:text-[#ff5a23] transition-colors">
                  Diagnóstico Estratégico
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white hover:text-[#ff5a23] transition-colors">
                  Marcar uma conversa
                </a>
              </li>
            </ul>
          </div>

          {/* Headquarters & Contacts Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
              SEDE & CONTATO
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block text-sm mb-0.5">Joinville / SC</span>
                  <span className="text-neutral-400">{MARKK_CONTACT.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block text-sm mb-0.5">Telefone & WhatsApp</span>
                  <a href={MARKK_CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white">
                    {MARKK_CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#ff5a23] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block text-sm mb-0.5">Comercial</span>
                  <a href={`mailto:${MARKK_CONTACT.email}`} className="text-neutral-400 hover:text-white">
                    {MARKK_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${MARKK_CONTACT.email}?subject=Trabalhe%20na%20Markk`}
                  className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#ff5a23] font-mono uppercase font-bold"
                >
                  <span>Trabalhe na Markk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} MARKK COMUNICAÇÃO LTDA. TODOS OS DIREITOS RESERVADOS.
          </div>

          <div className="flex items-center gap-6">
            <span>JOINVILLE · SANTA CATARINA</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
