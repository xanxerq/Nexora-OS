import React, { useState } from 'react';
import {
  Download,
  Cpu,
  CheckCircle,
  Copy,
  ExternalLink,
  Sparkles,
  Layers,
  Hash,
  ShieldCheck,
  Usb,
  HardDrive
} from 'lucide-react';
import { checkHardwareCompatibility, HardwareSpecs } from '../utils/nexoraUtils';

export const DownloadsSection: React.FC = () => {
  const [copiedSha, setCopiedSha] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Hardware compatibility calculator state
  const [specs, setSpecs] = useState<HardwareSpecs>({
    ramGb: 16,
    cpuCores: 6,
    diskGb: 120,
    is64Bit: true,
    hasUefi: true,
  });

  const compat = checkHardwareCompatibility(specs);
  const officialSha = 'e7b92f3a408b1c592a83f9c6d4e1a7b8c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2500);
  };

  const handleDownload = () => {
    setDownloadModalOpen(true);
  };

  return (
    <section id="descargas" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background cyan blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0284C7]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] mb-3">
          <Download className="w-3.5 h-3.5" />
          <span>CANAL OFICIAL DE DESCARGA 2026</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
          Descarga Oficial de <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">NEXORA OS</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] text-base">
          Imagen ISO oficial compilada sobre Kubuntu 26.04 Core con KDE Plasma 6, arquitectura Crystalline y Testify AI integrado.
        </p>
      </div>

      {/* Main Single Download Card */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative rounded-3xl p-8 sm:p-12 backdrop-blur-2xl bg-[#0B192E]/75 border-2 border-[#38BDF8]/50 shadow-[0_15px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(56,189,248,0.2)] transition-all duration-300">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#38BDF8]/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] flex items-center justify-center text-white shadow-[0_0_20px_#38BDF8] shrink-0">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#F8FAFC]">
                    Nexora OS 26.04 LTS
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] font-bold">
                    OFICIAL
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#38BDF8] font-mono mt-1">
                  Kubuntu 26.04 Base • KDE Plasma 6.2 • Wayland • x86_64
                </p>
              </div>
            </div>

            {/* Quick action button */}
            <button
              onClick={handleDownload}
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] border border-[#BAE6FD]/70 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5 shrink-0"
            >
              <Download className="w-5 h-5 text-white" />
              <span>Descargar Ahora (4.2 GB)</span>
            </button>
          </div>

          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed my-6">
            La imagen estándar contiene todo lo necesario para comenzar: instalador gráfico Calamares de última generación, drivers gráficos propietarios Nvidia y código abierto Mesa AMD/Intel preconfigurados, compositor KWin Crystalline con desenfoque de 16px y el asistente Testify AI nativo en local.
          </p>

          {/* Technical specifications grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#050811]/70 border border-[#38BDF8]/20 text-xs font-mono mb-6">
            <div>
              <span className="text-[#94A3B8] block text-[11px]">Tamaño de Descarga:</span>
              <span className="font-bold text-[#F8FAFC] text-sm">4.2 GB</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block text-[11px]">Entorno de Escritorio:</span>
              <span className="font-bold text-[#38BDF8] text-sm">KDE Plasma 6.2</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block text-[11px]">Servidor Gráfico:</span>
              <span className="font-bold text-[#F8FAFC] text-sm">Wayland Nativo</span>
            </div>
            <div>
              <span className="text-[#94A3B8] block text-[11px]">Kernel Xanxer:</span>
              <span className="font-bold text-[#38BDF8] text-sm">6.12.0 Crystalline</span>
            </div>
          </div>

          {/* SHA256 Checksum box */}
          <div className="p-4 rounded-2xl bg-[#050811]/80 border border-[#38BDF8]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="overflow-hidden w-full">
              <span className="text-[#94A3B8] text-xs flex items-center gap-1.5 font-mono mb-1">
                <Hash className="w-3.5 h-3.5 text-[#38BDF8]" /> SHA-256 Checksum Oficial:
              </span>
              <code className="text-xs text-[#CBD5E1] block truncate font-mono select-all">
                {officialSha}
              </code>
            </div>

            <button
              onClick={() => copyToClipboard(officialSha)}
              className="px-4 py-2 rounded-xl bg-[#112240] hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] flex items-center gap-2 transition-colors cursor-pointer shrink-0"
            >
              {copiedSha ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981]">¡Checksum Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Hash</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Interactive Hardware Requirements Calculator */}
      <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-[#0B192E]/50 border border-[#38BDF8]/25 shadow-xl mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#38BDF8]/20">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#38BDF8]">
              <Cpu className="w-4 h-4" />
              <span>COMPROBADOR DE COMPATIBILIDAD DE HARDWARE</span>
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mt-1">
              ¿Tu equipo puede ejecutar Nexora OS?
            </h3>
            <p className="text-xs text-[#94A3B8]">
              Ajusta los deslizadores según las especificaciones de tu ordenador para verificar el rendimiento esperado.
            </p>
          </div>

          {/* Status Badge */}
          <div className="px-4 py-2 rounded-xl bg-[#050811] border border-[#38BDF8]/40 text-xs">
            <span className="text-[#94A3B8] block text-[10px]">Rendimiento Estimado:</span>
            <span className={`font-bold font-mono text-sm ${compat.canRun ? 'text-[#38BDF8]' : 'text-[#EF4444]'}`}>
              {compat.tier.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* RAM Slider */}
          <div className="p-4 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/15">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#94A3B8]">Memoria RAM:</span>
              <span className="text-sm font-bold text-[#38BDF8] font-mono">{specs.ramGb} GB</span>
            </div>
            <input
              type="range"
              min="1"
              max="64"
              value={specs.ramGb}
              onChange={(e) => setSpecs({ ...specs, ramGb: parseInt(e.target.value) })}
              className="w-full accent-[#38BDF8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
              <span>1 GB</span>
              <span>16 GB</span>
              <span>64 GB</span>
            </div>
          </div>

          {/* CPU Cores */}
          <div className="p-4 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/15">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#94A3B8]">Núcleos de Procesador:</span>
              <span className="text-sm font-bold text-[#38BDF8] font-mono">{specs.cpuCores} Cores</span>
            </div>
            <input
              type="range"
              min="1"
              max="16"
              value={specs.cpuCores}
              onChange={(e) => setSpecs({ ...specs, cpuCores: parseInt(e.target.value) })}
              className="w-full accent-[#38BDF8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
              <span>1 Core</span>
              <span>8 Cores</span>
              <span>16 Cores</span>
            </div>
          </div>

          {/* Storage */}
          <div className="p-4 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/15">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-[#94A3B8]">Almacenamiento Libre:</span>
              <span className="text-sm font-bold text-[#38BDF8] font-mono">{specs.diskGb} GB</span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={specs.diskGb}
              onChange={(e) => setSpecs({ ...specs, diskGb: parseInt(e.target.value) })}
              className="w-full accent-[#38BDF8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#64748B] mt-1">
              <span>10 GB</span>
              <span>250 GB</span>
              <span>500 GB</span>
            </div>
          </div>
        </div>

        {/* Recommendation output banner */}
        <div className="mt-6 p-4 rounded-xl bg-[#050811]/80 border border-[#38BDF8]/20 flex items-start gap-3 text-xs">
          <Sparkles className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#F8FAFC]">Diagnóstico del Arquitecto Xanxer: </span>
            <span className="text-[#CBD5E1]">
              {compat.tier === 'optimal'
                ? '¡Tu equipo tiene un hardware excelente! Podrás activar todos los efectos Crystalline KWin a 60/120 FPS y ejecutar Testify AI en local sin comprometer recursos.'
                : compat.tier === 'recommended'
                ? 'Tu configuración es ideal para el uso diario de Nexora OS con fluidez y compositor Wayland a máxima resolución.'
                : compat.tier === 'minimum'
                ? 'Tu equipo cumple los requisitos mínimos. Se recomienda ajustar el desenfoque en Ajustes KWin a 8px o 12px.'
                : 'Tu equipo no cumple los requisitos mínimos. Se recomienda contar con al menos 2 GB de RAM y procesador de 64-bit.'}
            </span>
          </div>
        </div>
      </div>

      {/* Download Modal / USB Burning Guide */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0B192E] border-2 border-[#38BDF8]/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(56,189,248,0.4)]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#38BDF8]/20">
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6 text-[#38BDF8]" />
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">
                    Descargando Nexora OS 26.04 LTS
                  </h3>
                  <p className="text-xs text-[#38BDF8] font-mono">ISO Oficial (4.2 GB • Kubuntu Core)</p>
                </div>
              </div>
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#112240] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#CBD5E1]">
              <p>
                Tu descarga directa de la imagen ISO comenzará a través del servidor espejo CDN de alta velocidad.
              </p>

              <div className="p-3 rounded-xl bg-[#050811] border border-[#38BDF8]/30 font-mono">
                <div className="text-[#94A3B8] text-[10px]">Enlace Directo CDN:</div>
                <div className="text-[#38BDF8] text-xs truncate">
                  https://releases.nexora.os/26.04/nexora-26.04-official-desktop-amd64.iso
                </div>
              </div>

              <div className="font-semibold text-[#F8FAFC] pt-2 flex items-center gap-2">
                <Usb className="w-4 h-4 text-[#38BDF8]" />
                <span>Instrucciones para crear tu USB booteable:</span>
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-[#94A3B8]">
                <li>Descarga una herramienta de grabación como <span className="text-[#38BDF8]">BalenaEtcher</span> o <span className="text-[#38BDF8]">Rufus</span>.</li>
                <li>Inserta un pendrive USB de al menos 8 GB.</li>
                <li>Selecciona el archivo ISO de Nexora OS y pulsa "Flash / Escribir".</li>
                <li>Reinicia tu ordenador y arranca desde el USB (teclas F12 / F11 / Del según tu placa).</li>
              </ol>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#050811] font-bold text-xs shadow-[0_0_15px_rgba(56,189,248,0.5)] cursor-pointer"
                >
                  Entendido, cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
