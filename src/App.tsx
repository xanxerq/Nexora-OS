/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DesktopShowcase } from './components/DesktopShowcase';
import { DownloadsSection } from './components/DownloadsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SetupGuideSection } from './components/SetupGuideSection';
import { CreatorSection } from './components/CreatorSection';
import { Footer } from './components/Footer';
import { AdminLoginModal } from './components/AdminLoginModal';
import { EditModeBanner } from './components/EditModeBanner';
import {
  loadPageContent,
  savePageContent,
  resetPageContent,
  NexoraPageContent
} from './utils/contentStore';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('nexora_edit_session') === 'active';
    }
    return false;
  });

  const [content, setContent] = useState<NexoraPageContent>(() => loadPageContent());

  const handleUpdateContent = (partial: Partial<NexoraPageContent>) => {
    setContent((prev) => ({ ...prev, ...partial }));
  };

  const handleSaveContent = () => {
    savePageContent(content);
  };

  const handleResetContent = () => {
    if (window.confirm('¿Restablecer todos los textos a la versión oficial predeterminada?')) {
      const reset = resetPageContent();
      setContent(reset);
    }
  };

  const handleLoginSuccess = () => {
    setIsEditMode(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nexora_edit_session', 'active');
    }
  };

  const handleLogout = () => {
    setIsEditMode(false);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('nexora_edit_session');
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'desktop-showcase', 'descargas', 'informacion', 'configuracion', 'creador'];
      const scrollY = window.pageYOffset;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section === 'desktop-showcase' ? 'hero' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-[#F8FAFC] flex flex-col selection:bg-[#38BDF8]/30 selection:text-[#38BDF8]">
      {/* Top Banner when in Edit Mode */}
      {isEditMode && (
        <EditModeBanner
          onSave={handleSaveContent}
          onReset={handleResetContent}
          onLogout={handleLogout}
        />
      )}

      {/* Top Navbar */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
        isEditMode={isEditMode}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          content={content}
          isEditMode={isEditMode}
          onUpdateContent={handleUpdateContent}
          onNavigate={scrollToSection}
        />

        {/* Desktop Showcase (Foto oficial & Modo Interactivo) */}
        <DesktopShowcase onGoToSetup={() => scrollToSection('configuracion')} />

        {/* Sección de Descargas */}
        <DownloadsSection />

        {/* Acerca del Sistema */}
        <FeaturesSection
          content={content}
          isEditMode={isEditMode}
          onUpdateContent={handleUpdateContent}
        />

        {/* Instrucciones Post Instalación */}
        <SetupGuideSection
          content={content}
          isEditMode={isEditMode}
          onUpdateContent={handleUpdateContent}
        />

        {/* Acerca del Creador */}
        <CreatorSection
          content={content}
          isEditMode={isEditMode}
          onUpdateContent={handleUpdateContent}
        />
      </main>

      {/* Footer with user-required 'SYSTEM CORE BY XANXER © 2026' */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLogin={() => setLoginModalOpen(true)}
        isEditMode={isEditMode}
      />

      {/* Admin Login Modal (xanxer / oV4rDm2m) */}
      <AdminLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
