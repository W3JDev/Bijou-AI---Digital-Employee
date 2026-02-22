# /market-research Command
*Competitive analysis and market opportunity identification*

## Command Signature
```bash
/market-research [topic] [--region=MY|SG|ID|TH|SEA] [--vertical=property|dental|fnb|gaming|general]
```

## Agent Orchestration Flow
```mermaid
graph LR
    A[Research Request] --> B[@orchestrator]
    B --> C[@cultural-curator]
    C --> D[Market Context] --> E[@product-manager]
    E --> F[Competitive Analysis] --> G[@ai-pipeline]
    G --> H[Feature Gaps] --> I[@frontend-specialist + @backend-specialist]
    I --> J[Technical Feasibility] --> K[@orchestrator]
    K --> L[Strategic Recommendations] --> M[Backlog Update]
```

## Workflow Steps

### Step 1: Market Context Analysis
**Agent:** `@cultural-curator`
**Tasks:**
- Analyze cultural nuances for target region/vertical
- Identify local market dynamics and preferences
- Research regulatory requirements (PDPA, local laws)
- Map cultural communication patterns
**Output:** Cultural market intelligence report

### Step 2: Competitive Landscape
**Agent:** `@orchestrator` (product management role)
**Tasks:**
- Research direct and indirect competitors
- Analyze competitor feature sets and positioning
- Identify market gaps and opportunities
- Assess pricing strategies and value propositions
**Output:** Competitive analysis matrix

### Step 3: AI/Chat Market Trends
**Agent:** `@ai-pipeline`
**Tasks:**
- Research AI chatbot trends in target market
- Analyze prompt engineering best practices
- Identify cultural AI adaptation strategies
- Assess LLM capabilities for local languages
**Output:** AI technology landscape report

### Step 4: Technical Implementation Assessment
**Agents:** `@frontend-specialist` + `@backend-specialist` (parallel)
**Tasks:**
- Evaluate technical feasibility of identified opportunities
- Assess integration complexity with current architecture
- Estimate development effort and resource requirements
- Identify technical risks and mitigation strategies
**Output:** Technical feasibility assessment

### Step 5: Strategic Synthesis
**Agent:** `@orchestrator`
**Tasks:**
- Synthesize findings into actionable insights
- Prioritize opportunities by impact and feasibility
- Create implementation roadmap recommendations
- Define success metrics and validation criteria
**Output:** Strategic market report with recommendations

## Research Categories

### Regional Market Analysis
```yaml
Malaysia:
  focus_areas: [Manglish authenticity, SME pain points, regulatory compliance]
  competitors: [local chatbot providers, international players]
  opportunities: [after-hours coverage, cultural differentiation]
  
Singapore:
  focus_areas: [professional tone, efficiency focus, tech adoption]
  competitors: [enterprise solutions, government initiatives]
  opportunities: [cross-border business, fintech integration]
  
Indonesia:
  focus_areas: [Bahasa integration, mobile-first approach, price sensitivity]
  competitors: [local startups, global platforms]
  opportunities: [scale potential, vertical specialization]
  
Thailand:
  focus_areas: [Thai language support, relationship culture, tourism industry]
  competitors: [local providers, tourism-focused solutions]  
  opportunities: [hospitality vertical, cultural tourism support]
```

### Vertical-Specific Research
```yaml
Property:
  pain_points: [lead qualification, appointment scheduling, market updates]
  competitors: [PropTech platforms, CRM integrations]
  opportunities: [virtual tours, price negotiation, document automation]
  
Dental:
  pain_points: [appointment management, insurance queries, treatment education] 
  competitors: [practice management software, booking platforms]
  opportunities: [symptom assessment, treatment reminders, insurance automation]
  
F&B:
  pain_points: [order taking, delivery coordination, menu updates]
  competitors: [delivery platforms, POS systems, reservation tools]
  opportunities: [dietary preferences, loyalty programs, inventory integration]
  
Gaming:
  pain_points: [event booking, tournament management, group coordination]
  competitors: [gaming platforms, event management tools]
  opportunities: [skill matching, tournament bracketing, prize distribution]
```

## Research Methodology

### Data Collection Sources
- Competitor websites and product documentation
- Industry reports and market studies  
- Social media sentiment analysis
- Cultural forums and community feedback
- Government regulatory databases
- Technology trend reports

### Analysis Framework
```yaml
market_opportunity_scoring:
  market_size: "Total addressable market in target region"
  competition_intensity: "Number and strength of existing solutions"
  cultural_fit: "Alignment with local preferences and values"
  technical_complexity: "Implementation difficulty and resource requirements"
  regulatory_barriers: "Legal and compliance considerations"
  revenue_potential: "Monetization opportunity and pricing power"
```

## Example Usage

```bash
# Regional expansion research
/market-research "AI chatbot adoption in Indonesia" --region=ID --vertical=general

# Vertical opportunity analysis  
/market-research "Property agent pain points in Singapore" --region=SG --vertical=property

# Technology trend analysis
/market-research "Manglish AI capabilities" --region=SEA --vertical=general
```

## Deliverables

### Market Intelligence Report
- Executive summary with key findings
- Competitive landscape mapping
- Cultural considerations and requirements
- Technical implementation recommendations
- Revenue projections and business case
- Risk assessment and mitigation strategies

### Backlog Updates
- New feature requirements based on market gaps
- Cultural adaptation tasks for existing features
- Technical debt items for market expansion
- Security and compliance requirements
- Performance optimization priorities

### Strategic Recommendations
- Market entry strategies and timing
- Partnership and integration opportunities  
- Pricing strategy adjustments
- Cultural positioning refinements
- Product roadmap prioritization

## Success Metrics
- Market opportunity size and validation
- Competitive differentiation strength
- Cultural authenticity assessment
- Technical feasibility confidence
- Business case strength and ROI projections

## Follow-up Actions
- Feature development planning with /launch-feature
- Cultural adaptation with @cultural-curator
- Technical architecture updates
- Market validation experiments
- Partnership development initiatives