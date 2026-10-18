import React, { useState } from 'react';
import {
  Sliders,
  Terminal,
  Image as ImageIcon,
  Layers,
  Copy,
  CheckCircle,
  Download,
  Check,
  ChevronRight,
  Code,
  Sparkles,
  Wand2,
  Edit3
} from 'lucide-react';
import { generateSetupCommand, SetupOptions } from '../utils/nexoraUtils';
import { NexoraPageContent } from '../utils/contentStore';

interface SetupGuideSectionProps {
  content?: NexoraPageContent;
  isEditMode?: boolean;
  onUpdateContent?: (partial: Partial<NexoraPageContent>) => void;
}

export const SetupGuideSection: React.FC<SetupGuideSectionProps> = ({
  content,
  isEditMode = false,
  onUpdateContent,
}) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [copiedFullScript, setCopiedFullScript] = useState(false);

  // Customizer state
  const [setupOpts, setSetupOpts] = useState<SetupOptions>({
    includeTestifyAi: true,
    blurIntensity: 16,
    dockFloating: true,
    installWallpapers: true,
    themeVariant: 'crystalline-dark',
  });

  const fullCommand = generateSetupCommand(setupOpts);

  const copyText = (text: string, stepIndex?: number) => {
    navigator.clipboard.writeText(text);
    if (stepIndex !== undefined) {
      setCopiedStep(stepIndex);
      setTimeout(() => setCopiedStep(null), 2500);
    } else {
      setCopiedFullScript(true);
      setTimeout(() => setCopiedFullScript(false), 2500);
    }
  };

  const steps = [
    {
      step: 1,
      title: 'Aplicar el Wallpaper Crystalline Oficial',
      desc: 'El fondo poligonal facetado con el emblema de Nexora OS y texto centrado.',
      command: `mkdir -p ~/.local/share/wallpapers/Nexora/contents/images/
curl -o ~/.local/share/wallpapers/Nexora/contents/images/3840x2160.png \\
  https://releases.nexora.os/assets/nexora-crystalline-wallpaper-4k.png
plasma-apply-wallpaperimage ~/.local/share/wallpapers/Nexora/contents/images/3840x2160.png`,
      detail: 'También puedes hacer clic derecho en el escritorio -> "Configurar fondo de pantalla" y seleccionarlo.',
    },
    {
      step: 2,
      title: 'Configurar el Panel Flotante de KDE Plasma 6',
      desc: 'En Plasma 6, el dock flotante viene integrado de forma nativa sin necesidad de extensiones externas.',
      command: `# Activar modo flotante en el panel inferior de Plasma 6
kwriteconfig6 --file ~/.config/plasma-org.kde.plasma.desktop-appletsrc \\
  --group "Containments" --group "1" --key "floating" 1
# Establecer altura a 44px y margen de curvatura
kwriteconfig6 --file ~/.config/plasma-org.kde.plasma.desktop-appletsrc \\
  --group "Containments" --group "1" --key "thickness" 44
# Reiniciar plasmashell en Wayland
kquitapp6 plasmashell && kstart6 plasmashell`,
      detail: 'Alternativa visual: Haz clic derecho en el panel inferior -> "Entrar en modo de edición" -> Activar la casilla "Panel Flotante".',
    },
    {
      step: 3,
      title: 'Habilitar el Desenfoque KWin Crystalline (Blur 16px)',
      desc: 'Configura la refracción translúcida del compositor KWin para lograr el efecto Glassmorphism.',
      command: `# Habilitar el efecto de desenfoque de fondo y contraste
kwriteconfig6 --file ~/.config/kwinrc --group "Plugins" --key "blurEnabled" true
kwriteconfig6 --file ~/.config/kwinrc --group "Effect-blur" --key "BlurStrength" 16
kwriteconfig6 --file ~/.config/kwinrc --group "Effect-blur" --key "NoiseStrength" 0
# Recargar KWin Wayland
qdbus6 org.kde.KWin /KWin reconfigure`,
      detail: 'Garantiza que la barra inferior y las ventanas Crystalline tengan un desenfoque nítido y fluido.',
    },
    {
      step: 4,
      title: 'Instalar el Tema de Iconos y Esquema Abisal',
      desc: 'Aplica los iconos Papirus Cyan Crystalline y los acentos celestes #38BDF8 del sistema.',
      command: `# Descargar e instalar tema global Nexora
curl -sSL https://releases.nexora.os/themes/nexora-crystalline-theme.tar.xz | tar -xJ -C ~/.local/share/plasma/look-and-feel/
plasma-apply-lookandfeel -a org.xanxer.nexora.crystalline
plasma-apply-colorscheme NexoraAbyssal`,
      detail: 'Sustituye los iconos estándar por la variante con glifos de cristal y acento cian.',
    },
    {
      step: 5,
      title: 'Añadir la Firma "CUSTOM BUILD By Xanxer" y Accesos Directos',
      desc: 'Incrusta el plasmoide de firma en la esquina inferior derecha como en la captura oficial.',
      command: `# Añadir widget de firma Crystalline y enlaces de bienvenida
kwriteconfig6 --file ~/.config/plasma-org.kde.plasma.desktop-appletsrc \\
  --group "Containments" --group "2" --key "customSignature" "CUSTOM BUILD | By Xanxer"
# Crear accesos directos en el escritorio
cat << 'EOF' > ~/Desktop/HOW-TO-Guides.desktop
[Desktop Entry]
Type=Link
Name=HOW-TO Guides
Icon=applications-internet
URL=https://nexora.os/docs
EOF
chmod +x ~/Desktop/*.desktop`,
      detail: 'El widget situará la línea cian vertical y la firma de autoría en tu escritorio.',
    },
  ];

  return (
    <section id="configuracion" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0284C7]/12 blur-[150px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] mb-3">
          <Sliders className="w-3.5 h-3.5" />
          <span>INSTRUCCIONES POST INSTALACIÓN</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
          Instrucciones Post Instalación: <span className="bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">Configuración como en la foto</span>
        </h2>
        
        {/* Editable post-install note */}
        <div className="mt-3">
          {isEditMode && onUpdateContent && content ? (
            <div className="p-2 rounded-xl bg-[#0B192E] border border-[#38BDF8]/40">
              <span className="text-[10px] font-mono text-[#38BDF8] flex items-center justify-center gap-1 mb-1">
                <Edit3 className="w-3 h-3" /> Editar Nota de Instrucciones Post Instalación:
              </span>
              <textarea
                value={content.postInstallNote}
                onChange={(e) => onUpdateContent({ postInstallNote: e.target.value })}
                rows={2}
                className="w-full text-center text-xs bg-[#050811] text-[#CBD5E1] p-2 rounded border border-[#38BDF8]/30 outline-none"
              />
            </div>
          ) : (
            <p className="text-[#94A3B8] text-base">
              {content ? content.postInstallNote : 'Sigue estos pasos precisos para replicar exactamente el escritorio oficial de Nexora OS: panel flotante, wallpaper facetado, desenfoque de 16px y firma de autor.'}
            </p>
          )}
        </div>
      </div>

      {/* Quick Setup Automation Banner */}
      <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-2xl bg-[#0B192E]/80 border-2 border-[#38BDF8]/40 shadow-[0_0_35px_rgba(56,189,248,0.2)] mb-14">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#38BDF8]/20">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#38BDF8]">
              <Wand2 className="w-4 h-4" />
              <span>GENERADOR DE SCRIPT DE INSTALACIÓN RÁPIDA</span>
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mt-1">
              Aplica toda la configuración en un solo comando
            </h3>
            <p className="text-xs text-[#94A3B8] mt-1">
              Personaliza los parámetros según tu preferencia y ejecuta el comando en la terminal de Kubuntu 26.04.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => copyText(fullCommand)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#0EA5E9] text-[#050811] font-bold text-xs shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all cursor-pointer"
            >
              {copiedFullScript ? (
                <>
                  <CheckCircle className="w-4 h-4 text-[#050811]" />
                  <span>¡Comando Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#050811]" />
                  <span>Copiar Comando Automático</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Options Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6 text-xs">
          <label className="flex items-center gap-3 p-3 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/20 cursor-pointer hover:border-[#38BDF8]/50 transition-colors">
            <input
              type="checkbox"
              checked={setupOpts.dockFloating}
              onChange={(e) => setSetupOpts({ ...setupOpts, dockFloating: e.target.checked })}
              className="accent-[#38BDF8] w-4 h-4 rounded cursor-pointer"
            />
            <div>
              <div className="font-semibold text-[#F8FAFC]">Panel Flotante Plasma 6</div>
              <div className="text-[10px] text-[#94A3B8]">Estilo dock desprendido</div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/20 cursor-pointer hover:border-[#38BDF8]/50 transition-colors">
            <input
              type="checkbox"
              checked={setupOpts.installWallpapers}
              onChange={(e) => setSetupOpts({ ...setupOpts, installWallpapers: e.target.checked })}
              className="accent-[#38BDF8] w-4 h-4 rounded cursor-pointer"
            />
            <div>
              <div className="font-semibold text-[#F8FAFC]">Wallpapers 4K Nexora</div>
              <div className="text-[10px] text-[#94A3B8]">Fondo poligonal oficial</div>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/20 cursor-pointer hover:border-[#38BDF8]/50 transition-colors">
            <input
              type="checkbox"
              checked={setupOpts.includeTestifyAi}
              onChange={(e) => setSetupOpts({ ...setupOpts, includeTestifyAi: e.target.checked })}
              className="accent-[#38BDF8] w-4 h-4 rounded cursor-pointer"
            />
            <div>
              <div className="font-semibold text-[#F8FAFC]">Testify AI Assistant</div>
              <div className="text-[10px] text-[#94A3B8]">Agente local para bash</div>
            </div>
          </label>

          <div className="p-3 rounded-xl bg-[#050811]/60 border border-[#38BDF8]/20">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-[#F8FAFC]">Desenfoque Blur:</span>
              <span className="text-[#38BDF8] font-mono font-bold">{setupOpts.blurIntensity}px</span>
            </div>
            <input
              type="range"
              min="8"
              max="24"
              value={setupOpts.blurIntensity}
              onChange={(e) => setSetupOpts({ ...setupOpts, blurIntensity: parseInt(e.target.value) })}
              className="w-full accent-[#38BDF8] cursor-pointer"
            />
          </div>
        </div>

        {/* Generated Command Box */}
        <div className="relative p-4 rounded-xl bg-[#050811] border border-[#38BDF8]/30 font-mono text-xs text-[#38BDF8] overflow-x-auto flex items-center justify-between">
          <code className="text-[#38BDF8] select-all whitespace-pre-wrap break-all">
            {fullCommand}
          </code>
        </div>
      </div>

      {/* Step-by-Step Manual Guide */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[#F8FAFC] flex items-center gap-2 mb-4">
          <Code className="w-5 h-5 text-[#38BDF8]" />
          <span>Guía Manual Paso a Paso (Para usuarios avanzados de KDE)</span>
        </h3>

        {steps.map((item, idx) => (
          <div
            key={item.step}
            className="rounded-2xl p-6 backdrop-blur-xl bg-[#0B192E]/40 border border-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#112240] border border-[#38BDF8]/50 flex items-center justify-center text-sm font-bold text-[#38BDF8] font-mono shrink-0">
                  {item.step}
                </span>
                <div>
                  <h4 className="text-base font-bold text-[#F8FAFC]">{item.title}</h4>
                  <p className="text-xs text-[#94A3B8]">{item.desc}</p>
                </div>
              </div>

              <button
                onClick={() => copyText(item.command, idx)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#112240] hover:bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] transition-colors cursor-pointer shrink-0"
              >
                {copiedStep === idx ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981]">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Command block */}
            <div className="p-3.5 rounded-xl bg-[#050811] border border-[#38BDF8]/15 font-mono text-xs text-[#CBD5E1] overflow-x-auto whitespace-pre leading-relaxed mb-3">
              {item.command}
            </div>

            <p className="text-[11px] text-[#64748B] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#38BDF8]" />
              <span>{item.detail}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
