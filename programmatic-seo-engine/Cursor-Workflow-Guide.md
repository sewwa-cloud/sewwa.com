# Cursor Workflow for Programmatic SEO Content Generation

**Date**: April 4, 2026
**Purpose**: Use Cursor to generate long-form copy for **50 programmatic URLs** (industry, platform, schema-type guides)
**Cost**: $0 (already subscribed to Cursor!)

**Where output lives (implementation):** Programmatic pages are rendered by **one dynamic Astro route** + a **typed registry** (`src/data/programmatic/`). Cursor output should end up as:

- **MDX files** under `content/programmatic/` (recommended if you want parity with the blog pipeline), **or**
- **Markdown / structured fields** pasted into registry entries,

—not as 50 separate `src/pages/*.astro` files. See `Phase-1-Implementation-Plan.md`.

**Internal links:** Only use paths that exist on the deployed site (this blog’s routes + `SITE.url` tools). Verify links in the repo before asking the model to repeat them.

---

## 🎯 Why Cursor Instead of GPT-4 API?

### Advantages:
- ✅ **FREE** (no API costs)
- ✅ **Better context** (can see your codebase)
- ✅ **Multi-file generation** (Composer mode)
- ✅ **Code aware** (understands Astro/TypeScript)
- ✅ **Easy iteration** (refine without extra cost)
- ✅ **Unlimited generations**
- ✅ **Better quality** (matches your existing style)

### Cost Comparison:
| Method | Cost | Quality | Speed |
|--------|------|---------|-------|
| OpenAI API | $5 | Good | Fast |
| Cursor | **$0** | Better | Faster |

---

## 🚀 Three Cursor Methods

### Method 1: Cursor Chat (Simple & Reliable)

**When to use**: Generating content one page at a time

**Steps**:
1. Open Cursor
2. Press `Cmd+L` (Mac) or `Ctrl+L` (Windows)
3. Type your prompt
4. Get content
5. Refine if needed
6. Copy to file

**Prompt Template for Industry Pages**:
```
Write a comprehensive guide about schema markup for {INDUSTRY} businesses.

Structure:
1. Introduction (150 words)
   - Why {INDUSTRY} specifically needs schema
   - Benefits for {INDUSTRY} websites
   - Statistics if possible

2. Common Schema Types for {INDUSTRY} (bullet list with explanations)
   - List 5-7 relevant schema types
   - Explain why each matters for {INDUSTRY}

3. Real-World Examples (3 examples)
   - Example 1: [Specific {INDUSTRY} use case]
   - Example 2: [Another {INDUSTRY} scenario]
   - Example 3: [Advanced {INDUSTRY} implementation]

4. Step-by-Step Implementation Guide
   - Method 1: Using a plugin/tool
   - Method 2: Manual code
   - Method 3: SEWWA Schema Generator (link to /schema-generator/)

5. {INDUSTRY}-Specific SEO Tips (5 tips)
   - Tip 1: [Specific to {INDUSTRY}]
   - Tip 2: [Specific to {INDUSTRY}]
   - etc.

6. Common Mistakes to Avoid (3-5 mistakes)
   - Mistake 1: [With solution]
   - Mistake 2: [With solution]
   - etc.

7. Conclusion (100 words)
   - Summary of key points
   - CTA to try SEWWA Schema Generator

Tone: Professional but accessible, like explaining to a business owner friend
Length: 1,500-2,000 words
Include: Code examples where relevant
Internal links: use real SEWWA URLs from this project (e.g. `/blog/`, tool pages on www.sewwa.com)—do not invent paths.

Replace {INDUSTRY} with: e-commerce, restaurants, real estate, healthcare, etc.
```

**Example for E-commerce**:
```
Write a comprehensive guide about schema markup for e-commerce businesses.

[Use the full template above, replacing {INDUSTRY} with e-commerce]

Make it specific to online stores selling physical products.
```

**Time per page**: 5-10 minutes
**Quality**: High
**Iteration**: Easy (just ask Cursor to refine)

---

### Method 2: Cursor Composer (Batch Generation)

**When to use**: Generating multiple pages at once (10-50 pages)

**Steps**:
1. Create instruction file: `cursor-batch-instructions.md`
2. Press `Cmd+I` (Mac) or `Ctrl+I` (Windows) for Composer
3. Reference the instruction file
4. Let Cursor generate all pages
5. Review batch results
6. Save all files

**Instruction File Template**:
```markdown
# Batch Generate 50 Programmatic SEO Pages

Generate unique, SEO-optimized content for 50 pages about schema markup.

## Industry Pages (20 pages):
Generate complete guides (1,500-2,000 words) for:

1. Schema Generator for E-commerce
   - Focus: Online stores, product pages
   - Schemas: Product, Offer, Review, AggregateRating
   - Examples: Amazon-style product pages

2. Schema Generator for Restaurants
   - Focus: Local restaurants, food service
   - Schemas: LocalBusiness, Menu, Review
   - Examples: Yelp-style listings

3. Schema Generator for Real Estate
   - Focus: Property listings, real estate agents
   - Schemas: RealEstateAgent, LocalBusiness
   - Examples: Zillow-style listings

[Continue for all 20 industries...]

## Platform Pages (20 pages):
Generate implementation guides for:

21. How to Add Schema to Shopify
    - Methods: Plugin, manual code, SEWWA tool
    - Screenshots description needed
    - Troubleshooting common Shopify issues

22. How to Add Schema to WordPress
    - Plugins: Yoast, Rank Math, SEWWA
    - Manual implementation steps
    - Theme integration tips

[Continue for all 20 platforms...]

## Schema Type Pages (10 pages):
Generate deep-dive guides for:

41. Product Schema Complete Guide
    - All required properties
    - All optional properties
    - Working JSON-LD example
    - Validation tips

42. FAQ Schema Complete Guide
    - Benefits for CTR
    - Implementation steps
    - Common errors
    - Examples

[Continue for all 10 schema types...]

## Requirements for ALL pages:
- 1,500-2,000 words
- Unique content (no duplicates)
- SEO-optimized (keywords naturally integrated)
- Professional but accessible tone
- Include code examples where relevant
- Internal links to verified on-site URLs (blog + tools)
- Clear structure with H2/H3 headers
- Actionable tips readers can implement
- Conclusion with CTA

## Output:
Create 50 markdown or MDX files under `content/programmatic/` using **`urlSegment` as the basename** (matches live URL path segment):

- `schema-generator-for-ecommerce.mdx` → URL `/schema-generator-for-ecommerce/`
- `how-to-add-schema-to-shopify.mdx` → `/how-to-add-schema-to-shopify/`
- `product-schema-complete-guide.mdx` → `/product-schema-complete-guide/`

Alternatively, emit one JSON bundle keyed by `urlSegment` for paste into `src/data/programmatic/` if you are storing body text in the registry.
```

**How to Use**:
1. Save instruction file in your project
2. Open Cursor Composer (`Cmd+I`)
3. Type: "Follow the instructions in cursor-batch-instructions.md"
4. Cursor generates all 50 pages
5. Review each file
6. Make adjustments as needed

**Time**: 1-2 hours for all 50 pages
**Quality**: Good (may need refinement)
**Advantage**: Very fast batch generation

---

### Method 3: Cursor with Codebase Context (Best Quality)

**When to use**: Want content that perfectly matches SEWWA's existing style

**Steps**:
1. Open SEWWA repository in Cursor
2. Cursor indexes your codebase
3. Ask Cursor to analyze existing blog posts
4. Generate new content matching that style
5. Get perfectly consistent content

**Prompt Template**:
```
Analyze existing posts under content/blog/ (each post in a folder with index.mdx).

Notice:
- Tone and style
- Structure and formatting
- How internal links are used
- CTA placement
- Code example format
- Introduction/conclusion style

Now, write long-form body content for a programmatic SEO page: schema markup for {INDUSTRY} businesses.

Match the exact style, tone, and structure of existing posts.
Include 2-3 internal links to real routes in this repo or on www.sewwa.com (verify paths).
Make it 1,500-2,000 words.

Avoid repeating the main thesis of any single existing post verbatim—complement `content/blog/` and link to it where useful.
```

**Advantage**: Content seamlessly fits with existing articles

**Time per page**: 10-15 minutes
**Quality**: Excellent (perfect consistency)
**Best for**: Maintaining brand voice

---

## 💡 Cursor Pro Tips

### Tip 1: Use Cursor's Context
```
❌ Wrong: Just ask for generic content

✅ Right: "Based on the existing blog posts in this SEWWA codebase, 
write a new article about schema for e-commerce. Match the tone, 
structure, and style of existing posts."
```

### Tip 2: Iterate Quickly
```
You: Generate intro for e-commerce schema guide

Cursor: [Generates intro]

You: Make it more specific to Shopify store owners

Cursor: [Refines]

You: Add a statistic about e-commerce schema usage

Cursor: [Adds stat]

You: Perfect, now generate 3 industry-specific tips

Cursor: [Generates tips]
```

### Tip 3: Batch Similar Tasks
Instead of doing all 50 pages at once:
- Batch 1: All 20 industry pages (2 hours)
- Batch 2: All 20 platform pages (2 hours)
- Batch 3: All 10 schema type pages (1 hour)

### Tip 4: Create Prompt Templates
Save these in `/cursor-prompts/`:
- `industry-page-prompt.md`
- `platform-page-prompt.md`
- `schema-type-prompt.md`

Then just paste and modify the variable.

### Tip 5: Use Cursor's code understanding
```
"Looking at src/components/programmatic/ProgrammaticIndustryGuide.astro (or the planned section order in Phase-1-Implementation-Plan.md),
generate markdown sections in that order so we can drop them into content/programmatic/{urlSegment}.mdx."
```

Cursor can align headings and section order with the real component contract.

---

## 📋 Daily Workflow with Cursor

### Morning Session (2 hours):
**Goal**: Generate 10 industry pages

**Process**:
1. Open Cursor
2. Open chat (`Cmd+L`)
3. Paste industry prompt template
4. Generate first page
5. Review and refine
6. Save to `content/programmatic/schema-generator-for-ecommerce.mdx` (or your chosen naming = `urlSegment`)
7. Repeat for 9 more industries

**Output**: 10 MDX (or markdown) bodies ready for the programmatic route

### Afternoon Session (2 hours):
**Goal**: Generate 10 platform pages

**Process**:
1. Switch to platform prompt template
2. Generate platform guides
3. Include code snippets
4. Review and save

**Output**: 10 more files

### Day 2-5: Continue until all 50 pages done

---

## ✅ Quality Checklist (Per Page)

Before saving each file, verify:
- [ ] 1,500-2,000 words
- [ ] Unique content (not duplicate)
- [ ] Clear H2/H3 structure
- [ ] 2-3 internal links
- [ ] Code examples (if applicable)
- [ ] Professional tone
- [ ] Specific to the industry/platform/schema type
- [ ] Actionable tips
- [ ] CTA at the end

---

## 🎯 Expected output

**File naming** (when using MDX alongside the registry):
```
content/programmatic/
├── schema-generator-for-ecommerce.mdx
├── schema-generator-for-restaurants.mdx
├── ... (18 more industry files)
├── how-to-add-schema-to-shopify.mdx
├── how-to-add-schema-to-wordpress.mdx
├── ... (18 more platform files)
├── product-schema-complete-guide.mdx
├── faq-schema-complete-guide.mdx
├── ... (8 more schema type files)
```

Frontmatter should at least include: `urlSegment` (must match registry), and optionally `kind` / `title` for validation.

**Each file contains**:
- Full markdown body
- Internal links verified against the repo
- Code examples where relevant
- Ready to be loaded by `[pseoPage].astro` (or merged into registry fields)

---

## 🚨 Common Issues & Fixes

### Issue 1: Content Too Generic
**Problem**: Cursor generates generic advice
**Fix**: Be more specific in prompt
```
❌: "Write about schema for restaurants"

✅: "Write about schema for independent restaurants competing 
with chains like Olive Garden and Cheesecake Factory. Focus on 
local SEO advantages and Google Maps visibility."
```

### Issue 2: Duplicate Content Across Pages
**Problem**: Pages sound too similar
**Fix**: Emphasize uniqueness in each prompt
```
"For this real estate page, focus specifically on residential 
real estate agents selling single-family homes, not commercial 
or rental properties. Make it distinct from the general local 
business guide."
```

### Issue 3: Wrong Tone
**Problem**: Content doesn't match SEWWA's style
**Fix**: Show Cursor examples
```
"Read these 3 existing SEWWA blog posts to understand the tone:
- content/blog/<folder>/index.mdx (pick real folders from this repo)

Match that exact tone and style."
```

---

## 🎉 Summary

**With Cursor, you get**:
- ✅ $0 cost (vs $5 for GPT-4 API)
- ✅ Better quality (codebase context)
- ✅ Faster iteration
- ✅ Unlimited generations
- ✅ Consistent style

**Time to generate 50 pages**:
- Method 1 (Chat): 5-8 hours
- Method 2 (Composer): 2-3 hours
- Method 3 (Context): 6-10 hours

**Recommendation**: Use Method 2 (Composer) for speed, then Method 1 (Chat) for refinement of key pages.

Let's build this! 🚀
