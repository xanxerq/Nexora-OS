import React from 'react';
import { NexoraLogo } from './NexoraLogo';
import {
  Download,
  Info,
  Sliders,
  User,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Edit3,
  Bell
} from 'lucide-react';
import { NexoraPageContent } from '../utils/contentStore';

interface HeroSectionProps {
  content: NexoraPageContent;
  isEditMode: boolean;
  onUpdateContent: (partial: Partial<NexoraPageContent>) => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  content,
  isEditMode,
  onUpdateContent,
  onNavigate,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Abyssal Gradients & Crystal Polyhedral Grid (#050811 to #112240) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050811] via-[#081226] to-[#112240] pointer-events-none" />

      {/* Crystalline polyhedral background geometric ambient meshes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#0284C7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#050811" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="120" x2="100%" y2="480" stroke="url(#gridGradHero)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="100%" y1="80" x2="0" y2="600" stroke="url(#gridGradHero)" strokeWidth="1" strokeDasharray="6 8" />
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
        
        {/* Creator Announcement Banner (editable in Edit Mode) */}
        {content.announcementActive && (
          <div className="mb-6 p-2.5 rounded-xl bg-[#050811]/70 border border-[#38BDF8]/30 inline-flex items-center gap-2 text-xs text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.15)] max-w-xl mx-auto">
            <Bell className="w-4 h-4 shrink-0 text-[#38BDF8] animate-bounce" />
            {isEditMode ? (
              <input
                type="text"
                value={content.creatorAnnouncement}
                onChange={(e) => onUpdateContent({ creatorAnnouncement: e.target.value })}
                className="w-full bg-[#112240] px-2 py-1 rounded text-xs text-[#F8FAFC] border border-[#38BDF8]/40 outline-none"
                placeholder="Escribe un anuncio para la comunidad..."
              />
            ) : (
              <span className="truncate">{content.creatorAnnouncement}</span>
            )}
          </div>
        )}

        {/* Official Logo SVG directly centered above the title */}
        <div className="flex justify-center mb-6">
          <NexoraLogo size={135} glow={true} interactive={true} />
        </div>

        {/* Large Title: NEXORA OS (editable) */}
        <div className="relative mb-4">
          {isEditMode ? (
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono text-[#38BDF8] flex items-center gap-1">
                <Edit3 className="w-3 h-3" /> Editar Título Principal:
              </span>
              <input
                type="text"
                value={content.heroTitle}
                onChange={(e) => onUpdateContent({ heroTitle: e.target.value })}
                className="w-full text-center text-4xl sm:text-5xl font-black bg-[#050811]/80 text-[#F8FAFC] border-2 border-[#38BDF8]/50 rounded-2xl py-2 px-4 outline-none focus:border-[#38BDF8]"
              />
            </div>
          ) : (
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#F8FAFC]">
              <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                {content.heroTitle}
              </span>
            </h1>
          )}
        </div>

        {/* Subtitle: KDE Plasma 6 • Arquitectura Crystalline • Testify AI Integrado (editable) */}
        <div className="relative mb-8">
          {isEditMode ? (
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono text-[#38BDF8] flex items-center gap-1">
                <Edit3 className="w-3 h-3" /> Editar Subtítulo:
              </span>
              <input
                type="text"
                value={content.heroSubtitle}
                onChange={(e) => onUpdateContent({ heroSubtitle: e.target.value })}
                className="w-full text-center text-sm sm:text-lg font-medium bg-[#050811]/80 text-[#38BDF8] border border-[#38BDF8]/40 rounded-xl py-2 px-3 outline-none"
              />
            </div>
          ) : (
            <p className="text-base sm:text-xl md:text-2xl font-medium text-[#E2E8F0] tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="text-[#38BDF8] font-semibold">KDE Plasma 6</span>
              <span className="text-[#64748B]">•</span>
              <span className="text-[#F8FAFC]">Arquitectura Crystalline</span>
              <span className="text-[#64748B]">•</span>
              <span className="text-[#38BDF8] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#38BDF8] inline" />
                Testify AI Integrado
              </span>
            </p>
          )}
        </div>

        {/* Description blurb (editable) */}
        <div className="relative mb-10 max-w-2xl mx-auto">
          {isEditMode ? (
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-mono text-[#38BDF8] flex items-center gap-1">
                <Edit3 className="w-3 h-3" /> Editar Descripción:
              </span>
              <textarea
                value={content.heroDescription}
                onChange={(e) => onUpdateContent({ heroDescription: e.target.value })}
                rows={3}
                className="w-full text-center text-xs sm:text-sm bg-[#050811]/80 text-[#CBD5E1] border border-[#38BDF8]/40 rounded-xl p-3 outline-none"
              />
            </div>
          ) : (
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              {content.heroDescription}
            </p>
          )}
        </div>

        {/* Main Central Action: Descargar Ahora */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => onNavigate('descargas')}
            className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] text-white font-black text-lg tracking-wide shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:shadow-[0_0_55px_rgba(56,189,248,0.9)] border-2 border-[#BAE6FD]/70 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] cursor-pointer overflow-hidden min-w-[280px] sm:min-w-[340px]"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform pointer-events-none" />
            <div className="flex items-center justify-center gap-3">
              <Download className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
              <span>Descargar Ahora</span>
            </div>
            <div className="text-xs font-normal text-white/90 mt-1 font-mono tracking-normal">
              {content.downloadVersionText}
            </div>
          </button>
        </div>

        {/* Cuatro Botones Solicitados por el Usuario */}
        <div className="pt-6 border-t border-[#38BDF8]/20">
          <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-4 font-semibold">
            SECCIONES PRINCIPALES
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Botón 1: Acerca del Sistema */}
            <button
              onClick={() => onNavigate('informacion')}
              className="group p-3.5 rounded-xl bg-[#0B192E]/80 hover:bg-[#112240] border border-[#38BDF8]/30 hover:border-[#38BDF8] transition-all duration-300 hover:scale-[1.03] text-left cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-2.5 text-[#38BDF8] mb-1">
                <Info className="w-4 h-4 group-hover:text-white transition-colors" />
                <span className="font-bold text-xs text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  Acerca del Sistema
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8] line-clamp-2">
                Kubuntu 26.04, Plasma 6, Testify AI y Xanxer Kernel.
              </p>
            </button>

            {/* Botón 2: Sección de Descargas */}
            <button
              onClick={() => onNavigate('descargas')}
              className="group p-3.5 rounded-xl bg-[#0B192E]/80 hover:bg-[#112240] border border-[#38BDF8]/30 hover:border-[#38BDF8] transition-all duration-300 hover:scale-[1.03] text-left cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-2.5 text-[#38BDF8] mb-1">
                <Download className="w-4 h-4 group-hover:text-white transition-colors" />
                <span className="font-bold text-xs text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  Sección de Descargas
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8] line-clamp-2">
                ISO 4.2 GB oficial, SHA-256 y compatibilidad.
              </p>
            </button>

            {/* Botón 3: Instrucciones Post Instalación */}
            <button
              onClick={() => onNavigate('configuracion')}
              className="group p-3.5 rounded-xl bg-[#0B192E]/80 hover:bg-[#112240] border border-[#38BDF8]/30 hover:border-[#38BDF8] transition-all duration-300 hover:scale-[1.03] text-left cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-2.5 text-[#38BDF8] mb-1">
                <Sliders className="w-4 h-4 group-hover:text-white transition-colors" />
                <span className="font-bold text-xs text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  Instrucciones Post Instalación
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8] line-clamp-2">
                Cómo configurarlo para que se vea como en la foto.
              </p>
            </button>

            {/* Botón 4: Acerca del Creador */}
            <button
              onClick={() => onNavigate('creador')}
              className="group p-3.5 rounded-xl bg-[#0B192E]/80 hover:bg-[#112240] border border-[#38BDF8]/30 hover:border-[#38BDF8] transition-all duration-300 hover:scale-[1.03] text-left cursor-pointer shadow-md"
            >
              <div className="flex items-center gap-2.5 text-[#38BDF8] mb-1">
                <User className="w-4 h-4 group-hover:text-white transition-colors" />
                <span className="font-bold text-xs text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  Acerca del Creador
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8] line-clamp-2">
                Xanxer, arquitectura y roadmap 2026.
              </p>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
