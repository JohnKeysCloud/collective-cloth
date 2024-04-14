import { createDialogController } from "../../utilities/displayStuff";

// 💭 --------------------------------------------------------------

export function getControllers() {
  let controllers = {};

  const responseModal = document.getElementById('response-dialog');
  controllers.responseModal = createDialogController(responseModal);

  // ? add more controllers here

  return controllers;
}