import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

type Theme = 'gold' | 'silver'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('gold')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'gold'
    setTheme(saved)
    document.documentElement.classList.remove('theme-gold', 'theme-silver')
    document.documentElement.classList.add(`theme-${saved}`)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('theme-gold', 'theme-silver')
    document.documentElement.classList.add(`theme-${theme}`)
    localStorage.setItem('theme', theme)
  }, [theme])

  const next = theme === 'gold' ? 'silver' : 'gold'

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(next)}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-4 py-2 text-sm hover:bg-white/5"
    >
      {theme === 'gold' ? (
        <>
          <Moon className="h-4 w-4" />
          <span>Silver</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          <span>Gold</span>
        </>
      )}
    </button>
  )
}
