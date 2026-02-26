import { motion } from "framer-motion";
import {
    ArrowRight,
    Users
} from "lucide-react";
import React from "react";

interface WaitlistStripProps {
  className?: string;
  onOpenModal: () => void;
}

export const WaitlistStrip: React.FC<WaitlistStripProps> = ({
  className = "",
  onOpenModal,
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 ${className}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-green-900 backdrop-blur-xl border-t-2 border-emerald-400/20 shadow-[0_-15px_60px_rgba(16,185,129,0.2)] relative overflow-hidden">
        {/* Enhanced background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-green-900/10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 relative z-10">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Left side - Message (hidden on smallest screens) */}
            <div className="hidden sm:flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-400/20 rounded-full flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] ring-2 ring-emerald-400/30">
                <Users className="w-5 h-5 lg:w-6 lg:h-6 text-white drop-shadow-lg" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-base lg:text-lg drop-shadow-lg tracking-tight leading-tight">
                  Don't Miss Out!
                </h4>
                <p className="text-white/90 text-xs lg:text-sm font-medium drop-shadow-sm hidden lg:block">
                  Join 500+ Malaysian SMEs getting exclusive Bijou updates
                </p>
              </div>
            </div>

            {/* Mobile-only compact text */}
            <div className="sm:hidden flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">
                Join 500+ SMEs on the waitlist!
              </p>
            </div>

            {/* Right side - Button */}
            <div className="flex-shrink-0">
              <motion.button
                onClick={onOpenModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all whitespace-nowrap bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl text-sm sm:text-base"
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
