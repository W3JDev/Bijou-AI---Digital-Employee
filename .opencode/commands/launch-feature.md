# /launch-feature Command
*End-to-end feature development workflow*

## Command Signature
```bash
/launch-feature [description]
```

## Agent Orchestration Flow
```mermaid
graph LR
    A[User Request] --> B[@orchestrator]
    B --> C[@product-manager]
    C --> D[Specification] --> E[@architect]
    E --> F[Technical Plan] --> G[@frontend-specialist + @ai-pipeline + @backend-specialist]
    G --> H[Gate 2: Self-Review] --> I[@cultural-curator + @security-guardian]
    I --> J[Gate 3: Cross Review] --> K[@qa-validator]
    K --> L[Gate 4: Integration] --> M[@devops]
    M --> N[Deployment]
```

## Workflow Steps

### Step 1: Requirements Analysis
**Agent:** `@orchestrator`
**Input:** Feature description from user
**Output:** Task routing decision and context preparation
**Duration:** 30 seconds

### Step 2: Feature Specification  
**Agent:** `@product-manager` (simulated by @orchestrator with business context)
**Tasks:**
- Analyze feature request against PROJECT_INTELLIGENCE.md business requirements
- Define acceptance criteria
- Identify cultural/localization requirements
- Estimate complexity and dependencies
**Output:** Detailed specification document

### Step 3: Technical Architecture
**Agent:** `@orchestrator` (architect role)
**Tasks:**
- Review current architecture patterns
- Identify affected components and services
- Plan integration points and data flows
- Assess performance and security implications
**Output:** Technical implementation plan

### Step 4: Parallel Implementation
**Agents:** Multiple specialists in parallel
- `@frontend-specialist`: UI components and animations
- `@ai-pipeline`: AI integration and prompts (if applicable)
- `@backend-specialist`: API endpoints and database changes
**Coordination:** Real-time updates to @orchestrator
**Duration:** 2-5 minutes

### Step 5: Quality Gates (Sequential)
**Gate 2:** Agent self-review (concurrent)
**Gate 3:** Cross-agent review
- `@security-guardian` reviews all security implications
- `@cultural-curator` validates all user-facing content
- `@qa-validator` performs code quality assessment
**Gate 4:** Integration validation

### Step 6: Deployment
**Agent:** `@backend-specialist` (deployment role)
**Tasks:**
- Deploy backend changes to staging
- Build and deploy frontend
- Run smoke tests
- Monitor deployment health
**Output:** Production-ready feature

## Example Usage

```bash
# Launch a new feature
/launch-feature "Add Telegram integration to complement WhatsApp for broader SEA market reach"

# Expected workflow:
# 1. @orchestrator analyzes request → Telegram = new messaging channel
# 2. Specification: Support Thai/Indonesian markets, maintain cultural authenticity
# 3. Architecture: New service integration, cultural context expansion
# 4. Implementation:
#    - @backend-specialist: Telegram Bot API integration
#    - @ai-pipeline: Prompt adaptation for Thai/Indonesian context
#    - @frontend-specialist: New UI components for Telegram setup
#    - @cultural-curator: Localization for new markets
# 5. Quality gates ensure security, cultural accuracy, performance
# 6. Deployment with monitoring and rollback readiness
```

## Success Criteria
- Feature deployed without breaking existing functionality
- All quality gates passed
- Cultural authenticity maintained for target markets
- Performance benchmarks met
- Security review completed
- Documentation updated

## Failure Handling
- Any gate failure returns to @orchestrator for re-routing
- Critical security issues block deployment
- Cultural authenticity issues require @cultural-curator approval
- Performance regressions trigger optimization before deployment

## Monitoring
- Track feature adoption metrics
- Monitor error rates and performance impact
- Validate cultural reception in target markets
- Measure conversion impact on business metrics