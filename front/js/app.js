import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap';

require('../sass/main.scss');

// Init ScrollMagic Controller
const controller = new ScrollMagic.Controller({
  vertical: false,
});

// Get Height of Browser
const browserHeight = window.innerHeight;

// Convert the duration for Train Animation
const TrainAnimationDuration = browserHeight * 31.1;

// Reload all Data when browserHeight change
window.onresize = function () {
  location.reload();
};

// Create the Train Animation
const TrainElement = TweenMax.to(
  '.train', 1, {
    transform: 'translate3d(3290vh,0,0)',
    ease: Linear.easeNone,
    transition: 'all 100ms',
  }
);

// Build the Train Scene
const TrainScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(TrainElement)
  .addIndicators();

// Build the Scene One Scene
const SectionOneScene = new ScrollMagic.Scene({
  triggerElement: '.section-1-img',
  triggerHook: 0.25,
  duration: 2000,
  offset: '50%',
})
  .setPin('.section-1-img')
  .addIndicators();

// Build the Scene Two Scene
const SectionTwoScene = new ScrollMagic.Scene({
  triggerElement: '.section-2-img',
  triggerHook: 0.25,
  duration: 2000,
  offset: '50%',
})
  .setPin('.section-2-img')
  .addIndicators();


// Add All Scenes to Controller
controller.addScene([
  TrainScene,
  SectionOneScene,
  SectionTwoScene,
]);
