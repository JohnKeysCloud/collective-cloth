let slideIndex = 1;
let isSlideTransitioning = false;

// ? Next/previous controls
function plusSlides(index) {
  showSlides(slideIndex += index);
}

// ? Thumbnail image controls
function currentSlide(index) {
  showSlides(slideIndex = index);
}

function setNewActiveSlide() {
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const carouselNavigationButtons = document.querySelectorAll(
    '.carousel-navigation-button'
  );

  carouselSlides[slideIndex - 1].classList.add('active');
  carouselNavigationButtons[slideIndex - 1].classList.add('active');
}

function deactivateCurrentNavigationButton() {
  const activeCarouselNavigationButton = document.querySelector('.carousel-navigation-button.active');
  activeCarouselNavigationButton.classList.remove('active');
}

function setDeactivatedSlideToDisplayNone(deactivatingCarouselSlide) {
  deactivatingCarouselSlide.classList.remove('deactivating', 'active');
  isSlideTransitioning = false;

  deactivatingCarouselSlide.removeEventListener('animationend', deactivatingCarouselSlide.setDeactivatedSlideToDisplayNoneRef);
}

function addSlideAnimationEndListener(deactivatingCarouselSlide) {
  deactivatingCarouselSlide.setDeactivatedSlideToDisplayNoneRef = function () {
    setDeactivatedSlideToDisplayNone(deactivatingCarouselSlide);
  };

  deactivatingCarouselSlide.addEventListener('animationend', deactivatingCarouselSlide.setDeactivatedSlideToDisplayNoneRef);
}

function deactivateCurrentSlide() {  
  const activeCarouselSlide = document.querySelector('.carousel-slide.active');
  activeCarouselSlide.classList.add('deactivating');
  isSlideTransitioning = true;

  addSlideAnimationEndListener(activeCarouselSlide);
}

function resetSlideIndex(carouselSlidesLength, index) {
  // ? reset to first slide if clicked on next from last slide
  if (index > carouselSlidesLength) {
    slideIndex = 1;
    return;
  }

  // ? reset to last slide if clicked on previous from first slide
  if (index < 1) {
    slideIndex = carouselSlidesLength;
    return;
  }
}

function showSlides(index) {
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const carouselNavigationButtons = document.querySelectorAll(
    '.carousel-navigation-button'
  );

  resetSlideIndex(carouselSlides.length, index);
  deactivateCurrentSlide();
  deactivateCurrentNavigationButton();
  setNewActiveSlide(carouselSlides, carouselNavigationButtons);
}

export { showSlides, plusSlides, currentSlide, slideIndex, isSlideTransitioning};