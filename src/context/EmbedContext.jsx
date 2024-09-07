import { createContext, useState } from 'react';

export const EmbedContext = createContext({
  messageJSON: {},
  setMessageJSON: () => {},
  getColor: () => {},
  error: '',
  setError: () => {},
});

export const EmbedState = props => {
  const [messageJSON, setMessageJSON] = useState({
    content: '',
    embeds: [
      {
        color: Math.floor(Math.random() * 16777215),
      },
    ],
  });

  const { error, setError } = useState('');

  const getColor = number => {
    return !!messageJSON.embeds[number - 1] &&
      !!messageJSON.embeds[number - 1].color
      ? `#${(
          '000000' + messageJSON.embeds[number - 1].color.toString(16)
        ).slice(-6)}`
      : '#000000';
  };

  return (
    <EmbedContext.Provider
      value={{
        messageJSON,
        setMessageJSON,
        getColor,
        error,
        setError,
      }}>
      {props.children}
    </EmbedContext.Provider>
  );
};
