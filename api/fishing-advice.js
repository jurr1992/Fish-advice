export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const body = req.body;
    const prompt = body.prompt;

    console.log("Prompt sent to HF:", prompt);

    // Updated endpoint for Hugging Face Router API
    const response = await fetch(
      "https://router.huggingface.co/api/models/google/flan-t5-small",
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
    console.log("Raw HF API result:", result);

    res.status(200).json(result);

  } catch (err) {
    console.error("Error in function:", err);
    res.status(500).json({ error: "Server error" });
  }
}
