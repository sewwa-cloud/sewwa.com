import { SITE } from '@constants'

/** Site origin without trailing slash (e.g. https://www.sewwa.com). */
export function siteOrigin(): string {
	return SITE.url.replace(/\/$/, '')
}

/**
 * Public, stable logo URL for Organization / publisher JSON-LD (wordmark PNG in /public).
 */
export const SITE_LOGO_ABSOLUTE = `${siteOrigin()}/sewwa-logo.png`

const TOOL_BASE = siteOrigin()

/** Free Sewwa tools referenced from Organization structured data. */
export const SEWWA_TOOL_WEB_APPLICATIONS: Array<Record<string, string>> = [
	{
		'@type': 'WebApplication',
		name: 'Sewwa AI Brief Generator',
		url: `${TOOL_BASE}/content-brief-generator`,
	},
	{
		'@type': 'WebApplication',
		name: 'Sewwa Schema Generator',
		url: `${TOOL_BASE}/schema-generator`,
	},
	{
		'@type': 'WebApplication',
		name: 'Sewwa JSON-LD Validator',
		url: `${TOOL_BASE}/schema-generator/validator`,
	},
	{
		'@type': 'WebApplication',
		name: 'Sewwa Color Palette',
		url: `${TOOL_BASE}/color-palette`,
	},
]

/**
 * Core Organization fields shared across standalone and @graph JSON-LD.
 * Pass optional overrides (e.g. `@id`, `email`).
 */
export function sewwaOrganizationProperties(
	extra?: Record<string, unknown>,
): Record<string, unknown> {
	const base = siteOrigin()
	return {
		'@type': 'Organization',
		name: SITE.title,
		url: `${base}/`,
		description: SITE.description,
		logo: {
			'@type': 'ImageObject',
			url: SITE_LOGO_ABSOLUTE,
			width: 852,
			height: 223,
		},
		hasPart: SEWWA_TOOL_WEB_APPLICATIONS,
		...extra,
	}
}
