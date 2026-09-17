const categories = [
  {
    title: 'Business Analysis',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'text-blue-600 bg-blue-50',
    skills: ['Requirements Elicitation', 'BRD / Functional Requirements', 'User Stories & Acceptance Criteria', 'Stakeholder Analysis', 'Requirements Traceability'],
  },
  {
    title: 'Process & Systems Analysis',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    color: 'text-indigo-600 bg-indigo-50',
    skills: ['BPMN', 'Current-State / Future-State Analysis', 'UML', 'Sequence Diagrams', 'Root Cause Analysis', 'Solution Evaluation'],
  },
  {
    title: 'Technical',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'text-slate-700 bg-slate-100',
    skills: ['REST APIs', 'SQL', 'PostgreSQL', 'Java / Spring Boot', 'React', 'System Integration', 'Authentication / RBAC'],
  },
  {
    title: 'Delivery & Validation',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-emerald-600 bg-emerald-50',
    skills: ['Agile', 'UAT', 'Test Scenarios', 'Acceptance Criteria', 'Requirement Validation'],
  },
]

export default function Skills() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">Core Competencies</p>
          <h2 className="text-3xl font-bold text-slate-900">Skills & Expertise</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all group"
            >
              <div className={`inline-flex p-2 rounded-lg ${cat.color} mb-4`}>
                {cat.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="mt-1.5 w-1 h-1 bg-slate-300 rounded-full flex-shrink-0" />
                    {skill}
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
