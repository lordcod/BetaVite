import { lazy } from 'react';

export const LazyEmbedBuilder = lazy(() => import('./EmbedBuilder.jsx'));

export { LazyEmbedBuilder as EmbedBuilder };
