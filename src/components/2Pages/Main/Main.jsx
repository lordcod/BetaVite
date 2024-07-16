import HomeTitleBlock from '../../3Widgets/Home/HomeTitleBlock';
import HomeHrBlock from '../../3Widgets/Home/HomeHrBlock';
import HomeDignitysBlock from '../../3Widgets/Home/HomeDignitysBlock';
import '@styles/Home.css';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function MainPage() {
  const { t } = useContext(LangChangingContext);

  document.title = `${t('header.mainSmall')} – LordCord`;

  return (
    <div className='page '>
      <div className='page_container-main'>
        <HomeTitleBlock />
        <HomeHrBlock />
        <HomeDignitysBlock />
      </div>
    </div>
  );
}
