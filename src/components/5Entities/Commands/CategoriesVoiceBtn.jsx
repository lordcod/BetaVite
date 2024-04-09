import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsVoice from '@/components/5Entities/SVG/SVGCommandsVoice';

export default function CategoriesVoiceBtn() {
  const { toggleCategory } = useContext(CommandsContext);

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
