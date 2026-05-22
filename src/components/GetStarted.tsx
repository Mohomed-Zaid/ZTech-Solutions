export default function GetStarted() {
  return (
    <section className="section py-24">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/ZTech%20Solutions.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative px-8 py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-serif tracking-tight">
            <span className="text-[var(--brand)]">Get</span> Started
          </h3>
          <p className="mt-2 text-xs text-muted uppercase tracking-[0.22em]">
            Continue your business journey with us. Join us right now
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <ul className="space-y-2 text-sm text-white/85 text-left">
              <li>• Free initial consultation</li>
              <li>• Custom demo available</li>
              <li>• Transparent pricing</li>
              <li>• Ongoing support included</li>
            </ul>
          </div>

          <div className="mt-10">
            <a href="#contact" className="btn-primary">Inquire now</a>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-10 left-0 right-0 h-20 bg-[var(--brand)] rotate-[-2deg]" />
      </div>
    </section>
  )
}
