import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, Stethoscope, ArrowUpRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-bold mb-4">Real Results</h2>
           <p className="text-gray-400 text-lg">See how businesses are automating growth with Bijou.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Real Estate Case Study */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel-3d p-10 rounded-3xl group relative"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors" />
             
             <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                   <Building2 className="w-7 h-7" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">KL Metro Properties</h3>
                   <p className="text-sm text-gray-400 font-medium">Real Estate Agency</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-5 mb-10 relative z-10">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                   <div className="text-4xl font-bold text-white mb-2">0%</div>
                   <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Missed Calls</div>
                </div>
                <div className="bg-emerald-900/20 p-5 rounded-2xl border border-emerald-500/20 shadow-[0_4px_20px_rgba(16,185,129,0.1)]">
                   <div className="text-4xl font-bold text-emerald-400 mb-2">+40%</div>
                   <div className="text-xs text-emerald-200/70 uppercase tracking-widest font-semibold">Leads Qualified</div>
                </div>
             </div>

             <div className="space-y-6 relative z-10">
                <p className="text-gray-300 italic text-lg leading-relaxed">"Before Bijou, we lost leads every time we were in a viewing. Now, Bijou answers instantly, sends the brochure, and books the next viewing. It's like having a super-agent."</p>
                <div className="flex items-center gap-2 text-sm text-blue-400 font-bold cursor-pointer group-hover:gap-3 transition-all">
                   Read Full Case Study <ArrowUpRight className="w-4 h-4" />
                </div>
             </div>
          </motion.div>

          {/* Healthcare Case Study */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel-3d p-10 rounded-3xl group relative"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-colors" />
             
             <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                   <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">SmileCraft Dental</h3>
                   <p className="text-sm text-gray-400 font-medium">Dental Specialist</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-5 mb-10 relative z-10">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                   <div className="text-4xl font-bold text-white mb-2">-75%</div>
                   <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">No-Show Rate</div>
                </div>
                <div className="bg-orange-900/20 p-5 rounded-2xl border border-orange-500/20 shadow-[0_4px_20px_rgba(249,115,22,0.1)]">
                   <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                   <div className="text-xs text-orange-200/70 uppercase tracking-widest font-semibold">Booking Availability</div>
                </div>
             </div>

             <div className="space-y-6 relative z-10">
                <p className="text-gray-300 italic text-lg leading-relaxed">"Our nurses used to spend hours calling patients to confirm slots. Bijou does it automatically on WhatsApp. Patients love it, and our chairs are always full."</p>
                <div className="flex items-center gap-2 text-sm text-orange-400 font-bold cursor-pointer group-hover:gap-3 transition-all">
                   Read Full Case Study <ArrowUpRight className="w-4 h-4" />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};