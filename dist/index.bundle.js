/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/markup/header.js":
/*!*********************************!*\
  !*** ./src/js/markup/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _json_nav_links_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../json/nav-links.json */ "./src/json/nav-links.json");

// import { createNav } from '.nav.js';

function createHeader() {
  var header = document.createElemment('header');
  var logo = documnet.createElement('img');
  logo.setAttribute('id', 'header-logo');
  logo.src = 'https://via.placeholder.com/150';
  logo.alt = 'Company Logo';
  logo.classList.add('company-logo');
  var logoText = document.createElement('h1');
  logoText.setAttribute('id', 'header-logo-text');
  logoText.classList.add('company-name');
  logoText.textContent = 'collective Cloth';
  var nav = createNav(_json_nav_links_json__WEBPACK_IMPORTED_MODULE_0__);

  // create hamburger menu

  header.append(logo, logoText, nav);
  return header;
}

/***/ }),

/***/ "./src/json/nav-links.json":
/*!*********************************!*\
  !*** ./src/json/nav-links.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"textContent":"home","href":"#top"},{"textContent":"who are we","href":"#who-are-we"},{"textContent":"how does it work","href":"#how-does-it-work"},{"textContent":"start the process","href":"#start-the-process"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markup_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup/header.js */ "./src/js/markup/header.js");
// * HANDLERS
// import { handleInitialDOMInteractivity } from './handlers/handle-initial-dom-interactivity.js';

// * MARKUP
// import { createDOM } from './markup/create-dom.js';

// * MODIFIERS
// import { modifyDOM } from './modifiers/modify-dom.js';

// * PROJECT_DEPENDENT_UTILITIES
// import { retrieveUserData } from './project-dependent-utilities/retrieve-user-data.js';

// > --------------------------------------------------------------

function appInit() {
  retrieveUserData();
  createDOM();
  modifyDOM();
  handleInitialDOMInteractivity();
}

// appInit();


var content = document.getElementById('content');
content.appendChild((0,_markup_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRTtBQUMxRTs7QUFFTyxTQUFTRSxZQUFZQSxDQUFBLEVBQUc7RUFDN0IsSUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7RUFFaEQsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUNGLElBQUksQ0FBQ0csWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7RUFDdENILElBQUksQ0FBQ0ksR0FBRyxHQUFHLGlDQUFpQztFQUM1Q0osSUFBSSxDQUFDSyxHQUFHLEdBQUcsY0FBYztFQUN6QkwsSUFBSSxDQUFDTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFbEMsSUFBTUMsUUFBUSxHQUFHVixRQUFRLENBQUNJLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDN0NNLFFBQVEsQ0FBQ0wsWUFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQztFQUMvQ0ssUUFBUSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDdENDLFFBQVEsQ0FBQ0MsV0FBVyxHQUFHLGtCQUFrQjtFQUV6QyxJQUFNQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ2pCLGlEQUFXLENBQUM7O0VBRWxDOztFQUVBRyxNQUFNLENBQUNlLE1BQU0sQ0FDWFosSUFBSSxFQUNKUSxRQUFRLEVBQ1JFLEdBQ0YsQ0FBQztFQUVELE9BQU9iLE1BQU07QUFDZjs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTZ0IsT0FBT0EsQ0FBQSxFQUFHO0VBQ2pCQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ2xCQyxTQUFTLENBQUMsQ0FBQztFQUNYQyxTQUFTLENBQUMsQ0FBQztFQUNYQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ2pDOztBQUVBOztBQUVrRDtBQUNsRCxJQUFNQyxPQUFPLEdBQUdwQixRQUFRLENBQUNxQixjQUFjLENBQUMsU0FBUyxDQUFDO0FBQ2xERCxPQUFPLENBQUNFLFdBQVcsQ0FBQ3hCLCtEQUFZLENBQUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsZWN0aXZlLWNsb3RoLy4vc3JjL2pzL21hcmt1cC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY29sbGVjdGl2ZS1jbG90aC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2xsZWN0aXZlLWNsb3RoL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2xsZWN0aXZlLWNsb3RoL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29sbGVjdGl2ZS1jbG90aC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbGxlY3RpdmUtY2xvdGgvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYXZMaXN0RGF0YSBmcm9tICcuLi8uLi9qc29uL25hdi1saW5rcy5qc29uJyB3aXRoIHsgdHlwZTogJ2pzb24nIH07XG4vLyBpbXBvcnQgeyBjcmVhdGVOYXYgfSBmcm9tICcubmF2LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbW1lbnQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bW5ldC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci1sb2dvJyk7XG4gIGxvZ28uc3JjID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnO1xuICBsb2dvLmFsdCA9ICdDb21wYW55IExvZ28nO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2NvbXBhbnktbG9nbycpO1xuXG4gIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbG9nb1RleHQuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItbG9nby10ZXh0Jyk7XG4gIGxvZ29UZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbXBhbnktbmFtZScpO1xuICBsb2dvVGV4dC50ZXh0Q29udGVudCA9ICdjb2xsZWN0aXZlIENsb3RoJztcblxuICBjb25zdCBuYXYgPSBjcmVhdGVOYXYobmF2TGlzdERhdGEpO1xuXG4gIC8vIGNyZWF0ZSBoYW1idXJnZXIgbWVudVxuXG4gIGhlYWRlci5hcHBlbmQoXG4gICAgbG9nbyxcbiAgICBsb2dvVGV4dCxcbiAgICBuYXZcbiAgKTtcblxuICByZXR1cm4gaGVhZGVyXG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyAqIEhBTkRMRVJTXG4vLyBpbXBvcnQgeyBoYW5kbGVJbml0aWFsRE9NSW50ZXJhY3Rpdml0eSB9IGZyb20gJy4vaGFuZGxlcnMvaGFuZGxlLWluaXRpYWwtZG9tLWludGVyYWN0aXZpdHkuanMnO1xuXG4vLyAqIE1BUktVUFxuLy8gaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSAnLi9tYXJrdXAvY3JlYXRlLWRvbS5qcyc7XG5cbi8vICogTU9ESUZJRVJTXG4vLyBpbXBvcnQgeyBtb2RpZnlET00gfSBmcm9tICcuL21vZGlmaWVycy9tb2RpZnktZG9tLmpzJztcblxuLy8gKiBQUk9KRUNUX0RFUEVOREVOVF9VVElMSVRJRVNcbi8vIGltcG9ydCB7IHJldHJpZXZlVXNlckRhdGEgfSBmcm9tICcuL3Byb2plY3QtZGVwZW5kZW50LXV0aWxpdGllcy9yZXRyaWV2ZS11c2VyLWRhdGEuanMnO1xuXG4vLyA+IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFwcEluaXQoKSB7XG4gIHJldHJpZXZlVXNlckRhdGEoKTtcbiAgY3JlYXRlRE9NKCk7XG4gIG1vZGlmeURPTSgpO1xuICBoYW5kbGVJbml0aWFsRE9NSW50ZXJhY3Rpdml0eSgpO1xufVxuXG4vLyBhcHBJbml0KCk7XG5cbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vbWFya3VwL2hlYWRlci5qcyc7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuIl0sIm5hbWVzIjpbIm5hdkxpc3REYXRhIiwidHlwZSIsImNyZWF0ZUhlYWRlciIsImhlYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbW1lbnQiLCJsb2dvIiwiZG9jdW1uZXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3JjIiwiYWx0IiwiY2xhc3NMaXN0IiwiYWRkIiwibG9nb1RleHQiLCJ0ZXh0Q29udGVudCIsIm5hdiIsImNyZWF0ZU5hdiIsImFwcGVuZCIsImFwcEluaXQiLCJyZXRyaWV2ZVVzZXJEYXRhIiwiY3JlYXRlRE9NIiwibW9kaWZ5RE9NIiwiaGFuZGxlSW5pdGlhbERPTUludGVyYWN0aXZpdHkiLCJjb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=