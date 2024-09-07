import { lazy } from 'react';

export const LazyServers = lazy(() => import('./Servers.jsx'));

export { LazyServers as Servers };
