import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: isProd
      ? 'https://hubertchim-porfolio.vercel.app/'
      : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      react(),
      federation({
        name: 'portfolio_remote',
        filename: 'remoteEntry.js',
        exposes: {
          './PortfolioApp': './src/app/App.tsx',
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: false,
    },
    preview: {
      port: 5001,
      strictPort: true,
    }
  };
});