import { GlobalStore } from '../../global-store/build';
export interface AppProps {
  id: string;
  customTitle: string;
  moduleState?: GlobalStore;
}
