// INTRO VIDEO + AUDIO
const driftVideo = document.getElementById('intro-video');
const introAudio = document.getElementById('drift-audio');
const introDiv = document.getElementById('intro');
const mainSite = document.getElementById('main-content');
const logo = document.getElementById('home-logo');
const homeLogo = document.getElementById('home-logo-store');

// Auto-play video and audio on page load
window.addEventListener('load', () => {
    driftVideo.play();
    introAudio.play();
});

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

// Logo click scroll to top
logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// HOME LOGO STORE - Navigate to Home Section
homeLogo.addEventListener('click', () => {
    window.location.href = "index.html#home";
});

// PRODUCT MODAL
function openProduct(title, imgSrc, details) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('modal-details').innerText = details;
    document.getElementById('product-modal').style.display = 'flex';
}

function closeProduct() {
    document.getElementById('product-modal').style.display = 'none';
}

// OPTIONAL: Auto scroll product slider every few seconds (for added effect)
const sliderContainer = document.querySelector('.slider-container');

setInterval(() => {
    if (sliderContainer) {
        const scrollWidth = sliderContainer.scrollWidth;
        const scrollLeft = sliderContainer.scrollLeft;
        if (scrollLeft + window.innerWidth >= scrollWidth) {
            sliderContainer.scrollLeft = 0;
        } else {
            sliderContainer.scrollLeft += 200; // Adjust scroll distance for each scroll
        }
    }
}, 3000); // Every 3 seconds
