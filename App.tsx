import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ViralPillars } from './components/ViralPillars';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { RevenueCalculator } from './components/RevenueCalculator';
import { Playbooks } from './components/Playbooks';
import { DemoChat } from './components/DemoChat';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { WaitlistStrip } from './components/WaitlistStrip';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fix scroll position - always start from top
  useEffect(() => {
    window.scrollTo(0, 0);
    // Prevent scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden" style={{backgroundColor: '#050816'}}>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <ViralPillars />
          <RevenueCalculator />
          <HowItWorks />
          <Playbooks />
          <CaseStudies />
          <DemoChat />
          <FinalCTA />
        </main>
        <Footer />
        
        {/* Fixed CTAs */}
        <WhatsAppCTA phoneNumber="60174106981" />
        <WaitlistStrip />
      </div>
    </div>
  );
}