import { useContext, useEffect, useState } from 'react';
import { EmbedContext } from '@context/EmbedContext';
import SVGExpand from '@/components/5Entities/SVG/SVGExpand';
import EmbedInput from '../../5Entities/UI/Embed/EmbedInput';
import ColorPicker from '../../5Entities/UI/Embed/ColorPicker';
import EmbedTextArea from '../../5Entities/UI/Embed/EmbedTextArea';

export default function EmbedControl() {
  const { messageJSON, setMessageJSON, getColor } = useContext(EmbedContext);

  const expand = e => {
    let dd = e.target.closest('.dd-menu');
    if (dd.className.includes('active')) {
      dd.classList.remove('active');
    } else dd.classList.add('active');
  };

  return (
    <div className='animate-anti-entry2 embed_control'>
      <div className='relative'>
        <textarea
          placeholder={'Message Content'}
          rows={2}
          type={'text'}
          value={messageJSON.content}
          max={2048}
          onChange={e =>
            setMessageJSON({ ...messageJSON, content: e.target.value })
          }
        />
        <label>
          {!!messageJSON.content ? messageJSON.content.length : 0} / {2048}
        </label>
      </div>
      <div
        className='dd-menu embed active'
        style={{ borderLeftColor: getColor(1) }}>
        <div className='dd-menu_container'>
          <div
            className='dd-menu_name'
            onClick={expand}>
            <div>embed</div>
          </div>
          <div className='dd-menu_body'>
            <div className='dd-menu_body_content flex flex-col gap-2'>
              <div className='flex gap-2'>
                <div className='relative'>
                  <input
                    type={'text'}
                    maxLength={256}
                    placeholder={'Author'}
                    onChange={e => {
                      let dummy = messageJSON;
                      dummy.embeds[0].author = {
                        ...dummy.embeds[0].author,
                        name: e.target.value,
                      };
                      setMessageJSON({ ...dummy });
                    }}
                  />

                  <label>
                    {!!messageJSON.embeds[0].author &&
                    !!messageJSON.embeds[0].author.name
                      ? messageJSON.embeds[0].author.name.length
                      : 0}{' '}
                    / {256}
                  </label>
                </div>

                <div className='relative'>
                  <input
                    type={'url'}
                    maxLength={256}
                    placeholder={'Author URL'}
                    onChange={e => {
                      let dummy = messageJSON;
                      dummy.embeds[0].author = {
                        ...dummy.embeds[0].author,
                        url: e.target.value,
                      };
                      setMessageJSON({ ...dummy });
                    }}
                  />

                  <label>
                    {!!messageJSON.embeds[0].author &&
                    !!messageJSON.embeds[0].author.url
                      ? messageJSON.embeds[0].author.url.length
                      : 0}{' '}
                    / {256}
                  </label>
                </div>
              </div>

              <div className='relative'>
                <input
                  type={'url'}
                  maxLength={256}
                  placeholder={'Author Icon URL'}
                  onChange={e => {
                    let dummy = messageJSON;
                    dummy.embeds[0].author = {
                      ...dummy.embeds[0].author,
                      icon_url: e.target.value,
                    };
                    setMessageJSON({ ...dummy });
                  }}
                />

                <label>
                  {!!messageJSON.embeds[0].author &&
                  !!messageJSON.embeds[0].author.icon_url
                    ? messageJSON.embeds[0].author.icon_url.length
                    : 0}{' '}
                  / {256}
                </label>
              </div>

              <div className='grid gap-2 grid-cols-[36px,calc(50%-48px),calc(50%-4px)]'>
                <ColorPicker number={0} />

                <div className='relative'>
                  <input
                    type={'text'}
                    maxLength={256}
                    placeholder={'Title'}
                    onChange={e => {
                      let dummy = messageJSON;
                      dummy.embeds[0].title = e.target.value;
                      setMessageJSON({ ...dummy });
                    }}
                  />

                  <label>
                    {!!messageJSON.embeds[0].title
                      ? messageJSON.embeds[0].title.length
                      : 0}{' '}
                    / {256}
                  </label>
                </div>

                <div className='relative'>
                  <input
                    type={'url'}
                    maxLength={256}
                    placeholder={'URL'}
                    onChange={e => {
                      let dummy = messageJSON;
                      dummy.embeds[0].url = e.target.value;
                      setMessageJSON({ ...dummy });
                    }}
                  />

                  <label>
                    {!!messageJSON.embeds[0].url
                      ? messageJSON.embeds[0].url.length
                      : 0}{' '}
                    / {256}
                  </label>
                </div>
              </div>

              <div className='relative'>
                <textarea
                  placeholder={'Description'}
                  rows={5}
                  type={'text'}
                  value={messageJSON.embeds[0].description}
                  max={2048}
                  onChange={e => {
                    let dummy = messageJSON;
                    dummy.embeds[0].description = e.target.value;
                    setMessageJSON({ ...dummy });
                  }}
                />
                <label>
                  {!!messageJSON.embeds[0] &&
                  !!messageJSON.embeds[0].description
                    ? messageJSON.embeds[0].description.length
                    : 0}{' '}
                  / {2048}
                </label>
              </div>

              <button className='field'>+ field</button>
              <input placeholder='Image URL' />

              <input placeholder='Thumbnail URL' />
              <input placeholder='Footer' />
              <div className='flex gap-2'>
                <input placeholder='Author Image' />
                <input placeholder='Timestamp' />
              </div>
            </div>
          </div>
        </div>
        <div
          className='dd-menu_expand'
          onClick={expand}>
          <SVGExpand />
        </div>
      </div>
    </div>
  );
}
