import { useEffect, useRef } from 'react';
import LeftButtons from '@components/4Features/Header/LeftButtons';
import RightButtons from '@components/4Features/Header/RightButtons';
import SVGOnTop from '@components/5Entities/SVG/SVGOnTop';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import PhoneMenuButton from '../4Features/Header/PhoneMenuButton';

export default function Header() {
  const { t } = useContext(LangChangingContext);

  const header = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    const headerEl = header.current;
    const btnEl = btn.current;

    window.addEventListener('scroll', e => {
      e.preventDefault();

      let scrollY = Math.floor(window.visualViewport.pageTop);

      scrollY > 64;
      if (scrollY > 64) {
        headerEl.classList.add('scrolled');
        btnEl.classList.add('show');
      } else {
        headerEl.classList.remove('scrolled');
        btnEl.classList.remove('show');
      }
    });
  });

  const scroll = e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button
        ref={btn}
        onClick={scroll}
        className='ontop-btn'
        aria-label={t('header.onTop')}>
        <SVGOnTop />
      </button>
      <header ref={header}>
        <nav className='px-6 mx-auto flex items-center justify-between w-full size-limit select-none'>
          <PhoneMenuButton />
          <LeftButtons />
          <RightButtons />
        </nav>
      </header>
    </>
  );
}
