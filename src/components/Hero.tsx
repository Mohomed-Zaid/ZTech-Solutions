export default function Hero() {
  return (
    <section id="top" className="section pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="heading text-4xl md:text-6xl">
            <span className="bg-gradient-to-r from-[var(--brand-grad-start)] to-[var(--brand-grad-end)] bg-clip-text text-transparent">
              Elegant Software
            </span>
            <br />
            Tailored to Your Vision
          </h1>
          <p className="max-w-xl text-lg text-muted">
            We craft premium digital products with precision engineering and refined design. From idea to deployment, we deliver with excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Get a quote</a>
            <a href="#services" className="btn-ghost">Explore services</a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted">
            <span>Enterprise-grade quality</span>
            <span>•</span>
            <span>On-time delivery</span>
            <span>•</span>
            <span>Transparent process</span>
          </div>
        </div>
        <div className="relative">
          <div className="card p-1">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--border)]">
              <img
                src="/ZTech%20Solutions.png"
                alt="ZTech Solutions banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full opacity-40 blur-2xl" style={{
            background: 'radial-gradient(closest-side, var(--brand), transparent)'
          }} />
        </div>
      </div>
    </section>
  )
}
