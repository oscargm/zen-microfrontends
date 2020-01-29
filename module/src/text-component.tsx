import * as React from 'react';
import {
  useGetGlobalText,
  useSetGlobalText,
} from './common/providers/global-text';

interface TextComponentProps {
  id: string;
  customTitle: string;
}

export const TextComponent = (props: TextComponentProps) => {
  const { id, customTitle } = props;
  const text = useGetGlobalText();
  const { setText } = useSetGlobalText();

  const handleTextChange = React.useCallback(event => {
    setText(event.target.value);
  }, []);
  return (
    <div
      style={{
        border: '3px inset black',
        padding: '1rem',
      }}
      id={id}
    >
      <h1>React Application</h1>
      <h2>{customTitle}</h2>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
};
