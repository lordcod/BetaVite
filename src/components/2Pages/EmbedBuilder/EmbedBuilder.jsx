import { LangChangingContext } from '@context/LangContext';
import { useContext, useState } from 'react';
import EmbedControl from '../../3Widgets/Builder/EmbedControl';
import EmbedJSON from '../../3Widgets/Builder/EmbedJSON';
import EmbedPreview from '../../3Widgets/Builder/EmbedPreview';
import SVGJson from '@components/5Entities/SVG/SVGJson';
import SVGPreview from '@components/5Entities/SVG/SVGPreview';
import '@styles/Embed.css';

export default function EmbedBuilder() {
  const { t } = useContext(LangChangingContext);
  document.title = `${t('header.embedSmall')} – LordCord`;
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });

  const [displayPreview, setDisplayPreview] = useState(false);

  return (
    <div className='page'>
      <div className='page_container'>
        <h1 className='page_title'>{t('embed.title')}</h1>
        <div className='page_elements-embed'>
          <EmbedControl />
          <div className='animate-anti-entry3'>
            <div className='embed_type'>
              <button
                className={`embed_type-btn ${!displayPreview ? 'active' : ''}`}
                onClick={() => {
                  if (displayPreview) setDisplayPreview(false);
                }}>
                <SVGJson />
                JSON
              </button>
              <button
                className={`embed_type-btn ${displayPreview ? 'active' : ''}`}
                onClick={() => {
                  if (!displayPreview) setDisplayPreview(true);
                }}>
                <SVGPreview />
                PREVIEW
              </button>
            </div>
            {displayPreview ? <EmbedPreview /> : <EmbedJSON />}
          </div>
        </div>
      </div>
    </div>
  );
}
