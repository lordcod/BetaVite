import CommandsCategories from '@/components/4Features/Commands/CommandsCategories';
import CommandsSearch from '@/components/4Features/Commands/CommandsSearch';
import CommandsInfo from '@/components/4Features/Commands/CommandsInfo';

export default function CommandSidebar() {
  return (
    <div className='self-start flex flex-col gap-3 animate-anti-entry2 relative 2xl:sticky 2xl:top-[76px]'>
      <CommandsSearch />
      <CommandsCategories />
      <CommandsInfo />
    </div>
  );
}
