import { createDialogController } from "../../utilities/displayStuff";

// 💭 --------------------------------------------------------------

export function getControlledElements() {
  let controlledElements = {};

  const responseModal = document.getElementById('response-dialog');
  controlledElements.responseModal = {
    element: responseModal,
    controller: createDialogController(responseModal)
  };

  // ? add more controlled elements here

  return controlledElements;
}