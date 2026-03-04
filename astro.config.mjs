// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://enzo-tribelo.github.io',
  base: '/cayden/',
  vite: {
    plugins: [tailwindcss()]
  }
});
