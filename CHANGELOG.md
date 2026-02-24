# Changelog

All notable changes to Bijou AI Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-02-24

### 🎨 Premium Branding Overhaul
- **BREAKING:** Complete visual rebrand from Emerald Green to Deep Green & Gold
- Updated color palette to Deep Green (#0d3d3d) + Gold (#D4AF37)
- Circuit board pattern background with gold grid lines
- All CTAs now use gold gradient styling
- Enhanced "AI" text visibility in footer logo

### ✨ New Features
- **Pricing Component:** Added comprehensive 3-tier pricing section
  - Starter: RM159/month (68% discount, first 100 customers)
  - Professional: RM299/month
  - Enterprise: Custom pricing
  - 335% ROI guarantee badge
- **Footer Enhancements:**
  - W3J LLC attribution with logo
  - Complete contact structure (hello@, mrj@, support@, jewel@mybijou.xyz)
  - Social media links (LinkedIn, Instagram, X/Twitter, GitHub)
  - Company location info (Wyoming, USA • KL, Malaysia)

### 🔧 Improvements
- Fixed ALL CTAs to trigger lead capture modals (no direct signup links)
- RevenueCalculator now opens modal instead of external link
- Updated RM159/month pricing throughout (was RM99)
- Enhanced ROI messaging: RM9,201/month savings highlighted
- Improved mobile responsiveness across all components
- Updated Hero section with launch pricing badge

### 🐛 Bug Fixes
- Fixed Footer "AI" text visibility (was too dark/fading)
- Corrected all email addresses to mybijou.xyz domain
- Fixed modal flow in FinalCTA component
- Updated case studies to use gold accents instead of emerald

### 🗑️ Cleanup
- Removed 7.7MB of duplicate logo files from /public
- Removed all screenshot files (500KB+)
- Cleaned up outdated project docs (MISSION_COMPLETE, PHASE docs, etc.)
- Enhanced .gitignore to exclude sensitive files

### 📚 Documentation
- Complete README.md overhaul with production info
- Added W3J LLC company information
- Updated tech stack documentation
- Added deployment instructions
- Included business metrics and target markets

### 🚀 Deployment
- Vercel auto-deployment configured
- Production build optimized (449KB, gzipped: 133KB)
- Live at mybijou.xyz

---

## [2.0.0] - 2026-02-23

### Added
- PWA functionality with offline support
- Lead capture modal with email collection
- Calendar booking integration (Cal.com)
- WhatsApp CTA floating button
- Waitlist strip component

### Changed
- Updated to React 19
- Migrated to Vite 6.4.1
- Enhanced Framer Motion animations
- Improved mobile navigation

---

## [1.0.0] - 2023-10-27

### Added
- **Tool Orchestrator:** Implemented `services/tools.ts` to simulate backend tool execution
- **Roadmap Voting:** Added interactivity with localStorage persistence
- **TRACE Logging:** Console logging for AI agent decision simulation
- **Security Animations:** Pulse and neon glow effects

### Changed
- **Hero UI:** Relocated floating ROI card to top-right corner
- **Navbar Behavior:** Enhanced sticky navigation with dynamic blur
- **Playbooks:** Implemented "Live Typing" simulation
- **Hero Animation:** Added staggered entrance animations

### Fixed
- **Syntax Error:** Fixed JSX syntax error in RevenueCalculator.tsx

### Initial Release
- Core landing page structure
- Revenue Calculator component
- Viral Pillars simulation (Stress Test, Speed Run, Night Dashboard)
- Basic Gemini AI integration for demo chat
- TRACE framework visualization

---

## Versioning Strategy

- **Major (X.0.0):** Breaking changes, major redesigns
- **Minor (0.X.0):** New features, non-breaking changes
- **Patch (0.0.X):** Bug fixes, minor improvements

---

**Repository:** [github.com/W3JDev/Bijou-AI---Digital-Employee](https://github.com/W3JDev/Bijou-AI---Digital-Employee)
**Maintainer:** W3J LLC | jewel@mybijou.xyz
