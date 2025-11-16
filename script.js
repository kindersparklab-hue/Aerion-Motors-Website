// Intro animation sequence with 3 drift frames
const driftFrames = [
  'Assets/Side%20Drift.png',
  'Assets/Front%20Drift.png',
  'Assets/Rear%20Drift.png'
];

const driftCar = document.getElementById('drift-car');
const brandTitle = document.getElementById('brand-title');

let frameIndex = 0;

// Show first frame
driftCar.src = driftFrames[frameIndex];
driftCar.style.opacity = 1;

// Animate drift frames with scale/rotation effect
const driftInterval = setInterval(() => {
  frameIndex++;
  if(frameIndex < driftFrames.length){
    driftCar.style.transform = `translateX(${frameIndex * 100}px) rotate(${frameIndex * 15}deg)`;
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
