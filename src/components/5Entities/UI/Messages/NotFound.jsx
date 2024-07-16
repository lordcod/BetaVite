import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function NotFound() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='py-4 px-6 bg-lt-main dark:bg-dt-main rounded-2xl'>
      <div>
        <span className='rounded-lg py-1 px-4 bg-main-active mx-0.5 text-dt-font'>
          {t('commands.notFound')}
        </span>{' '}
        - {t('commands.nothingFound')}
      </div>
    </div>
  );
}
