
import { GoogleGenAI } from "@google/genai";

// Standardize client initialization using process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const summarizeConsultation = async (consultationText: string) => {
  if (!process.env.API_KEY) {
    return "AI Summary unavailable: Missing API Key.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Summarize the following legal consultation request for a lawyer. Identify key legal issues and potential urgency: 
      
      "${consultationText}"`,
      config: {
        systemInstruction: "You are a legal analyst summarizing client inquiries for a high-end law firm.",
        temperature: 0.2,
      },
    });

    // Directly access the text property as per latest SDK guidelines
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An error occurred while generating the summary.";
  }
};
