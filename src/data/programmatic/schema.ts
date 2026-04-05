import { z } from 'astro:content'

const platformPluginSchema = z.object({
	name: z.string(),
	notes: z.string().optional(),
})

const troubleshootingSchema = z.object({
	problem: z.string(),
	solution: z.string(),
})

const schemaPropertySchema = z.object({
	name: z.string(),
	description: z.string(),
})

const baseSchema = z.object({
	urlSegment: z.string().min(1),
	title: z.string().min(1),
	description: z.string().min(1),
	bodyMarkdown: z.string(),
})

export const industryEntrySchema = baseSchema.extend({
	kind: z.literal('industry'),
	industryLabel: z.string().min(1),
	commonSchemas: z.array(z.string()).min(1),
	tips: z.array(z.string()).min(1),
	exampleJsonLd: z.string().min(1),
})

export const platformEntrySchema = baseSchema.extend({
	kind: z.literal('platform'),
	platformLabel: z.string().min(1),
	category: z.enum(['cms', 'ecommerce', 'site-builder', 'framework', 'static-site-generator']),
	plugins: z.array(platformPluginSchema),
	manualMethod: z.string().min(1),
	troubleshooting: z.array(troubleshootingSchema).min(1),
})

export const schemaTypeEntrySchema = baseSchema.extend({
	kind: z.literal('schemaType'),
	schemaTypeLabel: z.string().min(1),
	requiredProperties: z.array(schemaPropertySchema).min(1),
	optionalProperties: z.array(schemaPropertySchema),
	exampleJsonLd: z.string().min(1),
	validationTips: z.array(z.string()).min(1),
	useCase: z.string().min(1),
})

export const programmaticEntrySchema = z.discriminatedUnion('kind', [
	industryEntrySchema,
	platformEntrySchema,
	schemaTypeEntrySchema,
])

export const programmaticEntriesSchema = z
	.array(programmaticEntrySchema)
	.min(1)
	.superRefine((entries, ctx) => {
		const seen = new Set<string>()
		for (let i = 0; i < entries.length; i++) {
			const seg = entries[i].urlSegment
			if (seen.has(seg)) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: `Duplicate urlSegment: ${seg}`,
					path: [i, 'urlSegment'],
				})
			}
			seen.add(seg)
		}
	})
