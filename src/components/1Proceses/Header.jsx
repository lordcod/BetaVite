import { LangChangingContext } from '@context/LangContext';
import { useContext } from 'react';

export default function Header() {
  const { t } = useContext(LangChangingContext);

  return (
    <>
      <header>
        <nav></nav>
      </header>
    </>
  );
}
