type Case = {
  title: string
  industry: string
  summary: string
  outcome: string
}

const cases: Case[] = [
  {
    title: 'Investment Company Website (Al-Falah Capital)',
    industry: 'Finance',
    summary:
      'Responsive investment website with a clean, credible brand, CMS‑driven pages, and lead capture.',
    outcome: 'Launched on time; easier content updates; improved credibility for client outreach',
  },
  {
    title: 'Waste Management System (GreenGrid Waste Management System)',
    industry: 'Operations',
    summary:
      'End‑to‑end system for waste collection scheduling, tracking, and reporting.',
    outcome: 'Streamlined workflows; centralized data; reduced manual work',
  },
  {
    title: 'Store Inventory System (Axion Digital)',
    industry: 'Retail',
    summary:
      'Inventory tracking with barcode support, low‑stock alerts, and simple reporting.',
    outcome: 'Better stock visibility; fewer stockouts; faster daily checks',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="heading">Selected work</h2>
        <p className="subtle">Impactful outcomes from recent projects</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <article key={c.title} className="card p-6">
            <div className="mb-2 text-sm text-muted">{c.industry}</div>
            <h3 className="mb-2 font-medium">{c.title}</h3>
            <p className="mb-4 text-sm text-muted">{c.summary}</p>
            <div className="rounded-xl border border-[var(--border)] bg-black/20 px-4 py-3 text-sm">
              <span className="text-white">Outcome:</span> {c.outcome}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
