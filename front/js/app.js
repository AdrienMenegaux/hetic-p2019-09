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
const NotificationAnimationDuration = browserHeight * 2;
const BubbleOneAnimationDuration = browserHeight * 12.5;
const BubbleTwoAnimationDuration = browserHeight * 10;
const BubbleTreeAnimationDuration = browserHeight * 6.5;
const BubbleFourAnimationDuration = browserHeight * 4;

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
    transform: 'translate3d(2150vh,48vh,0)',
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

// Build the Sun Scene
const CloudsScene = new ScrollMagic.Scene({
  duration: SunAnimationDuration,
})
  .setTween(Clouds)
  .addIndicators({
    name: 'Clouds',
  });

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
  duration: NotificationAnimationDuration,
  offset: document.querySelector('.notification').offsetWidth / 2,
})
  .setPin('.notification')
  .addIndicators({
    name: 'Notification',
  });

// Build the Bubble One Scene
const BubbleSceneOne = new ScrollMagic.Scene({
  triggerElement: '.bubble_one',
  duration: BubbleOneAnimationDuration,
  offset: document.querySelector('.bubble_one').offsetWidth / 2,
})
  .setPin('.bubble_one')
  .addIndicators({
    name: 'Bubble 1',
  });

// Build the Bubble Two Scene
const BubbleSceneTwo = new ScrollMagic.Scene({
  triggerElement: '.bubble_two',
  triggerHook: 0.25,
  duration: BubbleTwoAnimationDuration,
})
  .setPin('.bubble_two')
  .addIndicators({
    name: 'Bubble 2',
  });

// Build the Bubble Tree Scene
const BubbleSceneTree = new ScrollMagic.Scene({
  triggerElement: '.bubble_tree',
  duration: BubbleTreeAnimationDuration,
  offset: document.querySelector('.bubble_tree').offsetWidth / 2,
})
  .on('start', function () {
    console.log('%c En fait, ils vont dans les toilettes ... 😱 🍑 ', 'color: #bada55');
  })
  .setPin('.bubble_tree')
  .addIndicators({
    name: 'Bubble 3',
  });

// Build the Bubble Four Scene
const BubbleSceneFour = new ScrollMagic.Scene({
  triggerElement: '.bubble_four',
  triggerHook: 0.25,
  duration: BubbleFourAnimationDuration,
})
  .setPin('.bubble_four')
  .addIndicators({
    name: 'Bubble 4',
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

  BubbleSceneOne,
  BubbleSceneTwo,
  BubbleSceneTree,
  BubbleSceneFour,

  SectionOneScene,
  SectionTwoScene,
]);
