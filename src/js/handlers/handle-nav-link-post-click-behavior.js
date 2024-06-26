import { handleNavToggleButton } from "../../components/create-hamburger/handle-hamburger.js";

// > --------------------------------------------------------------

function handleNavPostClick() {
  const navToggleButton = document.querySelector('.nav-toggle-button');
  navToggleButton.click();
}

export function handleNavLinkPostClick() {
  const root = document.documentElement;
  const viewportWidth = root.offsetWidth;

  const navToggleButton = document.querySelector('.nav-toggle-button');
  const navLinks = document.querySelectorAll('.nav-link');

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