import { useContext, useEffect, useState } from 'react';
import NotFound from '@/components/5Entities/UI/Messages/NotFound';
import { CommandsContext } from '@/context/CommandsContext';
import { LangChangingContext } from '@context/LangContext';
// import CategoriesSearchBtn from './Categories/CategoriesSearchBtn';
// import SearchLabel from './SearchLabel';

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
    if (value == '') {
      setDisplay(commandsAll);
      return;
    }

    value = value.trim().toLowerCase();

    let result = commandsAll.filter(cm => {
      if (cm.props['data-search'].trim().toLowerCase().includes(value)) {
        return cm;
      }
    });

    if (!result[0]) {
      result = <NotFound />;
    }

    setTimeout(() => setDisplay(result), 0.05);
  };

  return (
    // <div className='bg-lt-main rounded-2xl'>
    <input
      spellCheck='false'
      placeholder={t('commands.findCommand')}
      type='text'
      autoComplete='off'
      value={searchTerm}
      onChange={search}
      id='sbs'
      className='sidebar_search'
    />
    /* <SearchLabel />
      <div className='p-3'>
        <CategoriesSearchBtn />
      </div>
    </div> */
  );
}
