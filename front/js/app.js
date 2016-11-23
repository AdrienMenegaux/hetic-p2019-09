
<<<<<<< HEAD
require('../sass/main.scss');

document.querySelector('body').onmousewheel = function (event) {
  const delta=event.detail? event.detail*(-120) : event.wheelDelta; this.scrollLeft -= delta;
}

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
=======
// Build the Clouds Scene
const CloudsScene = new ScrollMagic.Scene({
>>>>>>> c6f08b33e450eff2d6734aefa865b97c4ce3bc01
  duration: TrainAnimationDuration,
})
  .setTween(Clouds)
  .addIndicators();

  CloudsScene,
  Snow,
  BackMoutainScene,
  FrontHousesScene,
  NotificationScene,
  SectionOneScene,
  SectionTwoScene,
]);
