import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';
import SVGCommandsAll from '@/components/5Entities/SVG/SVGCommandsAll';

export default function CategoriesAllBtn() {
  const { toggleCategory } = useContext(CategoryContext);

  return (
    <button
      id='all'
      className='commands_category_btn current'
      onClick={() => toggleCategory('all')}>
      <SVGCommandsAll />
      Все
    </button>
  );
}
