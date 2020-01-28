"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.globalStore = void 0;

var _global = require("./global.data");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const globalStore: GlobalStore = {
//   text: new GlobalData("Este texto está almacenado globalmente y es accesible por todos los módulos"),
//   counter: new GlobalData(0),
// };
var globalStore = function globalStore(moduleName) {
  return _defineProperty({}, moduleName, {
    text: new _global.GlobalData("Store of ".concat(moduleName))
  });
};

exports.globalStore = globalStore;
var _default = globalStore;
exports["default"] = _default;