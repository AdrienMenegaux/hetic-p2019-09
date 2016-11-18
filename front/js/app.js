import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap';

require('../sass/main.scss');

// Init Controller
const controller = new ScrollMagic.Controller({
  vertical: false,
});

// Build the Tween
const tween = [
  TweenMax
  .to('#title', 1, { // the statut on end trigger // A QUOI SERT LE 10
    left: '+=200',
  }),
  TweenMax
  .to('#target', 1, { // the statut on end trigger // A QUOI SERT LE 10
    height: '80vh',
  }),
];
// Build the Scene
const scene = new ScrollMagic.Scene({
  triggerElement: '#title2', // Start Trigger
  duration: 300, // Distance between start and end
})
  .setTween(tween)
  .addIndicators()
  .addTo(controller);
