import type { ProgrammaticEntry } from './types'
import { industryEntries } from './industries'
import { platformEntries } from './platforms'
import { schemaGuideEntries } from './schema-guides'
import { programmaticEntriesSchema } from './schema'

const raw: ProgrammaticEntry[] = [...industryEntries, ...platformEntries, ...schemaGuideEntries]

export const PROGRAMMATIC_ENTRIES: ProgrammaticEntry[] = programmaticEntriesSchema.parse(raw)

export function getProgrammaticBySegment(urlSegment: string): ProgrammaticEntry | undefined {
	return PROGRAMMATIC_ENTRIES.find((e) => e.urlSegment === urlSegment)
}
