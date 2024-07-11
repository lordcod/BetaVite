import SVGCommandsAll from '@/components/5Entities/SVG/Categories/SVGCommandsAll';
import Category from '../../UI/Category';

export default function CategoriesAllBtn() {
  return (
    <Category
      id='all'
      SVG={SVGCommandsAll}
      active={true}
    />
  );
}
