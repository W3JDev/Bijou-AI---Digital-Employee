# Bijou AI | The Malaysian Digital Employee 🇲🇾

![Status](https://img.shields.io/badge/Status-Production_v3.0.0-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Tech](https://img.shields.io/badge/Stack-React_19_|_TypeScript_|_Vite-blue)
![Made by](https://img.shields.io/badge/Made_by-W3J_LLC-gold)

**Bijou AI** is a WhatsApp-native AI Digital Employee built specifically for Southeast Asian SMEs. Unlike generic chatbots, Bijou speaks fluent **Manglish** (Malaysian English), understands cultural nuances, and operates 24/7 to capture leads, book appointments, and close sales while you sleep.

This repository contains the **landing page** for Bijou AI's marketing website at [mybijou.xyz](https://mybijou.xyz).

---

## 🚀 Live Production

- **Landing Page:** [mybijou.xyz](https://mybijou.xyz)
- **Dashboard:** [app.mybijou.xyz](https://app.mybijou.xyz)
- **Sales Deck:** [app.mybijou.xyz/static/sales-presentation.html](https://app.mybijou.xyz/static/sales-presentation.html)
- **User Guide:** [app.mybijou.xyz/static/user-guide.html](https://app.mybijou.xyz/static/user-guide.html)

---

## 💰 Pricing

- **Starter:** RM159/month (Launch pricing - First 100 customers)
- **Professional:** RM299/month
- **Enterprise:** Custom pricing
- **Trial:** 14 days free, no credit card required

---

## 🎯 Key Features

### For Businesses
- **24/7 Lead Capture** - Never miss a WhatsApp inquiry, even at 2 AM
- **Instant Responses** - <1 second response time vs 2+ hours for human agents
- **Cultural Intelligence** - Fluent Manglish with Malaysian context awareness
- **ROI Guarantee** - 335% average ROI for Malaysian SMEs
- **Cost Savings** - RM9,201/month saved vs hiring Junior CS Agent

### Technical Capabilities
- **TRACE Framework** - 4-agent empathy pipeline (ASI/CAE/SRP/ERS)
- **Multi-language** - English, Bahasa Malaysia, Manglish
- **WhatsApp Native** - Works through existing WhatsApp Business account
- **Knowledge Base** - RAG-powered with your business documents
- **CRM Integration** - Calendar booking, lead scoring, follow-ups

---

## 🛠️ Tech Stack

### Frontend (This Repo)
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 6.4.1
- **Styling:** Tailwind CSS (CDN) + Custom CSS
- **Animation:** Framer Motion 12.34.1
- **Icons:** Lucide React 0.574.0
- **Deployment:** Vercel (auto-deploy from `main` branch)

### Backend (Separate Repo)
- **API:** FastAPI + Python
- **Database:** Supabase (PostgreSQL + pgvector)
- **AI:** Google Gemini 2.5 Flash + Custom TRACE pipeline
- **WhatsApp:** GOWA Bridge v8.1.2 (Go-based)
- **Auth:** Magic link + JWT
- **Payments:** Stripe Live (FPX, DuitNow QR, Google Pay, Cards)

---

## 📦 Installation & Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Quick Start

```bash
# Clone repository
git clone https://github.com/W3JDev/Bijou-AI---Digital-Employee.git
cd Bijou-AI---Digital-Employee

# Install dependencies
npm install

# Run development server
npm run dev
# Opens at http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

This is a **static frontend** - no API keys needed for the landing page. The live demo uses backend APIs at `app.mybijou.xyz`.

---

## 📂 Project Structure

```
bijou-ai/
├── components/              # React UI Components
│   ├── Navbar.tsx          # Navigation with modal triggers
│   ├── Hero.tsx            # Hero section with ROI messaging
│   ├── Pricing.tsx         # 3-tier pricing component
│   ├── RevenueCalculator.tsx  # Interactive ROI calculator
│   ├── CaseStudies.tsx     # Malaysian testimonials
│   ├── FinalCTA.tsx        # Lead capture CTA
│   ├── Footer.tsx          # Footer with W3J LLC attribution
│   └── ...
├── services/
│   └── gemini.ts           # AI integration (demo only)
├── public/                  # Static assets
├── App.tsx                  # Main app router
├── index.html              # Entry HTML with Tailwind config
└── vite.config.ts          # Build configuration
```

---

## 🎨 Design System

### Color Palette
- **Deep Green:** `#0d3d3d` - Primary brand color (WhatsApp familiarity)
- **Gold:** `#D4AF37` - Conversion elements, pricing, CTAs
- **Black:** `#000000` - Background
- **White:** `#FFFFFF` - Text

### Typography
- **Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800

### Animations
- Framer Motion for all page transitions
- Spring physics for interactive elements
- Stagger animations for list reveals

---

## 🚢 Deployment

This project is configured for **automatic deployment** via Vercel:

1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Live at [mybijou.xyz](https://mybijou.xyz)

### Manual Deployment

```bash
# Build production bundle
npm run build

# Deploy dist/ folder to your hosting provider
```

---

## 📊 Business Metrics

### Target Markets
1. **Malaysia** - Home market, RM159 pricing, FPX/DuitNow payments
2. **Dubai/UAE** - 87% WhatsApp penetration, property agents
3. **Singapore** - Premium SEA hub, SGD pricing
4. **Bangladesh** - Origin market advantage

### Success Metrics
- **0 → 7 Malaysian customers** = RM1,113/month baseline runway
- **10 Dubai Pro customers** = USD international revenue
- **Target:** RM 1.08M ARR by December 2026

---

## 👥 Contact & Support

### Bijou AI
- **General:** [hello@mybijou.xyz](mailto:hello@mybijou.xyz)
- **Sales:** [mrj@mybijou.xyz](mailto:mrj@mybijou.xyz) (MR J - AI CEO)
- **Support:** [support@mybijou.xyz](mailto:support@mybijou.xyz)
- **Founder:** [jewel@mybijou.xyz](mailto:jewel@mybijou.xyz)
- **WhatsApp:** [+60 17-410 6981](https://wa.me/60174106981)

### Social Media
- **LinkedIn:** [@mybijou](https://www.linkedin.com/company/mybijou/)
- **Instagram:** [@mybijouai](https://www.instagram.com/mybijouai/)
- **Twitter/X:** [@meetbijou](https://www.x.com/meetbijou)

---

## 🏢 About W3J LLC

Bijou AI is a production of **W3J LLC**, a Wyoming-based technology company with operations in Kuala Lumpur, Malaysia.

- **Website:** [w3jdev.com](https://www.w3jdev.com)
- **GitHub:** [@W3JDev](https://github.com/W3JDev)
- **Founder:** Muhammad Nurunnabi (Jewel)
- **Portfolio:** [portfolio.w3jdev.com](https://portfolio.w3jdev.com)

### Other Products
- **PunchClock** - LHDN 2025 HR Operating System (15,000+ users)
- **MenuMuze** - Luxury restaurant AI assistant
- **SuaraKira** - Voice-to-ledger expense tracker (Manglish)
- **InterviewOS** - STAR method AI interview coach

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Development Guidelines
- Follow existing code style and patterns
- Use TypeScript interfaces for all props
- Maintain mobile-responsive design
- Test on multiple screen sizes
- Keep bundle size optimized

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🚀 Quick Links

- [Live Demo](https://mybijou.xyz)
- [Sign Up](https://app.mybijou.xyz/signup)
- [Book Demo](https://cal.com/getbijou)
- [Documentation](https://app.mybijou.xyz/static/user-guide.html)
- [Sales Deck](https://app.mybijou.xyz/static/sales-presentation.html)

---

**Made with 🤍 by [W3J LLC](https://www.w3jdev.com)** | Wyoming, USA • Operations: Kuala Lumpur, Malaysia
