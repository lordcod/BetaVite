import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import SVGMultilang from '@components/5Entities/SVG/Dignitys/SVGMultilang';

export default function CDignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='right'
      title={t('main.dignity.thirdTitle')}
      body={t('main.dignity.thirdContent')}
      image={<SVGMultilang />}
    />
  );
}
