import ScrollMagic from 'scrollmagic';
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
const BubbleTwoAnimationDuration = browserHeight * 9.42;
const BubbleTreeAnimationDuration = browserHeight * 6.5;
const BubbleFourAnimationDuration = browserHeight * 3.3;
const SectionAnimationDuration = browserHeight * 1.2;

// Reload all Data when browserHeight change
// window.onresize = function () {
//   location.reload();
// };

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
  .setTween(TrainElement);

// Build the Sun Scene
const SunScene = new ScrollMagic.Scene({
  duration: SunAnimationDuration,
})
  .setTween(Sun);

// Build the Sun Scene
const CloudsScene = new ScrollMagic.Scene({
  duration: SunAnimationDuration,
})
  .setTween(Clouds);

// Build the BackMountain Scene
const BackMoutainScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(BackMountain);

// Build the FrontHouse Scene
const FrontHousesScene = new ScrollMagic.Scene({
  duration: TrainAnimationDuration,
})
  .setTween(FrontHouses);


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
  });

// Build the Notification Scene
const NotificationScene = new ScrollMagic.Scene({
  triggerElement: '.notification',
  duration: NotificationAnimationDuration,
  offset: document.querySelector('.notification').offsetWidth / 2,
})
  .setPin('.notification');

// Build the Bubble One Scene
const BubbleSceneOne = new ScrollMagic.Scene({
  triggerElement: '.bubble_one',
  duration: BubbleOneAnimationDuration,
  offset: document.querySelector('.bubble_one').offsetWidth / 2,
})
  .setPin('.bubble_one');

// Build the Bubble Two Scene
const BubbleSceneTwo = new ScrollMagic.Scene({
  triggerElement: '.bubble_two',
  triggerHook: 0.25,
  duration: BubbleTwoAnimationDuration,
})
  .setPin('.bubble_two');

// Build the Bubble Tree Scene
const BubbleSceneTree = new ScrollMagic.Scene({
  triggerElement: '.bubble_tree',
  duration: BubbleTreeAnimationDuration,
  offset: document.querySelector('.bubble_tree').offsetWidth / 2,
})
  .on('start', function () {
    console.log('%c En fait, ils vont dans les toilettes ... 😱 🍑 ', 'color: red');
  })
  .setPin('.bubble_tree');

// Build the Bubble Four Scene
const BubbleSceneFour = new ScrollMagic.Scene({
  triggerElement: '.bubble_four',
  triggerHook: 0.25,
  duration: BubbleFourAnimationDuration,
})
  .setPin('.bubble_four');

// Animation for Section 1
const SectionOneScene = new ScrollMagic.Scene({
  triggerElement: '.sectionOne',
  offset: document.querySelector('.sectionOne').offsetWidth / 2,
  duration: SectionAnimationDuration,
})
  .setPin('.sectionOne');

// Animation for Section 2
const SectionTwoScene = new ScrollMagic.Scene({
  triggerElement: '.sectionTwo',
  offset: document.querySelector('.sectionTwo').offsetWidth / 2,
  duration: SectionAnimationDuration,
})
  .setPin('.sectionTwo');

// Animation for Section 3
const SectionTreeScene = new ScrollMagic.Scene({
  triggerElement: '.sectionTree',
  offset: document.querySelector('.sectionTree').offsetWidth / 2,
  duration: SectionAnimationDuration,
})
  .setPin('.sectionTree');

// Animation for Section 4
const SectionFourScene = new ScrollMagic.Scene({
  triggerElement: '.sectionFour',
  offset: document.querySelector('.sectionFour').offsetWidth / 2,
  duration: SectionAnimationDuration,
})
  .setPin('.sectionFour');


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
  SectionTreeScene,
  SectionFourScene,
]);
