import "core-js/modules/es.array.iterator";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class Emitter {
  constructor() {
    _defineProperty(this, "eventMap", void 0);

    this.eventMap = {};
  }

  emit(event, ...args) {
    if (!event || !this.eventMap[event]) return this;

    for (const fn of this.eventMap[event]) {
      fn.apply(fn.ctx, [...args]);
      if (fn.off_event === true) this.off(event, fn);
    }

    return this;
  }

  on(event, fn, ctx) {
    if (!event) return this;
    if (!this.eventMap[event]) this.eventMap[event] = [];
    fn.ctx = ctx;
    this.eventMap[event] = [...this.eventMap[event], fn];
    return this;
  }

  once(event, fn, ctx) {
    if (!event) return this;
    fn.ctx = ctx;
    fn.off_event = true;
    return this.on(event, fn, ctx);
  }

  off(event, fn) {
    if (!event || !this.eventMap[event]) return this;
    const fnList = this.eventMap[event];

    if (!fn) {
      delete this.eventMap[event];
      return this;
    }

    this.eventMap[event] = fnList.filter(f => f !== fn);
    return this;
  }

}