import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Shield,
  Cpu,
  Zap,
  Terminal,
  Eye,
  Settings,
  HardDrive,
  Lock,
  Workflow,
  Check
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<'all' | 'plasma' | 'testify' | 'kernel'>('all');

  const technicalPillars = [
    {
      category: 'plasma',
      icon: Layers,
      title: 'KDE Plasma 6 + Wayland Nativo',
      badge: 'Escritorio de Vanguardia',
      description:
        'Plasma 6 reescrito completamente sobre Qt 6. Ofrece escalado fraccional nítido al 100%, 125% o 150%, soporte HDR de 10 bits por canal de color y compositor KWin acelerado por GPU con efecto cristalino.',
      highlights: [
        'Renderizado Wayland sin tearing ni flickering',
        'Gestos multitáctiles fluidos para paneles táctiles',
        'Compositor Crystalline KWin con desenfoque a 16px',
        'Paneles flotantes nativos desprendidos del borde',
      ],
    },
    {
      category: 'testify',
      icon: Sparkles,
      title: 'Testify AI Integrado en el Core',
      badge: 'Inteligencia Nativa',
      description:
        'Asistente de sistema profundamente integrado que interpreta lenguaje natural para ejecutar configuraciones, escribir scripts de automatización y supervisar la salud del hardware.',
      highlights: [
        '100% Local & Privado: No envía telemetría a la nube',
        'Conversión de lenguaje natural a comandos Bash seguros',
        'Diagnóstico proactivo térmico y optimización de batería',
        'Integrado con KRunner y el lanzador de Nexora',
      ],
    },
    {
      category: 'kernel',
      icon: Cpu,
      title: 'Kernel Xanxer Core 2026',
      badge: 'Rendimiento Extremo',
      description:
        'Kernel Linux 6.12 compilado a medida con el programador de tareas Xanxer de baja latencia. Ajustado para exprimir cada ciclo en gaming, edición multimedia y desarrollo.',
      highlights: [
        'ZRAM LZ4 habilitado por defecto para duplicar la memoria',
        'Audio PipeWire profesional con búfer de baja latencia',
        'Drivers Nvidia y Mesa AMD preinstalados y firmados',
        'Planificador BORE/EEVDF adaptativo para cargas pesadas',
      ],
    },
    {
      category: 'base',
      icon: Shield,
      title: 'Base Kubuntu 26.04 LTS',
      badge: 'Roca Firme',
      description:
        'Respaldado por el soporte extendido de Ubuntu hasta 2031. Compatibilidad total con repositorios APT oficiales, Flatpak de Flathub y Snap sin bloatware innecesario.',
      highlights: [
        'Soporte a largo plazo (LTS) garantizado por 5 años',
        'Miles de paquetes de software probados y seguros',
        'Sin aplicaciones promocionales ni bloatware de terceros',
        'Actualizaciones del sistema atómicas y seguras',
      ],
    },
  ];

  const filteredPillars =
    activeFeatureTab === 'all'
      ? technicalPillars
      : technicalPillars.filter((p) => p.category === activeFeatureTab);

  return (
    <section id="informacion" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#38BDF8]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] mb-3">
          <Workflow className="w-3.5 h-3.5" />
          <span>ARQUITECTURA Y ESPECIFICACIONES TÉCNICAS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
          Ingeniería de <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">NEXORA OS</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] text-base">
          Conoce en profundidad los cimientos técnicos que hacen de Nexora un sistema operativo rápido, visualmente imponente y respetuoso de tu privacidad.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'all', label: 'Todos los Pilares' },
            { id: 'plasma', label: 'KDE Plasma 6' },
            { id: 'testify', label: 'Testify AI' },
            { id: 'kernel', label: 'Kernel Xanxer' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFeatureTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFeatureTab === tab.id
                  ? 'bg-[#38BDF8] text-[#050811] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'bg-[#0B192E]/60 text-[#94A3B8] hover:text-[#F8FAFC] border border-[#38BDF8]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl p-8 backdrop-blur-xl bg-[#0B192E]/50 border border-[#38BDF8]/25 hover:border-[#38BDF8]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#112240] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-[#38BDF8] px-2.5 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{pillar.description}</p>

                <div className="space-y-2.5 border-t border-[#38BDF8]/15 pt-4">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#E2E8F0]">
                      <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Banner: Architecture Crystalline */}
      <div className="rounded-3xl p-8 sm:p-10 backdrop-blur-2xl bg-gradient-to-r from-[#0B192E]/90 via-[#071326]/90 to-[#112240]/90 border-2 border-[#38BDF8]/35 shadow-[0_0_35px_rgba(56,189,248,0.15)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest uppercase font-semibold">
              FILOSOFÍA DE DISEÑO
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] mt-2 mb-4">
              ¿Qué es la Arquitectura Crystalline?
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
              La <strong className="text-[#38BDF8]">Arquitectura Crystalline</strong> es el sistema estético y de interfaz concebido por Xanxer para Nexora OS. Rompe con los diseños planos y aburridos aplicando refracciones luminosas inspiradas en cristales facetados, tonalidades abisales (#050811 a #112240) y una paleta de acentos cian brillante (#38BDF8).
            </p>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Cada ventana, widget y panel responde con desenfoques de 16px en tiempo real renderizados mediante KWin en Wayland sin penalizar el rendimiento ni agotar la GPU.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-[#050811]/60 border border-[#38BDF8]/20">
              <div className="text-2xl font-black text-[#38BDF8] font-mono">16px</div>
              <div className="text-xs text-[#94A3B8] mt-1">Desenfoque KWin Blur</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#050811]/60 border border-[#38BDF8]/20">
              <div className="text-2xl font-black text-[#38BDF8] font-mono">120 Hz</div>
              <div className="text-xs text-[#94A3B8] mt-1">Soporte Alta Tasa Wayland</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#050811]/60 border border-[#38BDF8]/20">
              <div className="text-2xl font-black text-[#38BDF8] font-mono">0.0%</div>
              <div className="text-xs text-[#94A3B8] mt-1">Telemetría de Datos</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#050811]/60 border border-[#38BDF8]/20">
              <div className="text-2xl font-black text-[#38BDF8] font-mono">26.04</div>
              <div className="text-xs text-[#94A3B8] mt-1">Versión Base LTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
