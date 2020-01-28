import { GlobalData } from "./global.data"; // export interface GlobalStore {
//   text: GlobalData<string>;
//   counter: GlobalData<number>;
// }

// export const globalStore: GlobalStore = {
//   text: new GlobalData("Este texto está almacenado globalmente y es accesible por todos los módulos"),
//   counter: new GlobalData(0),
// };
export const globalStore = moduleName => ({
  [moduleName]: {
    text: new GlobalData(`Store of ${moduleName}`)
  }
});
export default globalStore;