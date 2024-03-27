import {
  plusSlides,
  slideIndex,
  currentSlide,
  isSlideTransitioning
} from './carousel-logic.js';

// > --------------------------------------------------------------

function updateRootAnimationProperty(rootElement, direction) {
  if (direction === 'left') {
    rootElement.style.setProperty('--fade-in', 'var(--left-fade-in-animation)');
    rootElement.style.setProperty('--fade-out', 'var(--left-fade-out-animation)');
  } else if (direction === 'right') {
    rootElement.style.setProperty('--fade-in', 'var(--right-fade-in-animation)');
    rootElement.style.setProperty('--fade-out', 'var(--right-fade-out-animation)');
  }
}

function handleCarouselNavigationButtonClick(rootElement) {
  const carouselNavigationButtons = document.querySelectorAll('.carousel-navigation-button');

  carouselNavigationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('active')) return;
      if (isSlideTransitioning) return;

      const currentSlideIndex = slideIndex;

      currentSlide(index + 1);

      if (currentSlideIndex < slideIndex) {
        updateRootAnimationProperty(rootElement, 'right');
      } else if (currentSlideIndex > slideIndex) {
        updateRootAnimationProperty(rootElement, 'left');
      }
    });
  });
}

function handleCarouselArrowClick(rootElement) {
  const leftArrow = document.querySelector('.carousel-arrow.left-arrow');
  const rightArrow = document.querySelector('.carousel-arrow.right-arrow');

  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      if (isSlideTransitioning) return;
      const currentSlideIndex = slideIndex;

      plusSlides(-1);
      updateRootAnimationProperty(rootElement, 'left');

      if (currentSlideIndex <= slideIndex) {
        updateRootAnimationProperty(rootElement, 'right');
      }
    });
  }

  // Function to handle right arrow click
  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      if (isSlideTransitioning) return;
      const currentSlideIndex = slideIndex;

      plusSlides(1);
      updateRootAnimationProperty(rootElement, 'right');

      if (currentSlideIndex >= slideIndex) {
        updateRootAnimationProperty(rootElement, 'left');
      }
    });
  }
}

function handleCarousel() {
  const rootElement = document.documentElement;

  handleCarouselArrowClick(rootElement);
  handleCarouselNavigationButtonClick(rootElement);
}

export { handleCarousel };
