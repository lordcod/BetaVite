import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';
import SVGCommandsMajor from '@/components/5Entities/SVG/SVGCommandsMajor';

export default function CategoriesMajorBtn() {
  const { toggleCategory } = useContext(CategoryContext);

  return (
    <button
      id='major'
      className='commands_category_btn'
      onClick={() => toggleCategory('major')}>
      <SVGCommandsMajor />
      Главные
    </button>
  );
}
