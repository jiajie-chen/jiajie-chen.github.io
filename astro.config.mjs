/* eslint-env node */
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://jiajie-chen.github.io',
    integrations: [mdx(), sitemap(), tailwind()],
})
