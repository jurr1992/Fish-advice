export default async function handler(req, res) {
  try {
    console.log("Request method:", req.method);
    console.log("Request body:", req.body);

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const prompt = req.body.prompt;
    console.log("Prompt sent to HF:", prompt);

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
    console.log("Raw HF API result:", result);

    res.status(200).json(result);

  } catch (err) {
    console.error("Error in function:", err);
    res.status(500).json({ error: "Server error" });
  }
}
