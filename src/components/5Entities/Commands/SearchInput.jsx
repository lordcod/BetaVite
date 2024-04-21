import { useContext } from 'react';
import NotFound from '@/components/5Entities/UI/Messages/NotFound';
import { CommandsContext } from '@/context/CommandsContext';
import { LangChangingContext } from '@context/LangContext';

export default function SearchInput() {
  const { t } = useContext(LangChangingContext);

  const { commandsAll, setDisplay, searchTerm, setSearchTerm, toggleCategory } =
    useContext(CommandsContext);

  const search = e => {
    toggleCategory('all');

    let value = e.target.value;
    setSearchTerm(value);

    if (value == searchTerm) return;

    let result = commandsAll.filter(cm => {
      if (cm.key.trim().toLowerCase().includes(value.trim().toLowerCase())) {
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
