export class GlobalData<T extends any> {
  get: () => T;
  set: (value: T | ((prevValue: T) => T)) => void;
  subscribe: (callback: any, context?: any) => void;
  unsubscribe: (callback: any) => void;
}

export interface GlobalStore {
  text: GlobalData<string>;
  counter: GlobalData<number>;
}

export declare const globalStore: GlobalStore;
