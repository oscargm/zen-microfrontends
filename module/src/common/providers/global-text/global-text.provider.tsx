import * as React from 'react';

import {
  GetGlobalTextContext,
  SetGlobalTextContext
} from './global-text.context';
import { SetGlobalTextContextType } from './global-text.model';

export interface GlobalTextProps {
  globalStore: any;
}

export const GlobalTextProvider: React.FC<GlobalTextProps> = ({
  globalStore,
  children
}) => {
  const [localText, setLocalText] = React.useState<string>(
    globalStore.text.get()
  );

  React.useEffect(() => {
    const setNewTextValue = value => {
      setLocalText(value);
    };
    if (globalStore) {
      globalStore.text.subscribe(setNewTextValue, this);
    }
    return () => globalStore.text.unsubscribe(setNewTextValue);
  }, [globalStore]);

  const setGlobalTextContextValue: SetGlobalTextContextType = React.useMemo(
    () => ({
      setText: (text: string) => {
        setLocalText(text);
        globalStore.text.set(text);
      }
    }),
    [globalStore]
  );

  return (
    <GetGlobalTextContext.Provider value={localText}>
      <SetGlobalTextContext.Provider value={setGlobalTextContextValue}>
        {children}
      </SetGlobalTextContext.Provider>
    </GetGlobalTextContext.Provider>
  );
};
