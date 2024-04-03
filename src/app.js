// * HANDLERS
import { handleInitialDOMInteractivity } from './js/meta/handle-initial-dom-interactivity.js';

// * MARKUP
import { createDOM } from './js/meta/create-dom.js';

// * MODIFIERS
import { modifyDOM } from './js/meta/modify-dom.js';

// > --------------------------------------------------------------

function appInit() {
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
}

appInit();

// > --------------------------------------------------------------

// 💭 playGround

const fuck = document.getElementById('start-the-process-form');
fuck.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(fuck);
  const formObject = Object.fromEntries(formData);
  console.log(formObject);
});