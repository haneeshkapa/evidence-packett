import { GoogleGenAI, Type } from "@google/genai";
import { Artifact, Feedback } from "../types";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeArtifact = async (artifact: Artifact): Promise<Feedback | null> => {
  const ai = getAiClient();
  if (!ai) return null;

  const prompt = `
    Please analyze this evidence artifact for a job interview:
    
    Title: ${artifact.title}
    Goal: ${artifact.goal}
    Constraints: ${artifact.constraints}
    Actions: ${artifact.actions}
    Results: ${artifact.results}
    Proof/Validation: ${artifact.proof}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                score: { type: Type.INTEGER },
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
                weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
                suggestion: { type: Type.STRING },
            },
            required: ["score", "strengths", "weaknesses", "suggestion"]
        }
      },
    });

    const text = response.text;
    if (!text) return null;
    
    return JSON.parse(text) as Feedback;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return null;
  }
};
