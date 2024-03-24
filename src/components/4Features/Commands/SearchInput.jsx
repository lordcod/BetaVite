import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';

export default function SearchInput() {
  const { commandsAll, setDisplay, searchTerm, setSearchTerm, toggleCategory } =
    useContext(CategoryContext);

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

    setDisplay(result);
  };

  return (
    <input
      placeholder='Найти команду'
      type='text'
      autoComplete='off'
      id='command'
      value={searchTerm}
      onChange={search}
      className='commands_search peer'
    />
  );
}
