import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default args => {
  const generateScopedName =
    args.mode == 'production' ? '[hash:base64:4]' : '[hash:base64:4]';

  return defineConfig({
    publicDir: 'public',
    server: {
      host: true
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@data': resolve(__dirname, './src/components/6Shared'),
        '@context': resolve(__dirname, './src/context'),
        '@styles': resolve(__dirname, './src/styles'),
        '@assets': resolve(__dirname, './src/Assets'),
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
