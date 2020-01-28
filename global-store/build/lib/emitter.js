"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    _defineProperty(this, "eventMap", void 0);

    this.eventMap = {};
  }

  _createClass(Emitter, [{
    key: "emit",
    value: function emit(event) {
      if (!event || !this.eventMap[event]) return this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.eventMap[event][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fn = _step.value;
          fn.apply(fn.ctx, [].concat(args));
          if (fn.off_event === true) this.off(event, fn);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this;
    }
  }, {
    key: "on",
    value: function on(event, fn, ctx) {
      if (!event) return this;
      if (!this.eventMap[event]) this.eventMap[event] = [];
      fn.ctx = ctx;
      this.eventMap[event] = [].concat(_toConsumableArray(this.eventMap[event]), [fn]);
      return this;
    }
  }, {
    key: "once",
    value: function once(event, fn, ctx) {
      if (!event) return this;
      fn.ctx = ctx;
      fn.off_event = true;
      return this.on(event, fn, ctx);
    }
  }, {
    key: "off",
    value: function off(event, fn) {
      if (!event || !this.eventMap[event]) return this;
      var fnList = this.eventMap[event];

      if (!fn) {
        delete this.eventMap[event];
        return this;
      }

      this.eventMap[event] = fnList.filter(function (f) {
        return f !== fn;
      });
      return this;
    }
  }]);

  return Emitter;
}();

exports.Emitter = Emitter;