import type { PlatformEntry } from './types'

export const platformEntries: PlatformEntry[] = [
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-shopify',
		title: 'How to Add Schema to Shopify (Step-by-Step) | SEWWA',
		description:
			'Add JSON-LD to Shopify: apps, theme.liquid, and troubleshooting. Validate structured data for products and organization.',
		platformLabel: 'Shopify',
		category: 'ecommerce',
		plugins: [
			{ name: 'JSON-LD for SEO' },
			{ name: 'Schema App for Shopify' },
			{ name: 'Plug in SEO' },
		],
		manualMethod:
			'Theme editor → Edit code → `theme.liquid` in `<head>`, or app-injected snippets. Ensure only one authoritative Product graph per product URL.',
		troubleshooting: [
			{
				problem: 'Duplicate Product schema in Rich Results Test',
				solution: 'Disable overlapping apps or remove hard-coded `application/ld+json` blocks; keep a single merged graph.',
			},
			{
				problem: 'Schema disappeared after theme upgrade',
				solution: 'Re-inject snippet in `theme.liquid` or reconfigure the app; diff theme before/after update.',
			},
			{
				problem: 'Rich results not showing yet',
				solution: 'Validate markup, fix errors, request indexing; eligibility can take days and is not guaranteed.',
			},
		],
		bodyMarkdown: `Shopify merchants usually choose between **schema apps** and **manual JSON-LD** in the theme. Apps ship faster; custom snippets give full control for complex bundles and custom metafields.

After deployment, use **View Source** or DevTools to confirm a single JSON-LD script per page type, then run Google's **Rich Results Test**. SEWWA's generator helps you draft JSON-LD offline before pasting into Liquid.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-wordpress',
		title: 'How to Add Schema to WordPress | SEWWA',
		description:
			'Yoast, Rank Math, Schema Pro, or custom JSON-LD in WordPress. Clear steps and common fixes.',
		platformLabel: 'WordPress',
		category: 'cms',
		plugins: [{ name: 'Yoast SEO' }, { name: 'Rank Math' }, { name: 'Schema Pro' }],
		manualMethod:
			'Child theme `functions.php` or `wp_head` hook: echo one `<script type="application/ld+json">` with `JSON.stringify` of your graph.',
		troubleshooting: [
			{
				problem: 'Schema not appearing',
				solution: 'Purge page cache (plugin + host CDN) and recheck; some optimizers strip head tags.',
			},
			{
				problem: 'Duplicate graphs',
				solution: 'Turn off JSON-LD in one SEO plugin or remove theme hard-coding.',
			},
			{
				problem: 'Wrong type on posts',
				solution: 'Set schema type per template in the SEO plugin schema module.',
			},
		],
		bodyMarkdown: `WordPress sites often stack **theme**, **SEO plugin**, and **Woo** modules—each may emit JSON-LD. Pick one **source of truth** per template (homepage, post, product) and disable the rest.

For bespoke graphs, enqueue a small PHP snippet that prints JSON-LD only where needed. Pair with SEWWA to generate valid graphs from your content model.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-squarespace',
		title: 'How to Add Schema to Squarespace | SEWWA',
		description:
			'Code injection and JSON-LD on Squarespace. Limitations, validation, and structured data tips.',
		platformLabel: 'Squarespace',
		category: 'site-builder',
		plugins: [{ name: 'Built-in SEO (limited); Code Injection for custom JSON-LD' }],
		manualMethod:
			'Settings → Advanced → Code Injection → Header for global JSON-LD; page-level injection for one-offs.',
		troubleshooting: [
			{
				problem: 'JSON-LD not rendering',
				solution: 'Confirm injection scope (site-wide vs single page) and that JSON is valid (escape quotes).',
			},
			{
				problem: 'Conflicts with template meta',
				solution: 'Consolidate to one graph per URL; remove duplicate Organization blocks.',
			},
		],
		bodyMarkdown: `Squarespace gives you **Code Injection** rather than a full theme API. That is enough for **Organization**, **WebSite**, and page-specific **Article** or **Product** graphs if you keep JSON small and valid.

Test in staging first—bad JSON can break the entire injection block. Generate snippets with SEWWA, paste, validate, publish.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-webflow',
		title: 'How to Add Schema to Webflow | SEWWA',
		description:
			'Custom code, CMS fields, and JSON-LD in Webflow. Dynamic structured data patterns.',
		platformLabel: 'Webflow',
		category: 'site-builder',
		plugins: [{ name: 'Custom code (Project Settings or Embed); ecosystem apps as needed' }],
		manualMethod:
			'Project Settings → Custom Code → Head, or Embed element; bind CMS fields into JSON-LD for collection templates.',
		troubleshooting: [
			{
				problem: 'Embed stripped on canvas',
				solution: 'Use sanctioned Custom Code slots; avoid pasting scripts into rich text alone.',
			},
			{
				problem: 'CMS publish lag',
				solution: 'Republish affected collection items after changing CMS-driven JSON.',
			},
		],
		bodyMarkdown: `Webflow shines when **CMS fields** drive JSON-LD: price, SKU, author, and dates become dynamic in collection templates. Keep static global graph (Organization) in project head code.

Use SEWWA to prototype static JSON, then translate field bindings into Webflow's embed syntax carefully.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-wix',
		title: 'How to Add Schema to Wix | SEWWA',
		description:
			'Velo, Tracking Tools, and SEO settings for JSON-LD on Wix sites.',
		platformLabel: 'Wix',
		category: 'site-builder',
		plugins: [{ name: 'Wix SEO Wiz' }, { name: 'Velo for head injection' }],
		manualMethod:
			'Tracking & Analytics → Custom code in site head, or Velo HTML head API for dynamic values on dynamic pages.',
		troubleshooting: [
			{
				problem: 'Code not on all pages',
				solution: 'Check per-page vs site-wide placement in Tracking Tools.',
			},
			{
				problem: 'Dynamic pages missing schema',
				solution: 'Use Velo to read collection data and inject JSON-LD server-side where supported.',
			},
		],
		bodyMarkdown: `Wix users typically combine **SEO Wiz** defaults with **Custom Code** or **Velo** for advanced graphs. Dynamic business sites should avoid duplicating FAQ/Product blocks from multiple widgets.

Validate after each Velo change—dynamic string building is prone to JSON syntax errors. SEWWA helps you lock the graph shape first.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-nextjs',
		title: 'How to Add Schema to Next.js | SEWWA',
		description:
			'App Router and Pages Router JSON-LD: next-seo, Script tags, and SSR patterns.',
		platformLabel: 'Next.js',
		category: 'framework',
		plugins: [{ name: 'next-seo' }, { name: 'Manual next/script or layout head' }],
		manualMethod:
			'App Router: layout.tsx or page.tsx with `<script type="application/ld+json">` built server-side; Pages Router: `_document` or per-page Head.',
		troubleshooting: [
			{
				problem: 'Hydration mismatch in head',
				solution: 'Serialize JSON-LD on the server only; avoid random IDs in client components.',
			},
			{
				problem: 'Duplicate graphs',
				solution: 'Lift JSON-LD to root layout or remove duplicate page-level scripts.',
			},
		],
		bodyMarkdown: `Next.js should emit JSON-LD **on the server** for the HTML crawlers receive. In the App Router, colocate schema with the route segment that owns the data (e.g. product loader).

Use **JSON.stringify** of a plain object; avoid injecting user HTML. SEWWA generates starter graphs you can paste into server components.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-gatsby',
		title: 'How to Add Schema to Gatsby | SEWWA',
		description:
			'React Helmet, onRenderBody, and GraphQL-driven JSON-LD in Gatsby.',
		platformLabel: 'Gatsby',
		category: 'framework',
		plugins: [{ name: 'gatsby-plugin-react-helmet' }, { name: 'onRenderBody in gatsby-ssr' }],
		manualMethod:
			'Inject `<script type="application/ld+json">` via Helmet in layouts or `onRenderBody`; source fields from GraphQL queries.',
		troubleshooting: [
			{
				problem: 'Duplicate plugins outputting schema',
				solution: 'Audit `gatsby-config` plugin order; disable redundant SEO plugins.',
			},
			{
				problem: 'Stale head after content change',
				solution: 'Clear `.cache` and rebuild; confirm GraphQL query pulls fresh fields.',
			},
		],
		bodyMarkdown: `Gatsby's **build-time GraphQL** is ideal for JSON-LD: each template query can assemble **Article**, **Product**, or **LocalBusiness** nodes from CMS data.

Keep JSON-LD generation in **SSR/build** paths, not browser-only effects, so crawlers see complete graphs.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-react',
		title: 'How to Add Schema to React | SEWWA',
		description:
			'SPAs, react-helmet-async, and SSR for JSON-LD. Crawler considerations.',
		platformLabel: 'React',
		category: 'framework',
		plugins: [{ name: 'react-helmet-async' }],
		manualMethod:
			'Prefer SSR/SSG (Remix, Next, RSC) for money pages; otherwise inject JSON-LD in static shell or prerender.',
		troubleshooting: [
			{
				problem: 'Google sees empty schema',
				solution: 'CSR-only apps may miss schema—prerender marketing URLs or move to SSR.',
			},
			{
				problem: 'Invalid JSON string',
				solution: 'Use JSON.stringify; escape user-controlled fields.',
			},
		],
		bodyMarkdown: `**React** alone is usually CSR—**search engines may not execute** your head updates reliably. For SEO-critical URLs, use **SSR**, **SSG**, or **prerender** so JSON-LD is in the first HTML response.

Helmet helps on the client; pairing with **Vite SSR** or a meta framework is safer for schema.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-vue',
		title: 'How to Add Schema to Vue | SEWWA',
		description:
			'Vue 3, Nuxt, and head management for structured data.',
		platformLabel: 'Vue',
		category: 'framework',
		plugins: [{ name: '@vueuse/head' }, { name: 'Nuxt (see Nuxt guide) for SSR' }],
		manualMethod:
			'Nuxt 3: useHead with script tag; plain Vue SPA: prerender marketing routes or SSR.',
		troubleshooting: [
			{
				problem: 'SPA indexing gaps',
				solution: 'Prerender or SSR templates that target organic traffic.',
			},
			{
				problem: 'i18n duplicate entities',
				solution: 'Emit one graph per locale URL with localized strings.',
			},
		],
		bodyMarkdown: `**Nuxt** is the practical default for Vue + SEO: **useHead** can attach JSON-LD per route with access to async data. Plain Vue SPAs should still prerender top landing pages.

Align schema with **router-view** boundaries so each URL emits one coherent graph.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-angular',
		title: 'How to Add Schema to Angular | SEWWA',
		description:
			'Angular Universal, Title/Meta service, and JSON-LD injection.',
		platformLabel: 'Angular',
		category: 'framework',
		plugins: [{ name: '@angular/platform-browser' }, { name: 'Angular Universal' }],
		manualMethod:
			'Universal: inject JSON-LD in server template; CSR-only: prerender or accept weaker crawling signals.',
		troubleshooting: [
			{
				problem: 'Schema missing in crawlers',
				solution: 'Add Universal or prerender for indexable routes.',
			},
			{
				problem: 'XSS in dynamic JSON',
				solution: 'Sanitize or strictly type user fields before stringifying.',
			},
		],
		bodyMarkdown: `**Angular Universal** (or prerender) is the right baseline for **JSON-LD** on marketing sites. The Meta/Title services manage tags, but crawlers need the **initial HTML** to include \`application/ld+json\`.

Use resolvers or guards so head data is ready before render completes.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-magento',
		title: 'How to Add Schema to Magento | SEWWA',
		description:
			'Magento 2 extensions, layout XML, and product JSON-LD.',
		platformLabel: 'Magento',
		category: 'ecommerce',
		plugins: [{ name: 'Amasty Rich Snippets' }, { name: 'MageWorx SEO Suite' }],
		manualMethod:
			'Layout XML + template for head JSON-LD, or extension-managed output—avoid duplicate Product graphs.',
		troubleshooting: [
			{
				problem: 'Configurable product Offer errors',
				solution: 'Map offers to visible variants; align currency and stock with storefront.',
			},
			{
				problem: 'FPC stale schema',
				solution: 'Purge full page cache after template or attribute changes.',
			},
		],
		bodyMarkdown: `Magento's **layout XML** system lets you inject head assets per handle—extensions wrap this for Product and BreadcrumbList. The main risk is **stacking extensions** that each print Product schema.

Audit with DevTools **Elements** search for \`application/ld+json\` and keep a single merged graph per product URL.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-woocommerce',
		title: 'How to Add Schema to WooCommerce | SEWWA',
		description:
			'WooCommerce + WordPress SEO plugins: product schema, offers, and conflicts.',
		platformLabel: 'WooCommerce',
		category: 'ecommerce',
		plugins: [{ name: 'Yoast WooCommerce SEO' }, { name: 'Rank Math + WooCommerce module' }],
		manualMethod:
			'Prefer SEO plugin product schema; customize via small plugin hooking `wp_head` if needed.',
		troubleshooting: [
			{
				problem: 'Product vs Offer mismatch',
				solution: 'Align price and availability with WooCommerce settings and sale state.',
			},
			{
				problem: 'Category archives showing Product',
				solution: 'Use ItemList/CollectionPage patterns for archives, not Product, unless truly a product URL.',
			},
		],
		bodyMarkdown: `WooCommerce emits some schema by default; **SEO plugins** often replace or extend it. Decide whether the **plugin** or **theme** owns JSON-LD, then remove duplicates.

Use SEWWA to model complex bundles or brand fields plugins do not cover, then merge carefully.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-bigcommerce',
		title: 'How to Add Schema to BigCommerce | SEWWA',
		description:
			'Stencil themes, Script Manager, and JSON-LD for BigCommerce stores.',
		platformLabel: 'BigCommerce',
		category: 'ecommerce',
		plugins: [{ name: 'Stencil theme scripts' }, { name: 'Script Manager' }],
		manualMethod:
			'Stencil: `templates/layout/base.html` or component injection; Script Manager for head scripts.',
		troubleshooting: [
			{
				problem: 'Theme update removed custom head',
				solution: 'Document injections; reapply to new base template or use Script Manager.',
			},
			{
				problem: 'App + theme duplicate Product',
				solution: 'Disable one source after validating in Rich Results Test.',
			},
		],
		bodyMarkdown: `BigCommerce merchants usually edit **Stencil** layouts or use **Script Manager** for global JSON-LD. Product pages should pull **SKU, price, and availability** from storefront variables when possible.

SEWWA helps prototype Organization and WebSite graphs you promote to theme partials.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-ghost',
		title: 'How to Add Schema to Ghost | SEWWA',
		description:
			'Code Injection and Handlebars themes for JSON-LD on Ghost.',
		platformLabel: 'Ghost',
		category: 'cms',
		plugins: [{ name: 'Ghost Code Injection' }],
		manualMethod:
			'Global header/footer Code Injection, or theme Handlebars for dynamic post and author schema.',
		troubleshooting: [
			{
				problem: 'Member-only content in schema',
				solution: 'Keep public JSON-LD aligned with what unauthenticated users and crawlers see.',
			},
			{
				problem: 'Newsletter CTAs in Article body',
				solution: 'Do not mark up non-article UI as main Article text.',
			},
		],
		bodyMarkdown: `**Ghost** publishers often use **Code Injection** for global Organization schema and tune **post.hbs** for **Article** JSON-LD with \`{{title}}\`, \`{{url}}\`, and \`{{date}}\` helpers.

Validate AMP separately if enabled—AMP has stricter rules.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-jekyll',
		title: 'How to Add Schema to Jekyll | SEWWA',
		description:
			'Liquid includes, front matter, and JSON-LD in Jekyll static sites.',
		platformLabel: 'Jekyll',
		category: 'static-site-generator',
		plugins: [{ name: 'Liquid includes' }, { name: 'jekyll-seo-tag (meta; pair with custom JSON-LD)' }],
		manualMethod:
			'`_includes/schema.html` + front matter; output in `default` layout head using `jsonify` filter.',
		troubleshooting: [
			{
				problem: 'Liquid escaping breaks JSON',
				solution: 'Use `jsonify` on objects; avoid manual quote juggling.',
			},
			{
				problem: 'Wrong @type per layout',
				solution: 'Set schema partial per layout (post vs page vs collection).',
			},
		],
		bodyMarkdown: `Jekyll's **Liquid + front matter** pipeline is ideal for static JSON-LD: each post can pass **title**, **description**, and **image** into an include that prints one script tag.

Build once in \`_includes\`, reuse across layouts, validate HTML output after \`jekyll build\`.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-hugo',
		title: 'How to Add Schema to Hugo | SEWWA',
		description:
			'Hugo partials, multilingual sites, and JSON-LD templates.',
		platformLabel: 'Hugo',
		category: 'static-site-generator',
		plugins: [{ name: 'Hugo partials / shortcodes' }],
		manualMethod:
			'`layouts/partials/schema.html` with `.Params` and site config; override per section.',
		troubleshooting: [
			{
				problem: 'Multilingual wrong graph',
				solution: 'Emit one URL per translation with localized strings.',
			},
			{
				problem: 'Taxonomy pages need different @type',
				solution: 'Use ItemList or CollectionPage where appropriate.',
			},
		],
		bodyMarkdown: `**Hugo** partials let you centralize JSON-LD and branch on **\`.Section\`** or **\`.Type\`**. Use **\`.Permalink\`** for absolute URLs in the graph.

Fast builds mean you can validate thousands of pages in CI after each template change.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-eleventy',
		title: 'How to Add Schema to Eleventy | SEWWA',
		description:
			'Nunjucks/Liquid layouts, global data, and JSON-LD in 11ty.',
		platformLabel: 'Eleventy',
		category: 'static-site-generator',
		plugins: [{ name: 'Template includes in _includes' }],
		manualMethod:
			'Base layout inserts JSON-LD from front matter or `_data` files; use `dump` filters carefully for JSON.',
		troubleshooting: [
			{
				problem: 'Pagination series duplicate @id',
				solution: 'Give each page in a paginated series a unique canonical URL in the graph.',
			},
			{
				problem: 'JSON filter errors',
				solution: 'Stringify in JavaScript data files instead of complex template logic.',
			},
		],
		bodyMarkdown: `**Eleventy** shines with **JavaScript data files** (\`*.11tydata.js\`) that return a ready-made **schema object**—templates only stringify once. Keeps JSON valid and testable.

Use directory data for section defaults (blog vs docs).`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-astro',
		title: 'How to Add Schema to Astro | SEWWA',
		description:
			'Astro layouts, content collections, and JSON-LD for static and SSR.',
		platformLabel: 'Astro',
		category: 'framework',
		plugins: [{ name: '@astrojs/mdx' }, { name: 'Manual Seo component + script tag' }],
		manualMethod:
			'Layout or page frontmatter → pass props to a Seo component; emit `<script type="application/ld+json">` server-side.',
		troubleshooting: [
			{
				problem: 'Client island only content',
				solution: 'Keep JSON-LD in static shell; crawlers may not run islands.',
			},
			{
				problem: 'Trailing slash vs canonical',
				solution: 'Match `trailingSlash` config in graph URLs.',
			},
		],
		bodyMarkdown: `This site is **Astro**: schema belongs in **layouts** or **pages**, computed from **content collections** or props—never only inside client-loaded React islands unless duplicated in the shell.

Follow **SITE.url** and **trailingSlash** config when building canonical URLs in JSON-LD, same as this blog's **Article** pages.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-remix',
		title: 'How to Add Schema to Remix | SEWWA',
		description:
			'Remix root layout, loaders, and JSON-LD in full-stack React.',
		platformLabel: 'Remix',
		category: 'framework',
		plugins: [{ name: 'root.tsx layout Links / manual script' }],
		manualMethod:
			'Return JSON-LD from root layout using loader data; avoid duplicate scripts on child routes.',
		troubleshooting: [
			{
				problem: 'Streaming duplicates head tags',
				solution: 'Centralize JSON-LD in root or leaf consistently; verify single script in View Source.',
			},
		],
		bodyMarkdown: `**Remix** loaders supply data before render—ideal for **JSON-LD** tied to CMS or DB fields. Emit the script from the **root** or the **leaf route** that owns the canonical metadata, not both.

First HTML response should already include \`application/ld+json\` for crawlers.`,
	},
	{
		kind: 'platform',
		urlSegment: 'how-to-add-schema-to-nuxt',
		title: 'How to Add Schema to Nuxt | SEWWA',
		description:
			'Nuxt 3 useHead, schema-org module, and SSR JSON-LD.',
		platformLabel: 'Nuxt',
		category: 'framework',
		plugins: [{ name: 'nuxt-schema-org' }, { name: 'useHead script children' }],
		manualMethod:
			'`useHead({ script: [{ type: "application/ld+json", children: JSON.stringify(graph) }] })` in setup with route data.',
		troubleshooting: [
			{
				problem: 'SSR off in dev but on in prod',
				solution: 'Test production build; schema must exist in SSR HTML when SSR enabled.',
			},
			{
				problem: 'i18n routes',
				solution: 'Stable `@id` per locale URL; translate visible strings only.',
			},
		],
		bodyMarkdown: `**Nuxt 3**'s **useHead** makes JSON-LD a first-class concern. Pull graph fields from **\`asyncData\`** / **\`useAsyncData\`** so the server render matches what the client hydrates.

Community **schema-org** modules help but always validate output HTML.`,
	},
]
