import { Emitter } from "./emitter";

enum EventIds {
  change = "change",
}

export class GlobalData<T extends any> {
  private data: T;
  private emitter: Emitter;

  constructor(initialValue?: T) {
    this.data = initialValue;
    this.emitter = new Emitter();
  }

  public get = (): T => this.data;

  public set = (value: T | ((prevValue: T) => T)): void => {
    this.data = typeof value === "function" ? (value as (prevValue: T) => T)(this.data) : (value as T);
    this.emitter.emit(EventIds.change, this.data);
  };

  public subscribe = (callback: any, context?: any) => {
    this.emitter.on(EventIds.change, callback, context);
  };

  public unsubscribe = (callback: any) => {
    this.emitter.off(EventIds.change, callback);
  };
}
