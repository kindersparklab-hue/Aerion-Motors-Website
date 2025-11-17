// INTRO VIDEO + AUDIO
const driftVideo = document.getElementById('intro-video');
const introAudio = document.getElementById('drift-audio');
const introDiv = document.getElementById('intro');
const mainSite = document.getElementById('main-content');

// Play video and audio when user clicks anywhere on the page
document.body.addEventListener('click', () => {
    driftVideo.play();
    introAudio.play();
}, { once: true });

// End intro and show main content after the video ends
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
