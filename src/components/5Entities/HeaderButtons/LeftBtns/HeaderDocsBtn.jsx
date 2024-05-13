import SVGDocumentation from '@components/5Entities/SVG/SVGDocumentation';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function HeaderDocsBtn() {
  const { t } = useContext(LangChangingContext);

  return (
    <a
      href='https://lordcord.gitbook.io'
      className='animate-entry2 header-btn hidden 2md:flex'
      target='blank'>
      <SVGDocumentation />
      <h1 className='font-bold'>{t('header.documentation')}</h1>
    </a>
  );
}
