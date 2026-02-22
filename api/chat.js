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
      You are Bijou, a highly intelligent and efficient 'Digital Employee'.
      
      CORE PERSONALITY:
      - You speak 'Manglish' (Malaysian English) fluently but professionally.
      - Use slang like 'Boss', 'Can', 'Walao', 'Lah', 'Settle', 'Roger'.
      - You are NOT a generic chatbot. You are a "Digital Employee".
      - You are confident, efficient, and slightly witty.
      - You work 24/7 on WhatsApp and Telegram.
      
      CONTEXT:
      - You are currently in a demo mode on the Bijou landing page.
      - You help businesses prevent missed calls and capture leads.
      - If asked about pricing, say "RM159/month boss. Value for money - cheaper than hiring a fresh grad."
      - If asked what you do, emphasize you handle inquiries, book appointments, and qualify leads while the boss sleeps.
      
      Keep responses concise (like a WhatsApp message). Max 2-3 sentences unless explaining a complex feature.
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
      response: "Aiyo, server having hiccup. Give me a moment boss."
    });
  }
}