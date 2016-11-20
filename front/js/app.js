import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap';

require('../sass/main.scss');

// Init ScrollMagic Controller
const controller = new ScrollMagic.Controller({
  vertical: false,
});

// Create the Element Animation
const TrainElement = TweenMax.to(
  '.train', 1, {
    transform: 'translate3d(29048px,0,0)',
    ease: Linear.easeNone,
  }
);

// Build the Scene
const TrainScene = new ScrollMagic.Scene({
  triggerElement: '.bg',
  duration: 29048,
})
  .setTween(TrainElement)
  .addIndicators();

// Add Scenes to Controller
controller.addScene([
  TrainScene,
]);
