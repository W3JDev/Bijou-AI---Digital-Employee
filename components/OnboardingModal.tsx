import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Mail, User, Phone, CheckCircle, AlertCircle, X, Calendar, MessageSquare } from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signup' | 'waitlist' | 'demo';
  source?: string;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ 
  isOpen, 
  onClose, 
  mode = 'signup',
  source = 'modal' 
}) => {
  const [formData, setFormData] = useState({
    business_name: '',
    email: '',
    phone: '',
    demo_time: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhone = (phone: string): string => {
    if (!phone) return '';
    
    // Strip all non-digits
    let cleaned = phone.replace(/\D/g, '');
    
    // If starts with 0, replace with 60 (Malaysian format)
    if (cleaned.startsWith('0')) {
      cleaned = '60' + cleaned.substring(1);
    }
    
    return cleaned;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Client-side validation
    if (!formData.business_name.trim() || formData.business_name.trim().length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your business name');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email');
      return;
    }

    if (formData.phone && formData.phone.trim()) {
      const cleanedPhone = validatePhone(formData.phone);
      if (cleanedPhone.length < 10) {
        setStatus('error');
        setErrorMessage('Please enter your WhatsApp number e.g. 60123456789');
        return;
      }
      formData.phone = cleanedPhone;
    }

    try {
      if (mode === 'demo') {
        // Demo booking flow
        if (!formData.demo_time.trim()) {
          setStatus('error');
          setErrorMessage('Please enter your preferred demo time');
          return;
        }

        const demoPayload = {
          business_name: formData.business_name.trim(),
          email: formData.email.toLowerCase().trim(),
          phone: formData.phone || '',
        };

        // First register in onboarding system
        const response = await fetch('/api/onboarding/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(demoPayload)
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Failed to book demo');
        }

        // Send WhatsApp notification to owner
        try {
          await fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: '60174106981@s.whatsapp.net',
              message: `🎯 New Demo Request!\n\nBusiness: ${formData.business_name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Time: ${formData.demo_time}\n\nSource: ${source}`
            })
          });
        } catch (notifError) {
          console.warn('WhatsApp notification failed:', notifError);
          // Don't fail the flow if notification fails
        }

        setStatus('success');
        setErrorMessage('');
        
      } else {
        // Regular signup/waitlist flow
        const signupPayload = {
          business_name: formData.business_name.trim(),
          email: formData.email.toLowerCase().trim(),
          phone: formData.phone || '',
        };

        const response = await fetch('/api/onboarding/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupPayload)
        });

        const result = await response.json();

        if (!response.ok) {
          if (result.detail?.[0]?.msg) {
            throw new Error(result.detail[0].msg);
          }
          throw new Error(result.message || 'Failed to sign up');
        }

        if (mode === 'signup' && result.onboarding_url) {
          // Redirect to onboarding flow
          setTimeout(() => {
            window.location.href = result.onboarding_url;
          }, 2000);
        }

        setStatus('success');
        setErrorMessage('');
      }

      // Reset form after delay
      setTimeout(() => {
        if (mode === 'waitlist') {
          setFormData({ business_name: '', email: '', phone: '', demo_time: '' });
          setStatus('idle');
        } else {
          // For signup/demo, keep success state visible
        }
      }, mode === 'waitlist' ? 3000 : 5000);

    } catch (error: any) {
      setStatus('error');
      if (error.message.includes('duplicate')) {
        setErrorMessage('Already registered! Check your email.');
      } else {
        setErrorMessage(error.message || 'Aiyo, something went wrong boss. Please try again.');
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const getModalTitle = () => {
    switch (mode) {
      case 'waitlist': return 'Join Waitlist';
      case 'demo': return 'Book Free Demo';
      default: return 'Get Started';
    }
  };

  const getModalSubtitle = () => {
    switch (mode) {
      case 'waitlist': return "Be first to know about exclusive Malaysian SME features";
      case 'demo': return "15-min personalized demo + business analysis";
      default: return "Start your 14-day free trial";
    }
  };

  const getSuccessMessage = () => {
    switch (mode) {
      case 'waitlist': return {
        title: "🎉 You're on the list!",
        message: "We'll WhatsApp you shortly with exclusive updates."
      };
      case 'demo': return {
        title: "✅ Demo booked!",
        message: "We'll WhatsApp you to confirm your preferred time slot."
      };
      default: return {
        title: "🚀 Welcome to Bijou AI!",
        message: "Redirecting to your onboarding flow..."
      };
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="glass-panel-3d bg-dark-900/95 border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold mb-2">{getModalTitle()}</h3>
              <p className="text-gray-300">{getModalSubtitle()}</p>
            </div>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl glass-panel-3d border-emerald-500/30 bg-emerald-500/10 mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-400" />
                  <div className="text-center">
                    <p className="text-emerald-400 font-semibold text-lg">{getSuccessMessage().title}</p>
                    <p className="text-emerald-300 text-sm mt-1">{getSuccessMessage().message}</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass-panel-3d border-red-500/30 bg-red-500/10 mb-6"
                >
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <div>
                    <p className="text-red-400 font-semibold">Aiyo, something went wrong</p>
                    <p className="text-red-300 text-sm">{errorMessage}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {status !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Business name *"
                    value={formData.business_name}
                    onChange={(e) => handleInputChange('business_name', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass-panel-3d border border-white/10 focus:border-emerald-500/50 focus:outline-none text-white placeholder-gray-400 transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass-panel-3d border border-white/10 focus:border-emerald-500/50 focus:outline-none text-white placeholder-gray-400 transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="WhatsApp number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass-panel-3d border border-white/10 focus:border-emerald-500/50 focus:outline-none text-white placeholder-gray-400 transition-all"
                  />
                </div>

                {mode === 'demo' && (
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Preferred demo time *"
                      value={formData.demo_time}
                      onChange={(e) => handleInputChange('demo_time', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl glass-panel-3d border border-white/10 focus:border-emerald-500/50 focus:outline-none text-white placeholder-gray-400 transition-all"
                      required
                    />
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all ${
                    status === 'loading'
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-dark-900 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {mode === 'demo' ? 'Book My Demo' : mode === 'waitlist' ? 'Join Waitlist' : 'Start Free Trial'}
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400 mb-3">
                    Questions? WhatsApp our team directly
                  </p>
                  <a
                    href="https://wa.me/60174106981?text=Hi! I'm interested in Bijou AI. Can we chat about how it can help my business?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};