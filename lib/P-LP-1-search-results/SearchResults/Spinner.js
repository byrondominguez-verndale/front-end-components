"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Spinner = props => {
  return props.loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner__icon"
  }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))) : null;
};

var _default = Spinner;
exports.default = _default;