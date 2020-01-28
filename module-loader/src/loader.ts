import { applicationSources } from './application-sources';
import { ApplicationType } from './application-types';

export const load = (
  applicationType: ApplicationType,
  name: string,
  asyncLoading: boolean,
  onLoadCallback: () => void
) => {
  const head = document.head;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `${applicationSources[applicationType]}/${name}.js`;
  script.async = asyncLoading;
  script.defer = asyncLoading;
  script.onload = onLoadCallback;
  head.appendChild(script);
};

export default load;
