// Intro animation sequence with 3 drift frames
const driftFrames = [
  'assets/Side Drift.png',
  'assets/Front Drift.png',
  'assets/Rear Drift.png'
];

const driftCar = document.getElementById('drift-car');
const brandTitle = document.getElementById('brand-title');

let frameIndex = 0;

// Show first frame
driftCar.src = driftFrames[frameIndex];
driftCar.style.opacity = 1;

// Switch frames every 1.2 seconds
const driftInterval = setInterval(() => {
  frameIndex++;
  if(frameIndex < driftFrames.length){
    driftCar.src = driftFrames[frameIndex];
  } else {
    clearInterval(driftInterval);
    // Fade in brand title
    brandTitle.style.opacity = 1;

    // Wait 1.5 seconds then show store
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("store").style.display = "block";
    }, 1500);
  }
}, 1200);
