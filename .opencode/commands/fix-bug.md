# /fix-bug Command
*Rapid bug resolution and regression prevention*

## Command Signature
```bash
/fix-bug [issue_description] [--priority=critical|high|medium|low] [--component=frontend|backend|ai|security]
```

## Agent Orchestration Flow
```mermaid
graph LR
    A[Bug Report] --> B[@orchestrator]
    B --> C[@qa-validator]
    C --> D[Reproduction] --> E{Bug Category}
    E -->|Frontend| F[@frontend-specialist]
    E -->|AI/Chat| G[@ai-pipeline]
    E -->|Backend| H[@backend-specialist]
    E -->|Security| I[@security-guardian]
    E -->|Cultural| J[@cultural-curator]
    
    F --> K[Gate 2: Self-Review]
    G --> K
    H --> K
    I --> K
    J --> K
    
    K --> L[@qa-validator]
    L --> M[Regression Test] --> N[Deployment]
```

## Workflow Steps

### Step 1: Bug Triage
**Agent:** `@orchestrator`
**Tasks:**
- Parse bug description and classify severity
- Identify affected system components
- Route to appropriate specialist for investigation
- Set priority and resource allocation

### Step 2: Bug Reproduction
**Agent:** `@qa-validator`
**Tasks:**
- Reproduce bug with consistent steps
- Identify root cause and affected code areas
- Document current vs expected behavior
- Assess regression risk and blast radius
**Critical:** Must confirm reproduction before proceeding

### Step 3: Specialist Investigation
**Primary Agent:** Based on bug category
- `@frontend-specialist`: UI bugs, animation issues, state management
- `@ai-pipeline`: Chat functionality, AI response errors, prompt issues
- `@backend-specialist`: API failures, database issues, integration problems
- `@security-guardian`: Security vulnerabilities, data exposure
- `@cultural-curator`: Manglish accuracy, cultural appropriateness

**Supporting Agents:** Cross-domain consultation as needed

### Step 4: Root Cause Analysis
**Tasks:**
- Identify exact cause in codebase
- Review related code for similar issues
- Assess impact on other features
- Plan minimal viable fix strategy

### Step 5: Implementation
**Agent:** Primary specialist
**Tasks:**
- Implement targeted fix
- Add defensive code to prevent recurrence
- Update relevant documentation
- Pass Gate 2 self-review

### Step 6: Regression Validation
**Agent:** `@qa-validator`
**Tasks:**
- Verify original bug is resolved
- Test related functionality for regressions
- Validate fix doesn't break other features
- Confirm cultural authenticity maintained (if applicable)

### Step 7: Rapid Deployment
**Agent:** `@backend-specialist` (DevOps role)
**Tasks:**
- Deploy fix to staging environment
- Run automated smoke tests
- Monitor error rates and performance
- Deploy to production with rollback ready

## Priority-Based Workflows

### Critical Priority (Production Down)
```yaml
timeline: <30 minutes
agents: All hands on deck
gates: Minimal (Gate 2 only)
deployment: Immediate hotfix with post-deployment validation
```

### High Priority (User-Facing Issues)
```yaml
timeline: <2 hours  
agents: Primary specialist + @qa-validator + @security-guardian
gates: Gate 2 + limited Gate 3
deployment: Same-day release cycle
```

### Medium Priority (Non-Critical Bugs)
```yaml
timeline: <24 hours
agents: Primary specialist + cross-reviewers
gates: Full Gate 2 + Gate 3
deployment: Next scheduled release
```

### Low Priority (Enhancement/Polish)
```yaml
timeline: Next sprint
agents: Primary specialist during regular workflow
gates: All gates (1-4)
deployment: Regular release cycle
```

## Component-Specific Patterns

### Frontend Bugs
```yaml
common_issues:
  - State synchronization in WhatsAppLinkGenerator.tsx
  - Animation timing conflicts in ViralPillars.tsx
  - Modal management inconsistencies
  - Responsive design breakpoints
specialist: @frontend-specialist
reviewers: [@cultural-curator, @qa-validator]
```

### AI/Chat Bugs  
```yaml
common_issues:
  - Gemini API integration failures
  - Inappropriate AI responses
  - Cultural context errors
  - Chat history corruption
specialist: @ai-pipeline
reviewers: [@cultural-curator, @security-guardian]
```

### Backend Bugs
```yaml
common_issues:
  - Supabase Edge Function failures
  - Database query performance
  - API endpoint errors
  - Integration timeouts
specialist: @backend-specialist  
reviewers: [@security-guardian, @qa-validator]
```

### Security Bugs
```yaml
common_issues:
  - API key exposure
  - Input validation gaps
  - PDPA compliance violations
  - Authentication bypasses
specialist: @security-guardian
reviewers: [@backend-specialist, @qa-validator]
priority_override: Always high priority
```

## Example Usage

```bash
# Critical frontend bug
/fix-bug "WhatsApp link generator not working on mobile Safari" --priority=critical --component=frontend

# AI response issue
/fix-bug "Bijou giving non-Manglish responses to Malaysian users" --priority=high --component=ai

# Security vulnerability
/fix-bug "API keys visible in browser dev tools" --priority=critical --component=security
```

## Success Metrics
- Bug resolution time within priority SLA
- Zero regression introduction
- Cultural authenticity maintained
- User satisfaction with fix quality
- Prevention of similar future bugs

## Post-Fix Analysis
- Document root cause in knowledge base
- Update prevention measures in quality gates
- Share learnings across specialist agents
- Improve automated detection for similar issues