import { GlobalData } from "./global.data";

export interface GlobalStore {
  [moduleName: string]: ModuleStore;
}

export interface ModuleStore {
  text: GlobalData<string>;
}

export const globalStore = (moduleName: string): GlobalStore => ({
  [moduleName]: {
    text: new GlobalData(`Store of ${moduleName}`),
  },
});

export default globalStore;
