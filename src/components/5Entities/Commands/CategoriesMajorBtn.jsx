import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsMajor from '@/components/5Entities/SVG/SVGCommandsMajor';
import { LangChangingContext } from '@context/LangContext';

export default function CategoriesMajorBtn() {
  const { toggleCategory } = useContext(CommandsContext);
  const { t } = useContext(LangChangingContext);

  return (
    <button
      id='major'
      className='commands_category_btn'
      onClick={() => toggleCategory('major')}>
      <SVGCommandsMajor />
      {t('commands.major')}
    </button>
  );
}
