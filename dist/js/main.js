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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./modules/toggleMenu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_validationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validationForm */ \"./modules/validationForm.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('29 october 2022');\r\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_validationForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('.portfolio-content', '.portfolio-item', 'portfolio-item-active', 'dot-active');\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price) => {\r\n  const calcBlock = document.querySelector('.calc-block'),\r\n    calcType = calcBlock.querySelector('.calc-type'),\r\n    calcSquare = calcBlock.querySelector('.calc-square'),\r\n    calcCount = calcBlock.querySelector('.calc-count'),\r\n    calcDay = calcBlock.querySelector('.calc-day'),\r\n    total = document.getElementById('total');\r\n  \r\n\r\n    const animateChangeTotal = (value) => {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 500,\r\n        timing(timeFraction) {\r\n          return timeFraction;\r\n        },\r\n        draw(progress) {\r\n          total.textContent = Math.round(value * progress);\r\n        }\r\n      });\r\n    }\r\n\r\n    const countCalc = () => {\r\n      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n      const calcSquareValue = +calcSquare.value;\r\n\r\n      let totalValue = 0;\r\n      let calcCountValue = 1;\r\n      let calcDayValue = 1;\r\n\r\n      if(calcCount.value > 1) {\r\n        calcCountValue +=  +calcCount.value / 10;\r\n      }\r\n\r\n      if(calcDay.value && calcDay.value < 5) {\r\n        calcDayValue = 2\r\n      } else if(calcDay.value && calcDay.value < 10) {\r\n        calcDayValue = 1.5\r\n      }\r\n\r\n      if(calcType.value && calcSquare.value) {\r\n        totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n      } else totalValue = 0;\r\n\r\n      total.textContent = Math.round(totalValue);\r\n       animateChangeTotal(totalValue);\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n\r\n      if(e.target === calcType ||\r\n        e.target ===  calcSquare ||\r\n        e.target === calcCount||\r\n        e.target ===  calcDay) countCalc();\r\n      \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n  \r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n  \r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n  \r\n    draw(progress); // отрисовать её\r\n  \r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  \r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const buttons = document.querySelectorAll('.popup-btn'),\r\n    modal = document.querySelector('.popup'),\r\n    modalContent = document.querySelector('.popup-content');\r\n\r\n  const modalOpenAnimation = (duration) => {\r\n   (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n    duration: duration,\r\n    timing: function linear(timeFraction) {\r\n      return timeFraction;\r\n    },\r\n    draw: function(progress) {\r\n      modal.style.opacity = progress ;\r\n      modalContent.style.opacity = 0;\r\n      if(progress === 1) {\r\n\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\r\n      duration: duration,\r\n      timing: function linear(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n\r\n      draw: function (progress) {\r\n        modalContent.style.opacity = progress;\r\n      }\r\n      })\r\n      }\r\n      }\r\n      });\r\n  }\r\n  const modalCloseAnimation = (duration) => {\r\n   ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n    duration: duration,\r\n    timing: function linear(timeFraction) {\r\n      return timeFraction;\r\n    },\r\n    draw: function(progress) {\r\n      modal.style.opacity = 1 - progress ;\r\n      modalContent.style.opacity = 0;\r\n      if(progress === 1) {\r\n      (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n\r\n      duration: duration,\r\n      timing: function linear(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n\r\n      draw: function (progress) {\r\n        modalContent.style.opacity =  1 - progress;\r\n        modal.style.display = 'none';\r\n      }\r\n      })\r\n      \r\n      }\r\n      }\r\n      });\r\n  }\r\n\r\n \r\n\r\n// Открытие модального окна\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      if (screen.availWidth >= 768) modalOpenAnimation(300);\r\n      modal.style.display = 'block';\r\n    })\r\n  })\r\n\r\n// Закрытие модального окна\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      modalCloseAnimation(300);\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n  const links = document.querySelectorAll('ul>li>a'),\r\n    linkFullSpecifications = document.querySelector('main > a');\r\n\r\n  const newArray = [...links, linkFullSpecifications];\r\n\r\n  newArray.forEach( (element)  => {\r\n\r\n    element.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n\r\n      const id = element.getAttribute('href').substring(1)\r\n      const section = document.getElementById(id);\r\n\r\n       section.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n    })\r\n\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (sliderBox, slide, slideActive = 'slide-active', dotActive = 'dot-active') => {\r\n  const sliderBlock = document.querySelector(sliderBox),\r\n    slides = document.querySelectorAll(slide),\r\n    dots = [];\r\n\r\n  let currentSlide = 0,\r\n    interval = 0,\r\n    timerInterval = 2000;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  }\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, slideActive);\r\n    prevSlide(dots, currentSlide, dotActive);\r\n\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) currentSlide = 0;\r\n\r\n    nextSlide(slides, currentSlide, slideActive);\r\n    nextSlide(dots, currentSlide, dotActive);\r\n  }\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  }\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  }\r\n\r\n  const createDot = () => {\r\n    const dotsBox = document.querySelector('.portfolio-dots');\r\n\r\n    for (let i = 0; i <= slides.length - 1; i++) {\r\n      const dot = document.createElement('li');\r\n      dot.classList.add('dot');\r\n      dotsBox.append(dot);\r\n      dots.push(dot);\r\n    }\r\n    dots[0].classList.add(dotActive);\r\n  }\r\n\r\n  if (!sliderBlock || !slides[0]) return;\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches('.dot, .portfolio-btn')) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, slideActive);\r\n    prevSlide(dots, currentSlide, dotActive);\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--\r\n    } else if (e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) currentSlide = index;\r\n      })\r\n    }\r\n\r\n    if (currentSlide >= slides.length) currentSlide = 0;\r\n    if (currentSlide < 0) currentSlide = slides.length - 1;\r\n\r\n    nextSlide(slides, currentSlide, slideActive);\r\n    nextSlide(dots, currentSlide, dotActive);\r\n  });\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n\r\n    if (e.target.matches('.dot, .portfolio-btn')) stopSlide();\r\n\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n\r\n    if (e.target.matches('.dot, .portfolio-btn')) startSlide(timerInterval);\r\n\r\n  }, true)\r\n\r\n  createDot();\r\n  startSlide(timerInterval);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabsPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n  tabsPanel.addEventListener('click', e => {\r\n    const target = e.target;\r\n\r\n    if(target.closest('.service-header-tab')) {\r\n      const tabBtn = target.closest('.service-header-tab');\r\n      tabs.forEach((tab, index) => {\r\n        if(tab === tabBtn) {\r\n          tab.classList.add('active');\r\n          tabContent[index].classList.remove('d-none');\r\n        }\r\n        else {\r\n          tab.classList.remove('active')\r\n          tabContent[index].classList.add('d-none');\r\n        } \r\n      });\r\n    }\r\n\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n  const timerDays = document.getElementById('timer-days'),\r\n    timerHours = document.getElementById('timer-hours'),\r\n    timerMinutesours = document.getElementById('timer-minutes'),\r\n    timerSeconds = document.getElementById('timer-seconds');\r\n\r\n  const addZero = (num) => {\r\n      if (num <= 9) {\r\n          return '0' + num;\r\n      } else {\r\n          return num;\r\n      }\r\n  };\r\n\r\n  const getTimerRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timerRemaining = (dateStop - dateNow) / 1000;\r\n\r\n    let days = Math.floor(timerRemaining / 60 / 60 / 24),\r\n      hours = Math.floor((timerRemaining / 60 / 60) % 24),\r\n      minutes = Math.floor((timerRemaining / 60) % 60),\r\n      seconds = Math.floor(timerRemaining % 60);\r\n\r\n    return {\r\n      timerRemaining,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds\r\n    }\r\n\r\n  }\r\n\r\n  const updateClock = () => {\r\n\r\n    const timerAction = document.querySelector('.timer-action');\r\n\r\n    let getTime = getTimerRemaining();\r\n\r\n\r\n      timerDays.textContent = addZero(getTime.days);\r\n      timerHours.textContent = addZero(getTime.hours);\r\n      timerMinutesours.textContent = addZero(getTime.minutes);\r\n      timerSeconds.textContent = addZero(getTime.seconds);\r\n    \r\n      if (getTime.timerRemaining <= 0) {\r\n        timerDays.textContent = \"00\";\r\n        timerHours.textContent = \"00\";\r\n        timerMinutesours.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n        timerAction.textContent = \"Акция закончилась\";\r\n\r\n        clearInterval(idIntervalTimer);\r\n    }\r\n     \r\n  }\r\n  \r\n  updateClock();\r\n  let idIntervalTimer = setInterval(updateClock, 1000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/toggleMenu.js":
/*!*******************************!*\
  !*** ./modules/toggleMenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toggleMenu = () => {\r\n  const  menu = document.querySelector('menu');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  }\r\n\r\n  document.addEventListener('click', ({ target }) =>\r\n    (target.closest('.menu') || target.matches('.close-btn, menu a') || \r\n    (menu.classList.contains('active-menu') && !target.closest('menu'))) &&\r\n    handleMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack:///./modules/toggleMenu.js?");

/***/ }),

/***/ "./modules/validationForm.js":
/*!***********************************!*\
  !*** ./modules/validationForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n\r\n  const validationCalc = () => {\r\n\r\n    const input = document.querySelectorAll('.calc-block input');\r\n    input.forEach(element => {\r\n      element.addEventListener('input', () => {\r\n        element.value = element.value.replace(/\\D+/, \"\");\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  const validationForm = () => {\r\n    const inputTex = [...document.querySelectorAll('form input[placeholder=\"Ваше сообщение\"]'), ...document.querySelectorAll('form input[type=text]')];\r\n\r\n    inputTex.forEach(element => {\r\n      element.addEventListener('input', () => {\r\n        element.value = element.value.replace(/([^а-яА-Я\\-\\ \\. \\,])+/gi, \"\")\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  const validationFormEmail = () => {\r\n    const inputTex = [...document.querySelectorAll('form input[type=email]')];\r\n    const testEmail = /([^a-zA-Z1-9\\@ \\- \\_ \\. \\! \\* \\' \\`])+/gi\r\n  \r\n    inputTex.forEach(element => {\r\n\r\n      element.addEventListener('input', () => {\r\n        console.log(testEmail.test(element.value))\r\n\r\n        element.value = element.value.replace(testEmail, \"\")\r\n      })\r\n    })\r\n\r\n  }\r\n  const validationFormTel = () => {\r\n    const input = document.querySelectorAll('form input[type=tel]');\r\n\r\n    input.forEach(element => {\r\n      element.addEventListener('input', () => {\r\n        element.value = element.value.replace(/([^0-9\\+ \\( \\) \\-])+/gi, \"\")\r\n      })\r\n    })\r\n\r\n  }\r\n\r\n  validationForm();\r\n  validationFormEmail()\r\n  validationFormTel();\r\n  validationCalc();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validationForm.js?");

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