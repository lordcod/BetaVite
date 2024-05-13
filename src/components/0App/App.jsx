import { Suspense } from 'react';
import { Main } from '@components/2Pages/Main/Main.lazy';
import { Commands } from '@components/2Pages/Commands/Commands.lazy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@components/3Widgets/Header';
import Footer from '@components/3Widgets/Footer';
import MainLoader from '@components/5Entities/Loaders/MainLoader';
// import Admin from '@components/3Widgets/Menus/Admin';
import { ThemeChangingState } from '@context/ThemeChanging';
// import ThemeChangingLoader from '@components/3Widgets/ThemeChangingLoader';
// import { NoSiteTemporarily } from '@components/2Pages/Errors/NoSiteTemporarily/NoSiteTemporarily.lazy';
import { Error404 } from '@components/2Pages/Errors/Error 404/Error404.lazy';
// import { Results } from '@components/2Pages/Results/Results.lazy';
import { LangChangingState } from '@context/LangContext';
import SiteLoader from '@components/5Entities/Loaders/SiteLoader';
import { MenuState } from '@context/MenuContext';
import PhoneMenu from '@components/3Widgets/Menus/PhoneMenu';
import CloseMenu from '@components/3Widgets/Menus/CloseMenu';
import SettingsMenu from '@components/3Widgets/Menus/SettingsMenu';

export default function App() {
  return (
    <Suspense fallback={<SiteLoader />}>
      <LangChangingState>
        <BrowserRouter>
          <ThemeChangingState>
            <MenuState>
              <CloseMenu />
              <PhoneMenu />
              <SettingsMenu />
              <Header />
              {/* <Admin /> */}
            </MenuState>
          </ThemeChangingState>

          <Suspense fallback={<MainLoader />}>
            <Routes>
              <Route
                path='/'
                element={<Main />}
              />
              <Route
                path='/commands'
                element={<Commands />}
              />
              {/* 
              <Route
                path='/support'
                element={<NoSiteTemporarily />}
              />
              <Route
                path='/embed'
                element={<NoSiteTemporarily />}
              />
              <Route
                path='/servers'
                element={<NoSiteTemporarily />}
              />
              <Route
                path='/results'
                element={<Results />}
              /> */}

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
          </Suspense>
          <Footer />
        </BrowserRouter>
      </LangChangingState>
    </Suspense>
  );
}
