import CommandSidebar from '@/components/3Widgets/Commands/CommandSidebar';
import { CommandsState } from '@/context/CommandsContext';
import CommandsMainList from '@/components/3Widgets/Commands/CommandsMainList';

export default function CommandsPage() {
  return (
    <div className='page'>
      <div className='pt-10 px-6 size-limit mx-auto'>
        <h1 className='font-bold text-6xl mb-12 animate-anti-entry1 text-center 2xl:text-start'>
          Команды
        </h1>
        <div className='grid gap-3 h-full 2xl:grid-cols-[340px_calc(100%-352px)]'>
          <CommandsState>
            <CommandSidebar />
            <CommandsMainList />
          </CommandsState>
        </div>
      </div>
    </div>
  );
}
