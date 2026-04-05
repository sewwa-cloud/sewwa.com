# SEWWA Programmatic SEO Engine - Phase 1 Implementation Plan

**Date**: April 4, 2026
**Goal**: Ship first 50 programmatic SEO URLs as **one dynamic route + typed data** (no mass-generated `.astro` files)
**Timeline**: 1 week (April 5-12, 2026)
**Status**: Ready to implement (documentation aligned with blog repo)
**Cost**: $0 ✅

**Canonical codebase**: SEWWA Astro **blog** repo (`Works/Sewwa/www/blog` on your machine). Production base URL: `SITE.url` in `src/constants.ts` (e.g. `https://www.sewwa.com`).

---

## 🎯 Phase 1 Objectives

### Primary Goals:
1. ✅ Create 3 content templates
2. ✅ Generate 50 high-quality pages
3. ✅ Deploy and submit to Google
4. ✅ Measure initial performance

### Success Criteria:
- 50 pages live on SEWWA
- All pages indexed by Google within 30 days
- 50% of pages ranking in top 50 for target keywords
- No duplicate content issues
- Clean, fast-loading pages (<2s)

---

## 📊 Pre-Defined Target Keywords (50 Total)

**NO RESEARCH NEEDED** - Keywords already defined! ✅

### Type 1: Industry-Specific (20 keywords)

1. `schema generator for ecommerce`
2. `schema generator for restaurants`
3. `schema generator for real estate`
4. `schema generator for healthcare`
5. `schema generator for dentists`
6. `schema generator for lawyers`
7. `schema generator for plumbers`
8. `schema generator for electricians`
9. `schema generator for gyms`
10. `schema generator for hotels`
11. `schema generator for travel agencies`
12. `schema generator for automotive`
13. `schema generator for education`
14. `schema generator for nonprofits`
15. `schema generator for local business`
16. `schema generator for contractors`
17. `schema generator for beauty salons`
18. `schema generator for pet services`
19. `schema generator for accountants`
20. `schema generator for insurance`

---

### Type 2: Platform-Specific (20 keywords)

1. `how to add schema to shopify`
2. `how to add schema to wordpress`
3. `how to add schema to squarespace`
4. `how to add schema to webflow`
5. `how to add schema to wix`
6. `how to add schema to nextjs`
7. `how to add schema to gatsby`
8. `how to add schema to react`
9. `how to add schema to vue`
10. `how to add schema to angular`
11. `how to add schema to magento`
12. `how to add schema to woocommerce`
13. `how to add schema to bigcommerce`
14. `how to add schema to ghost`
15. `how to add schema to jekyll`
16. `how to add schema to hugo`
17. `how to add schema to eleventy`
18. `how to add schema to astro`
19. `how to add schema to remix`
20. `how to add schema to nuxt`

---

### Type 3: Schema Type Guides (10 keywords)

1. `product schema complete guide`
2. `article schema complete guide`
3. `faq schema complete guide`
4. `how to schema complete guide`
5. `event schema complete guide`
6. `recipe schema complete guide`
7. `review schema complete guide`
8. `local business schema complete guide`
9. `organization schema complete guide`
10. `breadcrumb schema complete guide`

---

## Content overlap & canonical strategy

Before implementation, maintain a simple **query → URL map**:

1. List existing URLs under `content/blog/` (and any other indexable routes) that target schema, JSON-LD, or overlapping head terms.
2. For each Phase 1 programmatic URL, decide: **unique angle** (industry / platform / schema-type depth), **merge** into an existing post, or **canonical** one URL to the other.
3. Prefer **one strong page per intent** over many thin variants. Programmatic pages should add **net-new** sections (e.g. platform-specific install steps) that are not copy-pasted from existing MDX.

Document decisions in `programmatic-seo-engine/` (e.g. a small table in this file or in `Keywords-Data-Reference.md`) so editors do not duplicate topics accidentally.

---

## 🏗️ Technical Implementation

### Week 1: Build & Launch (April 5-12)

#### Day 1-2: Architecture + presentation components (~12 hours)

**Do not** ship standalone `<html>` documents. Use the same **layout and SEO components** as the rest of the site (`@layouts/*`, `@components/seo.astro` or current equivalent).

**1. Typed registry**

- Add shared types (and optional runtime validation, e.g. Zod) under `src/data/programmatic/` describing each page `kind` and its fields.
- Export a single **`PROGRAMMATIC_PAGES`** (name flexible) array or map that lists **exactly** the 50 allowlisted URL segments. `getStaticPaths` must **only** emit these params—never arbitrary user input.

**2. One dynamic route for Phase 1 URLs (and blog posts)**

- **Implemented in this repo:** `src/pages/[slug].astro` — the param is **`slug`**, not a separate file per template. Astro cannot have two sibling `/:segment/` dynamic routes, so **blog post slugs and programmatic `urlSegment` values share this route**; `getStaticPaths` merges the `blog` collection with `PROGRAMMATIC_ENTRIES` from `src/data/programmatic/registry.ts` and branches on `pageType` (`blog` vs `programmatic`). A build-time error is thrown if any `urlSegment` collides with a blog `slug`.
- For each programmatic row: `params.slug === entry.urlSegment`, props carry the typed programmatic entry; `@components/programmatic/programmatic-guide.astro` renders by `kind`.

**Flat URL note:** Phase 1 keywords use a **single path segment** (e.g. `/schema-generator-for-ecommerce/`). A file like `src/pages/schema-generator-for/[slug].astro` would produce `/schema-generator-for/ecommerce/` (extra slash)—**different URL**. If you ever switch to nested URLs, update `Keywords-Data-Reference.md` and plan **301 redirects or canonical** tags from old to new.

**3. Presentation components (not “page generators”)**

| Kind | Suggested component | Role |
|------|---------------------|------|
| `industry` | `ProgrammaticIndustryGuide.astro` | H1, intro, schema list, examples, tips, CTA |
| `platform` | `ProgrammaticPlatformGuide.astro` | Methods, plugins, manual code, troubleshooting |
| `schemaType` | `ProgrammaticSchemaTypeGuide.astro` | Properties tables, example JSON-LD, validation tips |

**Meta descriptions:** use template strings that interpolate **real variables**, e.g. `` content={`Learn how to add schema markup on ${platform}...`} `` — never leave `{platform}` literally inside a static attribute string.

**Type sketches** (align names with your registry):

```typescript
type ProgrammaticPageKind = 'industry' | 'platform' | 'schemaType';

interface ProgrammaticPageBase {
	urlSegment: string; // e.g. 'schema-generator-for-ecommerce'
	kind: ProgrammaticPageKind;
	title: string;
	description: string; // meta description, pre-composed or built from fields
}

interface IndustryEntry extends ProgrammaticPageBase {
	kind: 'industry';
	industryLabel: string;
	commonSchemas: string[];
	tips: string[];
	// prose: markdown string, MDX import id, or slots filled during content pass
}

interface PlatformEntry extends ProgrammaticPageBase {
	kind: 'platform';
	platformLabel: string;
	plugins: { name: string; notes?: string }[];
	manualMethodSummary: string;
	troubleshooting: { problem: string; solution: string }[];
}

interface SchemaTypeEntry extends ProgrammaticPageBase {
	kind: 'schemaType';
	schemaTypeLabel: string;
	requiredProperties: { name: string; description: string }[];
	optionalProperties: { name: string; description: string }[];
	exampleJsonLd: string;
	validationTips: string[];
}
```

---

#### Day 3-5: Generate Content with Cursor (15 hours)

Use Cursor to generate all content. See `Cursor-Workflow-Guide.md` for details.

**Industry Pages (20 pages, 6 hours)**:
```bash
# For each industry, generate:
1. Introduction (150 words)
2. Common schemas list
3. 2-3 examples
4. 5 industry-specific tips
5. Conclusion (100 words)

# Cursor prompt template:
"Write content for schema generator guide for {INDUSTRY} businesses.
Include: intro, common schemas, real examples, 5 tips, conclusion.
Tone: Professional but accessible. 1,500-2,000 words."
```

**Platform Pages (20 pages, 6 hours)**:
```bash
# For each platform, generate:
1. Introduction (150 words)
2. Plugin recommendations
3. Manual code method
4. Troubleshooting (3-5 issues)
5. CTA to SEWWA tool

# Cursor prompt template:
"Write guide for adding schema to {PLATFORM}.
Include: intro, 3 methods (plugin/manual/SEWWA), troubleshooting.
Tone: Technical but clear. 1,500-2,000 words."
```

**Schema Type Pages (10 pages, 3 hours)**:
```bash
# For each schema type, generate:
1. What is {TYPE} schema
2. Required properties
3. Optional properties
4. Complete example
5. Validation tips

# Cursor prompt template:
"Write complete guide for {SCHEMA_TYPE} schema.
Include: definition, properties, examples, validation tips.
Tone: Technical reference. 1,500-2,000 words."
```

---

#### Day 6: Wire data + prose into the registry (~6 hours)

**Data modules (source of truth for routes)**

- Implement `src/data/programmatic/` as described above. You may use `.ts` modules (preferred for typing), or `.json` imported with validation.
- Populate all **50** rows so each `urlSegment` matches `Keywords-Data-Reference.md` (no placeholders left at launch).

**Long-form content (choose one primary pattern; hybrid is OK)**

| Pattern | When to use |
|---------|-------------|
| **A. MDX collection** | `content/programmatic/*.mdx` (or similar) with frontmatter `urlSegment` / `kind`; Astro loads body via `getEntry` or import. Matches existing blog tooling. |
| **B. Markdown in data** | Large `bodyMarkdown` (or section chunks) on each registry entry; render with the project’s MD/Markdown pipeline. Faster to ship, heavier TS files. |
| **C. Split** | Structured fields in TS; long prose in MDX keyed by `urlSegment`. |

**No filesystem script is required** to create 50 page files. Adding or editing a registry entry (and content) is enough; `getStaticPaths` picks it up on the next build.

**Optional tooling:** a small **lint script** (e.g. “every `urlSegment` is unique and matches allowlist”) is encouraged; that is not the same as generating `.astro` files.

---

#### Day 7: Quality Check & Deploy (4 hours)

**Quality Checklist** (per page):
- [ ] Title tag 50-60 characters
- [ ] Meta description 150-160 characters
- [ ] 1,500-2,000 words
- [ ] 2-3 internal links to SEWWA tools
- [ ] Valid HTML/JSON-LD
- [ ] Mobile-friendly
- [ ] Load time <2 seconds

**Deploy**:
```bash
# 1. Test build
npm run build

# 2. Check output
ls -lh ./dist/

# 3. Deploy to Vercel
vercel --prod

# 4. Submit to Google
# - Update sitemap
# - Submit via Search Console
# - Request indexing for top 10 pages
```

---

## 📁 File structure (what to create)

```
blog/   # SEWWA Astro site (this repo)
├── src/
│   ├── pages/
│   │   └── [slug].astro           # blog + programmatic; allowlisted programmatic segments + blog slugs
│   ├── data/
│   │   └── programmatic/
│   │       ├── types.ts           # types + optional Zod schemas
│   │       ├── registry.ts        # all 50 entries combined for getStaticPaths
│   │       ├── industries.ts      # or split however you prefer
│   │       ├── platforms.ts
│   │       └── schema-guides.ts
│   └── components/
│       └── programmatic/          # presentation components per kind (recommended)
├── content/
│   └── programmatic/              # optional MDX bodies (pattern A/C)
└── programmatic-seo-engine/       # planning docs (this folder)
```

**Not used in the recommended approach:** `scripts/generate-pages.mjs`, dozens of sibling `.astro` files under `pages/`, or standalone `templates/*.astro` that emit full HTML documents.

---

## 💰 Cost Breakdown (Phase 1)

| Item | Cost | Notes |
|------|------|-------|
| Keyword Research | $0 | Pre-defined ✅ |
| Cursor AI | $0 | Already subscribed ✅ |
| Hosting | $0 | Vercel free tier ✅ |
| Domain | $0 | Already owned ✅ |
| **Total** | **$0** | **Zero cost!** 🎉 |

---

## 📊 Metrics to Track

### Week 1 (During Build):
- Pages generated: 50/50
- Build time: <5 minutes
- No errors/warnings

### Week 2-4 (After Launch):
- Pages indexed: Target 25/50
- Impressions: Target 500+
- Average position: <50

### Month 2-3:
- Pages indexed: 50/50
- Organic traffic: 1,000+ visits/month
- Top 10 rankings: 5+ keywords
- Tool usage from pages: 50+ clicks

---

## 🚀 Quick start commands

```bash
# 1. Repo root (adjust path to your clone)
cd /Users/ronggur/Works/Sewwa/www/blog

# 2. Create programmatic data + component folders (when you start coding)
mkdir -p src/data/programmatic src/components/programmatic

# 3. Optional: MDX bodies
mkdir -p content/programmatic

# 4. Use Cursor to generate long-form content
# (See Cursor-Workflow-Guide.md)

# 5. Verify `src/pages/[slug].astro` + registry (`npm run build`)
npm run build

# 6. Deploy (your usual pipeline, e.g. Vercel)
```

---

## ✅ Success Criteria for Phase 1

**Technical**:
- ✅ 50 programmatic routes build without errors (from one dynamic page + registry)
- ✅ Build time <5 minutes
- ✅ All pages mobile-friendly

**Content**:
- ✅ 100% unique content
- ✅ 1,500-2,000 words per page
- ✅ 2-3 internal links per page

**SEO**:
- ✅ 25+ pages indexed within 30 days
- ✅ 500+ impressions in first month
- ✅ 0 manual penalties

**Business**:
- ✅ 50+ tool clicks from programmatic pages
- ✅ 5+ backlinks earned naturally

---

## 🎯 Ready to start?

**Next action (after ship)**: Monitor indexing in Search Console; expand `bodyMarkdown` or add `content/programmatic` MDX if you want longer guides. Registry and `[slug].astro` are in place with 50 programmatic URLs.

**Goal**: 50 allowlisted URLs building and deployable by April 12, 2026.

**Cost**: $0  
**Time**: ~1 week

Let's build this! 🚀
