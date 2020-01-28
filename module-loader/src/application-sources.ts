import { ApplicationTypes } from './application-types';

export const applicationSources = {
  [ApplicationTypes.MODULE]: `./${ApplicationTypes.MODULE}`,
  [ApplicationTypes.APP_WITHOUT_DEPENDENCIES]: `./${ApplicationTypes.APP_WITHOUT_DEPENDENCIES}`,
  [ApplicationTypes.APP_WITH_DEPENDENCIES]: `./${ApplicationTypes.APP_WITH_DEPENDENCIES}`,
};
