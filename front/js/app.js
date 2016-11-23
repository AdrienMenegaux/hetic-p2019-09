import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap';

require('../sass/main.scss');

// Color train windows
function NightModeTrigger()
{
  const windows = document.querySelectorAll('#window');
  for (var i = 0; i < windows.length; i++) {
    (function(i){
      setTimeout(function(){
        windows[i].style.fill = "#fef3d7";
      }, Math.random() * 3000);
    })(i);
  }
}
// NightModeTrigger();


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

// Create the Back Moutain Animation
const BackMountain = TweenMax.to(
  '.background__plan4', 1, {
    transform: 'translate3d(500vh,0,0)',
    ease: Linear.easeNone,
    transition: 'all 100ms',
  }
);

// Create the Back Moutain Animation
const FrontHouses = TweenMax.to(
  '.background__plan2', 1, {
    transform: 'translate3d(-300vh,0,0)',
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

// Build the Train Scene
const BackMoutainScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(BackMountain)
  .addIndicators({
    name: 'Back Moutain',
  });

// Build the Train Scene
const FrontHousesScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(FrontHouses)
  .addIndicators({
    name: 'Front House',
  });

// Night mode
const NightMode = new ScrollMagic.Scene({
  triggetElement: '.background__snow',
  triggerHook: 0.75,
  duration: '1000',
  // offset: '50%',
})
  .on('start', function() {NightModeTrigger();})
  .addIndicators({
    name: 'NightMode',
  });

// Build the Notification Scene
const NotificationScene = new ScrollMagic.Scene({
  triggerElement: '.notification',
  pushFollowers: true,
  duration: '3500vh',
})
  .setPin('.notification')
  .addIndicators({
    name: 'Notification',
  });

// Build the Scene One Scene
const SectionOneScene = new ScrollMagic.Scene({
  triggerElement: '.section-1-img',
  triggerHook: 0.25,
  duration: 2000,
  offset: '50%',
})
  .setPin('.section-1-img')
  .addIndicators({
    name: 'Section One',
  });

// Build the Scene Two Scene
const SectionTwoScene = new ScrollMagic.Scene({
  triggerElement: '.section-2-img',
  triggerHook: 0.25,
  duration: 2000,
  offset: '50%',
})
  .setPin('.section-2-img')
  .addIndicators({
    name: 'Section Two',
  });


// Add All Scenes to Controller
controller.addScene([
  TrainScene,
  BackMoutainScene,
  FrontHousesScene,
  NotificationScene,
  NightMode,
  SectionOneScene,
  SectionTwoScene,
]);
