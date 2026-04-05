import { industryEntries } from './programmatic/industries'
import { platformEntries } from './programmatic/platforms'
import { schemaGuideEntries } from './programmatic/schema-guides'

/** First pathname segment (no leading/trailing slashes) for sitemap routing. */
export function firstPathSegment(pageUrl: string): string | undefined {
	const schemeIdx = pageUrl.indexOf('//')
	if (schemeIdx === -1) return undefined
	const pathStart = pageUrl.indexOf('/', schemeIdx + 2)
	if (pathStart === -1) return undefined
	const path = pageUrl.slice(pathStart).replace(/\/+$/, '')
	const parts = path.split('/').filter(Boolean)
	return parts[0]
}

/** Hub + every programmatic guide URL segment (industry, platform, schema type). */
export const SCHEMA_GUIDE_PATH_SEGMENTS = new Set<string>([
	'schema-guides',
	...industryEntries.map((e) => e.urlSegment),
	...platformEntries.map((e) => e.urlSegment),
	...schemaGuideEntries.map((e) => e.urlSegment),
])

export function isExcludedFromMainSitemap(
	pageUrl: string,
	blogSlugs: ReadonlySet<string>,
): boolean {
	const seg = firstPathSegment(pageUrl)
	if (!seg) return false
	return blogSlugs.has(seg) || SCHEMA_GUIDE_PATH_SEGMENTS.has(seg)
}
