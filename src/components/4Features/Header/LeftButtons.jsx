import HeaderHomeBtn from '@/components/5Entities/HeaderButtons/LeftBtns/HeaderHomeBtn';
import HeaderDocsBtn from '@/components/5Entities/HeaderButtons/LeftBtns/HeaderDocsBtn';
import HeaderComsBtn from '@/components/5Entities/HeaderButtons/LeftBtns/HeaderComsBtn';
import HeaderSupporBtn from '@/components/5Entities/HeaderButtons/LeftBtns/HeaderSupporBtn';

export default function LeftButtons() {
  return (
    <div className='header_btn_block'>
      <HeaderHomeBtn />
      <HeaderDocsBtn />
      <HeaderComsBtn />
      <HeaderSupporBtn />
    </div>
  );
}
