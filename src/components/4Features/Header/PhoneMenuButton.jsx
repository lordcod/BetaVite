import SVGMenu from '@components/5Entities/SVG/SVGMenu';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import { MenuContext } from '@context/MenuContext';

export default function PhoneMenuButton() {
  const { t } = useContext(LangChangingContext);
  const { changePhomeMenu } = useContext(MenuContext);

  return (
    <button
      className=' 2md:hidden'
      aria-label={t('header.menu')}
      onClick={changePhomeMenu}>
      <SVGMenu />
    </button>
  );
}
