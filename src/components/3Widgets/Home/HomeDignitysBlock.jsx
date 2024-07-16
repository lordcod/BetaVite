import ADignity from '@components/4Features/Home/ADignity';
import BDignity from '@components/4Features/Home/BDignity';
import CDignity from '@components/4Features/Home/CDignity';
import DDignity from '@components/4Features/Home/DDignity';
import EDignity from '@components/4Features/Home/EDignity';
import FDignity from '@components/4Features/Home/FDignity';
import { useEffect } from 'react';

export default function HomeDignitysBlock() {
  useEffect(() => {
    let observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('a');
          }
        });
      },
      { threshold: 0.1 },
    );
    Array.from(document.getElementsByClassName('dignity')).forEach(dig => {
      observer.observe(dig);
    });
  }, []);
  return (
    <div className='home_dignitys'>
      <div className='home_dignitys-list'>
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
