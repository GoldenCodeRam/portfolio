import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://goldencoderam.github.io',
  // Set the base path with GitHub Pages.
  base: process.env.name === 'github-pages' ? 'portfolio' : '',
  integrations: [svelte(), tailwind()],
  vite: {
    server: {
      watch: {
        ignored: ["**/.direnv/**/*"],
      },
    },
  },
});
