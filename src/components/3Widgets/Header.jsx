import { useEffect, useRef } from 'react';
import LeftButtons from '@components/4Features/Header/LeftButtons';
import RightButtons from '@components/4Features/Header/RightButtons';
import SVGOnTop from '@components/5Entities/SVG/SVGOnTop';
import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';
import PhoneMenuButton from '@components/4Features/Header/PhoneMenuButton';
import { MenuContext } from '@context/MenuContext';

export default function Header() {
  const { t } = useContext(LangChangingContext);

  const btn = useRef(null);

  useEffect(() => {
    const btnEl = btn.current;

    window.addEventListener('scroll', e => {
      e.preventDefault();

      let scrollY = Math.floor(window.visualViewport.pageTop);

      scrollY > 64;
      if (scrollY > 64) {
        btnEl.classList.add('show');
      } else {
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
      <header>
        <nav className='header__nav'>
          <PhoneMenuButton />
          <LeftButtons />
          <RightButtons />
        </nav>
      </header>
    </>
  );
}
