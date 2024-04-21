import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import image from '@/Assets/D.png';

export default function DDignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='left'
      title={t('main.dignity.fourthTitle')}
      body={t('main.dignity.fourthContent')}
      avatar={image}
    />
  );
}
