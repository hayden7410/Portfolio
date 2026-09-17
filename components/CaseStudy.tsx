import { useState } from 'react'

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

function ArtifactCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-slate-300 transition-all group cursor-default">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-1">{title}</h4>
          <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

function DiagramCard({ title, caption, badge }: { title: string; caption: string; badge?: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 border-b border-slate-200 flex items-center justify-center min-h-[140px]">
        <div className="text-center">
          <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:shadow-md transition-shadow">
            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <span className="text-xs text-slate-400">Click to view diagram</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
            <p className="text-xs text-slate-500 mt-1">{caption}</p>
          </div>
          {badge && (
            <span className="flex-shrink-0 px-2 py-0.5 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function ScreenCard({ label }: { label: string }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all cursor-pointer">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-28 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-6 h-6 bg-blue-500 rounded mx-auto mb-2 opacity-80" />
          <div className="text-[10px] text-slate-400">{label}</div>
        </div>
      </div>
      <div className="px-3 py-2">
        <p className="text-xs font-medium text-slate-700">{label}</p>
      </div>
    </div>
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

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">MVP Complete</span>
              <span className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 rounded-full">Full-Stack</span>
              <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 rounded-full">Personal Project</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">ChangeFlow</h1>
            <p className="text-lg text-slate-500 mb-6">Change Request Management System</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Role', value: 'BSA + Developer' },
                { label: 'Type', value: 'End-to-End' },
                { label: 'Status', value: 'MVP Complete' },
                { label: 'Timeline', value: '~3 months' },
                { label: 'Frontend', value: 'React' },
                { label: 'Backend', value: 'Spring Boot' },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-xs text-slate-400 mb-0.5">{m.label}</div>
                  <div className="text-sm font-semibold text-slate-800">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-shrink-0 flex-wrap">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-all">
              View Demo
            </button>
            <button className="px-4 py-2 bg-white text-slate-700 text-sm font-semibold rounded-md border border-slate-200 hover:bg-slate-50 transition-all">
              Documentation
            </button>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="bg-white rounded-xl border border-slate-200 mb-8 overflow-x-auto">
        <div className="flex min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div>
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
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">Project Background</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            ChangeFlow was conceived to address a realistic organizational problem: the absence of a structured,
            traceable process for managing internal change requests. In many organizations, change requests are
            handled via email, spreadsheets, or informal communication — leading to inconsistent information,
            unclear ownership, and limited visibility into request status.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            This project applies formal Business Systems Analysis methodology to scope, analyze, specify, design,
            implement, and validate a working software solution.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">Project Objectives</h3>
          <ul className="space-y-2">
            {[
              'Centralize and standardize the change request lifecycle',
              'Define clear ownership and accountability for each request',
              'Provide real-time visibility into request status for all stakeholders',
              'Establish a traceable audit trail from submission through resolution',
              'Demonstrate end-to-end BSA methodology from elicitation to UAT',
            ].map((obj) => (
              <li key={obj} className="flex items-start gap-2.5 text-sm text-slate-600">
                <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">Scope</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">In Scope</p>
              <ul className="space-y-1.5">
                {['Change request submission', 'Review and approval workflow', 'Developer assignment', 'Status tracking & history', 'Comment threads', 'Role-based access control'].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Out of Scope (v1)</p>
              <ul className="space-y-1.5">
                {['Email notifications', 'External integrations', 'Multi-organisation support', 'Advanced analytics', 'Mobile application'].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Technology Stack</h3>
          <div className="space-y-3">
            {[
              { layer: 'Frontend', tech: 'React, TypeScript', color: 'bg-blue-50 text-blue-700' },
              { layer: 'Backend', tech: 'Java, Spring Boot', color: 'bg-indigo-50 text-indigo-700' },
              { layer: 'Database', tech: 'PostgreSQL', color: 'bg-slate-100 text-slate-700' },
              { layer: 'Auth', tech: 'JWT / RBAC', color: 'bg-violet-50 text-violet-700' },
              { layer: 'API', tech: 'REST', color: 'bg-slate-100 text-slate-700' },
            ].map((s) => (
              <div key={s.layer} className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{s.layer}</span>
                <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${s.color}`}>{s.tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 rounded-xl p-6 text-white">
          <h3 className="text-base font-semibold mb-4">Project Metrics</h3>
          <div className="space-y-3">
            {[
              { label: 'Functional Requirements', value: '32' },
              { label: 'Business Rules', value: '15' },
              { label: 'Non-Functional Reqs', value: '12' },
              { label: 'User Stories', value: '13' },
              { label: 'UAT Cases Passed', value: '37 / 37' },
            ].map((m) => (
              <div key={m.label} className="flex items-center justify-between border-b border-blue-500/40 pb-2 last:border-0 last:pb-0">
                <span className="text-sm text-blue-100">{m.label}</span>
                <span className="text-sm font-bold">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProblemTab() {
  const chain = [
    { label: 'Fragmented Requests', detail: 'Change requests submitted via email, chat, and informal channels with no standard format.' },
    { label: 'Inconsistent Information', detail: 'Missing context, unclear scope, and variable detail across submissions.' },
    { label: 'Unclear Ownership', detail: 'No formal assignment or accountability for who reviews or implements each request.' },
    { label: 'Limited Visibility', detail: 'Requestors have no insight into the status of their submissions after filing.' },
    { label: 'Inefficient Communication', detail: 'Back-and-forth clarification adds delays and creates information silos.' },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-2">Problem Statement</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            The organization lacks a structured, centralized process for managing internal change requests. Without a
            formal system, there is no consistent way to capture, prioritize, assign, track, or resolve change
            requests — leading to inefficiency and risk.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-5">Problem Chain Analysis</h3>
          <div className="flex flex-col gap-1">
            {chain.map((item, i) => (
              <div key={item.label}>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-800 mb-1">{item.label}</p>
                  <p className="text-xs text-red-600">{item.detail}</p>
                </div>
                {i < chain.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg className="w-4 h-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Intended Business Outcome</h3>
          <div className="space-y-3">
            {[
              { icon: '🎯', title: 'Centralized Process', desc: 'Single source of truth for all change requests across the organization.' },
              { icon: '👥', title: 'Clear Accountability', desc: 'Defined roles for submitters, reviewers, and developers with formal assignment.' },
              { icon: '📊', title: 'Real-Time Visibility', desc: 'All stakeholders can track request status and progress at any point.' },
              { icon: '📋', title: 'Audit Trail', desc: 'Complete history of actions, comments, and status changes for each request.' },
              { icon: '⚡', title: 'Reduced Cycle Time', desc: 'Structured intake and workflow reduces back-and-forth clarification overhead.' },
            ].map((o) => (
              <div key={o.title} className="flex items-start gap-3">
                <span className="text-lg">{o.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{o.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AnalysisTab() {
  const artifacts = [
    {
      title: 'Stakeholder Analysis',
      description: 'Identified and analysed stakeholders including requestors, reviewers, developers, and system administrators. Documented interests, influence, and communication needs.',
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    },
    {
      title: 'Current-State Process',
      description: 'Mapped the as-is change request workflow using BPMN, documenting pain points, bottlenecks, and handoff failures across stakeholder groups.',
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>,
    },
    {
      title: 'Future-State Process',
      description: 'Designed the to-be process incorporating structured intake, formal review, developer assignment, and status tracking aligned to business objectives.',
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      title: 'Scope Definition',
      description: 'Documented in-scope capabilities and explicit out-of-scope exclusions. Used to control scope creep and set stakeholder expectations for the MVP.',
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" /></svg>,
    },
    {
      title: 'Root Cause Analysis',
      description: 'Applied structured root cause analysis to identify the underlying drivers of the change management problem rather than just surface symptoms.',
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    },
  ]

  return (
    <div>
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <h3 className="text-base font-semibold text-slate-900 mb-1">Analysis Artifacts</h3>
        <p className="text-sm text-slate-500 mb-6">Selected BA artifacts produced during the analysis phase. Each artifact informed the requirements and design phases.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artifacts.map((a) => (
            <ArtifactCard key={a.title} {...a} />
          ))}
        </div>
      </div>
    </div>
  )
}

function RequirementsTab() {
  const reqExamples = [
    { id: 'FR-001', type: 'Functional', text: 'The system shall allow authenticated users to submit a change request with a title, description, priority, and affected system.' },
    { id: 'FR-012', type: 'Functional', text: 'The system shall send change requests to a review queue upon submission, visible to users with the Reviewer role.' },
    { id: 'BR-003', type: 'Business Rule', text: 'A change request may not be approved without a reviewer comment documenting the rationale for the decision.' },
    { id: 'NFR-002', type: 'Non-Functional', text: 'The system shall enforce role-based access control. Requestors may not view or modify requests belonging to other users.' },
    { id: 'US-004', type: 'User Story', text: 'As a Developer, I want to see change requests assigned to me, so that I can manage my workload and prioritise implementation tasks.' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <ReqCard count={32} type="Functional Requirements" color="border-blue-200 bg-blue-50 text-blue-700" />
        <ReqCard count={15} type="Business Rules" color="border-indigo-200 bg-indigo-50 text-indigo-700" />
        <ReqCard count={12} type="Non-Functional Reqs" color="border-slate-200 bg-slate-50 text-slate-700" />
        <ReqCard count={13} type="User Stories" color="border-violet-200 bg-violet-50 text-violet-700" />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Selected Examples</h3>
        <div className="space-y-3">
          {reqExamples.map((r) => (
            <div key={r.id} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex-shrink-0">
                <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-1 rounded">{r.id}</span>
              </div>
              <div>
                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mb-1 ${
                  r.type === 'Functional' ? 'bg-blue-50 text-blue-700' :
                  r.type === 'Business Rule' ? 'bg-indigo-50 text-indigo-700' :
                  r.type === 'Non-Functional' ? 'bg-slate-100 text-slate-600' :
                  'bg-violet-50 text-violet-700'
                }`}>{r.type}</span>
                <p className="text-sm text-slate-700 leading-relaxed">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DesignTab() {
  const diagrams = [
    { title: 'BPMN Change Request Lifecycle', caption: 'End-to-end process flow from submission through resolution, covering all stakeholder swimlanes.', badge: 'BPMN' },
    { title: 'Domain Class Diagram', caption: 'Conceptual model showing key domain entities and their relationships within the system boundary.', badge: 'UML' },
    { title: 'Design Class Diagram', caption: 'Detailed design showing classes, attributes, methods, and associations for implementation.', badge: 'UML' },
    { title: 'Authentication & Authorization Design', caption: 'Role-based access control model mapping user roles to system capabilities and data access.', badge: 'Security' },
    { title: 'Sequence Diagram — Submit Request', caption: 'Interaction sequence between frontend, backend, and database for the change request submission flow.', badge: 'Sequence' },
  ]

  return (
    <div>
      <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
        <h3 className="text-base font-semibold text-slate-900 mb-1">Process & System Design Artifacts</h3>
        <p className="text-sm text-slate-500 mb-6">
          Diagrams produced to communicate the system design to developers and stakeholders. Each artifact maps directly to requirements.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {diagrams.map((d) => (
            <DiagramCard key={d.title} {...d} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SolutionTab() {
  const screens = ['Login', 'Dashboard', 'My Requests', 'Create Request', 'Review Queue', 'Request Details', 'Developer Assignment', 'Comments', 'Status History']

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-1">Implemented Solution</h3>
        <p className="text-sm text-slate-500 mb-6">The implemented ChangeFlow application, covering all in-scope requirements validated through UAT.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {screens.map((screen) => (
            <ScreenCard key={screen} label={screen} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Requirements Traceability</h3>
        <p className="text-sm text-slate-500 mb-4">The final solution was verified against each functional requirement. Each screen implements one or more traceable requirements.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { screen: 'Login / Auth', reqs: ['FR-001', 'NFR-001', 'NFR-002'] },
            { screen: 'Dashboard', reqs: ['FR-008', 'FR-009', 'FR-010'] },
            { screen: 'Create Request', reqs: ['FR-001', 'FR-002', 'BR-001'] },
            { screen: 'Review Queue', reqs: ['FR-012', 'FR-013', 'FR-014', 'BR-003'] },
            { screen: 'Request Details', reqs: ['FR-015', 'FR-016', 'FR-017'] },
            { screen: 'Developer Assignment', reqs: ['FR-018', 'FR-019', 'BR-004'] },
          ].map((t) => (
            <div key={t.screen} className="flex items-start justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-sm font-medium text-slate-700">{t.screen}</span>
              <div className="flex flex-wrap gap-1 justify-end">
                {t.reqs.map((r) => (
                  <span key={r} className="text-[10px] font-mono bg-blue-50 text-blue-600 border border-blue-200 px-1.5 py-0.5 rounded">{r}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ValidationTab() {
  const traceChain = [
    'Business Requirement',
    'Functional Requirement',
    'Use Case',
    'User Story',
    'Acceptance Criteria',
    'Implementation',
    'UAT',
  ]

  return (
    <div className="space-y-6">
      {/* UAT result card */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-emerald-600 rounded-xl p-8 text-white flex flex-col items-center justify-center text-center">
          <div className="text-6xl font-bold mb-2">37/37</div>
          <div className="text-emerald-100 text-sm font-semibold uppercase tracking-widest mb-4">UAT TEST CASES PASSED</div>
          <div className="grid grid-cols-3 gap-4 w-full mt-2">
            {[
              { val: '0', label: 'Failed' },
              { val: '0', label: 'Blocked' },
              { val: '✓', label: 'MVP Accepted' },
            ].map((s) => (
              <div key={s.label} className="bg-emerald-700/50 rounded-lg p-3">
                <div className="text-xl font-bold">{s.val}</div>
                <div className="text-[10px] text-emerald-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Validation Approach</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Each acceptance criterion from the user stories was converted into a structured UAT test case.
            Test cases were executed systematically, with results logged against each case.
          </p>
          <div className="space-y-2">
            {[
              '37 structured test cases covering all in-scope features',
              'Test cases mapped to acceptance criteria and requirements',
              'All test cases executed and documented',
              'Zero failed or blocked cases in final test run',
              'MVP formally accepted by project owner',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traceability chain */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-5">Requirements Traceability Chain</h3>
        <div className="flex flex-wrap items-center gap-2">
          {traceChain.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-lg">
                {step}
              </div>
              {i < traceChain.length - 1 && (
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Every UAT test case traces back through this chain to a documented business requirement.
        </p>
      </div>
    </div>
  )
}

function OutcomeTab() {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full mb-3">Functional MVP Complete</span>
          <p className="text-sm text-slate-600 leading-relaxed">
            The MVP delivers all in-scope functional requirements as defined in the BRD, validated through UAT. The system works as specified.
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full mb-3">Not Production Ready</span>
          <p className="text-sm text-slate-600 leading-relaxed">
            The system is not hardened for production deployment. It has not undergone security audit, performance testing, or operational review.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-base font-semibold text-slate-900 mb-4">Business Benefits Achieved</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Centralized repository for all change requests',
            'Structured intake process with consistent data capture',
            'Role-based access control across all user types',
            'Full audit trail per request (status history, comments)',
            'Clear developer assignment and ownership model',
            'Real-time status visibility for all stakeholders',
          ].map((b) => (
            <div key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
              <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {b}
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Known Limitations</h3>
          <ul className="space-y-2">
            {['No email notifications', 'No production security audit', 'Single-tenant only', 'No performance testing', 'No mobile view'].map((l) => (
              <li key={l} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="w-1 h-1 bg-slate-300 rounded-full mt-1.5 flex-shrink-0" />{l}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Future Enhancements</h3>
          <ul className="space-y-2">
            {['Email notification system', 'Advanced analytics dashboard', 'SLA tracking', 'External system integration', 'Multi-tenancy support'].map((l) => (
              <li key={l} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />{l}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Lessons Learned</h3>
          <ul className="space-y-2">
            {['Scope control is critical in MVP design', 'Early stakeholder alignment reduces rework', 'UAT is most valuable when tied to acceptance criteria', 'Requirements traceability pays off in validation', 'Documentation discipline enables faster delivery'].map((l) => (
              <li key={l} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="w-1 h-1 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0" />{l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
