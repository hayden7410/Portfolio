export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-10 flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">Resume</p>
          <h2 className="text-3xl font-bold text-slate-900">Curriculum Vitae</h2>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        {/* Resume preview — structured content */}
        <div className="p-10 space-y-10">
          {/* Header */}
          <div className="border-b border-slate-200 pb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Your Name</h1>
            <p className="text-blue-600 font-medium mb-3">Business Systems Analyst</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span>your.email@example.com</span>
              <span>linkedin.com/in/yourprofile</span>
              <span>github.com/yourusername</span>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Profile</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Business Systems Analyst with a strong foundation in requirements elicitation, process modelling,
              system design, and technical delivery. Experienced in bridging the gap between business stakeholders
              and development teams through structured analysis, documentation, and validation.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Core Skills</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-800 mb-1">Business Analysis</p>
                <p className="text-slate-500 text-xs">Requirements Elicitation · BRD / FRS · User Stories · UAT · Stakeholder Management · Requirements Traceability</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Process & Systems</p>
                <p className="text-slate-500 text-xs">BPMN · UML · Sequence Diagrams · Current/Future State Analysis · Root Cause Analysis</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Technical</p>
                <p className="text-slate-500 text-xs">Java · Spring Boot · React · TypeScript · PostgreSQL · SQL · REST APIs · JWT / RBAC</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Delivery</p>
                <p className="text-slate-500 text-xs">Agile · Scrum · Test Scenarios · Acceptance Criteria · System Integration</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Projects</h2>
            <div className="border-l-2 border-blue-200 pl-5 space-y-5">
              <div>
                <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                  <p className="text-sm font-semibold text-slate-900">ChangeFlow — Change Request Management System</p>
                  <span className="text-xs text-slate-400">2024 – 2025</span>
                </div>
                <p className="text-xs text-blue-600 mb-2">Business Systems Analyst & Full-Stack Developer</p>
                <ul className="space-y-1">
                  {[
                    'Authored BRD with 32 functional requirements, 15 business rules, and 12 non-functional requirements',
                    'Developed BPMN process models, UML class and sequence diagrams',
                    'Implemented full-stack system using Spring Boot, React, and PostgreSQL',
                    'Designed and executed 37 UAT test cases with 100% pass rate',
                  ].map((b) => (
                    <li key={b} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Education</h2>
            <div className="border-l-2 border-slate-200 pl-5">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">BSc (Hons) Computing — Software Development</p>
                  <p className="text-xs text-slate-500 mt-0.5">Your University</p>
                </div>
                <span className="text-xs text-slate-400">2022 – 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA bar */}
        <div className="bg-slate-50 border-t border-slate-200 px-10 py-5 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-slate-500">Download the full CV as a PDF for offline use.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-md border border-slate-200 hover:bg-slate-50 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  )
}
