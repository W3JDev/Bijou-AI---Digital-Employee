import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, AlertCircle, Users } from 'lucide-react';

interface WaitlistStripProps {
  className?: string;
  onOpenModal: () => void;
}

export const WaitlistStrip: React.FC<WaitlistStripProps> = ({ 
  className = '',
  onOpenModal
}) => {
  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 ${className}`}>
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 backdrop-blur-xl border-t-2 border-emerald-400/20 shadow-[0_-15px_60px_rgba(16,185,129,0.2)] relative overflow-hidden">
        {/* Enhanced background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-green-900/10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Left side - Message */}
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] ring-2 ring-emerald-400/30">
                <Users className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg drop-shadow-lg tracking-tight">Don't Miss Out!</h4>
                <p className="text-white/95 text-sm font-medium drop-shadow-sm">
                  Join 500+ Malaysian SMEs getting exclusive Bijou updates
                </p>
              </div>
            </div>

            {/* Right side - Button */}
            <div className="flex items-center gap-3 min-w-0 flex-1 max-w-md ml-auto">
              <motion.button
                onClick={onOpenModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};