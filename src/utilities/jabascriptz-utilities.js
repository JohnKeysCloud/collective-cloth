export const getElement = (selector, scope = document) => scope.querySelector(selector);
export const getAllElements = (selector, scope = document) => scope.querySelectorAll(selector);
export const addListener = (element, event, handler) => element.addEventListener(event, handler);
export const removeListener = (element, event, handler) => element.removeEventListener(event, handler);
export const toggleClass = (element, action, className) => element.classList[action](className);
export const setDisabledState = (element, state) => element.disabled = state;
