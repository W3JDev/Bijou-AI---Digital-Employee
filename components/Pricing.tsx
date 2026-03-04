import { motion } from "framer-motion";
import { Check, Crown, Lock, Zap } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

interface PricingProps {
  onOpenModal: () => void;
}

const addOns = [
  { name: "Extra WhatsApp number", when: "Q2 2026", price: "+RM80/mo" },
  { name: "Extra Telegram bot", when: "Q2 2026", price: "+RM60/mo" },
  { name: "Multi-user seats", when: "Q2 2026", price: "+RM80/seat" },
  {
    name: "Appointment reminders (WhatsApp push)",
    when: "Q2 2026",
    price: "+RM60/mo",
  },
  { name: "Facebook Messenger", when: "Q3 2026", price: "+RM60/mo" },
  { name: "Advanced PDF parsing", when: "Q3 2026", price: "+RM100/mo" },
  { name: "Larger context window (128K)", when: "Q3 2026", price: "+RM80/mo" },
  { name: "Loan calculator", when: "Q4 2026", price: "+RM150/mo" },
];

export const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const { t } = useTranslation();

  const liveFeatures = [
    t("pricing.pro.features.0"),
    t("pricing.pro.features.1"),
    t("pricing.pro.features.2"),
    t("pricing.pro.features.3"),
    t("pricing.pro.features.4"),
    t("pricing.pro.features.5"),
    t("pricing.pro.features.6"),
    t("pricing.pro.features.7"),
    t("pricing.pro.features.8"),
    t("pricing.pro.features.9"),
  ];

  return (
    <section
      id="pricing"
      className="py-24 relative bg-gradient-to-b from-dark-900 to-black overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-panel-3d border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
            {t("pricing.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-5 tracking-tight text-white">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("pricing.subtitle.part1")}{" "}
            <span className="text-gold-400 font-bold">
              {t("pricing.subtitle.trial")}
            </span>
            {t("pricing.subtitle.part2")}
          </p>
        </motion.div>

        {/* PRO Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel-3d rounded-3xl p-8 md:p-12 border-2 border-gold-400/50 shadow-[0_0_80px_rgba(212,175,55,0.18)] relative mb-6"
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 text-black text-xs font-black uppercase tracking-widest whitespace-nowrap">
            {t("pricing.pro.badge")}
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-10">
            {/* Left: Pricing */}
            <div className="md:w-72 flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {t("pricing.pro.name")}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {t("pricing.pro.description")}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mt-6 mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-400 font-medium">RM</span>
                  <span className="text-6xl font-black text-gradient-gold leading-none">
                    {t("pricing.pro.price")}
                  </span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
              </div>

              {/* Annual option */}
              <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl px-4 py-3 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">
                    Annual Plan
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-gray-400">RM</span>
                  <span className="text-2xl font-black text-white">
                    {t("pricing.pro.yearlyPrice")}
                  </span>
                  <span className="text-gray-400 text-xs">/year</span>
                </div>
                <p className="text-emerald-400 text-xs font-semibold mt-1">
                  {t("pricing.pro.yearlySaving")}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenModal}
                className="w-full py-4 px-6 rounded-xl font-bold text-black bg-gradient-to-r from-gold-500 to-gold-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all transform hover:scale-[1.02] text-sm"
              >
                {t("pricing.cta.trial")}
              </button>

              {/* Zero Hidden Fees */}
              <div className="mt-4 border border-emerald-500/15 bg-emerald-950/20 rounded-xl px-4 py-3">
                <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                  Zero hidden fees. Ever.
                </p>
                <div className="grid grid-cols-1 gap-y-1">
                  {[
                    "WhatsApp conversation markup",
                    "Per-message charges",
                    "WABA application fee",
                    "Annual lock-in",
                    "Bot-wall for support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-red-400 text-xs leading-none">
                        ✕
                      </span>
                      <span className="text-gray-400 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-center text-gold-400/70 mt-3 font-medium">
                {t("pricing.guarantee.title")}
              </p>
            </div>

            {/* Right: Features */}
            <div className="flex-1">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                ✅ What&apos;s Live Today
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-5">
                {liveFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Early Adopter Counter */}
              <div className="border-t border-white/5 pt-4 mt-2">
                <div className="flex items-center gap-3 bg-gold-500/10 border border-gold-400/30 rounded-xl px-4 py-3">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                    }}
                    className="flex-shrink-0"
                  >
                    <Lock className="w-5 h-5 text-gold-400" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gold-300 text-[10px] font-black uppercase tracking-wider mb-0.5">
                      Early Adopter Price Lock
                    </div>
                    <div className="text-white text-xs font-semibold">
                      <span className="text-gold-400">7 of 10 spots</span>{" "}
                      remaining — price locked forever
                    </div>
                    <div className="mt-1.5 w-full bg-black/30 rounded-full h-1">
                      <div className="bg-gradient-to-r from-gold-500 to-gold-300 h-1 rounded-full w-[70%]" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px] leading-relaxed mt-2 pl-1">
                  💡 {t("pricing.pro.earlyAccessNote")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm">
            {t("pricing.cta.enterprisePrompt")}{" "}
            <button
              onClick={onOpenModal}
              className="text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-2 transition-colors"
            >
              {t("pricing.cta.enterprise")}
            </button>
          </p>
        </motion.div>

        {/* Add-ons Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel-3d rounded-3xl p-8 border border-white/10 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {t("pricing.addons.title")}
            </h3>
            <p className="text-gray-400 text-sm">
              {t("pricing.addons.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {addOns.map((addon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white/5 border border-white/[0.08] rounded-xl p-4 hover:border-gold-400/20 transition-colors"
              >
                <p className="text-white text-sm font-semibold leading-snug mb-2">
                  🚧 {addon.name}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{addon.when}</span>
                  <span className="text-gold-400 text-xs font-bold">
                    {addon.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-emerald-400 text-xs font-semibold mt-6">
            ✅ Pro customers get early access FREE when each feature ships
          </p>
        </motion.div>

        {/* Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass-panel-3d border border-emerald-500/20 bg-emerald-900/10">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">
                {t("pricing.guarantee.title")}
              </div>
              <div className="text-sm text-gray-400">
                {t("pricing.guarantee.subtitle")}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// NOTE: pricing.starter.*, pricing.professional.*, pricing.enterprise.* keys in i18n.ts are
// kept for reference/rollback but no longer rendered in this component.
// Only pricing.pro.* keys are active now. To rollback: restore the old Pricing.tsx from git history.
