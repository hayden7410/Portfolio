const categories = [
  {
    title: 'Business Analysis',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: 'bg-blue-50 text-blue-600',
    skills: [
      'Requirements Elicitation',
      'Business & Functional Requirements',
      'User Stories & Acceptance Criteria',
      'Stakeholder Analysis',
      'Business Rules',
      'Requirements Traceability',
    ],
  },
  {
    title: 'Process & Systems Analysis',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
    color: 'bg-indigo-50 text-indigo-600',
    skills: [
      'BPMN & Process Mapping',
      'Current-State / Future-State Analysis',
      'UML Modelling',
      'Sequence Diagrams',
      'Root Cause Analysis',
      'Solution Evaluation',
    ],
  },
  {
    title: 'Technical & Systems',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: 'bg-slate-100 text-slate-700',
    skills: [
      'SQL & Data Analysis',
      'REST APIs',
      'PostgreSQL',
      'Java / Spring Boot',
      'React',
      'Authentication & RBAC',
    ],
  },
  {
    title: 'Delivery & Validation',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: 'bg-emerald-50 text-emerald-600',
    skills: [
      'Agile Delivery',
      'UAT Planning & Execution',
      'Test Scenarios',
      'Requirement Validation',
      'Defect Tracking',
      'Solution Acceptance',
    ],
  },
]

export default function Skills() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Core Competencies
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            Skills & Expertise
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
            A combination of business analysis, systems thinking, technical
            understanding, and solution validation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex rounded-lg p-2 ${category.color}`}
              >
                {category.icon}
              </div>

              <h3 className="mb-4 text-sm font-semibold text-slate-900">
                {category.title}
              </h3>

              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-500"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-slate-300" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}