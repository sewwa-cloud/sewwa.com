import fs from "node:fs";
import path from "node:path";

type FrontmatterValue = string | string[] | Date;

// Minimal frontmatter parser (no gray-matter dependency needed)
function parseFrontmatter(content: string): { data: Record<string, FrontmatterValue>; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: content };

  const frontmatter = match[1];
  const body = match[2];
  const data: Record<string, FrontmatterValue> = {};

  for (const line of frontmatter.split("\n")) {
    const m = line.match(/^(\w[\w-]*):\s*(.+)$/);
    if (m) {
      const raw = m[2].trim().replace(/^['"]|['"]$/g, "");
      let val: FrontmatterValue = raw;
      const arrMatch = raw.match(/^\[(.+)\]$/);
      if (arrMatch) {
        val = arrMatch[1].split(",").map((s) => s.trim());
      } else if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
        val = new Date(raw);
      }
      data[m[1]] = val;
    }
  }
  return { data, body };
}

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: Date;
  tags: string[];
  body: string;
  url: string;
}

const SITE_URL = "https://www.sewwa.com";
const BLOG_DIR = path.resolve("content/blog");
const PUBLIC_DIR = path.resolve("public");

// Collect all blog posts
const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => {
    const mdxPath = path.join(BLOG_DIR, d.name, "index.mdx");
    if (!fs.existsSync(mdxPath)) return null;
    const raw = fs.readFileSync(mdxPath, "utf-8");
    const { data, body } = parseFrontmatter(raw);
    return {
      title: data.title || d.name,
      slug: data.slug || d.name,
      description: data.description || "",
      date: data.date || data.publishDate || new Date(0),
      tags: data.tags || [],
      body,
      url: `${SITE_URL}/blog/${data.slug || d.name}/`,
    } as BlogPost;
  })
  .filter(Boolean) as BlogPost[];

entries.sort((a, b) => b.date.getTime() - a.date.getTime());

// Group by tag
const CATEGORIES = [
  "SEO",
  "AI",
  "Web Development",
  "Content Marketing",
  "Technical SEO",
  "Design & Tools",
  "Schema Markup",
  "CSS",
  "Tools",
  "Design",
  "Frontend",
];

function groupByCategory(posts: BlogPost[]): Map<string, BlogPost[]> {
  const map = new Map<string, BlogPost[]>();
  for (const post of posts) {
    for (const tag of post.tags) {
      const cat = CATEGORIES.find((c) => tag.includes(c)) || tag;
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(post);
    }
  }
  return map;
}

// Build compact llms.txt
function buildCompact(): string {
  const lines: string[] = [];
  lines.push("# SEWWA.com");
  lines.push("");
  lines.push(
    "SEWWA.com provides free web development and SEO tools for developers, designers, and marketers."
  );
  lines.push("");
  lines.push("## Tools");
  lines.push("");
  lines.push(`- [Schema Generator](${SITE_URL}/schema-generator/) — Generate JSON-LD structured data schemas for SEO`);
  lines.push(
    `- [Color Palette Generator](${SITE_URL}/color-palette/) — Create, convert, and manage CSS color palettes`
  );
  lines.push("");
  lines.push("## Blog");
  lines.push("");

  const grouped = groupByCategory(entries);
  for (const [category, posts] of grouped) {
    lines.push(`### ${category}`);
    lines.push("");
    for (const post of posts) {
      lines.push(`- [${post.title}](${post.url})`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

// Build full llms-full.txt
function buildFull(): string {
  const lines: string[] = [];
  lines.push("# SEWWA.com — Full Content");
  lines.push("");
  lines.push(
    "SEWWA.com provides free web development and SEO tools for developers, designers, and marketers."
  );
  lines.push("");
  lines.push("## Tools");
  lines.push("");
  lines.push(`- [Schema Generator](${SITE_URL}/schema-generator/) — Generate JSON-LD structured data schemas for SEO`);
  lines.push(
    `- [Color Palette Generator](${SITE_URL}/color-palette/) — Create, convert, and manage CSS color palettes`
  );
  lines.push("");
  lines.push("## Blog Articles");
  lines.push("");

  const grouped = groupByCategory(entries);
  for (const [category, posts] of grouped) {
    lines.push(`### ${category}`);
    lines.push("");
    for (const post of posts) {
      lines.push(`## ${post.title}`);
      lines.push("");
      lines.push(`> ${post.description}`);
      lines.push("");
      lines.push(`URL: ${post.url}`);
      lines.push(`Tags: ${post.tags.join(", ")}`);
      lines.push(`Date: ${post.date.toISOString().split("T")[0]}`);
      lines.push("");
      lines.push(post.body.trim());
      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  return lines.join("\n");
}

// Write files
const compact = buildCompact();
const full = buildFull();

fs.writeFileSync(path.join(PUBLIC_DIR, "llms.txt"), compact, "utf-8");
fs.writeFileSync(path.join(PUBLIC_DIR, "llms-full.txt"), full, "utf-8");

console.log(`✅ Generated llms.txt (${compact.length} chars) and llms-full.txt (${full.length} chars)`);
console.log(`   ${entries.length} blog posts processed.`);
