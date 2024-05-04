import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import imgl from '@/Assets/E.webp';
import imgb from '@/Assets/El.webp';
import imgm from '@/Assets/Em.webp';
import imgs from '@/Assets/Es.webp';

export default function EDignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='right'
      title={t('main.dignity.fifthTitle')}
      body={t('main.dignity.fifthContent')}
      imgs={imgs}
      imgm={imgm}
      imgb={imgb}
      imgl={imgl}
    />
  );
}
