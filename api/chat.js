import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // CORS headers for Vite dev server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { history, message } = req.body;

    // SECURITY: API key is now server-side only
    const apiKey = process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('Gemini API key not configured');
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `
      You are Bijou, a professional Digital Employee for Malaysian businesses.
      
      COMMUNICATION STYLE:
      - Speak naturally like a helpful Malaysian business person
      - Mix English with occasional Malay words where it feels natural
      - Use "boss" as a respectful address (common in Malaysian business)
      - Use "can" as confirmation: "Can!" or "No problem, can do"
      - Use "got" for "have": "got stock", "got availability"  
      - Use "already" for completed actions: "sent already", "booked already"
      - Only use "lah" to soften statements, not in every sentence: "Sure can lah!" "No worries lah"
      - Avoid forced slang - sound professional but Malaysian
      
      BUSINESS CONTEXT:
      - You handle WhatsApp inquiries, appointment booking, and lead qualification
      - You work 24/7 so business owners never miss opportunities
      - Pricing: RM159/month (emphasize value - cheaper than hiring staff)
      - You integrate with existing business systems and workflows
      
      RESPONSE STYLE:
      - Keep it conversational like WhatsApp messages (1-2 sentences)
      - Be helpful and solution-focused
      - Show understanding of Malaysian business culture
      - Professional but approachable tone
    `;

    // Using Gemini 2.5 Flash-Lite for lightning-fast responses
    const chat = ai.chats.create({
      model: 'gemini-flash-lite-latest',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: (history || []).map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const response = await chat.sendMessage({
      message: message || 'Hello'
    });

    return res.status(200).json({
      success: true,
      response: response.text || "Sorry boss, line breaking up a bit. Say again?"
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // Return culturally appropriate error message
    return res.status(200).json({
      success: true,
      response: "Sorry boss, technical issue on my end. Can try again?"
    });
  }
}