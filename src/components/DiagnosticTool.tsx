import React, { useState } from 'react';
import { MARKK_CONTACT } from '../data/markkData';
import { CheckCircle2, MessageCircle, Sparkles, RefreshCcw, ArrowUpRight } from 'lucide-react';

export const DiagnosticTool: React.FC = () => {
  const [stage, setStage] = useState<'stage' | 'bottleneck' | 'revenue' | 'result'>('stage');
  
  const [selectedStage, setSelectedStage] = useState<string>('crescimento');
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('posicionamento');
  const [selectedRevenue, setSelectedRevenue] = useState<string>('50k-200k');

  const getRecommendation = () => {
    let title = 'Arquitetura de Marca & Tração Multicanal';
    let pillars = ['01. Criação de Marcas', '02. Gestão de Redes Sociais', '03. Anúncios Pagos (ROAS)'];
    let timeframe = '60 a 90 dias';
    let summary = 'Sua empresa precisa de um reposicionamento visual refinado para elevar a percepção de valor imediatamente e acelerar a captação de clientes qualificados.';

    if (selectedBottleneck === 'vendas' || selectedBottleneck === 'crm') {
      title = 'Inteligência Comercial & Aceleração de Pipeline';
      pillars = ['03. Anúncios Pagos', '04. CRM & Vendas'];
      timeframe = '30 a 60 dias';
      summary = 'O foco primário deve ser estancar o desperdício de leads através da implantação de CRM, cadência de atendimento e anúncios hiper-segmentados.';
    } else if (selectedStage === 'consolidado') {
      title = 'Full Scope Markk: Reposicionamento & Máquina de Vendas';
      pillars = ['01. Criação de Marcas', '02. Gestão de Redes Sociais', '03. Anúncios Pagos', '04. CRM & Vendas'];
      timeframe = '90 a 120 dias';
      summary = 'Operação em 360° para empresas maduras que necessitam de consolidação de liderança e processos comerciais blindados.';
    }

    return { title, pillars, timeframe, summary };
  };

  const recommendation = getRecommendation();

  const handleSendToWhatsApp = () => {
    const text = `*Diagnóstico Markk - Resumo Estratégico*%0A%0A*Momento:* ${selectedStage}%0A*Gargalo:* ${selectedBottleneck}%0A*Faixa de Faturamento:* ${selectedRevenue}%0A%0A*Escopo Recomendado:* ${recommendation.title}%0A*Pilares:* ${recommendation.pillars.join(', ')}%0A%0AGostaria de conversar com um estrategista da Markk sobre esse diagnóstico.`;
    window.open(`https://wa.me/${MARKK_CONTACT.phoneClean}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setStage('stage');
  };

  return (
    <section id="diagnostico" className="py-20 sm:py-28 bg-[#f8f8f8] border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>FERRAMENTA INTERATIVA DE DIAGNÓSTICO</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-black leading-tight">
            Descubra o escopo ideal para seu momento.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Responda 3 perguntas rápidas para mapear se sua prioridade imediata é Branding, Tração de Mídia ou Estruturação de CRM Comercial.
          </p>
        </div>

        <div className="border border-neutral-200 rounded-3xl bg-white p-8 sm:p-12 max-w-4xl shadow-sm">
          {stage === 'stage' && (
            <div className="space-y-6">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                PASSO 1 DE 3 · QUAL O MOMENTO ATUAL DO SEU NEGÓCIO?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'validando', title: 'Validação & Lançamento', desc: 'Iniciando operação ou lançando nova linha/serviço.' },
                  { id: 'crescimento', title: 'Crescimento Acelerado', desc: 'Empresa já fatura e quer expandir com consistência.' },
                  { id: 'consolidado', title: 'Marca Consolidada', desc: 'Líder em seu nicho buscando reposicionamento e processos.' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedStage(item.id);
                      setStage('bottleneck');
                    }}
                    className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedStage === item.id
                        ? 'border-black bg-[#fafafa]'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-display text-lg font-bold uppercase text-black mb-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {stage === 'bottleneck' && (
            <div className="space-y-6">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                PASSO 2 DE 3 · QUAL É O MAIOR GARGALO HOJE?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'posicionamento', title: 'Branding & Percepção', desc: 'Identidade visual defasada, disputando preço com concorrentes.' },
                  { id: 'atracao', title: 'Falta de Leads & Alcance', desc: 'Pouca audiência nas redes e anúncios com custo por lead muito alto.' },
                  { id: 'vendas', title: 'Vendas & Desperdício de Leads', desc: 'Leads chegam mas o comercial demora ou não fecha com processo.' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedBottleneck(item.id);
                      setStage('revenue');
                    }}
                    className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedBottleneck === item.id
                        ? 'border-black bg-[#fafafa]'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-display text-lg font-bold uppercase text-black mb-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {stage === 'revenue' && (
            <div className="space-y-6">
              <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                PASSO 3 DE 3 · FAIXA DE FATURAMENTO MENSAL
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'ate-50k', title: 'Até R$ 50 mil / mês', desc: 'Foco em validação de margem e atração ágil.' },
                  { id: '50k-200k', title: 'R$ 50k a R$ 200 mil / mês', desc: 'Estruturação de marca e tração multicanal.' },
                  { id: 'acima-200k', title: 'Acima de R$ 200 mil / mês', desc: 'Operação de escala, CRM avançado e autoridade.' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedRevenue(item.id);
                      setStage('result');
                    }}
                    className={`p-6 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedRevenue === item.id
                        ? 'border-black bg-[#fafafa]'
                        : 'border-neutral-200 bg-white hover:border-neutral-400'
                    }`}
                  >
                    <div className="font-display text-lg font-bold uppercase text-black mb-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {stage === 'result' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-bold">
                  DIAGNÓSTICO CONCLUÍDO
                </span>
                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-neutral-500 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>Refazer Diagnóstico</span>
                </button>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-neutral-500 uppercase">
                  ESCOPO SUGERIDO PELA METODOLOGIA MARKK:
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
                  {recommendation.title}
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {recommendation.summary}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#fafafa] border border-neutral-200 space-y-3">
                <div className="text-xs font-mono text-neutral-500 uppercase font-semibold">
                  PILARES RECOMENDADOS:
                </div>
                <div className="flex flex-wrap gap-2">
                  {recommendation.pillars.map((pil, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-300 text-xs font-bold text-black">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5a23]" />
                      <span>{pil}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                <div className="text-xs text-neutral-500 font-mono">
                  PRAZO ESTIMADO: <span className="text-black font-bold">{recommendation.timeframe}</span>
                </div>
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-black hover:bg-[#ff5a23] rounded-full transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#ff5a23]" />
                  <span>Enviar para WhatsApp da Markk (+55 47 98419-6744)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
