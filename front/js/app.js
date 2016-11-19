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
  .to('.train', 1, {
    transform: 'translate3d(29048px,0,0)',
    ease: Power0.easeNone,
  }),
];

// Build the Scene
const scene = new ScrollMagic.Scene({
  triggerElement: '.bg', // Start Trigger
  duration: 29048, // Distance between start and end
})
  .setTween(tween)
  .addIndicators()
  .addTo(controller);
