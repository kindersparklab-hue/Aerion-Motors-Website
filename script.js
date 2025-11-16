const driftVideo = document.getElementById('drift-video');

driftVideo.addEventListener('ended', () => {
  document.getElementById('intro-video').style.display = 'none';
  document.getElementById('store').style.display = 'block';
});

// Optional: play video on first click if autoplay blocked
document.body.addEventListener('click', () => {
  driftVideo.play().catch(() => {});
}, { once: true });
