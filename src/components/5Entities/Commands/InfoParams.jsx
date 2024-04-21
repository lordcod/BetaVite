import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function InfoParams() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='mb-2'>
      <h4 className='font-bold w-full font text-lg'>{t('commands.syntax')}</h4>
      <ul className='pl-[30px] list-disc flex flex-col gap-3'>
        <li>
          <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
            [ ]
          </span>{' '}
          — {t('commands.optionalParameter')}
        </li>
        <li>
          <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
            {'<>'}
          </span>{' '}
          — {t('commands.requiredParameter')}
        </li>
        <li>
          <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
            {t('commands.selectionExample')}
          </span>{' '}
          — {t('commands.parameterSelection')}
        </li>
      </ul>
    </div>
  );
}
