import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsModeration from '@/components/5Entities/SVG/SVGCommandsModeration';
import { LangChangingContext } from '@context/LangContext';

export default function CategoriesModerationBtn() {
  const { toggleCategory } = useContext(CommandsContext);
  const { t } = useContext(LangChangingContext);

  return (
    <button
      id='moderation'
      className='commands_category_btn'
      onClick={() => toggleCategory('moderation')}>
      <SVGCommandsModeration />
      {t('commands.moderation')}
    </button>
  );
}
