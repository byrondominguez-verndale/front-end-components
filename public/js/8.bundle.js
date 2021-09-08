(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/components/column-row/column-row.js":
/*!*************************************************!*\
  !*** ./src/components/column-row/column-row.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\nswiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_1__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"]]);\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      container: this.el.querySelector('.swiper-container'),\n      pagination: this.el.querySelector('.swiper-pagination'),\n      next: this.el.querySelector('.swiper-button-next'),\n      prev: this.el.querySelector('.swiper-button-prev'),\n      breakpoint: this.el.dataset.breakpoint\n    };\n    this.slider = null;\n\n    if (!this.dom.breakpoint) {\n      this.dom.breakpoint = 320;\n    }\n\n    this.isMobile = window.matchMedia(`(max-width:${this.dom.breakpoint}px)`);\n\n    if (this.isMobile.matches) {\n      this.initSlider();\n    }\n  }\n\n  addListeners() {\n    window.addEventListener('resize', this.debounce(e => {\n      // if is not mobile and there is a slider, destroy swiper slider func\n      if (!this.isMobile.matches && this.slider) {\n        this.slider.destroy(true, true);\n      } else {\n        if (this.isMobile.matches) {\n          this.initSlider();\n        }\n      }\n    }));\n  }\n\n  debounce(func, timeParam) {\n    const time = timeParam || 1000; // 100 by default if no param\n\n    let timer; // eslint-disable-next-line space-before-function-paren\n\n    return function (event) {\n      if (timer) clearTimeout(timer);\n      timer = setTimeout(func, time, event);\n    };\n  }\n\n  initSlider() {\n    this.slider = new swiper__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dom.container, {\n      centeredSlides: true,\n      spaceBetween: 25,\n      pagination: {\n        el: this.dom.pagination\n      },\n      navigation: {\n        nextEl: this.dom.next,\n        prevEl: this.dom.prev\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/column-row/column-row.js?");

/***/ })

}]);
