import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap';

require('../sass/main.scss');

// Init ScrollMagic Controller
const controller = new ScrollMagic.Controller({
  vertical: false,
});

// When window is resized, get the width of BG
let bgWidth = 0;
window.onresize = function () {
  bgWidth = document.querySelector('.bg').offsetWidth;
  console.log(bgWidth);
};

// Create the Train Animation
const TrainElement = TweenMax.to(
  '.train', 1, {
    transform: 'translate3d(29948px,0,0)',
    ease: Linear.easeNone,
  }
);

// Build the Train Scene
const TrainScene = new ScrollMagic.Scene({
  triggerElement: '.bg',
  duration: 29048,
})
  .setTween(TrainElement)
  .addIndicators();

// Add All Scenes to Controller
controller.addScene([
  TrainScene,
]);
