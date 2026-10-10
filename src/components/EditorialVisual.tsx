import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, TrendingUp, Truck, ShoppingCart, Fish, PackageCheck, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface EditorialVisualProps {
  type: 'hero-reel' | 'supermercado-machado' | 'fassa-pneus' | 'delicious-fish' | 'disjoi-distribuidora';
  className?: string;
}

export const EditorialVisual: React.FC<EditorialVisualProps> = ({ type, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // 1. HERO SHOWREEL VISUAL (Used as visual showcase / fallback)
  if (type === 'hero-reel') {
    return (
      <div className={`relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-3xl overflow-hidden bg-black text-white shadow-2xl border border-neutral-800 ${className}`}>
        {/* Dynamic backdrop grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ff5a23 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient colored lighting glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ff5a23]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#fd3b31]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 h-full p-8 sm:p-12 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a23] animate-ping" />
              <span className="text-white font-bold">SHOWREEL EDITORIAL MARKK 2026</span>
            </div>
            <span className="hidden sm:inline text-neutral-500">PROJETOS · BRANDING · PERFORMANCE</span>
          </div>

          <div className="my-auto py-6 max-w-3xl space-y-3">
            <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              A força visual de quem lidera seu mercado.
            </h3>
            <p className="text-sm sm:text-lg text-neutral-300 font-light max-w-xl">
              Direção de arte precisa, fotografia comercial e campanhas desenhadas para encantar o cliente e acelerar as vendas.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-800/80 pt-4 text-xs font-mono">
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="text-white font-bold">JOINVILLE / SC</span>
              <span>·</span>
              <span>ESTRATÉGIA & DNA ÉDER CAVALHEIRO</span>
            </div>
            <div className="flex items-center gap-2 text-[#ff5a23]">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold">METODOLOGIA EXCLUSIVA</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. CASE SUPERMERCADO MACHADO (Varejo, Ofertas & Alto Volume)
  if (type === 'supermercado-machado') {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#c81e10] via-[#dc2626] to-[#ea580c] text-white p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-red-500/20 ${className}`}>
        {/* Layered graphics texture & subtle overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-72 h-72 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <ShoppingCart className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-bold">SUPERMERCADO MACHADO</span>
          </div>
          <span className="bg-white text-black px-2.5 py-0.5 rounded text-[10px] font-black">
            VAREJO ALIMENTÍCIO
          </span>
        </div>

        {/* Center Campaign Banner Visual */}
        <div className="relative z-10 my-auto py-3">
          <div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                  CAMPANHA DE ALTO VOLUME & OFERTAS
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-none mt-1">
                  SUPER FECHA MÊS MACHADO
                </h4>
              </div>
              <div className="bg-amber-400 text-black px-3 py-1.5 rounded-xl font-mono text-center font-black text-xs shrink-0">
                <div className="text-base font-black leading-none">7.4x</div>
                <div className="text-[9px] uppercase tracking-tighter">ROAS MÉDIO</div>
              </div>
            </div>

            <p className="text-xs text-neutral-200 line-clamp-2">
              Planejamento de ofertas semanais, tablóides digitais e anúncios hiper-localizados em raio de 10km no Meta Ads.
            </p>

            {/* Simulated Offer Showcase Pills */}
            <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono text-center">
              <div className="p-2 rounded-lg bg-white/10 border border-white/15">
                <div className="text-white font-bold text-sm">+35%</div>
                <div className="text-neutral-300 text-[10px]">FLUXO LOJA</div>
              </div>
              <div className="p-2 rounded-lg bg-white/10 border border-white/15">
                <div className="text-white font-bold text-sm">180K+</div>
                <div className="text-neutral-300 text-[10px]">ALCANCE/MÊS</div>
              </div>
              <div className="p-2 rounded-lg bg-white/10 border border-white/15">
                <div className="text-white font-bold text-sm">DIÁRIO</div>
                <div className="text-neutral-300 text-[10px]">GIRO ESTOQUE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Specs */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/90 border-t border-white/20 pt-3">
          <span>META ADS HIPER-LOCAL</span>
          <span>TABLÓIDES & VÍDEOS REELS</span>
        </div>
      </div>
    );
  }

  // 3. CASE FASSA PNEUS (B2B, Transporte Pesado & Google Ads)
  if (type === 'fassa-pneus') {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#262626] text-white p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-neutral-700 ${className}`}>
        {/* Yellow industrial accent geometry */}
        <div className="absolute top-0 right-0 w-80 h-full bg-[#f59e0b]/10 skew-x-12 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#f59e0b]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#f59e0b]">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#f59e0b]/30">
            <Truck className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span className="font-bold text-white">FASSA PNEUS</span>
          </div>
          <span className="bg-[#f59e0b] text-black px-2.5 py-0.5 rounded text-[10px] font-black">
            FROTA PESADA B2B
          </span>
        </div>

        {/* Center Automotive Logistics Visual */}
        <div className="relative z-10 my-auto py-3">
          <div className="bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-neutral-800 shadow-lg space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-[#f59e0b] uppercase tracking-widest font-bold">
                  AUTORIDADE & CAPTAÇÃO DE TRANSPORTADORAS
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-none mt-1">
                  PNEUS DE CARGA & RECAPAGEM
                </h4>
              </div>
              <div className="bg-[#f59e0b] text-black px-3 py-1.5 rounded-xl font-mono text-center font-black text-xs shrink-0">
                <div className="text-base font-black leading-none">+140%</div>
                <div className="text-[9px] uppercase tracking-tighter">COTAÇÕES B2B</div>
              </div>
            </div>

            <p className="text-xs text-neutral-300 line-clamp-2">
              Campanhas de Google Rede de Pesquisa para termos de alta intenção e treinamento comercial para follow-up imediato.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono text-center">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="text-[#f59e0b] font-bold text-sm">&lt; 5 MIN</div>
                <div className="text-neutral-400 text-[10px]">TEMPO RESPOSTA</div>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="text-white font-bold text-sm">+52%</div>
                <div className="text-neutral-400 text-[10px]">VOLUME VENDAS</div>
              </div>
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="text-white font-bold text-sm">FROTAS</div>
                <div className="text-neutral-400 text-[10px]">SEGMENTAÇÃO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Specs */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-3">
          <span>GOOGLE REDE DE PESQUISA</span>
          <span>TREINAMENTO DE VENDAS</span>
        </div>
      </div>
    );
  }

  // 4. CASE DELICIOUS FISH (Branding, Embalagens & Exportação)
  if (type === 'delicious-fish') {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#9a3412] via-[#c2410c] to-[#ea580c] text-white p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-amber-600/30 ${className}`}>
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <Fish className="w-3.5 h-3.5 text-amber-300" />
            <span className="font-bold">DELICIOUS FISH</span>
          </div>
          <span className="bg-amber-400 text-black px-2.5 py-0.5 rounded text-[10px] font-black">
            EXPORTAÇÃO & INDÚSTRIA
          </span>
        </div>

        <div className="relative z-10 my-auto py-3">
          <div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-amber-300 uppercase tracking-widest font-bold">
                  POSICIONAMENTO DE MARCA & PACKAGING
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-none mt-1">
                  DA AMAZÔNIA PRO MUNDO
                </h4>
              </div>
              <div className="bg-amber-400 text-black px-3 py-1.5 rounded-xl font-mono text-center font-black text-xs shrink-0">
                <div className="text-base font-black leading-none">3 PAÍSES</div>
                <div className="text-[9px] uppercase tracking-tighter">MERCADO EXTERNO</div>
              </div>
            </div>

            <p className="text-xs text-neutral-200 line-clamp-2">
              Branding, design de embalagens para pescados nobres e catálogo de exportação para grandes redes e distribuidores.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono text-center">
              <div className="p-2 rounded-lg bg-white/10 border border-white/15">
                <div className="text-white font-bold text-sm">+24</div>
                <div className="text-neutral-300 text-[10px]">DISTRIBUIDORES</div>
              </div>
              <div className="p-2 rounded-lg bg-white/10 border border-white/15">
                <div className="text-white font-bold text-sm">+40%</div>
                <div className="text-neutral-300 text-[10px]">VALOR PERCEBIDO</div>
              </div>
              <div className="p-2 rounded-lg bg-white/10 border border-white/15">
                <div className="text-white font-bold text-sm">PREMIUM</div>
                <div className="text-neutral-300 text-[10px]">PACKAGING</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/90 border-t border-white/20 pt-3">
          <span>DESIGN DE EMBALAGENS</span>
          <span>FILME INSTITUCIONAL & MARCA</span>
        </div>
      </div>
    );
  }

  // 5. CASE DISJOI GAÚCHA (Logística, Frota & Distribuição)
  return (
    <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#881337] via-[#9f1239] to-[#be123c] text-white p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-rose-500/20 ${className}`}>
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <PackageCheck className="w-3.5 h-3.5 text-rose-300" />
          <span className="font-bold">DISJOI GAÚCHA DISTRIBUIDORA</span>
        </div>
        <span className="bg-white text-black px-2.5 py-0.5 rounded text-[10px] font-black">
          LOGÍSTICA & B2B
        </span>
      </div>

      <div className="relative z-10 my-auto py-3">
        <div className="bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono text-rose-300 uppercase tracking-widest font-bold">
                CONSOLIDAÇÃO DE FORÇA LOGÍSTICA
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-none mt-1">
                INTRALOGÍSTICA & FROTAS
              </h4>
            </div>
            <div className="bg-rose-400 text-black px-3 py-1.5 rounded-xl font-mono text-center font-black text-xs shrink-0">
              <div className="text-base font-black leading-none">+290%</div>
              <div className="text-[9px] uppercase tracking-tighter">ENGAJAMENTO</div>
            </div>
          </div>

          <p className="text-xs text-neutral-200 line-clamp-2">
            Posicionamento digital e conteúdos em vídeo valorizando frota, armazenagem ágil e tecnologia de ponta.
          </p>

          <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono text-center">
            <div className="p-2 rounded-lg bg-white/10 border border-white/15">
              <div className="text-white font-bold text-sm">94%</div>
              <div className="text-neutral-300 text-[10px]">RETENÇÃO B2B</div>
            </div>
            <div className="p-2 rounded-lg bg-white/10 border border-white/15">
              <div className="text-white font-bold text-sm">+18</div>
              <div className="text-neutral-300 text-[10px]">NOVOS CLIENTES</div>
            </div>
            <div className="p-2 rounded-lg bg-white/10 border border-white/15">
              <div className="text-white font-bold text-sm">SUL DO BR</div>
              <div className="text-neutral-300 text-[10px]">COBERTURA</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/90 border-t border-white/20 pt-3">
        <span>REDES SOCIAIS CORPORATIVAS</span>
        <span>VÍDEOS DE BASTIDORES & FROTA</span>
      </div>
    </div>
  );
};
