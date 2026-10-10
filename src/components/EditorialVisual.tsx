import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, TrendingUp, Truck, ShoppingCart, Fish, PackageCheck } from 'lucide-react';

interface EditorialVisualProps {
  type: 'hero-reel' | 'supermercado-machado' | 'fassa-pneus' | 'delicious-fish' | 'disjoi-distribuidora';
  className?: string;
}

export const EditorialVisual: React.FC<EditorialVisualProps> = ({ type, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (type === 'supermercado-machado') {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#e02b1b] via-[#ea3c1d] to-[#ff5a23] text-white p-8 flex flex-col justify-between shadow-md ${className}`}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
          <span className="font-bold">VAREJO SUPERMERCADISTA</span>
          <span className="bg-black/20 px-3 py-1 rounded-full">CAMPANHAS DE ALTO IMPACTO</span>
        </div>

        <div className="relative z-10 my-auto py-4 flex items-center justify-between gap-6">
          <div className="space-y-2 max-w-sm">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded font-bold text-xs font-mono">
              <ShoppingCart className="w-3.5 h-3.5 text-[#e02b1b]" />
              <span>SUPERMERCADO MACHADO</span>
            </div>
            <h4 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-none">
              GIRO RÁPIDO & OFERTAS
            </h4>
            <p className="text-xs text-white/90 font-medium">
              Estratégia completa de anúncios locais e tablóides de oferta com atração massiva para as lojas físicas.
            </p>
          </div>

          <div className="hidden sm:flex flex-col gap-2 font-mono text-center shrink-0">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/20">
              <div className="text-2xl font-black text-white">+35%</div>
              <div className="text-[10px] text-white/80">FLUXO EM LOJA</div>
            </div>
            <div className="bg-black/30 p-2.5 rounded-xl text-[10px] text-amber-300 font-bold">
              ROAS 7.4x
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/80 border-t border-white/20 pt-4">
          <span>META ADS HIPER-LOCAL</span>
          <span>TABLÓIDES DIGITAIS</span>
        </div>
      </div>
    );
  }

  if (type === 'fassa-pneus') {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#111111] via-[#1c1c1c] to-[#242424] text-white p-8 flex flex-col justify-between border border-neutral-200 shadow-md ${className}`}>
        {/* Yellow truck accent color */}
        <div className="absolute top-0 right-0 w-64 h-full bg-[#f59e0b]/10 skew-x-12 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#f59e0b]">
          <span className="font-bold">FROTA PESADA & TRANSPORTE</span>
          <span className="bg-[#f59e0b]/20 text-[#f59e0b] px-3 py-1 rounded-full">B2B & VAREJO</span>
        </div>

        <div className="relative z-10 my-auto py-4">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b] text-black px-3 py-1 rounded font-black text-xs font-mono mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>FASSA PNEUS</span>
          </div>
          <h4 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-none mb-2">
            PNEUS DE CARGA & FROTAS
          </h4>
          <p className="text-xs text-neutral-300 max-w-sm font-normal">
            Geração de cotações contínuas de transportadoras e treinamento da equipe comercial para atendimento imediato.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="px-3 py-1.5 bg-black/60 rounded border border-neutral-700 text-xs font-mono text-white">
              <strong className="text-[#f59e0b]">+140%</strong> COTAÇÕES NO WHATSAPP
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              SLA &lt; 5 MIN
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-800 pt-4">
          <span>GOOGLE ADS DE ALTA INTENÇÃO</span>
          <span>TREINAMENTO DE VENDAS</span>
        </div>
      </div>
    );
  }

  if (type === 'delicious-fish') {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#c2410c] via-[#ea580c] to-[#f97316] text-white p-8 flex flex-col justify-between shadow-md ${className}`}>
        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
          <span className="font-bold">INDÚSTRIA DE PESCADOS</span>
          <span className="bg-black/20 px-3 py-1 rounded-full">DA AMAZÔNIA PRO MUNDO</span>
        </div>

        <div className="relative z-10 my-auto py-4">
          <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded font-bold text-xs font-mono mb-2">
            <Fish className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>DELICIOUS FISH</span>
          </div>
          <h4 className="font-display text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-2">
            DA AMAZÔNIA PRO MUNDO
          </h4>
          <p className="text-xs sm:text-sm text-white/90 max-w-md">
            Branding, identidade visual e design de embalagens para frigorífico de pescados nobres exportados para grandes redes e exterior.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/90 border-t border-white/20 pt-4">
          <span>PACKAGING & MARCA</span>
          <span>CATÁLOGO DE EXPORTAÇÃO</span>
        </div>
      </div>
    );
  }

  // disjoi-distribuidora
  return (
    <div className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#991b1b] via-[#b91c1c] to-[#dc2626] text-white p-8 flex flex-col justify-between shadow-md ${className}`}>
      <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/90">
        <span className="font-bold">DISTRIBUIÇÃO & LOGÍSTICA</span>
        <span className="bg-black/20 px-3 py-1 rounded-full">INTRALOGÍSTICA & B2B</span>
      </div>

      <div className="relative z-10 my-auto py-4">
        <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 rounded font-bold text-xs font-mono mb-2">
          <PackageCheck className="w-3.5 h-3.5 text-[#b91c1c]" />
          <span>DISJOI GAÚCHA</span>
        </div>
        <h4 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-tight leading-none mb-2">
          FORÇA LOGÍSTICA B2B
        </h4>
        <p className="text-xs text-white/90 max-w-sm">
          Posicionamento digital e vídeos mostrando agilidade de armazenagem, tecnologia de frota e segurança de entrega.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-black/30 rounded text-xs font-mono text-white">
          <span>+290% Engajamento no Setor Logístico</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white/90 border-t border-white/20 pt-4">
        <span>REDES SOCIAIS CORPORATIVAS</span>
        <span>VÍDEOS DE BASTIDORES</span>
      </div>
    </div>
  );
};
