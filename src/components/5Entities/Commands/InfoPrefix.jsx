import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function InfoPrefix() {
  const { t } = useContext(LangChangingContext);

  return (
    <div>
      <p>
        {t('commands.standardPrefix')}: <span className='prefix'>l.</span>
        {t('commands.canChange')}.
      </p>
      <p>
        {t('commands.canUse')} <span className='ping'>@LordCord#2170</span>.
      </p>
      <p>
        <span className='usage'>l.help</span>
        <span className='usage'>
          <span className='ping'>@LordCord#2170</span> help
        </span>
      </p>
    </div>
  );
}
