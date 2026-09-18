export default function About() {
  const tools = [
    'Azure DevOps',
    'Jira',
    'Confluence',
    'SQL',
    'PostgreSQL',
    'Java',
    'Spring Boot',
    'React',
    'REST APIs',
    'BPMN',
    'UML',
    'Git',
    'Agile',
  ]

  const strengths = [
    {
      title: 'Business Analysis',
      detail:
        'Requirements, user stories, acceptance criteria, stakeholder analysis, traceability, and UAT.',
    },
    {
      title: 'Process Analysis',
      detail:
        'Current-state and future-state analysis, BPMN, root cause analysis, and workflow improvement.',
    },
    {
      title: 'Systems Thinking',
      detail:
        'Understanding how users, data, processes, APIs, and system components work together.',
    },
    {
      title: 'Technical Understanding',
      detail:
        'Hands-on experience with SQL, REST APIs, Java, Spring Boot, React, PostgreSQL, and access control.',
    },
  ]

  const interests = [
    'Business Systems Analysis',
    'Process Improvement',
    'Systems & Data Analysis',
    'Technology-focused teams',
  ]

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Page heading */}
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          About Me
        </p>

        <h2 className="text-3xl font-bold text-slate-900">
          Business Systems Analyst
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* About text */}
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <p className="mb-4 leading-relaxed text-slate-600">
              I enjoy figuring out how things work, where a process starts to
              break down, and how technology can make that process clearer and
              easier to manage.
            </p>

            <p className="mb-4 leading-relaxed text-slate-600">
              My background is in Business Systems Analysis, so I naturally
              approach problems from both sides. I like talking with
              stakeholders to understand what they actually need, then turning
              that into requirements, process models, system behaviour, and
              something a technical team can work with.
            </p>

            <p className="mb-4 leading-relaxed text-slate-600">
              I also enjoy the technical side of the work. I have experience
              with SQL, APIs, Java, Spring Boot, React, and PostgreSQL, which
              helps me understand how a requirement translates into the system
              behind it.
            </p>

            <p className="leading-relaxed text-slate-600">
              The kind of work I enjoy most is where I can understand a
              problem, organize the details, ask the right questions, and help
              move the solution from an idea to something that can actually be
              built and validated.
            </p>
          </div>

          {/* What I Bring */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-5 text-base font-semibold text-slate-900">
              What I Bring
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-4"
                >
                  <p className="mb-1 text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-500">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">
              Tools & Technologies
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
              Tools I’ve worked with across business analysis, delivery,
              system design, and technical implementation.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Portrait */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="overflow-hidden rounded-lg bg-slate-100">
              <img
                src="/portfolio-image.png"
                alt="Gia Hung Nguyen"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="px-2 pb-2 pt-4">
              <p className="text-sm font-semibold text-slate-900">
                Gia Hung Nguyen
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Business Systems Analyst · Toronto, Canada
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Education
            </h3>

            <p className="text-sm font-semibold text-slate-800">
              Honours Bachelor of Commerce
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              Business Systems Analysis
            </p>

            <p className="mt-2 text-xs font-medium text-slate-600">
              York University
            </p>

            <p className="mt-1 text-xs text-blue-600">
              Graduated 2026
            </p>
          </div>

          {/* Interests */}
          <div className="rounded-xl bg-blue-600 p-6 text-white">
            <h3 className="mb-3 text-sm font-semibold">
              What I’m Interested In
            </h3>

            <ul className="space-y-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-blue-100"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}