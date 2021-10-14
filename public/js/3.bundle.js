(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/N-DYN-2-pagination/Pager.js":
/*!****************************************************!*\
  !*** ./src/components/N-DYN-2-pagination/Pager.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/components/N-DYN-2-pagination/utils.js\");\n\n\n\nconst Pager = props => {\n  const {\n    page,\n    total,\n    onChange\n  } = props;\n  const pages = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getPages\"])(page, total);\n  if (pages.length <= 1) return null;\n  const isPrevDisabled = page === 1;\n  const isNextDisabled = page === total;\n  const previous = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: \"prev\",\n    className: `pager__page pager__page--prev ${isPrevDisabled ? 'pager__page--disabled' : ''}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => onChange(page - 1),\n    className: \"pager__button\",\n    disabled: isPrevDisabled,\n    title: 'prev'\n  }, props.prevLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    viewBox: \"0 0 320 202\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"currentColor\",\n    d: \"M70.356 82.67l56.762-56.641L101.217 0 0 101l101.217 101 25.901-26.029-56.762-56.64 249.644.183V82.853z\",\n    fillRule: \"nonzero\"\n  }))));\n  const next = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: \"next\",\n    className: `pager__page pager__page--next ${isNextDisabled ? 'pager__page--disabled' : ''}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => onChange(page + 1),\n    className: \"pager__button\",\n    disabled: isNextDisabled,\n    title: 'next'\n  }, props.nextLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    viewBox: \"0 0 320 202\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    fill: \"currentColor\",\n    d: \"M249.644 119.33l-56.762 56.641L218.783 202 320 101 218.783 0l-25.901 26.029 56.762 56.64L0 82.487v36.661z\",\n    fillRule: \"nonzero\"\n  }))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ol\", {\n    className: \"pager\"\n  }, previous, pages.map(p => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: `${p.page}-${p.isEllipses ? 'ellipses' : ''}`,\n    className: `pager__page ${p.isCurrent ? 'pager__page--current' : ''} ${p.isEllipses ? 'pager__page--ellipses' : ''}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    disabled: p.isCurrent,\n    onClick: () => onChange(p.page),\n    className: \"pager__button\"\n  }, p.isEllipses ? '...' : p.page))), next);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pager);\n\n//# sourceURL=webpack:///./src/components/N-DYN-2-pagination/Pager.js?");

/***/ }),

/***/ "./src/components/N-DYN-2-pagination/utils.js":
/*!****************************************************!*\
  !*** ./src/components/N-DYN-2-pagination/utils.js ***!
  \****************************************************/
/*! exports provided: getPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPages\", function() { return getPages; });\nconst getPageSpread = (pages, current) => {\n  const spreadPages = pages.map(page => ({\n    page,\n    isCurrent: current === page\n  }));\n  return spreadPages;\n};\n\nconst getPages = (current, total) => {\n  if (total <= 5) {\n    const items = Array.from(new Array(total).keys()).map(n => n + 1);\n    return getPageSpread(items, current);\n  }\n\n  if (current < 5) {\n    const items = Array.from(new Array(4).keys()).map(n => n + 1);\n    return [...getPageSpread(items, current), {\n      isEllipses: true,\n      page: 5\n    }, ...getPageSpread([total], current)];\n  }\n\n  if (total > 5 && current >= total - 3) {\n    return [...getPageSpread([1], current), {\n      isEllipses: true,\n      page: total - 4\n    }, ...getPageSpread([total - 3, total - 2, total - 1, total], current)];\n  }\n\n  if (total > 6 && current > 4) {\n    return [...getPageSpread([1], current), {\n      isEllipses: true,\n      page: current - 2\n    }, ...getPageSpread([current - 1, current, current + 1], current), {\n      isEllipses: true,\n      page: current + 2\n    }, ...getPageSpread([total], current)];\n  }\n\n  return [];\n};\n\n//# sourceURL=webpack:///./src/components/N-DYN-2-pagination/utils.js?");

/***/ }),

/***/ "./src/components/P-LP-1-search-results/SearchResults/SearchInfoSort.js":
/*!******************************************************************************!*\
  !*** ./src/components/P-LP-1-search-results/SearchResults/SearchInfoSort.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction SearchInfoSort(props) {\n  const handleChange = e => props.onChange(e.target.value);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-results__info-sort container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"search-results__info\"\n  }, props.info), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-results__sort-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"search-results__sort\",\n    onChange: handleChange,\n    \"aria-label\": props.sortLabel,\n    value: props.value\n  }, props.options.map(o => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    key: o.value,\n    value: o.value\n  }, o.label)))));\n}\n\nSearchInfoSort.propTypes = {\n  info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  sortLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n  })).isRequired,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInfoSort);\n\n//# sourceURL=webpack:///./src/components/P-LP-1-search-results/SearchResults/SearchInfoSort.js?");

/***/ }),

/***/ "./src/components/P-LP-1-search-results/SearchResults/SearchMasthead.js":
/*!******************************************************************************!*\
  !*** ./src/components/P-LP-1-search-results/SearchResults/SearchMasthead.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchMasthead; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SearchMasthead(props) {\n  const [term, setTerm] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.defaultValue || '');\n  const searchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  const copy = props.copy;\n\n  const handleChange = e => setTerm(e.target.value);\n\n  const handleReset = () => {\n    setTerm('');\n    searchRef.current.focus();\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    props.onSubmit(term);\n  };\n\n  const handleSuggestionClick = () => {\n    setTerm(props.suggestion);\n    props.onSubmit(props.suggestion);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-results-masthead\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-results-masthead__inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"search-results-masthead__title\"\n  }, props.heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"search-results-masthead__copy\"\n  }, copy), props.suggestion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleSuggestionClick,\n    type: \"button\",\n    className: \"search-results-masthead__suggestion btn btn--primary btn--outline\"\n  }, props.suggestionLabel.replace('{keyword}', props.suggestion)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"search-results-masthead__form\",\n    onReset: handleReset,\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    \"aria-label\": props.placeholder,\n    ref: searchRef,\n    onChange: handleChange,\n    type: \"serach\",\n    className: \"search-results-masthead__input\",\n    placeholder: props.placeholder,\n    value: term\n  }), term && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"reset\",\n    className: \"search-results-masthead__clear\"\n  }, props.clearLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"search-results-masthead__submit\",\n    \"aria-label\": props.submitLabel\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: \"20\",\n    height: \"20\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M19.81 18.93l-4.98-5.024c2.845-3.306 2.683-8.298-.454-11.442A8.333 8.333 0 008.426 0C6.257 0 4.123.81 2.473 2.464a8.425 8.425 0 000 11.928 8.337 8.337 0 005.951 2.464c1.94 0 3.914-.681 5.466-2.042l4.98 4.992a.64.64 0 00.454.194.639.639 0 00.452-.194c.292-.227.292-.616.033-.876zM3.412 13.485a7.133 7.133 0 010-10.081C4.771 2.042 6.55 1.329 8.458 1.329c1.908 0 3.687.746 5.045 2.075a7.132 7.132 0 010 10.08c-1.358 1.362-3.137 2.075-5.045 2.075a7.11 7.11 0 01-5.046-2.074z\",\n    fill: \"currentColor\",\n    fillRule: \"nonzero\"\n  })))))));\n}\nSearchMasthead.defaultProps = {\n  suggestion: '',\n  defaultValue: ''\n};\nSearchMasthead.propTypes = {\n  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  suggestionLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  submitLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  clearLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  suggestion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\n//# sourceURL=webpack:///./src/components/P-LP-1-search-results/SearchResults/SearchMasthead.js?");

/***/ }),

/***/ "./src/components/P-LP-1-search-results/SearchResults/SearchResults.js":
/*!*****************************************************************************!*\
  !*** ./src/components/P-LP-1-search-results/SearchResults/SearchResults.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchResults; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _N_DYN_2_pagination_Pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../N-DYN-2-pagination/Pager */ \"./src/components/N-DYN-2-pagination/Pager.js\");\n/* harmony import */ var _SearchInfoSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInfoSort */ \"./src/components/P-LP-1-search-results/SearchResults/SearchInfoSort.js\");\n/* harmony import */ var _SearchMasthead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchMasthead */ \"./src/components/P-LP-1-search-results/SearchResults/SearchMasthead.js\");\n/* harmony import */ var _SearchResultsItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchResultsItems */ \"./src/components/P-LP-1-search-results/SearchResults/SearchResultsItems.js\");\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ \"./src/components/P-LP-1-search-results/SearchResults/Spinner.js\");\n/* harmony import */ var _useSearchResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useSearchResults */ \"./src/components/P-LP-1-search-results/SearchResults/useSearchResults.js\");\n\n\n\n\n\n\n\nfunction SearchResults(props) {\n  const {\n    labels,\n    ...config\n  } = Object(_useSearchResults__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(props);\n  const copy = config.term ? labels.summary.replace('{query}', config.term).replace('{count}', config.totalItems) : labels.copy;\n  const info = labels.info.replace('{from}', config.from).replace('{to}', config.to).replace('{total}', config.totalItems);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchMasthead__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    heading: labels.heading,\n    copy: copy,\n    suggestionLabel: labels.suggestion,\n    placeholder: labels.searchPlaceholder,\n    submitLabel: labels.searchSubmit,\n    clearLabel: labels.searchClear,\n    suggestion: config.suggestion,\n    defaultValue: config.term,\n    onSubmit: config.handleSearch\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-results__content\"\n  }, !config.totalItems && !config.loading && !!config.term && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-results__no-results container\",\n    dangerouslySetInnerHTML: {\n      __html: labels.noResultsRtf\n    }\n  }), !!config.totalItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchInfoSort__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    info: info,\n    sortLabel: labels.sort,\n    options: config.sortOptions,\n    value: config.sort,\n    onChange: config.handleSort\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchResultsItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    keys: config.keys,\n    items: config.items\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_N_DYN_2_pagination_Pager__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    page: config.page,\n    total: config.totalPages,\n    onChange: config.handlePageChange,\n    prevLabel: labels.prev,\n    nextLabel: labels.next\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    loading: config.loading\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/P-LP-1-search-results/SearchResults/SearchResults.js?");

/***/ }),

/***/ "./src/components/P-LP-1-search-results/SearchResults/SearchResultsItems.js":
/*!**********************************************************************************!*\
  !*** ./src/components/P-LP-1-search-results/SearchResults/SearchResultsItems.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_lines_ellipsis_lib_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lines-ellipsis/lib/html */ \"./node_modules/react-lines-ellipsis/lib/html.js\");\n/* harmony import */ var react_lines_ellipsis_lib_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lines_ellipsis_lib_html__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction SearchResultsItems({\n  keys,\n  items\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"search-results__items container\"\n  }, items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: item[keys.id],\n    className: \"search-results-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"search-results-item__link\",\n    href: item[keys.url]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"search-results-item__heading\"\n  }, item[keys.heading]), item[keys.description] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-results-item__description rtf\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lines_ellipsis_lib_html__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    unsafeHTML: item[keys.description],\n    maxLine: 2,\n    ellipsis: \"...\",\n    basedOn: \"letters\"\n  }))))));\n}\n\nSearchResultsItems.propTypes = {\n  keys: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n  }).isRequired,\n  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResultsItems);\n\n//# sourceURL=webpack:///./src/components/P-LP-1-search-results/SearchResults/SearchResultsItems.js?");

/***/ }),

/***/ "./src/components/P-LP-1-search-results/SearchResults/Spinner.js":
/*!***********************************************************************!*\
  !*** ./src/components/P-LP-1-search-results/SearchResults/Spinner.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Spinner = props => {\n  return props.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"spinner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"spinner__icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null))) : null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spinner);\n\n//# sourceURL=webpack:///./src/components/P-LP-1-search-results/SearchResults/Spinner.js?");

/***/ }),

/***/ "./src/components/P-LP-1-search-results/SearchResults/index.js":
/*!*********************************************************************!*\
  !*** ./src/components/P-LP-1-search-results/SearchResults/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResults */ \"./src/components/P-LP-1-search-results/SearchResults/SearchResults.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_SearchResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/components/P-LP-1-search-results/SearchResults/index.js?");

/***/ }),

/***/ "./src/components/P-LP-1-search-results/SearchResults/useSearchResults.js":
/*!********************************************************************************!*\
  !*** ./src/components/P-LP-1-search-results/SearchResults/useSearchResults.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useSearchResults; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useSearchResults(props) {\n  const {\n    searchQueryKey,\n    sortQueryKey\n  } = props;\n  const {\n    current: defaultSearchParams\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(new URLSearchParams(window.location.search));\n  const {\n    current: labels\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(JSON.parse(props.labels));\n  const {\n    current: keys\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(JSON.parse(props.resultsKeys));\n  const {\n    current: sortOptions\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(JSON.parse(props.sortOptions));\n  const {\n    current: itemsPerPage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(parseInt(props.resultsPerPage, 10));\n  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [term, setTerm] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultSearchParams.get(searchQueryKey));\n  const [sort, setSort] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultSearchParams.get(sortQueryKey) || sortOptions[0].value);\n  const [items, setItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [suggestion, setSuggestion] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [totalItems, setTotalItems] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1);\n  const totalPages = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => Math.ceil(totalItems / itemsPerPage), [totalItems]);\n  const from = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => page * itemsPerPage - itemsPerPage + 1, [items, page]);\n  const to = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => {\n    const _to = from + itemsPerPage - 1;\n\n    return _to > totalItems ? totalItems : _to;\n  }, [totalItems, itemsPerPage, from]);\n\n  const fetchData = async (_term, _sort, _page) => {\n    if (!_term) {\n      setItems([]);\n      return;\n    }\n\n    setLoading(true);\n    const url = location.toString().replace(location.search, '');\n    let queries = [`${searchQueryKey}=${_term}`, `${sortQueryKey}=${_sort}`];\n    queries = queries.join('&');\n    window.history.pushState({}, document.title, `${url}?${queries}`);\n    queries = `${queries}&${props.pageQueryKey}=${_page}`;\n    queries = props.endpoint.includes('?') ? `&${queries}` : `?${queries}`;\n    const data = await (await fetch(props.endpoint + queries)).json();\n\n    if (data) {\n      setItems(data[keys.items]);\n      setSuggestion(data[keys.suggestion]);\n      setTotalItems(data[keys.totalItems]);\n      setLoading(false);\n    }\n  };\n\n  const handleSearch = newTerm => {\n    setPage(1);\n    setTerm(newTerm);\n    fetchData(newTerm, sort, 1);\n  };\n\n  const handleSort = newSort => {\n    setPage(1);\n    setSort(newSort);\n    fetchData(term, newSort, 1);\n  };\n\n  const handlePageChange = newPage => {\n    setPage(newPage);\n    fetchData(term, sort, newPage);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetchData(term, sort, page);\n  }, []);\n  return {\n    labels,\n    keys,\n    loading,\n    items,\n    totalItems,\n    totalPages,\n    term,\n    suggestion,\n    sortOptions,\n    sort,\n    page,\n    from,\n    to,\n    handleSearch,\n    handleSort,\n    handlePageChange\n  };\n}\n\n//# sourceURL=webpack:///./src/components/P-LP-1-search-results/SearchResults/useSearchResults.js?");

/***/ })

}]);