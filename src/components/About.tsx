export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="heading">Startup. Premium. Proven.</h2>
          <p className="text-muted">
            We are a startup delivering premium software with an obsession for quality and detail. So far, we’ve
            delivered <span className="text-white">10+ projects</span> with a <span className="text-white">100% success rate</span>—
            partnering closely with clients to understand goals and ship outcomes that scale.
          </p>
          <p className="text-muted">
            Our approach blends modern engineering with refined design. The result: elegant, high‑performance products
            that feel effortless to use.
          </p>
          <p className="text-muted">
            Behind every delivery is an experienced team of engineers and designers—bringing production‑ready
            practices, clear communication, and meticulous attention to detail to every project.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <div className="text-3xl font-serif">10+</div>
            <div className="text-sm text-muted">Projects delivered</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-serif">100%</div>
            <div className="text-sm text-muted">Success rate to date</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-serif">Premium</div>
            <div className="text-sm text-muted">Service & support</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-serif">End‑to‑end</div>
            <div className="text-sm text-muted">From idea to deployment</div>
          </div>
        </div>
      </div>
    </section>
  )
}
