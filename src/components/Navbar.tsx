import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'nav-blur' : ''}`}>
      <nav className="container-responsive flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="ZTech Solutions logo"
            className="h-9 w-9 rounded-md object-contain border border-[var(--border)]"
          />
          <span className="font-serif text-xl md:text-2xl">ZTech Solutions</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:text-[var(--brand)] transition" href="#case-studies">Work</a>
          <a className="hover:text-[var(--brand)] transition" href="#services">Services</a>
          <a className="hover:text-[var(--brand)] transition" href="#about">About</a>
          <a className="hover:text-[var(--brand)] transition" href="#contact">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
