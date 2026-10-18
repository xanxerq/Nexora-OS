import React, { useState } from 'react';
import { NexoraLogo } from './NexoraLogo';
import { Download, Sparkles, Sliders, User, Info, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Inicio', icon: Sparkles },
    { id: 'descargas', label: 'Descargas', icon: Download },
    { id: 'informacion', label: 'Información', icon: Info },
    { id: 'configuracion', label: 'Cómo configurarlo', icon: Sliders },
    { id: 'creador', label: 'Sobre el Creador', icon: User },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#050811]/80 border-b border-[#38BDF8]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          aria-label="Nexora OS Inicio"
        >
          <div className="w-10 h-10 flex items-center justify-center p-0.5 rounded-lg bg-[#112240]/60 border border-[#38BDF8]/40 shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:border-[#38BDF8] transition-colors">
            <NexoraLogo size={36} glow={false} interactive={false} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8] bg-clip-text text-transparent">
                NEXORA OS
              </span>
              <span className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8]">
                26.04
              </span>
            </div>
            <p className="text-[11px] text-[#94A3B8] hidden sm:block">
              KDE Plasma 6 • Kubuntu Base
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#38BDF8] bg-[#38BDF8]/15 border border-[#38BDF8]/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#112240]/50 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#38BDF8]' : 'text-[#64748B]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('descargas')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#38BDF8] text-white text-xs font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] border border-[#38BDF8]/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar ISO</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#112240] border border-[#38BDF8]/20 focus:outline-none"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-[#050811]/95 backdrop-blur-2xl border-b border-[#38BDF8]/20 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#38BDF8] bg-[#38BDF8]/15 border border-[#38BDF8]/40'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#112240]/60'
                }`}
              >
                <Icon className="w-4 h-4 text-[#38BDF8]" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('descargas')}
            className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white text-sm font-semibold shadow-[0_0_15px_rgba(56,189,248,0.4)] border border-[#38BDF8]/40"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Nexora OS 26.04</span>
          </button>
        </div>
      )}
    </header>
  );
};
