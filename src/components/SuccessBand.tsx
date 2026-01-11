export default function SuccessBand() {
  return (
    <section className="container-responsive py-6">
      <div className="card flex flex-col items-center justify-center gap-4 px-6 py-4 md:flex-row md:gap-8">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl">10+</span>
          <span className="text-sm text-muted">Projects delivered</span>
        </div>
        <div className="hidden h-6 w-px bg-[var(--border)] md:block" />
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl">100%</span>
          <span className="text-sm text-muted">Success rate</span>
        </div>
        <div className="hidden h-6 w-px bg-[var(--border)] md:block" />
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl">Premium</span>
          <span className="text-sm text-muted">Service</span>
        </div>
      </div>
    </section>
  )
}
