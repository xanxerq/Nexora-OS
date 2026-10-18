import React from 'react';
import { NexoraLogo } from './NexoraLogo';
import { User, Award, Sparkles, Github, Terminal, Mail, Edit3 } from 'lucide-react';
import { NexoraPageContent } from '../utils/contentStore';

interface CreatorSectionProps {
  content?: NexoraPageContent;
  isEditMode?: boolean;
  onUpdateContent?: (partial: Partial<NexoraPageContent>) => void;
}

export const CreatorSection: React.FC<CreatorSectionProps> = ({
  content,
  isEditMode = false,
  onUpdateContent,
}) => {
  return (
    <section id="creador" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#38BDF8]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] mb-3">
          <User className="w-3.5 h-3.5" />
          <span>AUTORÍA Y DIRECCIÓN DEL PROYECTO</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
          Acerca del Creador: <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">Xanxer</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] text-base">
          La mente detrás del diseño de la Arquitectura Crystalline y la compilación personalizada de Nexora OS.
        </p>
      </div>

      {/* Main Creator Profile Card */}
      <div className="rounded-3xl p-8 sm:p-12 backdrop-blur-2xl bg-[#0B192E]/60 border-2 border-[#38BDF8]/30 shadow-[0_15px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.15)] mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Creator Avatar & Badge */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-36 h-36 rounded-3xl p-1 bg-gradient-to-tr from-[#0284C7] via-[#38BDF8] to-[#BAE6FD] shadow-[0_0_30px_rgba(56,189,248,0.5)] group-hover:shadow-[0_0_45px_rgba(56,189,248,0.8)] transition-all duration-500">
                <div className="w-full h-full rounded-[22px] bg-[#050811] flex items-center justify-center p-3 overflow-hidden">
                  <NexoraLogo size={90} glow={false} interactive={false} />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-[#112240] border border-[#38BDF8] text-[10px] font-mono text-[#38BDF8] font-bold shadow-lg">
                ARCHITECT
              </div>
            </div>

            <h3 className="text-2xl font-black text-[#F8FAFC] mt-5">Xanxer</h3>
            <p className="text-xs text-[#38BDF8] font-mono tracking-wider mt-0.5">
              CUSTOM BUILD ARCHITECT & DESIGNER
            </p>

            <div className="mt-4 px-3 py-1 rounded-full bg-[#050811] border border-[#38BDF8]/20 text-[11px] text-[#94A3B8]">
              "System Core By Xanxer © 2026"
            </div>

            {/* Social / contact buttons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#112240]/80 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#E2E8F0] hover:text-[#38BDF8] transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#configuracion"
                className="p-2.5 rounded-xl bg-[#112240]/80 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#E2E8F0] hover:text-[#38BDF8] transition-all"
                title="Dotfiles & Config"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@nexora.os"
                className="p-2.5 rounded-xl bg-[#112240]/80 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#E2E8F0] hover:text-[#38BDF8] transition-all"
                title="Contacto Directo"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bio & Story */}
          <div className="lg:col-span-8 space-y-4 text-sm text-[#CBD5E1] leading-relaxed">
            <h4 className="text-xl font-bold text-[#F8FAFC] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#38BDF8]" />
              <span>La Visión Detrás de Nexora OS</span>
            </h4>
            
            {isEditMode && onUpdateContent && content ? (
              <div className="p-3 rounded-xl bg-[#050811] border border-[#38BDF8]/40">
                <span className="text-[10px] font-mono text-[#38BDF8] flex items-center gap-1 mb-1">
                  <Edit3 className="w-3 h-3" /> Editar Biografía y Mensaje de Xanxer:
                </span>
                <textarea
                  value={content.creatorBioText}
                  onChange={(e) => onUpdateContent({ creatorBioText: e.target.value })}
                  rows={4}
                  className="w-full text-xs bg-[#112240] text-[#CBD5E1] p-2.5 rounded border border-[#38BDF8]/30 outline-none"
                />
              </div>
            ) : (
              <p>
                {content ? content.creatorBioText : '"Durante años utilicé diferentes distribuciones Linux, pero siempre encontraba el mismo dilema: las distribuciones estables eran visualmente genéricas y aburridas, mientras que las personalizaciones comunitarias requerían horas de retoque y solían romperse tras cada actualización."'}
              </p>
            )}

            <p>
              "Con <strong className="text-[#38BDF8]">Nexora OS</strong>, me propuse fusionar tres pilares que rara vez conviven juntos:
              la solidez inmutable de <strong className="text-[#F8FAFC]">Kubuntu 26.04 LTS</strong>, la fluidez moderna de <strong className="text-[#F8FAFC]">KDE Plasma 6 sobre Wayland</strong> con la <strong className="text-[#38BDF8]">Arquitectura Crystalline</strong>, y la potencia contextual de <strong className="text-[#F8FAFC]">Testify AI</strong> para simplificar la administración del sistema."
            </p>

            <p>
              "La firma <span className="font-mono text-[#38BDF8] bg-[#050811] px-2 py-0.5 rounded border border-[#38BDF8]/30 text-xs">CUSTOM BUILD By Xanxer</span> que aparece en el escritorio oficial es el compromiso personal de entregar una experiencia pulida, libre de telemetría y lista para trabajar o jugar desde el primer minuto."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#38BDF8]/15">
              <div className="p-3 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/15">
                <div className="text-xs font-bold text-[#38BDF8]">100% Open Source</div>
                <div className="text-[11px] text-[#94A3B8]">Libertad y transparencia</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/15">
                <div className="text-xs font-bold text-[#38BDF8]">Zero Bloatware</div>
                <div className="text-[11px] text-[#94A3B8]">Solo lo esencial y optimizado</div>
              </div>
              <div className="p-3 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/15">
                <div className="text-xs font-bold text-[#38BDF8]">Comunidad Activa</div>
                <div className="text-[11px] text-[#94A3B8]">Soporte y retroalimentación</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Project Milestones Roadmap */}
      <div className="rounded-3xl p-8 backdrop-blur-xl bg-[#0B192E]/40 border border-[#38BDF8]/20">
        <h4 className="text-lg font-bold text-[#F8FAFC] mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-[#38BDF8]" />
          <span>Hoja de Ruta del Proyecto Nexora (2026)</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/20">
            <span className="text-[11px] font-mono text-[#10B981] font-bold">COMPLETADO</span>
            <div className="text-sm font-bold text-[#F8FAFC] mt-1">Fase 1: Core Base</div>
            <div className="text-xs text-[#94A3B8] mt-1">
              Portabilidad sobre Kubuntu 26.04 y diseño de la Arquitectura Crystalline original.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/20">
            <span className="text-[11px] font-mono text-[#10B981] font-bold">COMPLETADO</span>
            <div className="text-sm font-bold text-[#F8FAFC] mt-1">Fase 2: Plasma 6 KWin</div>
            <div className="text-xs text-[#94A3B8] mt-1">
              Aceleración Wayland, desenfoque de 16px y panel flotante nativo sin extensiones.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="text-[11px] font-mono text-[#38BDF8] font-bold">ACTUAL</span>
            <div className="text-sm font-bold text-[#F8FAFC] mt-1">Fase 3: Testify AI</div>
            <div className="text-xs text-[#94A3B8] mt-1">
              Integración de motor de lenguaje natural local y diagnóstico proactivo de hardware.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/20">
            <span className="text-[11px] font-mono text-[#64748B] font-bold">PRÓXIMAMENTE</span>
            <div className="text-sm font-bold text-[#F8FAFC] mt-1">Fase 4: Nexora Cloud</div>
            <div className="text-xs text-[#94A3B8] mt-1">
              Sincronización P2P encriptada de temas, atajos y configuraciones entre equipos.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
