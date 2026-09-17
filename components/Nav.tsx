import { useState } from 'react'

type Page =
  | 'home'
  | 'projects'
  | 'about'
  | 'resume'
  | 'contact'
  | 'changeflow'

interface NavProps {
  current: Page
  onNav: (page: Page) => void
}

export default function Nav({ current, onNav }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Projects', page: 'projects' },
    { label: 'About', page: 'about' },
    { label: 'Resume', page: 'resume' },
    { label: 'Contact', page: 'contact' },
  ]

  const handleNav = (page: Page) => {
    onNav(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 tracking-tight transition-colors hover:text-blue-600"
          aria-label="Go to home page"
        >
          <span className="text-lg font-bold text-blue-600">GN</span>
          <span className="text-lg font-semibold text-slate-900">
            Gia Hung Nguyen
          </span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                current === page
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <button
            onClick={() => handleNav('contact')}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-3 md:hidden">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                current === page
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => handleNav('contact')}
            className="mt-2 rounded-md bg-blue-600 px-3 py-2 text-left text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Contact Me
          </button>
        </div>
      )}
    </header>
  )
}