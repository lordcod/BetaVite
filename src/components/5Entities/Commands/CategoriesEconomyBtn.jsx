import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import SVGCommandsEconomy from '@/components/5Entities/SVG/SVGCommandsEconomy';
import { LangChangingContext } from '@context/LangContext';

export default function CategoriesEconomyBtn() {
  const { toggleCategory } = useContext(CommandsContext);
  const { t } = useContext(LangChangingContext);

  return (
    <button
      id='economy'
      className='commands_category_btn'
      onClick={() => toggleCategory('economy')}>
      <SVGCommandsEconomy />
      {t('commands.economy')}
    </button>
  );
}
