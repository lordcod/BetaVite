import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';
import { LangChangingContext } from '@context/LangContext';

export default function Category({ id, SVG, active }) {
  const { t } = useContext(LangChangingContext);

  const { toggleCategory } = useContext(CommandsContext);

  return (
    <button
      id={id}
      className={`commands_category_btn ${active ? 'current' : ''}`}
      onClick={e => toggleCategory(e.target)}>
      <SVG />
      {t(`commands.${id}`)}
    </button>
  );
}
