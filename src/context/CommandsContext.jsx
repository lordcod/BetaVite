import { createContext, useState } from 'react';
import CommandCategoryList from '@/components/3Widgets/Commands/CommandCategoryList';
import CommandsData from '@/components/6Shared/Server/commands';
import useLang from '@/hooks/LangHook';

const prefLang = useLang();

export const CategoryContext = createContext({
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
  setSearchTerm: '',
});

export const CategoryState = props => {
  const [category, setCategory] = useState('all');
  const [previosButton, setPreviosButton] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const commandsEconomy = CommandCategoryList(CommandsData.economy, prefLang); //Экономика
  const commandsMajor = CommandCategoryList(CommandsData.major, prefLang); //Главные
  const commandsModeration = CommandCategoryList(
    CommandsData.moderation,
    prefLang,
  ); //Модерация
  const commandsVoice = CommandCategoryList(CommandsData.voice, prefLang); //Голосовые
  const commandsAll = [
    ...commandsVoice.props.children,
    ...commandsMajor.props.children,
    ...commandsModeration.props.children,
    ...commandsEconomy.props.children,
  ];

  const [display, setCommands] = useState(commandsAll);

  category == 'major' && commandsMajor;
  category == 'moderation' && commandsModeration;
  category == 'economy' && commandsEconomy;
  category == 'voice' && commandsVoice;

  // const commandsAll = ['help', 'ping', 'invite', 'captcha', 'purge', 'temp-role', 'trmp-role list', 'say', 'settings', 'balance', 'leaderboard', 'pay', 'daily', 'weekly', 'monthly', 'deposit', 'withdraw', 'gift', 'take', 'join', 'leave', 'play', 'stop', 'pause', 'resume', 'volume']

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

  const setDisplay = value => {
    setCommands(value);
  };

  return (
    <CategoryContext.Provider
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
    </CategoryContext.Provider>
  );
};
