import { EmbedContext } from '@context/EmbedContext';
import { useContext, useState } from 'react';

export default function EmbedJSON() {
  const { messageJSON, setMessageJSON, error, setError } =
    useContext(EmbedContext);

  const checkJSON = e => {
    try {
      let result = JSON.parse(e.target.value);
      result.embeds.forEach(embed => {
        if (embed.color > 16777215) {
          embed.color = 16777215;
          console.log('max color');
        }
      });

      setMessageJSON(result);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className='bg-lt-main dark:bg-dt-main p-3 gap-2 flex flex-col rounded-2xl'>
      <textarea
        className='whitespace-prerounded outline-none bg-lt-second dark:bg-dt-second py-1 px-2.5 border-lt-second dark:border-dt-second border-solid border-2 w-full'
        rows={15}
        value={JSON.stringify(messageJSON, null, `\t`)}
        onChange={checkJSON}
      />
      {!!error && <span></span>}
    </div>
  );
}
