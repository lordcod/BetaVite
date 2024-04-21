import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import image from '@/Assets/B.png';

export default function BDignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='left'
      title={t('main.dignity.secondTitle')}
      body={t('main.dignity.secondContent')}
      avatar={image}
    />
  );
}
