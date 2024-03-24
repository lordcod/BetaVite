import CommandsCategories from '@/components/3Widgets/Commands/CommandsCategories';
import CommandsSearch from '@/components/3Widgets/Commands/CommandsSearch';
import CommandsInfo from '@/components/3Widgets/Commands/CommandsInfo';
import CommandsList from '../../3Widgets/Commands/CommandsList';

export default function CommandsPage() {
  return (
    <div className='page'>
      <div className='pt-10 px-6 size-limit mx-auto'>
        <h1 className='font-bold text-6xl mb-12'>Команды</h1>
        <div className='grid grid-cols-[340px_calc(100%-352px)] gap-3 h-full'>
          <div className='sticky self-start top-[76px] flex flex-col gap-3'>
            <CommandsSearch />
            <CommandsCategories />
            <CommandsInfo />
          </div>
          <div className='flex flex-col gap-3'>
            <CommandsList />
          </div>
        </div>
      </div>
    </div>
  );
}
