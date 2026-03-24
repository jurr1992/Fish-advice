// script.js

async function getAIAdvice() {
  const state = document.getElementById("state").value;
  const waterType = document.getElementById("waterType").value;
  const spot = document.getElementById("spot").value;
  const time = document.getElementById("time").value;
  const season = document.getElementById("season").value;
  const weather = document.getElementById("weather").value;
  const fish = document.getElementById("fish").value;

  const prompt = `
You are a fishing expert.
User inputs:
State: ${state}
Water type: ${waterType}
Spot: ${spot}
Time: ${time}
Season: ${season}
Weather: ${weather}
Target Fish: ${fish}

Return a JSON object with keys:
recommended_lure, recommended_bait, other_lures_baits, recommended_action, recommended_location, other_advice
`;

  // Call Hugging Face Inference API
  const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-small", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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", // <- Replace with your API key
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt })
  });

  const result = await response.json();

  // The response text is usually in result[0].generated_text
  let aiOutput;
  try {
    aiOutput = JSON.parse(result[0].generated_text);
  } catch (err) {
    console.error("Error parsing AI output:", result);
    alert("AI returned invalid JSON. Try again.");
    return;
  }

  // Populate HTML with AI outputs
  document.getElementById("lure").innerText = aiOutput.recommended_lure;
  document.getElementById("bait").innerText = aiOutput.recommended_bait;
  document.getElementById("otherLures").innerText = aiOutput.other_lures_baits;
  document.getElementById("action").innerText = aiOutput.recommended_action;
  document.getElementById("locationAdvice").innerText = aiOutput.recommended_location;
  document.getElementById("otherAdvice").innerText = aiOutput.other_advice;
