import { Link } from 'react-router-dom'

const changeFlowTags = [
  'Business Analysis',
  'Process Improvement',
  'Requirements Engineering',
  'BPMN & UML',
  'Spring Boot',
  'React',
  'PostgreSQL',
]

const changeFlowMetrics = [
  { value: '32', label: 'Functional Requirements' },
  { value: '15', label: 'Business Rules' },
  { value: '13', label: 'User Stories' },
  { value: '37 / 37', label: 'UAT Cases Passed' },
]

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Section heading */}
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Featured Work
        </p>

        <h2 className="text-3xl font-bold text-slate-900">
          Projects
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
          Case studies showing how I move from business problem analysis and
          requirements through system design, implementation, traceability,
          and validation.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* ChangeFlow */}
        <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-lg">
          {/* Real ChangeFlow preview */}
          <div className="relative h-[260px] overflow-hidden bg-slate-900 sm:h-[320px]">
            <img
              src="/screenshots/dashboard.png"
              alt="ChangeFlow role-aware dashboard"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
            />

            {/* subtle bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/30 to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-md border border-white/20 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
              ChangeFlow v1.0
            </div>
          </div>

          <div className="p-8">
            <div className="mb-5">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  Functional MVP Complete
                </span>

                <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                  UAT Accepted
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                ChangeFlow — Change Request Management System
              </h3>

              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
                An end-to-end Business Systems Analysis and full-stack project
                designed to centralize and standardize an internal change
                request lifecycle from intake and review through developer
                assignment, implementation, validation, and closure.
              </p>
            </div>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {changeFlowTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="mb-6 grid grid-cols-2 gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:grid-cols-4">
              {changeFlowMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="text-center"
                >
                  <div className="text-xl font-bold text-blue-600">
                    {metric.value}
                  </div>

                  <div className="mt-0.5 text-xs text-slate-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/projects/changeflow"
              className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
            >
              View Case Study →
            </Link>
          </div>
        </article>

        {/* Banking project */}
        <article className="rounded-xl border border-dashed border-slate-300 bg-white p-8 transition-all hover:border-slate-400">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                Upcoming Project
              </span>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Banking Systems Case Study
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Business Analysis · Systems Integration · Financial Services
              </p>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
                A future case study focused on analyzing a realistic banking
                problem and designing a manageable solution involving multiple
                business and technical systems.
              </p>

              <p className="mt-3 text-xs font-medium text-slate-400">
                Research and problem selection will begin next.
              </p>
            </div>

            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}