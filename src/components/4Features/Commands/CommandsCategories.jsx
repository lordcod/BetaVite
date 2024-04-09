import CategoriesAllBtn from '@/components/5Entities/Commands/CategoriesAllBtn';
import CategoriesMajorBtn from '@/components/5Entities/Commands/CategoriesMajorBtn';
import CategoriesModeraionBtn from '@/components/5Entities/Commands/CategoriesModeraionBtn';
import CategoriesEconomyBtn from '@/components/5Entities/Commands/CategoriesEconomyBtn';
import CategoriesVoiceBtn from '@/components/5Entities/Commands/CategoriesVoiceBtn';

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
