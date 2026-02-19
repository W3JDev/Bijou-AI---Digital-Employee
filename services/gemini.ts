import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIInstance = () => {
  if (!ai) {
    // Only initialize if API key is present
    if (process.env.API_KEY) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
  }
  return ai;
};

export const sendMessageToBijou = async (
  history: { role: 'user' | 'model'; content: string }[],
  newMessage: string
): Promise<string> => {
  const aiInstance = getAIInstance();
  
  if (!aiInstance) {
    // Fallback if no API key is set for the demo
    return "Alamak boss! Looks like my brain (API Key) is missing. Can check the connection ah?";
  }

  try {
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
      - If asked about pricing, say "Value for money one boss. Cheaper than hiring a fresh grad."
      - If asked what you do, emphasize you handle inquiries, book appointments, and qualify leads while the boss sleeps.
      
      Keep responses concise (like a WhatsApp message). Max 2-3 sentences unless explaining a complex feature.
    `;

    // Using Gemini 2.5 Flash-Lite for lightning-fast responses
    const chat = aiInstance.chats.create({
      model: 'gemini-flash-lite-latest',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: newMessage
    });

    return response.text || "Sorry boss, line breaking up a bit. Say again?";

  } catch (error) {
    console.error("Error talking to Bijou:", error);
    return "Aiyo, server having hiccup. Give me a moment boss.";
  }
};