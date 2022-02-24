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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validationForm */ \"./modules/validationForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// helpers();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('26 februar 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validationForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst helpers =  {\r\n\r\n  animate({timing, draw, duration}) {\r\n\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n  \r\n    });\r\n  },\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helpers);\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu'),\r\n    menu = document.querySelector('menu'),\r\n    closeBtn = menu.querySelector('.close-btn'),\r\n    menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  }\r\n\r\n  menuBtn.addEventListener('click',  handleMenu);\r\n\r\n  closeBtn.addEventListener('click', handleMenu);\r\n\r\n  menuItems.forEach(element => element.addEventListener('click', handleMenu));\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\nconst modal = () => {\r\n  const buttons = document.querySelectorAll('.popup-btn'),\r\n    modal = document.querySelector('.popup'),\r\n    modalContent = document.querySelector('.popup-content'),\r\n    modalClose = modal.querySelector('.popup-close');\r\n\r\n  const modalOpenAnimation = (duration) => {\r\n   _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].animate({\r\n    duration: duration,\r\n    timing: function linear(timeFraction) {\r\n      return timeFraction;\r\n    },\r\n    draw: function(progress) {\r\n      modal.style.opacity = progress ;\r\n      modalContent.style.opacity = 0;\r\n    }\r\n  },  setTimeout(() => {\r\n        _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"].animate({\r\n\r\n          duration: duration,\r\n          timing: function linear(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n\r\n          draw: function(progress) {\r\n            modalContent.style.opacity = progress  ;\r\n          }\r\n        })\r\n  }, duration));\r\n\r\n  }\r\n\r\n \r\n\r\n// Открытие модального окна\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      if (screen.availWidth >= 768) modalOpenAnimation(300);\r\n      modal.style.display = 'block';\r\n    })\r\n  })\r\n\r\n// Закрытие модального окна\r\n  modalClose.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    modal.style.opacity = ``;\r\n    modalContent.style.opacity = ``;\r\n  })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const links = document.querySelectorAll('ul>li>a'),\r\n    linkFullSpecifications = document.querySelector('main > a');\r\n\r\n  const newArray = [...links, linkFullSpecifications];\r\n\r\n  newArray.forEach( (element)  => {\r\n\r\n    element.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n\r\n      const id = element.getAttribute('href').substring(1)\r\n      const section = document.getElementById(id);\r\n\r\n       section.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n    })\r\n\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n  const timerDays = document.getElementById('timer-days'),\r\n    timerHours = document.getElementById('timer-hours'),\r\n    timerMinutesours = document.getElementById('timer-minutes'),\r\n    timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const addZero = (num) => {\r\n      if (num <= 9) {\r\n          return '0' + num;\r\n      } else {\r\n          return num;\r\n      }\r\n  };\r\n\r\n  const getTimerRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timerRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    let days = Math.floor(timerRemaining / 60 / 60 / 24),\r\n      hours = Math.floor((timerRemaining / 60 / 60) % 24),\r\n      minutes = Math.floor((timerRemaining / 60) % 60),\r\n      seconds = Math.floor(timerRemaining % 60);\r\n\r\n    return {\r\n      timerRemaining,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds\r\n    }\r\n\r\n  }\r\n\r\n  const updateClock = () => {\r\n\r\n    const timerAction = document.querySelector('.timer-action');\r\n\r\n    let getTime = getTimerRemaining();\r\n\r\n\r\n      timerDays.textContent = addZero(getTime.days);\r\n      timerHours.textContent = addZero(getTime.hours);\r\n      timerMinutesours.textContent = addZero(getTime.minutes);\r\n      timerSeconds.textContent = addZero(getTime.seconds);\r\n    \r\n      if (getTime.timerRemaining <= 0) {\r\n        timerDays.textContent = \"00\";\r\n        timerHours.textContent = \"00\";\r\n        timerMinutesours.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n        timerAction.textContent = \"Акция закончилась\";\r\n\r\n        clearInterval(idIntervalTimer);\r\n    }\r\n     \r\n  }\r\n\r\n  let idIntervalTimer = setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validationForm.js":
/*!***********************************!*\
  !*** ./modules/validationForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\r\n  const validationCalc = () => {\r\n\r\n    const input = document.querySelectorAll('.calc-block input');\r\n    input.forEach(element => {\r\n      element.addEventListener('input', () => {\r\n        element.value = element.value.replace(/\\D+/, \"\");\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  const validationForm = () => {\r\n    const inputTex = [...document.querySelectorAll('form input[placeholder=\"Ваше сообщение\"]'), ...document.querySelectorAll('form input[type=text]')];\r\n\r\n    inputTex.forEach(element => {\r\n      element.addEventListener('input', () => {\r\n        element.value = element.value.replace(/([^а-яА-Я\\-\\ \\. \\,])+/gi, \"\")\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  const validationFormEmail = () => {\r\n    const inputTex = [...document.querySelectorAll('form input[type=email]')];\r\n    const testEmail = /([^a-zA-Z1-9\\@ \\- \\_ \\. \\! \\* \\' \\`])+/gi\r\n    console.log(inputTex)\r\n    inputTex.forEach(element => {\r\n\r\n      element.addEventListener('input', () => {\r\n        console.log(testEmail.test(element.value))\r\n\r\n        element.value = element.value.replace(testEmail, \"\")\r\n      })\r\n    })\r\n\r\n  }\r\n  const validationFormTel = () => {\r\n    const input = document.querySelectorAll('form input[type=tel]');\r\n\r\n    input.forEach(element => {\r\n      element.addEventListener('input', () => {\r\n        element.value = element.value.replace(/([^0-9\\+ \\( \\) \\-])+/gi, \"\")\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  validationForm();\r\n  validationFormEmail()\r\n  validationFormTel();\r\n  validationCalc();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validationForm.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;