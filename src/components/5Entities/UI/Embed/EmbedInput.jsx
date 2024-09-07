import { EmbedContext } from '@context/EmbedContext';
import { useContext, useState, useEffect } from 'react';

export default function EmbedInput({ number, value, placeholder, max, type }) {
  const { messageJSON, setMessageJSON } = useContext(EmbedContext);

  // const setValue = (obj, props, value) => {
  //   if (typeof props === 'string') props = props.split('.');

  //   if (props.length > 1) {
  //     obj[props[0]] = { ...obj[props[0]], [props[1]]: value };
  //   } else obj[props[0]] = value;
  // };

  const getValue = (o, s) => {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  };

  return (
    <div className='relative'>
      <input
        type={!!type ? type : 'text'}
        maxLength={max}
        placeholder={placeholder}
        onChange={e => {
          let input = e.target.value;
          let dummy = messageJSON;

          setValue(dummy.embeds[number], value, input);

          setMessageJSON({ ...dummy });
        }}
      />

      <label>
        {!!getValue(messageJSON.embeds[number], value)
          ? getValue(messageJSON.embeds[number], value).length
          : 0}{' '}
        / {max}
      </label>
    </div>
  );
}
