import { useEffect, useRef } from 'react';
import LeftButtons from '@/components/4Features/Header/LeftButtons';
import RightButtons from '@/components/4Features/Header/RightButtons';

export default function Header() {
  const ref = useRef(null);
  useEffect(() => {
    const headerEl = ref.current;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 64) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    });
  });

  return (
    <header ref={ref}>
      <nav className='px-6 mx-auto flex items-center justify-between w-full size-limit'>
        <LeftButtons />
        <RightButtons />
      </nav>
    </header>
  );
}
