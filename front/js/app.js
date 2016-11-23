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

// Convert the duration for the Elements Animation
const TrainAnimationDuration = browserHeight * 31.1;
const SunAnimationDuration = browserHeight * 20;

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

// Create the Sun Animation
const Sun = TweenMax.to(
  '.background__sun', 1, {
    transform: 'translate3d(2150vh,50vh,0)',
    ease: Linear.easeNone,
    transition: 'all 100ms',
  }
);

// Create the Sun Animation
const Clouds = TweenMax.to(
  '.background__clouds', 1, {
    transform: 'translate3d(890vh,0,0)',
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

// Build the Sun Scene
const SunScene = new ScrollMagic.Scene({
  duration: SunAnimationDuration,
})
  .setTween(Sun)
  .addIndicators({
    name: 'Sun',
  });

// Build the Clouds Scene
const CloudsScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(Clouds)
  .addIndicators();

// Build the BackMountain Scene
const BackMoutainScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(BackMountain)
  .addIndicators({
    name: 'Back Moutain',
  });

// Build the FrontHouse Scene
const FrontHousesScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(FrontHouses)
  .addIndicators({
    name: 'Front House',
  });


// Build the Notification Scene
const Snow = new ScrollMagic.Scene({
  triggerElement: '.background__snow',
  offset: '-500vh',
})
  .on('start', function () {
    const windows = document.querySelectorAll('#window');
    for (let i = 0; i < windows.length; i += 1) {
      (function (i) {
        setTimeout(function () {
          windows[i].style.fill = '#fef3d7';
        }, Math.random() * 500);
      })(i);
    }
  })
  .addIndicators({
    name: 'Mountain',
  });

// Build the Notification Scene
const NotificationScene = new ScrollMagic.Scene({
  triggerElement: '.notification',
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
  SunScene,
  CloudsScene,
  Snow,
  BackMoutainScene,
  FrontHousesScene,
  NotificationScene,
  SectionOneScene,
  SectionTwoScene,
]);
