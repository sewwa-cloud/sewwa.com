import { SITE } from '@constants'
import type { ProgrammaticEntry } from './types'

function siteOrigin(): string {
	return SITE.url.replace(/\/$/, '')
}

function absoluteUrl(path: string): string {
	const base = siteOrigin()
	const p = path.startsWith('/') ? path : `/${path}`
	return `${base}${p}`
}

function defaultOgAbsoluteUrl(): string {
	const path = SITE.defaultOgImage.startsWith('/') ? SITE.defaultOgImage : `/${SITE.defaultOgImage}`
	return `${siteOrigin()}${path}`
}

/** JSON-LD graph for programmatic guide URLs (industry / platform / schema type). */
export function programmaticPageJsonLd(entry: ProgrammaticEntry): Record<string, unknown> {
	const base = siteOrigin()
	const pageUrl = absoluteUrl(`${entry.urlSegment}/`)
	const pageId = `${pageUrl}#webpage`
	const breadcrumbId = `${pageUrl}#breadcrumb`
	const websiteId = `${base}/#website`
	const orgId = `${base}/#organization`
	const guidesUrl = absoluteUrl('schema-guides/')
	const defaultOgHref = defaultOgAbsoluteUrl()

	const breadcrumbName =
		entry.kind === 'industry'
			? entry.industryLabel
			: entry.kind === 'platform'
				? entry.platformLabel
				: entry.schemaTypeLabel

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': orgId,
				name: SITE.title,
				url: `${base}/`,
			},
			{
				'@type': 'WebSite',
				'@id': websiteId,
				name: SITE.title,
				url: `${base}/`,
				publisher: { '@id': orgId },
			},
			{
				'@type': 'BreadcrumbList',
				'@id': breadcrumbId,
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Home',
						item: `${base}/`,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: 'Schema guides',
						item: guidesUrl,
					},
					{
						'@type': 'ListItem',
						position: 3,
						name: breadcrumbName,
						item: pageUrl,
					},
				],
			},
			{
				'@type': 'WebPage',
				'@id': pageId,
				url: pageUrl,
				name: entry.title,
				description: entry.description,
				isPartOf: { '@id': websiteId },
				breadcrumb: { '@id': breadcrumbId },
				inLanguage: SITE.lang,
				primaryImageOfPage: {
					'@type': 'ImageObject',
					url: defaultOgHref,
				},
				publisher: { '@id': orgId },
			},
		],
	}
}

/** JSON-LD for the /schema-guides/ hub (collection of guide links). */
export function schemaGuidesHubJsonLd(params: {
	title: string
	description: string
}): Record<string, unknown> {
	const base = siteOrigin()
	const pageUrl = absoluteUrl('schema-guides/')
	const pageId = `${pageUrl}#webpage`
	const breadcrumbId = `${pageUrl}#breadcrumb`
	const websiteId = `${base}/#website`
	const orgId = `${base}/#organization`
	const defaultOgHref = defaultOgAbsoluteUrl()

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': orgId,
				name: SITE.title,
				url: `${base}/`,
			},
			{
				'@type': 'WebSite',
				'@id': websiteId,
				name: SITE.title,
				url: `${base}/`,
				publisher: { '@id': orgId },
			},
			{
				'@type': 'BreadcrumbList',
				'@id': breadcrumbId,
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Home',
						item: `${base}/`,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: 'Schema guides',
						item: pageUrl,
					},
				],
			},
			{
				'@type': 'CollectionPage',
				'@id': pageId,
				url: pageUrl,
				name: params.title,
				description: params.description,
				isPartOf: { '@id': websiteId },
				breadcrumb: { '@id': breadcrumbId },
				inLanguage: SITE.lang,
				primaryImageOfPage: {
					'@type': 'ImageObject',
					url: defaultOgHref,
				},
				publisher: { '@id': orgId },
			},
		],
	}
}
