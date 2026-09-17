type Page = 'home' | 'projects' | 'about' | 'resume' | 'contact' | 'changeflow'

interface HeroProps {
  onNav: (page: Page) => void
}

const flow = [
  { label: 'Requirements', icon: '📋', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Process Analysis', icon: '🔍', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { label: 'System Design', icon: '🏗️', color: 'bg-violet-50 border-violet-200 text-violet-700' },
  { label: 'Implementation', icon: '⚙️', color: 'bg-slate-50 border-slate-200 text-slate-700' },
  { label: 'Validation', icon: '✅', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
]

export default function Hero({ onNav }: HeroProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
      {/* Left — copy */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          Open to Opportunities
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
          Turning business problems into{' '}
          <span className="text-blue-600">clear requirements,</span>{' '}
          system designs, and working solutions.
        </h1>

        <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
          Business Systems Analyst with experience in requirements analysis, process modelling,
          system design, data analysis, stakeholder collaboration, and technical implementation.
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNav('projects')}
            className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-all hover:shadow-md active:scale-[0.98]"
          >
            View My Projects
          </button>
          <button
            onClick={() => onNav('resume')}
            className="px-6 py-3 bg-white text-slate-700 text-sm font-semibold rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-[0.98]"
          >
            View Resume
          </button>
        </div>
      </div>

      {/* Right — BA artifact flow diagram */}
      <div className="flex flex-col items-center gap-0">
        <div className="w-full max-w-xs bg-white rounded-xl border border-slate-200 shadow-sm p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4 text-center">
            BA Delivery Lifecycle
          </p>
          <div className="flex flex-col gap-2">
            {flow.map((step, i) => (
              <div key={step.label}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-medium transition-transform hover:scale-[1.01] ${step.color}`}
                >
                  <span className="text-base">{step.icon}</span>
                  <span>{step.label}</span>
                </div>
                {i < flow.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Small stat chips below the diagram */}
        <div className="grid grid-cols-3 gap-2 mt-4 w-full max-w-xs">
          {[
            { value: '32', label: 'Functional Reqs' },
            { value: '37/37', label: 'UAT Passed' },
            { value: '13', label: 'User Stories' },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-slate-200 rounded-lg p-3 text-center">
              <div className="text-base font-bold text-blue-600">{s.value}</div>
              <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
