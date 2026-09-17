type Page = 'home' | 'projects' | 'about' | 'resume' | 'contact' | 'changeflow'

interface ProjectsProps {
  onNav: (page: Page) => void
}

const tags = ['Business Analysis', 'Process Improvement', 'Requirements Engineering', 'System Design', 'Spring Boot', 'React', 'PostgreSQL']

export default function Projects({ onNav }: ProjectsProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">Featured Work</p>
        <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
        <p className="text-slate-500 mt-2 max-w-xl">
          End-to-end case studies combining business analysis, system design, and technical delivery.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* ChangeFlow — primary project card */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all group">
          {/* Mock app preview banner */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-8 pt-8 pb-0 flex items-end gap-4 min-h-[160px] relative overflow-hidden">
            {/* Simulated app UI */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute h-px bg-white" style={{ top: `${i * 22 + 20}px`, left: 0, right: 0 }} />
              ))}
            </div>
            <div className="relative flex gap-3 w-full">
              {/* Sidebar mock */}
              <div className="w-36 bg-slate-700/60 rounded-t-lg flex-shrink-0 p-3">
                <div className="w-16 h-2 bg-blue-400 rounded mb-3" />
                {['My Requests', 'Review Queue', 'All Requests', 'Settings'].map((item) => (
                  <div key={item} className="h-6 flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-slate-500 rounded" />
                    <div className="text-[10px] text-slate-400">{item}</div>
                  </div>
                ))}
              </div>
              {/* Main content mock */}
              <div className="flex-1 bg-slate-700/40 rounded-t-lg p-3">
                <div className="w-40 h-2 bg-white/20 rounded mb-4" />
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { label: 'Open', val: '4', color: 'bg-blue-500' },
                    { label: 'In Review', val: '2', color: 'bg-amber-500' },
                    { label: 'Closed', val: '11', color: 'bg-emerald-500' },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-600/50 rounded p-2">
                      <div className={`text-sm font-bold text-white`}>{s.val}</div>
                      <div className="text-[9px] text-slate-400">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {['CR-001 · System Integration · In Review', 'CR-002 · Database Migration · Open', 'CR-003 · UI Update · Approved'].map((row) => (
                    <div key={row} className="h-6 bg-slate-600/40 rounded flex items-center px-2 text-[9px] text-slate-400">{row}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    MVP Complete
                  </span>
                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                    Full Case Study Available
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  ChangeFlow — Change Request Management System
                </h3>
                <p className="text-slate-500 mt-1 max-w-2xl text-sm leading-relaxed">
                  An end-to-end Business Systems Analysis and full-stack project designed to centralize and standardize
                  the internal change request lifecycle. Covers requirements through UAT.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-lg mb-6 border border-slate-200">
              {[
                { value: '32', label: 'Functional Requirements' },
                { value: '15', label: 'Business Rules' },
                { value: '13', label: 'User Stories' },
                { value: '37 / 37', label: 'UAT Cases Passed' },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-xl font-bold text-blue-600">{m.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNav('changeflow')}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-all hover:shadow-md active:scale-[0.98]"
            >
              View Case Study →
            </button>
          </div>
        </div>

        {/* Banking — placeholder card */}
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 hover:border-slate-400 transition-all">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="px-2 py-0.5 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                Case Study In Development
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-3">Banking Systems Project</h3>
              <p className="text-slate-400 text-sm mt-1">Business Analysis · Systems Integration · Financial Services</p>
              <p className="text-slate-500 text-sm mt-3 max-w-xl">
                Analysis and integration work within a financial services context. Case study documentation in progress.
              </p>
            </div>
            <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
