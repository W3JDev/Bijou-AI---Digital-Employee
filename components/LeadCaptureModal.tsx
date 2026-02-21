import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'success'>('form');
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep('form');
      setFormData({ name: '', phone: '', company: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101] p-4"
          >
            <div className="glass-panel-3d bg-dark-900/90 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
              
              {/* Close Button */}
              <button 
                onClick={resetAndClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/20 blur-[50px] pointer-events-none" />

              <div className="p-8 relative z-10">
                {step === 'form' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                      <Sparkles className="w-3.5 h-3.5" />
                      14-Day Free Trial
                    </div>
                    
                    <h3 className="text-3xl font-display font-bold text-white mb-2">
                      Start Automating Today
                    </h3>
                    <p className="text-gray-400 mb-8">
                      Leave your details below. Our team will WhatsApp you within 5 minutes to set up your Bijou agent.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Your Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                          placeholder="e.g. Bossku"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">WhatsApp Number</label>
                        <div className="flex">
                          <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-white/10 bg-white/5 text-gray-400 sm:text-sm font-medium">
                            +60
                          </span>
                          <input 
                            required
                            type="tel" 
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                            className="flex-1 bg-black/50 border border-white/10 rounded-r-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                            placeholder="12 345 6789"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Company Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.company}
                          onChange={e => setFormData({...formData, company: e.target.value})}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                          placeholder="e.g. KL Metro Properties"
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-dark-900 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-6"
                      >
                        Get My Digital Employee
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      
                      <p className="text-center text-xs text-gray-500 mt-4">
                        No credit card required. Cancel anytime.
                      </p>
                    </form>
                  </motion.div>
                )}

                {step === 'loading' && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                    className="py-20 flex flex-col items-center justify-center text-center"
                  >
                    <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Preparing your workspace...</h3>
                    <p className="text-gray-400">Allocating your dedicated Bijou agent.</p>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} 
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 relative z-10" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">You're on the list!</h3>
                    <p className="text-gray-300 mb-8 max-w-sm">
                      Awesome, {formData.name || 'Boss'}! We've received your request. Keep an eye on your WhatsApp—our team will message you from <span className="text-emerald-400 font-bold">+60 12-345 6789</span> shortly to get you set up.
                    </p>
                    <button 
                      onClick={resetAndClose}
                      className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-all"
                    >
                      Back to Website
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
