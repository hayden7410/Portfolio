export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">About Me</p>
        <h2 className="text-3xl font-bold text-slate-900">Business Systems Analyst</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left col — narrative */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <p className="text-slate-600 leading-relaxed mb-4">
              I work at the intersection of business and technology — translating stakeholder needs into structured
              requirements, process models, and system designs that can actually be built and validated.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              My approach combines rigorous business analysis methodology (requirements elicitation, BRD authoring,
              BPMN modelling, UAT) with hands-on technical capability across the full stack. I can read code, write
              queries, design APIs, and understand system behaviour — which means I can bridge the gap between
              business stakeholders and engineering teams without losing fidelity on either side.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I'm particularly interested in roles that blend systems analysis, process improvement, and delivery —
              Business Analyst, Business Systems Analyst, or Product Analyst positions in technology-forward environments.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-5">What I Bring</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Business Systems Analysis',
                  detail: 'Requirements elicitation, BRD authoring, traceability matrices, acceptance criteria, and UAT design.',
                  icon: '📋',
                },
                {
                  title: 'Process Analysis',
                  detail: 'BPMN modelling, current-state / future-state mapping, root cause analysis, and solution evaluation.',
                  icon: '🔍',
                },
                {
                  title: 'Data & Systems Thinking',
                  detail: 'SQL, data modelling, domain analysis, UML class and sequence diagrams, REST API design.',
                  icon: '🧩',
                },
                {
                  title: 'Technical Delivery',
                  detail: 'Full-stack implementation using Java / Spring Boot, React, and PostgreSQL. Can build as well as specify.',
                  icon: '⚙️',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right col — facts */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-800">BSc (Hons) Computing</p>
                <p className="text-xs text-slate-500 mt-0.5">Software Development</p>
                <p className="text-xs text-blue-600 mt-1">2022 – 2026</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'SQL', 'REST APIs', 'BPMN', 'UML', 'Git', 'Agile', 'Confluence', 'Jira'].map((tool) => (
                <span key={tool} className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-xl p-6 text-white">
            <h3 className="text-sm font-semibold mb-3">Currently Looking For</h3>
            <ul className="space-y-2">
              {['Business Analyst roles', 'Business Systems Analyst positions', 'Junior / Graduate BA opportunities', 'Technology-forward environments'].map((r) => (
                <li key={r} className="text-sm text-blue-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-300 rounded-full flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
