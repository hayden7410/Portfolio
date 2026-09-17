type Page = 'home' | 'projects' | 'about' | 'resume' | 'contact' | 'changeflow'

export default function Footer({ onNav }: { onNav: (page: Page) => void }) {
  const links: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Projects', page: 'projects' },
    { label: 'About', page: 'about' },
    { label: 'Resume', page: 'resume' },
    { label: 'Contact', page: 'contact' },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© 2025 · Business Systems Analyst Portfolio</p>
        <nav className="flex flex-wrap gap-1">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { onNav(page); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="px-3 py-1 text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  )
}
