import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function InfoParams() {
  const { t } = useContext(LangChangingContext);

  return (
    <div>
      <h4>{t('commands.syntax')}</h4>
      <ul>
        <li>
          <span>[ ]</span> — {t('commands.optionalParameter')}
        </li>
        <li>
          <span>{'<>'}</span> — {t('commands.requiredParameter')}
        </li>
        <li>
          <span>{t('commands.selectionExample')}</span> —{' '}
          {t('commands.parameterSelection')}
        </li>
      </ul>
    </div>
  );
}
