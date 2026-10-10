import React, { useState } from 'react';
import { MARKK_CONTACT } from '../data/markkData';
import { Check, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    pillars: [] as string[],
    message: initialMessage,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const togglePillar = (p: string) => {
    setFormData((prev) => ({
      ...prev,
      pillars: prev.pillars.includes(p)
        ? prev.pillars.filter((item) => item !== p)
        : [...prev.pillars, p],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Por favor preencha seu nome, e-mail e telefone/WhatsApp.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = `*Contato via Site Markk*%0A%0A*Nome:* ${formData.name || 'Não informado'}%0A*Empresa:* ${formData.company || 'Não informada'}%0A*E-mail:* ${formData.email || 'Não informado'}%0A*WhatsApp:* ${formData.phone || 'Não informado'}%0A*Interesse:* ${formData.pillars.join(', ') || 'Geral'}%0A*Mensagem:* ${formData.message || 'Gostaria de agendar um café e conversar sobre meu projeto.'}`;
    window.open(`https://wa.me/${MARKK_CONTACT.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Exact Exit.ag Conversion Hierarchy */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
            CONVERSÃO & ALINHAMENTO
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.02] text-balance">
            Negócios valem mais quando viram marcas fortes.
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-300 font-light pt-2">
            Valorize seu negócio com a gente. Vamos tomar um café e conversar sobre a sua empresa?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href={MARKK_CONTACT.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl border border-neutral-800 bg-[#1c1c1c] hover:border-[#ff5a23] transition-colors flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-full bg-[#ff5a23]/20 flex items-center justify-center text-[#ff5a23] shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-neutral-400">WhatsApp Comercial</div>
                <div className="font-bold text-white text-lg group-hover:text-[#ff5a23] transition-colors">
                  {MARKK_CONTACT.phone}
                </div>
                <div className="text-xs text-neutral-400">Atendimento direto com estrategistas</div>
              </div>
            </a>

            <a
              href={`mailto:${MARKK_CONTACT.email}`}
              className="p-6 rounded-2xl border border-neutral-800 bg-[#1c1c1c] hover:border-neutral-600 transition-colors flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-neutral-400">E-mail Institucional</div>
                <div className="font-bold text-white text-base group-hover:text-neutral-200 transition-colors">
                  {MARKK_CONTACT.email}
                </div>
                <div className="text-xs text-neutral-400">Envio de concorrências e RFPs</div>
              </div>
            </a>

            <div className="p-6 rounded-2xl border border-neutral-800 bg-[#1c1c1c] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-[#ff5a23] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-neutral-400">Sede da Agência</div>
                <div className="font-bold text-white text-sm">
                  {MARKK_CONTACT.address}
                </div>
                <div className="text-xs text-neutral-400">Joinville / Santa Catarina</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Agency Form */}
          <div className="lg:col-span-7 border border-neutral-800 rounded-3xl bg-[#1c1c1c] p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#ff5a23]/20 border border-[#ff5a23]/40 text-[#ff5a23] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    Solicitação Recebida com Sucesso
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Recebemos os dados do seu negócio. Nossa equipe entrará em contato em até 4 horas úteis para agendar a conversa.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleOpenWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#ff5a23]" />
                    <span>Agilizar e falar no WhatsApp agora</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                    MARQUE UMA CONVERSA ESTRATÉGICA
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">*Campos essenciais</span>
                </div>

                {error && (
                  <div className="p-3 text-xs text-red-400 bg-red-950/30 border border-red-900/60 rounded">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Rodrigo Mendonça"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5a23] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                      Nome da Sua Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Grupo Alpha"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5a23] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rodrigo@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5a23] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(47) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5a23] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                    Quais pilares sua empresa necessita?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Criação de Marcas',
                      'Criação de Sites & Landing Pages',
                      'Google Ads & Tráfego Pago',
                      'Redes Sociais',
                      'Aceleração Comercial & Vendas',
                      'Modelo de Parceria Estratégica',
                    ].map((pil) => {
                      const selected = formData.pillars.includes(pil);
                      return (
                        <button
                          type="button"
                          key={pil}
                          onClick={() => togglePillar(pil)}
                          className={`p-2.5 rounded-xl border text-xs text-left transition-colors cursor-pointer ${
                            selected
                              ? 'border-[#ff5a23] bg-[#ff5a23]/10 text-white font-bold'
                              : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {pil}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                    Desafio ou objetivo do projeto
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte resumidamente seu momento atual..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff5a23] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#ff5a23] hover:text-white rounded-full transition-colors cursor-pointer"
                  >
                    Enviar Mensagem & Iniciar
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenWhatsAppDirect}
                    className="text-xs text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer font-mono"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#ff5a23]" />
                    <span>Falar direto pelo WhatsApp da Markk</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
