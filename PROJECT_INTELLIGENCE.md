# PROJECT_INTELLIGENCE.md
*Complete Intelligence Report for Bijou AI Digital Employee*

## 1.1 — ARCHITECTURE MAP (Complete Tech Stack Analysis)

### **Languages & Frameworks**
- **Primary Stack:** React 19.2.4 + TypeScript 5.8.2 + Vite 6.2.0
- **Styling:** Tailwind CSS (CDN) + Custom CSS with Glassmorphism
- **Animation:** Framer Motion 12.34.1 (extensive usage)
- **Icons:** Lucide React 0.574.0
- **AI Integration:** Google GenAI SDK 1.41.0
- **Backend:** Supabase Edge Functions (TypeScript/Deno)

### **Frontend Architecture**
- **Component Pattern:** Functional components with TypeScript interfaces
- **State Management:** Local useState hooks + props drilling pattern
- **Routing:** Single-page application, hash-based navigation (`#demo`, `#features`)
- **Styling Approach:** 
  - Utility-first with Tailwind CSS
  - Custom glassmorphism classes (`.glass-panel-3d`)
  - Malaysian flag gradient animations
  - Complex neon glow effects

### **Backend Architecture**
- **API Layer:** Supabase Edge Functions for link shortening
- **Business Logic:** Service layer pattern (`services/` directory)
- **Data Access:** Direct Supabase client integration
- **Files:**
  - `/backend/supabase/functions/create-link/index.ts` - Link creation service
  - `/backend/supabase/functions/redirect/index.ts` - Redirect tracking service

### **AI/LLM Integration**
- **Primary AI:** Google Gemini 2.5 Flash-Lite
- **Integration Points:**
  - `services/gemini.ts` - Main AI client (69 lines)
  - `components/DemoChat.tsx` - Chat interface (183 lines)
- **Prompt Engineering:** 
  - System instruction with Manglish personality
  - Cultural context injection
  - Business-specific responses
- **Error Handling:** Graceful fallback to Manglish error messages

### **Data Flow**
1. User input → DemoChat component
2. Message history + new message → `sendMessageToBijou()`
3. Google GenAI SDK → Gemini API
4. Response → UI update with animation triggers
5. Manglish keyword detection → UI excitement animations

### **Build System**
- **Bundler:** Vite with React plugin
- **TypeScript:** Strict typing with path aliases (`@/*`)
- **Environment Variables:** Custom injection via `vite.config.ts`
- **ESM Support:** ES2022 target with native module system
- **Import Maps:** CDN-based dependency resolution in HTML

### **Dependencies (Critical Analysis)**
- **External CDNs:** Tailwind CSS, Google Fonts (Inter)
- **Runtime Dependencies:** Minimal (5 core packages)
- **Dev Dependencies:** TypeScript, Vite, Node types
- **CDN Fallback Risk:** ESM.sh for runtime modules

### **Naming Conventions**
- **Components:** PascalCase with descriptive names
- **Files:** PascalCase for components, camelCase for services
- **Variables:** camelCase with semantic meaning
- **Classes:** BEM-inspired for custom CSS, utility-first for Tailwind

### **Error Handling Patterns**
- **API Failures:** Manglish fallback messages
- **Network Issues:** Graceful degradation with mock responses
- **User-Facing Errors:** Cultural context ("Alamak boss!", "Aiyo, server having hiccup")
- **Development Errors:** Console logging with structured error objects

### **Async Patterns**
- **Promises:** Consistent async/await usage
- **Error Boundaries:** Try-catch blocks with fallback UI
- **Loading States:** React state management for async operations
- **Race Conditions:** None detected (sequential state updates)

---

## 1.2 — RISK & COMPLEXITY AUDIT (Top 5 Critical Issues)

### **1. MOST COMPLEX MODULE - WhatsAppLinkGenerator.tsx**
**File:** `components/WhatsAppLinkGenerator.tsx`
**Lines:** 479 lines (largest component)
**Complexity Issues:**
- **Lines 20-43:** 13 different state variables creating state explosion
- **Lines 116-145:** Complex async error handling with timeout side effects
- **Lines 393-477:** Deeply nested modal logic with animation orchestration
- **Lines 264-286:** Business logic mixed with presentation (tracking checkbox)

**Specific Risks:**
- State synchronization bugs between modal and form states
- Memory leaks from unterminated timeouts in error scenarios
- Complex conditional rendering creating hard-to-debug UI states

**Impact:** High - Core feature for lead capture, failure breaks conversion funnel
**Mitigation:** Extract modal into separate component, implement state machine pattern, add comprehensive error boundaries

### **2. FRAGILE INTEGRATION - Google GenAI API**
**File:** `services/gemini.ts`
**Lines:** 8-12, 19-24, 46-57, 65-68
**Issues:**
- **Line 8:** Direct environment variable access without validation
- **Lines 19-24:** No retry logic or exponential backoff
- **Lines 46-57:** Complex chat configuration without schema validation
- **Lines 65-68:** Generic error handling losing context

**Specific Vulnerabilities:**
```typescript
// Line 8: No validation of API key format
if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

// Lines 65-68: Generic error swallowing
catch (error) {
    console.error("Error talking to Bijou:", error);
    return "Aiyo, server having hiccup. Give me a moment boss.";
}
```

**Impact:** Critical - Breaks core AI functionality, poor user experience
**Mitigation:** Add API key validation, implement circuit breaker pattern, detailed error classification

### **3. SECURITY SURFACE - Environment Variable Exposure**
**File:** `vite.config.ts`
**Lines:** 13-16
**Critical Issue:**
```typescript
define: {
    'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

**Vulnerabilities:**
- API keys exposed in client-side bundle
- Duplicate environment variable definitions
- No obfuscation or rotation strategy
- Runtime key exposure through browser dev tools

**Impact:** Severe - API key theft, quota exhaustion, security breach
**Mitigation:** Move AI calls to backend, implement proxy API, add key rotation

### **4. HARD-TO-TEST COMPONENT - ViralPillars.tsx**
**File:** `components/ViralPillars.tsx`
**Lines:** 468 lines with complex timing logic
**Testing Challenges:**
- **Lines 48-53, 129-145, 232-263:** Multiple nested useEffect hooks with timers
- **Lines 86-102:** Complex animation state machines
- **Lines 335-394:** Deeply nested conditional rendering

**Specific Issues:**
```typescript
// Lines 232-263: Unmountable timer logic
useEffect(() => {
    let mounted = true;
    const run = async () => {
        while (mounted) {
            // Complex async loop with race conditions
        }
    }
    run();
    return () => { mounted = false; };
}, []);
```

**Impact:** Medium-High - Hard to maintain, potential memory leaks, flaky animations
**Mitigation:** Extract timer logic to custom hooks, implement proper cleanup, add component tests

### **5. HIGH-CHURN AREA - Modal Management Pattern**
**Files:** Multiple components with modal state
- `App.tsx` lines 14, 24
- `components/Navbar.tsx` lines 5-8, 46-51
- `components/LeadCaptureModal.tsx` entire file
- `components/WhatsAppLinkGenerator.tsx` lines 35, 68-80

**Coupling Issues:**
- Modal state passed through 3+ component layers
- Inconsistent modal opening/closing patterns
- No centralized modal management system
- Direct DOM manipulation in some cases

**Impact:** Medium - Frequent bugs during feature additions, inconsistent UX
**Mitigation:** Implement context-based modal management, standardize modal patterns, create modal hook

---

## 1.3 — BUSINESS INTELLIGENCE (Market & Product Analysis)

### **Value Proposition Analysis**
Based on UI/UX patterns and messaging:

**Core Problem Solved:** Revenue leakage from missed WhatsApp inquiries for Malaysian SMEs
- ROI Calculator component shows potential RM300k/year losses
- Targets "late-night" lead capture (2:45 AM timestamps in demos)
- Specific focus on appointment booking and lead qualification

**Unique Differentiation:**
- **Manglish Fluency:** Cultural context engine with tone shifting
- **24/7 Availability:** Night dashboard showing continuous operation
- **Speed Advantage:** <1 second response time vs human agents
- **Industry-Specific:** Vertical playbooks for Property, Dental, Gaming, F&B

### **Target User Persona**
**Primary:** Malaysian SME business owners in service industries
- **Demographics:** Property agents, dental clinics, gaming centers, restaurants
- **Pain Points:** Missing calls after hours, slow response times, staff costs
- **Technology Comfort:** WhatsApp-native, mobile-first mindset
- **Budget:** Cost-conscious (emphasizes 33x cheaper than hiring)

**Evidence from Codebase:**
- Malaysian context throughout (KLCC, Mont Kiara references)
- Ringgit (RM) currency in all pricing
- Manglish validation keywords in `DemoChat.tsx` line 50
- Country codes defaulting to +60 (Malaysia) in forms

### **Critical User Workflows**
**Primary Flow - Lead Capture:**
1. Visitor encounters ROI calculator (revenue fear-based entry)
2. Interactive demos build confidence (3 pillar simulations)
3. Free tool usage (WhatsApp link generator) builds trust
4. Lead capture modal triggers trial signup
5. WhatsApp contact for onboarding

**Secondary Flow - Product Education:**
1. Vertical-specific playbook selection
2. Live chat demonstration with AI
3. Technical credibility building (4-agent pipeline)
4. Free trial activation

### **Revenue Model Analysis**
**Pricing Strategy:** RM159/month (prominently displayed)
- **Positioning:** 33x cheaper than fresh graduate employee
- **Model:** SaaS subscription with free trial
- **Value Anchor:** Compared to RM3,000+/month employee cost
- **Monetization Trigger:** After 14-day free trial

**Evidence of Premium Features:**
- Link tracking and analytics (upgrade funnel)
- Enterprise security features (RLS, PDPA compliance)
- Advanced integrations suggested in roadmap components

### **Market Positioning**
**Competitive Advantage:**
1. **Cultural Intelligence:** Only AI that speaks authentic Manglish
2. **Vertical Focus:** Industry-specific conversation flows
3. **Local Compliance:** PDPA-ready for Malaysian market
4. **Speed-to-Value:** Instant setup vs complex chatbot platforms

**Market Segments:**
- **Primary:** Malaysian service SMEs (Property, Healthcare, F&B)
- **Secondary:** Southeast Asian markets (SG, ID, TH flags in dropdown)
- **Future:** Enterprise clients (security features suggest upmarket expansion)

**Revenue Projections Based on Code:**
- ROI calculator suggests RM300k/year opportunity per client
- Premium features suggest tiered pricing model
- Free tool strategy indicates freemium conversion funnel
- Analytics tracking suggests data-driven optimization focus

---

## **CRITICAL FINDINGS SUMMARY**

**Technical Debt:** High complexity in modal management and state synchronization
**Security Risk:** API keys exposed in client bundle - immediate fix required
**Business Opportunity:** Strong product-market fit indicators with cultural differentiation
**Scalability Concern:** Current architecture requires backend refactoring for enterprise clients
**Innovation Strength:** Sophisticated animation system and cultural intelligence engine

This codebase represents a well-executed MVP with clear market positioning but requires immediate security hardening and architectural improvements for scale.