function getAdvice() {
  const fish = document.getElementById("fish").value;
  const time = document.getElementById("time").value;
  const weather = document.getElementById("weather").value;

  let advice = "";

  if (fish === "Bass") {
    if (time === "Morning" && weather === "Cloudy") {
      advice = "Use a spinnerbait. Slow retrieve. Fish near structure.";
    } else if (time === "Afternoon") {
      advice = "Use a crankbait. Medium retrieve. Fish deeper water.";
    } else {
      advice = "Use a soft plastic worm. Fish near cover.";
    }
  }

  if (fish === "Catfish") {
    advice = "Use cut bait. Fish near the bottom in deeper water.";
  }

  document.getElementById("result").innerText = advice;
}
