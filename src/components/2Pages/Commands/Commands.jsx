import { useContext } from 'react';

import { CategoryContext } from '@/context/CommandsContext';
import CommandsCategories from '@/components/3Widgets/Commands/CommandsCategories';
import CommandsSearch from '@/components/3Widgets/Commands/CommandsSearch';
import CommandsInfo from '@/components/3Widgets/Commands/CommandsInfo';

export default function CommandsPage() {
  const {
    category,
    commandsEconomy,
    commandsMajor,
    commandsModeration,
    commandsVoice,
    display,
  } = useContext(CategoryContext);

  return (
    <div className='page'>
      <div className='page__main'>
        <h1 className='page__title'>Команды</h1>
        <div className='command_page__main_grid_container'>
          <div className='command_page__main__sidebar'>
            {<CommandsSearch />}
            {<CommandsCategories />}
            {<CommandsInfo />}
          </div>
          <div className='command_page__main__list'>
            {category === 'all' && display}
            {category === 'major' && commandsMajor}
            {category === 'moderation' && commandsModeration}
            {category === 'economy' && commandsEconomy}
            {category === 'voice' && commandsVoice}
          </div>
        </div>
      </div>
    </div>
  );
}
