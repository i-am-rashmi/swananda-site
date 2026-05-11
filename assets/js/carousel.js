/* ─────────────────────────────────────────────
   SWANANDA — Carousel
   Auto-advancing hero slide logic.
   ───────────────────────────────────────────── */

let currentSlide = 0;
let autoTimer;

function goTo(index) {
  const slides  = SITE.hero.slides;
  const track   = document.getElementById('carouselTrack');
  const dots    = document.querySelectorAll('.carousel__dot');
  const name    = document.getElementById('tickerName');
  const num     = document.getElementById('tickerNum');

  if (!track) return;

  currentSlide = index;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));

  if (name) name.textContent = slides[currentSlide].label;
  if (num)  num.textContent  = String(currentSlide + 1).padStart(2, '0') + ' / 0' + slides.length;

  resetTimer();
}

function next() { goTo((currentSlide + 1) % SITE.hero.slides.length); }
function prev() { goTo((currentSlide - 1 + SITE.hero.slides.length) % SITE.hero.slides.length); }

function resetTimer() {
  clearInterval(autoTimer);
  autoTimer = setInterval(next, 4500);
}

// Start after render
document.addEventListener('DOMContentLoaded', () => {
  // Short delay to let render.js build the DOM first
  setTimeout(() => resetTimer(), 100);
});
