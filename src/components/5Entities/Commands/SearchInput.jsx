import { useContext, useEffect, useState } from 'react';
import NotFound from '@/components/5Entities/UI/Messages/NotFound';
import { CommandsContext } from '@/context/CommandsContext';
import { LangChangingContext } from '@context/LangContext';

export default function SearchInput() {
  const { t } = useContext(LangChangingContext);

  const { commandsAll, setDisplay, searchTerm, setSearchTerm, toggleCategory } =
    useContext(CommandsContext);

  const [categoryAll, setCategoryAll] = useState(<div className='' />);

  useEffect(() => {
    setCategoryAll(document.getElementById('all'));
  }, []);

  const search = e => {
    toggleCategory(categoryAll);

    let value = e.target.value;
    setSearchTerm(value);

    if (value == searchTerm) return;

    value = value.trim().toLowerCase();

    let result = commandsAll.filter(cm => {
      if (
        cm.key.trim().toLowerCase().includes(value) ||
        cm.props['data-ales'].trim().toLowerCase().includes(value)
      ) {
        return cm;
      }
    });

    if (!result[0]) {
      result = <NotFound />;
    }

    setDisplay(result);
  };

  return (
    <input
      placeholder={t('commands.findCommand')}
      type='text'
      autoComplete='off'
      id='command'
      value={searchTerm}
      onChange={search}
      className='commands_search peer'
    />
  );
}
