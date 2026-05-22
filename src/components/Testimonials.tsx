export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mohamed Irshad',
      role: 'Spare Parts Whole Sale Owner',
      text: 'The Business Manager system transformed our vehicle parts operations. We now track sales, purchases, inventory, and profit/loss in one place. Complete financial visibility.',
    },
    {
      name: 'Minhaj Ahmed',
      role: 'CEO Of Al-Falah Capital',
      text: 'Our investment website is professional, credible, and easy to manage. The CMS-driven pages make content updates simple. Client outreach has improved significantly.',
    },
    {
      name: 'Mohamed Niflan',
      role: 'Founder Of Shayan\'s Kids Care',
      text: 'Our wholesale management system handles everything from inventory to accounting. Manual invoice handling is gone, stock tracking is accurate, and we have full audit history.',
    },
  ]

  return (
    <section id="testimonials" className="section">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="heading">What clients say</h2>
        <p className="subtle">Trusted by businesses across Sri Lanka</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="card p-6 flex flex-col">
            <div className="flex-1">
              <p className="text-muted italic">&ldquo;{t.text}&rdquo;</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-medium">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
