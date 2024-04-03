import { handleTargetScroll } from '../handlers/handle-target-scroll-behavior.js';
import { handleNavToggleButton } from '../../components/create-hamburger/handle-hamburger.js';
import { handleCarousel } from '../../components/create-carousel/handle-carousel.js';
import { showProcessModal } from '../handlers/handle-process-modal.js';
import { activateIntersectionObservers } from '../handlers/handle-intersection-observers.js';
import { handleNavLinkPostClick } from '../handlers/handle-nav-link-post-click-behavior.js';
import { addNavLinkHighlightClass } from '../handlers/handle-highlight-start-process-nav-link.js';

// > --------------------------------------------------------------

export function handleInitialDOMInteractivity() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((anchor) => {
    anchor.addEventListener('click', handleTargetScroll);
  });

  const navToggleButton = document.querySelector('.nav-toggle-button');
  navToggleButton.addEventListener('click', handleNavToggleButton);

  const startTheProcessButton = document.getElementById('start-the-process-button');
  startTheProcessButton.addEventListener('click', showProcessModal);

  const startTheProcessNavLink = document.querySelector('.nav-link[href="#start-the-process"]');
  startTheProcessNavLink.addEventListener('click', addNavLinkHighlightClass);
  
  window.addEventListener('load', handleNavLinkPostClick);
  window.addEventListener('resize', handleNavLinkPostClick);
  
  handleCarousel();
  activateIntersectionObservers();
}