import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tight">Bijou<span className="text-emerald-400">AI</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Features</a>
            <a href="#roadmap" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Roadmap</a>
            <a href="#demo" className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Live Demo</a>
            <button 
              onClick={onOpenModal}
              className="bg-emerald-500 hover:bg-emerald-400 text-dark-900 font-bold py-2 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-white/5 bg-dark-900"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#features" className="block text-base font-medium text-gray-300 hover:text-emerald-400" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#roadmap" className="block text-base font-medium text-gray-300 hover:text-emerald-400" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
            <a href="#demo" className="block text-base font-medium text-gray-300 hover:text-emerald-400" onClick={() => setIsMenuOpen(false)}>Live Demo</a>
            <button 
              onClick={() => { setIsMenuOpen(false); onOpenModal(); }}
              className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-dark-900 font-bold py-3 px-6 rounded-lg"
            >
              Get Early Access
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};