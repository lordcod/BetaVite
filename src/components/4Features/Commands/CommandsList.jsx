import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';

export default function CommandsList() {
  const {
    category,
    commandsEconomy,
    commandsMajor,
    commandsModeration,
    commandsVoice,
    display,
  } = useContext(CommandsContext);

  return (
    <>
      {category === 'all' && display}
      {category === 'major' && commandsMajor}
      {category === 'moderation' && commandsModeration}
      {category === 'economy' && commandsEconomy}
      {category === 'voice' && commandsVoice}
    </>
  );
}
