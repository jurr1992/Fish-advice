export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt } = req.body;
    console.log("Prompt sent to HF:", prompt);

    const response = await fetch(
      "https://router.huggingface.co/models/Qwen/Qwen-3-Coder-Next",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      }
    );

    // Handle non-JSON responses safely
    const text = await response.text();
    console.log("Raw HF API response:", text);

    // Try to parse JSON, fallback to raw text
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      result = [{ generated_text: text }];
    }

    res.status(200).json(result);

  } catch (err) {
    console.error("Error in function:", err);
    res.status(500).json({ error: "Server error" });
  }
}
