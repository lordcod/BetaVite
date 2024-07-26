import { useEffect, useState } from 'react';

export default function EmbedControl() {
  const [body, setBody] = useState('');

  return (
    <div className='animate-anti-entry2 embed_control'>
      <div className='input_container'>
        <textarea
          autoComplete='off'
          spellCheck='false'
          placeholder='placeholder'
          className='block bg-yellow-500'
          // value={body.trim()}
          style={{ height: '18px' }}
          // onClick={e => {
          // let el = e.target;
          // document.activeElement.blur();
          // if (
          //   document.activeElement !== el &&
          //   el.className.includes('block')
          // ) {
          //   console.log('change');
          // }
          // if (document.activeElement == el) {
          //   console.log('focus removed');
          // }
          // }}
          onChange={e => {
            setBody(e.target.value.trim());
            e.target.style.height = '20px';
            e.target.style.height = e.target.scrollHeight - 6 + 'px';
          }}>
          {body}
        </textarea>
        <div className='break-all bg-green-500'>{body}</div>
      </div>
      <div
        className='bg-red-500 max-w-[430px] rounded'
        style={{ borderLeft: '0.5rem green solid' }}>
        s
      </div>
    </div>
  );
}
