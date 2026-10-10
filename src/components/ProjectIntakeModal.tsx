import React, { useState, useEffect } from 'react';
import { MARKK_CONTACT, SERVICE_PILLARS } from '../data/markkData';
import { ServicePillar } from '../types';
import { Check, MessageCircle, X } from 'lucide-react';

interface ProjectIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPillar?: ServicePillar | null;
  customContext?: string;
}

export const ProjectIntakeModal: React.FC<ProjectIntakeModalProps> = ({
  isOpen,
  onClose,
  selectedPillar,
  customContext,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPillars, setSelectedPillars] = useState<string[]>([]);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (selectedPillar) {
      setSelectedPillars([selectedPillar.title]);
    } else {
      setSelectedPillars(['Criação de Marcas', 'Anúncios Pagos']);
    }
  }, [selectedPillar]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const togglePillar = (title: string) => {
    setSelectedPillars((prev) =>
      prev.includes(title) ? prev.filter((p) => p !== title) : [...prev, title]
    );
  };

  const handleLaunchWhatsApp = () => {
    const text = `*Solicitação de Novo Projeto - Markk*%0A%0A*Nome:* ${name || 'Não informado'}%0A*Empresa:* ${company || 'Não informada'}%0A*WhatsApp:* ${phone || 'Não informado'}%0A*E-mail:* ${email || 'Não informado'}%0A*Pilares:* ${selectedPillars.join(', ') || 'Escopo Integrado'}%0A${customContext ? `*Contexto:* ${customContext}%0A` : ''}%0AOlá! Gostaria de agendar uma reunião estratégica com a equipe da Markk.`;
    const url = `https://wa.me/${MARKK_CONTACT.phoneClean}?text=${text}`;
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = url;
    }
    setIsSent(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLaunchWhatsApp();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white text-black border border-neutral-300 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {isSent ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ff5a23]/20 border border-[#ff5a23]/40 text-[#ff5a23] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-black uppercase text-black">
              Conversa Iniciada
            </h3>
            <p className="text-sm text-neutral-600">
              Sua mensagem foi direcionada ao nosso WhatsApp comercial (+55 47 98419-6744). Caso a janela não tenha aberto, clique no botão abaixo.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleLaunchWhatsApp}
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
              >
                Abrir WhatsApp Novamente
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 text-xs font-mono uppercase text-neutral-500 hover:text-black transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold mb-1">
                BRIEFING RÁPIDO · MARKK
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                Marcar uma Conversa
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Conte-nos sobre sua empresa e os objetivos para os próximos meses.
              </p>
            </div>

            {customContext && (
              <div className="p-3 bg-[#f8f8f8] border border-neutral-200 rounded-xl text-xs text-neutral-700 font-mono">
                Contexto: {customContext}
              </div>
            )}

            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-neutral-600 block font-semibold">
                Selecione os Pilares Desejados:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_PILLARS.map((p) => {
                  const selected = selectedPillars.includes(p.title);
                  return (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => togglePillar(p.title)}
                      className={`p-3 rounded-xl border text-xs text-left transition-colors cursor-pointer ${
                        selected
                          ? 'border-black bg-black text-white font-bold'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {p.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono uppercase text-neutral-600 block mb-1 font-semibold">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-neutral-200 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-neutral-600 block mb-1 font-semibold">
                  Empresa / Marca
                </label>
                <input
                  type="text"
                  placeholder="Ex: Prime Empreendimentos"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-neutral-200 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono uppercase text-neutral-600 block mb-1 font-semibold">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(47) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-neutral-200 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-neutral-600 block mb-1 font-semibold">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    placeholder="carlos@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-neutral-200 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#ff5a23]" />
                <span>Enviar Dados & Falar no WhatsApp</span>
              </button>
              <p className="text-[11px] text-neutral-500 text-center mt-2 font-mono">
                Atendimento direto pelo time estratégico da Markk em Joinville/SC.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
