# Bijou AI Enterprise — WhatsApp AI Sales & Support Platform 🇲🇾

![Status](https://img.shields.io/badge/Status-Production_v3.2.0-success)
![License](https://img.shields.io/badge/License-Proprietary-red)
![Tech](https://img.shields.io/badge/Stack-React_19_|_TypeScript_|_Vite-blue)
![Made by](https://img.shields.io/badge/Made_by-W3J_LLC-gold)

**Bijou AI** is a multi-tenant SaaS WhatsApp AI agent that fully automates customer engagement for Malaysian and SE Asian SMEs — handling sales enquiries, booking calls, managing leads, escalating to humans, and giving operators a WhatsApp-native command interface to run the business from their phone. It speaks fluent **Manglish**, Malaysian English, BM, Chinese, and Tamil.

This repository contains the **landing page** for Bijou AI at [mybijou.xyz](https://mybijou.xyz). The production backend lives at `bijou-production.fly.dev`.

---

## ✨ What's New in v3.2.0 (Feb 2026)

| Feature                     | Detail                                                                  |
| --------------------------- | ----------------------------------------------------------------------- |
| **`@bijou` WA commands**    | Owner sends `@bijou status`, `@bijou help`, etc. directly from WhatsApp |
| **Contact CSV Export**      | `GET /api/contacts/export.csv` — download all CRM contacts as CSV       |
| **Contact CSV Import**      | `POST /api/contacts/import` — bulk-upsert contacts from CSV file        |
| **Dashboard Export/Import** | `↓ Export CSV` and `↑ Import CSV` buttons in Contacts CRM toolbar       |
| **Mobile PWA overhaul**     | safe-area, 44px touch targets, vertical CTA stack, sw.js v2.0.0         |

---

## 🚀 Live Production

| Environment    | URL                                                                                                      | Status |
| -------------- | -------------------------------------------------------------------------------------------------------- | ------ |
| Landing Page   | [mybijou.xyz](https://mybijou.xyz)                                                                       | Live   |
| Dashboard      | [app.mybijou.xyz](https://app.mybijou.xyz)                                                               | Live   |
| Production App | `bijou-production.fly.dev`                                                                               | Live   |
| WA Bridge      | `bijou-bridge-production-v2.fly.dev`                                                                     | Live   |
| Sales Deck     | [app.mybijou.xyz/static/sales-presentation.html](https://app.mybijou.xyz/static/sales-presentation.html) | Live   |
| User Guide     | [app.mybijou.xyz/static/user-guide.html](https://app.mybijou.xyz/static/user-guide.html)                 | Live   |

---

## 💰 Pricing

| Plan             | Launch Price | Original            | Trial         |
| ---------------- | ------------ | ------------------- | ------------- |
| **Starter**      | RM159/month  | ~~RM499~~ (68% off) | 14 days free  |
| **Professional** | RM299/month  | ~~RM799~~ (63% off) | 14 days free  |
| **Enterprise**   | Custom       | —                   | Contact sales |

> ⚠️ Launch pricing limited to first 100 customers. No credit card required for trial.

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

### Backend (Separate Repo — `w3j-bijou-enterprise`)

- **AI Model:** Google Gemini 2.5 Flash (`google-genai >= 1.56.0`)
- **API:** FastAPI + Uvicorn (Python 3.11)
- **Database:** Supabase (PostgreSQL + pgvector)
- **WhatsApp:** GOWA Bridge v8.x (Go, Fly.io, Singapore region)
- **Payments:** Stripe Live (FPX, DuitNow QR, Google Pay, Cards)
- **Auth:** Supabase Magic Link + JWT
- **CI/CD:** GitHub Actions + Fly.io auto-deploy
- **Dashboard:** Vue 3 SPA (single-file, no build step)

---

## 🤖 Operator WhatsApp Commands (`@bijou`)

| Command                        | What it does                     |
| ------------------------------ | -------------------------------- |
| `@bijou bookings`              | Today's bookings for your tenant |
| `@bijou crm <query>`           | Search contacts by name or phone |
| `@bijou send <target> > <msg>` | Send a WA message to any contact |
| `@bijou confirm <id>`          | Mark booking as in_progress      |
| `@bijou pause`                 | Pause Bijou AI responses         |
| `@bijou resume`                | Resume Bijou AI responses        |
| `@bijou help`                  | Full command reference           |

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
