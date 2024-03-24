import { useContext } from 'react';
import { CategoryContext } from '@/context/CommandsContext';

export default function CommandsList() {
  const {
    category,
    commandsEconomy,
    commandsMajor,
    commandsModeration,
    commandsVoice,
    display,
  } = useContext(CategoryContext);

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
