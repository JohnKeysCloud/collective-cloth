import {
  sectionObserver,
  paragraphObserver,
  startProcessButtonObserver,
} from './create-intersection-observers.js';

export function activateIntersectionObservers() {
  const sections = document.querySelectorAll('section');
  const paragraphs = document.querySelectorAll('p');
  const startProcessButton = document.getElementById('start-the-process-button');

  sections.forEach(section => sectionObserver.observe(section));
  paragraphs.forEach(paragraph => paragraphObserver.observe(paragraph));
  startProcessButtonObserver.observe(startProcessButton);
}