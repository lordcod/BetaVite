import Dignity from '../../5Entities/Home/Dignity';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import SVGCommands from '../../5Entities/SVG/Dignitys/SVGCommands';

export default function FDignity() {
  const { t } = useContext(LangChangingContext);

  return (
    <Dignity
      postition='left'
      title={t('main.dignity.sixthTitle')}
      body={t('main.dignity.sixthContent')}
      image={<SVGCommands />}
    />
  );
}
