import { ApplicationType } from './application-types';

export interface ModuleLoaderInterface {
  load: (
    applicationType: ApplicationType,
    name: string,
    asyncLoading: boolean,
    onLoadCallback: () => void
  ) => void;
}

export declare const ModuleLoader: ModuleLoaderInterface;
