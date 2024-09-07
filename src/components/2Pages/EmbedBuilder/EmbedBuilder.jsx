import { LangChangingContext } from '@context/LangContext';
import { useContext, useState } from 'react';
import EmbedControl from '../../3Widgets/Builder/EmbedControl';
import '@styles/Embed.css';
import EmbedSwitch from '../../3Widgets/Builder/EmbedSwitch';
import { EmbedState } from '../../../context/EmbedContext';

export default function EmbedBuilder() {
  const { t } = useContext(LangChangingContext);

  document.title = `${t('header.embedSmall')} – LordCord`;
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });

  return (
    <div className='page'>
      <div className='page_container'>
        <h1 className='page_title'>{t('embed.title')}</h1>
        <div className='page_elements-embed'>
          <EmbedState>
            <EmbedControl />
            <EmbedSwitch />
          </EmbedState>
        </div>
      </div>
    </div>
  );
}
