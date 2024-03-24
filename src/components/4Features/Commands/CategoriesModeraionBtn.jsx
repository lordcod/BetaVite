import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';
import SVGCommandsModeration from '@/components/5Entities/SVG/SVGCommandsModeration';

export default function CategoriesModerationBtn() {
  const { toggleCategory } = useContext(CategoryContext);

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
