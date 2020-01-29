import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppProps } from './app.model';
import { GlobalTextProvider } from './common/providers/global-text';
import { TextComponent } from './text-component';

const AppComponent = (props: AppProps) => {
  const { id, customTitle, moduleState } = props;

  return (
    <>
      <GlobalTextProvider globalStore={moduleState}>
        <TextComponent customTitle={customTitle} id={id} />
      </GlobalTextProvider>
    </>
  );
};

export const App = {
  render: (props: AppProps, container: Element) => {
    console.log('render props', props);
    ReactDOM.render(<AppComponent {...props} />, container);
  },
};
