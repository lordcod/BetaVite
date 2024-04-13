import { useEffect, useRef } from 'react';
import LeftButtons from '@components/4Features/Header/LeftButtons';
import RightButtons from '@components/4Features/Header/RightButtons';
import SVGOnTop from '@components/5Entities/SVG/SVGOnTop';
import SVGMenu from '@components/5Entities/SVG/SVGMenu';

export default function Header() {
  const header = useRef(null);
  const btn = useRef(null);
  useEffect(() => {
    const headerEl = header.current;
    const btnEl = btn.current;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 64
        ? headerEl.classList.add('scrolled')
        : headerEl.classList.remove('scrolled');
      scrollY > window.innerHeight
        ? btnEl.classList.add('show')
        : btnEl.classList.remove('show');
    });
  });

  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        ref={btn}
        onClick={scroll}
        className='ontop-btn'>
        <SVGOnTop />
      </button>
      <header ref={header}>
        <nav className='px-6 mx-auto flex items-center justify-between w-full size-limit'>
          <button className=' header-btn p-2 2md:hidden'>
            <SVGMenu />
          </button>
          <LeftButtons />
          <RightButtons />
        </nav>
      </header>
    </>
  );
}
