// * ASSETS
import cycloneC from '../../assets/media/logos/images/animated/123px/2-c-white-matte.webp'

// * DATA
import navListData from '../../json/nav-links.json' with { type: 'json' };

// * MARKUP UTITLITIES
import { createNav } from '../../utilities/markdown/create-nav.js';
import { createImage } from '../../utilities/markdown/create-image.js';
import { createHamburger } from '../../utilities/markdown/create-hamburger/create-hamburger.js'

// > --------------------------------------------------------------

/**
 * Element Identifiers:
 * @logo <img> -> #header-logo.company-logo
 * @logoText <h1> -> #header-logo-text .company-name
 */

function createNavHeading() {
  const heading = document.createElement('h2');
  heading.setAttribute('id', 'nav-heading');
  heading.textContent = 'Main Menu';

  return heading;
}

export function createHeader() {
  const header = document.createElement('header');

  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('class', 'content-container');

  // src, id, classNames, alt, ariaLabel
  const logo = createImage(
    cycloneC,
    'header-logo',
    'company-logo',
    'Cyclone Studios Logo',
    'Cyclone Studios Logo',
    [ '123px', '123px' ]
  );

  const logoLink = document.createElement('a');
  logoLink.setAttribute('id', 'header-logo-link');
  logoLink.setAttribute('href', '/');
  logoLink.append(logo);

  const logoText = document.createElement('h4');
  logoText.setAttribute('id', 'header-logo-text');
  logoText.classList.add('company-name');
  logoText.setAttribute('aria-label', 'Collective Cloth');
  logoText.textContent = 'collective cloth';

  const headerLogoContainer = document.createElement('div'); 
  headerLogoContainer.setAttribute('id', 'header-logo-container');
  headerLogoContainer.append(logoLink, logoText);

  const hamburger = createHamburger('nav');

  const nav = createNav(navListData);
  nav.prepend(createNavHeading());

  contentContainer.append(
    headerLogoContainer,
    hamburger,
    nav
  );

  header.append(contentContainer);

  return header
}


