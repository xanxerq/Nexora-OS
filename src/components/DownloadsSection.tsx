import React, { useState } from 'react';
import {
  Download,
  Terminal,
  Cpu,
  HardDrive,
  CheckCircle,
  Copy,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Layers,
  HelpCircle,
  Hash
} from 'lucide-react';
import { checkHardwareCompatibility, HardwareSpecs } from '../utils/nexoraUtils';

export const DownloadsSection: React.FC = () => {
  const [copiedSha, setCopiedSha] = useState<string | null>(null);
  const [downloadModalEdition, setDownloadModalEdition] = useState<'client' | 'server' | null>(null);

  // Hardware compatibility calculator state
  const [specs, setSpecs] = useState<HardwareSpecs>({
    ramGb: 16,
    cpuCores: 6,
    diskGb: 120,
    is64Bit: true,
    hasUefi: true,
  });

  const clientCompat = checkHardwareCompatibility(specs, 'client');
  const serverCompat = checkHardwareCompatibility(specs, 'server');

  const clientSha = 'e7b92f3a408b1c592a83f9c6d4e1a7b8c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7';
  const serverSha = '3a408b1c592a83f9c6d4e1a7b8c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7e7b92f';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSha(id);
    setTimeout(() => setCopiedSha(null), 2500);
  };

  const handleDownload = (edition: 'client' | 'server') => {
    setDownloadModalEdition(edition);
  };

  return (
    <section id="descargas" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background cyan blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0284C7]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] mb-3">
          <Download className="w-3.5 h-3.5" />
          <span>CANAL OFICIAL DE DESCARGAS 2026</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
          Descargas Oficiales de <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">NEXORA OS</span>
        </h2>
        <p className="mt-3 text-[#94A3B8] text-base">
          Imágenes ISO certificadas compiladas con Kubuntu 26.04 Core, entorno KDE Plasma 6 y suite Crystalline.
        </p>
      </div>

      {/* Main Download Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* CARD 1: Client Edition */}
        <div className="relative rounded-3xl p-8 backdrop-blur-xl bg-[#0B192E]/70 border-2 border-[#38BDF8]/40 hover:border-[#38BDF8] shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(56,189,248,0.15)] hover:shadow-[0_15px_50px_rgba(56,189,248,0.3)] transition-all duration-300 flex flex-col justify-between group">
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8]/50 text-[#38BDF8] text-[11px] font-mono font-bold tracking-wider">
            RECOMENDADO
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#38BDF8] flex items-center justify-center text-white shadow-[0_0_15px_#38BDF8]">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#F8FAFC]">Client Edition</h3>
                <p className="text-xs text-[#38BDF8] font-mono">v26.04 LTS • Desktop Workstation</p>
              </div>
            </div>

            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Edición completa con interfaz gráfica Crystalline basada en KDE Plasma 6 sobre Wayland. Incluye drivers propietarios Nvidia/AMD, compositor KWin pre-configurado y el asistente Testify AI integrado.
            </p>

            {/* Specs list */}
            <div className="space-y-2.5 mb-8 text-xs text-[#E2E8F0] font-mono">
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Tamaño de Imagen:</span>
                <span className="font-semibold text-[#F8FAFC]">4.2 GB (ISO Híbrida)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Entorno Gráfico:</span>
                <span className="text-[#38BDF8]">KDE Plasma 6.2 (Wayland)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Núcleo Base:</span>
                <span>Kubuntu 26.04 (Ubuntu LTS 2026-2031)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Kernel Xanxer:</span>
                <span>6.12.0 Low-Latency Crystalline</span>
              </div>
            </div>

            {/* SHA256 Checksum box */}
            <div className="p-3 rounded-xl bg-[#050811]/70 border border-[#38BDF8]/20 mb-6">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-[#94A3B8] flex items-center gap-1 font-mono">
                  <Hash className="w-3 h-3 text-[#38BDF8]" /> SHA256 Checksum:
                </span>
                <button
                  onClick={() => copyToClipboard(clientSha, 'client')}
                  className="text-[#38BDF8] hover:text-white flex items-center gap-1 font-mono transition-colors cursor-pointer"
                >
                  {copiedSha === 'client' ? (
                    <>
                      <CheckCircle className="w-3 h-3 text-[#10B981]" />
                      <span className="text-[#10B981]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <code className="text-[10px] text-[#64748B] block truncate font-mono">
                {clientSha}
              </code>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => handleDownload('client')}
            className="w-full relative group/btn py-4 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] border border-[#BAE6FD]/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
          >
            <Download className="w-5 h-5 text-white group-hover/btn:-translate-y-0.5 transition-transform" />
            <span>Descargar Client Edition (ISO)</span>
          </button>
        </div>

        {/* CARD 2: Server Edition */}
        <div className="relative rounded-3xl p-8 backdrop-blur-xl bg-[#0B192E]/70 border-2 border-[#38BDF8]/30 hover:border-[#38BDF8] shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_15px_50px_rgba(56,189,248,0.25)] transition-all duration-300 flex flex-col justify-between group">
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#112240] border border-[#38BDF8]/30 text-[#94A3B8] text-[11px] font-mono tracking-wider">
            ENTERPRISE & CLOUD
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#112240] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#F8FAFC]">Server Edition</h3>
                <p className="text-xs text-[#38BDF8] font-mono">v26.04 LTS • High Performance Headless</p>
              </div>
            </div>

            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Optimizado para microservicios, virtualización y servidores en la nube. Incluye el panel de gestión remota Crystalline Cockpit Web, Docker/Podman out-of-the-box y el kernel Xanxer optimizado para rendimiento sostenido.
            </p>

            {/* Specs list */}
            <div className="space-y-2.5 mb-8 text-xs text-[#E2E8F0] font-mono">
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Tamaño de Imagen:</span>
                <span className="font-semibold text-[#F8FAFC]">1.8 GB (Minimal NetInstall)</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Interfaz de Control:</span>
                <span className="text-[#38BDF8]">Headless CLI + Crystalline Cockpit Web</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Contenedores:</span>
                <span>Docker Engine & Podman 5 preinstalados</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#38BDF8]/15">
                <span className="text-[#94A3B8]">Kernel Xanxer:</span>
                <span>6.12.0 Server Core (ZFS / Btrfs Ready)</span>
              </div>
            </div>

            {/* SHA256 Checksum box */}
            <div className="p-3 rounded-xl bg-[#050811]/70 border border-[#38BDF8]/20 mb-6">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-[#94A3B8] flex items-center gap-1 font-mono">
                  <Hash className="w-3 h-3 text-[#38BDF8]" /> SHA256 Checksum:
                </span>
                <button
                  onClick={() => copyToClipboard(serverSha, 'server')}
                  className="text-[#38BDF8] hover:text-white flex items-center gap-1 font-mono transition-colors cursor-pointer"
                >
                  {copiedSha === 'server' ? (
                    <>
                      <CheckCircle className="w-3 h-3 text-[#10B981]" />
                      <span className="text-[#10B981]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <code className="text-[10px] text-[#64748B] block truncate font-mono">
                {serverSha}
              </code>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => handleDownload('server')}
            className="w-full relative group/btn py-4 rounded-xl bg-[#0B192E] hover:bg-[#112240] text-[#F8FAFC] font-bold text-sm tracking-wide border-2 border-[#38BDF8]/50 hover:border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
          >
            <Terminal className="w-5 h-5 text-[#38BDF8] group-hover/btn:text-white transition-colors" />
            <span>Descargar Server Edition (ISO)</span>
          </button>
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

          {/* Status Badges */}
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#050811] border border-[#38BDF8]/30 text-xs">
              <span className="text-[#94A3B8] block text-[10px]">Client Edition:</span>
              <span className={`font-bold font-mono ${clientCompat.canRun ? 'text-[#38BDF8]' : 'text-[#EF4444]'}`}>
                {clientCompat.tier.toUpperCase()}
              </span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-[#050811] border border-[#38BDF8]/30 text-xs">
              <span className="text-[#94A3B8] block text-[10px]">Server Edition:</span>
              <span className={`font-bold font-mono ${serverCompat.canRun ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                {serverCompat.tier.toUpperCase()}
              </span>
            </div>
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
              {clientCompat.tier === 'optimal'
                ? '¡Tu equipo tiene un hardware excelente! Podrás activar todos los efectos Crystalline KWin a 60/120 FPS y ejecutar Testify AI en local sin comprometer recursos.'
                : clientCompat.tier === 'recommended'
                ? 'Tu configuración es ideal para el uso diario de Nexora Client Edition con fluidez y compositor Wayland a máxima resolución.'
                : clientCompat.tier === 'minimum'
                ? 'Tu equipo cumple los requisitos mínimos. Se recomienda desactivar efectos pesados de desenfoque secundario en Ajustes KWin.'
                : 'Tu equipo no cumple los requisitos mínimos para Client Edition. Prueba Nexora Server Edition.'}
            </span>
          </div>
        </div>
      </div>

      {/* Download Modal / Burn Guide */}
      {downloadModalEdition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0B192E] border-2 border-[#38BDF8]/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(56,189,248,0.4)]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#38BDF8]/20">
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6 text-[#38BDF8]" />
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">
                    Descargando {downloadModalEdition === 'client' ? 'Nexora OS Client Edition' : 'Nexora OS Server Edition'}
                  </h3>
                  <p className="text-xs text-[#38BDF8] font-mono">v26.04 LTS (Kubuntu Core)</p>
                </div>
              </div>
              <button
                onClick={() => setDownloadModalEdition(null)}
                className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#112240] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#CBD5E1]">
              <p>
                Tu descarga simulada de la imagen ISO comenzará de inmediato a través del espejo de alta velocidad.
              </p>

              <div className="p-3 rounded-xl bg-[#050811] border border-[#38BDF8]/30 font-mono">
                <div className="text-[#94A3B8] text-[10px]">Enlace Directo CDN:</div>
                <div className="text-[#38BDF8] text-xs truncate">
                  https://releases.nexora.os/26.04/{downloadModalEdition === 'client' ? 'nexora-26.04-desktop-amd64.iso' : 'nexora-26.04-server-amd64.iso'}
                </div>
              </div>

              <div className="font-semibold text-[#F8FAFC] pt-2">
                Instrucciones para crear tu USB booteable:
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-[#94A3B8]">
                <li>Descarga una herramienta de grabación como <span className="text-[#38BDF8]">BalenaEtcher</span> o <span className="text-[#38BDF8]">Rufus</span>.</li>
                <li>Inserta un pendrive USB de al menos 8 GB.</li>
                <li>Selecciona el archivo ISO de Nexora OS y pulsa "Flash / Escribir".</li>
                <li>Reinicia tu ordenador y arranca desde el USB (F12 / F11 / Del).</li>
              </ol>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setDownloadModalEdition(null)}
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
