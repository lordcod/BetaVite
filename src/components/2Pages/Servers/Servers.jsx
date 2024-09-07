// import CommandSidebar from '@/components/3Widgets/Commands/CommandSidebar';
// import { CommandsState } from '@/context/CommandsContext';
// import CommandsMainList from '@/components/3Widgets/Commands/CommandsMainList';
import '@styles/Servers.css';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function ServersPage() {
  const { t } = useContext(LangChangingContext);
  document.title = `${t('header.commandsSmall')} – LordCord`;
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });

  return (
    <div className='page'>
      <div className='page_container'>
        <h1 className='page_title'>{t('commands.title')}</h1>
        <div className='page_elements-commands'>
          {/* <CommandsState>
            <CommandSidebar />
            <CommandsMainList />
          </CommandsState> */}
        </div>
      </div>
    </div>
  );
}
