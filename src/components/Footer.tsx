export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 border-t border-[var(--border)]">
      <div className="container-responsive flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-6 w-6 rounded border border-[var(--border)]" />
          <span>© {year} ZTech Solutions. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
