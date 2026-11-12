// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { baseLinksPlugin } from './src/plugins/base-links.mjs';

/*
 * Deployment URLs.
 *
 * Defaults target the GitHub Pages repository subpath:
 *   https://pharmadatahub.github.io/gravitate-center-webpage/
 *
 * For a custom domain, set SITE_URL=https://your-domain and BASE_PATH=/
 * (as GitHub repository variables, or in a local .env file). See README.md.
 */
const site = process.env.SITE_URL || 'https://pharmadatahub.github.io';
const base = process.env.BASE_PATH || '/gravitate-center-webpage';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  markdown: {
    processor: satteri({
      hastPlugins: [baseLinksPlugin(base)],
    }),
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-display',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Public Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
