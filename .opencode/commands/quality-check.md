# /quality-check Command
*Comprehensive quality validation across all 4 gates*

## Command Signature
```bash
/quality-check [--scope=full|critical|component] [--fix-issues=auto|manual|report-only]
```

## 4-Gate Sequential Validation

```mermaid
graph TD
    A[Quality Check Request] --> B[@orchestrator]
    B --> C[Gate 1: Static Analysis]
    C --> D{Pass?}
    D -->|No| E[Report Issues & Block]
    D -->|Yes| F[Gate 2: Agent Self-Review]
    F --> G[@frontend-specialist + @ai-pipeline + @backend-specialist + @security-guardian + @cultural-curator]
    G --> H{All Pass?}
    H -->|No| I[Fix Issues & Retry]
    H -->|Yes| J[Gate 3: Cross-Agent Review]
    J --> K[@qa-validator + @security-guardian + @cultural-curator]
    K --> L{Pass?}
    L -->|No| M[Address Review Issues]
    L -->|Yes| N[Gate 4: Integration Validation]
    N --> O[Full System Test]
    O --> P{Pass?}
    P -->|No| Q[Fix Integration Issues]
    P -->|Yes| R[✅ Quality Certified]
```

## Gate 1: Static Analysis (Automated)

### Execution: Parallel Static Checks
```bash
# TypeScript compilation
npx tsc --noEmit

# Build validation
npm run build

# Bundle analysis
npm run build && ls -la dist/

# Security scan
npm audit --audit-level=high

# Code pattern validation
grep -r "console.log" src/ components/ services/
grep -r "TODO\|FIXME" src/ components/ services/
```

### Pass/Fail Criteria
```yaml
must_pass:
  - Zero TypeScript compilation errors
  - Successful Vite build completion
  - Bundle size <2MB
  - No high/critical npm vulnerabilities
  - No console.log in production code

warnings_allowed:
  - Minor TypeScript warnings
  - Low-severity npm advisories
  - TODO comments in non-critical areas
```

## Gate 2: Agent Self-Review (Parallel Execution)

### @frontend-specialist Self-Review
```yaml
checklist:
  - All React components use proper TypeScript interfaces
  - Framer Motion animations follow established patterns
  - Import organization: React → libraries → local
  - Named exports for all components
  - Responsive design works across md:, lg: breakpoints
  - Cultural elements flagged for @cultural-curator
  - Performance impact assessed for animation-heavy components
```

### @ai-pipeline Self-Review  
```yaml
checklist:
  - AI responses maintain cultural authenticity
  - Error handling provides graceful Manglish fallbacks
  - API integration includes proper error boundaries
  - Prompt engineering optimized for Malaysian context
  - Response validation prevents inappropriate content
  - Security implications flagged for @security-guardian
```

### @backend-specialist Self-Review
```yaml
checklist:
  - Supabase Edge Functions deploy without errors
  - Database schema validates with RLS policies
  - API endpoints handle errors gracefully
  - Response time <200ms for critical endpoints
  - Integration points properly tested
  - Security review requested for data handling
```

### @security-guardian Self-Review
```yaml
checklist:
  - No API keys exposed in client-side code
  - Input validation implemented for all user forms  
  - PDPA compliance verified for data collection
  - Authentication flows follow security best practices
  - External integrations use secure communication
  - Vulnerability assessment completed
```

### @cultural-curator Self-Review
```yaml
checklist:
  - Manglish usage authentic and natural
  - Cultural references accurate for Malaysian market
  - Business terminology appropriate for SME owners
  - Error messages maintain brand personality
  - Vertical-specific content relevant locally
  - Regional sensitivity for SEA expansion maintained
```

## Gate 3: Cross-Agent Review (Sequential Validation)

### Security Review (Blocking)
**Reviewer:** `@security-guardian`
**Reviews:** All agents' outputs
```yaml
security_validation:
  - No sensitive data in logs or client code
  - Input sanitization properly implemented
  - Authentication/authorization correctly applied
  - HTTPS enforcement and secure headers
  - Rate limiting configured appropriately
blocking: true
```

### Cultural Review (Non-Blocking)
**Reviewer:** `@cultural-curator`  
**Reviews:** All user-facing content
```yaml
cultural_validation:
  - Tone appropriate for Malaysian SME audience
  - Cultural references accurate and respectful
  - Business context relevant to local market
  - Error messages maintain authentic Manglish
  - Localization ready for regional expansion
blocking: false
```

### Quality Review (Blocking)
**Reviewer:** `@qa-validator`
**Reviews:** All code changes
```yaml
quality_validation:
  - Code follows AGENTS.md patterns and conventions
  - No obvious logic errors or edge cases
  - Performance impact within acceptable bounds
  - Integration points properly validated
  - Regression risk assessed and mitigated
blocking: true
```

## Gate 4: Integration Validation (End-to-End)

### Critical User Path Validation
```yaml
end_to_end_tests:
  landing_page_flow:
    - Page loads within 3 seconds
    - ROI calculator functions correctly
    - Animations smooth across devices
    
  demo_chat_flow:
    - AI responses in <2 seconds
    - Manglish authenticity maintained
    - Cultural context appropriate
    - Error handling graceful
    
  lead_capture_flow:
    - WhatsApp link generator works
    - Modal displays correctly
    - Form validation functions
    - Data capture compliant with PDPA
    
  mobile_experience:
    - Responsive design functions
    - Touch interactions work
    - Performance acceptable on 3G
```

### Performance Benchmarks
```yaml
performance_requirements:
  - Page load time: <3 seconds on 3G
  - AI response time: <2 seconds average  
  - Animation frame rate: >30 FPS
  - Bundle size: <2MB
  - Lighthouse score: >90
```

### Integration Points
```yaml
external_system_validation:
  - Google GenAI API connectivity
  - Supabase Edge Functions health
  - WhatsApp Business API integration
  - Analytics tracking accuracy
  - CDN availability and performance
```

## Quality Check Scopes

### Full Scope (Production Ready)
```bash
/quality-check --scope=full --fix-issues=manual
```
- All 4 gates executed sequentially
- Comprehensive validation across all agents
- Manual review and fix process
- Full integration testing
- Production deployment certification

### Critical Scope (Essential Features)
```bash
/quality-check --scope=critical --fix-issues=auto
```
- Focus on core user journeys
- AI chat functionality validation
- Lead capture system verification
- Security and cultural validation
- Automated fixes where possible

### Component Scope (Targeted Validation)
```bash
/quality-check --scope=component --fix-issues=report-only
```
- Single component or service validation
- Relevant agent reviews only
- Issue reporting without fixes
- Rapid validation cycle

## Example Outputs

### Success Report
```yaml
quality_check_result: PASS
timestamp: "2024-02-22T15:30:00Z"
scope: full

gate_results:
  gate_1_static: PASS
  gate_2_self_review: PASS (5 agents)
  gate_3_cross_review: PASS (3 reviewers)
  gate_4_integration: PASS

performance_metrics:
  page_load_time: "2.1s"
  ai_response_time: "1.4s"
  bundle_size: "1.8MB"
  lighthouse_score: 94

certification: "PRODUCTION_READY"
```

### Failure Report
```yaml
quality_check_result: FAIL
timestamp: "2024-02-22T15:30:00Z"
scope: full

failed_gates:
  gate_1_static: 
    issue: "TypeScript compilation errors in WhatsAppLinkGenerator.tsx"
    lines: [47, 128, 203]
    severity: blocking
    
  gate_3_security:
    issue: "API key exposure detected in vite.config.ts"
    severity: critical
    blocking: true

recommendations:
  - Fix TypeScript interface definitions
  - Implement backend API proxy for security
  - Re-run quality check after fixes

certification: "BLOCKED_FOR_PRODUCTION"
```

## Continuous Quality Monitoring

### Automated Triggers
- Pre-commit hooks run Gate 1 static analysis
- Pull request triggers Gates 1-3
- Pre-deployment runs full 4-gate validation
- Production monitoring validates Gate 4 continuously

### Quality Metrics Dashboard
- Gate pass rates and trends
- Common failure patterns
- Agent performance metrics
- Cultural authenticity scores
- Security posture tracking

### Quality Improvement Loop
- Weekly gate failure analysis
- Monthly agent optimization  
- Quarterly quality standard updates
- Continuous cultural accuracy validation

This comprehensive quality check system ensures consistent, high-quality deliverables while maintaining cultural authenticity and security standards.