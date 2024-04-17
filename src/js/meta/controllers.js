import { dsCreateDialogController } from "../../utilities/displayStuff";

// 💭 --------------------------------------------------------------

class ControlledElements {
  constructor() {
    this.elements = {};
  }

  getAllControlledElements() {
    return this.elements;
  }

  getControlledElement(id) {
    return this.elements[id].element;
  }

  getControlledElementController(id) {
    return this.elements[id].controller;
  }

  setControlledElement(id, element, controller) {
    if (!id) throw new Error('No id provided for controlled element.');
    if (!element) throw new Error('No element provided for controlled element.');
    if (!controller) throw new Error('No controller callback (class/factory) provided for controlled element.');

    if (!this.elements[id]) this.elements[id] = {};

    this.elements[id].element = element;
    this.elements[id].controller = controller;
  }
}

const projectControlledElements = new ControlledElements();

function attachControllers() {
  const responseModal = document.getElementById('response-dialog');
  projectControlledElements.setControlledElement('responseModal', responseModal, dsCreateDialogController(responseModal));

  // ? add more controlled elements here
}

window.addEventListener('load', attachControllers);

export {
  projectControlledElements
}