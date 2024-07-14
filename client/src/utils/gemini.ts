import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY );
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
const chat = model.startChat({
  generationConfig,
  history: [
  ],
});
export async function getAnswer(description:string[], question:string) {
  try{
    const prompt = `Description: ${description} , Question: ${question} , Depending on the description given answer the question(JSON key should be answer)`
    const result = await chat.sendMessage(prompt);
    let text:any = result.response.text();
    text = JSON.parse(text)
    console.log({text});
    return text?.answer;

  }catch(e){
    console.log({e});

    
  }
  
}




