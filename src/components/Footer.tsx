import React from 'react';
import { NexoraLogo } from './NexoraLogo';
import { ArrowUp, Lock, Edit3 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLogin: () => void;
  isEditMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLogin, isEditMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#38BDF8]/20 bg-[#050811] text-[#94A3B8] text-xs pt-12 pb-8 overflow-hidden">
      {/* Background glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#38BDF8]/10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <NexoraLogo size={32} glow={false} interactive={false} />
            <div>
              <span className="font-extrabold text-[#F8FAFC] tracking-wider text-sm">
                NEXORA OS
              </span>
              <p className="text-[11px] text-[#64748B]">
                Kubuntu 26.04 Core • KDE Plasma 6 • Arquitectura Crystalline
              </p>
            </div>
          </div>

          {/* Quick links with the 4 exact requested button names */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#CBD5E1]">
            <button
              onClick={() => onNavigate('informacion')}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              Acerca del Sistema
            </button>
            <button
              onClick={() => onNavigate('descargas')}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              Sección de Descargas
            </button>
            <button
              onClick={() => onNavigate('configuracion')}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              Instrucciones Post Instalación
            </button>
            <button
              onClick={() => onNavigate('creador')}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              Acerca del Creador
            </button>
          </div>

          {/* Back to top & Edit Mode */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenLogin}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] font-mono transition-all cursor-pointer ${
                isEditMode
                  ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-[#38BDF8]'
                  : 'bg-[#112240]/40 border-[#38BDF8]/20 hover:border-[#38BDF8]/40 text-[#64748B] hover:text-[#38BDF8]'
              }`}
              title="Acceso Xanxer (Modo Edición)"
            >
              <Lock className="w-3 h-3" />
              <span>{isEditMode ? 'Xanxer Activo' : 'Acceso Xanxer'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#112240]/60 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#38BDF8] transition-all cursor-pointer"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* User Required Text: 'SYSTEM CORE BY XANXER © 2026' */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-mono text-[11px] tracking-widest text-[#38BDF8] uppercase font-bold">
            SYSTEM CORE BY XANXER © 2026
          </div>

          <p className="text-[10px] text-[#64748B]">
            Nexora OS es un proyecto independiente desarrollado por Xanxer. Kubuntu y Ubuntu son marcas de Canonical Ltd. KDE y Plasma son marcas de KDE e.V.
          </p>
        </div>
      </div>
    </footer>
  );
};
