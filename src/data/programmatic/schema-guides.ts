import type { SchemaTypeEntry } from './types'

export const schemaGuideEntries: SchemaTypeEntry[] = [
	{
		kind: 'schemaType',
		urlSegment: 'product-schema-complete-guide',
		title: 'Product Schema — Complete Implementation Guide | SEWWA',
		description:
			'Product structured data: required properties, offers, reviews, and valid JSON-LD examples for e-commerce.',
		schemaTypeLabel: 'Product',
		requiredProperties: [
			{ name: 'name', description: 'Product name visible on the page' },
			{ name: 'image', description: 'Product image URL(s)' },
			{ name: 'description', description: 'Human-readable description' },
		],
		optionalProperties: [
			{ name: 'brand', description: 'Brand as Brand or Organization' },
			{ name: 'sku', description: 'Merchant SKU' },
			{ name: 'gtin', description: 'GTIN8/12/13/14 when available' },
			{ name: 'offers', description: 'Offer with price, currency, availability' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'Product',
				name: 'Example LED Desk Lamp',
				image: ['https://www.example.com/lamp.jpg'],
				description: 'Adjustable LED desk lamp with USB charging port.',
				sku: 'LAMP-001',
				offers: {
					'@type': 'Offer',
					priceCurrency: 'USD',
					price: '49.99',
					availability: 'https://schema.org/InStock',
					url: 'https://www.example.com/products/lamp',
				},
			},
			null,
			2,
		),
		validationTips: [
			'Price and currency must match visible offer on the product URL',
			'Use AggregateRating/Review only with compliant, visible reviews',
			'Avoid marking up out-of-stock items as InStock',
		],
		useCase: 'E-commerce product detail pages and variants you want eligible for product rich results.',
		bodyMarkdown: `**Product** is the core type for PDPs. Google expects **Offer** (or aggregate offers) to align with what users see, including **price**, **currency**, and **availability**.

Combine with **Review** cautiously—self-serving reviews have strict policies. Use SEWWA to generate a baseline graph, then map your catalog fields.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'article-schema-complete-guide',
		title: 'Article Schema — Complete Guide | SEWWA',
		description:
			'NewsArticle and Article JSON-LD: headline, dates, author, publisher, and image.',
		schemaTypeLabel: 'Article',
		requiredProperties: [
			{ name: 'headline', description: 'Article title' },
			{ name: 'author', description: 'Person or Organization' },
			{ name: 'datePublished', description: 'ISO-8601 date' },
		],
		optionalProperties: [
			{ name: 'image', description: 'Featured image URL' },
			{ name: 'publisher', description: 'Organization with logo' },
			{ name: 'dateModified', description: 'Last update date' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: 'How to Add JSON-LD to Your Site',
				author: { '@type': 'Person', name: 'Sam Writer' },
				datePublished: '2026-04-01',
				image: 'https://www.example.com/hero.jpg',
				publisher: {
					'@type': 'Organization',
					name: 'Example Times',
					logo: { '@type': 'ImageObject', url: 'https://www.example.com/logo.png' },
				},
			},
			null,
			2,
		),
		validationTips: [
			'Use NewsArticle only for timely news that meets Google news policies',
			'Keep headline similar to visible H1',
			'Publisher logo should meet minimum size guidelines',
		],
		useCase: 'Blog posts, guides, and editorial content pages.',
		bodyMarkdown: `**Article** helps search engines connect **headline**, **author**, and **dates** to your page. **BlogPosting** is a subtype—use it when it reflects the content.

Match **dateModified** to visible "updated" text when you maintain it.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'faq-schema-complete-guide',
		title: 'FAQ Schema — Complete Guide | SEWWA',
		description:
			'FAQPage structured data: mainEntity Question/Answer pairs that match on-page FAQs.',
		schemaTypeLabel: 'FAQPage',
		requiredProperties: [
			{ name: 'mainEntity', description: 'Array of Question items with acceptedAnswer' },
		],
		optionalProperties: [{ name: 'speakable', description: 'Optional speakable selectors if used' }],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'FAQPage',
				mainEntity: [
					{
						'@type': 'Question',
						name: 'What is JSON-LD?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'JSON-LD is a format for linked data using JSON, often embedded in script tags.',
						},
					},
				],
			},
			null,
			2,
		),
		validationTips: [
			'Questions and answers must be visible on the page verbatim',
			'Do not use FAQPage for advertising-only content',
			'One FAQPage per page with a real FAQ UI',
		],
		useCase: 'Pages with a clear FAQ section and matching Q&A content.',
		bodyMarkdown: `**FAQPage** can earn FAQ rich results when **content quality** and **policy** requirements are met. Every **Question** in JSON-LD should appear on the page for users.

If FAQs are thin or duplicated site-wide, skip markup until content is unique and helpful.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'how-to-schema-complete-guide',
		title: 'HowTo Schema — Complete Guide | SEWWA',
		description:
			'HowTo structured data: ordered steps, supplies, tools, and images for instructional content.',
		schemaTypeLabel: 'HowTo',
		requiredProperties: [
			{ name: 'name', description: 'How-to title' },
			{ name: 'step', description: 'HowToStep entries with name and text (and optional image)' },
		],
		optionalProperties: [
			{ name: 'totalTime', description: 'ISO-8601 duration' },
			{ name: 'supply', description: 'Items consumed' },
			{ name: 'tool', description: 'Tools required' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'HowTo',
				name: 'Change a bike tire',
				step: [
					{ '@type': 'HowToStep', name: 'Remove wheel', text: 'Open the quick release and remove the wheel.' },
					{ '@type': 'HowToStep', name: 'Replace tube', text: 'Install a new tube and inflate to pressure.' },
				],
			},
			null,
			2,
		),
		validationTips: [
			'Each step must be visible on the page in order',
			'Images on steps should match real step imagery',
			'Avoid HowTo on non-instructional landing pages',
		],
		useCase: 'Tutorials, recipes-style procedural content, and DIY guides.',
		bodyMarkdown: `**HowTo** rewards **real instructions**. If your page is mostly marketing copy with a bullet list hidden behind tabs, fix the UX before expecting rich results.

SEWWA can help you model steps once your on-page outline is solid.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'event-schema-complete-guide',
		title: 'Event Schema — Complete Guide | SEWWA',
		description:
			'Event JSON-LD: dates, location, offers, and online vs offline attendance modes.',
		schemaTypeLabel: 'Event',
		requiredProperties: [
			{ name: 'name', description: 'Event title' },
			{ name: 'startDate', description: 'Start in ISO-8601 with timezone when possible' },
			{ name: 'location', description: 'Place or VirtualLocation' },
		],
		optionalProperties: [
			{ name: 'endDate', description: 'End datetime' },
			{ name: 'eventAttendanceMode', description: 'Online, offline, or mixed' },
			{ name: 'offers', description: 'Ticket offer with URL and price' },
			{ name: 'organizer', description: 'Organization or Person' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'Event',
				name: 'Schema Workshop 2026',
				startDate: '2026-06-01T18:00:00-07:00',
				endDate: '2026-06-01T20:00:00-07:00',
				eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
				location: { '@type': 'VirtualLocation', url: 'https://www.example.com/webinar' },
				organizer: { '@type': 'Organization', name: 'Example Org', url: 'https://www.example.com' },
			},
			null,
			2,
		),
		validationTips: [
			'Update or remove events after they end',
			'Match online/offline mode to real attendance',
			'Ticket URLs should resolve to valid offers',
		],
		useCase: 'Conferences, webinars, concerts, and ticketed experiences.',
		bodyMarkdown: `**Event** markup should stay **fresh**: expired events hurt trust. Use **eventStatus** when events are cancelled or rescheduled.

Virtual events need **VirtualLocation** with a real join URL users can access.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'recipe-schema-complete-guide',
		title: 'Recipe Schema — Complete Guide | SEWWA',
		description:
			'Recipe structured data: ingredients, instructions, times, nutrition, and images.',
		schemaTypeLabel: 'Recipe',
		requiredProperties: [
			{ name: 'name', description: 'Recipe name' },
			{ name: 'image', description: 'Finished dish image' },
			{ name: 'recipeIngredient', description: 'Ingredient strings as shown' },
			{ name: 'recipeInstructions', description: 'Steps as ItemList or HowToStep' },
		],
		optionalProperties: [
			{ name: 'prepTime', description: 'ISO-8601 duration' },
			{ name: 'cookTime', description: 'ISO-8601 duration' },
			{ name: 'nutrition', description: 'NutritionInformation' },
			{ name: 'recipeYield', description: 'Servings or yield string' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'Recipe',
				name: 'Quick Oatmeal',
				image: 'https://www.example.com/oatmeal.jpg',
				recipeIngredient: ['1 cup rolled oats', '2 cups water', 'Pinch of salt'],
				recipeInstructions: {
					'@type': 'ItemList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, text: 'Boil water with salt.' },
						{ '@type': 'ListItem', position: 2, text: 'Stir in oats and simmer 5 minutes.' },
					],
				},
			},
			null,
			2,
		),
		validationTips: [
			'Ingredients must match visible recipe card',
			'Use high-quality square-ish images',
			'VideoObject can complement but not replace written steps',
		],
		useCase: 'Recipe pages with full ingredients and instructions visible to users.',
		bodyMarkdown: `**Recipe** rich results are competitive—**accuracy** and **imagery** matter. Nutrition and times should reflect what the recipe actually produces.

SEWWA helps you prototype JSON-LD; always compare against the visible recipe card.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'review-schema-complete-guide',
		title: 'Review Schema — Complete Guide | SEWWA',
		description:
			'Review and rating markup: itemReviewed, reviewRating, and Google review snippet policies.',
		schemaTypeLabel: 'Review',
		requiredProperties: [
			{ name: 'itemReviewed', description: 'Thing being reviewed' },
			{ name: 'reviewRating', description: 'Rating with ratingValue and bestRating' },
			{ name: 'author', description: 'Person or Organization' },
		],
		optionalProperties: [
			{ name: 'reviewBody', description: 'Review text' },
			{ name: 'datePublished', description: 'Publication date' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'Review',
				itemReviewed: { '@type': 'Product', name: 'Example Lamp' },
				reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
				author: { '@type': 'Person', name: 'Alex Reader' },
				reviewBody: 'Bright, stable base, great for long work sessions.',
			},
			null,
			2,
		),
		validationTips: [
			'Follow Google review snippet policies for self-serving reviews',
			'Reviews must be visible on the page',
			'AggregateRating requires multiple ratings meeting thresholds',
		],
		useCase: 'First-party or third-party reviews displayed with the product or service.',
		bodyMarkdown: `**Review** markup is **high risk** if it looks manipulative. Prefer **AggregateRating** when you have many genuine ratings that meet **visibility** requirements.

When in doubt, ship **Product** + **Offer** first; add reviews after legal/marketing review.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'local-business-schema-complete-guide',
		title: 'Local Business Schema — Complete Guide | SEWWA',
		description:
			'LocalBusiness and subtypes: address, geo, hours, phone, and sameAs for local SEO.',
		schemaTypeLabel: 'LocalBusiness',
		requiredProperties: [
			{ name: 'name', description: 'Business name' },
			{ name: 'address', description: 'PostalAddress with street, locality, region, postalCode' },
		],
		optionalProperties: [
			{ name: 'geo', description: 'GeoCoordinates' },
			{ name: 'openingHoursSpecification', description: 'Structured hours' },
			{ name: 'telephone', description: 'Primary phone' },
			{ name: 'sameAs', description: 'Social profile URLs' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'LocalBusiness',
				name: 'Example Coffee',
				address: {
					'@type': 'PostalAddress',
					streetAddress: '123 Main St',
					addressLocality: 'Portland',
					addressRegion: 'OR',
					postalCode: '97209',
					addressCountry: 'US',
				},
				telephone: '+1-503-555-0100',
				url: 'https://www.example.com',
			},
			null,
			2,
		),
		validationTips: [
			'Match NAP to Google Business Profile',
			'Use specific subtype when accurate (Restaurant, Store, etc.)',
			'Opening hours should include special hours when shown on-site',
		],
		useCase: 'Location pages for brick-and-mortar businesses and service areas.',
		bodyMarkdown: `**LocalBusiness** is rarely enough alone—pair with **visible maps**, **hours**, and **CTA** patterns users expect. **areaServed** helps service-area businesses when accurate.

Schema supports clarity; **GBP** and citations still drive most local pack signals.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'organization-schema-complete-guide',
		title: 'Organization Schema — Complete Guide | SEWWA',
		description:
			'Organization JSON-LD: logo, sameAs, contactPoint, and sitewide entity graph.',
		schemaTypeLabel: 'Organization',
		requiredProperties: [
			{ name: 'name', description: 'Legal or brand name' },
			{ name: 'url', description: 'Canonical site URL' },
		],
		optionalProperties: [
			{ name: 'logo', description: 'ImageObject URL meeting size rules' },
			{ name: 'sameAs', description: 'Wikipedia, social profiles' },
			{ name: 'contactPoint', description: 'Customer service ContactPoint' },
		],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: 'Example Inc',
				url: 'https://www.example.com',
				logo: 'https://www.example.com/logo.png',
				sameAs: ['https://www.linkedin.com/company/example'],
			},
			null,
			2,
		),
		validationTips: [
			'Logo should be crawlable and roughly square',
			'Keep sameAs to profiles you control and verify',
			'Use nested Organization in publisher for Article',
		],
		useCase: 'Homepage, about page, and publisher reference for articles and tools.',
		bodyMarkdown: `**Organization** anchors your **knowledge graph** signals. It should be **stable** across the site—avoid conflicting Organization JSON-LD from multiple plugins.

Wire **logo** and **sameAs** once in a global partial; extend with **contactPoint** for support surfaces.`,
	},
	{
		kind: 'schemaType',
		urlSegment: 'breadcrumb-schema-complete-guide',
		title: 'Breadcrumb Schema — Complete Guide | SEWWA',
		description:
			'BreadcrumbList JSON-LD: ordered itemListElement matching visible breadcrumbs.',
		schemaTypeLabel: 'BreadcrumbList',
		requiredProperties: [{ name: 'itemListElement', description: 'ListItem chain with position, name, item URL' }],
		optionalProperties: [],
		exampleJsonLd: JSON.stringify(
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.example.com/' },
					{ '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.example.com/blog/' },
					{ '@type': 'ListItem', position: 3, name: 'Post Title', item: 'https://www.example.com/post/' },
				],
			},
			null,
			2,
		),
		validationTips: [
			'Last item URL should match the page canonical',
			'Names should match visible breadcrumb labels',
			'Use absolute URLs',
		],
		useCase: 'Any page with hierarchical navigation shown to users.',
		bodyMarkdown: `**BreadcrumbList** is low-risk when it **mirrors UI**. Dynamically generate from your route hierarchy so you never drift from visible crumbs.

Combine with **CollectionPage** patterns on listing templates when appropriate.`,
	},
]
