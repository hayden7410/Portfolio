import { useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CaseStudy from './components/CaseStudy'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />

      <Skills />

      <Projects />

      <Contact />
    </>
  )
}

function ProjectsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pb-4 pt-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Portfolio
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Projects
        </h1>

        <p className="mt-2 text-slate-500">
          End-to-end case studies from requirements to delivery.
        </p>
      </div>

      <Projects />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }, [pathname])

  return null
}

function PortfolioApp() {
  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <ScrollToTop />

      <Nav />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/projects/changeflow"
            element={<CaseStudy />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/resume"
            element={<Resume />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<HomePage />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  )
}