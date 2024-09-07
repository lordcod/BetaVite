import { Main } from '@components/2Pages/Main/Main.lazy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@components/1Proceses/Header';
import Footer from '@components/1Proceses/Footer';
import { ThemeChangingState } from '@context/ThemeChanging';
import { Error404 } from '@components/2Pages/Errors/Error 404/Error404.lazy';
import { LangChangingState } from '@context/LangContext';
import { MenuState } from '@context/MenuContext';

export default function App() {
  return (
    <LangChangingState>
      <BrowserRouter>
        <MenuState>
          {/* <CloseMenu />
          <PhoneMenu /> */}
          <ThemeChangingState>{/* <SettingsMenu /> */}</ThemeChangingState>
          <Header />
        </MenuState>

        {/* <Suspense 
        fallback={<MainLoader />}
        > */}
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />

          <Route
            path=''
            element={<Error404 />}
          />
          <Route
            path='*'
            element={<Error404 />}
          />
          <Route element={<Error404 />} />
        </Routes>
        {/* </Suspense> */}
        <Footer />
      </BrowserRouter>
    </LangChangingState>
  );
}
