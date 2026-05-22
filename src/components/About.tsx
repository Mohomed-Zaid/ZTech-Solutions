export default function About() {
  return (
    <section id="about" className="section">
      <div className="mb-10 text-center">
        <h2 className="heading">About Us</h2>
        <p className="mt-2 text-sm text-muted uppercase tracking-[0.22em]">What do we do</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">We are ZTech Solutions</h3>
          <p className="text-muted">
            We help businesses grow and expand by delivering refined, premium digital solutions for simple and
            convenient operations. From business websites to custom applications, we focus on moving your business to
            the next level.
          </p>

          <div className="flex items-center gap-6 pt-2 text-sm">
            <span className="text-[var(--brand)]">Our advantages</span>
            <span className="text-muted">|</span>
            <span className="text-muted">Our guarantees</span>
          </div>

          <p className="text-muted">
            You might be able to receive all your business solutions in one place. We advise your company on how to
            stay up with the newest trends and approaches in order to compete in the market.
          </p>

          <div className="pt-4">
            <a href="#services" className="btn-primary">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}
