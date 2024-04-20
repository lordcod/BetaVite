import CommandsCategories from '@/components/4Features/Commands/CommandsCategories';
import CommandsSearch from '@/components/4Features/Commands/CommandsSearch';
import CommandsInfo from '@/components/4Features/Commands/CommandsInfo';

export default function CommandSidebar() {
  return (
    <div className='self-start flex flex-col gap-3 animate-anti-entry2 relative mlgh:2md:sticky mlgh:2md:top-[76px]'>
      <CommandsSearch />
      <CommandsCategories />
      <div className='block mdh:hidden lgh:block'>
        <CommandsInfo />
      </div>
    </div>
  );
}
