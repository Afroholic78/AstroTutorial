import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://main--golden-brigadeiros-6192dd.netlify.app/",
  integrations: [preact()]
});