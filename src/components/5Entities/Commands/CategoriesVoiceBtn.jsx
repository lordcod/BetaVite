import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsVoice from '@/components/5Entities/SVG/SVGCommandsVoice';
import { LangChangingContext } from '@context/LangContext';

export default function CategoriesVoiceBtn() {
  const { toggleCategory } = useContext(CommandsContext);
  const { t } = useContext(LangChangingContext);

  return (
    <button
      id='voice'
      className='commands_category_btn'
      onClick={() => toggleCategory('voice')}>
      <SVGCommandsVoice />
      {t('commands.voice')}
    </button>
  );
}
