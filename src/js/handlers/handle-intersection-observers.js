function toggleIsIntersectingClass(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intersecting');
    } else {
      entry.target.classList.remove('intersecting');
    }
  });
}

let sectionOptions = {
  threshold: 0.45,
  // root: (VIEWPORT by default. NOT root element), // ? default is the viewport


  // > --------------------------------------------------------------
  // > Examples:

  // 💭 Best for animating elements into view or if its crucial that an element is only visible if it is fully in view (relative to the root)… threshold of 1.0 enables that. Perhaps the content needs to meet such a critera before any other action can take place. 
  // 💭 Can be used WITH rootMargin to delay the animation.
  // 💭 You might want to know exactly when an element is fully visible versus partially for analytical purposes. Using an array of thresholds like [0, 0.5, 1] lets you trigger the callback at no visibility (0), half visibility (0.5), and full visibility (1).

  // * threshold: 0.5,
  // ? when 50% of the element is in view, the callback function will be called

  // > --------------------------------------------------------------

  // 💭 Best for pre-loading content,lazy loading images or avoiding abrupt transitions
  // 💭 Can be used WITH threshold to load first load the content with rootMargin, and handling
  // 💭 its animation with threshold.

  // * rootMargin: '-100px',
  // ? we are subtracting 100px from the viewport
  // ? the callback function will be called when the element is 100px from the viewport
  // * rootMargin: `${positiveNumber}px`,
  // ? we are adding positiveNumber to the viewport
  // ? the callback function will be called when the element is positiveNumber from the viewport
  // ? useful for lazy loading images
  // ? "when our image is 250px away from the viewport, load the image"
  // > --------------------------------------------------------------

  // * root: document.querySelector('.card-container'),
  // ? parent element of the element we are observing (the element we are observing is the child)
  // ? we are observing the child element in relation to the parent element
  // ? The default is the viewport (Document.documentElement)
};
const sectionObserver = new IntersectionObserver(toggleIsIntersectingClass, sectionOptions);


let paragaphOptions = {
  threshold: 0.45,
};
const paragraphObserver = new IntersectionObserver(toggleIsIntersectingClass, paragaphOptions);

// > --------------------------------------------------------------

let startProcessOptions = {
  threshold: 0.5,
};
const startProcessButtonObserver = new IntersectionObserver(toggleIsIntersectingClass, startProcessOptions);

// > --------------------------------------------------------------

export function activateIntersectionObservers() {
  const sections = document.querySelectorAll('section');
  const paragraphs = document.querySelectorAll('p');
  const startProcessButton = document.getElementById('start-the-process-button');

  sections.forEach(section => sectionObserver.observe(section));
  paragraphs.forEach(paragraph => paragraphObserver.observe(paragraph));
  startProcessButtonObserver.observe(startProcessButton);
}