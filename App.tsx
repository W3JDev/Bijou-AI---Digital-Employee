import { useEffect, useState } from "react";
import { CaseStudies } from "./components/CaseStudies";
import { DemoChat } from "./components/DemoChat";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { OnboardingModal } from "./components/OnboardingModal";
import { Playbooks } from "./components/Playbooks";
import { Pricing } from "./components/Pricing";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";
import { RevenueCalculator } from "./components/RevenueCalculator";
import { Roadmap } from "./components/Roadmap";
import { SlideDeckModal } from "./components/SlideDeckModal";
import { ViralPillars } from "./components/ViralPillars";
import { WaitlistStrip } from "./components/WaitlistStrip";
import { WhatsAppCTA } from "./components/WhatsAppCTA";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [slideDeckOpen, setSlideDeckOpen] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: "signup" | "waitlist" | "demo";
    source: string;
  }>({
    isOpen: false,
    mode: "signup",
    source: "navbar",
  });

  // Fix scroll position - always start from top
  useEffect(() => {
    window.scrollTo(0, 0);
    // Prevent scroll restoration
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const openModal = (mode: "signup" | "waitlist" | "demo", source: string) => {
    setModalState({ isOpen: true, mode, source });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div
      className="min-h-screen text-white selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden"
      style={{ backgroundColor: "#030810" }}
    >
      {/* Clean background - minimal effects like OpenClaw */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[25%] h-[25%] bg-emerald-900/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[25%] h-[25%] bg-emerald-900/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onOpenModal={() => openModal("signup", "navbar")}
        />
        <main>
          <Hero onOpenModal={() => openModal("signup", "hero")} />
          <Features />
          <ViralPillars
            onOpenModal={() => openModal("signup", "viral_pillars")}
          />
          <RevenueCalculator
            onOpenModal={() => openModal("signup", "revenue_calculator")}
          />
          <Pricing onOpenModal={() => openModal("signup", "pricing")} />
          <HowItWorks />
          <Roadmap />
          <Playbooks />
          <CaseStudies
            onOpenModal={() => openModal("signup", "case_studies")}
          />
          <DemoChat onOpenModal={() => openModal("demo", "demo_chat")} />
          <FinalCTA
            onOpenModal={() => openModal("signup", "final_cta")}
            onOpenSlideDeck={() => setSlideDeckOpen(true)}
          />
        </main>
        <Footer />

        {/* Fixed CTAs */}
        <WhatsAppCTA phoneNumber="60174106981" />
        <WaitlistStrip
          onOpenModal={() => openModal("waitlist", "waitlist_strip")}
        />
        <PWAInstallPrompt />

        {/* Onboarding Modal */}
        <OnboardingModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          mode={modalState.mode}
          source={modalState.source}
        />

        {/* Slide Deck / Resources Modal */}
        <SlideDeckModal
          isOpen={slideDeckOpen}
          onClose={() => setSlideDeckOpen(false)}
        />
      </div>
    </div>
  );
}
