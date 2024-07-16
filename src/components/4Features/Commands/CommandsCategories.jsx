import CategoriesAllBtn from '@/components/5Entities/Commands/Categories/CategoriesAllBtn';
import CategoriesMajorBtn from '@/components/5Entities/Commands/Categories/CategoriesMajorBtn';
import CategoriesModeraionBtn from '@/components/5Entities/Commands/Categories/CategoriesModeraionBtn';
import CategoriesEconomyBtn from '@/components/5Entities/Commands/Categories/CategoriesEconomyBtn';
import CategoriesVoiceBtn from '@/components/5Entities/Commands/Categories/CategoriesVoiceBtn';
import CategoriesReactionsBtn from '@/components/5Entities/Commands/Categories/CategoriesReactionsBtn';

export default function CommandsCategories() {
  return (
    <div className='sidebar_categories'>
      <CategoriesAllBtn />
      <CategoriesMajorBtn />
      <CategoriesModeraionBtn />
      <CategoriesEconomyBtn />
      <CategoriesVoiceBtn />
      <CategoriesReactionsBtn />
    </div>
  );
}
