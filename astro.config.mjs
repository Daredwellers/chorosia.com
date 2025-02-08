import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import markdownIntegration from '@astropub/md'

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        markdownIntegration(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    markdown: {
        remarkPlugins: [],
        rehypePlugins: [],
        // syntaxHighlight: 'shiki'
        // syntaxHighlight: 'prism'
      }
});
