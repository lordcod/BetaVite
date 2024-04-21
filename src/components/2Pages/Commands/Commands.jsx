import CommandSidebar from '@/components/3Widgets/Commands/CommandSidebar';
import { CommandsState } from '@/context/CommandsContext';
import CommandsMainList from '@/components/3Widgets/Commands/CommandsMainList';
import '@styles/Commands.css';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function CommandsPage() {
  const { t } = useContext(LangChangingContext);

  return (
    <div className='page'>
      <div className='pt-10 px-6 size-limit mx-auto'>
        <h1 className='font-bold text-6xl mb-12 animate-anti-entry1 text-center lg:text-start'>
          {t('commands.title')}
        </h1>
        <div className='grid gap-3 h-full mlgh:2md:grid-cols-[340px_calc(100%-352px)]'>
          <CommandsState>
            <CommandSidebar />
            <CommandsMainList />
          </CommandsState>
        </div>
      </div>
    </div>
  );
}
