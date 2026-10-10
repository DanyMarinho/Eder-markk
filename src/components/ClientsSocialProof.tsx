import React, { useState } from 'react';
import { CLIENT_LOGOS, TESTIMONIALS } from '../data/markkData';
import { Quote, ArrowUpRight } from 'lucide-react';

export const ClientsSocialProof: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="clientes" className="py-20 sm:py-28 bg-white border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Exact Exit.ag Header Hierarchy */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#ff5a23] font-semibold">
            CLIENTES
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-tight">
            Nossos clientes.
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
            Negócios que ajudamos a valorizar com marcas fortes e tração comercial previsível.
          </p>
        </div>

        {/* Monochromatic Logo Grid on Crisp Light Field */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-[#fafafa] hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[160px] cursor-default"
            >
              <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider group-hover:text-neutral-400">
                {client.segment}
              </div>

              <div className="my-2">
                <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-black group-hover:text-white transition-colors">
                  {client.name}
                </span>
              </div>

              <div className="pt-3 border-t border-neutral-200 group-hover:border-neutral-800 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">IMPACTO</span>
                <span className="text-[#ff5a23] group-hover:text-white font-bold">
                  {client.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Block */}
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
                {TESTIMONIALS.map((t, idx) => (
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
    </section>
  );
};
