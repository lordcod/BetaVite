import HomeTitleBlock from '../../3Widgets/Home/HomeTitleBlock';
import HomeHrBlock from '../../3Widgets/Home/HomeHrBlock';
import HomeDignitysBlock from '../../3Widgets/Home/HomeDignitysBlock';
import '@styles/Home.css';

export default function MainPage() {
  return (
    <div className='page '>
      <div className='flex flex-col'>
        <HomeTitleBlock />
        <HomeHrBlock />
        <HomeDignitysBlock />
      </div>
    </div>
  );
}
