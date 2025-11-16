const driftCar = document.getElementById('drift-car');
const brandTitle = document.getElementById('brand-title');

let posX = -700; // starting offscreen
let rotation = 0;
let speed = 15; // pixels per frame

// Drift sequence: move car across screen while rotating slightly
const driftAnimation = setInterval(() => {
  if(posX < window.innerWidth + 200){
    posX += speed;
    rotation = Math.sin(posX/50) * 15; // slight drift rotation
    driftCar.style.transform = `translateY(-50%) translateX(${posX}px) rotate(${rotation}deg)`;

    // Change images based on position
    if(posX < window.innerWidth/3){
      driftCar.src = 'Assets/Side Drift.png';
    } else if(posX < 2*window.innerWidth/3){
      driftCar.src = 'Assets/Front Drift.png';
    } else {
      driftCar.src = 'Assets/Rear Drift.png';
    }

  } else {
    clearInterval(driftAnimation);
    // Fade in brand title
    brandTitle.style.opacity = 1;

    // Wait then show store
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("store").style.display = "block";
    }, 1500);
  }
}, 30); // 30ms for smooth animation (~33fps)
