# SEWWA Programmatic SEO Engine - Quick Start Guide

**Date**: April 4, 2026
**Goal**: Get first 50 programmatic URLs live in 1 week
**Cost**: $0 ✅
**Research**: $0 ✅ (Keywords already defined!)

**How they ship:** One **dynamic Astro route** + **typed registry** in `src/data/programmatic/` (see `Phase-1-Implementation-Plan.md`). No script that writes 50 `.astro` files.

**Repo:** SEWWA Astro blog at `Works/Sewwa/www/blog` (adjust path locally). Live site uses `SITE.url` from `src/constants.ts`.

---

## 🎯 What You're Building

**50 URLs, 3 kinds** (each URL is a single path segment, e.g. `/schema-generator-for-ecommerce/`):

### Type 1: Industry Schema Guides (20 pages)
- schema-generator-for-ecommerce
- schema-generator-for-restaurants
- schema-generator-for-real-estate
- ... (17 more)

### Type 2: Platform Implementation (20 pages)
- how-to-add-schema-to-shopify
- how-to-add-schema-to-wordpress
- how-to-add-schema-to-squarespace
- ... (17 more)

### Type 3: Schema Type Deep Dives (10 pages)
- product-schema-complete-guide
- faq-schema-complete-guide
- article-schema-complete-guide
- ... (7 more)

**All 50 keywords = ALREADY DEFINED** ✅

---

## 🚀 5-step process (1 week)

### Step 1: Architecture + components (Day 1–2) — ~12 hours

```bash
cd /Users/ronggur/Works/Sewwa/www/blog
mkdir -p src/data/programmatic src/components/programmatic
```

1. Add **`src/pages/[pseoPage].astro`** (name can vary) with `getStaticPaths` driven only by an allowlisted registry.
2. Add **`src/data/programmatic/`**: types, split data files if you want, and **`registry.ts`** that exports all **50** `urlSegment` values matching `Keywords-Data-Reference.md`.
3. Add **presentation components** under `src/components/programmatic/` (one per `kind`, or one smart layout)—use the site’s normal **layout + SEO** components, not standalone HTML documents.

**URL pitfall:** `schema-generator-for/[slug].astro` ⇒ `/schema-generator-for/ecommerce/`, **not** `/schema-generator-for-ecommerce/`. For Phase 1 keyword URLs, use the **flat** segment + single dynamic page (see main plan).

---

### Step 2: Fill the registry (Day 2) — ~3 hours

- Copy structured fields from **`Keywords-Data-Reference.md`** into typed modules (TS or validated JSON).
- Every row must have a unique **`urlSegment`** (final URL = `/${urlSegment}/` on the blog host unless you add a base path later).
- Optional: add **`content/programmatic/*.mdx`** for long prose; link entries by `urlSegment`.

---

### Step 3: Generate content with Cursor (Day 3–5) — ~15 hours

**Use Cursor Chat (`Cmd+L`)**

**For Industry Pages**:
```
Write content for "Schema Generator for {INDUSTRY}" guide.

Structure:
1. Introduction (150 words) - Why {INDUSTRY} needs schema
2. Common schema types (list with explanations)
3. Real-world examples (2-3 use cases)
4. Implementation guide (3 methods)
5. SEO tips for {INDUSTRY} (5 tips)
6. Conclusion (100 words)

Tone: Professional but accessible
Length: 1,500-2,000 words
Include: Internal links to /schema-generator/
```

**For Platform Pages**:
```
Write guide: "How to Add Schema to {PLATFORM}"

Structure:
1. Introduction (150 words)
2. Method 1: Plugin (with steps)
3. Method 2: Manual code (with examples)
4. Method 3: SEWWA tool
5. Troubleshooting (3-5 issues)
6. Conclusion with CTA

Tone: Technical but clear
Length: 1,500-2,000 words
```

**For Schema Type Pages**:
```
Write complete guide for {SCHEMA_TYPE} schema

Structure:
1. What is {SCHEMA_TYPE} schema
2. Required properties (with descriptions)
3. Optional properties (with descriptions)
4. Complete JSON-LD example
5. Validation tips (3-5 tips)
6. How to generate (CTA to SEWWA tool)

Tone: Technical reference
Length: 1,500-2,000 words
```

**Time**:
- 20 industry pages: 6 hours
- 20 platform pages: 6 hours
- 10 schema type pages: 3 hours
- **Total: 15 hours**

**Cost**: $0 (Cursor already subscribed)

---

### Step 4: Wire prose + verify build (Day 6) — ~6 hours

- Paste Cursor output into **MDX** or **markdown fields** on each registry entry.
- Run **`npm run build`**. You should see **50** HTML output paths (one per `urlSegment`), not 50 source files under `pages/`.
- Optional: add a **lint check** (unique `urlSegment`, required fields present).

---

### Step 5: Deploy (Day 7) — ~4 hours

**1. Quality Check**:
```bash
# Test build
npm run build

# Check for errors
echo $? # Should output 0 (success)
```

**2. Deploy**:
```bash
# Deploy to Vercel
vercel --prod

# Or to Netlify
netlify deploy --prod
```

**3. Submit to Google**:
```bash
# Update sitemap
npm run build:sitemap

# Submit via Search Console
# - Go to https://search.google.com/search-console
# - Submit sitemap: /sitemap.xml
# - Request indexing for top 10 priority pages
```

**4. Verify**:
```bash
# Check if pages are live
curl -I https://www.sewwa.com/schema-generator-for-ecommerce/
# Should return 200 OK
```

---

## 📊 50 Pages Full List

### Industries (20):
1. ecommerce
2. restaurants
3. real-estate
4. healthcare
5. dentists
6. lawyers
7. plumbers
8. electricians
9. gyms
10. hotels
11. travel-agencies
12. automotive
13. education
14. nonprofits
15. local-business
16. contractors
17. beauty-salons
18. pet-services
19. accountants
20. insurance

### Platforms (20):
1. shopify
2. wordpress
3. squarespace
4. webflow
5. wix
6. nextjs
7. gatsby
8. react
9. vue
10. angular
11. magento
12. woocommerce
13. bigcommerce
14. ghost
15. jekyll
16. hugo
17. eleventy
18. astro
19. remix
20. nuxt

### Schema Types (10):
1. product
2. article
3. faq
4. how-to
5. event
6. recipe
7. review
8. local-business
9. organization
10. breadcrumb

---

## 💰 Cost Breakdown

| Item | Cost |
|------|------|
| Keyword Research | $0 (pre-defined) ✅ |
| Cursor AI | $0 (subscribed) ✅ |
| Hosting | $0 (Vercel) ✅ |
| **Total** | **$0** 🎉 |

---

## ⏰ Time Breakdown

| Task | Time |
|------|------|
| Create templates | 12 hours |
| Create data files | 3 hours |
| Generate content (Cursor) | 15 hours |
| Build pages | 6 hours |
| Deploy | 4 hours |
| **Total** | **40 hours** |

**Per day** (5 days): 8 hours
**Per day** (7 days): 5.7 hours

---

## ✅ Checklist

**Before Starting**:
- [ ] Cursor installed and working
- [ ] SEWWA codebase accessible
- [ ] Vercel account ready

**Day 1-2**:
- [ ] Added `src/pages/[pseoPage].astro` (or chosen param name)
- [ ] Added `src/data/programmatic/` types + registry wiring
- [ ] Added presentation component(s); pages use site layout + SEO

**Day 2**:
- [ ] Registry lists all 20 industry URL segments + data
- [ ] Registry lists all 20 platform URL segments + data
- [ ] Registry lists all 10 schema-guide URL segments + data

**Day 3-5**:
- [ ] Generated 20 industry page contents
- [ ] Generated 20 platform page contents
- [ ] Generated 10 schema type page contents

**Day 6**:
- [ ] Long-form content attached (MDX or markdown-in-data)
- [ ] `npm run build` succeeds; 50 routes in output
- [ ] Spot-check: titles/descriptions use real `${platform}` / labels (no literal `{platform}` in meta)

**Day 7**:
- [ ] npm run build succeeds
- [ ] Deployed to Vercel
- [ ] Sitemap submitted to Google
- [ ] 10 priority pages submitted for indexing

---

## 🚨 Common Issues & Fixes

### Issue 1: Template Syntax Error
**Problem**: Astro template has syntax errors
**Fix**: Check for proper escaping in JavaScript expressions

### Issue 2: Content Generation Too Slow
**Problem**: Cursor taking too long
**Fix**: Use simpler prompts, generate in smaller batches

### Issue 3: Duplicate Content Warning
**Problem**: Pages too similar
**Fix**: Make each industry/platform section unique with specific examples

### Issue 4: Build fails
**Problem**: `npm run build` errors  
**Fix**: Check registry imports, `getStaticPaths` return shape, and MDX collection config (if used).

### Issue 5: Wrong URL shape
**Problem**: Built URL is `/schema-generator-for/foo/` but you wanted `/schema-generator-for-foo/`  
**Fix**: Use one dynamic param for the **full** segment (`schema-generator-for-foo`), not a nested folder route—see `Phase-1-Implementation-Plan.md`.

---

## 📞 Need help?

**Stuck?** See `Phase-1-Implementation-Plan.md`, `Keywords-Data-Reference.md`, `Cursor-Workflow-Guide.md`.

**Questions**:
- “What do I build first?” → Registry types + one sample row + `[pseoPage].astro` rendering it.
- “How to test?” → `npm run dev`, open `/${urlSegment}/`.
- “When done?” → Build emits 50 routes, no duplicate intents vs `content/blog/` (see overlap section in Phase 1 plan).

---

## 🎯 Success Metrics (First 30 Days)

**Week 1-2** (during build):
- ✅ 50 pages created
- ✅ Build succeeds
- ✅ Deployed to production

**Week 3-4** (after launch):
- ✅ 25+ pages indexed
- ✅ 500+ impressions
- ✅ 50+ clicks to tools

**Month 2**:
- ✅ 50/50 pages indexed
- ✅ 1,000+ impressions
- ✅ 5+ top-50 rankings

---

## 🚀 Ready to start?

**Step 1:** Create folders and stub registry + dynamic page (when coding starts).

```bash
cd /Users/ronggur/Works/Sewwa/www/blog
mkdir -p src/data/programmatic src/components/programmatic
```

**Step 2:** Follow `Phase-1-Implementation-Plan.md` for types and `getStaticPaths`.

**Step 3:** `npm run dev` and load one test URL, then grow to 50 rows.

**Goal:** 50 URLs live by April 12, 2026.

Let's build! 🚀
