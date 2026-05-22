export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 border-t border-[var(--border)]">
      <div className="container-responsive flex flex-col items-center justify-between gap-6 py-8 text-sm text-muted md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-6 w-6 rounded object-contain" />
          <span>© {year} ZTech Solutions. All rights reserved.</span>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/94788531318"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              WhatsApp
            </a>
            <span className="text-muted/50">|</span>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
