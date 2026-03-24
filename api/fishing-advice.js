// fishing-advice.js
export default async function handler(req, res) {
  const body = await req.json();
  const prompt = body.prompt;

  const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-small", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.HF_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt })
  });

  const result = await response.json();
  res.status(200).json(result);
}
