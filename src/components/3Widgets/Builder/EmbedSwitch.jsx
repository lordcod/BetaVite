import EmbedJSON from '../../4Features/Embed/EmbedJSON';
import EmbedPreview from '../../4Features/Embed/EmbedPreview';
import SVGJson from '@components/5Entities/SVG/SVGJson';
import SVGPreview from '@components/5Entities/SVG/SVGPreview';
import { useState } from 'react';

export default function EmbedSwitch() {
  const [displayPreview, setDisplayPreview] = useState(false);

  return (
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
  );
}
