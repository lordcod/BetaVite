import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsModeration from '@/components/5Entities/SVG/SVGCommandsModeration';

export default function CategoriesModerationBtn() {
  const { toggleCategory } = useContext(CommandsContext);

  return (
    <button
      id='moderation'
      className='commands_category_btn'
      onClick={() => toggleCategory('moderation')}>
      <SVGCommandsModeration />
      Модерация
    </button>
  );
}
