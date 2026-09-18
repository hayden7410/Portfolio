import { useRef,useState } from 'react'
import { createPortal } from 'react-dom'

type Tab = 'overview' | 'problem' | 'analysis' | 'requirements' | 'design' | 'solution' | 'validation' | 'outcome'

const tabs: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Business Problem' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'design', label: 'Process & System Design' },
  { id: 'solution', label: 'Solution' },
  { id: 'validation', label: 'Validation' },
  { id: 'outcome', label: 'Outcome' },
]

interface ArtifactCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  version: string
}

function ArtifactCard({
  title,
  description,
  icon,
  href,
  version,
}: ArtifactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-sm font-semibold text-slate-900">
              {title}
            </h4>

            <span className="flex-shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-500">
              {version}
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            {description}
          </p>

          <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
            View artifact
            <span
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

interface DiagramCardProps {
  title: string
  caption: string
  src: string
  badge?: string
}

function DiagramCard({
  title,
  caption,
  src,
  badge,
}: DiagramCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-blue-200 hover:shadow-md">
        {/* Diagram preview */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative block w-full cursor-zoom-in overflow-hidden border-b border-slate-200 bg-slate-50"
          aria-label={`View ${title} full size`}
        >
          <div className="flex h-56 items-center justify-center p-5">
            <img
              src={src}
              alt={title}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-all duration-300 group-hover:bg-slate-950/30">
            <div className="flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M15 10l4.553-4.553m0 0H16m3.553 0V9M9 14l-4.553 4.553m0 0H8m-3.553 0V15"
                />
              </svg>

              Click to enlarge
            </div>
          </div>
        </button>

        {/* Card text */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                {title}
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {caption}
              </p>
            </div>

            {badge && (
              <span className="flex-shrink-0 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                {badge}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-4 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            View diagram ↗
          </button>
        </div>
      </div>

      {/* Full-screen viewer */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div
              className="relative flex max-h-[95vh] w-full max-w-[95vw] flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {title}
                  </p>

                  {badge && (
                    <p className="mt-0.5 text-xs text-slate-400">
                      {badge}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Close diagram"
                >
                  ×
                </button>
              </div>

              {/* Large SVG */}
              <div className="overflow-auto bg-slate-100 p-4 sm:p-6">
                <img
                  src={src}
                  alt={`${title} full size`}
                  className="mx-auto h-auto max-h-[80vh] max-w-none"
                />
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-5 py-3">
                <p className="text-xs text-slate-400">
                  Scroll if the diagram is larger than the window.
                </p>

                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  Open original SVG ↗
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

interface ScreenCardProps {
  label: string
  src: string
  description?: string
}

function ScreenCard({ label, src, description }: ScreenCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Screenshot card */}
      <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-blue-200 hover:shadow-md">
       <button
  type="button"
  onClick={() => setIsOpen(true)}
  className="relative block w-full cursor-zoom-in overflow-hidden border-b border-slate-200 bg-slate-100 text-left"
  aria-label={`View ${label} screenshot full size`}
>
  <img
    src={src}
    alt={`${label} — ChangeFlow application`}
    className="h-44 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
  />

  {/* Hover overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-all duration-300 group-hover:bg-slate-950/35">
    <div className="flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M15 10l4.553-4.553m0 0H16m3.553 0V9M9 14l-4.553 4.553m0 0H8m-3.553 0V15"
        />
      </svg>

      Click to enlarge
    </div>
  </div>
</button>

        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                {label}
              </p>

              {description && (
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {description}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex-shrink-0 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              Expand ↗
            </button>
          </div>
        </div>
      </div>

      {/* Full-screen screenshot viewer */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${label} screenshot`}
          >
            {/* Modal container */}
            <div
              className="relative flex max-h-[95vh] w-full max-w-7xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {label}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    ChangeFlow application
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Close screenshot"
                >
                  ×
                </button>
              </div>

              {/* Large screenshot */}
              <div className="overflow-auto bg-slate-100 p-3 sm:p-5">
                <img
                  src={src}
                  alt={`${label} — ChangeFlow application full size`}
                  className="mx-auto h-auto max-h-[80vh] max-w-full object-contain"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3">
                <p className="text-xs text-slate-400">
                  Click outside the image to close
                </p>

                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  Open original ↗
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

function ReqCard({ count, type, color }: { count: string | number; type: string; color: string }) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="text-3xl font-bold mb-1">{count}</div>
      <div className="text-xs font-medium opacity-80 uppercase tracking-wide">{type}</div>
    </div>
  )
}

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
const tabContentRef = useRef<HTMLDivElement>(null)

const handleTabChange = (tab: Tab) => {
  setActiveTab(tab)

  setTimeout(() => {
    tabContentRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, 0)
}

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
 {/* Header */}
<div className="mb-8 rounded-xl border border-slate-200 bg-white p-8">
  <div className="flex flex-wrap items-start justify-between gap-8">
    <div className="min-w-0 flex-1">
      {/* Status badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          Functional MVP Complete
        </span>

        <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
          UAT Accepted
        </span>

        <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          Portfolio Case Study
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-slate-900">
        ChangeFlow
      </h1>

      <p className="mt-1 text-lg text-slate-500">
        Change Request Management System
      </p>

      {/* Intro */}
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600">
        I built ChangeFlow as an end-to-end Business Systems Analysis project
        around a simple question: how could an internal change request move
        through intake, review, assignment, implementation, and closure without
        losing ownership, context, or traceability along the way?
      </p>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
        The project follows that problem from early analysis and requirements
        through process and system design, implementation, traceability, UAT,
        and final solution evaluation.
      </p>

      {/* Project metadata */}
      <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
        {[
          {
            label: 'Role',
            value: 'BSA + Developer',
          },
          {
            label: 'Approach',
            value: 'End-to-End',
          },
          {
            label: 'Status',
            value: 'MVP Accepted',
          },
          {
            label: 'Validation',
            value: '37 / 37 UAT',
          },
          {
            label: 'Frontend',
            value: 'React / Vite',
          },
          {
            label: 'Backend',
            value: 'Spring Boot',
          },
        ].map((item) => (
          <div key={item.label}>
            <div className="mb-1 text-xs text-slate-400">
              {item.label}
            </div>

            <div className="text-sm font-semibold text-slate-800">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Quick actions */}
    <div className="flex flex-shrink-0 flex-wrap gap-2">
      <button
        type="button"
        onClick={() => handleTabChange('solution')}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md"
      >
        View Solution
      </button>

      <button
        type="button"
        onClick={() => handleTabChange('validation')}
        className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
      >
        View Validation
      </button>
    </div>
  </div>
</div>

      {/* Tab navigation */}
      {/* Tab navigation */}
<div className="sticky top-16 z-40 mb-8 overflow-x-auto rounded-xl border border-slate-200 bg-white/95 shadow-sm backdrop-blur">
  <div className="flex min-w-max">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        onClick={() => handleTabChange(tab.id)}
        className={`whitespace-nowrap border-b-2 px-5 py-4 text-sm font-medium transition-colors ${
          activeTab === tab.id
            ? 'border-blue-600 bg-blue-50/50 text-blue-600'
            : 'border-transparent text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800'
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>

      {/* Tab content */}
      <div
        ref={tabContentRef}
        className="scroll-mt-36"
        >
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'problem' && <ProblemTab />}
        {activeTab === 'analysis' && <AnalysisTab />}
        {activeTab === 'requirements' && <RequirementsTab />}
        {activeTab === 'design' && <DesignTab />}
        {activeTab === 'solution' && <SolutionTab />}
        {activeTab === 'validation' && <ValidationTab />}
        {activeTab === 'outcome' && <OutcomeTab />}
      </div>
    </div>
  )
}

function OverviewTab() {
  const objectives = [
    'Give users one structured place to submit and track change requests',
    'Standardize the information captured before a request enters review',
    'Create a controlled review process with clear approval and rejection decisions',
    'Make ownership clear through reviewer-controlled developer assignment',
    'Keep request progress visible through comments and workflow history',
    'Protect requests through role, permission, and record-level access controls',
  ]

  const inScope = [
    'Structured request creation, drafts, and submission',
    'Reviewer queue, priority, approval, and rejection',
    'Developer assignment and reassignment',
    'Implementation tracking through defined workflow statuses',
    'Request-level comments and status history',
    'Role-aware dashboards and record-level authorization',
  ]

  const outOfScope = [
    'File attachments and document storage',
    'Email, SMS, or push notifications',
    'External enterprise system integrations',
    'Self-registration, password recovery, and production SSO',
    'Administrative user and role management interface',
    'Production deployment, monitoring, and CI/CD',
  ]

  const stack = [
    {
      layer: 'Frontend',
      tech: 'React / Vite',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      layer: 'Backend',
      tech: 'Java / Spring Boot',
      color: 'bg-indigo-50 text-indigo-700',
    },
    {
      layer: 'Database',
      tech: 'PostgreSQL',
      color: 'bg-slate-100 text-slate-700',
    },
    {
      layer: 'Security',
      tech: 'JWT / RBAC',
      color: 'bg-violet-50 text-violet-700',
    },
    {
      layer: 'Integration',
      tech: 'REST API',
      color: 'bg-slate-100 text-slate-700',
    },
  ]

  const metrics = [
    { label: 'Functional Requirements', value: '32' },
    { label: 'Business Rules', value: '15' },
    { label: 'Non-Functional Requirements', value: '12' },
    { label: 'User Stories', value: '13' },
    { label: 'UAT Cases Passed', value: '37 / 37' },
  ]

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Main content */}
      <div className="space-y-6 lg:col-span-2">
        {/* Background */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="mb-3 text-base font-semibold text-slate-900">
            Project Background
          </h3>

          <p className="text-sm leading-relaxed text-slate-600">
            I built ChangeFlow around a common internal problem: change requests
            can easily become scattered across email, spreadsheets, shared
            documents, and conversations. Once that happens, it becomes harder
            to know what was requested, who owns the next step, what decision
            was made, or where the request currently stands.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            The idea behind ChangeFlow was to bring that process into one
            structured application. A requester can prepare and submit a change,
            a reviewer can assess and prioritize it, an eligible developer can
            be assigned, and everyone involved can follow the request through
            implementation and closure.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            I used the project to work through the full analysis-to-delivery
            lifecycle: understanding the business problem, defining scope and
            requirements, modelling the process and system, implementing the
            solution, and validating the finished MVP.
          </p>
        </div>

        {/* Objectives */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="mb-2 text-base font-semibold text-slate-900">
            What I Wanted the Solution to Improve
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-slate-500">
            The goal was not simply to build a request form. I wanted the
            workflow around the request to be clearer, more controlled, and
            easier to follow from beginning to end.
          </p>

          <ul className="space-y-2.5">
            {objectives.map((objective) => (
              <li
                key={objective}
                className="flex items-start gap-2.5 text-sm text-slate-600"
              >
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Scope */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="mb-5">
            <h3 className="text-base font-semibold text-slate-900">
              MVP Scope
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-slate-500">
              Keeping the first version focused was important. These were the
              capabilities I committed to delivering, along with the items I
              intentionally left for later.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                In Scope
              </p>

              <ul className="space-y-2">
                {inScope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Out of Scope for v1.0
              </p>

              <ul className="space-y-2">
                {outOfScope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-500"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Technology */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="mb-4 text-base font-semibold text-slate-900">
            Technology Stack
          </h3>

          <div className="space-y-3">
            {stack.map((item) => (
              <div
                key={item.layer}
                className="flex items-center justify-between gap-3"
              >
                <span className="text-xs text-slate-500">
                  {item.layer}
                </span>

                <span
                  className={`rounded-md px-2.5 py-1 text-xs font-medium ${item.color}`}
                >
                  {item.tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="rounded-xl bg-blue-600 p-6 text-white">
          <h3 className="mb-1 text-base font-semibold">
            Project at a Glance
          </h3>

          <p className="mb-5 text-xs leading-relaxed text-blue-100">
            The final MVP was documented, implemented, and validated against
            the re-baselined requirements.
          </p>

          <div className="space-y-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between border-b border-blue-500/40 pb-2.5 last:border-0 last:pb-0"
              >
                <span className="text-sm text-blue-100">
                  {metric.label}
                </span>

                <span className="text-sm font-bold">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Final Status
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-900">
            Functional MVP Complete
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            The current scope is implemented and UAT accepted. ChangeFlow is a
            portfolio MVP and has not been hardened for production use.
          </p>
        </div>
      </div>
    </div>
  )
}

function ProblemTab() {
  const painPoints = [
    {
      title: 'Inconsistent Request Information',
      detail:
        'Requests could arrive with different levels of detail, making them harder to understand, compare, and review consistently.',
    },
    {
      title: 'Unclear Ownership',
      detail:
        'After submission, it could be difficult to tell who was responsible for reviewing the request or moving it forward.',
    },
    {
      title: 'Decisions Outside the Record',
      detail:
        'Approval decisions and request discussions could happen through email or chat instead of staying connected to the request itself.',
    },
    {
      title: 'Unclear Prioritization',
      detail:
        'Without a defined reviewer responsibility, urgency and business priority could easily become mixed together or applied inconsistently.',
    },
    {
      title: 'Weak Implementation Visibility',
      detail:
        'Once a request moved toward implementation, stakeholders could have limited visibility into developer ownership and current progress.',
    },
    {
      title: 'Fragmented History',
      detail:
        'Status changes, comments, and decisions could be spread across different channels, making the full request history difficult to reconstruct.',
    },
  ]

  const needs = [
    {
      title: 'A consistent intake process',
      detail:
        'Capture the same core information for every request before it enters the review workflow.',
    },
    {
      title: 'Clear role ownership',
      detail:
        'Separate requester, reviewer, and developer responsibilities so each stage has an accountable owner.',
    },
    {
      title: 'Controlled workflow decisions',
      detail:
        'Make review, priority, approval, rejection, assignment, and closure explicit system actions.',
    },
    {
      title: 'Visible request progress',
      detail:
        'Give authorized users a clear view of the current status, assignment, comments, and workflow history.',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Problem statement */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          The Starting Point
        </p>

        <h3 className="mb-3 text-base font-semibold text-slate-900">
          The problem was bigger than simply not having a form
        </h3>

        <p className="max-w-4xl text-sm leading-relaxed text-slate-600">
          The core issue was the lack of one consistent end-to-end process for
          handling change requests. A request might be captured in one place,
          discussed somewhere else, approved through a conversation, and then
          handed to a technical team without a clear record of how it reached
          that point.
        </p>

        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600">
          From a business analysis perspective, that meant the problem was not
          just data entry. It was also about ownership, workflow control,
          communication, visibility, and traceability.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pain points */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="mb-2 text-base font-semibold text-slate-900">
            What Was Going Wrong
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-slate-500">
            I broke the broader problem into a set of recurring pain points
            that the future process needed to address.
          </p>

          <div className="space-y-3">
            {painPoints.map((item, index) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-red-50 text-[10px] font-bold text-red-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution needs */}
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-2 text-base font-semibold text-slate-900">
              What the Future Process Needed
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-slate-500">
              Before thinking about screens or APIs, I translated those pain
              points into a few process-level needs.
            </p>

            <div className="space-y-4">
              {needs.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis takeaway */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              Analysis Takeaway
            </p>

            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The main design decision was to treat a change request as a
              managed workflow record, not just a submitted form. That decision
              shaped the requirements for status transitions, reviewer actions,
              developer assignment, comments, access control, and history.
            </p>
          </div>

          {/* Intended outcome */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="mb-3 text-base font-semibold text-slate-900">
              Intended Business Outcome
            </h3>

            <p className="text-sm leading-relaxed text-slate-600">
              The target state was a process where someone could look at a
              request and understand what was submitted, who currently owned
              the next action, what decisions had already been made, and how
              the request had moved through the workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnalysisTab() {
  const approach = [
    {
      number: '01',
      title: 'Establish the case for change',
      detail:
        'I started by defining why the existing process was worth improving, what problems the project should address, and what a better process should achieve.',
    },
    {
      number: '02',
      title: 'Understand the people and process',
      detail:
        'I looked at who was involved, what each stakeholder needed, and where the current process could create unclear ownership, inconsistent information, or limited visibility.',
    },
    {
      number: '03',
      title: 'Define the future state and boundary',
      detail:
        'I shaped a more structured future workflow and separated the capabilities needed for the MVP from ideas that could reasonably wait for a later version.',
    },
    {
      number: '04',
      title: 'Turn the analysis into requirements',
      detail:
        'Once the problem, stakeholders, future process, and scope were clearer, I used those outputs as the foundation for the detailed requirements and use cases.',
    },
  ]

  const artifacts = [
    {
      title: 'Business Case',
      version: 'v1.0',
      href: '/documents/business-case.pdf',
      description:
        'Explains why the project was worth pursuing, the business problem behind it, and the value of moving toward a more structured change-request process.',
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
            d="M9 17v-6m3 6V7m3 10v-3m4 7H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Project Charter',
      version: 'v1.0',
      href: '/documents/project-charter.pdf',
      description:
        'Sets the direction for the project, including its objectives, major stakeholders, scope boundaries, assumptions, and constraints.',
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0a2 2 0 104 0m-4 0a2 2 0 114 0m-5 7h6m-6 4h6"
          />
        </svg>
      ),
    },
    {
      title: 'System Vision',
      version: 'v1.2',
      href: '/documents/system-vision.pdf',
      description:
        'Connects the business problem to a high-level view of the proposed system, its users, major capabilities, and overall direction.',
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
            d="M15 10l4.553-4.553m0 0H16m3.553 0V9M9 14l-4.553 4.553m0 0H8m-3.553 0V15"
          />
        </svg>
      ),
    },
    {
      title: 'Stakeholder Analysis',
      version: 'v1.0',
      href: '/documents/stakeholder-analysis.pdf',
      description:
        'Identifies the key stakeholder groups and considers their responsibilities, interests, influence, and relationship to the change-request process.',
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Current & Future Process Analysis',
      version: 'v1.0',
      href: '/documents/current-future-process-analysis.pdf',
      description:
        'Compares the current fragmented process with the proposed future workflow and highlights opportunities for clearer ownership, workflow control, and visibility.',
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
            d="M4 6h5m-5 6h9m-9 6h13M15 6l2-2 2 2m-2-2v8"
          />
        </svg>
      ),
    },
    {
      title: 'Scope Definition',
      version: 'v1.2',
      href: '/documents/scope-definition.pdf',
      description:
        'Defines what the MVP is responsible for delivering and, just as importantly, what remains outside the first version.',
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
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm4 3h8M8 12h5M8 16h7"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Analysis approach */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          My Approach
        </p>

        <h3 className="text-base font-semibold text-slate-900">
          I worked through the business problem before designing the system
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
          I did not want to jump straight into screens or development. I first
          worked through why the project was needed, who the process affected,
          what was going wrong, and where the boundary of the first version
          should sit.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {approach.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
                {step.number}
              </div>

              <p className="text-sm font-semibold text-slate-900">
                {step.title}
              </p>

              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Finalized artifacts */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">
              Analysis & Initiation Artifacts
            </h3>

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Finalized
            </span>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
            These documents show how I moved from a broad idea into a defined
            business problem, stakeholder picture, project boundary, and
            future-state direction. Each artifact below is part of the actual
            ChangeFlow project documentation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => (
            <ArtifactCard
              key={artifact.title}
              {...artifact}
            />
          ))}
        </div>
      </div>

      {/* Transition to requirements */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          From Analysis to Requirements
        </p>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-700">
          Once the problem, stakeholders, future process, and MVP boundary were
          clearer, I had enough structure to move into detailed requirements.
          That next phase is where the finalized BRD, business rules,
          functional and non-functional requirements, use cases, user stories,
          acceptance criteria, and traceability come together.
        </p>
      </div>
    </div>
  )
}
function RequirementsTab() {
  const requirementExamples = [
    {
      id: 'FR-06',
      type: 'Functional',
      text:
        'The system shall capture title, description, business justification, assigned department, and urgency for a change request.',
      trace: 'UC-03',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'FR-15',
      type: 'Functional',
      text:
        'The system shall allow an authorized reviewer to set request priority to LOW, MEDIUM, HIGH, or CRITICAL.',
      trace: 'UC-07',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'BR-04',
      type: 'Business Rule',
      text:
        'The requester selects urgency; request priority is controlled by an authorized reviewer.',
      trace: 'Workflow governance',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      id: 'NFR-04',
      type: 'Non-Functional',
      text:
        'The backend shall enforce role, permission, and record-level authorization for protected request functions regardless of frontend control visibility.',
      trace: 'Authorization security',
      color: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ]

  const acceptanceCriteria = [
    {
      id: 'AC-09.1',
      text:
        'Given a request is APPROVED or IMPLEMENTATION_PENDING, when an authorized reviewer opens assignment controls, then eligible developers can be selected.',
    },
    {
      id: 'AC-09.2',
      text:
        'Given a selected user does not have the DEVELOPER role, then the backend rejects the assignment.',
    },
    {
      id: 'AC-09.3',
      text:
        'Given a valid developer is assigned, then the system records the assigned developer, assigning user, and assignment timestamp.',
    },
    {
      id: 'AC-09.5',
      text:
        'Given a developer is assigned, then the request becomes available in that developer’s Assigned to Me queue.',
    },
  ]

  const requirementLayers = [
    {
      label: 'Business Rules',
      value: '15',
      description:
        'Define who can perform actions, when workflow actions are valid, and how responsibilities are separated.',
    },
    {
      label: 'Functional Requirements',
      value: '32',
      description:
        'Describe the system behaviours needed to support the implemented ChangeFlow workflow.',
    },
    {
      label: 'Non-Functional Requirements',
      value: '12',
      description:
        'Cover usability, security, reliability, auditability, maintainability, responsiveness, and other quality expectations.',
    },
    {
      label: 'Use Cases',
      value: '13',
      description:
        'Describe the main interactions between ChangeFlow and its requester, reviewer, developer, and authenticated-user roles.',
    },
  ]

  const artifacts = [
    {
      title: 'Business Requirements Document',
      version: 'v2.0',
      href: '/documents/business-requirements-document-v2.pdf',
      description:
        'The final requirements baseline for ChangeFlow, including business rules, functional requirements, non-functional requirements, use cases, scope, and workflow behaviour.',
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
    },
    {
      title: 'Use Case List',
      version: 'v2.0',
      href: '/documents/use-cases.pdf',
      description:
        'Defines the 13 implemented use cases across authentication, request preparation, review, assignment, implementation, comments, and status history.',
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
            d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
          />
        </svg>
      ),
    },
    {
      title: 'User Stories & Acceptance Criteria',
      version: 'v1.0',
      href: '/documents/user-stories-acceptance-criteria.pdf',
      description:
        'Translates the workflow into 13 user stories with testable acceptance criteria for requesters, reviewers, developers, and other authorized participants.',
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
            d="M9 12l2 2 4-4m5-3a9 9 0 11-16 0 9 9 0 0116 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Requirements Traceability Matrix',
      version: 'v2.0',
      href: '/documents/requirements-traceability-matrix-v2.pdf',
      description:
        'Connects requirements to use cases, user stories, acceptance criteria, implementation evidence, and validation results.',
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
            d="M4 6h4m4 0h8M4 12h8m4 0h4M4 18h4m4 0h8M8 4v4m4 2v4m4 2v4"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          Requirements Definition
        </p>

        <h3 className="text-base font-semibold text-slate-900">
          Turning the analysis into something the system could actually implement
        </h3>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
          Once I understood the business problem and future-state process, I
          needed to make the expected system behaviour much more precise. I
          separated business rules from functional requirements, documented
          quality and security expectations as non-functional requirements,
          and connected those requirements to use cases and user stories.
        </p>

        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600">
          I found this separation useful because each layer answers a slightly
          different question. A business rule explains the constraint, a
          functional requirement explains what the system must do, and the
          acceptance criteria make that behaviour testable.
        </p>
      </div>

      {/* Requirement counts */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ReqCard
          count={32}
          type="Functional Requirements"
          color="border-blue-200 bg-blue-50 text-blue-700"
        />

        <ReqCard
          count={15}
          type="Business Rules"
          color="border-indigo-200 bg-indigo-50 text-indigo-700"
        />

        <ReqCard
          count={12}
          type="Non-Functional Requirements"
          color="border-slate-200 bg-slate-50 text-slate-700"
        />

        <ReqCard
          count={13}
          type="User Stories"
          color="border-violet-200 bg-violet-50 text-violet-700"
        />
      </div>

      {/* Requirement structure */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-base font-semibold text-slate-900">
          How I Structured the Requirements
        </h3>

        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-500">
          Rather than keeping everything in one long requirement list, I used
          several levels of documentation to make the behaviour easier to
          understand, implement, and later validate.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {requirementLayers.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">
                  {item.label}
                </p>

                <span className="text-lg font-bold text-blue-600">
                  {item.value}
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected requirements */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-slate-900">
            Selected Requirements
          </h3>

          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-500">
            These examples show how different kinds of requirements work
            together rather than existing as isolated statements.
          </p>
        </div>

        <div className="space-y-3">
          {requirementExamples.map((requirement) => (
            <div
              key={requirement.id}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <span className="flex-shrink-0 rounded border border-blue-200 bg-blue-50 px-2 py-1 font-mono text-xs font-semibold text-blue-600">
                  {requirement.id}
                </span>

                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded border px-2 py-0.5 text-[10px] font-semibold ${requirement.color}`}
                    >
                      {requirement.type}
                    </span>

                    <span className="text-[10px] text-slate-400">
                      {requirement.trace}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-700">
                    {requirement.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User story example */}
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-6 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
            User Story Example
          </p>

          <div className="mt-4">
            <span className="rounded-md border border-violet-200 bg-white px-2 py-1 font-mono text-xs font-semibold text-violet-700">
              US-09
            </span>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              Assign or Reassign Developer
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              As a reviewer, I want to assign an approved request to a
              developer so that implementation ownership is clear.
            </p>

            <div className="mt-5 border-t border-violet-200 pt-4">
              <p className="text-xs text-slate-500">
                Primary Actor
              </p>

              <p className="mt-1 text-sm font-medium text-slate-800">
                Project Manager / Solution Architect
              </p>
            </div>
          </div>
        </div>

        {/* Acceptance criteria */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-3">
          <h3 className="text-base font-semibold text-slate-900">
            Making the Story Testable
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            I used acceptance criteria to remove ambiguity around what
            “assigning a developer” actually meant once it reached the system.
          </p>

          <div className="mt-5 space-y-3">
            {acceptanceCriteria.map((criterion) => (
              <div
                key={criterion.id}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex-shrink-0 rounded border border-emerald-200 bg-emerald-50 px-2 py-1 font-mono text-[10px] font-semibold text-emerald-700">
                  {criterion.id}
                </span>

                <p className="text-xs leading-relaxed text-slate-600">
                  {criterion.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Finalized requirement artifacts */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">
              Requirements Artifacts
            </h3>

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Finalized
            </span>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
            These are the actual finalized documents behind the requirements
            shown above. The examples on this page are only a small part of the
            full project baseline.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {artifacts.map((artifact) => (
            <ArtifactCard
              key={artifact.title}
              {...artifact}
            />
          ))}
        </div>
      </div>

      {/* Requirement flow */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Keeping the Requirements Connected
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {[
            'Business Analysis',
            'BR / FR / NFR',
            'Use Cases',
            'User Stories',
            'Acceptance Criteria',
            'Implementation',
            'Validation',
          ].map((step, index, array) => (
            <div
              key={step}
              className="flex items-center gap-2"
            >
              <span className="rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-700">
                {step}
              </span>

              {index < array.length - 1 && (
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-slate-600">
          I wanted each layer to lead naturally into the next one. The analysis
          explains why the behaviour is needed, the requirements define it, the
          user stories and acceptance criteria make it testable, and the RTM
          keeps that relationship visible through implementation and validation.
        </p>
      </div>
    </div>
  )
}


function DesignTab() {
  const diagrams = [
    {
      title: 'BPMN Change Request Lifecycle',
      src: '/diagrams/bpmn-change-request-lifecycle.svg',
      badge: 'BPMN',
      caption:
        'Maps the end-to-end workflow across the requester, ChangeFlow system, reviewer, and developer—from submission through review, implementation, and closure.',
    },
    {
      title: 'Domain Class Diagram',
      src: '/diagrams/domain-class-diagram.svg',
      badge: 'UML',
      caption:
        'Models the core business concepts in ChangeFlow and the relationships between requests, users, roles, departments, comments, and workflow history.',
    },
    {
      title: 'Core Design Class Diagram',
      src: '/diagrams/design-class-core-flow.svg',
      badge: 'System Design',
      caption:
        'Moves from the conceptual domain model into implementation structure, showing how the main request workflow is organized across application components.',
    },
    {
      title: 'Authentication & Authorization Design',
      src: '/diagrams/design-class-authentication.svg',
      badge: 'Security',
      caption:
        'Shows how authentication, roles, permissions, JWT handling, and authorization responsibilities work together to protect ChangeFlow functions.',
    },
    {
      title: 'Create Request Sequence Diagram',
      src: '/diagrams/create-request-sequence.svg',
      badge: 'Sequence',
      caption:
        'Follows one request-submission flow across the frontend, controller, service, repository, security context, and database to show how the requirement becomes system behaviour.',
    },
  ]

  const designProgression = [
    {
      number: '01',
      title: 'Model the business workflow',
      detail:
        'I first mapped how the change request should move between the people and the system before thinking about implementation classes.',
    },
    {
      number: '02',
      title: 'Define the domain',
      detail:
        'I identified the main business concepts, their responsibilities, and how they relate to one another.',
    },
    {
      number: '03',
      title: 'Translate into application design',
      detail:
        'The design class diagrams helped connect the business model to controllers, services, repositories, security, and persistence.',
    },
    {
      number: '04',
      title: 'Validate interactions',
      detail:
        'Sequence modelling let me walk through an actual use case step by step and check whether the components supported the required behaviour.',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          Process & System Design
        </p>

        <h3 className="text-base font-semibold text-slate-900">
          Moving from requirements into a system that could be built
        </h3>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
          This was the point where the project started moving from business
          analysis into more technical systems analysis. I wanted the diagrams
          to answer different questions rather than create them just for the
          sake of having documentation.
        </p>

        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600">
          The BPMN model explains how work moves through the process, the
          domain model explains the business concepts, the design diagrams show
          how those concepts translate into application structure, and the
          sequence diagram checks how the pieces interact during an actual use
          case.
        </p>
      </div>

      {/* Design progression */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-base font-semibold text-slate-900">
          How I Approached the Design
        </h3>

        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-500">
          I worked from the process inward rather than starting with code.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designProgression.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
                {step.number}
              </div>

              <p className="text-sm font-semibold text-slate-900">
                {step.title}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Real diagrams */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">
              Design Artifacts
            </h3>

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Finalized
            </span>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
            These are the actual diagrams produced for ChangeFlow. Click any
            diagram to inspect the full-resolution SVG.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {diagrams.map((diagram) => (
            <DiagramCard
              key={diagram.title}
              {...diagram}
            />
          ))}
        </div>
      </div>

      {/* Design takeaway */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Design Takeaway
        </p>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-700">
          One thing I found useful in this project was moving between different
          levels of abstraction. A requirement might begin as a business rule,
          appear in the BPMN workflow, become authorization or service logic in
          the design model, and then show up again as an interaction in a
          sequence diagram. Keeping those views connected helped me check that
          the technical design still reflected the original business intent.
        </p>
      </div>
    </div>
  )
}

function SolutionTab() {
  const screens = [
    {
      label: 'Login',
      src: '/screenshots/login.png',
      description:
        'Secure entry point for registered users, with authentication handled through the application’s JWT-based security flow.',
    },
    {
      label: 'Role-Aware Dashboard',
      src: '/screenshots/dashboard.png',
      description:
        'Changes the available navigation and actions based on the authenticated user’s permissions and responsibilities.',
    },
    {
      label: 'My Requests',
      src: '/screenshots/my-requests.png',
      description:
        'Gives requesters a focused view of the requests they submitted and lets them follow each request through the workflow.',
    },
    {
      label: 'Create Request',
      src: '/screenshots/create-request.png',
      description:
        'Uses a structured intake form to capture the information needed before a request enters the review process.',
    },
    {
      label: 'Review Queue',
      src: '/screenshots/review-queue.png',
      description:
        'Provides authorized reviewers with a centralized queue for requests that have entered the review workflow.',
    },
    {
      label: 'Request Review',
      src: '/screenshots/request-review.png',
      description:
        'Brings request details and reviewer actions together so priority, status, approval decisions, and developer assignment stay connected to the same record.',
    },
    {
      label: 'Assigned to Me',
      src: '/screenshots/assigned-to-me.png',
      description:
        'Gives developers a focused queue containing only the requests assigned directly to them.',
    },
    {
      label: 'Comments & Status History',
      src: '/screenshots/comments-history.png',
      description:
        'Keeps request-related discussion and workflow history attached to the record so participants can understand how the request progressed.',
    },
  ]

  const roleFlows = [
    {
      role: 'Requester',
      title: 'Prepare and follow the request',
      description:
        'Create a request, save and edit drafts, submit it for review, and follow its progress after submission.',
      items: [
        'Create structured requests',
        'Save and edit owned drafts',
        'Submit for review',
        'View submitted requests and details',
      ],
    },
    {
      role: 'Reviewer',
      title: 'Control the workflow',
      description:
        'Review incoming requests, establish business priority, make approval decisions, assign developers, and move valid requests through the workflow.',
      items: [
        'Work from the review queue',
        'Set priority',
        'Approve or reject',
        'Assign or reassign developers',
        'Advance valid workflow statuses',
      ],
    },
    {
      role: 'Developer',
      title: 'Work from assigned requests',
      description:
        'See assigned work, open the request context, and participate in request-level communication without taking over reviewer workflow responsibilities.',
      items: [
        'View Assigned to Me',
        'Open assigned request details',
        'Read workflow history',
        'Participate through comments',
      ],
    },
  ]

  const mappings = [
    {
      screen: 'Login',
      requirements: ['FR-01', 'FR-02', 'NFR-03'],
      note: 'Authentication and active-session identity',
    },
    {
      screen: 'Dashboard',
      requirements: ['FR-04', 'NFR-01'],
      note: 'Permission-aware dashboard experience',
    },
    {
      screen: 'My Requests',
      requirements: ['FR-11', 'FR-12', 'FR-32'],
      note: 'Requester-scoped records and authorized detail access',
    },
    {
      screen: 'Create Request',
      requirements: ['FR-05', 'FR-06', 'FR-07', 'FR-10', 'FR-31'],
      note: 'Structured intake, drafts, submission, and department selection',
    },
    {
      screen: 'Review Queue',
      requirements: ['FR-13', 'FR-14', 'FR-15', 'FR-16'],
      note: 'Reviewer intake, review start, priority, and decisions',
    },
    {
      screen: 'Request Review',
      requirements: ['FR-12', 'FR-17', 'FR-18', 'FR-19', 'FR-20'],
      note: 'Authorized details, transition rules, and developer assignment',
    },
    {
      screen: 'Assigned to Me',
      requirements: ['FR-24', 'FR-32', 'BR-11', 'BR-12'],
      note: 'Developer-specific visibility without reviewer workflow control',
    },
    {
      screen: 'Comments & History',
      requirements: ['FR-25', 'FR-26', 'FR-28', 'FR-29', 'FR-30', 'NFR-08'],
      note: 'Request communication and workflow auditability',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          Implemented Solution
        </p>

        <h3 className="text-base font-semibold text-slate-900">
          Turning the requirements into a working workflow
        </h3>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
          Once the requirements and system design were stable enough, I built
          the functional ChangeFlow MVP. The part I cared about most was making
          sure the application reflected the workflow I had documented rather
          than becoming a collection of disconnected screens.
        </p>

        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600">
          That meant keeping responsibilities clear. Requesters prepare and
          track requests, reviewers control business workflow decisions, and
          developers work from requests that have been assigned to them.
        </p>
      </div>

      {/* Role-based workflow */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-base font-semibold text-slate-900">
          One Workflow, Different Responsibilities
        </h3>

        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-500">
          Instead of giving every user the same controls, ChangeFlow exposes
          actions based on what that person is responsible for in the process.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {roleFlows.map((flow) => (
            <div
              key={flow.role}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                {flow.role}
              </span>

              <h4 className="mt-3 text-sm font-semibold text-slate-900">
                {flow.title}
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {flow.description}
              </p>

              <ul className="mt-4 space-y-2">
                {flow.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Application screenshots */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">
              ChangeFlow in Action
            </h3>

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Functional MVP
            </span>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
            These are screenshots from the implemented application rather than
            design mockups. Click any screen to inspect it at a larger size.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {screens.map((screen) => (
            <ScreenCard
              key={screen.label}
              label={screen.label}
              src={screen.src}
              description={screen.description}
            />
          ))}
        </div>
      </div>

      {/* Selected requirement mapping */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-slate-900">
            Selected Screen-to-Requirement Mapping
          </h3>

          <p className="mt-1 max-w-4xl text-sm leading-relaxed text-slate-500">
            I also checked the implemented screens against the requirements
            they were intended to support. This is a simplified portfolio view
            of that relationship rather than the full requirements
            traceability matrix.
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {mappings.map((mapping) => (
            <div
              key={mapping.screen}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {mapping.screen}
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {mapping.note}
                  </p>
                </div>

                <div className="flex max-w-xs flex-wrap justify-end gap-1">
                  {mapping.requirements.map((requirement) => (
                    <span
                      key={requirement}
                      className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-blue-600"
                    >
                      {requirement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-400">
          The complete traceability model continues through user stories,
          acceptance criteria, implementation evidence, and UAT validation.
        </p>
      </div>

      {/* Implementation takeaway */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Implementation Takeaway
        </p>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-700">
          Building the application myself gave me a useful way to test the
          requirements from the other side. Some decisions that look simple in
          a document—like “only an assigned developer can see this request” or
          “only certain statuses can transition”—have to become very explicit
          authorization and workflow rules once they reach the backend.
        </p>
      </div>
    </div>
  )
}

function ValidationTab() {
  const validationSummary = [
    {
      value: '37 / 37',
      label: 'UAT Cases Passed',
    },
    {
      value: '0',
      label: 'Failed',
    },
    {
      value: '0',
      label: 'Blocked',
    },
    {
      value: 'Accepted',
      label: 'MVP Result',
    },
  ]

  const traceabilitySteps = [
    'Requirement / Rule',
    'Use Case',
    'User Story',
    'Acceptance Criteria',
    'Implementation Evidence',
    'Validation Reference',
    'Result',
  ]

  const exampleTrace = [
    {
      label: 'Functional Requirement',
      value: 'FR-19',
      detail:
        'Allow an authorized reviewer to assign or reassign an eligible developer when the request is APPROVED or IMPLEMENTATION_PENDING.',
    },
    {
      label: 'Use Case',
      value: 'UC-09',
      detail: 'Assign or Reassign Developer',
    },
    {
      label: 'User Story',
      value: 'US-09',
      detail:
        'As a reviewer, I want to assign an approved request to a developer so that implementation ownership is clear.',
    },
    {
      label: 'Acceptance Criteria',
      value: 'AC-09.1, AC-09.4, AC-09.5',
      detail:
        'Validates eligible workflow states, reassignment, and visibility in the developer’s Assigned to Me queue.',
    },
    {
      label: 'Implementation',
      value: 'Developer Assignment',
      detail:
        'Assignment UI, assignment API, service-layer workflow validation, and persisted assignment data.',
    },
    {
      label: 'Validation',
      value: 'UAT-19',
      detail: 'Passed',
    },
  ]

  const validationApproach = [
    {
      number: '01',
      title: 'Start from acceptance criteria',
      detail:
        'I treated the acceptance criteria as the bridge between requirements and testable behaviour rather than writing test cases independently from the requirements.',
    },
    {
      number: '02',
      title: 'Cover positive and negative paths',
      detail:
        'Validation included successful workflows as well as authorization failures, invalid status transitions, ownership rules, and other cases the system needed to reject.',
    },
    {
      number: '03',
      title: 'Record implementation evidence',
      detail:
        'The RTM identifies where each requirement is implemented, such as screens, endpoints, services, repositories, entities, and security controls.',
    },
    {
      number: '04',
      title: 'Close the loop with UAT',
      detail:
        'Each applicable requirement was connected to a validation reference so I could see whether the implemented behaviour had actually been tested and what the result was.',
    },
  ]

  const artifacts = [
    {
      title: 'Requirements Traceability Matrix',
      version: 'v2.0',
      href: '/documents/requirements-traceability-matrix-v2.pdf',
      description:
        'Maps requirements and business rules through use cases, user stories, acceptance criteria, implementation evidence, validation references, and final results.',
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
            d="M4 6h4m4 0h8M4 12h8m4 0h4M4 18h4m4 0h8M8 4v4m4 2v4m4 2v4"
          />
        </svg>
      ),
    },
    {
      title: 'UAT Plan & Test Cases',
      version: 'Completed',
      href: '/documents/uat-plan-test-cases.pdf',
      description:
        'Documents the executed UAT scenarios and final result for the implemented MVP, including 37 passed cases with no failed or blocked tests.',
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
    },
  ]

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
          Validation
        </p>

        <h3 className="text-base font-semibold text-slate-900">
          I wanted to be able to trace the finished system back to what I originally asked it to do
        </h3>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600">
          Validation was not something I wanted to leave until the end as a
          separate testing exercise. Throughout the project, I kept the
          requirements connected to use cases, user stories, acceptance
          criteria, and implementation evidence so that the final UAT could
          answer a simple question: did the system actually behave the way the
          requirements said it should?
        </p>

        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-600">
          That traceability also made gaps easier to spot. If a requirement had
          no implementation evidence or no validation reference, I could see
          that immediately rather than assuming it had been covered.
        </p>
      </div>

      {/* UAT result */}
      <div className="overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
        <div className="grid gap-0 sm:grid-cols-4">
          {validationSummary.map((item, index) => (
            <div
              key={item.label}
              className={`p-6 text-center ${
                index < validationSummary.length - 1
                  ? 'border-b border-emerald-200 sm:border-b-0 sm:border-r'
                  : ''
              }`}
            >
              <div className="text-3xl font-bold text-emerald-700">
                {item.value}
              </div>

              <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-700/70">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Validation approach */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-base font-semibold text-slate-900">
          How I Approached Validation
        </h3>

        <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-500">
          I treated validation as part of the requirements lifecycle rather
          than a final checkbox after development.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {validationApproach.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 text-xs font-bold text-emerald-700">
                {step.number}
              </div>

              <p className="text-sm font-semibold text-slate-900">
                {step.title}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Traceability chain */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-slate-900">
            Requirements Traceability Chain
          </h3>

          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-500">
            The RTM keeps the path from documented requirement to validation
            result visible in one place.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {traceabilitySteps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-2"
            >
              <span className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                {step}
              </span>

              {index < traceabilitySteps.length - 1 && (
                <svg
                  className="h-4 w-4 flex-shrink-0 text-slate-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Real trace example */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
            Traceability Example
          </p>

          <h3 className="text-base font-semibold text-slate-900">
            Following developer assignment from requirement to test result
          </h3>

          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-500">
            This is one real example from the project showing how the same
            behaviour stays connected across the different artifacts.
          </p>
        </div>

        <div className="space-y-3">
          {exampleTrace.map((item, index) => (
            <div key={item.label}>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {item.value}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.detail}
                    </p>
                  </div>

                  {item.value === 'UAT-19' && (
                    <span className="flex-shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Passed
                    </span>
                  )}
                </div>
              </div>

              {index < exampleTrace.length - 1 && (
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

      {/* Important validation nuance */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            MVP Validation
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-900">
            Current functional scope accepted
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            The 37 UAT cases covering the implemented MVP completed
            successfully with no failed or blocked cases.
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            Production Validation
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-900">
            Still intentionally deferred
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            Passing the MVP validation does not mean ChangeFlow is production
            ready. Production performance targets, operational hardening, and
            broader deployment validation remain outside the current scope.
          </p>
        </div>
      </div>

      {/* Validation artifacts */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900">
              Validation Artifacts
            </h3>

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Completed
            </span>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-500">
            The portfolio summary only shows part of the validation work. These
            documents contain the full traceability and executed test evidence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {artifacts.map((artifact) => (
            <ArtifactCard
              key={artifact.title}
              {...artifact}
            />
          ))}
        </div>
      </div>

      {/* Takeaway */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Validation Takeaway
        </p>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-700">
          The biggest benefit of maintaining traceability was not the matrix
          itself. It was being able to follow a requirement all the way from
          the original business need to the behaviour in the application and
          finally to evidence that the behaviour had been validated.
        </p>
      </div>
    </div>
  )
}

function OutcomeTab() {
  const deliveredCapabilities = [
    {
      title: 'Centralized request lifecycle',
      detail:
        'Change requests can be created, reviewed, assigned, progressed, and closed within one workflow instead of being split across separate channels.',
    },
    {
      title: 'Structured request intake',
      detail:
        'Requesters provide a consistent set of information before a change enters the review process.',
    },
    {
      title: 'Clear workflow ownership',
      detail:
        'Requester, reviewer, and developer responsibilities are separated so the next action and responsible role are easier to understand.',
    },
    {
      title: 'Controlled workflow transitions',
      detail:
        'The backend enforces the permitted lifecycle from DRAFT through review, implementation, and closure.',
    },
    {
      title: 'Role-based access',
      detail:
        'Users see and perform actions according to their roles, permissions, and relationship to the request record.',
    },
    {
      title: 'Traceable request history',
      detail:
        'Comments, assignments, and status transitions remain connected to the request so its progression can be reviewed later.',
    },
  ]

  const limitations = [
    'No production security audit or penetration testing',
    'No production performance targets or load testing',
    'No email, SMS, or push notifications',
    'No file attachment or document-storage capability',
    'No administrative user and role management interface',
    'No production SSO or password-recovery workflow',
  ]

  const futureEnhancements = [
    'Notifications and workflow alerts',
    'Attachments and supporting documents',
    'Advanced filtering and search',
    'Server-side pagination for larger data volumes',
    'Administrative user and role management',
    'Expanded audit logging',
    'Production SSO and account recovery',
    'Automated testing and CI/CD',
    'Cloud deployment and monitoring',
    'AI-assisted request summaries',
  ]

  const lessons = [
    {
      title: 'Scope became easier once the workflow was clear',
      detail:
        'Defining the end-to-end lifecycle helped me decide which features were necessary for the MVP and which ideas could wait.',
    },
    {
      title: 'Authorization needs to be designed early',
      detail:
        'Role and record-level access affected screens, APIs, services, and testing, so treating security as a later concern would have created significant rework.',
    },
    {
      title: 'Acceptance criteria made implementation decisions clearer',
      detail:
        'Writing testable conditions exposed details that broad functional requirements alone did not always make obvious.',
    },
    {
      title: 'Traceability was most useful during validation',
      detail:
        'The RTM became more valuable once I could connect documented requirements to implementation evidence and actual test results.',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Final result */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <span className="inline-block rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-semibold text-emerald-700">
            Functional MVP Complete
          </span>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            The defined v1.0 scope was implemented and accepted
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            ChangeFlow reached the goal I set for the project: a working
            end-to-end change request workflow backed by documented
            requirements, system design, traceability, and completed UAT.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              37 / 37 UAT Passed
            </span>

            <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              0 Failed
            </span>

            <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              0 Blocked
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <span className="inline-block rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-700">
            Not Production Ready
          </span>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            MVP acceptance is not the same as production readiness
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            The current system demonstrates the intended business workflow,
            but it has not gone through the security, performance, deployment,
            operational, and support work I would expect before a real
            production launch.
          </p>
        </div>
      </div>

      {/* Delivered capabilities */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            What the MVP Delivers
          </p>

          <h3 className="text-base font-semibold text-slate-900">
            The solution addresses the process problems defined at the start
          </h3>

          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-500">
            Because this is a portfolio project rather than a live
            organizational deployment, I focused the evaluation on delivered
            capabilities instead of claiming business metrics that were never
            measured.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {deliveredCapabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {capability.title}
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {capability.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Limitations and future */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Current Limitations
          </p>

          <h3 className="mt-2 text-base font-semibold text-slate-900">
            What I would not claim this version can do
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Being clear about the boundary of the MVP was part of the
            evaluation. These areas would still need work before I would treat
            ChangeFlow as a production system.
          </p>

          <ul className="mt-5 space-y-2.5">
            {limitations.map((limitation) => (
              <li
                key={limitation}
                className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300" />
                {limitation}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            Future Enhancements
          </p>

          <h3 className="mt-2 text-base font-semibold text-slate-900">
            Where I would take the system next
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            These are useful additions, but keeping them outside v1.0 helped me
            finish and validate the core workflow instead of continuously
            expanding the MVP.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {futureEnhancements.map((enhancement) => (
              <span
                key={enhancement}
                className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700"
              >
                {enhancement}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            What I Took Away From the Project
          </p>

          <h3 className="text-base font-semibold text-slate-900">
            A few things became much clearer once I had to carry the analysis
            all the way into a working system
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-md bg-indigo-50 text-[10px] font-bold text-indigo-600">
                {String(index + 1).padStart(2, '0')}
              </div>

              <p className="text-sm font-semibold text-slate-900">
                {lesson.title}
              </p>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {lesson.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Personal reflection */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
          Final Reflection
        </p>

        <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-700">
          The part I valued most about ChangeFlow was being able to follow the
          same problem from several perspectives. I had to think about it as a
          business process, turn it into requirements, model how the system
          should behave, build that behaviour, and then go back and prove that
          what I built still matched the original intent. That end-to-end view
          is the kind of work I want to keep developing as a Business Systems
          Analyst.
        </p>
      </div>

      {/* Closure artifact */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-slate-900">
                Solution Evaluation & Project Closure
              </h3>

              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                Finalized
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
              The final evaluation documents what was delivered, the validation
              result, known limitations, future considerations, and the formal
              closure of the current MVP scope.
            </p>
          </div>

          <a
            href="/documents/solution-evaluation-project-closure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md"
          >
            View Closure Document
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
