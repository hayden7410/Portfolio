const resumePdf = '/resume/Resume1.0.pdf'

const experience = [
  {
    role: 'Co-op Business Systems Analyst',
    organization: 'MPBSDP – Identity and Access Management Branch',
    location: 'Toronto, ON',
    date: 'May 2024 – May 2025',
    highlights: [
      'Elicited and documented requirements for IAM initiatives, including BRDs, functional and non-functional requirements, and use cases.',
      'Created integration diagrams across multiple system components to help business and technical teams understand dependencies and user journeys.',
      'Supported UAT readiness by reviewing expected system behaviour, acceptance criteria, test scenarios, and requirement gaps.',
      'Tracked backlogs, risks, dependencies, and delivery updates across Agile initiatives using Azure DevOps.',
      'Analyzed 10,000+ user sessions across 30+ program areas and contributed to a 15% improvement in successful login time.',
    ],
  },
  {
    role: 'Teaching Assistant, Management Information Systems',
    organization: 'York University',
    location: 'Toronto, ON',
    date: 'Jan 2025 – May 2025',
    highlights: [
      'Evaluated 80+ assignments and exams using standardized criteria.',
      'Refined grading rubrics and feedback guidance, reducing marking time by 20% while maintaining consistency.',
    ],
  },
]

const projects = [
  {
    title: 'Role-Based Change Intake and Review Platform',
    stack: 'Spring Boot · React / Next.js · PostgreSQL · REST APIs',
    date: 'Jan 2026 – Present',
    description:
      'Designed a structured change-request workflow and produced supporting business analysis artifacts including requirements, process models, use cases, business rules, system diagrams, and implementation specifications.',
  },
  {
    title: 'Note-Taking Application with Graph Visualization',
    stack: 'Node.js · Express.js · React · MySQL · JWT · REST APIs',
    date: 'Mar 2026',
    description:
      'Built a full-stack note-taking application with authentication, folder and tag management, graph visualization, and user-scoped authorization.',
  },
]

const skillGroups = [
  {
    title: 'Requirements & Analysis',
    skills:
      'Requirements Elicitation · BRDs · User Stories · Use Cases · Acceptance Criteria · Functional & Non-Functional Requirements · Traceability',
  },
  {
    title: 'Process & Delivery',
    skills:
      'Business Process Analysis · Current/Future State Analysis · UAT Support · Agile/Scrum · BPMN · UML · Project Coordination',
  },
  {
    title: 'Data & Reporting',
    skills:
      'Excel · Power BI · SQL · Google Analytics · Python · Pandas · Data Analysis · Visualization',
  },
  {
    title: 'Technical',
    skills:
      'REST APIs · JWT · OAuth/OIDC · JavaScript · React · Node.js · Spring Boot · MySQL · PostgreSQL · Git',
  },
]

export default function Resume() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Page heading */}
      <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Resume
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            Experience & Background
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            A quick look at my experience, education, and project work.
            The full resume is available below if you want the details.
          </p>
        </div>

        <a
          href={resumePdf}
          download
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>

          Download Resume
        </a>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="space-y-10 p-8 md:p-10">
          {/* Identity */}
          <div className="border-b border-slate-200 pb-8">
            <h1 className="mb-1 text-2xl font-bold text-slate-900">
              Gia Hung Nguyen
            </h1>

            <p className="mb-4 font-medium text-blue-600">
              Business Systems Analyst
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span>Toronto, ON</span>

              <a
                href="mailto:giahunggn231@gmail.com"
                className="transition-colors hover:text-blue-600"
              >
                giahunggn231@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/giahungg"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/hayden7410"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-blue-600"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Short introduction */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              A little about how I work
            </h2>

            <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
              I enjoy work where I can understand a business problem, organize
              the moving pieces, and help turn that into something clear enough
              for both business and technical teams to act on. My background
              combines requirements, process and systems analysis, data work,
              UAT, and hands-on technical projects.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Experience
            </h2>

            <div className="space-y-7 border-l-2 border-blue-100 pl-6">
              {experience.map((item) => (
                <div key={item.role}>
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.role}
                      </p>

                      <p className="mt-0.5 text-xs font-medium text-blue-600">
                        {item.organization}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        {item.location}
                      </p>
                    </div>

                    <span className="text-xs text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-600"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Education
            </h2>

            <div className="rounded-lg border border-slate-100 bg-slate-50 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Honours Bachelor of Commerce in Business Systems Analysis
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    York University · Toronto, Canada
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    GPA: 3.5 / 4.0 · Summa Cum Laude
                  </p>
                </div>

                <span className="text-xs font-medium text-blue-600">
                  May 2026
                </span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Selected Projects
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-lg border border-slate-200 bg-white p-5"
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <p className="max-w-xs text-sm font-semibold text-slate-900">
                      {project.title}
                    </p>

                    <span className="text-[11px] text-slate-400">
                      {project.date}
                    </span>
                  </div>

                  <p className="mb-3 text-xs font-medium text-blue-600">
                    {project.stack}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-500">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Skills
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-1 text-sm font-semibold text-slate-800">
                    {group.title}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-500">
                    {group.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-8 py-5 md:px-10">
          <p className="text-sm text-slate-500">
            Want the complete version with coursework and full details?
          </p>

          <a
            href={resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}