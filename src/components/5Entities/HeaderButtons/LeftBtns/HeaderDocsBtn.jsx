import SVGDocumentation from '@components/5Entities/SVG/SVGDocumentation';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HeaderDocsBtn() {
  const { t } = useContext(LangChangingContext);

  return (
    <a
      href='/docs'
      className='animate-entry2 header_btn'
      target='blank'>
      <SVGDocumentation />
      {t('header.documentation')}
    </a>
  );
}
