import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import SVGCustomization from '@components/5Entities/SVG/Dignitys/SVGCustomization';

export default function ADignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='right'
      title={t('main.dignity.firstTitle')}
      body={t('main.dignity.firstContent')}
      image={<SVGCustomization />}
    />
  );
}
