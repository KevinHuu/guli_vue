/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/01.js":
/*!*******************!*\
  !*** ./src/01.js ***!
  \*******************/
/*! default exports */
/*! export info [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("exports.info = function(str){\r\n    document.write(str)\r\n}\n\n//# sourceURL=webpack://webpackdemo/./src/01.js?");

/***/ }),

/***/ "./src/02.js":
/*!*******************!*\
  !*** ./src/02.js ***!
  \*******************/
/*! default exports */
/*! export add [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("exports.add = function(a,b){\r\n    return a+b\r\n}\n\n//# sourceURL=webpack://webpackdemo/./src/02.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!*******************!*\
  !*** ./src/03.js ***!
  \*******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("const a=__webpack_require__(/*! ./01.js */ \"./src/01.js\")\r\nconst b = __webpack_require__(/*! ./02.js */ \"./src/02.js\")\r\n\r\na.info(\"Hello world\" + b.add(5+10))\n\n//# sourceURL=webpack://webpackdemo/./src/03.js?");
})();

/******/ })()
;