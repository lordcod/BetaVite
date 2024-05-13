import { createContext, useState } from 'react';
import CommandCategoryList from '@components/4Features/Commands/CommandCategoryList';
import CommandsData from '@data/commands.json';
import { useTranslation } from 'react-i18next';

export const CommandsContext = createContext({
  category: '',
  toggleCategory: () => {},
  display: [],
  setDisplay: () => {},
  commandsEconomy: [],
  commandsMajor: [],
  commandsModeration: [],
  commandsVoice: [],
  commandsAll: [],
  searchTerm: '',
  setSearchTerm: () => {},
});

export const CommandsState = props => {
  const [category, setCategory] = useState('all');
  const [previosButton, setPreviosButton] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [i18n] = useTranslation();

  const commandsCategories = {
    economy: [],
    major: [],
    voice: [],
    moderation: [],
  };

  CommandsData.forEach(element => {
    commandsCategories[element.category].push(element);
  });

  const commandsEconomy = CommandCategoryList(
    commandsCategories.economy,
    i18n.language,
  ); //Экономика
  const commandsMajor = CommandCategoryList(
    commandsCategories.major,
    localStorage.i18nextLng,
  ); //Главные
  const commandsModeration = CommandCategoryList(
    commandsCategories.moderation,
    localStorage.i18nextLng,
  ); //Модерация
  const commandsVoice = CommandCategoryList(
    commandsCategories.voice,
    localStorage.i18nextLng,
  ); //Голосовые

  const commandsAll = [
    ...commandsVoice.props.children,
    ...commandsMajor.props.children,
    ...commandsModeration.props.children,
    ...commandsEconomy.props.children,
  ];

  const [display, setDisplay] = useState(commandsAll);

  const toggleCategory = value => {
    const clicked = document.getElementById(value);
    const previos = document.getElementById(previosButton);
    if (!(clicked === previos)) {
      setSearchTerm('');
      setDisplay(commandsAll);
      document.getElementById(value).classList.add('current');
      document.getElementById(previosButton).classList.remove('current');
      setCategory(value);
      setPreviosButton(value);
    }
  };

  return (
    <CommandsContext.Provider
      value={{
        category,
        toggleCategory,

        searchTerm,
        setSearchTerm,

        display,
        setDisplay,
        commandsEconomy,
        commandsMajor,
        commandsModeration,
        commandsVoice,
        commandsAll,
      }}>
      {props.children}
    </CommandsContext.Provider>
  );
};
