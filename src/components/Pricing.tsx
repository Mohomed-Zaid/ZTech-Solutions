export default function Pricing() {
  const plans = [
    {
      title: 'Business Websites',
      price: '15,000',
      note: 'LKR',
      features: ['Up to 6 pages', 'Mobile-friendly design', 'Basic SEO setup', 'Hosting guidance'],
    },
    {
      title: 'Ecommerce Websites',
      price: '50,000',
      note: 'LKR',
      features: ['Product catalog', 'Cart + checkout flow', 'Payment gateway integration', 'Admin product management'],
    },
    {
      title: 'Systems Implementation',
      price: '60,000',
      note: 'LKR',
      features: ['Management systems', 'Inventory systems', 'Custom workflows', 'Deployment support'],
    },
    {
      title: 'Customized Websites',
      price: 'Negotiable',
      note: '',
      features: ['Tailored requirements', 'Design + development', 'Deployment support', 'Maintenance options'],
    },
  ]

  return (
    <section id="pricing" className="section">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="heading">Plans</h2>
        <p className="subtle">Choose a plan that fits your business</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div key={plan.title} className="card p-7 flex flex-col">
            <div className="mb-4">
              <p className="text-xs tracking-[0.22em] text-muted uppercase">{plan.title}</p>
            </div>

            <div className="mb-6">
              {plan.price === 'Negotiable' ? (
                <div className="text-4xl md:text-5xl font-serif">Negotiable</div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-muted">{plan.note}</span>
                  <span className="text-4xl md:text-5xl font-serif">{plan.price}</span>
                </div>
              )}
            </div>

            <div className="flex-1">
              <ul className="space-y-3 text-sm text-muted list-disc list-inside">
                {plan.features.map((f) => (
                  <li key={f} className="marker:text-[var(--brand)]">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a className="btn-primary w-full justify-center" href="#contact">
                Get a Quote
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[10px] text-muted text-center">Service charge included</p>
    </section>
  )
}
