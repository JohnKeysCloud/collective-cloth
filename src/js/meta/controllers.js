import { controllers } from "../../app";

// 💭 --------------------------------------------------------------

export function getController(controllerName) {
  return controllers[controllerName];
}