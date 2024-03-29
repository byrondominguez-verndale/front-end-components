(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./src/components/youtube/youtube.js":
/*!*******************************************!*\
  !*** ./src/components/youtube/youtube.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Module extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  setupDefaults() {\n    this.dom = {\n      poster: this.el.querySelector('.video__poster'),\n      icon: this.el.querySelector('svg')\n    };\n    this.initialized = false;\n    this.videoId = this.el.dataset.videoId;\n  }\n\n  addListeners() {\n    this.el.addEventListener('click', this.initVideo.bind(this));\n  }\n\n  initVideo() {\n    if (!this.initialized) {\n      const iframe = document.createElement('iframe');\n      iframe.setAttribute('width', 640);\n      iframe.setAttribute('height', 360);\n      iframe.setAttribute('frameborder', 0);\n      iframe.setAttribute('src', `http://www.youtube.com/embed/${this.videoId}?modestbranding=1&rel=0&showinfo=0&autohide=1&autoplay=1`);\n\n      iframe.onload = () => {\n        this.dom.poster.remove();\n        this.dom.icon.remove();\n      };\n\n      this.dom.poster.parentNode.appendChild(iframe);\n      this.initialized = true;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack:///./src/components/youtube/youtube.js?");

/***/ })

}]);