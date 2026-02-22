# AGENTS.md - Development Guidelines

This file contains essential information for coding agents working in the Bijou AI Digital Employee codebase.

## 🏗️ Build Commands

### Development
```bash
npm run dev          # Start development server (Vite on port 3000)
npm run build        # Production build
npm run preview      # Preview production build locally
```

### TypeScript
```bash
npx tsc --noEmit     # Type check without compilation (use this to validate TypeScript)
```

**Note:** This project has no testing framework configured. All testing must be done manually through the development server.

## 📁 Project Structure

```
├── components/           # React components (.tsx files)
├── services/            # API integration and business logic
├── backend/             # SQL schema and backend resources
├── App.tsx              # Main application component
├── index.tsx           # Application entry point
├── vite.config.ts      # Build configuration
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Technology Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (CDN) + Custom CSS
- **Animation:** Framer Motion 12.34.1
- **Icons:** Lucide React 0.574.0
- **AI Integration:** Google GenAI SDK 1.41.0
- **Module System:** ESNext with bundler resolution

## 📝 Code Style Guidelines

### Import Organization
```typescript
// 1. React and external libraries first
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot } from 'lucide-react';

// 2. Local services and components
import { sendMessageToBijou } from '../services/gemini';
```

### Component Structure
**Always use functional components with TypeScript interfaces:**
```typescript
interface ComponentProps {
  onOpenModal: () => void;
  title?: string;
}

export const ComponentName: React.FC<ComponentProps> = ({ onOpenModal, title }) => {
  // Component logic
};
```

**Export Pattern:**
- Use named exports: `export const ComponentName: React.FC<Props>`
- Default export only for App.tsx: `export default function App()`

### TypeScript Guidelines
- **Always define interfaces** for component props
- Use strict typing - avoid `any`
- Leverage path aliases: `@/*` maps to root directory
- Target ES2022 with DOM libraries

### State Management
- Use `useState` hooks for local state
- Props drilling pattern for shared functionality (e.g., `onOpenModal` callbacks)
- No global state management (Redux/Zustand) - keep state local

### Animation Patterns (Framer Motion)
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};
```

### Styling Conventions
- **Tailwind CSS** with custom utility classes
- **Glassmorphism:** Use `.glass-panel-3d` for consistent glass effects
- **Color Scheme:** Emerald green (#10b981) as primary, dark theme
- **Responsive:** Use `md:`, `lg:` breakpoints consistently

## 🚨 Error Handling

### API Integration Pattern
```typescript
// Environment variable access
if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

// Error handling with graceful fallbacks
try {
  // API call
} catch (error) {
  console.error("Error talking to Bijou:", error);
  return "Aiyo, server having hiccup. Give me a moment boss.";
}
```

### Error Message Style
- Use **Manglish** (Malaysian English) for user-facing errors
- Examples: "Aiyo, server having hiccup", "Walao, something went wrong boss"
- Maintain cultural authenticity with Malaysian context

## 🌏 Business Domain Context

This application serves the **Southeast Asian market** with specific cultural considerations:

### Manglish Integration
```typescript
const manglishKeywords = /walao|boss|can|settle|aiyo|fuyoh|best|swee|on|roger/i;
```

### Local Context
- Currency references in **RM (Malaysian Ringgit)**
- Location references: KLCC, Mont Kiara, Malaysia
- Malaysian flag color gradients in design

## 🔧 Development Notes

### Environment Variables
- `API_KEY` required for Google GenAI integration
- Mock responses available when API key not configured
- Variables injected via Vite's process.env

### File Naming
- Components: PascalCase (e.g., `WhatsAppLinkGenerator.tsx`)
- Services: camelCase (e.g., `gemini.ts`)
- Use `.tsx` for React components, `.ts` for utilities

### Performance Considerations
- Lazy load heavy components when possible
- Use Framer Motion's `AnimatePresence` for mount/unmount animations
- Optimize bundle size - current build uses Vite's tree shaking

## 🎯 Component Guidelines

### Large Components (>200 lines)
These components may need refactoring if modified:
- `WhatsAppLinkGenerator.tsx` (479 lines)
- `ViralPillars.tsx` (468 lines)
- `Playbooks.tsx` (212 lines)

### Core Chat Component
- `DemoChat.tsx` (183 lines) - Handle with care, contains main AI interaction logic

## ⚠️ Important Notes

- **No testing framework** - Manual testing required
- **No linting/formatting** configured - Maintain existing code style manually
- **Single page application** - No routing, all navigation via state
- **Production ready** - Clean architecture suitable for scaling

## 🔍 Common Patterns

### Modal Pattern
```typescript
const [isModalOpen, setIsModalOpen] = useState(false);
const onOpenModal = () => setIsModalOpen(true);
// Pass onOpenModal to child components via props
```

### Loading States
Use Framer Motion's layout animations for smooth loading transitions:
```typescript
<AnimatePresence>
  {isLoading && (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      Loading...
    </motion.div>
  )}
</AnimatePresence>
```

Remember: This codebase prioritizes **user experience** and **cultural authenticity** for the Malaysian market. Maintain the established patterns for consistency and professional quality.