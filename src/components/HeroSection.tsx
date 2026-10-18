import React from 'react';
import { NexoraLogo } from './NexoraLogo';
import { Download, Terminal, Cpu, ShieldCheck, Sparkles, ChevronRight, Layers } from 'lucide-react';

interface HeroSectionProps {
  onSelectEdition: (edition: 'client' | 'server') => void;
  onExploreDesktop: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectEdition,
  onExploreDesktop,
}) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Abyssal Gradients & Crystal Polyhedral Grid (#050811 to #112240) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#081226] to-[#112240] pointer-events-none" />

      {/* Crystalline polyhedral background geometric ambient meshes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#050811" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="120" x2="100%" y2="480" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="100%" y1="80" x2="0" y2="600" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="6 8" />
          <polygon points="120,40 380,220 210,340" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
          <polygon points="850,90 1200,280 980,450" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.25" />
          <polygon points="400,600 700,450 620,720" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.15" />
        </svg>
      </div>

      {/* Cyan Light orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#38BDF8]/12 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-[#0284C7]/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Central Glassmorphic Container (backdrop-filter: blur(16px), styled strictly with user constraints) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-[16px] bg-[#0b192e]/45 border border-[#38BDF8]/30 shadow-[0_16px_48px_0_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.12),0_0_40px_rgba(56,189,248,0.12)] text-center transition-all duration-500">
        
        {/* Subtle decorative crystal badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#112240]/80 border border-[#38BDF8]/40 mb-6 text-xs font-mono text-[#38BDF8] tracking-wider shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span>KUBUNTU 26.04 LTS CORE • RELEASE CANDIDATE</span>
        </div>

        {/* Official Logo SVG Embedded directly above the title */}
        <div className="flex justify-center mb-6">
          <NexoraLogo size={140} glow={true} interactive={true} />
        </div>

        {/* Título grande: NEXORA OS */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#F8FAFC] mb-4">
          <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            NEXORA OS
          </span>
        </h1>

        {/* Subtítulo: KDE Plasma 6 • Arquitectura Crystalline • Testify AI Integrado */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#E2E8F0] mb-8 tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-[#38BDF8] font-semibold">KDE Plasma 6</span>
          <span className="text-[#64748B]">•</span>
          <span className="text-[#F8FAFC]">Arquitectura Crystalline</span>
          <span className="text-[#64748B]">•</span>
          <span className="text-[#38BDF8] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#38BDF8] inline" />
            Testify AI Integrado
          </span>
        </p>

        {/* Description blurb */}
        <p className="max-w-2xl mx-auto text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-10">
          La distribución Linux de vanguardia optimizada para desarrolladores, creadores y entusiastas del diseño visual.
          Construida sobre la solidez de Kubuntu 26.04 con Wayland de baja latencia y compositor translúcido KWin Crystalline.
        </p>

        {/* Dos botones centrales muy llamativos con efectos al pasar el ratón por encima */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
          {/* Botón 1: Descargar Client Edition */}
          <button
            onClick={() => onSelectEdition('client')}
            className="w-full sm:w-auto group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] text-white font-bold text-base tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] border border-[#BAE6FD]/60 transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] cursor-pointer overflow-hidden"
            aria-label="Descargar Client Edition"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform pointer-events-none" />
            
            <div className="flex items-center justify-center gap-3">
              <Download className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
              <span>Descargar Client Edition</span>
            </div>
            <div className="text-[11px] font-normal text-white/90 mt-0.5 font-mono">
              Desktop GUI • 4.2 GB • Wayland • x86_64
            </div>
          </button>

          {/* Botón 2: Descargar Server Edition */}
          <button
            onClick={() => onSelectEdition('server')}
            className="w-full sm:w-auto group relative px-8 py-4 rounded-xl bg-[#0B192E]/90 hover:bg-[#112240] text-[#F8FAFC] font-bold text-base tracking-wide border-2 border-[#38BDF8]/60 hover:border-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] cursor-pointer overflow-hidden"
            aria-label="Descargar Server Edition"
          >
            {/* Subtle glow border reflection */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent transition-transform pointer-events-none" />

            <div className="flex items-center justify-center gap-3">
              <Terminal className="w-5 h-5 text-[#38BDF8] group-hover:text-white transition-colors" />
              <span>Descargar Server Edition</span>
            </div>
            <div className="text-[11px] font-normal text-[#94A3B8] group-hover:text-[#BAE6FD] mt-0.5 font-mono transition-colors">
              Headless & Cockpit • 1.8 GB • Xanxer Kernel
            </div>
          </button>
        </div>

        {/* Feature quick badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#38BDF8]/20 text-left">
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#050811]/40 border border-[#38BDF8]/15">
            <Cpu className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#F8FAFC]">Kubuntu 26.04</div>
              <div className="text-[10px] text-[#94A3B8]">LTS Core Estable</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#050811]/40 border border-[#38BDF8]/15">
            <Layers className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#F8FAFC]">Plasma 6.2</div>
              <div className="text-[10px] text-[#94A3B8]">KWin Crystalline</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#050811]/40 border border-[#38BDF8]/15">
            <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#F8FAFC]">Testify AI</div>
              <div className="text-[10px] text-[#94A3B8]">Asistencia Nativa</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#050811]/40 border border-[#38BDF8]/15">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#F8FAFC]">Zero Telemetría</div>
              <div className="text-[10px] text-[#94A3B8]">100% Privado</div>
            </div>
          </div>
        </div>

        {/* Quick button to view the screenshot / photo section */}
        <div className="mt-8">
          <button
            onClick={onExploreDesktop}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#38BDF8] hover:text-[#7DD3FC] transition-colors cursor-pointer group"
          >
            <span>Ver cómo se ve el escritorio oficial en acción</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
