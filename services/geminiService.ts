
import { GoogleGenAI } from "@google/genai";

// Fixed: Using process.env.API_KEY directly as required and removed invalid import.meta.env
export const summarizeConsultation = async (consultationText: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Summarize the following legal consultation request for a lawyer. Identify key legal issues and potential urgency: 
      
      "${consultationText}"`,
      config: {
        systemInstruction: "You are a legal analyst summarizing client inquiries for a high-end law firm.",
        temperature: 0.2,
      },
    });

    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "An error occurred while generating the summary.";
  }
};
