import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';
import SVGCommandsEconomy from '@/components/5Entities/SVG/SVGCommandsEconomy';

export default function CategoriesEconomyBtn() {
  const { toggleCategory } = useContext(CategoryContext);

  return (
    <button
      id='economy'
      className='commands_category_btn'
      onClick={() => toggleCategory('economy')}>
      <SVGCommandsEconomy />
      Экономика
    </button>
  );
}
