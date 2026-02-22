import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle, AlertCircle, Users } from 'lucide-react';

interface WaitlistStripProps {
  className?: string;
  onSuccess?: (leadData: any) => void;
}

export const WaitlistStrip: React.FC<WaitlistStripProps> = ({ 
  className = '',
  onSuccess 
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Email validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      const leadPayload = {
        name: 'Waitlist Subscriber',
        email: email.toLowerCase().trim(),
        source: 'waitlist',
        marketing_consent: true, // Implied consent for waitlist
        utm_source: new URLSearchParams(window.location.search).get('utm_source'),
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        referrer: document.referrer
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadPayload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to join waitlist');
      }

      setStatus('success');
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess(result);
      }

      // Reset form after delay
      setTimeout(() => {
        setEmail('');
        setStatus('idle');
      }, 5000);

    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 ${className}`}>
      <AnimatePresence>
        {status !== 'success' && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 backdrop-blur-xl border-t-2 border-emerald-300/40 shadow-[0_-15px_60px_rgba(16,185,129,0.4)] relative overflow-hidden"
          >
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-transparent to-green-400/20 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Left side - Message */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] ring-2 ring-white/40">
                    <Users className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg drop-shadow-lg tracking-tight">Don't Miss Out!</h4>
                    <p className="text-white/95 text-sm font-medium drop-shadow-sm">
                      Join 500+ Malaysian SMEs getting exclusive Bijou updates
                    </p>
                  </div>
                </div>

                {/* Right side - Form */}
                <form onSubmit={handleSubmit} className="flex items-center gap-3 min-w-0 flex-1 max-w-md ml-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/80" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/20 border-2 border-white/30 focus:border-white/60 focus:outline-none text-white placeholder-white/70 backdrop-blur-sm transition-all font-medium shadow-lg"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.05 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                      status === 'loading'
                        ? 'bg-white/30 text-white/70 cursor-not-allowed'
                        : 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Error message */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 mt-3 text-red-200"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 backdrop-blur-xl border-t border-green-400/30"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-8 h-8 text-white" />
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg">Swee! You're In! 🎉</h4>
                  <p className="text-green-100 text-sm">
                    You'll be first to know about exclusive Malaysian SME features & early access.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};