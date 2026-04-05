import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd as nodeCwd } from 'node:process'

/** Slugs from each post folder under content/blog (index.mdx frontmatter). Used for sitemap filter without astro:content. */
export function readBlogSlugSetFromContentDir(cwd: string = nodeCwd()): Set<string> {
	const root = join(cwd, 'content/blog')
	const out = new Set<string>()
	if (!existsSync(root)) return out
	for (const ent of readdirSync(root, { withFileTypes: true })) {
		if (!ent.isDirectory()) continue
		const file = join(root, ent.name, 'index.mdx')
		if (!existsSync(file)) continue
		const src = readFileSync(file, 'utf8')
		const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(src)
		if (!fm) continue
		for (const line of fm[1].split(/\r?\n/)) {
			const t = line.trim()
			if (!t.startsWith('slug:')) continue
			const v = t
				.replace(/^slug:\s*/, '')
				.replace(/^["']|["']$/g, '')
				.trim()
			if (v) out.add(v)
			break
		}
	}
	return out
}
