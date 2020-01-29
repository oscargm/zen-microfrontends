import { GlobalData } from "./global.data";

export interface GlobalStore {
  [moduleName: string]: ModuleStore;
}

export interface ModuleStore {
  text: GlobalData<string>;
}

export const createModuleState = (moduleName: string): GlobalStore => ({
  [moduleName]: {
    text: new GlobalData(`Store of ${moduleName}`),
  },
});

export default createModuleState;
