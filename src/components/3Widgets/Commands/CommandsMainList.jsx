import CommandsList from '@/components/4Features/Commands/CommandsList';
import CommandsInfo from '@/components/4Features/Commands/CommandsInfo';

export default function CommandsMainList() {
  return (
    <div className='flex flex-col gap-3 animate-anti-entry3'>
      <div className='hidden mdh:block lgh:hidden'>
        <CommandsInfo />
      </div>
      <CommandsList />
    </div>
  );
}
