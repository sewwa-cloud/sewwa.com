import { rename, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Options as AutolinkHeadingsOptions } from 'rehype-autolink-headings'
import type { Options as ExternalLinkOptions } from 'rehype-external-links'
import type { AstroIntegration } from 'astro'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import remarkSandpack from '@lekoarts/remark-sandpack'
import tailwindcss from '@tailwindcss/vite'
import { imageService } from '@unpic/astro/service'
import expressiveCode from 'astro-expressive-code'
import { defineConfig, fontProviders } from 'astro/config'
import { toString } from 'hast-util-to-string'
import { h, s } from 'hastscript'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import remarkMermaid from 'remark-mermaidjs'
import remarkSmartypants from 'remark-smartypants'
import { SITE } from './src/constants'
import { readBlogSlugSetFromContentDir } from './src/data/sitemap-blog-slugs'
import { isExcludedFromMainSitemap } from './src/data/sitemap-filters'
import { remarkAsides } from './src/remark'
import { pagefindIntegration } from './src/utils'

const blogSlugs = readBlogSlugSetFromContentDir()
const toolPages = [
	'/content-brief-generator/',
	'/schema-generator/',
	'/color-palette/',
	'/schema-generator/validator/',
]

/**
 * @astrojs/sitemap always writes the sitemap index as `${filenameBase}-index.xml` (e.g. sitemap-index.xml),
 * not `sitemap.xml`. After build we move it to `sitemap.xml` and drop the `-index` filename.
 */
function moveSitemapIndexToSitemapXml(): AstroIntegration {
	return {
		name: 'move-sitemap-index-to-sitemap-xml',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				const out = fileURLToPath(dir)
				const from = join(out, 'sitemap-index.xml')
				const to = join(out, 'sitemap.xml')
				try {
					await rm(to, { force: true })
					await rename(from, to)
				} catch (err) {
					logger.warn(`move-sitemap-index-to-sitemap-xml: could not move ${from} to ${to}: ${err}`)
				}
			},
		},
	}
}

export default defineConfig({
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'IBM Plex Sans',
				weights: ['400', '500', '600'],
				subsets: ['latin'],
				cssVariable: '--font-plex-sans',
			},
		],
	},
	/** Fully static: every URL (blog + schema guides) is HTML in `dist/` after `astro build`—no server/runtime routes. */
	output: 'static',
	trailingSlash: 'always',
	site: 'https://www.sewwa.com',
	integrations: [
		expressiveCode(),
		mdx(),
		sitemap({
			filenameBase: 'sitemap',
			customPages: toolPages.map((path) => `${SITE.url.replace(/\/$/, '')}${path}`),
			customSitemaps: [
				`${SITE.url.replace(/\/$/, '')}/sitemap-blog.xml`,
				`${SITE.url.replace(/\/$/, '')}/sitemap-schema-guides.xml`,
			],
			filter: (page) => !isExcludedFromMainSitemap(page, blogSlugs),
		}),
		moveSitemapIndexToSitemapXml(),
		pagefindIntegration(),
		react(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		service: imageService(),
	},
	devToolbar: {
		enabled: false,
	},
	markdown: {
		// @ts-expect-error: Astro types don't match remark plugin
		remarkPlugins: [
			[remarkSmartypants, { backticks: false }],
			remarkDirective,
			remarkAsides,
			[
				remarkMermaid,
				{
					launchOptions: {
						args: ['--no-sandbox', '--disable-setuid-sandbox'],
					},
				},
			],
			[remarkSandpack, { componentName: ['Playground'] }],
		],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['nofollow'],
					content: { type: 'text', value: ' (opens in a new window)' },
					properties: { className: ['external_link'] },
					contentProperties: { className: ['sr-only'] },
				} satisfies ExternalLinkOptions,
			],
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'after',
					group() {
						return h('.markdown-heading')
					},
					headingProperties() {
						return { tabIndex: -1 }
					},
					properties(node: Parameters<typeof toString>[0]) {
						return { ariaLabel: `Permalink: ${toString(node)}`, className: 'anchor' }
					},
					content() {
						return h('svg', { className: 'anchor-icon', viewBox: '0 0 16 16', ariaHidden: true }, [
							s('path', { d: 'm7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z' }),
						])
					},
				} satisfies AutolinkHeadingsOptions,
			],
		],
	},
})
