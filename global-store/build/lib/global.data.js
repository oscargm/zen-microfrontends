"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalData = void 0;

var _emitter = require("./emitter");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventIds;

(function (EventIds) {
  EventIds["change"] = "change";
})(EventIds || (EventIds = {}));

var GlobalData = function GlobalData(initialValue) {
  var _this = this;

  _classCallCheck(this, GlobalData);

  _defineProperty(this, "data", void 0);

  _defineProperty(this, "emitter", void 0);

  _defineProperty(this, "get", function () {
    return _this.data;
  });

  _defineProperty(this, "set", function (value) {
    _this.data = typeof value === "function" ? value(_this.data) : value;

    _this.emitter.emit(EventIds.change, _this.data);
  });

  _defineProperty(this, "subscribe", function (callback, context) {
    _this.emitter.on(EventIds.change, callback, context);
  });

  _defineProperty(this, "unsubscribe", function (callback) {
    _this.emitter.off(EventIds.change, callback);
  });

  this.data = initialValue;
  this.emitter = new _emitter.Emitter();
};

exports.GlobalData = GlobalData;