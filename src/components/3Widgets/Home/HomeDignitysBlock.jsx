import ADignity from '@components/4Features/Home/ADignity';
import BDignity from '@components/4Features/Home/BDignity';
import CDignity from '@components/4Features/Home/CDignity';
import DDignity from '@components/4Features/Home/DDignity';
import EDignity from '@components/4Features/Home/EDignity';
import FDignity from '@components/4Features/Home/FDignity';

export default function HomeDignitysBlock() {
  return (
    <div className='flex justify-center'>
      <div className='dignity-list'>
        <ADignity />
        <BDignity />
        <CDignity />
        <DDignity />
        <EDignity />
        <FDignity />
      </div>
    </div>
  );
}
