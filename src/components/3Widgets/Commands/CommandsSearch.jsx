import { useContext } from 'react';
import SVGSearch from '@/components/5Entities/SVG/SVGSearch';
import { CategoryContext } from '@/context/CommandsContext';

export default function CommandsSearch() {
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
    <div className='sidebar__search'>
      <input
        placeholder='Найти команду'
        type='text'
        autoComplete='off'
        id='command'
        value={searchTerm}
        onChange={search}
      />
      <label htmlFor='command'>
        <SVGSearch />
      </label>
    </div>
  );
}
