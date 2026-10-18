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

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

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

  const handleDownloadNow = () => {
    scrollToSection('descargas');
  };

  const handleExploreDesktop = () => {
    scrollToSection('desktop-showcase');
  };

  const handleGoToSetup = () => {
    scrollToSection('configuracion');
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
      {/* Top Navbar */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onDownloadNow={handleDownloadNow}
          onExploreDesktop={handleExploreDesktop}
        />

        {/* Desktop Showcase (Replicating image.png desktop environment) */}
        <DesktopShowcase onGoToSetup={handleGoToSetup} />

        {/* Downloads Section */}
        <DownloadsSection />

        {/* Technical Architecture & Features Section */}
        <FeaturesSection />

        {/* How to configure to match the photo Section */}
        <SetupGuideSection />

        {/* About Creator Section */}
        <CreatorSection />
      </main>

      {/* Footer with user-required 'SYSTEM CORE BY XANXER © 2026' */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
