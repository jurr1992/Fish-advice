// script.js

async function getAIAdvice() {
  // Get all user inputs
  const state = document.getElementById("state").value;
  const waterType = document.getElementById("waterType").value;
  const spot = document.getElementById("spot").value;
  const time = document.getElementById("time").value;
  const season = document.getElementById("season").value;
  const weather = document.getElementById("weather").value;
  const fish = document.getElementById("fish").value;

  // Build prompt for AI
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

  try {
    // Call your serverless function
    const response = await fetch("/api/fishing-advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const result = await response.json();

    // The generated text from Hugging Face is in result[0].generated_text
    const aiOutput = JSON.parse(result[0].generated_text);

    // Populate HTML elements with AI output
    document.getElementById("lure").innerText = aiOutput.recommended_lure;
    document.getElementById("bait").innerText = aiOutput.recommended_bait;
    document.getElementById("otherLures").innerText = aiOutput.other_lures_baits;
    document.getElementById("action").innerText = aiOutput.recommended_action;
    document.getElementById("locationAdvice").innerText = aiOutput.recommended_location;
    document.getElementById("otherAdvice").innerText = aiOutput.other_advice;

  } catch (error) {
    console.error("Error getting AI advice:", error);
    alert("Sorry, something went wrong getting the AI advice.");
  }
}
