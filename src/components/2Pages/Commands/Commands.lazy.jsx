import { lazy } from 'react';

export const LazyCommands = lazy(() => import('./Commands.jsx'));

export { LazyCommands as Commands };
