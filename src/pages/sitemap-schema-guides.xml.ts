/* global Response */
import type { APIRoute } from 'astro'
import { SITE } from '@constants'
import { industryEntries } from '@data/programmatic/industries'
import { platformEntries } from '@data/programmatic/platforms'
import { schemaGuideEntries } from '@data/programmatic/schema-guides'

export const prerender = true

export const GET: APIRoute = async () => {
	const base = SITE.url.replace(/\/$/, '')
	const programmatic = [...industryEntries, ...platformEntries, ...schemaGuideEntries]
	const urls = [
		`${base}/schema-guides/`,
		...programmatic.map((e) => `${base}/${e.urlSegment}/`),
	].sort()

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>`

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
		},
	})
}
