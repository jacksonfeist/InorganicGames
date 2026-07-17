// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://inorganicgames.com',
  output: 'static',
  integrations: [
    sitemap({
      // Legal pages for the Secure Fields Jira app — real content, but not part
      // of the B2B playable-ads pitch. Keep them out of the sitemap we feed to
      // search/AI crawlers for that product.
      filter: (page) => !page.includes('/secure-fields/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
