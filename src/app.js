

// * CONTROLLERS
import { getControlledElements } from './js/meta/get-controllers.js';

// * HANDLERS
import { handleInitialDOMInteractivity } from './js/meta/handle-initial-dom-interactivity.js';

// * MARKUP
import { createDOM } from './js/meta/create-dom.js';

// * MODIFIERS
import { modifyDOM } from './js/meta/modify-dom.js';

// > --------------------------------------------------------------

let controlledElements;

function appInit() {
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
  controlledElements = getControlledElements();
}

// 💭 pressStart
appInit(); // 🚀

export { controlledElements };

// > --------------------------------------------------------------

// 💭 playGround ⤵️