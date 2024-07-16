import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function EmbedBuilder() {
  const { t } = useContext(LangChangingContext);

  document.title = `${t('header.embedSmall')} – LordCord`;

  return (
    <div className='page'>
      <div className='page_container'>
        <h1 className='page_title'>{t('embed.title')}</h1>
        <div className='page_elements-embed'>
          {/* <CommandsState>
            <CommandSidebar />
            <CommandsMainList />
          </CommandsState> */}
        </div>
      </div>
    </div>
  );
}
