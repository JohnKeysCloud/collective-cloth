import './carousel.scss';

import { setAttributes } from '../../../utilities/set-attributes.js';

// > --------------------------------------------------------------

function createCarouselNavigationContainer(imagesArray) {
  if (!imagesArray.length) throw new Error('No images provided for carousel.');

  const carouselNavigationButtonContainer = document.createElement('div');
  carouselNavigationButtonContainer.classList.add(
    'carousel-navigation-button-container'
  );

  imagesArray.forEach((image, index) => {
    const carouselNavigationButton = document.createElement('button');
    carouselNavigationButton.classList.add('carousel-navigation-button');
    if (index === 0) carouselNavigationButton.classList.add('active');
    setAttributes(carouselNavigationButton, {
      type: 'button',
      'aria-label': `Go to slide ${index + 1}`,
      'data-index': index + 1,
    });

    carouselNavigationButtonContainer.append(carouselNavigationButton);
  });

  const carouselNavigationContainer = document.createElement('div');
  carouselNavigationContainer.classList.add('carousel-navigation-container');
  carouselNavigationContainer.appendChild(carouselNavigationButtonContainer);

  return carouselNavigationContainer;
}

function createCarouselSlideContainer(imagesArray) {
  if (!imagesArray || !imagesArray.length) throw new Error('No images provided for carousel.');

  const carouselSlideContainer = document.createElement('div');
  carouselSlideContainer.classList.add('carousel-slide-container');

  imagesArray.forEach((image, index) => {
    const imageFigcaptionElement = document.createElement('figcaption');
    imageFigcaptionElement.classList.add('carousel-image-caption');
    imageFigcaptionElement.textContent = image.alt;

    const imageElement = document.createElement('img');
    imageElement.classList.add('carousel-image', 'non-interactive');
    setAttributes(imageElement, {
      src: image.src,
      alt: image.alt,
    });

    const imageIndexSpanElement = document.createElement('span');
    imageIndexSpanElement.classList.add('carousel-image-index');
    imageIndexSpanElement.textContent = `${ index + 1 }/${ imagesArray.length }`;

    const imageFigureElement = document.createElement('figure');
    imageFigureElement.classList.add('carousel-image-container');
    imageFigureElement.append(
      imageIndexSpanElement,
      imageElement,
      imageFigcaptionElement
    );

    const carouselSlide = document.createElement('div');
    carouselSlide.classList.add('carousel-slide');
    if (index === 0) carouselSlide.classList.add('active');
    carouselSlide.setAttribute('data-index', index + 1);
    carouselSlide.append(imageFigureElement);
  
    carouselSlideContainer.append(carouselSlide);
  });

  return carouselSlideContainer;
}

function createCarouselContainer(imagesArray) {
  const rightArrow = document.createElement('button');
  rightArrow.classList.add('arrow', 'right-arrow', 'carousel-arrow');
  setAttributes(rightArrow, {
    type: 'button',
    'aria-label': 'Next',
  });

  const carouselSlides = createCarouselSlideContainer(imagesArray);

  const leftArrow = document.createElement('button');
  leftArrow.classList.add('arrow', 'left-arrow', 'carousel-arrow');
  setAttributes(leftArrow, {
    type: 'button',
    'aria-label': 'Previous',
  });

  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-container');
  carouselContainer.append(leftArrow, carouselSlides, rightArrow);

  return carouselContainer;
}

function createCarousel(imagesArray) {
  const carousel = document.createElement('figure');
  carousel.classList.add('carousel');

  const carouselContainer = createCarouselContainer(imagesArray);
  const carouselNavigationContainer =
    createCarouselNavigationContainer(imagesArray);

  carousel.append(carouselContainer, carouselNavigationContainer);

  return carousel;
}

export { createCarousel };