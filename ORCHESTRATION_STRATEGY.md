# ORCHESTRATION_STRATEGY.md
*Multi-Agent System Design for Bijou AI Digital Employee*

## 2.1 — Architecture Decision: Orchestrator + Specialists

**Pattern:** Dynamic task routing with master orchestrator directing specialized agents
**Justification:** Codebase has 5 distinct expertise domains (Frontend, AI, Security, Cultural, Backend) with complex cross-cutting concerns requiring intelligent coordination.

## 2.2 — Agent Roster (7 Specialized Agents)

| Agent | Trigger | Model | Cost | Primary Domain |
|-------|---------|-------|------|----------------|
| `@orchestrator` | All requests | claude-3-5-sonnet | High | Task routing & coordination |
| `@frontend-specialist` | React/TypeScript/UI | claude-3-5-sonnet | High | Components & animations |
| `@ai-pipeline` | Gemini integration | claude-3-5-sonnet | High | AI & prompt engineering |
| `@security-guardian` | Security & compliance | claude-3-5-sonnet | High | Vulnerability & PDPA |
| `@cultural-curator` | Manglish & localization | claude-3-5-sonnet | Medium | Cultural authenticity |
| `@backend-specialist` | Supabase functions | claude-3-haiku | Low | Server & database |
| `@qa-validator` | Quality & testing | claude-3-haiku | Low | Bug prevention |

## 2.3 — Orchestration Flow

```mermaid
graph TB
    A[User Request] --> B[@orchestrator]
    B --> C{Task Analysis}
    
    C -->|UI/Animation Change| D[@frontend-specialist]
    C -->|AI/Chat Feature| E[@ai-pipeline]
    C -->|Security Issue| F[@security-guardian]
    C -->|Cultural Content| G[@cultural-curator]
    C -->|Backend/API| H[@backend-specialist]
    C -->|Bug Report| I[@qa-validator]
    
    %% Cross-cutting concerns
    F -.->|Security Review| D
    F -.->|Security Review| E
    F -.->|Security Review| H
    
    G -.->|Cultural Validation| D
    G -.->|Cultural Validation| E
    
    I -.->|Quality Check| D
    I -.->|Quality Check| E
    I -.->|Quality Check| H
    
    %% Quality Gates
    D --> J{Gate 2: Self-Review}
    E --> K{Gate 2: Self-Review}
    H --> L{Gate 2: Self-Review}
    
    J --> M{Gate 3: Peer Review}
    K --> M
    L --> M
    
    M --> N{Gate 4: Integration Test}
    N --> O[Delivery]
    
    %% Failure paths
    J -.->|Fail| B
    K -.->|Fail| B
    L -.->|Fail| B
    M -.->|Fail| B
    N -.->|Fail| B
```

## 2.4 — Model Assignment Strategy

### High-Capability Tasks (claude-3-5-sonnet)
| Task Type | Agent | Justification |
|-----------|-------|---------------|
| Architecture decisions | `@orchestrator` | Complex routing decisions, cross-domain coordination |
| React components | `@frontend-specialist` | Complex TypeScript, Framer Motion patterns |
| AI integration | `@ai-pipeline` | Prompt engineering, cultural context integration |
| Security audit | `@security-guardian` | Critical vulnerabilities, PDPA compliance |
| Cultural validation | `@cultural-curator` | Nuanced Manglish authenticity |

### Structured/Pattern-based Tasks (claude-3-haiku)
| Task Type | Agent | Justification |
|-----------|-------|---------------|
| Backend functions | `@backend-specialist` | Predictable CRUD operations, Supabase patterns |
| Quality validation | `@qa-validator` | Checklist-based testing, pattern validation |

### Cost Optimization Strategy
- **80% of tasks** use lower-cost haiku for structured work
- **20% of tasks** use sonnet for complex reasoning
- **Parallel execution** reduces total wall-clock time
- **Context sharing** between agents reduces duplicate analysis

## 2.5 — Workflow Patterns

### Pattern 1: Feature Development
```
@orchestrator → @frontend-specialist + @cultural-curator (parallel)
             → @security-guardian (review)
             → @qa-validator (validation)
```

### Pattern 2: AI Enhancement
```
@orchestrator → @ai-pipeline + @cultural-curator (parallel)
             → @security-guardian (API security)
             → @qa-validator (integration test)
```

### Pattern 3: Security Fix
```
@orchestrator → @security-guardian (analyze)
             → @backend-specialist (implement)
             → @ai-pipeline (if AI-related)
             → @qa-validator (verify fix)
```

### Pattern 4: Bug Fix
```
@orchestrator → @qa-validator (reproduce)
             → Relevant specialist (fix)
             → @qa-validator (regression test)
```

## 2.6 — Quality Gate Integration

### Gate 1: Static Analysis (Automated)
- **Trigger:** Every code change
- **Checks:** TypeScript compilation, lint rules
- **Blocks:** Syntax errors, type violations

### Gate 2: Agent Self-Review
- **Trigger:** Before agent output handoff
- **Responsible:** Each specialist agent
- **Blocks:** Missing tests, broken imports, unhandled errors

### Gate 3: Cross-Agent Review
- **Trigger:** After specialist completion
- **Patterns:**
  - `@security-guardian` reviews all backend changes
  - `@cultural-curator` reviews all user-facing content
  - `@qa-validator` reviews all code changes
- **Blocks:** Security holes, cultural issues, quality violations

### Gate 4: Integration Validation
- **Trigger:** Before production deployment
- **Checks:** End-to-end functionality, performance benchmarks
- **Blocks:** Integration failures, performance degradation

## 2.7 — Failure Handling

### Retry Strategy
- **Agent failures:** 2 retries with exponential backoff
- **Quality gate failures:** Return to @orchestrator for re-routing
- **Integration failures:** Rollback + root cause analysis

### Escalation Path
- **Agent → @orchestrator:** For coordination issues
- **@orchestrator → Human:** For ambiguous requirements or system-level failures

### Circuit Breaker
- **Trigger:** 3 consecutive failures from same agent
- **Action:** Route tasks to backup patterns or human escalation
- **Recovery:** Automatic after 15-minute cooldown

## 2.8 — Context Management

### Shared Context Pool
- PROJECT_INTELLIGENCE.md findings
- AGENTS.md coding standards
- Quality gate requirements
- Cultural guidelines from @cultural-curator

### Agent-Specific Context
- **@frontend-specialist:** Component complexity map, animation patterns
- **@ai-pipeline:** Prompt library, cultural context injection rules
- **@security-guardian:** Vulnerability database, compliance requirements
- **@cultural-curator:** Manglish validation rules, market context
- **@backend-specialist:** API patterns, database schema
- **@qa-validator:** Bug patterns, testing checklists

This orchestration strategy ensures optimal resource utilization while maintaining quality and cultural authenticity across all deliverables.