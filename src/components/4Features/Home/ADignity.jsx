import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import image from '@/Assets/A.png';

export default function ADignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='right'
      title={t('main.dignity.firstTitle')}
      body={t('main.dignity.firstContent')}
      avatar={image}
    />
  );
}
