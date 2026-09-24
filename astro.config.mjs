import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';


// https://astro.build/config
export default defineConfig({
    trailingSlash: "ignore", // ✅ Forces removal of trailing slashes
    site: 'https://chorosia.com',
    compressHTML: true, // keep pre-v7 HTML whitespace handling
    integrations: [
        mdx(),
        sitemap()
    ],
    vite: {
        build: {
            // keep Vite 6 output: its default browser targets and esbuild CSS minifier
            target: ['edge88', 'firefox78', 'chrome87', 'safari14'],
            cssMinify: 'esbuild'
        }
    },
    markdown: {
        processor: unified(), // keep remark/rehype rendering (v7 defaults to Sätteri)
        remarkPlugins: [],
        rehypePlugins: [],
        // syntaxHighlight: 'shiki'
        // syntaxHighlight: 'prism'
      }
});
