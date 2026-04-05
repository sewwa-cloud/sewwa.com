export type ProgrammaticKind = 'industry' | 'platform' | 'schemaType'

export type ProgrammaticEntry = IndustryEntry | PlatformEntry | SchemaTypeEntry

export interface ProgrammaticBase {
	urlSegment: string
	title: string
	description: string
	/** Long-form markdown; rendered below structured sections */
	bodyMarkdown: string
}

export interface IndustryEntry extends ProgrammaticBase {
	kind: 'industry'
	industryLabel: string
	commonSchemas: string[]
	tips: string[]
	/** Pretty-printed JSON-LD example tailored to this vertical */
	exampleJsonLd: string
}

export interface PlatformPlugin {
	name: string
	notes?: string
}

export interface PlatformTroubleshooting {
	problem: string
	solution: string
}

export interface PlatformEntry extends ProgrammaticBase {
	kind: 'platform'
	platformLabel: string
	category: 'cms' | 'ecommerce' | 'site-builder' | 'framework' | 'static-site-generator'
	plugins: PlatformPlugin[]
	manualMethod: string
	troubleshooting: PlatformTroubleshooting[]
}

export interface SchemaProperty {
	name: string
	description: string
}

export interface SchemaTypeEntry extends ProgrammaticBase {
	kind: 'schemaType'
	schemaTypeLabel: string
	requiredProperties: SchemaProperty[]
	optionalProperties: SchemaProperty[]
	exampleJsonLd: string
	validationTips: string[]
	useCase: string
}
