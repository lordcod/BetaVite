import SVGSettings from '@components/5Entities/SVG/SVGSettings';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import { MenuContext } from '@context/MenuContext';

export default function HeaderProfileBtn() {
  const { t } = useContext(LangChangingContext);
  const { changeProfileMenu } = useContext(MenuContext);

  return (
    <div
      className='animate-entry6 header-btn p-1.5'
      tabIndex='0'
      aria-label={t('header.settings')}
      onClick={changeProfileMenu}>
      <SVGSettings />
    </div>
  );
}
