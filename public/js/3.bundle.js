(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var v1 = __webpack_require__(/*! ./v1 */ \"./node_modules/uuid/v1.js\");\nvar v4 = __webpack_require__(/*! ./v4 */ \"./node_modules/uuid/v4.js\");\n\nvar uuid = v4;\nuuid.v1 = v1;\nuuid.v4 = v4;\n\nmodule.exports = uuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/index.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]]\n  ]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/uuidjs/uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v4.js?");

/***/ }),

/***/ "./src/components/C-FMT-1-accordions-module/Accordion.js":
/*!***************************************************************!*\
  !*** ./src/components/C-FMT-1-accordions-module/Accordion.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @verndale/core */ \"./node_modules/@verndale/core/lib/index.js\");\n/* harmony import */ var _verndale_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_verndale_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ \"./src/components/helpers/index.js\");\n\n\n\n/**\n * `Accordion`\n *\n *\n * @example\n * import { Accordion } from '@verndale/front-end-components';\n *\n * class Foo {\n *   construction(){\n *\n *     cont Accordion = new Accordion('.accordion');\n *   }\n * }\n */\n\nclass Accordion extends _verndale_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(el) {\n    super(el);\n    this.initAccordion();\n  }\n\n  setupDefaults() {\n    this.dom = {\n      container: this.el.querySelector('.accordion__items'),\n      items: this.el.querySelectorAll('.accordion__item'),\n      triggers: [...this.el.querySelectorAll('.accordion__item-trigger')],\n      panels: [...this.el.querySelectorAll('.accordion__item-panel')]\n    };\n  }\n\n  addListeners() {\n    this.dom.container.addEventListener('keydown', this.handleKeyDown.bind(this));\n    this.dom.triggers.forEach(trigger => trigger.addEventListener('click', this.handleClick.bind(this)));\n    this.dom.panels.forEach(el => el.addEventListener('transitionend', this.handleTransitionEnd.bind(this)));\n  }\n\n  initAccordion() {\n    this.dom.items.forEach(item => {\n      const guid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])();\n      const trigger = item.querySelector('.accordion__item-trigger');\n      const content = item.querySelector('.accordion__item-panel');\n\n      if (trigger.getAttribute('aria-expanded') === 'true') {\n        const height = content.querySelector('.accordion__item-content').offsetHeight;\n        content.style.maxHeight = `${height}px`;\n        content.style.visibility = 'visible';\n      }\n\n      trigger.setAttribute('aria-controls', `tabcontent-${guid}`);\n      trigger.setAttribute('id', `tab-${guid}`);\n      content.setAttribute('aria-labelledby', `tab-${guid}`);\n      content.setAttribute('id', `tabcontent-${guid}`);\n      content.setAttribute('aria-hidden', trigger.getAttribute('aria-expanded') !== 'true');\n    });\n  }\n\n  handleClick(e) {\n    const button = e.currentTarget;\n\n    if (button.getAttribute('aria-expanded') === 'true') {\n      this.closeItem(button);\n    } else {\n      this.openItem(button);\n    }\n  }\n\n  handleKeyDown(e) {\n    const target = e.target;\n    const key = e.which || e.keyCode;\n    const ctrlModifier = e.ctrlKey && (key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].PAGEUP || key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].PAGEDOWN);\n\n    if (target.classList.contains('accordion__item-trigger')) {\n      if (key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].UP || key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].DOWN || ctrlModifier) {\n        const index = this.dom.triggers.indexOf(target);\n        const direction = key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].PAGEDOWN || key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].DOWN ? 1 : -1;\n        const length = this.dom.triggers.length;\n        const newIndex = (index + length + direction) % length;\n        this.dom.triggers[newIndex].focus();\n        e.preventDefault();\n      } else if (key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].END || key === _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].HOME) {\n        switch (key) {\n          case _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].HOME:\n            this.dom.triggers[0].focus();\n            break;\n\n          case _helpers__WEBPACK_IMPORTED_MODULE_2__[\"keyCode\"].END:\n            this.dom.triggers[this.dom.triggers.length - 1].focus();\n            break;\n        }\n\n        e.preventDefault();\n      }\n    }\n  }\n\n  openItem(trigger) {\n    const content = document.getElementById(trigger.getAttribute('aria-controls'));\n    trigger.setAttribute('aria-expanded', true);\n    content.style.visibility = 'visible';\n    content.setAttribute('aria-hidden', false);\n    const height = content.querySelector('.accordion__item-content').offsetHeight;\n    content.style.maxHeight = `${height}px`;\n    content.style.visibility = 'visible';\n    this.open(content);\n  }\n\n  closeItem(trigger) {\n    const content = document.getElementById(trigger.getAttribute('aria-controls'));\n    trigger.setAttribute('aria-expanded', false);\n    content.style = null;\n    content.setAttribute('aria-hidden', true);\n    this.close(content);\n  }\n\n  open(el) {\n    el.setAttribute('aria-hidden', false);\n    el.style.height = `${el.scrollHeight}px`;\n  }\n\n  close(el) {\n    el.style.height = `${el.scrollHeight}px`;\n    el.setAttribute('aria-hidden', true);\n    el.style.height = 0;\n  }\n\n  handleTransitionEnd(e) {\n    const el = e.target;\n    const height = el.style.height;\n\n    if (height !== '0' || height !== 0) {\n      el.style.height = 'auto';\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\n\n//# sourceURL=webpack:///./src/components/C-FMT-1-accordions-module/Accordion.js?");

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