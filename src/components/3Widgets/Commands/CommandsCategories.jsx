import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';
import SVGCommandsEconomy from '@/components/5Entities/SVG/SVGCommandsEconomy';
import SVGCommandsAll from '@/components/5Entities/SVG/SVGCommandsAll';
import SVGCommandsMajor from '@/components/5Entities/SVG/SVGCommandsMajor';
import SVGCommandsModeration from '@/components/5Entities/SVG/SVGCommandsModeration';
import SVGCommandsVoice from '@/components/5Entities/SVG/SVGCommandsVoice';

export default function CommandsCategories() {
  const { toggleCategory } = useContext(CategoryContext);

  return (
    <div className='sidebar__block sidebar__categories'>
      <button
        id='all'
        className='sidebar__categories_button current'
        onClick={() => toggleCategory('all')}>
        <SVGCommandsAll />
        Все
      </button>
      <button
        id='major'
        className='sidebar__categories_button'
        onClick={() => toggleCategory('major')}>
        <SVGCommandsMajor />
        Главные
      </button>
      <button
        id='moderation'
        className='sidebar__categories_button'
        onClick={() => toggleCategory('moderation')}>
        <SVGCommandsModeration />
        Модерация
      </button>
      <button
        id='economy'
        className='sidebar__categories_button'
        onClick={() => toggleCategory('economy')}>
        <SVGCommandsEconomy />
        Экономика
      </button>
      <button
        id='voice'
        className='sidebar__categories_button'
        onClick={() => toggleCategory('voice')}>
        <SVGCommandsVoice />
        Голосовые
      </button>
    </div>
  );
}
