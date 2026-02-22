# /optimize Command
*Performance, cost, and quality optimization workflows*

## Command Signature
```bash
/optimize [target] [--scope=component|service|system] [--metric=latency|cost|coverage|conversion]
```

**Targets:** `latency`, `cost`, `coverage`, `conversion`

## Agent Orchestration by Optimization Target

### Latency Optimization
```mermaid
graph LR
    A[Latency Issue] --> B[@orchestrator]
    B --> C[@frontend-specialist]
    C --> D[Bundle Analysis] --> E[@backend-specialist]
    E --> F[API Performance] --> G[@ai-pipeline]
    G --> H[AI Response Time] --> I[@qa-validator]
    I --> J[Performance Validation] --> K[Optimized System]
```

### Cost Optimization
```mermaid
graph LR
    A[Cost Analysis] --> B[@orchestrator]
    B --> C[@ai-pipeline]
    C --> D[Model Selection] --> E[@backend-specialist]
    E --> F[Infrastructure Tuning] --> G[@frontend-specialist]
    G --> H[Bundle Optimization] --> I[Cost Reduction]
```

## Optimization Workflows

### /optimize latency
**Primary Agents:** `@frontend-specialist` + `@backend-specialist` + `@ai-pipeline`

#### Frontend Performance Optimization
**Agent:** `@frontend-specialist`
**Focus Areas:**
```yaml
bundle_optimization:
  - Code splitting for heavy components (WhatsAppLinkGenerator.tsx)
  - Lazy loading for non-critical animations
  - Tree shaking optimization in Vite config
  - CDN efficiency for external dependencies

animation_performance:
  - Framer Motion animation optimization
  - Complex animation component analysis (ViralPillars.tsx)
  - GPU acceleration for smooth animations
  - Memory leak prevention in useEffect cleanup

component_efficiency:
  - React.memo for expensive re-renders
  - useCallback optimization for event handlers
  - State update batching optimization
  - Virtual scrolling for large lists (if applicable)
```

#### Backend Performance Optimization  
**Agent:** `@backend-specialist`
**Focus Areas:**
```yaml
edge_function_optimization:
  - Supabase Edge Function cold start reduction
  - Database query optimization
  - Connection pooling and caching
  - Response compression and minification

api_performance:
  - Response time monitoring and optimization
  - Rate limiting efficiency
  - Caching strategy implementation
  - Database index optimization
```

#### AI Response Optimization
**Agent:** `@ai-pipeline`
**Focus Areas:**
```yaml
ai_latency_reduction:
  - Prompt optimization for faster responses
  - Response caching for common queries
  - Streaming response implementation
  - Circuit breaker for faster failovers
```

### /optimize cost
**Primary Agent:** `@ai-pipeline` + `@backend-specialist`

#### AI Cost Optimization
**Agent:** `@ai-pipeline`
**Strategy:**
```yaml
model_selection_optimization:
  current: "Gemini 2.5 Flash-Lite for all requests"
  optimized_strategy:
    - Simple responses: Claude Haiku (70% cost reduction)
    - Complex reasoning: Gemini 2.5 Flash (current)
    - Cultural validation: Claude Sonnet (specialized task)
    
prompt_engineering:
  - Shorter prompts for routine responses
  - Context window optimization
  - Response caching for FAQ-style queries
  - Batch processing for multiple requests

usage_optimization:
  - Smart fallback to cached responses
  - Rate limiting to prevent cost spikes
  - Usage analytics and optimization recommendations
```

#### Infrastructure Cost Optimization
**Agent:** `@backend-specialist`
**Focus Areas:**
```yaml
infrastructure_efficiency:
  - Supabase usage optimization
  - CDN efficiency improvements  
  - Database query optimization for cost
  - Serverless function right-sizing
```

### /optimize coverage  
**Primary Agent:** `@qa-validator` + `@frontend-specialist`

#### Test Coverage Improvement
**Agent:** `@qa-validator`
**Current State:** No automated testing framework
**Optimization Plan:**
```yaml
testing_framework_setup:
  unit_tests: "Vitest + React Testing Library"
  integration_tests: "Playwright for E2E"
  performance_tests: "Lighthouse CI"
  cultural_tests: "Manglish validation suite"

coverage_targets:
  critical_components: "100% coverage (DemoChat, WhatsAppLinkGenerator)"
  ai_integration: "Full prompt/response validation"
  security_flows: "Complete authentication/authorization testing"
  cultural_accuracy: "Manglish authenticity validation"
```

### /optimize conversion
**Primary Agents:** `@cultural-curator` + `@frontend-specialist` + `@ai-pipeline`

#### Conversion Rate Optimization
**Agent:** `@cultural-curator`
**Cultural Conversion Factors:**
```yaml
manglish_optimization:
  - A/B test different Manglish intensity levels
  - Optimize cultural references for trust building
  - Regional dialect adaptation for broader SEA appeal
  
business_context_optimization:
  - Industry-specific conversation flows
  - Local business example optimization
  - Cultural pain point addressing
```

**Agent:** `@frontend-specialist`  
**UX Conversion Optimization:**
```yaml
user_experience:
  - Modal timing optimization for lead capture
  - Animation impact on conversion measurement
  - Mobile-first conversion funnel optimization
  - Loading state optimization for trust building
```

**Agent:** `@ai-pipeline`
**AI Conversation Optimization:**
```yaml
conversation_flow:
  - Response quality optimization for engagement
  - Cultural context injection for trust
  - Business value communication improvement
  - Call-to-action effectiveness in AI responses
```

## Optimization Examples

```bash
# Frontend performance optimization
/optimize latency --scope=component --metric=latency
# → Focus on WhatsAppLinkGenerator.tsx and ViralPillars.tsx performance

# AI cost reduction
/optimize cost --scope=service --metric=cost  
# → Implement model selection strategy and response caching

# Test coverage improvement
/optimize coverage --scope=system --metric=coverage
# → Set up testing framework and achieve 80%+ coverage

# Cultural conversion optimization  
/optimize conversion --scope=system --metric=conversion
# → A/B test Manglish variations and cultural references
```

## Success Metrics

### Latency Optimization
```yaml
targets:
  page_load_time: "<2s (from current 3s)"
  ai_response_time: "<1s average (from current 2s)"
  animation_fps: ">45 FPS (from current 30 FPS)"
  bundle_size: "<1.5MB (from current 2MB)"
```

### Cost Optimization  
```yaml
targets:
  ai_api_costs: "40% reduction through model selection"
  infrastructure_costs: "25% reduction through optimization"
  development_velocity: "Maintain current speed"
  quality_maintenance: "No regression in user experience"
```

### Coverage Optimization
```yaml
targets:
  unit_test_coverage: ">85% for critical components"
  integration_coverage: "100% for user journeys"
  performance_monitoring: "Automated regression detection"
  cultural_validation: "Systematic Manglish accuracy testing"
```

### Conversion Optimization
```yaml
targets:
  lead_capture_rate: "+15% improvement"
  demo_engagement_time: "+25% increase"
  trial_signup_conversion: "+20% improvement"  
  cultural_authenticity_score: ">90% native speaker approval"
```

## Monitoring and Validation

### Performance Monitoring
- Real-time performance dashboard
- Automated regression detection
- User experience impact measurement
- Cost tracking and alerting

### A/B Testing Framework
- Cultural variation testing
- UX optimization experiments
- AI response quality measurement
- Conversion funnel analysis

### Continuous Optimization
- Weekly performance review cycles
- Monthly cost optimization analysis
- Quarterly cultural accuracy validation
- Continuous conversion rate monitoring