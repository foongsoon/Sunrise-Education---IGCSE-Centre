import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini
// Note: In a real production app, ensure strict backend proxying or secure env var usage.
// The prompt instructs to use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for "Sunrise Education", a tuition/learning centre located in Klang, Selangor, Malaysia.
Your tone is helpful, encouraging, and easy to understand (simple English and Chinese).
The center specializes in:
- Cambridge IGCSE International Syllabus.
- Primary (Year 1-6): English, Math, Science. Fun learning approach.
- Secondary (Year 7-11): IGCSE O-Levels. Subjects include Physics, Chemistry, Biology, Math, Add Math, Business, etc.
- Small class sizes, bilingual support (if needed), and exam-focused techniques.

Key Contact Details:
- Name: Sunrise Education
- Tel: +6 012-425 1556
- Address: No. 25-2nd Floor, Jalan Mahogani 5/Ks7, 41200 Klang, Selangor, Malaysia.

If asked about fees: "Our fees are affordable for the quality we provide. Please WhatsApp us at +6 012-425 1556 for the latest fee structure."
If asked about location: "We are located at Jalan Mahogani 5/Ks7 in Klang."

Keep answers concise (under 100 words).
Answer in the same language as the user's question (English or Chinese).
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Demo mode: API Key not configured. (Please add REACT_APP_GEMINI_API_KEY or similar to env)";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "Sorry, I lost my train of thought! ☀️";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oops! I'm having trouble connecting to the server right now. Please try again later.";
  }
};