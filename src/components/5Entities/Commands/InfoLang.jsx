import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function InfoLang() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='mb-2'>
      <h4 className='font-bold w-full font text-lg'>{t('menu.language')}</h4>
      {t('errors.comLang')}
    </div>
  );
}
