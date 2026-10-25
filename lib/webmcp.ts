// WebMCP tools: let in-browser AI agents read the one-page site's sections and jump to them.

export type SiteTool = {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  annotations?: { readOnlyHint: boolean }
  execute: (input: Record<string, unknown>) => unknown
}

export const sections = [
  { href: '#top', label: 'Introduction' },
  { href: '#work', label: 'Work: 300+ local businesses since 2010' },
  { href: '#services', label: 'Services: websites, local SEO, AI search, schema, speed, content, care' },
  { href: '#how', label: 'How we work' },
  { href: '#ai', label: 'AI search optimization' },
  { href: '#devices', label: 'Mobile-first design' },
  { href: '#words', label: 'Client reviews' },
  { href: '#pricing', label: 'Pricing and free site review' },
  { href: '#faq', label: 'Frequently asked questions' },
  { href: '#contact', label: 'Contact: 323-744-1338, steve@gobiya.com, 3580 Wilshire Blvd Ste 132, Los Angeles' },
]

export function createSiteTools(navigate: (href: string) => void): SiteTool[] {
  return [
    {
      name: 'gobiya_list_sections',
      description: 'List the sections of the Gobiya homepage (services, work, reviews, pricing, FAQ and contact details).',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true },
      execute: () => ({ sections }),
    },
    {
      name: 'gobiya_go_to_section',
      description: 'Scroll the Gobiya homepage to a section. Use an href returned by gobiya_list_sections.',
      inputSchema: {
        type: 'object',
        properties: { href: { type: 'string', description: 'A section anchor, such as #pricing.' } },
        required: ['href'], additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: ({ href }) => {
        const allowed = sections.map(section => section.href)
        if (typeof href !== 'string' || !allowed.includes(href)) return { error: 'Choose an existing section.', allowed }
        navigate(href)
        return { href, status: 'Scrolled to section' }
      },
    },
  ]
}

export type ModelContext = {
  registerTool: (tool: SiteTool, options: { signal: AbortSignal }) => void | Promise<unknown>
}

export async function registerSiteTools(context: ModelContext, navigate: (href: string) => void, signal: AbortSignal) {
  for (const tool of createSiteTools(navigate)) {
    if (signal.aborted) return
    await context.registerTool(tool, { signal })
  }
}
