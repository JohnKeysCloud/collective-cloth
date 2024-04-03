// * UTILITIES
import { checkTargetElementExistence } from '../../utilities/check-target-element-existence.js';

// > ---------------------------------------------------

const navState = {
  animating: false,
};

function toggleNavVisibility(isNavToggleActive) {
  const nav = checkTargetElementExistence('nav');

  if (!isNavToggleActive) {
    nav.classList.add('expanded');
    navState.animating = true;
  } else if (isNavToggleActive) {
    nav.classList.remove('expanded');
    navState.animating = false;
  }
}

function handleNavToggleButton() {
  const navToggleButton = checkTargetElementExistence('.nav-toggle-button');
  const isNavToggleActive = navToggleButton.classList.contains('active');

  if (!isNavToggleActive) {
    if (navState.animating === true) return;

    navToggleButton.classList.add('active');

    navToggleButton.setAttribute('aria-label', 'Close Navigation Menu');
    navToggleButton.setAttribute('aria-expanded', true);

    toggleNavVisibility(isNavToggleActive);

  } else {
    navToggleButton.classList.remove('active');

    navToggleButton.setAttribute('aria-label', 'Open Navigation Menu');
    navToggleButton.setAttribute('aria-expanded', false);

    toggleNavVisibility(isNavToggleActive);
  }

  navToggleButton.addEventListener('click', handleNavToggleButton);
}

export { handleNavToggleButton };
