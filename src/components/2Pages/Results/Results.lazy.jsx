import { lazy } from 'react';

export const LazyResults = lazy(() => import('./Results.jsx'));

export { LazyResults as Results };
