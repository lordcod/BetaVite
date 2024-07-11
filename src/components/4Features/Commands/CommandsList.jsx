import { useContext } from 'react';
import { CommandsContext } from '@/context/CommandsContext';

export default function CommandsList() {
  const { display } = useContext(CommandsContext);

  return <>{display}</>;
}
