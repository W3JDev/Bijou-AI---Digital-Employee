# /deploy-safe Command
*Secure deployment with comprehensive validation*

## Command Signature
```bash
/deploy-safe [--environment=staging|production] [--rollback-plan=auto|manual] [--validation-level=basic|full]
```

## Agent Orchestration Flow
```mermaid
graph TD
    A[Deploy Request] --> B[@orchestrator]
    B --> C[@security-guardian]
    C --> D[Security Audit] --> E{Pass?}
    E -->|No| F[Block Deployment]
    E -->|Yes| G[@qa-validator]
    G --> H[Full Test Suite] --> I{Pass?}
    I -->|No| J[Fix Issues]
    I -->|Yes| K[Gate 4: Integration]
    K --> L[@backend-specialist]
    L --> M[Blue-Green Deploy] --> N[Health Checks]
    N --> O{Healthy?}
    O -->|No| P[Auto Rollback]
    O -->|Yes| Q[Production Ready]
```

## Pre-Deployment Security Audit

### Agent: `@security-guardian`
**Comprehensive Security Checklist:**
```yaml
critical_checks:
  - API key exposure scan (addresses vite.config.ts vulnerability)
  - Input validation for all user-facing forms
  - PDPA compliance for data collection
  - HTTPS enforcement and security headers
  - Authentication flow security review
  - Rate limiting configuration
  - Error message information disclosure review

vulnerability_scan:
  - Dependency vulnerability check (npm audit)
  - Client-side code exposure analysis
  - Environment variable security audit
  - Third-party integration security review
  - Database access control validation
```

**Blocking Conditions:**
- Any critical security vulnerabilities found
- API keys exposed in client bundle
- PDPA compliance violations
- Missing input validation on user forms
- Insecure external integrations

### Security Fixes Required Before Deployment
```typescript
// CRITICAL: Move API key handling to backend
// Current vulnerability in vite.config.ts lines 13-16
// Must implement proxy pattern before production deployment

// Example secure implementation:
// Backend: /api/chat endpoint that calls Gemini internally
// Frontend: Calls local API instead of Gemini directly
```

## Full Test Suite Execution

### Agent: `@qa-validator`
**Comprehensive Testing Protocol:**
```yaml
functional_tests:
  - Landing page and ROI calculator
  - Demo chat with Manglish validation
  - WhatsApp link generator end-to-end
  - Lead capture modal and form submission
  - Responsive design across devices
  - AI fallback during service failures

performance_tests:
  - Page load time <3s on 3G connection
  - AI response time <2s average
  - Animation smoothness >30 FPS
  - Bundle size optimization
  - Memory usage monitoring

cultural_validation:
  - Manglish authenticity by native speaker
  - Malaysian business context accuracy
  - Cultural sensitivity review
  - Regional adaptation readiness

integration_tests:
  - Google GenAI API connectivity
  - Supabase Edge Functions health
  - WhatsApp Business API integration
  - Analytics and tracking validation
  - CDN failover mechanisms
```

## Blue-Green Deployment Process

### Agent: `@backend-specialist` (DevOps Role)
**Deployment Strategy:**
```yaml
blue_green_deployment:
  phase_1_preparation:
    - Build production artifacts
    - Deploy to green environment
    - Run health checks on green
    - Validate database migrations
    
  phase_2_traffic_shift:
    - Route 10% traffic to green
    - Monitor error rates and performance
    - Gradual increase: 25% → 50% → 100%
    - Real-time monitoring throughout
    
  phase_3_validation:
    - Full functionality validation
    - Performance benchmark confirmation
    - Error rate within thresholds
    - User experience verification
```

**Rollback Triggers:**
```yaml
automatic_rollback:
  - Error rate >1% increase from baseline
  - Response time >50% degradation
  - Critical functionality failures
  - Security incident detection
  
manual_rollback:
  - Cultural authenticity issues reported
  - Business metric degradation
  - User experience problems
  - Stakeholder intervention
```

## Health Check Monitoring

### Continuous Validation
```yaml
health_checks:
  system_health:
    - Application server responsiveness
    - Database connectivity and performance
    - External API availability
    - CDN and static asset delivery
    
  business_health:
    - AI chat functionality
    - Lead capture conversion rates
    - WhatsApp integration accuracy
    - Cultural authenticity maintenance
    
  security_health:
    - Authentication system status
    - API rate limiting effectiveness
    - Error message information leakage
    - Data access control validation
```

### Monitoring Dashboards
```yaml
real_time_metrics:
  - Response time percentiles (P50, P95, P99)
  - Error rate by endpoint
  - AI response quality scores
  - User engagement metrics
  - Conversion funnel performance
  
alerts:
  critical: "Page load failures, security breaches, AI service down"
  warning: "Performance degradation, increased error rates"
  info: "Usage spikes, new feature adoption"
```

## Environment-Specific Configurations

### Staging Deployment
```yaml
validation_level: full
security_audit: comprehensive
testing_scope: all_functionality
rollback_plan: manual
monitoring: enhanced
duration: 24-hour soak test
```

### Production Deployment  
```yaml
validation_level: full
security_audit: comprehensive  
testing_scope: critical_path_plus_regression
rollback_plan: auto
monitoring: real_time
duration: gradual_rollout_4_hours
```

## Example Usage

```bash
# Full production deployment with auto-rollback
/deploy-safe --environment=production --rollback-plan=auto --validation-level=full

# Staging deployment for testing
/deploy-safe --environment=staging --rollback-plan=manual --validation-level=basic

# Emergency hotfix deployment (minimal validation)
/deploy-safe --environment=production --rollback-plan=auto --validation-level=basic
```

## Success Criteria
- All security gates passed without blocking issues
- Full test suite execution with 100% critical path success
- Performance benchmarks maintained or improved
- Cultural authenticity validated by native speakers
- Zero critical errors during deployment process
- Rollback procedures tested and ready

## Risk Mitigation
- **API Key Security:** Backend proxy implementation mandatory
- **Performance:** Gradual traffic shifting with monitoring
- **Cultural Accuracy:** Native speaker validation required
- **Business Continuity:** Instant rollback capability
- **User Experience:** Real-time monitoring and alerting

## Post-Deployment Validation
- 24-hour monitoring period with enhanced alerting
- Business metric baseline establishment
- User feedback collection and analysis
- Performance trend analysis
- Security posture confirmation
- Cultural reception validation in target markets