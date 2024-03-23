import { lazy } from 'react';

export const LazyMain = lazy(() => import('./Main.jsx'));

export { LazyMain as Main };
