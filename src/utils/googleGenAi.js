const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAi = new GoogleGenerativeAI("AIzaSyA2g2LZG-FGoZx4EtORerh7SM6CG13JC9U");

const initPrompt =
  "Translate the following sentence from Thai to English. And give three examples of dialog using that english sentence in daily life.";

async function runAi(sentence) {
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = initPrompt + " " + sentence;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  return text;
}

export { runAi };
