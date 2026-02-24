import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building2, Sparkles } from 'lucide-react';

interface PricingProps {
  onOpenModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const plans = [
    {
      name: "Starter",
      price: "159",
      originalPrice: "499",
      description: "Perfect for solo agents and small teams",
      badge: "FIRST 100 ONLY",
      badgeColor: "gold",
      icon: Zap,
      popular: true,
      features: [
        "24/7 WhatsApp AI Agent",
        "Up to 500 conversations/month",
        "Basic lead qualification",
        "Property brochure automation",
        "Standard analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "299",
      originalPrice: null,
      description: "For growing agencies & clinics",
      badge: "MOST POPULAR",
      badgeColor: "blue",
      icon: Building2,
      popular: false,
      features: [
        "Everything in Starter, plus:",
        "Unlimited conversations",
        "Advanced playbook customization",
        "Multi-language support (Manglish, BM, English)",
        "CRM integration (coming soon)",
        "Priority WhatsApp support",
        "Custom branding options"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      originalPrice: null,
      description: "For large teams & franchises",
      badge: "PREMIUM",
      badgeColor: "purple",
      icon: Sparkles,
      popular: false,
      features: [
        "Everything in Professional, plus:",
        "Unlimited team members",
        "Dedicated account manager",
        "Custom AI training on your data",
        "White-label solution",
        "SLA guarantee (99.9% uptime)",
        "24/7 phone + WhatsApp support"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-gradient-to-b from-dark-900 to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-panel-3d border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
            💎 Limited Time Offer
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with a <span className="text-gold-400 font-bold">14-day free trial</span>. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isStarter = plan.name === "Starter";
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-panel-3d rounded-3xl p-8 relative group ${
                  isStarter ? 'border-2 border-gold-400/50 shadow-[0_0_50px_rgba(212,175,55,0.2)]' : 'border border-white/10'
                }`}
              >
                {/* Badge */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  plan.badgeColor === 'gold' 
                    ? 'bg-gradient-to-r from-gold-500 to-gold-300 text-black'
                    : plan.badgeColor === 'blue'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white'
                    : 'bg-gradient-to-r from-purple-500 to-purple-400 text-white'
                }`}>
                  {plan.badge}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.badgeColor === 'gold' 
                    ? 'bg-gold-500/20 text-gold-400'
                    : plan.badgeColor === 'blue'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="mb-8">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-500 line-through text-lg">RM{plan.originalPrice}</span>
                      <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded-full">
                        68% OFF
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    {plan.price !== "Custom" && (
                      <>
                        <span className="text-xs text-gray-400 font-medium">RM</span>
                        <span className={`text-5xl font-black ${
                          isStarter ? 'text-gradient-gold' : 'text-white'
                        }`}>{plan.price}</span>
                        <span className="text-gray-400">/month</span>
                      </>
                    )}
                    {plan.price === "Custom" && (
                      <span className="text-5xl font-black text-white">{plan.price}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        isStarter ? 'text-gold-400' : 'text-emerald-400'
                      }`} />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={onOpenModal}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-[1.02] ${
                    isStarter
                      ? 'bg-gradient-to-r from-gold-500 to-gold-300 text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/20'
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </button>
                
                {isStarter && (
                  <p className="text-xs text-center text-gold-400/70 mt-4 font-medium">
                    ⚡ Limited to first 100 customers only
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass-panel-3d border border-emerald-500/20 bg-emerald-900/10">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">335% ROI Guarantee</div>
              <div className="text-sm text-gray-400">If Bijou doesn't save you at least 3x your subscription cost, we'll refund 100%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
