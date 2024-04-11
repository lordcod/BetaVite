import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default args => {
  const generateScopedName =
    args.mode == 'production' ? '[hash:base64:4]' : '[hash:base64:4]';
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@data': resolve(__dirname, './src/components/6Shared'),
        '@context': resolve(__dirname, './src/context'),
      },
    },
    css: {
      modules: {
        localsConvention: 'dashes',
        generateScopedName,
      },
    },
  });
};
