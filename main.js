/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n\nvar dropdown = [{\n  label: \"1  Device, 1 Year\",\n  integer: 27,\n  float: \".99\",\n  id: \"0\"\n}, {\n  label: \"1 Device, 2 Years\",\n  integer: 43,\n  float: \".99\",\n  id: \"1\"\n}, {\n  label: \"3 Devices, 1 Year\",\n  integer: 35,\n  float: \".99\",\n  id: \"2\"\n}, {\n  label: \"3 Devices, 2 Years\",\n  integer: 63,\n  float: \".99\",\n  id: \"3\"\n}, {\n  label: \"5 Devices, 1 Year\",\n  integer: 43,\n  float: \".99\",\n  id: \"4\"\n}, {\n  label: \"5 Devices, 2 Years\",\n  integer: 71,\n  float: \".99\",\n  id: \"5\"\n}];\nvar defaultItem = 2;\nvar offer = document.querySelector(\".offer\");\nvar buttonChoice = offer.querySelector(\".offer__button-icon\");\nvar header = document.querySelector(\".header\");\nvar lastScrollTop = 0;\nwindow.addEventListener(\"scroll\", function () {\n  var st = window.pageYOffset || document.documentElement.scrollTop;\n\n  if (st > lastScrollTop) {\n    header.style.display = \"none\";\n  } else {\n    header.style.display = \"flex\";\n  }\n\n  lastScrollTop = st <= 0 ? 0 : st;\n}, false);\n\nvar handlePrices = function handlePrices(itemId) {\n  buttonChoice.querySelector(\".offer__button-text\").textContent = dropdown[itemId].label;\n  offer.querySelector(\".offer__price\").querySelector(\"p\").textContent = dropdown[itemId].integer;\n  offer.querySelector(\".offer__price\").querySelector(\"span\").textContent = dropdown[itemId].float;\n  offer.querySelector(\".offer__old-price\").querySelector(\"p\").textContent = dropdown[itemId].integer - 1;\n  offer.querySelector(\".offer__old-price\").querySelector(\"span\").textContent = dropdown[itemId].float;\n};\n\nhandlePrices(defaultItem);\n\nvar openDropdown = function openDropdown() {\n  buttonChoice.classList.add(\"open\");\n};\n\nvar closeDropdown = function closeDropdown() {\n  buttonChoice.classList.remove(\"open\");\n};\n\nvar selectPoint = function selectPoint(id) {\n  var item = dropdown.find(function (i) {\n    return i.id === id;\n  }).id;\n  handlePrices(item);\n  closeDropdown();\n};\n\nbuttonChoice.addEventListener(\"click\", function (event) {\n  buttonChoice.classList.contains(\"open\") ? closeDropdown() : openDropdown();\n\n  if (event.target.tagName.toLowerCase() === \"li\") {\n    selectPoint(event.target.dataset.id);\n  }\n});\nvar itemsHTML = dropdown.map(function (i) {\n  return \"<li data-id=\\\"\".concat(i.id, \"\\\" >\").concat(i.label, \" \\xA3\").concat(i.integer).concat(i.float, \"</li>\");\n}).join(\" \");\nbuttonChoice.querySelector(\".offer__menu\").insertAdjacentHTML(\"afterbegin\", itemsHTML);\n\n//# sourceURL=webpack://kaspersky/./src/pages/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kaspersky/./src/pages/index.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;