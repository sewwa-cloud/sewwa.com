# SEWWA Programmatic SEO - Keywords & Data Reference

**Date**: April 4, 2026
**Purpose**: Complete reference for all 50 target keywords and their structured data
**Status**: Ready to use — no paid keyword research required ✅

**Implementation note:** Pages are driven by a **typed registry** + **one dynamic Astro route** (`[pseoPage]` or equivalent). Each row must expose a canonical **`urlSegment`** (see below). Prefer `src/data/programmatic/*.ts` (or validated JSON) — see `Phase-1-Implementation-Plan.md`.

**Content overlap:** Before publishing, reconcile each `urlSegment` with existing posts in `content/blog/` so programmatic pages add net-new angles (see `Phase-1-Implementation-Plan.md` → “Content overlap & canonical strategy”).

---

## 🎯 50 pre-defined keywords

**Selection criteria**:
- Clear search intent
- Relevant to SEWWA tools
- Long-tail (3+ words)
- Business potential

### `urlSegment` (canonical path segment)

Live URL shape: `https://www.sewwa.com/{urlSegment}/` (exact host and trailing-slash rules follow `SITE.url` and your Astro config).

| Kind | Pattern | Example |
|------|---------|---------|
| Industry | `schema-generator-for-{slug}` | `schema-generator-for-ecommerce` |
| Platform | `how-to-add-schema-to-{slug}` | `how-to-add-schema-to-shopify` |
| Schema guide | `{slug}-schema-complete-guide` | `product-schema-complete-guide` |

### Master list (all 50 `urlSegment` values)

**Industry (20):**  
`schema-generator-for-ecommerce`, `schema-generator-for-restaurants`, `schema-generator-for-real-estate`, `schema-generator-for-healthcare`, `schema-generator-for-dentists`, `schema-generator-for-lawyers`, `schema-generator-for-plumbers`, `schema-generator-for-electricians`, `schema-generator-for-gyms`, `schema-generator-for-hotels`, `schema-generator-for-travel-agencies`, `schema-generator-for-automotive`, `schema-generator-for-education`, `schema-generator-for-nonprofits`, `schema-generator-for-local-business`, `schema-generator-for-contractors`, `schema-generator-for-beauty-salons`, `schema-generator-for-pet-services`, `schema-generator-for-accountants`, `schema-generator-for-insurance`

**Platform (20):**  
`how-to-add-schema-to-shopify`, `how-to-add-schema-to-wordpress`, `how-to-add-schema-to-squarespace`, `how-to-add-schema-to-webflow`, `how-to-add-schema-to-wix`, `how-to-add-schema-to-nextjs`, `how-to-add-schema-to-gatsby`, `how-to-add-schema-to-react`, `how-to-add-schema-to-vue`, `how-to-add-schema-to-angular`, `how-to-add-schema-to-magento`, `how-to-add-schema-to-woocommerce`, `how-to-add-schema-to-bigcommerce`, `how-to-add-schema-to-ghost`, `how-to-add-schema-to-jekyll`, `how-to-add-schema-to-hugo`, `how-to-add-schema-to-eleventy`, `how-to-add-schema-to-astro`, `how-to-add-schema-to-remix`, `how-to-add-schema-to-nuxt`

**Schema type guides (10):**  
`product-schema-complete-guide`, `article-schema-complete-guide`, `faq-schema-complete-guide`, `how-to-schema-complete-guide`, `event-schema-complete-guide`, `recipe-schema-complete-guide`, `review-schema-complete-guide`, `local-business-schema-complete-guide`, `organization-schema-complete-guide`, `breadcrumb-schema-complete-guide`

---

## 📊 Type 1: Industry-specific (20 keywords)

### Data structure (registry row sketch)

```json
{
  "kind": "industry",
  "industry": "Industry Name",
  "slug": "short-id",
  "urlSegment": "schema-generator-for-short-id",
  "targetKeyword": "schema generator for …",
  "commonSchemas": ["Schema1", "Schema2", "Schema3"],
  "tips": ["Tip 1", "Tip 2", "Tip 3"],
  "priority": "high|medium|low"
}
```

### Complete list

For rows **1–10** below, `urlSegment` = `schema-generator-for-{slug}` (see master list).

#### 1. E-commerce
```json
{
  "industry": "E-commerce",
  "slug": "ecommerce",
  "urlSegment": "schema-generator-for-ecommerce",
  "targetKeyword": "schema generator for ecommerce",
  "commonSchemas": ["Product", "Offer", "Review", "AggregateRating", "BreadcrumbList"],
  "tips": [
    "Include pricing and availability for better CTR",
    "Add Review schema to show star ratings in search results",
    "Use GTIN/MPN for product identification"
  ],
  "priority": "high"
}
```

#### 2. Restaurants
```json
{
  "industry": "Restaurants",
  "slug": "restaurants",
  "urlSegment": "schema-generator-for-restaurants",
  "targetKeyword": "schema generator for restaurants",
  "commonSchemas": ["LocalBusiness", "Menu", "Review", "FAQPage"],
  "tips": [
    "Add menu items with prices in Menu schema",
    "Include operating hours and cuisine type",
    "Add location and contact information in LocalBusiness"
  ],
  "priority": "high"
}
```

#### 3. Real Estate
```json
{
  "industry": "Real Estate",
  "slug": "real-estate",
  "urlSegment": "schema-generator-for-real-estate",
  "targetKeyword": "schema generator for real estate",
  "commonSchemas": ["RealEstateAgent", "LocalBusiness", "Review", "FAQPage"],
  "tips": [
    "Include property listings with details",
    "Add agent contact information",
    "Use Review schema for testimonials"
  ],
  "priority": "high"
}
```

#### 4. Healthcare
```json
{
  "industry": "Healthcare",
  "slug": "healthcare",
  "urlSegment": "schema-generator-for-healthcare",
  "targetKeyword": "schema generator for healthcare",
  "commonSchemas": ["MedicalOrganization", "Physician", "LocalBusiness"],
  "tips": [
    "Include medical specialty information",
    "Add insurance accepted",
    "Include telehealth availability"
  ],
  "priority": "medium"
}
```

#### 5. Dentists
```json
{
  "industry": "Dentists",
  "slug": "dentists",
  "urlSegment": "schema-generator-for-dentists",
  "targetKeyword": "schema generator for dentists",
  "commonSchemas": ["Dentist", "LocalBusiness", "Review"],
  "tips": [
    "List dental services offered",
    "Include insurance information",
    "Add office hours and location"
  ],
  "priority": "medium"
}
```

#### 6. Lawyers
```json
{
  "industry": "Lawyers",
  "slug": "lawyers",
  "urlSegment": "schema-generator-for-lawyers",
  "targetKeyword": "schema generator for lawyers",
  "commonSchemas": ["LegalService", "LocalBusiness", "Review"],
  "tips": [
    "Specify practice areas",
    "Include bar association information",
    "Add consultation availability"
  ],
  "priority": "medium"
}
```

#### 7. Plumbers
```json
{
  "industry": "Plumbers",
  "slug": "plumbers",
  "urlSegment": "schema-generator-for-plumbers",
  "targetKeyword": "schema generator for plumbers",
  "commonSchemas": ["LocalBusiness", "Service", "Review"],
  "tips": [
    "List services offered",
    "Include service area",
    "Add emergency contact info"
  ],
  "priority": "medium"
}
```

#### 8. Electricians
```json
{
  "industry": "Electricians",
  "slug": "electricians",
  "urlSegment": "schema-generator-for-electricians",
  "targetKeyword": "schema generator for electricians",
  "commonSchemas": ["LocalBusiness", "Service", "Review"],
  "tips": [
    "List electrical services",
    "Include licensing information",
    "Add service area and availability"
  ],
  "priority": "medium"
}
```

#### 9. Gyms
```json
{
  "industry": "Gyms",
  "slug": "gyms",
  "urlSegment": "schema-generator-for-gyms",
  "targetKeyword": "schema generator for gyms",
  "commonSchemas": ["ExerciseGym", "LocalBusiness", "Review"],
  "tips": [
    "Include amenities and equipment",
    "Add membership options",
    "Include class schedules"
  ],
  "priority": "medium"
}
```

#### 10. Hotels
```json
{
  "industry": "Hotels",
  "slug": "hotels",
  "urlSegment": "schema-generator-for-hotels",
  "targetKeyword": "schema generator for hotels",
  "commonSchemas": ["Hotel", "LocalBusiness", "Review"],
  "tips": [
    "Include room types and amenities",
    "Add pricing and availability",
    "Include location highlights"
  ],
  "priority": "high"
}
```

#### 11. Travel Agencies
```json
{
  "industry": "Travel Agencies",
  "slug": "travel-agencies",
  "urlSegment": "schema-generator-for-travel-agencies",
  "targetKeyword": "schema generator for travel agencies",
  "commonSchemas": ["TravelAgency", "TouristTrip", "Review", "FAQPage"],
  "tips": [
    "Mark up packages and itineraries where applicable",
    "Align offers with real availability and pricing",
    "Use Review for guides and partner services carefully (policy-compliant)"
  ],
  "priority": "medium"
}
```

#### 12. Automotive
```json
{
  "industry": "Automotive",
  "slug": "automotive",
  "urlSegment": "schema-generator-for-automotive",
  "targetKeyword": "schema generator for automotive",
  "commonSchemas": ["AutoRepair", "LocalBusiness", "Service", "Review"],
  "tips": [
    "Use AutoRepair for shops; clarify services and hours",
    "Add area served and brands supported",
    "Collect reviews with authentic sourcing"
  ],
  "priority": "medium"
}
```

#### 13. Education
```json
{
  "industry": "Education",
  "slug": "education",
  "urlSegment": "schema-generator-for-education",
  "targetKeyword": "schema generator for education",
  "commonSchemas": ["EducationalOrganization", "Course", "LocalBusiness", "Review"],
  "tips": [
    "Use Course for structured programs with clear dates",
    "Expose accreditation and contact consistently",
    "Keep location and service area accurate for local intent"
  ],
  "priority": "medium"
}
```

#### 14. Nonprofits
```json
{
  "industry": "Nonprofits",
  "slug": "nonprofits",
  "urlSegment": "schema-generator-for-nonprofits",
  "targetKeyword": "schema generator for nonprofits",
  "commonSchemas": ["NonprofitOrganization", "LocalBusiness", "Organization", "FAQPage"],
  "tips": [
    "Clarify mission, donation links, and contact",
    "Use FAQ for common volunteer/donor questions",
    "Keep logos and sameAs profiles aligned"
  ],
  "priority": "low"
}
```

#### 15. Local Business
```json
{
  "industry": "Local Business",
  "slug": "local-business",
  "urlSegment": "schema-generator-for-local-business",
  "targetKeyword": "schema generator for local business",
  "commonSchemas": ["LocalBusiness", "Review", "FAQPage", "OpeningHoursSpecification"],
  "tips": [
    "NAP consistency across site and GBP",
    "Add OpeningHoursSpecification with exceptions",
    "Use FAQ for services, areas served, and pricing FAQs"
  ],
  "priority": "high"
}
```

#### 16. Contractors
```json
{
  "industry": "Contractors",
  "slug": "contractors",
  "urlSegment": "schema-generator-for-contractors",
  "targetKeyword": "schema generator for contractors",
  "commonSchemas": ["LocalBusiness", "Service", "Review", "FAQPage"],
  "tips": [
    "List licenses, insurance, and service area",
    "Break out services (roofing, remodeling) clearly",
    "Add emergency vs standard hours if relevant"
  ],
  "priority": "medium"
}
```

#### 17. Beauty Salons
```json
{
  "industry": "Beauty Salons",
  "slug": "beauty-salons",
  "urlSegment": "schema-generator-for-beauty-salons",
  "targetKeyword": "schema generator for beauty salons",
  "commonSchemas": ["BeautySalon", "LocalBusiness", "Service", "Review"],
  "tips": [
    "List services with duration/price where possible",
    "Add booking URL and phone as contact options",
    "Use Review with real client feedback policies"
  ],
  "priority": "medium"
}
```

#### 18. Pet Services
```json
{
  "industry": "Pet Services",
  "slug": "pet-services",
  "urlSegment": "schema-generator-for-pet-services",
  "targetKeyword": "schema generator for pet services",
  "commonSchemas": ["LocalBusiness", "Service", "Review", "FAQPage"],
  "tips": [
    "Specify services (grooming, boarding, vet tech)",
    "Add service area and pickup options if offered",
    "FAQ for vaccination requirements and hours"
  ],
  "priority": "medium"
}
```

#### 19. Accountants
```json
{
  "industry": "Accountants",
  "slug": "accountants",
  "urlSegment": "schema-generator-for-accountants",
  "targetKeyword": "schema generator for accountants",
  "commonSchemas": ["AccountingService", "LocalBusiness", "Review", "FAQPage"],
  "tips": [
    "List services (tax, bookkeeping, payroll)",
    "Clarify jurisdictions and consultation booking",
    "Avoid misleading rich-result claims; stay YMYL careful"
  ],
  "priority": "medium"
}
```

#### 20. Insurance
```json
{
  "industry": "Insurance",
  "slug": "insurance",
  "urlSegment": "schema-generator-for-insurance",
  "targetKeyword": "schema generator for insurance",
  "commonSchemas": ["InsuranceAgency", "LocalBusiness", "Review", "FAQPage"],
  "tips": [
    "Be precise about lines of business (auto, home, life)",
    "Use FAQ for claims basics; avoid promising outcomes",
    "Keep licensing and sameAs profiles up to date"
  ],
  "priority": "medium"
}
```

---

## 📊 Type 2: Platform-specific (20 keywords)

### Data structure (registry row sketch)

`category` values used below: `cms`, `ecommerce`, `site-builder`, `framework`, `static-site-generator`. **Webflow** and **Wix** are **site-builder**, not static generators.

```json
{
  "kind": "platform",
  "platform": "Platform Name",
  "slug": "short-id",
  "urlSegment": "how-to-add-schema-to-short-id",
  "targetKeyword": "how to add schema to …",
  "category": "cms|ecommerce|site-builder|framework|static-site-generator",
  "plugins": ["App or plugin name"],
  "manualMethod": "Short note on where JSON-LD lives (theme, layout, head partial, etc.)",
  "troubleshooting": [
    "Symptom: likely fix",
    "Another symptom: fix"
  ]
}
```

### Complete list (20)

#### 1. Shopify (`ecommerce`)
```json
{
  "platform": "Shopify",
  "slug": "shopify",
  "urlSegment": "how-to-add-schema-to-shopify",
  "targetKeyword": "how to add schema to shopify",
  "category": "ecommerce",
  "plugins": ["JSON-LD for SEO", "Schema App for Shopify", "Plug in SEO"],
  "manualMethod": "Theme editor → `theme.liquid` head, or app-injected snippets; avoid duplicate JSON-LD blocks.",
  "troubleshooting": [
    "Duplicate Product schema: disable overlapping apps or remove hard-coded LD+JSON",
    "Theme upgrade wiped snippet: re-inject in `theme.liquid` or use app-only output",
    "Rich results delay: validate in Rich Results Test; allow recrawl after deploy"
  ]
}
```

#### 2. WordPress (`cms`)
```json
{
  "platform": "WordPress",
  "slug": "wordpress",
  "urlSegment": "how-to-add-schema-to-wordpress",
  "targetKeyword": "how to add schema to wordpress",
  "category": "cms",
  "plugins": ["Yoast SEO", "Rank Math", "Schema Pro"],
  "manualMethod": "Child theme `functions.php` or header hook; output one consolidated JSON-LD script in `<head>`.",
  "troubleshooting": [
    "Schema missing: clear page cache (plugin + CDN)",
    "Duplicate graph: turn off schema in one SEO plugin",
    "Wrong type on posts: set schema type per template in SEO plugin"
  ]
}
```

#### 3. Squarespace (`site-builder`)
```json
{
  "platform": "Squarespace",
  "slug": "squarespace",
  "urlSegment": "how-to-add-schema-to-squarespace",
  "targetKeyword": "how to add schema to squarespace",
  "category": "site-builder",
  "plugins": ["Built-in SEO settings (limited); code injection for custom JSON-LD"],
  "manualMethod": "Settings → Advanced → Code Injection → Header for global JSON-LD; page-level injection for one-offs.",
  "troubleshooting": [
    "JSON not rendering: confirm injection on correct scope (site vs page)",
    "Invalid JSON: escape quotes; validate before publish",
    "Conflicts with template meta: keep one authoritative graph per page"
  ]
}
```

#### 4. Webflow (`site-builder`)
```json
{
  "platform": "Webflow",
  "slug": "webflow",
  "urlSegment": "how-to-add-schema-to-webflow",
  "targetKeyword": "how to add schema to webflow",
  "category": "site-builder",
  "plugins": ["Finsweet attributes / custom code (ecosystem); no first-party schema app required"],
  "manualMethod": "Project Settings → Custom Code → Head code, or Embed element; CMS fields can drive dynamic JSON-LD.",
  "troubleshooting": [
    "Embed stripped: use sanctioned Custom Code slots, not rich text alone",
    "CMS publish lag: republish affected pages after field changes",
    "Duplicates: one JSON-LD block per URL in head"
  ]
}
```

#### 5. Wix (`site-builder`)
```json
{
  "platform": "Wix",
  "slug": "wix",
  "urlSegment": "how-to-add-schema-to-wix",
  "targetKeyword": "how to add schema to wix",
  "category": "site-builder",
  "plugins": ["Wix SEO Wiz", "Velo for programmatic head tags"],
  "manualMethod": "Tracking Tools → Custom code in head, or Velo `html` head injection for dynamic values.",
  "troubleshooting": [
    "Code not firing: verify placement (all pages vs single page)",
    "Dynamic pages: bind Velo to collection fields",
    "Multiple widgets adding FAQ: consolidate to one FAQPage block"
  ]
}
```

#### 6. Next.js (`framework`)
```json
{
  "platform": "Next.js",
  "slug": "nextjs",
  "urlSegment": "how-to-add-schema-to-nextjs",
  "targetKeyword": "how to add schema to nextjs",
  "category": "framework",
  "plugins": ["next-seo", "manual `script type=application/ld+json` in layout or page"],
  "manualMethod": "App Router: layout.tsx / page.tsx with `<Script>` or serialized JSON-LD; Pages Router: `_document` / per-page head.",
  "troubleshooting": [
    "Hydration mismatch: generate static JSON string server-side",
    "Duplicates across layout + page: lift graph to single parent",
    "ISR stale schema: revalidate after content changes"
  ]
}
```

#### 7. Gatsby (`framework`)
```json
{
  "platform": "Gatsby",
  "slug": "gatsby",
  "urlSegment": "how-to-add-schema-to-gatsby",
  "targetKeyword": "how to add schema to gatsby",
  "category": "framework",
  "plugins": ["gatsby-plugin-react-helmet", "inject in `onRenderBody` or layout"],
  "manualMethod": "SSR/SSG: inject JSON-LD in Helmet or html.js; GraphQL-sourced fields for dynamic nodes.",
  "troubleshooting": [
    "Plugin order conflicts: ensure single LD+JSON output",
    "Build cache: clean `.cache` if head tags look stale",
    "Client-only routes: still emit JSON-LD on server build for crawlers"
  ]
}
```

#### 8. React (`framework`)
```json
{
  "platform": "React",
  "slug": "react",
  "urlSegment": "how-to-add-schema-to-react",
  "targetKeyword": "how to add schema to react",
  "category": "framework",
  "plugins": ["react-helmet-async", "framework-specific meta libs"],
  "manualMethod": "SPA: server-render or prerender critical pages; inject `<script type=\"application/ld+json\">` in document head.",
  "troubleshooting": [
    "CSR-only pages: crawlers may miss schema—use SSR/SSG for money pages",
    "Escaping: JSON.stringify the graph in React",
    "Route changes: update head per route"
  ]
}
```

#### 9. Vue (`framework`)
```json
{
  "platform": "Vue",
  "slug": "vue",
  "urlSegment": "how-to-add-schema-to-vue",
  "targetKeyword": "how to add schema to vue",
  "category": "framework",
  "plugins": ["@vueuse/head", "Nuxt (see Nuxt row) for SSR"],
  "manualMethod": "SSR (Nuxt) preferred; for SPA use head manager and prerender marketing URLs.",
  "troubleshooting": [
    "SPA indexing gaps: prerender or SSR for key templates",
    "Head duplication: register head plugin once in root",
    "i18n routes: one graph per locale URL"
  ]
}
```

#### 10. Angular (`framework`)
```json
{
  "platform": "Angular",
  "slug": "angular",
  "urlSegment": "how-to-add-schema-to-angular",
  "targetKeyword": "how to add schema to angular",
  "category": "framework",
  "plugins": ["@angular/platform-browser Title/Meta; Universal for SSR"],
  "manualMethod": "Angular Universal: inject JSON-LD in server template; CSR-only is weaker for crawlers.",
  "troubleshooting": [
    "No SSR: add prerender for landing pages",
    "Meta service race: set schema in resolver or guard for stable head",
    "Sanitize JSON: avoid XSS in dynamic fields"
  ]
}
```

#### 11. Magento (`ecommerce`)
```json
{
  "platform": "Magento",
  "slug": "magento",
  "urlSegment": "how-to-add-schema-to-magento",
  "targetKeyword": "how to add schema to magento",
  "category": "ecommerce",
  "plugins": ["Amasty Rich Snippets", "MageWorx SEO Suite", "custom module"],
  "manualMethod": "Layout XML + phtml template for head, or extension-managed JSON-LD.",
  "troubleshooting": [
    "Product duplicates: disable overlapping extensions",
    "Configurable products: map offers to visible variants",
    "Full page cache: purge after schema template changes"
  ]
}
```

#### 12. WooCommerce (`ecommerce`)
```json
{
  "platform": "WooCommerce",
  "slug": "woocommerce",
  "urlSegment": "how-to-add-schema-to-woocommerce",
  "targetKeyword": "how to add schema to woocommerce",
  "category": "ecommerce",
  "plugins": ["Yoast WooCommerce SEO", "Rank Math + Woo module", "Product-specific schema plugins"],
  "manualMethod": "Prefer SEO plugin graph; custom snippets via child theme or small plugin hooking `wp_head`.",
  "troubleshooting": [
    "Product vs Offer mismatch: align price/stock with plugin docs",
    "Category archives: avoid Product schema on listing if not a product page",
    "Plugin clash: audit JSON-LD count in DevTools"
  ]
}
```

#### 13. BigCommerce (`ecommerce`)
```json
{
  "platform": "BigCommerce",
  "slug": "bigcommerce",
  "urlSegment": "how-to-add-schema-to-bigcommerce",
  "targetKeyword": "how to add schema to bigcommerce",
  "category": "ecommerce",
  "plugins": ["Stencil theme scripts", "Apps for JSON-LD"],
  "manualMethod": "Stencil: inject into `templates/layout/base.html` or component; Script Manager for head.",
  "troubleshooting": [
    "Theme update: re-check custom injections",
    "Facets/variants: ensure Offer matches storefront rules",
    "Duplicate from app + theme: keep one source"
  ]
}
```

#### 14. Ghost (`cms`)
```json
{
  "platform": "Ghost",
  "slug": "ghost",
  "urlSegment": "how-to-add-schema-to-ghost",
  "targetKeyword": "how to add schema to ghost",
  "category": "cms",
  "plugins": ["Ghost Code Injection (global header/footer)"],
  "manualMethod": "Labs/features permitting, inject JSON-LD via Code Injection; handlebars themes for dynamic post schema.",
  "troubleshooting": [
    "Membership tiers: keep public schema aligned with visible content",
    "Newsletter CTAs: do not mark up non-content as Article body",
    "AMP (if used): separate valid schema rules"
  ]
}
```

#### 15. Jekyll (`static-site-generator`)
```json
{
  "platform": "Jekyll",
  "slug": "jekyll",
  "urlSegment": "how-to-add-schema-to-jekyll",
  "targetKeyword": "how to add schema to jekyll",
  "category": "static-site-generator",
  "plugins": ["Liquid includes for LD+JSON", "jekyll-seo-tag (meta; pair with custom JSON-LD)"],
  "manualMethod": "`_includes/schema.html` + front matter fields; output in default layout head.",
  "troubleshooting": [
    "Liquid escaping: use `jsonify` filter for objects",
    "Collections: ensure each layout sets correct `@type`",
    "Build-only: validate output HTML, not Markdown source"
  ]
}
```

#### 16. Hugo (`static-site-generator`)
```json
{
  "platform": "Hugo",
  "slug": "hugo",
  "urlSegment": "how-to-add-schema-to-hugo",
  "targetKeyword": "how to add schema to hugo",
  "category": "static-site-generator",
  "plugins": ["Shortcodes or partials templating JSON-LD"],
  "manualMethod": "layouts/partials/head/schema.html with `.Params` and site config; block per section.",
  "troubleshooting": [
    "Multilingual: one URL per language with matching graph",
    "Taxonomy pages: use CollectionPage / ItemList appropriately",
    "Cached partials: bust when params change"
  ]
}
```

#### 17. Eleventy (`static-site-generator`)
```json
{
  "platform": "Eleventy",
  "slug": "eleventy",
  "urlSegment": "how-to-add-schema-to-eleventy",
  "targetKeyword": "how to add schema to eleventy",
  "category": "static-site-generator",
  "plugins": ["Nunjucks/Liquid includes", "eleventy-plugin-bundle if used"],
  "manualMethod": "Base layout inserts JSON-LD from front matter or global data files.",
  "troubleshooting": [
    "Pagination: unique `@id` per page in series",
    "JSON filter: stringify safely in templates",
    "Directory data: merge cascades for section defaults"
  ]
}
```

#### 18. Astro (`framework`)
```json
{
  "platform": "Astro",
  "slug": "astro",
  "urlSegment": "how-to-add-schema-to-astro",
  "targetKeyword": "how to add schema to astro",
  "category": "framework",
  "plugins": ["@astrojs/mdx (content)", "manual component emitting `<script type=\"application/ld+json\">`"],
  "manualMethod": "Layout.astro or page frontmatter → pass props to SEO component; SSR if needed for dynamic head.",
  "troubleshooting": [
    "Client-only islands: keep JSON-LD in static shell when possible",
    "Content collections: derive schema from validated frontmatter",
    "Trailing slash config: match canonical URLs in graph"
  ]
}
```

#### 19. Remix (`framework`)
```json
{
  "platform": "Remix",
  "slug": "remix",
  "urlSegment": "how-to-add-schema-to-remix",
  "targetKeyword": "how to add schema to remix",
  "category": "framework",
  "plugins": ["root.tsx `<Links />` / manual script in layout"],
  "manualMethod": "Return JSON-LD script from loader-driven root layout; avoid duplicating on nested routes.",
  "troubleshooting": [
    "Streaming: ensure head tags emitted once",
    "Nested routes: centralize schema in root or leaf consistently",
    "SPA transitions: crawlers still see first server response—validate that"
  ]
}
```

#### 20. Nuxt (`framework`)
```json
{
  "platform": "Nuxt",
  "slug": "nuxt",
  "urlSegment": "how-to-add-schema-to-nuxt",
  "targetKeyword": "how to add schema to nuxt",
  "category": "framework",
  "plugins": ["nuxt-schema-org (community)", "useHead in script setup"],
  "manualMethod": "Nuxt 3: `useHead({ script: [{ type: 'application/ld+json', children: ... }] })` from route data.",
  "troubleshooting": [
    "SSR/SSG toggle: ensure schema runs in chosen mode",
    "i18n: localize strings; keep `@id` stable per locale URL",
    "Duplicated head: check layouts + pages both adding graph"
  ]
}
```

---

## 📊 Type 3: Schema type deep dives (10 keywords)

### Data structure (registry row sketch)

```json
{
  "kind": "schemaType",
  "schemaType": "Schema Name",
  "slug": "short-id",
  "urlSegment": "short-id-schema-complete-guide",
  "targetKeyword": "… schema complete guide",
  "requiredProperties": ["name - description"],
  "optionalProperties": ["name - description"],
  "useCase": "When to use this schema type"
}
```

### Complete list

#### 1. Product Schema
```json
{
  "schemaType": "Product",
  "slug": "product",
  "urlSegment": "product-schema-complete-guide",
  "targetKeyword": "product schema complete guide",
  "requiredProperties": [
    "name - Product name",
    "image - Product image URL",
    "description - Product description"
  ],
  "optionalProperties": [
    "brand - Brand name",
    "sku - Stock keeping unit",
    "gtin - Global trade item number",
    "offers - Pricing and availability"
  ],
  "useCase": "E-commerce product pages, online stores"
}
```

#### 2. Article Schema
```json
{
  "schemaType": "Article",
  "slug": "article",
  "urlSegment": "article-schema-complete-guide",
  "targetKeyword": "article schema complete guide",
  "requiredProperties": [
    "headline - Article title",
    "author - Author name",
    "datePublished - Publication date"
  ],
  "optionalProperties": [
    "image - Featured image",
    "publisher - Publication name",
    "dateModified - Last update date"
  ],
  "useCase": "Blog posts, news articles, content pages"
}
```

#### 3. FAQ Schema
```json
{
  "schemaType": "FAQ",
  "slug": "faq",
  "urlSegment": "faq-schema-complete-guide",
  "targetKeyword": "faq schema complete guide",
  "requiredProperties": [
    "FAQPage entity with mainEntity array",
    "Each Question has acceptedAnswer Text"
  ],
  "optionalProperties": [
    "author on answers (if policy allows)",
    "speakable (if used carefully)"
  ],
  "useCase": "FAQ sections that match on-page Q&A verbatim; avoid FAQ on non-FAQ pages."
}
```

#### 4. How-To Schema
```json
{
  "schemaType": "HowTo",
  "slug": "how-to",
  "urlSegment": "how-to-schema-complete-guide",
  "targetKeyword": "how to schema complete guide",
  "requiredProperties": [
    "name - How-to title",
    "step - Ordered steps with name/text (and image where applicable)"
  ],
  "optionalProperties": [
    "totalTime",
    "supply",
    "tool",
    "image per step"
  ],
  "useCase": "Instructional content with real ordered steps visible on the page."
}
```

#### 5. Event Schema
```json
{
  "schemaType": "Event",
  "slug": "event",
  "urlSegment": "event-schema-complete-guide",
  "targetKeyword": "event schema complete guide",
  "requiredProperties": [
    "name",
    "startDate",
    "location (Place or VirtualLocation)"
  ],
  "optionalProperties": [
    "endDate",
    "eventAttendanceMode",
    "offers",
    "organizer",
    "image"
  ],
  "useCase": "Conferences, webinars, and ticketed or RSVP events with stable URLs."
}
```

#### 6. Recipe Schema
```json
{
  "schemaType": "Recipe",
  "slug": "recipe",
  "urlSegment": "recipe-schema-complete-guide",
  "targetKeyword": "recipe schema complete guide",
  "requiredProperties": [
    "name",
    "image",
    "recipeIngredient",
    "recipeInstructions"
  ],
  "optionalProperties": [
    "prepTime",
    "cookTime",
    "nutrition",
    "recipeYield",
    "author"
  ],
  "useCase": "Cooking content with ingredients and instructions shown to users."
}
```

#### 7. Review Schema
```json
{
  "schemaType": "Review",
  "slug": "review",
  "urlSegment": "review-schema-complete-guide",
  "targetKeyword": "review schema complete guide",
  "requiredProperties": [
    "itemReviewed",
    "reviewRating",
    "author (Person or Organization)"
  ],
  "optionalProperties": [
    "reviewBody",
    "datePublished"
  ],
  "useCase": "First-party reviews with clear sourcing; follow Google policies for self-served reviews."
}
```

#### 8. Local Business Schema
```json
{
  "schemaType": "LocalBusiness",
  "slug": "local-business",
  "urlSegment": "local-business-schema-complete-guide",
  "targetKeyword": "local business schema complete guide",
  "requiredProperties": [
    "name",
    "address (PostalAddress)",
    "url or @id grounding"
  ],
  "optionalProperties": [
    "geo",
    "openingHoursSpecification",
    "telephone",
    "sameAs",
    "image"
  ],
  "useCase": "Physical locations; prefer specific subtype (e.g. Restaurant) when accurate."
}
```

#### 9. Organization Schema
```json
{
  "schemaType": "Organization",
  "slug": "organization",
  "urlSegment": "organization-schema-complete-guide",
  "targetKeyword": "organization schema complete guide",
  "requiredProperties": [
    "name",
    "url"
  ],
  "optionalProperties": [
    "logo",
    "sameAs",
    "contactPoint",
    "foundingDate"
  ],
  "useCase": "Site-wide entity; pairs with WebSite and publisher on articles."
}
```

#### 10. Breadcrumb Schema
```json
{
  "schemaType": "BreadcrumbList",
  "slug": "breadcrumb",
  "urlSegment": "breadcrumb-schema-complete-guide",
  "targetKeyword": "breadcrumb schema complete guide",
  "requiredProperties": [
    "itemListElement ordered with position, name, item URL"
  ],
  "optionalProperties": [
    "numberOfItems (usually implicit)"
  ],
  "useCase": "Reflect visible breadcrumb navigation; keep URLs canonical."
}
```

---

## 💾 Typed data in the repo (implementation)

Do **not** rely on three loose JSON files unless you add **validation**. Recommended layout:

```
src/data/programmatic/
  types.ts           # discriminated union + Zod (optional)
  industries.ts
  platforms.ts
  schema-guides.ts
  registry.ts        # exports all 50 entries; consumed by getStaticPaths
```

You may start from the JSON blocks in this document, then **move** them into `.ts` modules so `urlSegment` and `kind` are type-checked.

---

## ✅ Summary

| Item | Value |
|------|--------|
| Total URLs / keywords | 50 |
| Kinds | Industry (20), Platform (20), Schema guide (10) |
| Canonical key | `urlSegment` (must match master list) |
| Paid research | Not required for Phase 1 |

**Next step:** Implement the registry + dynamic route, then attach Cursor-generated prose (`content/programmatic/` or fields on each entry). See `Phase-1-Implementation-Plan.md` and `Cursor-Workflow-Guide.md`.

---

**All 50 `urlSegment` values and starter data are defined above.** 🎉
