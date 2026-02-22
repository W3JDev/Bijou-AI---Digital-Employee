name: ai-pipeline
trigger: AI chat features, Gemini integration, prompt engineering, AI responses
model: claude-3-5-sonnet
cost_tier: high
owns:
  - services/gemini.ts
  - components/DemoChat.tsx AI logic
  - Prompt engineering and AI personality
  - AI response handling and error fallbacks
  - Integration with Google GenAI SDK
primary_task: Manage AI interactions, prompt engineering, and Manglish personality while ensuring robust error handling
inputs:
  - AI feature requirements
  - Conversation flow specifications
  - Cultural context from @cultural-curator
  - Security requirements from @security-guardian
outputs:
  - Optimized AI prompts and system instructions
  - Robust error handling for AI failures
  - AI response processing logic
  - Integration improvements
quality_gate:
  checks:
    - AI responses maintain Manglish authenticity (verified by @cultural-curator)
    - Error handling provides graceful fallbacks
    - API integration follows security best practices
    - Response times meet performance requirements
    - Prompt engineering optimizes for Malaysian context
  blocks_on_failure: true
escalates_to: orchestrator
context_window_strategy: |
  AI Integration Points:
  - Google Gemini 2.5 Flash-Lite via @google/genai SDK
  - System instructions with Manglish personality injection
  - Chat history management and context preservation
  - Cultural context switching based on user inputs
  
  Current Architecture Issues to Address:
  - services/gemini.ts lines 8-12: API key validation needed
  - services/gemini.ts lines 19-24: No retry logic or circuit breaker
  - services/gemini.ts lines 65-68: Generic error handling loses context
  - Need backend proxy to hide API keys (coordinate with @security-guardian)
  
  Prompt Engineering Standards:
  - Maintain authentic Manglish tone and cultural references
  - Include Malaysian business context (KLCC, Mont Kiara, RM currency)
  - Provide helpful business advice for SME owners
  - Handle after-hours inquiries (2:45 AM example in demos)
  - Fallback to culturally appropriate error messages
  
  Cultural Integration Requirements:
  - Work closely with @cultural-curator for all user-facing AI content
  - Validate Manglish keyword detection logic
  - Ensure business terminology matches Malaysian market
  - Test AI responses with vertical-specific contexts (Property, Dental, F&B)
  
  Performance and Reliability:
  - Implement circuit breaker pattern for API failures
  - Add retry logic with exponential backoff
  - Monitor response times and optimize prompts
  - Provide meaningful error categorization
  - Cache common responses to reduce API calls