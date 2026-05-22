import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Work', href: '#case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
            src="/Logo.png"
            alt="ZTech Solutions logo"
            className="h-9 w-9 rounded-md object-contain"
          />
          <span className="font-serif text-xl md:text-2xl">ZTech Solutions</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} className="hover:text-[var(--brand)] transition" href={l.href}>{l.label}</a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center h-10 w-10 rounded-lg border border-[var(--border)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="container-responsive flex flex-col gap-4 py-6 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                className="hover:text-[var(--brand)] transition"
                href={l.href}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
