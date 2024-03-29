// * HANDLERS
// import { handleInitialDOMInteractivity } from './handlers/handle-initial-dom-interactivity.js';

// * MARKUP
// import { createDOM } from './markup/create-dom.js';

// * MODIFIERS
// import { modifyDOM } from './modifiers/modify-dom.js';

// * PROJECT_DEPENDENT_UTILITIES
// import { retrieveUserData } from './project-dependent-utilities/retrieve-user-data.js';

// *
import '../sass/main.scss';


// > --------------------------------------------------------------

function appInit() {
  retrieveUserData();
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
}

// appInit();

const content = document.getElementById('content');

import { createHeader } from './markup/header.js';
content.appendChild(createHeader());

import { handleNavToggleButton } from '../utilities/markdown/create-hamburger/handle-hamburger.js';
const navToggleButton = document.querySelector('.nav-toggle-button');
navToggleButton.addEventListener('click', handleNavToggleButton);

import { createCallToActionSection } from './markup/call-to-action.js';
content.appendChild(createCallToActionSection());

import connections from '../json/connections.json' with { type: 'json' };
import { createConnectionsSection } from './markup/connections.js';
content.appendChild(createConnectionsSection(connections));

import carouselImages from '../json/carousel-images.json' with { type: 'json' };
import { createWhoAreWeSection } from './markup/who-are-we.js';
content.appendChild(createWhoAreWeSection(carouselImages));
import { handleCarousel } from '../utilities/markdown/create-carousel/handle-carousel.js';
handleCarousel();

import instructions from '../json/instructions.json' with { type: 'json' };
import { createHowDoesItWorkSection } from './markup/how-does-it-work.js';
content.appendChild(createHowDoesItWorkSection(instructions));

import { createStartTheProcessSection } from './markup/start-the-process.js';
import form from '../json/form.json' with { type: 'json' };
content.appendChild(createStartTheProcessSection(form));

import companyInfo from '../json/company-info.json' with { type: 'json' };
import { createFooter } from './markup/footer.js';
content.appendChild(createFooter(companyInfo));

// > --------------------------------------------------------------

// ?  handle-navigation.js

const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
      // getBoundingClientRect() returns the size of an element and its position relative to the viewport
      // .top returns the distance from the top of the viewport to the top of the element
      // window.scrollY returns the number of pixels that the document has already been scrolled vertically from the top

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// > --------------------------------------------------------------

// ? handle-button-highlight.js

const startTheProcessNavLink = document.querySelector('.nav-link[href="#start-the-process"]');

function removeHighlightClass() {
  startTheProcessButton.classList.remove('highlight');
  startTheProcessButton.removeEventListener('animationend', removeHighlightClass);
}

// uses start process button from handle-dialog-buttons.js  
function addHighlightClass() {
  startTheProcessButton.classList.add('highlight');
  startTheProcessButton.addEventListener('animationend', removeHighlightClass);
}

startTheProcessNavLink.addEventListener('click', addHighlightClass);

// > --------------------------------------------------------------

// ? handle-dialog-buttons.js

//TODO: REFACTOR BELOW

const startTheProcessDialog = document.getElementById('start-the-process-dialog');
const closeDialogButton = document.getElementById('dialog-close-button');
const dialogButtonContainer = document.getElementById('dialog-button-container');
const stepNumber = document.getElementById('step-number');

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let formState = {
  currentFieldSet: 1,
}

function resetDialog() {
  const startTheProcessForm = document.getElementById('start-the-process-form');
  startTheProcessForm.reset();

  if (formState.currentFieldSet !== 1) {
    const currentFieldSet = document.querySelector(`[data-field-set="${formState.currentFieldSet}"]`);
    currentFieldSet.classList.remove('active');

    const fieldSetOne = document.getElementById('field-set-one');
    fieldSetOne.classList.add('active');

    formState.currentFieldSet = 1;
    stepNumber.textContent = `Step ${formState.currentFieldSet}`;
    previousButton.disabled = true;
    nextButton.disabled = false;
  }
}

function handleDialogButtons(e) {
  if (e.target.dataset.element !== 'button') return;

  const button = e.target;
  const previousButtonClicked = button.textContent === 'previous';
  const nextButtonClicked = button.textContent === 'next';

  if (nextButtonClicked) {
    const currentFieldSet = document.querySelector(`[data-field-set="${formState.currentFieldSet}"]`);
    currentFieldSet.classList.remove('active');
    formState.currentFieldSet += 1;
  } else if (previousButtonClicked) {
    const currentFieldSet = document.querySelector(`[data-field-set="${formState.currentFieldSet}"]`)
    currentFieldSet.classList.remove('active');
    formState.currentFieldSet -= 1;
  }

  if (formState.currentFieldSet === 1) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  if (formState.currentFieldSet === 3) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  stepNumber.textContent = `Step ${formState.currentFieldSet}`;

  const newCurrentFieldSet = document.querySelector(`[data-field-set="${formState.currentFieldSet}"]`);
  newCurrentFieldSet.classList.add('active');
}

function closeModal() {
  startTheProcessDialog.classList.remove('closing');
  startTheProcessDialog.removeEventListener('animationend', closeModal);
  startTheProcessDialog.close();

  toggleDialogTextAnimationClass();

  closeDialogButton.removeEventListener('click', initiateModalClose);
  resetDialog();
}

function initiateModalClose() {
  startTheProcessDialog.classList.add('closing');
  startTheProcessDialog.addEventListener('animationend', closeModal);
}

function toggleDialogTextAnimationClass() {
  const dialogSplitText = document.querySelectorAll('#dialog-heading .letter');

  if (dialogSplitText[0].classList.contains('animate-letter')) {
    dialogSplitText.forEach(letter => {
      letter.classList.remove('animate-letter');
    });
  } else {
    dialogSplitText.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('animate-letter');
      }, 123 * (index + 1));
    });
  }
}

function showModal() {
  startTheProcessDialog.showModal();

  const nameField = document.getElementById('name');
  if (nameField) nameField.focus();

  toggleDialogTextAnimationClass();

  closeDialogButton.addEventListener('click', initiateModalClose);
  dialogButtonContainer.addEventListener('click', handleDialogButtons);
}

const startTheProcessButton = document.getElementById('start-the-process-button');
startTheProcessButton.addEventListener('click', showModal);

// > --------------------------------------------------------------

// ? handleSelectPlaceholder.js

function handleSelectPlaceholder(e) {
  const select = e.target;
  const selectedOption = select.options[select.selectedIndex];

  if (selectedOption.disabled === true || selectedOption.value === '') return;

  select.classList.add('valid');

}

const selects = document.querySelectorAll('select');
selects.forEach(select => {
  select.addEventListener('change', handleSelectPlaceholder);
});

// > --------------------------------------------------------------

// ? handle-nav-post-click.js
function handleNavPostClick() {
  const navToggleButton = document.querySelector('.nav-toggle-button');
  navToggleButton.click();
}

// > --------------------------------------------------------------

// ? split-the-process-heading-text.js

import { createSplitTextFragment } from './special-effects/split-text.js';

function splitTheProcessHeadingText() {
  const dialogHeading = document.getElementById('dialog-heading');
  const dialogSplitText = createSplitTextFragment(dialogHeading, 'split-text');

  dialogHeading.textContent = '';

  dialogHeading.appendChild(dialogSplitText);
}
splitTheProcessHeadingText();

// > --------------------------------------------------------------

// ? handle-section-intersection.js

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

function toggleSectionIntersectingClass(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intersecting');
      // ? observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('intersecting');
    }
  });
}

let observer = new IntersectionObserver(toggleSectionIntersectingClass, sectionOptions);

const elements = document.querySelectorAll('section');

elements.forEach(element => {
  observer.observe(element);
});

// > --------------------------------------------------------------

// ? handle-paragraph-intersection.js 

let paragaphOptions = {
  threshold: 0.45,
};

function toggleParagraphIntersectingClass(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intersecting');
    } else {
      entry.target.classList.remove('intersecting');
    }
  });
}

let paragraphObserver = new IntersectionObserver(toggleParagraphIntersectingClass, paragaphOptions);

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(Paragraph => {
  paragraphObserver.observe(Paragraph);
});

// > --------------------------------------------------------------

// ? handle-start-process-intersection.js

let startProcessOptions = {
  threshold: 0.5,
};

function toggleStartProcessIntersectingClass(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intersecting');
    } else {
      entry.target.classList.remove('intersecting');
    }
  });
}

let startProcessButtonObserver = new IntersectionObserver(toggleStartProcessIntersectingClass, startProcessOptions);

const startProcessButton = document.getElementById('start-the-process-button');

startProcessButtonObserver.observe(startProcessButton);

// > --------------------------------------------------------------

// ? handle-screen-size-change.js

function handleNavLinkBehavior() {
  const root = document.documentElement;
  const viewportWidth = root.offsetWidth;

  const navToggleButton = document.querySelector('.nav-toggle-button');

  if (!navToggleButton) return;

  if (viewportWidth > 1024) {
    if (navToggleButton.ariaExpanded === 'true') navToggleButton.click();
    navToggleButton.removeEventListener('click', handleNavToggleButton);
    navLinks.forEach(navLink => navLink.removeEventListener('click', handleNavPostClick));
  } else {
    navToggleButton.addEventListener('click', handleNavToggleButton);
    navLinks.forEach(navLink => navLink.addEventListener('click', handleNavPostClick));
  }
}

window.addEventListener('load', handleNavLinkBehavior);
window.addEventListener('resize', handleNavLinkBehavior);

// > --------------------------------------------------------------

// ? the-process-form-validation.js

// function addValidationListener(element) {
//   const eventType = element.tagName === 'SELECT' ? 'change' : 'input';

//   element.addEventListener(eventType, function () {
//     const pattern = new RegExp(element.pattern);

//     if (pattern) {
//       const isValid = pattern.test(element.value.trim());
//       console.log(isValid); // For debugging

//       // Example of user-visible feedback
//       if (!isValid) {
//         element.classList.add('is-invalid'); // Add CSS class for styling
//         // Optionally, remove class when valid
//       } else {
//         element.classList.remove('is-invalid');
//       }
//     }
//   });
// }

// function validateFieldSet(fieldSet) {
//   const elements = fieldSet.querySelectorAll('input, select, textarea');
//   elements.forEach(element => {
//     addValidationListener(element);
//   });
// }

// const fieldSets = document.querySelectorAll('fieldset');
// fieldSets.forEach(fieldSet => {
//   validateFieldSet(fieldSet);
// });

