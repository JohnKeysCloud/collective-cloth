

// * CONTROLLERS
import { getControllers } from './js/meta/get-controllers.js';

// * HANDLERS
import { handleInitialDOMInteractivity } from './js/meta/handle-initial-dom-interactivity.js';

// * MARKUP
import { createDOM } from './js/meta/create-dom.js';

// * MODIFIERS
import { modifyDOM } from './js/meta/modify-dom.js';

// > --------------------------------------------------------------

let controllers;

function appInit() {
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
  controllers = getControllers();
}

// 💭 pressStart
appInit(); // 🚀

export { controllers };

// > --------------------------------------------------------------

// 💭 playGround ⤵️