
import { GoogleGenAI, Type } from "@google/genai";
import { SiteConfig } from "../types";

const API_KEY = process.env.API_KEY || '';

export const generateSiteContent = async (prompt: string): Promise<SiteConfig> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Crie a estrutura completa de um site profissional para o seguinte pedido: "${prompt}". 
               O site deve ser moderno, atraente e focado em conversão. 
               Responda APENAS com um objeto JSON válido.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          companyName: { type: Type.STRING },
          heroTitle: { type: Type.STRING },
          heroSubtitle: { type: Type.STRING },
          primaryColor: { type: Type.STRING, description: "Hex color code (ex: #3b82f6)" },
          secondaryColor: { type: Type.STRING, description: "Hex color code (ex: #1e40af)" },
          aboutText: { type: Type.STRING },
          ctaText: { type: Type.STRING },
          contactEmail: { type: Type.STRING },
          features: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                icon: { type: Type.STRING, description: "A simple keyword for an icon like 'star', 'shield', 'bolt', 'heart', 'code'" }
              },
              required: ["title", "description", "icon"]
            }
          },
          testimonials: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                role: { type: Type.STRING },
                quote: { type: Type.STRING }
              },
              required: ["name", "role", "quote"]
            }
          }
        },
        required: [
          "companyName", "heroTitle", "heroSubtitle", "primaryColor", 
          "secondaryColor", "aboutText", "features", "testimonials", 
          "contactEmail", "ctaText"
        ]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("A API não retornou conteúdo.");
  
  return JSON.parse(text) as SiteConfig;
};
