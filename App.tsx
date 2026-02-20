import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ViralPillars } from './components/ViralPillars';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { RevenueCalculator } from './components/RevenueCalculator';
import { Playbooks } from './components/Playbooks';
import { Roadmap } from './components/Roadmap';
import { SetupGuide } from './components/SetupGuide';
import { DemoChat } from './components/DemoChat';
import { WhatsAppLinkGenerator } from './components/WhatsAppLinkGenerator';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <WhatsAppLinkGenerator />
          <RevenueCalculator />
          <ViralPillars />
          <Playbooks />
          <HowItWorks />
          <Roadmap />
          <Features />
          <CaseStudies />
          <SetupGuide />
          <DemoChat />
        </main>
        <Footer />
      </div>
    </div>
  );
}