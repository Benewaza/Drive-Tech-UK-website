import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  site: "https://github.com/Benewaza/Drive-Tech-UK-website",
  base: '/<Drive-Tech-UK-website>/', // Base path for GitHub Pages
});

