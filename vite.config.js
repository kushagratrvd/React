import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        meals: resolve(__dirname, 'Meals Listing/index.html'),
        cat: resolve(__dirname, 'Random Cat/index.html'),
        jokes: resolve(__dirname, 'Random Jokes/index.html'),
        users: resolve(__dirname, 'Random Users/index.html'),
        youtube: resolve(__dirname, 'Youtube Videos/index.html')
      }
    }
  }
});