import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';
import SVGCommandsVoice from '@/components/5Entities/SVG/SVGCommandsVoice';

export default function CategoriesVoiceBtn() {
  const { toggleCategory } = useContext(CategoryContext);

  return (
    <button
      id='voice'
      className='commands_category_btn'
      onClick={() => toggleCategory('voice')}>
      <SVGCommandsVoice />
      Голосовые
    </button>
  );
}
