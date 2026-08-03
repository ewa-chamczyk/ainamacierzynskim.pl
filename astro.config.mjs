// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ainamacierzynskim.pl',
  // Port zgodny z .claude/launch.json — `npm run dev -- --port` nie przekazywał argumentu dalej.
  server: { port: 4322 },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
