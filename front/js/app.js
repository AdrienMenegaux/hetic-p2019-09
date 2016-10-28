const ScrollReveal = require('scrollreveal');

// Documentation : https://github.com/jlmakes/scrollreveal

// Config for Reveal
const globalReveal = {
  reset: true,
};

const heroReveal = {
  scale: 1,
  viewOffset: { top: 150, right: 0, bottom: 0, left: 0 },
};

const fooReveal = {
  origin: 'right',
  distance: '200px',
  scale: 1,
  duration: 500,
  delay: 200,
};

window.sr = new ScrollReveal(globalReveal);
sr.reveal('.foo', fooReveal);
sr.reveal('.bar');
sr.reveal('.hero-title', heroReveal);
