import { Suspense, useEffect } from 'react';
import { Main } from '@/components/2Pages/Main/Main.lazy';
import { Commands } from '@/components/2Pages/Commands/Commands.lazy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/3Widgets/Header';
import { EmbedBuilder } from '@/components/2Pages/EmbedBuilder/EmbedBuilder.lazy';
import Footer from '@/components/3Widgets/Footer';
import { Support } from '@/components/2Pages/Support/Support.lazy';
import MainLoader from '@/components/5Entities/Loaders/MainLoader';
import Admin from '../3Widgets/Menus/Admin';
import { ThemeChangingState } from '../../context/ThemeChanging';
import ThemeChangingLoader from '../3Widgets/ThemeChangingLoader';

export default function App() {
  useEffect(() => {
    console.log(
      `%cVersion: 1.4.0 (production)\nBuild: 22.02.2024, 08:25:30\nAuthor: shashlychok`,
      'color: #fff',
    );
    console.log(`%cLordBot starts magic`, 'color: #D902FF');
  }, []);

  return (
    <Suspense fallback={<MainLoader />}>
      <BrowserRouter>
        <ThemeChangingState>
          <Admin />
          <ThemeChangingLoader />
        </ThemeChangingState>
        <Header />
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
            <Route
              path='/support'
              element={<Support />}
            />
            <Route
              path='/embed'
              element={<EmbedBuilder />}
            />
            <Route
              path='/servers'
              element={<MainLoader />}
            />
            <Route
              path='*'
              element={'tttttttexxt'}
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<MainLoader />}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </Suspense>
  );
}
