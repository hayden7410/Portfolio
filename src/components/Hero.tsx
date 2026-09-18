import { Link } from 'react-router-dom'

const flow = [
  {
    number: '01',
    label: 'Requirements',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    number: '02',
    label: 'Process Analysis',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  },
  {
    number: '03',
    label: 'System Design',
    color: 'bg-violet-50 border-violet-200 text-violet-700',
  },
  {
    number: '04',
    label: 'Implementation',
    color: 'bg-slate-50 border-slate-200 text-slate-700',
  },
  {
    number: '05',
    label: 'Validation',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
]

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
      {/* Left — introduction */}
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Open to Business Systems Analyst opportunities
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Turning business problems into{' '}
          <span className="text-blue-600">clear requirements,</span>{' '}
          system designs, and working solutions.
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-500">
          I combine business analysis and technical understanding to translate
          business needs into structured requirements, process models, system
          designs, and validated solutions.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
          >
            View My Projects
          </Link>

          <Link
            to="/resume"
            className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
          >
            View Resume
          </Link>
        </div>
      </div>

      {/* Right — analysis to delivery lifecycle */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Analysis to Delivery
          </p>

          <p className="mb-5 text-center text-xs text-slate-400">
            How I approach a business systems problem
          </p>

          <div className="flex flex-col gap-2">
            {flow.map((step, index) => (
              <div key={step.label}>
                <div
                  className={`flex items-center gap-4 rounded-lg border px-4 py-3 text-sm font-medium transition-transform hover:scale-[1.01] ${step.color}`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/70 text-[10px] font-bold">
                    {step.number}
                  </span>

                  <span>{step.label}</span>
                </div>

                {index < flow.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg
                      className="h-4 w-4 text-slate-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ChangeFlow validation metrics */}
        <div className="mt-4 grid w-full max-w-sm grid-cols-3 gap-2">
          {[
            {
              value: '32',
              label: 'Functional Reqs',
            },
            {
              value: '13',
              label: 'User Stories',
            },
            {
              value: '37/37',
              label: 'UAT Passed',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-slate-200 bg-white p-3 text-center"
            >
              <div className="text-base font-bold text-blue-600">
                {stat.value}
              </div>

              <div className="mt-0.5 text-[10px] leading-tight text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2 text-[10px] text-slate-400">
          ChangeFlow v1.0
        </p>
      </div>
    </section>
  )
}