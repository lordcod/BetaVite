import CommandsCategories from '@/components/4Features/Commands/CommandsCategories';
import CommandsSearch from '@/components/4Features/Commands/CommandsSearch';
import CommandsInfo from '@/components/4Features/Commands/CommandsInfo';

export default function CommandSidebar() {
  return (
    <div className='sticky self-start top-[76px] flex flex-col gap-3 animate-anti-entry2'>
      <CommandsSearch />
      <CommandsCategories />
      <CommandsInfo />
    </div>
  );
}
