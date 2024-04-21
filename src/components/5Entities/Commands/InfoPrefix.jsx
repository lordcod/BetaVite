import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function InfoPrefix() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='mb-2'>
      <p className='mb-2'>
        {t('commands.standardPrefix')}{' '}
        <span className='px-2 py-1 bg-lt-second dark:bg-dt-second rounded-lg'>
          l.
        </span>
        . {t('commands.canChange')}.
      </p>
      <p className='mb-2 flex flex-wrap'>
        {t('commands.canUse')} <span className='ping'>@LordCord#2170</span>.
      </p>
      <p className='mb-2 flex flex-wrap gap-2'>
        <span className='flex flex-wrap'>
          <span className='usage'>l.help</span>
        </span>
        <span className='flex flex-wrap'>
          <span className='usage'>
            <span className='ping'>@LordCord#2170</span> help
          </span>
        </span>
      </p>
    </div>
  );
}
