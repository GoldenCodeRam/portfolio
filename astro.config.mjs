import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://goldencoderam.github.io',
  base: 'portfolio',
  integrations: [svelte(), tailwind()],
  vite: {
    server: {
      watch: {
        ignored: ["**/.direnv/**/*"],
      },
    },
  },
});
