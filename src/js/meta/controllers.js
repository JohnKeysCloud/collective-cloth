import { controllers } from "../../app";

// 💭 --------------------------------------------------------------

export function getController(controllerName) {
  return controllers.find(controller => controller.name === controllerName);
}