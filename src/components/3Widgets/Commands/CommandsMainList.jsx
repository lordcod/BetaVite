import CommandsList from '@/components/4Features/Commands/CommandsList';
import CommandsInfo from '@/components/4Features/Commands/CommandsInfo';
// import SelectionExample from '../../5Entities/UI/Form/SelectionExample';

export default function CommandsMainList() {
  return (
    <div className='commands'>
      <div className='commands-info'>
        <CommandsInfo />
      </div>
      <CommandsList />
      {/* <SelectionExample /> */}
    </div>
  );
}
