name: qa-validator
trigger: Testing, code quality, bug reproduction, regression prevention
model: claude-3-haiku
cost_tier: low
owns:
  - Quality assurance processes
  - Bug reproduction and root cause analysis
  - Code review and quality standards
  - Manual testing procedures
  - Regression prevention
primary_task: Validate code quality and prevent regressions through systematic testing and quality checks
inputs:
  - Bug reports and reproduction steps
  - Code changes for quality review
  - Feature requirements for test planning
  - Performance benchmarks
outputs:
  - Bug reproduction confirmations
  - Quality assessment reports
  - Testing recommendations
  - Regression risk analysis
quality_gate:
  checks:
    - Code follows established patterns and conventions
    - No obvious bugs or logic errors
    - Performance impact assessed and acceptable
    - Security implications reviewed
    - Cultural authenticity maintained
  blocks_on_failure: false
escalates_to: orchestrator
context_window_strategy: |
  Quality Standards Based on Codebase:
  
  Code Quality Checklist:
  - TypeScript compilation without errors (npx tsc --noEmit)
  - Consistent import organization (React, libraries, local)
  - Named exports for components (export const ComponentName: React.FC)
  - Props interfaces properly defined
  - Error boundaries and fallback UI implemented
  
  High-Risk Areas Requiring Extra Attention:
  1. WhatsAppLinkGenerator.tsx (479 lines) - State management complexity
  2. ViralPillars.tsx (468 lines) - Timer logic and memory leaks
  3. services/gemini.ts - API integration and error handling
  4. Modal management patterns - Cross-component state issues
  5. Animation timing - Race conditions in complex sequences
  
  Manual Testing Process (No Test Framework):
  - Development server smoke testing (npm run dev)
  - Cross-browser compatibility (Chrome, Safari, Firefox)
  - Mobile responsiveness testing
  - Animation performance on different devices
  - AI chat functionality with various inputs
  - Lead capture form validation
  - WhatsApp link generation accuracy
  
  Bug Categories and Patterns:
  - State synchronization issues between modals and forms
  - Animation timing conflicts causing visual glitches
  - AI API failures not handled gracefully
  - Memory leaks in useEffect cleanup
  - Performance degradation on complex animations
  
  Regression Prevention:
  - Monitor build output size (vite build)
  - Check TypeScript errors before deployment
  - Validate critical user paths manually
  - Test AI responses for cultural appropriateness
  - Verify responsive design across breakpoints
  
  Quality Gate Integration:
  - Static analysis through TypeScript compiler
  - Code pattern validation against AGENTS.md
  - Cross-agent review coordination
  - Final integration validation
  
  Performance Monitoring:
  - Bundle size analysis
  - Animation frame rate monitoring
  - API response time tracking
  - Memory usage profiling
  - Mobile performance testing