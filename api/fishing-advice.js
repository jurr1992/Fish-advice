export default async function handler(req, res) {
  try {
    // Vercel automatically parses JSON if Content-Type is application/json
    const body = req.body; 
    const prompt = body.prompt;

    // Call Hugging Face API
    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-small",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + process.env.HF_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      }
    );

    const result = await response.json();

    // Return result to frontend
    res.status(200).json(result);
  } catch (err) {
    console.error("Error in function:", err);
    res.status(500).json({ error: "Server error" });
  }
}
