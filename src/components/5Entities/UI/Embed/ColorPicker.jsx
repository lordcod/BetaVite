import { EmbedContext } from '@context/EmbedContext';
import { useContext } from 'react';

export default function ColorPicker({ number, value = 'color', placeholder }) {
  const { messageJSON, setMessageJSON, getColor, setError } =
    useContext(EmbedContext);

  const updateData = e => {
    let input = e.target.value;
    let dummy = messageJSON;

    // while (!dummy.embeds[number - 1]) {
    //   dummy.embeds.push({
    //     color: Math.floor(Math.random() * 16777215),
    //   });
    // }
    let hex = parseInt(input.replace('#', ''), 16);
    dummy.embeds[number - 1][value] = hex;

    setMessageJSON({ ...dummy });
  };

  return (
    <input
      type='color'
      value={getColor(number)}
      onChange={e => {
        updateData(e);
      }}
    />
  );
}
