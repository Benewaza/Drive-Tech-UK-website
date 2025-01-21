import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'static', // Ensures a static build for GitHub Pages
  integrations: [tailwind()], // Enables Tailwind CSS
});
