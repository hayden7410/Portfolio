import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-slate-600">
            Gia Hung Nguyen
          </p>

          <p className="mt-1 text-xs text-slate-400">
            © {year} · Business Systems Analyst Portfolio
          </p>
        </div>

        <nav
          className="flex flex-wrap justify-center gap-1"
          aria-label="Footer navigation"
        >
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="rounded-md px-3 py-1.5 text-xs text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-700"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}