import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import SVGSettingsDig from '@components/5Entities/SVG/Dignitys/SVGSettingsDig';

export default function BDignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='left'
      title={t('main.dignity.secondTitle')}
      body={t('main.dignity.secondContent')}
      image={<SVGSettingsDig />}
    />
  );
}
