// INTRO VIDEO + AUDIO
const driftVideo = document.getElementById('intro-video');
const introAudio = document.getElementById('drift-audio');
const introDiv = document.getElementById('intro');
const mainSite = document.getElementById('main-content');

// Ensure autoplay works for both video and audio
driftVideo.play();
introAudio.play();

// End intro after video ends and fade audio
driftVideo.addEventListener('ended', () => {
    let fadeAudio = setInterval(() => {
        if (introAudio.volume > 0.05) {
            introAudio.volume -= 0.05;
        } else {
            introAudio.pause();
            clearInterval(fadeAudio);
        }
    }, 100);

    introDiv.style.display = 'none';
    mainSite.style.display = 'block';
});

// Product Modal Functions
function openProduct(t, img, d) {
    document.getElementById("modal-title").innerText = t;
    document.getElementById("modal-image").src = img;
    document.getElementById("modal-details").innerText = d;
    document.getElementById("product-modal").style.display = "flex";
}

function closeProduct() {
    document.getElementById("product-modal").style.display = "none";
}

// Home logo click to go to the homepage
document.getElementById("home-logo-store").addEventListener("click", () => {
    window.location.href = "index.html#home";
});
