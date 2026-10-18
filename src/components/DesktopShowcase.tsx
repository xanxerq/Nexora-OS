import React, { useState } from 'react';
import { NexoraLogo } from './NexoraLogo';
import {
  Sparkles,
  Terminal,
  Settings,
  Folder,
  Globe,
  Bell,
  Volume2,
  Wifi,
  Sun,
  Maximize2,
  Download,
  Info,
  Layers,
  Monitor,
  Code2,
  CheckCircle,
  Copy,
  Sliders
} from 'lucide-react';

interface DesktopShowcaseProps {
  onGoToSetup: () => void;
}

export const DesktopShowcase: React.FC<DesktopShowcaseProps> = ({ onGoToSetup }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'interactive'>('preview');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const hotspots = [
    {
      id: 'wallpaper',
      title: 'Fondo Crystalline Polyhedral',
      desc: 'Wallpaper poligonal facetado abisal (#050811 a #112240) con el isotipo de Nexora OS y tipografía espaciada en el centro geométrico.',
      x: '50%',
      y: '35%',
    },
    {
      id: 'custom-build',
      title: 'Firma "CUSTOM BUILD By Xanxer"',
      desc: 'Elemento distintivo en la esquina inferior derecha con acento cian brillante (#38BDF8) que certifica la compilación oficial del autor.',
      x: '86%',
      y: '84%',
    },
    {
      id: 'dock',
      title: 'Panel Flotante KDE Plasma 6',
      desc: 'Barra de tareas configurada en modo flotante (Floating Panel) de Plasma 6 con esquinas redondeadas, margen inferior y efecto blur de 16px.',
      x: '50%',
      y: '96%',
    },
    {
      id: 'launcher',
      title: 'Nexora App Launcher',
      desc: 'Menú de inicio personalizado con el logo Crystalline que integra el motor Testify AI para búsqueda y lanzamiento de software.',
      x: '3%',
      y: '96%',
    },
    {
      id: 'desktop-icons',
      title: 'Accesos de Sistema',
      desc: 'Enlaces directos de bienvenida a Kubuntu 26.04 y las guías de primeros pasos ("HOW-TO Guides").',
      x: '6%',
      y: '6%',
    },
  ];

  const handleCopyFastfetch = () => {
    const text = `fastfetch --structure Title:OS:Host:Kernel:Uptime:Packages:Shell:Display:DE:WM:WMTheme:Theme:Icons:Terminal:CPU:GPU:Memory`;
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="desktop-showcase" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] mb-3">
          <Monitor className="w-3.5 h-3.5" />
          <span>ENTORNO DE ESCRITORIO OFICIAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
          El Escritorio de <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">NEXORA OS</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] text-base">
          Así luce el entorno tras instalar el sistema o aplicar la configuración en Kubuntu 26.04 con KDE Plasma 6.
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mt-6 p-1.5 rounded-xl bg-[#0B192E]/60 border border-[#38BDF8]/20 max-w-xs mx-auto backdrop-blur-md">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-[#38BDF8] text-[#050811] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            Puntos Clave
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'interactive'
                ? 'bg-[#38BDF8] text-[#050811] shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            Modo Interactivo
          </button>
        </div>
      </div>

      {/* Screen Frame Container */}
      <div className="relative rounded-2xl overflow-hidden border border-[#38BDF8]/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.15)] bg-[#050811]">
        
        {/* Top Window Bar (Simulated Monitor Bezel / Controls) */}
        <div className="px-4 py-2.5 bg-[#070e1c] border-b border-[#38BDF8]/20 flex items-center justify-between text-xs text-[#94A3B8] font-mono">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
            </div>
            <span className="ml-2 text-[11px] text-[#38BDF8]">KDE Plasma 6.2 • Wayland Session • 3840x2160 UHD</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] text-[#64748B]">Kubuntu 26.04 LTS Core</span>
            <button
              onClick={onGoToSetup}
              className="text-[#38BDF8] hover:text-white flex items-center gap-1 transition-colors cursor-pointer text-[11px]"
            >
              <Sliders className="w-3 h-3" />
              <span>Ver cómo configurarlo</span>
            </button>
          </div>
        </div>

        {/* Desktop Surface - Exactly recreating image.png */}
        <div className="relative w-full aspect-video min-h-[460px] sm:min-h-[580px] bg-[#050811] overflow-hidden select-none">
          
          {/* Wallpaper Faceted Polygons (#050811 to #112240) */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="wallP1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B192E" />
                  <stop offset="100%" stopColor="#050811" />
                </linearGradient>
                <linearGradient id="wallP2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0D203D" />
                  <stop offset="100%" stopColor="#0A162B" />
                </linearGradient>
                <linearGradient id="wallP3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#112240" />
                  <stop offset="100%" stopColor="#091424" />
                </linearGradient>
                <linearGradient id="wallP4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#152C52" />
                  <stop offset="100%" stopColor="#0B1A30" />
                </linearGradient>
                <linearGradient id="wallP5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#081426" />
                  <stop offset="100%" stopColor="#03060B" />
                </linearGradient>
              </defs>

              {/* Large crystalline background facet polygons matching image.png */}
              <polygon points="0,0 450,0 320,380 0,320" fill="url(#wallP1)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
              <polygon points="450,0 1100,0 880,310 320,380" fill="url(#wallP3)" stroke="#38BDF8" strokeWidth="0.6" strokeOpacity="0.25" />
              <polygon points="1100,0 1920,0 1520,340 880,310" fill="url(#wallP2)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
              
              <polygon points="0,320 320,380 180,720 0,680" fill="url(#wallP2)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.15" />
              <polygon points="320,380 880,310 960,780 180,720" fill="url(#wallP1)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
              <polygon points="880,310 1520,340 1480,760 960,780" fill="url(#wallP3)" stroke="#38BDF8" strokeWidth="0.6" strokeOpacity="0.25" />
              <polygon points="1520,340 1920,0 1920,620 1480,760" fill="url(#wallP4)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
              
              <polygon points="0,680 180,720 480,1080 0,1080" fill="url(#wallP5)" stroke="#38BDF8" strokeWidth="0.4" strokeOpacity="0.15" />
              <polygon points="180,720 960,780 920,1080 480,1080" fill="url(#wallP1)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
              <polygon points="960,780 1480,760 1420,1080 920,1080" fill="url(#wallP2)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
              <polygon points="1480,760 1920,620 1920,1080 1420,1080" fill="url(#wallP3)" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.2" />
            </svg>
          </div>

          {/* Center Logo & Text ("N E X O R A   O S") as in image.png */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-4">
            <div className="relative">
              <NexoraLogo size={130} glow={true} interactive={false} />
            </div>
            <div className="mt-4 text-center">
              <span className="font-sans font-bold text-sm sm:text-base md:text-lg tracking-[0.45em] text-[#F8FAFC] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                N E X O R A &nbsp; O S
              </span>
            </div>
          </div>

          {/* Top Left Desktop Icons (HOW-TO Guides, Kubuntu Website) */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-5 z-20">
            <button
              onClick={() => onGoToSetup()}
              className="flex flex-col items-center group w-20 cursor-pointer focus:outline-none"
            >
              <div className="w-11 h-11 rounded-lg bg-[#112240]/60 backdrop-blur-md border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/20 group-hover:border-[#38BDF8] transition-all shadow-lg">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] sm:text-xs text-[#E2E8F0] mt-1 font-medium tracking-tight text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-[#38BDF8]">
                HOW-TO Guides
              </span>
            </button>

            <a
              href="https://kubuntu.org"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center group w-20 cursor-pointer focus:outline-none"
            >
              <div className="w-11 h-11 rounded-lg bg-[#112240]/60 backdrop-blur-md border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8]/20 group-hover:border-[#38BDF8] transition-all shadow-lg">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] sm:text-xs text-[#E2E8F0] mt-1 font-medium tracking-tight text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-[#38BDF8]">
                Kubuntu Website
              </span>
            </a>
          </div>

          {/* Bottom Right "CUSTOM BUILD | By Xanxer" badge from image.png */}
          <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-8 z-20 select-none text-right">
            <div className="inline-flex items-center gap-2">
              <span className="text-[9px] sm:text-[11px] font-mono tracking-widest text-[#38BDF8] font-bold uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                CUSTOM BUILD
              </span>
              <span className="w-[2px] h-4 bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
              <span className="text-[11px] sm:text-xs font-semibold text-[#F8FAFC] tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                By Xanxer
              </span>
            </div>
          </div>

          {/* Interactive Pop-up Window: Terminal (Konsole / fastfetch) */}
          {terminalOpen && (
            <div className="absolute top-12 left-6 right-6 sm:left-16 sm:right-auto sm:w-[480px] z-30 rounded-xl bg-[#050811]/90 backdrop-blur-xl border border-[#38BDF8]/40 shadow-2xl overflow-hidden font-mono text-xs animate-scaleIn">
              <div className="px-3 py-2 bg-[#0B192E] border-b border-[#38BDF8]/30 flex items-center justify-between text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span className="text-[#F8FAFC] font-semibold text-[11px]">xanxer@nexora-crystalline:~</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyFastfetch}
                    className="text-[#38BDF8] hover:text-white flex items-center gap-1 cursor-pointer"
                    title="Copiar comando"
                  >
                    {copiedCode ? <CheckCircle className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => setTerminalOpen(false)}
                    className="w-3 h-3 rounded-full bg-[#EF4444] hover:opacity-80 cursor-pointer"
                  />
                </div>
              </div>
              <div className="p-4 space-y-1.5 text-[11px] text-[#E2E8F0] overflow-x-auto max-h-72">
                <div className="text-[#38BDF8]">$ fastfetch</div>
                <div className="text-[#38BDF8] font-bold">xanxer@nexora-os</div>
                <div className="text-[#64748B]">------------------------</div>
                <div><span className="text-[#38BDF8]">OS:</span> Nexora OS 26.04 LTS (Kubuntu Core) x86_64</div>
                <div><span className="text-[#38BDF8]">Host:</span> Crystalline Rig Architecture v2.4</div>
                <div><span className="text-[#38BDF8]">Kernel:</span> 6.12.0-xanxer-crystalline-lowlatency</div>
                <div><span className="text-[#38BDF8]">Uptime:</span> 4 hours, 28 mins</div>
                <div><span className="text-[#38BDF8]">Packages:</span> 2,148 (dpkg), 14 (flatpak)</div>
                <div><span className="text-[#38BDF8]">DE:</span> KDE Plasma 6.2.0</div>
                <div><span className="text-[#38BDF8]">WM:</span> KWin (Wayland - Crystalline Blur 16px)</div>
                <div><span className="text-[#38BDF8]">Theme:</span> Nexora-Abyssal-Glass [KDE]</div>
                <div><span className="text-[#38BDF8]">Icons:</span> Crystalline-Blue-Papirus</div>
                <div><span className="text-[#38BDF8]">CPU:</span> 8x Core Crystalline Virtual Unit</div>
                <div><span className="text-[#38BDF8]">Memory:</span> 2.8 GiB / 32 GiB (9%)</div>
                <div className="mt-2 text-[#10B981]">✔ Testify AI Engine daemon: ACTIVE (local socket listening)</div>
              </div>
            </div>
          )}

          {/* Interactive Pop-up Window: Settings */}
          {settingsOpen && (
            <div className="absolute top-16 right-6 sm:right-16 w-80 sm:w-96 z-30 rounded-xl bg-[#050811]/90 backdrop-blur-xl border border-[#38BDF8]/40 shadow-2xl p-4 animate-scaleIn text-xs">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#38BDF8]/20">
                <div className="flex items-center gap-2 font-semibold text-[#F8FAFC]">
                  <Settings className="w-4 h-4 text-[#38BDF8]" />
                  <span>KDE Plasma 6 • Preferencias de Nexora</span>
                </div>
                <button
                  onClick={() => setSettingsOpen(false)}
                  className="w-3 h-3 rounded-full bg-[#EF4444] cursor-pointer"
                />
              </div>
              <div className="space-y-3 text-[#94A3B8]">
                <div className="flex items-center justify-between">
                  <span>Modo de Panel Flotante:</span>
                  <span className="text-[#38BDF8] font-mono font-bold">Activado</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Desenfoque KWin (Blur):</span>
                  <span className="text-[#38BDF8] font-mono">16px (Cristalino)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Esquema de Color:</span>
                  <span className="text-[#F8FAFC]">Abisal #050811</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Acento del Sistema:</span>
                  <span className="inline-block w-4 h-4 rounded-full bg-[#38BDF8] border border-white/40" />
                </div>
                <button
                  onClick={() => {
                    setSettingsOpen(false);
                    onGoToSetup();
                  }}
                  className="w-full mt-2 py-2 rounded-lg bg-[#38BDF8]/20 hover:bg-[#38BDF8]/30 border border-[#38BDF8]/40 text-[#38BDF8] text-center font-semibold cursor-pointer"
                >
                  Ver Guía de Replicación Completa
                </button>
              </div>
            </div>
          )}

          {/* Interactive Start Menu */}
          {startMenuOpen && (
            <div className="absolute bottom-16 left-3 sm:left-6 w-72 sm:w-80 z-30 rounded-2xl bg-[#0B192E]/95 backdrop-blur-2xl border border-[#38BDF8]/40 shadow-[0_10px_35px_rgba(0,0,0,0.8)] p-4 animate-slideUp">
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#38BDF8]/20">
                <NexoraLogo size={32} glow={false} />
                <div>
                  <div className="font-bold text-sm text-[#F8FAFC]">NEXORA LAUNCHER</div>
                  <div className="text-[10px] text-[#38BDF8] font-mono">Plasma 6 Crystalline</div>
                </div>
              </div>
              <div className="space-y-1.5 text-xs">
                <button
                  onClick={() => {
                    setTerminalOpen(true);
                    setStartMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#38BDF8]/15 text-[#E2E8F0] hover:text-[#38BDF8] cursor-pointer text-left"
                >
                  <Terminal className="w-4 h-4 text-[#38BDF8]" />
                  <div>
                    <div className="font-semibold">Terminal Konsole</div>
                    <div className="text-[10px] text-[#94A3B8]">Abrir fastfetch y consola</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setSettingsOpen(true);
                    setStartMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#38BDF8]/15 text-[#E2E8F0] hover:text-[#38BDF8] cursor-pointer text-left"
                >
                  <Settings className="w-4 h-4 text-[#38BDF8]" />
                  <div>
                    <div className="font-semibold">Preferencias del Sistema</div>
                    <div className="text-[10px] text-[#94A3B8]">Efectos KWin y tema visual</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onGoToSetup();
                    setStartMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#38BDF8]/15 text-[#E2E8F0] hover:text-[#38BDF8] cursor-pointer text-left"
                >
                  <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                  <div>
                    <div className="font-semibold">Testify AI Assistant</div>
                    <div className="text-[10px] text-[#94A3B8]">Asistente contextual integrado</div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Hotspots Mode (Overlay informative markers) */}
          {activeTab === 'preview' && (
            <>
              {hotspots.map((hs) => (
                <div
                  key={hs.id}
                  className="absolute z-25 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: hs.x, top: hs.y }}
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                    className="relative group p-1.5 rounded-full bg-[#050811] border-2 border-[#38BDF8] text-[#38BDF8] shadow-[0_0_15px_#38BDF8] hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                    aria-label={hs.title}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] block animate-ping absolute inset-1.5 opacity-75" />
                    <Info className="w-3.5 h-3.5" />
                  </button>

                  {/* Hotspot tooltip */}
                  {activeHotspot === hs.id && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-[#050811]/95 backdrop-blur-xl border border-[#38BDF8]/40 shadow-2xl text-left z-30 pointer-events-auto">
                      <div className="text-xs font-bold text-[#38BDF8]">{hs.title}</div>
                      <div className="text-[11px] text-[#CBD5E1] mt-1 leading-snug">{hs.desc}</div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Floating Dock (KDE Plasma 6 floating panel) as in image.png */}
          <div className="absolute bottom-2 left-2 right-2 sm:left-4 sm:right-4 z-20 flex justify-between items-center px-3 sm:px-4 py-1.5 rounded-xl bg-[#070e1c]/80 backdrop-blur-2xl border border-[#38BDF8]/25 shadow-[0_8px_30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]">
            
            {/* Dock Left Application Launcher & Pinned Apps */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Start Menu Button (Nexora Icon) */}
              <button
                onClick={() => setStartMenuOpen(!startMenuOpen)}
                className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                  startMenuOpen
                    ? 'bg-[#38BDF8]/30 border-[#38BDF8] shadow-[0_0_12px_#38BDF8]'
                    : 'bg-[#112240]/60 border-[#38BDF8]/30 hover:border-[#38BDF8]'
                }`}
                title="Menú de Inicio Nexora OS"
              >
                <NexoraLogo size={22} glow={false} interactive={false} />
              </button>

              {/* KDE System Settings */}
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="p-1.5 rounded-lg bg-[#112240]/40 hover:bg-[#38BDF8]/20 border border-transparent hover:border-[#38BDF8]/40 text-[#94A3B8] hover:text-[#38BDF8] transition-colors cursor-pointer"
                title="Configuración de KDE Plasma 6"
              >
                <Sliders className="w-5 h-5" />
              </button>

              {/* Discover Software Center */}
              <button
                onClick={() => onGoToSetup()}
                className="p-1.5 rounded-lg bg-[#112240]/40 hover:bg-[#38BDF8]/20 border border-transparent hover:border-[#38BDF8]/40 text-[#38BDF8] transition-colors cursor-pointer"
                title="Discover / Centro de Software"
              >
                <Layers className="w-5 h-5" />
              </button>

              {/* Dolphin File Manager */}
              <button
                onClick={() => setTerminalOpen(true)}
                className="p-1.5 rounded-lg bg-[#112240]/40 hover:bg-[#38BDF8]/20 border border-transparent hover:border-[#38BDF8]/40 text-[#38BDF8] transition-colors cursor-pointer"
                title="Dolphin File Manager"
              >
                <Folder className="w-5 h-5 text-[#38BDF8]" />
              </button>

              {/* Firefox Browser */}
              <a
                href="https://mozilla.org/firefox"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-[#112240]/40 hover:bg-[#38BDF8]/20 border border-transparent hover:border-[#38BDF8]/40 text-[#F97316] transition-colors cursor-pointer"
                title="Firefox Browser"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            {/* Dock Right System Tray & Clock as in image.png */}
            <div className="flex items-center gap-1 sm:gap-2 text-[#94A3B8]">
              <div className="hidden xs:flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 rounded bg-[#050811]/40 border border-[#38BDF8]/10 text-xs">
                <Bell className="w-3.5 h-3.5 hover:text-[#38BDF8] cursor-pointer" />
                <Sun className="w-3.5 h-3.5 hover:text-[#38BDF8] cursor-pointer hidden sm:block" />
                <Wifi className="w-3.5 h-3.5 hover:text-[#38BDF8] cursor-pointer" />
                <Volume2 className="w-3.5 h-3.5 hover:text-[#38BDF8] cursor-pointer" />
              </div>

              {/* Clock (16:43 18/10/26 exactly as in user photo) */}
              <div className="flex flex-col items-center justify-center px-2 py-0.5 rounded bg-[#050811]/60 border border-[#38BDF8]/20 text-[10px] sm:text-xs font-mono font-medium leading-none text-[#F8FAFC]">
                <span>16:43</span>
                <span className="text-[9px] text-[#94A3B8]">18/10/26</span>
              </div>

              {/* Desktop toggle bar */}
              <div className="w-1.5 h-6 rounded-full bg-[#38BDF8]/40 hover:bg-[#38BDF8] cursor-pointer transition-colors" title="Mostrar Escritorio" />
            </div>

          </div>

        </div>

      </div>

      {/* Action Banner directly under the showcase */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#0B192E]/60 border border-[#38BDF8]/20 backdrop-blur-md">
        <div className="text-center sm:text-left">
          <div className="text-sm font-bold text-[#F8FAFC]">
            ¿Quieres este mismo aspecto en tu equipo?
          </div>
          <div className="text-xs text-[#94A3B8]">
            Sigue nuestra guía paso a paso o usa el script de configuración automática para Kubuntu 26.04.
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onGoToSetup}
            className="px-4 py-2 rounded-lg bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#050811] font-bold text-xs shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
          >
            Guía de Configuración
          </button>
        </div>
      </div>
    </section>
  );
};
