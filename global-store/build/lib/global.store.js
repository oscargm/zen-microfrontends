"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createModuleState = void 0;

var _global = require("./global.data");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createModuleState = function createModuleState(moduleName) {
  return _defineProperty({}, moduleName, {
    text: new _global.GlobalData("Store of ".concat(moduleName))
  });
};

exports.createModuleState = createModuleState;
var _default = createModuleState;
exports["default"] = _default;