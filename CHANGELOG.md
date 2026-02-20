# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Tool Orchestrator:** Implemented `services/tools.ts` to simulate backend tool execution (e.g., Email Sending) within the frontend demo.
- **Roadmap Voting:** Added interactivity to `Roadmap.tsx`. Users can now "vote" for language support (Bahasa/Mandarin/Tamil), persisting to `localStorage`.
- **TRACE Logging:** Added console logging in `HowItWorks.tsx` to simulate the internal decision-making process of the AI agents on mount.
- **Security Animations:** Added pulse and neon glow effects to icons in `Features.tsx`.

### Changed
- **Hero UI:** Relocated the floating "Cost Savings" ROI card to the top-right corner of the phone frame for better composition.
- **Navbar Behavior:** Enhanced sticky navigation with dynamic blur and opacity adjustments based on scroll depth.
- **Playbooks:** Implemented "Live Typing" simulation when switching vertical tabs to better demonstrate response speed.
- **Hero Animation:** Added staggered entrance animations (fade-up, bounce) for a more engaging first paint.

### Fixed
- **Syntax Error:** Fixed a JSX syntax error in `RevenueCalculator.tsx` caused by unescaped `<` characters in text nodes.

## [1.0.0] - 2023-10-27
### Initial Release
- Core landing page structure.
- Revenue Calculator component.
- Viral Pillars simulation (Stress Test, Speed Run, Night Dashboard).
- Basic Gemini AI integration for demo chat.
