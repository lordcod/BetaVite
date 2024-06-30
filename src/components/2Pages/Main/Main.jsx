import HomeTitleBlock from '../../3Widgets/Home/HomeTitleBlock';
import HomeHrBlock from '../../3Widgets/Home/HomeHrBlock';
import HomeDignitysBlock from '../../3Widgets/Home/HomeDignitysBlock';
import '@styles/Home.css';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function MainPage() {
  const { t } = useContext(LangChangingContext);

  document.title = `LordCord – ${t('header.mainSmall')}`;

  return (
    <div className='page '>
      <div className='flex flex-col'>
        <HomeTitleBlock />
        <HomeHrBlock />
        <HomeDignitysBlock />
      </div>
    </div>
  );
}
