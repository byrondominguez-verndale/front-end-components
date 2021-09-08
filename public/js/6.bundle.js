(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/components/cards/animated-carousel-card/AnimatedCarouselCard.js":
/*!*****************************************************************************!*\
  !*** ./src/components/cards/animated-carousel-card/AnimatedCarouselCard.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ \"./src/components/helpers/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      btnExpandCollapse: this.el.querySelector('.animated-carousel-card__action .btn'),\n      description: this.el.querySelector('.animated-carousel-card__description')\n    };\n    this.breakpoint = window.matchMedia('(max-width: 1279px)');\n    this.showMoreLabel = this.el.dataset.showMoreLabel;\n    this.showLessLabel = this.el.dataset.showLessLabel;\n    this.checkCollapseText();\n  }\n\n  addListeners() {\n    window.addEventListener('resize', Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(this.checkCollapseText.bind(this), 500));\n    this.dom.btnExpandCollapse.addEventListener('click', this.handleShowMoreLess.bind(this));\n  }\n\n  checkCollapseText() {\n    if (this.breakpoint.matches && this.dom.description.offsetHeight < this.dom.description.scrollHeight) {\n      this.dom.btnExpandCollapse.style.display = 'block';\n    } else {\n      this.dom.description.style.height = null;\n      this.dom.btnExpandCollapse.style.display = 'none';\n    }\n  }\n\n  handleShowMoreLess(e) {\n    e.preventDefault();\n\n    if (this.dom.description.classList.contains('animated-carousel-card__description--expanded')) {\n      this.collapse();\n    } else {\n      this.expand();\n    }\n  }\n\n  expand() {\n    const {\n      description,\n      btnExpandCollapse\n    } = this.dom;\n    this.textHeight = description.offsetHeight;\n    description.classList.add('animated-carousel-card__description--expanded');\n    gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].set(description, {\n      height: 'auto'\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].from(description, {\n      height: this.textHeight,\n      ease: gsap__WEBPACK_IMPORTED_MODULE_2__[\"Expo\"]['easeOut'],\n      duration: 0.4,\n      onComplete: () => {\n        description.style.height = null;\n        btnExpandCollapse.textContent = this.showLessLabel;\n      }\n    });\n  }\n\n  collapse() {\n    const {\n      description,\n      btnExpandCollapse\n    } = this.dom;\n    gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].set(description, {\n      height: description.offsetHeight\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_2__[\"gsap\"].to(description, {\n      height: this.textHeight,\n      ease: gsap__WEBPACK_IMPORTED_MODULE_2__[\"Expo\"]['easeOut'],\n      duration: 0.4,\n      onComplete: () => {\n        description.classList.remove('animated-carousel-card__description--expanded');\n        description.style.height = null;\n        btnExpandCollapse.textContent = this.showMoreLabel;\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/cards/animated-carousel-card/AnimatedCarouselCard.js?");

/***/ }),

/***/ "./src/components/helpers/index.js":
/*!*****************************************!*\
  !*** ./src/components/helpers/index.js ***!
  \*****************************************/
/*! exports provided: open, close, debounce, keyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"open\", function() { return open; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close\", function() { return close; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyCode\", function() { return keyCode; });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].registerPlugin(gsap__WEBPACK_IMPORTED_MODULE_0__[\"CSSPlugin\"]);\n/**\n * Opens an element\n *\n * @example\n * import {open} from '../helpers';\n *\n * open({ element: this.el.querySelector('.element)});\n *\n * @param {Object} element - HTML element you want to target for animation\n * @param {Number} duration - Speed of the animation\n * @param {String} ease - Ease of the animation\n * @param {Function} onComplete - On complete function\n */\n\nconst open = ({\n  element,\n  duration = 0.4,\n  ease = 'easeOut',\n  onComplete\n}) => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].set(element, {\n    height: 'auto'\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].from(element, {\n    height: 0,\n    ease: gsap__WEBPACK_IMPORTED_MODULE_0__[\"Expo\"][ease],\n    duration,\n    onComplete: () => {\n      element.style.height = null;\n      onComplete && onComplete();\n    }\n  });\n};\n/**\n * Closes an element\n *\n * @example\n * import {close} from '../helpers';\n *\n * close({ element: this.el.querySelector('.element)});\n *\n * @param {Object} element - HTML element you want to target for animation\n * @param {Number} duration - Speed of the animation\n * @param {String} ease - Ease of the animation\n * @param {Function} onComplete - On complete function\n */\n\nconst close = ({\n  element,\n  duration = 0.4,\n  ease = 'easeOut',\n  onComplete\n}) => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].set(element, {\n    height: element.offsetHeight\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"gsap\"].to(element, {\n    height: 0,\n    ease: gsap__WEBPACK_IMPORTED_MODULE_0__[\"Expo\"][ease],\n    duration,\n    onComplete: () => {\n      element.style.height = null;\n      onComplete && onComplete();\n    }\n  });\n};\n/**\n * Debounce function\n * Delays the processing of the event\n */\n\nconst debounce = (callback, wait) => {\n  let timerId;\n  return (...args) => {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => {\n      callback(...args);\n    }, wait);\n  };\n};\n/**\n * Key code list object\n */\n\nconst keyCode = {\n  TAB: 9,\n  RETURN: 13,\n  ESC: 27,\n  SPACE: 32,\n  PAGEUP: 33,\n  PAGEDOWN: 34,\n  END: 35,\n  HOME: 36,\n  LEFT: 37,\n  UP: 38,\n  RIGHT: 39,\n  DOWN: 40\n};\n\n//# sourceURL=webpack:///./src/components/helpers/index.js?");

/***/ })

}]);