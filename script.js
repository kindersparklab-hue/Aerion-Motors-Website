// INTRO VIDEO + AUDIO
const driftVideo = document.getElementById('drift-video');
const introAudio = document.getElementById('intro-audio');
const introDiv = document.getElementById('intro-video');
const mainSite = document.getElementById('main-site');
const logo = document.getElementById('logo');
const homeLogo = document.getElementById('home-logo');

window.addEventListener('load', () => {
    driftVideo.play();
    introAudio.play();

    driftVideo.addEventListener('ended', () => {
        let fadeAudio = setInterval(() => {
            if(introAudio.volume > 0.05){
                introAudio.volume -= 0.05;
            } else {
                introAudio.pause();
                clearInterval(fadeAudio);
            }
        }, 100);

        introDiv.style.display = 'none';
        mainSite.style.display = 'block';
    });
});

// LOGO LINKS
logo.addEventListener('click', () => { mainSite.style.display='block'; introDiv.style.display='none'; });
homeLogo.addEventListener('click', () => { window.scrollTo({top:0, behavior:'smooth'}); });

// PRODUCT MODAL
function openProduct(title, imgSrc, details){
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imgSrc;
    document.getElementById('modal-details').innerText = details;
    document.getElementById('product-modal').style.display = 'flex';
}
function closeProduct(){
    document.getElementById('product-modal').style.display = 'none';
}
