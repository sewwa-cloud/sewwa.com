type MapKey<T extends Map<unknown, unknown>> = T extends Map<infer K, unknown> ? K : never

/**
 * Metadata for your site
 */
export const SITE: Record<string, string> = {
	/**
	 * Base URL of your site, used in sitemap generation
	 */
	url: 'https://www.sewwa.com',
	/**
	 * Site-wide title
	 */
	title: 'SEWWA',
	/**
	 * Used on index page and as a fallback if no title is set
	 */
	titleDefault: 'SEWWA - Free SEO Tools & Guides | Schema Generator',
	/**
	 * Used in meta tags, RSS feed, and other places
	 */
	description: 'Free SEO tools and guides: JSON-LD Schema Generator, Color Palette, and expert SEO tips. No login required. Optimize your website with tools and strategies.',
	/**
	 * Language used in the <html> tag
	 */
	lang: 'en-US',
	/**
	 * Name of the image inside `public` folder that should be used as a default og:image
	 */
	defaultOgImage: '/og-image.png',
	/**
	 * Default author name that gets added to meta tags
	 */
	defaultAuthor: 'Sewwa',
}

/** Public contact email (About page, structured data). */
export const CONTACT_EMAIL = 'hello@sewwa.com'

interface Header {
	internal: Array<{ title: string, url: string }>
	external: Array<{ title: string, url: string, props?: Record<string, unknown> }>
}

/**
 * Links used in the header
 */
export const HEADER: Header = {
	/**
	 * Internal links to other subpages shown in the header navigation
	 */
	internal: [
		{
			title: 'Blog',
			url: '/blog/',
		},
		{
			title: 'Schema guides',
			url: '/schema-guides/',
		},
		{
			title: 'About',
			url: '/about/',
		},
	],
	/**
	 * Arbitrary list of links (e.g. social media) shown on the right side of the header
	 */
	external: [
		{
			title: 'Homepage',
			url: 'https://www.sewwa.com',
			props: {
				target: '_blank',
			},
		},
	],
}

/**
 * A map of name - slug pairs
 */
export const FRONTMATTER_TAGS = new Map(
	[
		['General', 'general'] as const,
		['AI', 'ai'] as const,
		['MCP', 'mcp'] as const,
		['AI Agents', 'ai-agents'] as const,
		['Coding', 'coding'] as const,
		['CSS', 'css'] as const,
		['Design', 'design'] as const,
		['Developer Tools', 'developer-tools'] as const,
		['Frontend', 'frontend'] as const,
		['GitHub', 'github'] as const,
		['JavaScript', 'javascript'] as const,
		['JSON-LD', 'json-ld'] as const,
		['MDX', 'mdx'] as const,
		['Open Source', 'open-source'] as const,
		['Productivity', 'productivity'] as const,
		['Schema.org', 'schema-org'] as const,
		['SEO', 'seo'] as const,
		['Tools', 'tools'] as const,
		['Web Development', 'web-development'] as const,
		['Content Marketing', 'content-marketing'] as const,
		['Content Brief', 'content-brief'] as const,
	],
)

export type FrontmatterTag = MapKey<typeof FRONTMATTER_TAGS>

export const SKIP_NAV_ID = 'skip-to-content'

/**
 * Available "asides" that can be used in MDX files
 */
export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
