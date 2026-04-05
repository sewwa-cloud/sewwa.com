/* global Response */
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE } from '@constants'
import { sortAsc } from '@utils'

export const prerender = true

export const GET: APIRoute = async () => {
	const posts = sortAsc(await getCollection('blog'))
	const base = SITE.url.replace(/\/$/, '')
	const urls = posts.map((p) => `${base}/${p.data.slug}/`)

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
