import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Resume', to: '/resume' },
  ]

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 tracking-tight transition-colors hover:text-blue-600"
          aria-label="Go to home page"
        >
          <span className="text-lg font-bold text-blue-600">
            GN
          </span>

          <span className="text-lg font-semibold text-slate-900">
            Gia Hung Nguyen
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium text-white transition-colors ${
                isActive
                  ? 'bg-blue-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`
            }
          >
            Contact Me
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 md:hidden"
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
        <div className="border-t border-slate-200 bg-white px-6 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `mt-2 rounded-md px-3 py-2 text-center text-sm font-medium text-white transition-colors ${
                  isActive
                    ? 'bg-blue-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`
              }
            >
              Contact Me
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}