import CommandsCategories from '@/components/4Features/Commands/CommandsCategories';
import CommandsSearch from '@/components/4Features/Commands/CommandsSearch';
import CommandsInfo from '@/components/4Features/Commands/CommandsInfo';

export default function CommandSidebar() {
  return (
    <nav className='sidebar'>
      <CommandsSearch />
      <CommandsCategories />
      <div className='sidebar_info'>
        <CommandsInfo />
      </div>
    </nav>
  );
}
