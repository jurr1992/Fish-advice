function getAdvice() {
  const state = document.getElementById("state").value.trim().toLowerCase();
  const waterType = document.getElementById("waterType").value;
  const spot = document.getElementById("spot").value;
  const time = document.getElementById("time").value;
  const season = document.getElementById("season").value;
  const weather = document.getElementById("weather").value;
  const fish = document.getElementById("fish").value;

  let advice = "";

  // Example logic - you can expand this later
  if (fish === "Largemouth Bass") {
    if (time.includes("Morning") && weather === "Cloudy") {
      advice = "Use a spinnerbait. Slow retrieve. Fish near structure.";
    } else if (spot === "Shore") {
      advice = "Use a soft plastic worm. Fish near cover.";
    } else {
      advice = "Use a crankbait. Medium retrieve. Fish in deeper water.";
    }
  } else if (fish === "Smallmouth Bass") {
    advice = "Use a jig or crankbait. Fish near rocks and currents.";
  } else if (fish === "Catfish") {
    advice = "Use cut bait. Fish near bottom in deeper water.";
  } else if (fish === "Sunfish") {
    advice = "Use small jigs or worms near shallow water and vegetation.";
  } else if (fish === "Brown Trout" || fish === "Rainbow Trout") {
    advice = "Use small spinners or flies near cool, flowing water.";
  } else {
    advice = "Try standard bait and adjust based on conditions.";
  }

  // Optional: include state in the message
  if (state) {
    advice += ` (Fishing in ${state.charAt(0).toUpperCase() + state.slice(1)})`;
  }

  document.getElementById("result").innerText = advice;
}
