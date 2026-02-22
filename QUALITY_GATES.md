# QUALITY_GATES.md
*4-Layer Quality Gate System for Bijou AI Digital Employee*

## Gate 1: Static Analysis (Automated, Zero-Cost)

### Trigger Conditions
- **When:** Every file save and pre-commit
- **Scope:** All TypeScript, JavaScript, and configuration files
- **Cost:** Free (local execution)

### Checks Performed
```bash
# TypeScript compilation
npx tsc --noEmit

# Build validation
npm run build

# Basic linting (manual patterns)
grep -r "console.log" src/ || echo "No debug logs found"
grep -r "TODO\|FIXME" src/ || echo "No pending todos"
```

### Pass Criteria
- ✅ Zero TypeScript compilation errors
- ✅ Vite build completes without errors
- ✅ No console.log statements in production code
- ✅ Bundle size under 2MB threshold

### Failure Actions
- **Block:** Prevent commit/push to repository
- **Notify:** Developer with specific error locations
- **Log:** Static analysis results to .opencode/quality-logs/

### Implementation
```yaml
# .github/workflows/static-analysis.yml
name: Gate 1 - Static Analysis
on: [push, pull_request]
jobs:
  static-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: TypeScript Check
        run: npx tsc --noEmit
      - name: Build Validation
        run: npm run build
      - name: Bundle Size Check
        run: |
          SIZE=$(du -sh dist | cut -f1)
          echo "Bundle size: $SIZE"
```

---

## Gate 2: Agent Self-Review (Quality at Source)

### Trigger Conditions
- **When:** Before any agent passes output to next agent or @orchestrator
- **Scope:** All agent deliverables
- **Cost:** Included in agent model costs

### Agent-Specific Quality Checks

#### @frontend-specialist
```yaml
quality_checks:
  - TypeScript interfaces defined for all component props
  - Framer Motion animations follow containerVariants/itemVariants pattern
  - Responsive design tested across md: and lg: breakpoints
  - Import organization follows React → libraries → local pattern
  - Component exports use named export pattern
  - Cultural elements flagged for @cultural-curator review
```

#### @ai-pipeline
```yaml
quality_checks:
  - AI responses maintain Manglish authenticity
  - Error handling provides graceful fallbacks with cultural tone
  - API integration includes retry logic and circuit breaker
  - Prompts optimized for Malaysian business context
  - Response validation prevents inappropriate content
  - Security considerations flagged for @security-guardian
```

#### @security-guardian
```yaml
quality_checks:
  - No API keys or secrets exposed in client-side code
  - Input validation prevents XSS and injection attacks
  - PDPA compliance verified for data collection
  - Authentication flows follow security best practices
  - External integrations use secure communication
  - Vulnerability assessment completed with mitigation plan
```

#### @cultural-curator
```yaml
quality_checks:
  - Manglish usage is authentic and natural (not forced)
  - Cultural references accurate for Malaysian market
  - Business terminology appropriate for SME owners
  - Error messages maintain helpful, apologetic tone
  - Vertical-specific content relevant to local market
  - Regional sensitivity maintained for SE Asian expansion
```

#### @backend-specialist
```yaml
quality_checks:
  - Supabase Edge Functions deploy without errors
  - Database schema validates with proper RLS policies
  - API endpoints handle errors gracefully
  - Performance meets <200ms response time SLA
  - Integration with frontend components validated
  - Security review completed by @security-guardian
```

#### @qa-validator
```yaml
quality_checks:
  - Manual testing completed for critical user paths
  - Bug reproduction confirmed with clear steps
  - Regression impact assessed for existing features
  - Performance impact documented and acceptable
  - Cross-browser compatibility verified
  - Code follows established patterns in AGENTS.md
```

### Pass Criteria
- All agent-specific checks complete successfully
- Output meets quality standards defined in agent specifications
- Cross-cutting concerns properly flagged for relevant specialists

### Failure Actions
- **Block:** Agent must fix issues before output handoff
- **Retry:** Up to 2 automatic retries with refined approach
- **Escalate:** To @orchestrator after 2 failed attempts

---

## Gate 3: Cross-Agent Review (Peer Validation)

### Trigger Conditions
- **When:** After Gate 2 passes, before integration
- **Scope:** All deliverables requiring multi-domain expertise
- **Cost:** Medium (additional agent model calls)

### Review Matrix
| Primary Agent | Required Reviewers | Review Focus |
|---------------|-------------------|--------------|
| @frontend-specialist | @cultural-curator, @qa-validator | UI authenticity, quality |
| @ai-pipeline | @cultural-curator, @security-guardian | Cultural accuracy, security |
| @security-guardian | @qa-validator, @backend-specialist | Implementation feasibility |
| @backend-specialist | @security-guardian, @qa-validator | Security compliance, quality |
| @cultural-curator | @frontend-specialist | Implementation feasibility |

### Review Protocols

#### Security Review (Required for all backend/AI changes)
```yaml
reviewer: @security-guardian
checks:
  - No sensitive data exposed in logs or client code
  - Input sanitization properly implemented
  - Authentication and authorization correctly applied
  - HTTPS enforcement and secure headers configured
  - Rate limiting appropriate for API endpoints
blocking: true
```

#### Cultural Review (Required for all user-facing content)
```yaml
reviewer: @cultural-curator
checks:
  - Tone and language appropriate for Malaysian SME audience
  - Cultural references accurate and respectful
  - Business context relevant to local market
  - Error messages maintain brand personality
  - Localization considerations for regional expansion
blocking: false  # Can be addressed post-launch
```

#### Quality Review (Required for all code changes)
```yaml
reviewer: @qa-validator
checks:
  - Code follows established patterns and conventions
  - No obvious logic errors or edge cases missed
  - Performance impact acceptable
  - Documentation updated appropriately
  - Testing strategy adequate for change scope
blocking: true
```

### Pass Criteria
- All blocking reviews approved
- Non-blocking reviews completed with recommendations
- Cross-domain integration issues identified and resolved

### Failure Actions
- **Block:** Return to primary agent for revision
- **Document:** Review feedback for continuous improvement
- **Escalate:** Complex cross-domain issues to @orchestrator

---

## Gate 4: Integration Validation (End-to-End)

### Trigger Conditions
- **When:** Before production deployment
- **Scope:** Complete system functionality
- **Cost:** High (comprehensive testing)

### Integration Test Suite

#### Critical User Paths
```yaml
test_scenarios:
  - Landing page load and ROI calculator interaction
  - Demo chat with Manglish responses
  - WhatsApp link generator functionality
  - Lead capture modal and form submission
  - Responsive design across mobile/desktop
  - AI fallback behavior during API failures
```

#### Performance Benchmarks
```yaml
performance_requirements:
  - Page load time: <3 seconds on 3G
  - AI response time: <2 seconds average
  - Animation frame rate: >30 FPS
  - Bundle size: <2MB total
  - Lighthouse score: >90 overall
```

#### Integration Points
```yaml
external_validations:
  - Google GenAI API connectivity and fallback
  - Supabase Edge Functions deployment
  - WhatsApp Business API integration
  - Analytics tracking functionality
  - CDN availability and fallbacks
```

### Deployment Checklist

#### Pre-Deployment
- [ ] All quality gates 1-3 passed
- [ ] Performance benchmarks met
- [ ] Security scan completed (no critical vulnerabilities)
- [ ] Cultural authenticity validated by native speaker
- [ ] Backup and rollback procedures tested

#### Deployment Process
- [ ] Blue-green deployment strategy executed
- [ ] Health checks passing in production environment
- [ ] Monitoring and alerting configured
- [ ] Error tracking and reporting enabled
- [ ] Performance monitoring active

#### Post-Deployment
- [ ] Smoke tests completed successfully
- [ ] User acceptance validation performed
- [ ] Analytics and conversion tracking verified
- [ ] Error rates within acceptable thresholds
- [ ] Performance metrics baseline established

### Pass Criteria
- All critical user paths function correctly
- Performance benchmarks achieved
- No critical security vulnerabilities
- Cultural authenticity maintained
- Rollback plan validated and ready

### Failure Actions
- **Block:** Deployment stopped, issues must be resolved
- **Rollback:** Automatic rollback triggered for critical failures
- **Alert:** Development team and stakeholders notified
- **Root Cause:** Post-incident analysis required

---

## Quality Gate Monitoring and Improvement

### Metrics Tracking
```yaml
gate_metrics:
  - gate_1_pass_rate: "Percentage of commits passing static analysis"
  - gate_2_retry_count: "Average agent self-review iterations"
  - gate_3_review_time: "Time spent in cross-agent review"
  - gate_4_deployment_success: "Percentage of successful deployments"
```

### Continuous Improvement
- **Weekly:** Review gate failure patterns and adjust thresholds
- **Monthly:** Analyze agent performance and optimize review processes  
- **Quarterly:** Evaluate gate effectiveness and add new quality dimensions

### Quality Gate Evolution
As the codebase matures, quality gates will be enhanced with:
- Automated regression testing framework
- Performance monitoring integration
- Cultural authenticity scoring algorithms
- Security vulnerability scanning automation

This 4-layer system ensures high-quality deliverables while maintaining development velocity and cultural authenticity.