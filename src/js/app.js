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
// > --------------------------------------------------------------
// > --------------------------------------------------------------

// ? handle-initial-dom-interactivity.js

import { showProcessModal } from './handlers/handle-process-modal.js';
const startTheProcessButton = document.getElementById('start-the-process-button');
startTheProcessButton.addEventListener('click', showProcessModal);

import { handleSelectPlaceholder } from './handlers/handle-select-placeholder.js';
const selects = document.querySelectorAll('select');
selects.forEach(select => {
  select.addEventListener('change', handleSelectPlaceholder);
});

import { splitTheProcessHeadingText } from './handlers/split-the-process-heading-text.js';
splitTheProcessHeadingText();

import { activateIntersectionObservers } from './handlers/activate-intersection-observers.js';
activateIntersectionObservers();

import { handleNavLinkBehavior } from './handlers/handle-nav-link-behavior.js';
window.addEventListener('load', handleNavLinkBehavior);
window.addEventListener('resize', handleNavLinkBehavior);

import { sanitizeTelephoneInput } from './handlers/sanitize-telephone-input.js';
sanitizeTelephoneInput();