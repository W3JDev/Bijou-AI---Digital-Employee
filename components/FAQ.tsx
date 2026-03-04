import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: React.ReactNode;
  category: string;
}

const faqs: FAQItem[] = [
  // About Bijou
  {
    category: "About Bijou",
    q: "What exactly is Bijou?",
    a: (
      <>
        Bijou is a Malaysian-built WhatsApp and Telegram AI assistant that
        replies to customers in Manglish, books appointments via Cal.com, and
        escalates complex issues to you via email/WhatsApp. Think of it as a
        24/7 staff member who never sleeps, never forgets, and costs{" "}
        <strong className="text-gold-400">RM299/month</strong> instead of
        RM2,500+/month for a human receptionist.
      </>
    ),
  },
  {
    category: "About Bijou",
    q: "Why did you build Bijou?",
    a: "Founder's story: My mother's life was saved by AI-powered cancer research in 2023. I saw firsthand how AI can change lives — so I built Bijou to help Malaysian SMEs compete with bigger businesses without hiring full-time staff they can't afford.",
  },
  {
    category: "About Bijou",
    q: "Is Bijou a chatbot or a real AI?",
    a: "Real AI powered by GPT-4 — but constrained to ONLY answer from YOUR knowledge base (no hallucination). It doesn't generate random answers. If it doesn't know, it escalates to you.",
  },

  // Malaysian-Specific
  {
    category: "Malaysian Market",
    q: 'Does it understand Manglish? Like "Got or not?", "Can lah", "Tomorrow free ah?"',
    a: (
      <>
        <p className="mb-3">
          YES. Bijou has a custom Manglish engine trained on 20+ Malaysian
          speech patterns. It detects code-switching between BM/English/
          Mandarin/Tamil and replies naturally.
        </p>
        <div className="bg-black/30 rounded-xl p-4 border border-white/10 text-sm font-mono space-y-2">
          <div className="text-gray-400">
            Customer:{" "}
            <span className="text-white">
              "Tmr morning got slot or not? Near LRT can ah?"
            </span>
          </div>
          <div className="text-emerald-400">
            Bijou:{" "}
            <span className="text-white">
              "Got lah! 10am free. Walking distance from LRT station, 5 min
              only."
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    category: "Malaysian Market",
    q: "Will it work for my industry? (Property agents / F&B / clinics / salons)",
    a: "Yes — we've tested with property agents (most popular), restaurants, medical clinics, and beauty salons. You upload your own FAQs, property listings, menu, or service catalog. The AI learns YOUR business, not generic templates.",
  },
  {
    category: "Malaysian Market",
    q: "My customers speak BM, some speak English, some mix. Will Bijou get confused?",
    a: 'No — it auto-detects language and mirrors the customer. If they speak BM, it replies in BM. If they mix ("Booking untuk esok boleh tak?"), it mixes back naturally.',
  },

  // Pricing
  {
    category: "Pricing & Fees",
    q: "Is RM299/month really all I pay? No conversation fees like other platforms?",
    a: "RM299/month. Period. No per-message fees. No WhatsApp conversation markup (competitors charge 20% on top of Meta fees). No surprise annual lock-in. Cancel anytime.",
  },
  {
    category: "Pricing & Fees",
    q: "What about WhatsApp Business API (WABA) fees? I heard it's expensive.",
    a: (
      <>
        <p className="mb-3">
          Bijou uses the GOWA bridge — you don't need WABA at all. No
          RM280/month Meta subscription. No conversation markups. Zero WABA
          costs.
        </p>
        <p className="mb-2 text-sm text-gray-400 font-semibold">
          Here's what others actually charge:
        </p>
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between items-center bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2">
            <span className="text-gray-300">ChatDaddy (advertised ~RM75)</span>
            <span className="text-red-400 font-bold">~RM280–500/mo actual</span>
          </div>
          <div className="flex justify-between items-center bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2">
            <span className="text-gray-300">Wati</span>
            <span className="text-red-400 font-bold">
              20% markup on Meta fees
            </span>
          </div>
          <div className="flex justify-between items-center bg-red-500/5 border border-red-500/10 rounded-lg px-3 py-2">
            <span className="text-gray-300">DahReply</span>
            <span className="text-red-400 font-bold">~RM700+/mo total</span>
          </div>
          <div className="flex justify-between items-center bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
            <span className="text-white font-bold">Bijou</span>
            <span className="text-emerald-400 font-bold">
              RM299/mo flat. Always.
            </span>
          </div>
        </div>
      </>
    ),
  },
  {
    category: "Pricing & Fees",
    q: "Do I get locked into an annual contract?",
    a: "NO. Monthly plans cancel anytime. Annual plan (RM2,990 — saves RM598) is optional, and if you cancel early, we refund the unused months. No annual trap.",
  },
  {
    category: "Pricing & Fees",
    q: "What's the refund policy?",
    a: (
      <>
        30-day money-back guarantee. If you set it up, test it, and it doesn't
        work for your business, email{" "}
        <a
          href="mailto:jewel@mybijou.xyz"
          className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
        >
          jewel@mybijou.xyz
        </a>{" "}
        directly — full refund, no questions asked.
      </>
    ),
  },

  // Setup & Technical
  {
    category: "Setup & Technical",
    q: "How long does setup take? I don't have time for 2-week integrations.",
    a: (
      <>
        <p className="mb-3">
          <strong className="text-gold-400">15 minutes.</strong> Here's the full
          process:
        </p>
        <ol className="space-y-1.5 text-sm list-none">
          {[
            "Sign up → verify email (2 min)",
            "Scan WhatsApp QR code (1 min)",
            "Upload your FAQ document or paste FAQs (5 min)",
            "Connect Cal.com calendar — optional (3 min)",
            "Test with a few WhatsApp messages → go live (4 min)",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-300">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-gray-400">
          No developer needed. No consultants charging RM5,000 for setup.
        </p>
      </>
    ),
  },
  {
    category: "Setup & Technical",
    q: "Do I need to install anything or learn complicated flow builders?",
    a: "No. Bijou runs in the cloud (Singapore servers). You don't install anything. There's no flow builder — the AI handles conversations naturally based on your FAQs, not rigid scripts.",
  },
  {
    category: "Setup & Technical",
    q: "What if I want to change my FAQs or menu later?",
    a: "Log into your dashboard, go to Knowledge Base, and update any FAQ instantly. Changes go live in under 60 seconds — no developer, no support ticket.",
  },
  {
    category: "Setup & Technical",
    q: "What happens when Bijou can't answer a question?",
    a: 'It escalates — sends you a WhatsApp alert and email with the full conversation context, so you can jump in immediately. The customer gets a polite holding message like "Let me connect you with our team" rather than a dead end.',
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

const categoryColors: Record<string, string> = {
  "About Bijou": "gold",
  "Malaysian Market": "emerald",
  "Pricing & Fees": "blue",
  "Setup & Technical": "purple",
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 relative bg-black/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">Real answers. No sales fluff.</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {["All", ...categories].map((cat) => {
            const color = categoryColors[cat] ?? "gray";
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  isActive
                    ? `bg-${color}-500/20 border-${color}-400/50 text-${color}-300`
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filtered.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className={`glass-panel-3d rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-gold-400/30 bg-gold-500/5"
                    : "border-white/8 hover:border-white/15"
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-start gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold-400/60 mt-0.5 hidden sm:block w-24 flex-shrink-0">
                    {item.category}
                  </span>
                  <span className="flex-1 font-semibold text-white leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-6 sm:pl-[7.5rem] text-gray-300 text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center glass-panel-3d rounded-2xl p-8 border border-white/10"
        >
          <p className="text-white font-semibold text-lg mb-2">
            Still have a specific question?
          </p>
          <p className="text-gray-400 text-sm mb-5">
            Email the founder directly — real replies, no bots.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:jewel@mybijou.xyz"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold-500/10 border border-gold-400/30 text-gold-400 hover:bg-gold-500/20 rounded-xl text-sm font-semibold transition-all"
            >
              <Mail className="w-4 h-4" />
              jewel@mybijou.xyz
            </a>
            <a
              href="https://wa.me/60174106981?text=Hi! I have a question about Bijou AI."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-500/20 rounded-xl text-sm font-semibold transition-all"
            >
              WhatsApp us directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
