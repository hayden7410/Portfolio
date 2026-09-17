import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

type Page = 'home' | 'projects' | 'about' | 'resume' | 'contact' | 'changeflow'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const handleNav = (next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <Nav current={page} onNav={handleNav} />

      <main>
        {page === 'home' && (
          <>
            <Hero onNav={handleNav} />
            <Skills />
            <section className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between mb-0">
                <div />
              </div>
            </section>
            <Projects onNav={handleNav} />
            <Contact />
          </>
        )}

        {page === 'projects' && (
          <>
            <div className="max-w-6xl mx-auto px-6 pt-12 pb-4">
              <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">Portfolio</p>
              <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
              <p className="text-slate-500 mt-2">End-to-end case studies from requirements to delivery.</p>
            </div>
            <Projects onNav={handleNav} />
          </>
        )}

        {page === 'changeflow' && (
          <CaseStudy />
        )}

        {page === 'about' && <About />}

        {page === 'resume' && <Resume />}

        {page === 'contact' && <Contact />}
      </main>

      <Footer onNav={handleNav} />
    </div>
  )
}
