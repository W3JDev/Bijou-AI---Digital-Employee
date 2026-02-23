import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Building2, Mail, User, Phone, CheckCircle, AlertCircle, X, Calendar, 
  MessageSquare, RefreshCw, ExternalLink, Users, Crown, Sparkles, Clock, Shield 
} from 'lucide-react';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signup' | 'waitlist' | 'demo';
  source?: string;
}

interface ErrorState {
  type: 'validation' | 'duplicate' | 'server' | 'network';
  title: string;
  message: string;
  solution: string;
  actionLabel: string;
  actionHandler: () => void;
  showSupport?: boolean;
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
  const [errorState, setErrorState] = useState<ErrorState | null>(null);
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Sophisticated loading progress animation
  useEffect(() => {
    if (status === 'loading') {
      setLoadingProgress(0);
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 90) return prev; // Stay at 90% until actual completion
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [status]);

  // Redirect countdown for successful signups
  useEffect(() => {
    if (mode === 'signup' && status === 'success' && redirectCountdown === null) {
      setRedirectCountdown(5);
      const interval = setInterval(() => {
        setRedirectCountdown(prev => {
          if (prev === null || prev <= 1) {
            clearInterval(interval);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [status, mode, redirectCountdown]);

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

  const createErrorState = (apiError: any): ErrorState => {
    const errorMessage = apiError.detail || apiError.message || 'Unknown error';
    
    // Handle duplicate email scenario
    if (errorMessage.includes('already registered') || errorMessage.includes('duplicate')) {
      const email = formData.email;
      return {
        type: 'duplicate',
        title: 'Already Part of the Family! 🎉',
        message: `Great news! ${email} is already registered with Bijou AI.`,
        solution: 'You can access your account or request a password reset.',
        actionLabel: 'Access My Account',
        actionHandler: () => {
          window.open(`https://wa.me/60174106981?text=Hi! I need help accessing my Bijou AI account for ${email}`, '_blank');
        },
        showSupport: true
      };
    }

    // Handle validation errors
    if (errorMessage.includes('invalid') || errorMessage.includes('required')) {
      return {
        type: 'validation',
        title: 'Form Incomplete',
        message: 'Please check your information and try again.',
        solution: errorMessage,
        actionLabel: 'Fix & Retry',
        actionHandler: () => {
          setStatus('idle');
          setErrorState(null);
        }
      };
    }

    // Handle server errors
    if (errorMessage.includes('server') || errorMessage.includes('500')) {
      return {
        type: 'server',
        title: 'Server Hiccup',
        message: 'Our servers are experiencing high demand (good problem to have!).',
        solution: 'Please try again in a moment, or WhatsApp us for immediate assistance.',
        actionLabel: 'Try Again',
        actionHandler: () => {
          setStatus('idle');
          setErrorState(null);
        },
        showSupport: true
      };
    }

    // Handle network errors
    if (!navigator.onLine || errorMessage.includes('network') || errorMessage.includes('fetch')) {
      return {
        type: 'network',
        title: 'Connection Issue',
        message: 'Looks like your internet connection is unstable.',
        solution: 'Check your connection and try again, or save our WhatsApp for later.',
        actionLabel: 'Retry',
        actionHandler: () => {
          setStatus('idle');
          setErrorState(null);
        },
        showSupport: true
      };
    }

    // Generic error fallback
    return {
      type: 'server',
      title: 'Something Unexpected Happened',
      message: "Don't worry, this happens sometimes with high-traffic websites.",
      solution: 'Our team has been notified. Try again or contact us directly.',
      actionLabel: 'Try Again',
      actionHandler: () => {
        setStatus('idle');
        setErrorState(null);
      },
      showSupport: true
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorState(null);
    setLoadingProgress(0);

    // Client-side validation with better UX
    if (!formData.business_name.trim() || formData.business_name.trim().length < 2) {
      setErrorState({
        type: 'validation',
        title: 'Business Name Required',
        message: 'We need to know what to call your business!',
        solution: 'Enter your business name (minimum 2 characters)',
        actionLabel: 'Got It',
        actionHandler: () => {
          setStatus('idle');
          setErrorState(null);
          // Focus the business name field
          setTimeout(() => {
            document.querySelector<HTMLInputElement>('input[placeholder*="Business name"]')?.focus();
          }, 100);
        }
      });
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorState({
        type: 'validation',
        title: 'Valid Email Required',
        message: 'We need your email to send you important updates and access details.',
        solution: 'Enter a valid email address (e.g., you@company.com)',
        actionLabel: 'Fix Email',
        actionHandler: () => {
          setStatus('idle');
          setErrorState(null);
          setTimeout(() => {
            document.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
          }, 100);
        }
      });
      setStatus('error');
      return;
    }

    if (formData.phone && formData.phone.trim()) {
      const cleanedPhone = validatePhone(formData.phone);
      if (cleanedPhone.length < 10) {
        setErrorState({
          type: 'validation',
          title: 'WhatsApp Number Format',
          message: 'We need a valid Malaysian WhatsApp number to send you updates.',
          solution: 'Enter your WhatsApp number (e.g., 0123456789 or 60123456789)',
          actionLabel: 'Fix Number',
          actionHandler: () => {
            setStatus('idle');
            setErrorState(null);
            setTimeout(() => {
              document.querySelector<HTMLInputElement>('input[type="tel"]')?.focus();
            }, 100);
          }
        });
        setStatus('error');
        return;
      }
      formData.phone = cleanedPhone;
    }

    try {
      if (mode === 'demo') {
        // Demo booking flow
        if (!formData.demo_time.trim()) {
          setErrorState({
            type: 'validation',
            title: 'Demo Time Required',
            message: 'When would you like your personalized demo?',
            solution: 'Enter your preferred time (e.g., "Monday 3pm" or "This Friday morning")',
            actionLabel: 'Add Time',
            actionHandler: () => {
              setStatus('idle');
              setErrorState(null);
              setTimeout(() => {
                document.querySelector<HTMLInputElement>('input[placeholder*="demo time"]')?.focus();
              }, 100);
            }
          });
          setStatus('error');
          return;
        }

        const demoPayload = {
          business_name: formData.business_name.trim(),
          email: formData.email.toLowerCase().trim(),
          phone: formData.phone || '',
        };

        // Simulate progress for better UX
        setTimeout(() => setLoadingProgress(60), 500);

        // First register in onboarding system
        const response = await fetch('/api/onboarding/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(demoPayload)
        });

        const result = await response.json();
        setLoadingProgress(80);

        if (!response.ok) {
          const errorState = createErrorState(result);
          setErrorState(errorState);
          setStatus('error');
          return;
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
              message: `🎯 NEW DEMO REQUEST!\n\nBusiness: ${formData.business_name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Time: ${formData.demo_time}\n\nSource: ${source}`
            })
          });
        } catch (notifError) {
          console.warn('WhatsApp notification failed:', notifError);
          // Don't fail the flow if notification fails
        }

        setLoadingProgress(100);
        setStatus('success');
        
      } else {
        // Regular signup/waitlist flow
        const signupPayload = {
          business_name: formData.business_name.trim(),
          email: formData.email.toLowerCase().trim(),
          phone: formData.phone || '',
        };

        setTimeout(() => setLoadingProgress(60), 500);

        const response = await fetch('/api/onboarding/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupPayload)
        });

        const result = await response.json();
        setLoadingProgress(80);

        if (!response.ok) {
          const errorState = createErrorState(result);
          setErrorState(errorState);
          setStatus('error');
          return;
        }

        setLoadingProgress(100);

        if (mode === 'signup' && result.onboarding_url) {
          // Redirect to onboarding flow after countdown
          setStatus('success');
          setTimeout(() => {
            window.location.href = result.onboarding_url;
          }, 5000);
        } else {
          setStatus('success');
        }
      }

      // Reset form after delay (except for signup which redirects)
      setTimeout(() => {
        if (mode === 'waitlist' || mode === 'demo') {
          setFormData({ business_name: '', email: '', phone: '', demo_time: '' });
          setStatus('idle');
          setLoadingProgress(0);
        }
      }, mode === 'waitlist' ? 4000 : 6000);

    } catch (error: any) {
      console.error('Form submission error:', error);
      const errorState = createErrorState(error);
      setErrorState(errorState);
      setStatus('error');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorState(null);
    }
  };

  const getModalTitle = () => {
    switch (mode) {
      case 'waitlist': return 'Join the VIP List';
      case 'demo': return 'Book Your Personal Demo';
      default: return 'Start Your Free Trial';
    }
  };

  const getModalSubtitle = () => {
    switch (mode) {
      case 'waitlist': return 'Be first to access exclusive Malaysian SME features + insider tips';
      case 'demo': return '15-minute personalized demo + free business automation analysis';
      default: return '14 days free • No credit card • Cancel anytime • Set up in 5 minutes';
    }
  };

  const getSuccessContent = () => {
    switch (mode) {
      case 'waitlist': 
        return {
          icon: '🎉',
          title: "You're on the VIP list!",
          message: "We'll WhatsApp you first when new features drop, plus exclusive Malaysian SME automation tips.",
          subMessage: 'Expect your first insider tip within 24 hours!'
        };
      case 'demo': 
        return {
          icon: '✅',
          title: 'Demo booked successfully!',
          message: "We'll WhatsApp you within 2 hours to confirm your preferred time slot.",
          subMessage: 'Get ready to see how Bijou handles real customer inquiries in Manglish!'
        };
      default: 
        return {
          icon: '🚀',
          title: 'Welcome to Bijou AI!',
          message: redirectCountdown ? `Redirecting to your onboarding in ${redirectCountdown} seconds...` : 'Redirecting to your personalized setup...',
          subMessage: "You're about to experience the future of Malaysian business automation!"
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
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 flex items-center justify-center"
              >
                {mode === 'demo' ? <Calendar className="w-8 h-8 text-dark-900" /> :
                 mode === 'waitlist' ? <Crown className="w-8 h-8 text-dark-900" /> :
                 <Sparkles className="w-8 h-8 text-dark-900" />}
              </motion.div>
              <h3 className="text-2xl font-display font-bold mb-2">{getModalTitle()}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{getModalSubtitle()}</p>
            </div>

            <AnimatePresence mode="wait">
              {status === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl glass-panel-3d border-emerald-500/30 bg-emerald-500/10 mb-6"
                >
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-emerald-400 font-semibold">Setting up your account...</p>
                    <div className="w-48 h-2 bg-gray-700 rounded-full mt-3 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <p className="text-emerald-300 text-xs mt-2">Almost there... {Math.round(loadingProgress)}%</p>
                  </div>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl glass-panel-3d border-emerald-500/30 bg-emerald-500/10 mb-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="text-6xl"
                  >
                    {getSuccessContent().icon}
                  </motion.div>
                  <div className="text-center">
                    <p className="text-emerald-400 font-semibold text-lg">{getSuccessContent().title}</p>
                    <p className="text-emerald-300 text-sm mt-2 leading-relaxed">{getSuccessContent().message}</p>
                    {getSuccessContent().subMessage && (
                      <p className="text-emerald-200 text-xs mt-3 italic">{getSuccessContent().subMessage}</p>
                    )}
                    {redirectCountdown && (
                      <div className="mt-4 flex items-center justify-center gap-2 text-emerald-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-mono">{redirectCountdown}s</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {status === 'error' && errorState && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 rounded-xl glass-panel-3d border-red-500/30 bg-red-500/10 mb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-red-400 font-semibold text-lg mb-1">{errorState.title}</h4>
                      <p className="text-red-300 text-sm mb-2">{errorState.message}</p>
                      <p className="text-red-200 text-xs mb-4 italic">{errorState.solution}</p>
                      
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={errorState.actionHandler}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors text-sm font-medium"
                        >
                          <RefreshCw className="w-4 h-4" />
                          {errorState.actionLabel}
                        </button>
                        
                        {errorState.showSupport && (
                          <a
                            href="https://wa.me/60174106981?text=Hi! I need help with my Bijou AI signup. I'm getting an error."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                          >
                            <MessageSquare className="w-4 h-4" />
                            WhatsApp Support
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {status !== 'success' && status !== 'loading' && (
              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: status === 'error' ? 0.7 : 1 }}
                transition={{ duration: 0.2 }}
              >
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
                    placeholder="WhatsApp number (optional)"
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
                      placeholder="Preferred demo time * (e.g. Monday 3pm)"
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
                      {mode === 'demo' ? 'Book My Demo' : mode === 'waitlist' ? 'Join VIP List' : 'Start Free Trial'}
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>PDPA Compliant</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>500+ Malaysian SMEs</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400 mb-3">
                    Questions? Our Malaysian team is standing by
                  </p>
                  <a
                    href="https://wa.me/60174106981?text=Hi! I'm interested in Bijou AI. Can we chat about how it can help my business?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp us instantly
                  </a>
                </div>
              </motion.form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};