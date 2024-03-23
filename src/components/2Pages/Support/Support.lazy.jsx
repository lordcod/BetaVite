import { lazy } from 'react';

export const LazySupport = lazy(() => import('./Support.jsx'));

export { LazySupport as Support };
