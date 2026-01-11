/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--brand)',
          foreground: 'var(--brand-foreground)'
        },
        surface: 'var(--surface)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: 'var(--card)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif']
      },
      boxShadow: {
        glow: '0 10px 30px rgba(255, 215, 0, 0.25)'
      }
    }
  },
  plugins: []
}
