function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Emitter } from "./emitter";
var EventIds;

(function (EventIds) {
  EventIds["change"] = "change";
})(EventIds || (EventIds = {}));

export class GlobalData {
  constructor(initialValue) {
    _defineProperty(this, "data", void 0);

    _defineProperty(this, "emitter", void 0);

    _defineProperty(this, "get", () => this.data);

    _defineProperty(this, "set", value => {
      this.data = typeof value === "function" ? value(this.data) : value;
      this.emitter.emit(EventIds.change, this.data);
    });

    _defineProperty(this, "subscribe", (callback, context) => {
      this.emitter.on(EventIds.change, callback, context);
    });

    _defineProperty(this, "unsubscribe", callback => {
      this.emitter.off(EventIds.change, callback);
    });

    this.data = initialValue;
    this.emitter = new Emitter();
  }

}