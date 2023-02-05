import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

    extensions: ['.svelte', '.md'],
    rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
    ],
    preprocess: [
        sveltePreprocess(),
        mdsvex({
            extensions: ['.md']
        })
    ] 
};

export default config;
