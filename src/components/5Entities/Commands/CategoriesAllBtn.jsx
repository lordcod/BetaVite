import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsAll from '@/components/5Entities/SVG/SVGCommandsAll';

export default function CategoriesAllBtn() {
  const { toggleCategory } = useContext(CommandsContext);

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
