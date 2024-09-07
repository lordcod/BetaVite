import { EmbedContext } from '@context/EmbedContext';
import { useContext } from 'react';

export default function EmbedTextArea({ placeholder, max }) {
  const { messageJSON, setMessageJSON } = useContext(EmbedContext);

  return (
    <div className='relative'>
      <textarea
        placeholder={placeholder}
        rows={2}
        type={'text'}
        value={messageJSON.content}
        max={2048}
        onChange={e =>
          setMessageJSON({ ...messageJSON, content: e.target.value })
        }
      />
      <label className='absolute top-2 left-2 z-50'>
        {!!messageJSON.content ? messageJSON.content.length : 0} / {max}
      </label>
    </div>
  );
}
