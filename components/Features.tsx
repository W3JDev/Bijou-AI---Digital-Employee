import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCommunication, IconIntelligence, IconAutomation, IconSecurity } from './Icons';
import { Scan, ShieldCheck, Lock, TrendingUp, FileImage, Sliders, Server, EyeOff, FileKey } from 'lucide-react';

const features = [
  {
    icon: <IconCommunication className="w-12 h-12" />,
    title: "Manglish Intensity Control",
    description: "Not every brand speaks 'Pasar Malam'. Adjust Bijou's tone from Corporate Professional to Full Manglish Casual.",
    exampleType: 'dial'
  },
  {
    icon: <IconSecurity className="w-12 h-12" />,
    title: "Enterprise-Grade Security",
    description: "Fully PDPA & GDPR Compliant. We use Row-Level Security (RLS) to ensure your customer data is isolated and encrypted.",
    exampleType: 'security_enterprise'
  }
];

// --- Widget: Manglish Dial ---
const ManglishDialWidget = () => {
    const [level, setLevel] = useState(50);
    const [text, setText] = useState("Hi boss, can I help you?");

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        setLevel(val);
        if (val < 33) setText("Good morning. How may I assist you today?");
        else if (val < 66) setText("Hi boss, can I help you find something?");
        else setText("Walao boss! What you need? I settle for you fast fast. 🚀");
    };

    return (
        <div className="w-full h-full min-h-[140px] flex flex-col justify-center px-6 gap-4">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                <span>Formal</span>
                <span>Casual</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="100" 
                value={level} 
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="bg-[#202c33] p-3 rounded-lg border border-white/5 relative">
                <div className="absolute -top-2 left-3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#202c33]"></div>
                <p className="text-sm text-emerald-100 italic transition-all duration-300">"{text}"</p>
            </div>
        </div>
    );
};

// --- Widget: Enterprise Security ---
const EnterpriseSecurityWidget = () => {
    return (
        <div className="w-full h-full min-h-[140px] grid grid-cols-2 gap-3 p-4">
             <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}
                className="bg-white/5 rounded-xl flex flex-col items-center justify-center p-2 border border-white/5 cursor-pointer transition-all"
             >
                <Server className="w-6 h-6 text-blue-400 mb-2 animate-pulse-slow" />
                <span className="text-[10px] text-gray-400 text-center">Row-Level Security</span>
             </motion.div>
             <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)" }}
                className="bg-white/5 rounded-xl flex flex-col items-center justify-center p-2 border border-white/5 cursor-pointer transition-all"
             >
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2 animate-pulse-slow" />
                <span className="text-[10px] text-gray-400 text-center">PDPA Ready</span>
             </motion.div>
             <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
                className="bg-white/5 rounded-xl flex flex-col items-center justify-center p-2 border border-white/5 cursor-pointer transition-all"
             >
                <EyeOff className="w-6 h-6 text-purple-400 mb-2 animate-pulse-slow" />
                <span className="text-[10px] text-gray-400 text-center">Data Isolation</span>
             </motion.div>
             <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)" }}
                className="bg-white/5 rounded-xl flex flex-col items-center justify-center p-2 border border-white/5 cursor-pointer transition-all"
             >
                <FileKey className="w-6 h-6 text-orange-400 mb-2 animate-pulse-slow" />
                <span className="text-[10px] text-gray-400 text-center">AES-256</span>
             </motion.div>
        </div>
    );
};


export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-3xl z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Localized & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Secure</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built for the Malaysian market, secured for the Global Enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-3xl p-[1px] overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-white via-red-500 to-blue-500 animate-shine opacity-30 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%]" />
              
              {/* Inner Card Content */}
              <div className="relative bg-dark-900/90 backdrop-blur-xl h-full p-8 md:p-10 rounded-3xl overflow-hidden flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-500/20 transition-all" />
                  
                  <div className="flex items-start justify-between mb-8 relative z-10">
                    <div className="relative p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/40 transition-colors">
                      <motion.div
                        animate={{ 
                           y: [0, -3, 0],
                           filter: ["drop-shadow(0 0 5px rgba(16,185,129,0.1))", "drop-shadow(0 0 15px rgba(16,185,129,0.4))", "drop-shadow(0 0 5px rgba(16,185,129,0.1))"]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 1 }}
                      >
                        {feature.icon}
                      </motion.div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-8 text-base relative z-10 flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Dynamic Example Area */}
                  <div className="bg-black/30 rounded-xl border-l-2 border-emerald-500/50 relative overflow-hidden group-hover:border-emerald-400 transition-colors min-h-[140px] flex items-center justify-center">
                    {feature.exampleType === 'dial' && <ManglishDialWidget />}
                    {feature.exampleType === 'security_enterprise' && <EnterpriseSecurityWidget />}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
