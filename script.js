// INTRO VIDEO + AUDIO
const intro = document.getElementById("intro");
const introVideo = document.getElementById("intro-video");
const introAudio = document.getElementById("drift-audio");
const mainContent = document.getElementById("main-content");

document.body.addEventListener("click", () => {
  introVideo.play();
  introAudio.play();
}, { once: true });

// End intro video
introVideo.addEventListener("ended", () => {
  intro.style.display = "none";
  mainContent.style.display = "block";
  introAudio.pause();
});

// Scroll to home when logo is clicked
document.getElementById("home-logo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Product Modal
function openProduct(title, imgSrc, details) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-image").src = imgSrc;
  document.getElementById("modal-details").innerText = details;
  document.getElementById("product-modal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("product-modal").style.display = "none";
}

document.getElementById("home-logo-store").addEventListener("click", () => {
  window.location.href = "index.html#home";
});
