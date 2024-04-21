import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsAll from '@/components/5Entities/SVG/SVGCommandsAll';
import { LangChangingContext } from '@context/LangContext';

export default function CategoriesAllBtn() {
  const { t } = useContext(LangChangingContext);

  const { toggleCategory } = useContext(CommandsContext);

  return (
    <button
      id='all'
      className='commands_category_btn current'
      onClick={() => toggleCategory('all')}>
      <SVGCommandsAll />
      {t('commands.all')}
    </button>
  );
}
