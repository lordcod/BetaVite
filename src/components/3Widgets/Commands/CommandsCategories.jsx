import CategoriesAllBtn from '../../4Features/Commands/CategoriesAllBtn';
import CategoriesMajorBtn from '../../4Features/Commands/CategoriesMajorBtn';
import CategoriesModeraionBtn from '../../4Features/Commands/CategoriesModeraionBtn';
import CategoriesEconomyBtn from '../../4Features/Commands/CategoriesEconomyBtn';
import CategoriesVoiceBtn from '../../4Features/Commands/CategoriesVoiceBtn';

export default function CommandsCategories() {
  return (
    <div className='bg-lt-main dark:bg-dt-main rounded-2xl sidebar__categories grid grid-rows-5 p-3 gap-1'>
      <CategoriesAllBtn />
      <CategoriesMajorBtn />
      <CategoriesModeraionBtn />
      <CategoriesEconomyBtn />
      <CategoriesVoiceBtn />
    </div>
  );
}
