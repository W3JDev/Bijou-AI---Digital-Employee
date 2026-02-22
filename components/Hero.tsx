import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, PhoneMissed, Zap, ShieldCheck, Calendar, Users } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-3d border-2 border-red-400/50 text-red-300 text-xs font-bold tracking-wider mb-8 uppercase shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-pulse bg-red-500/10">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_15px_#ef4444]" />
              ⚠️ Warning: You are leaking revenue
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-display font-extrabold tracking-tight leading-[1.05] mb-8">
              Stop <span className="text-red-400 animate-pulse drop-shadow-[0_0_20px_rgba(248,113,113,0.6)]">losing</span> <span className="text-gradient-premium">RM300k/year</span> to <span className="text-red-400 animate-pulse drop-shadow-[0_0_20px_rgba(248,113,113,0.6)]">late-night</span> WhatsApp leads.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
               Your human agents sleep. Bijou doesn't. For just <span className="text-gradient-emerald font-bold">RM159/month</span> (33x cheaper than a fresh grad), get a Digital Employee that speaks fluent Manglish and closes sales instantly.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-12">
              {/* Lead Capture Tabs */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <button
                  onClick={() => onOpenModal()}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-gradient-to-r from-emerald-500 to-emerald-400 text-dark-900 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-[1.02]"
                >
                  <Users className="w-5 h-5" />
                  Get Started
                </button>
                
                <a
                  href="https://cal.com/getbijou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all glass-panel-3d text-white hover:bg-white/5 hover:scale-[1.02]"
                >
                  <Calendar className="w-5 h-5" />
                  Book Demo
                </a>
              </div>

              <p className="text-sm text-gray-400 text-center lg:text-left">
                ✅ 14-day free trial • ✅ No credit card required • ✅ Cancel anytime
              </p>
            </motion.div>

            {/* Trust Signals / Partners */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">Trusted & Backed By</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Logos using text for demo purposes, assume these are SVGs in real prod */}
                <div className="flex items-center gap-2 group">
                   <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold border border-white/20 group-hover:border-emerald-500/50">M</div>
                   <span className="font-bold text-lg tracking-tight group-hover:text-white transition-colors">MDEC</span>
                </div>
                <div className="flex items-center gap-2 group">
                   <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold border border-white/20 group-hover:border-blue-500/50">C</div>
                   <span className="font-bold text-lg tracking-tight group-hover:text-white transition-colors">Cradle</span>
                </div>
                <div className="flex items-center gap-2 group">
                   <ShieldCheck className="w-6 h-6 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                   <span className="font-bold text-xs text-gray-500 group-hover:text-emerald-400 transition-colors">PDPA Compliant</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Visual / Illustration */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-1000 hidden lg:flex"
          >
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
            
            {/* Abstract 3D Representation */}
            <div className="relative w-full max-w-md aspect-square animate-float transform preserve-3d">
               {/* Phone Frame - Enhanced 3D Look */}
               <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-[3rem] border-4 border-gray-700/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.3)] overflow-hidden glass-panel-3d backdrop-blur-3xl ring-1 ring-white/10">
                  
                  {/* Screen Content */}
                  <div className="p-6 h-full flex flex-col bg-gradient-to-b from-dark-900 to-black relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                       <div className="relative">
                           <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center font-bold text-dark-900 shadow-[0_0_15px_rgba(16,185,129,0.4)] text-xl border-2 border-emerald-300/30">B</div>
                           <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-black shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                       </div>
                       <div>
                         <div className="font-bold text-white text-lg tracking-tight">Bijou Assistant</div>
                         <div className="text-xs text-emerald-400 font-medium tracking-wide flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Active • 02:45 AM
                         </div>
                       </div>
                    </div>

                    <div className="space-y-6 flex-1">
                       {/* Message 1 */}
                       <div className="glossy-pill p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start">
                          <p className="text-sm text-gray-200">Boss, can check property viewing? 2am liao but I excited.</p>
                       </div>
                       
                       {/* Message 2 (Bijou) */}
                       <div className="glossy-pill-emerald p-4 rounded-2xl rounded-tr-none max-w-[85%] ml-auto">
                          <p className="text-sm text-emerald-100 font-medium">No prob boss! I still awake. Which area you looking? KLCC or Mont Kiara? 🏙️</p>
                       </div>

                       {/* Message 3 */}
                       <div className="glossy-pill p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start">
                          <p className="text-sm text-gray-200">MK. Got balcony one.</p>
                       </div>

                       {/* Message 4 (Bijou) */}
                       <div className="glossy-pill-emerald p-4 rounded-2xl rounded-tr-none max-w-[85%] ml-auto">
                          <p className="text-sm text-emerald-100 font-medium">Got! Residensi 22, High Floor. I send you video brochure now. 📹</p>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Floating ROI Card - Repositioned to Top Right Corner */}
               <div className="absolute -right-8 -top-8 glass-panel-3d p-4 rounded-2xl flex flex-col gap-1 animate-pulse-slow shadow-2xl border border-white/10 backdrop-blur-xl bg-black/60 max-w-[180px]">
                  <div className="text-xs text-gray-400 uppercase font-bold">Cost Savings</div>
                  <div className="text-2xl font-bold text-white">33x</div>
                  <div className="text-[10px] text-emerald-400">vs Hiring Junior Exec</div>
                  <div className="w-full bg-gray-700 h-1 rounded-full mt-2 overflow-hidden">
                     <div className="bg-emerald-500 h-full w-[95%]"></div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};