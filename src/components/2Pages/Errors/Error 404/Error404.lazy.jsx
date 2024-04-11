import { lazy } from 'react';

export const LazyError404 = lazy(() => import('./Error404'));

export { LazyError404 as Error404 };
