import { Cloud, Code2, LineChart, MonitorSmartphone, ShieldCheck, Sparkles } from 'lucide-react'

const categories = [
  {
    icon: MonitorSmartphone,
    title: 'Business Website Development',
    items: [
      'Company websites',
      'Landing pages',
      'Portfolio and service sites',
      'Mobile‑friendly design',
    ],
  },
  {
    icon: Code2,
    title: 'Business Management Systems',
    items: [
      'Inventory management systems',
      'Wholesale management platforms',
      'Sales and invoice management',
      'Customer and vendor tracking',
    ],
  },
  {
    icon: LineChart,
    title: 'Financial Management Systems',
    items: [
      'Receivables and payables tracking',
      'Cash flow management',
      'Profit/loss reporting',
      'Accounting and journal entries',
    ],
  },
  {
    icon: Sparkles,
    title: 'Custom ERP Solutions',
    items: [
      'End‑to‑end business automation',
      'Multi‑module integration',
      'Audit trail and reporting',
      'Backup and restore systems',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Recurring Services',
    items: [
      'Bug fixes',
      'Updates',
      'Security checks',
      'Backups',
    ],
  },
  {
    icon: Cloud,
    title: 'Hosting and Deployment',
    items: [
      'Domain and hosting setup',
      'Server configuration',
      'Deployment and monitoring',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="heading">Premium services</h2>
        <p className="subtle">From business websites to custom apps, automation, and hosting</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ icon: Icon, title, items }) => (
          <div key={title} className="card p-6 transition hover:scale-[1.01] hover:shadow-glow">
            <div
              className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)]"
              style={{ backgroundImage: 'linear-gradient(135deg, var(--brand-grad-start), var(--brand-grad-end))' }}
            >
              <Icon className="h-5 w-5 text-[var(--brand-foreground)]" />
            </div>
            <h3 className="mb-2 font-medium">{title}</h3>
            <ul className="mt-2 space-y-2 text-sm text-muted list-disc list-inside">
              {items.map((item) => (
                <li key={item} className="marker:text-[var(--brand)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
