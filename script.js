function getAdvice() {
  const state = document.getElementById("state").value.trim().toLowerCase();
  const waterType = document.getElementById("waterType").value;
  const spot = document.getElementById("spot").value;
  const time = document.getElementById("time").value;
  const season = document.getElementById("season").value;
  const weather = document.getElementById("weather").value;
  const fish = document.getElementById("fish").value;

  let lure = "";
  let bait = "";
  let otherLures = "";
  let action = "";
  let locationAdvice = "";
  let otherAdvice = "";

  // Example logic - expand as needed
  switch(fish) {
    case "Largemouth Bass":
      lure = "Spinnerbait";
      bait = "Soft plastic worms";
      otherLures = "Crankbait, Jigs, Topwater lures";
      action = "Slow, steady retrieve in the morning; faster in the afternoon";
      locationAdvice = "Near structures like logs, weed edges, and drop-offs";
      otherAdvice = "Avoid overly deep open water during bright, sunny days";
      break;

    case "Smallmouth Bass":
      lure = "Jig or Crankbait";
      bait = "Minnows or worms";
      otherLures = "Spinnerbait, Soft plastics";
      action = "Steady retrieve near rocks and currents";
      locationAdvice = "Rocks, riffles, and deeper river channels";
      otherAdvice = "Look for areas with moderate water flow";
      break;

    case "Catfish":
      lure = "Cut bait";
      bait = "Chicken liver or stink bait";
      otherLures = "Nightcrawlers, shrimp";
      action = "Let it sit near the bottom; check frequently";
      locationAdvice = "Deep water near structures or drop-offs";
      otherAdvice = "Fish is more active during dusk and night";
      break;

    case "Sunfish":
      lure = "Small jigs or flies";
      bait = "Worms or crickets";
      otherLures = "Tiny soft plastics";
      action = "Slow, gentle retrieve near surface";
      locationAdvice = "Shallow water near vegetation or docks";
      otherAdvice = "Great for kids or beginners; very easy to catch";
      break;

    case "Brown Trout":
    case "Rainbow Trout":
      lure = "Small spinners or flies";
      bait = "Live worms or dough bait";
      otherLures = "Small spoons, soft plastics";
      action = "Steady retrieve along currents";
      locationAdvice = "Cool, flowing water; near rocks and pools";
      otherAdvice = "Avoid bright sunlight; early morning or evening is best";
      break;

    default:
      lure = "Standard bait";
      bait = "Worms or small fish pieces";
      otherLures = "Try different lures and baits";
      action = "Adjust based on conditions";
      locationAdvice = "Try various spots until you find fish";
      otherAdvice = "Pay attention to weather and water conditions";
  }

  // Include state if provided
  const stateDisplay = state ? ` (Fishing in ${state.charAt(0).toUpperCase() + state.slice(1)})` : "";

  document.getElementById("lure").innerText = lure + stateDisplay;
  document.getElementById("bait").innerText = bait + stateDisplay;
  document.getElementById("otherLures").innerText = otherLures + stateDisplay;
  document.getElementById("action").innerText = action + stateDisplay;
  document.getElementById("locationAdvice").innerText = locationAdvice + stateDisplay;
  document.getElementById("otherAdvice").innerText = otherAdvice + stateDisplay;
}
