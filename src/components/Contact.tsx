import { useState } from 'react'

const email = 'giahunggn231@gmail.com'

const contacts = [
  {
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
    external: false,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/giahungg',
    href: 'https://linkedin.com/in/giahungg',
    external: true,
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/hayden7410',
    href: 'https://github.com/hayden7410',
    external: true,
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold text-slate-900">
          Let’s Connect
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
          I’m always happy to connect with people working in business analysis,
          systems, and technology. If you’d like to talk about an opportunity,
          a project, or just exchange ideas, feel free to reach out.
        </p>
      </div>

      {/* Contact cards */}
      <div className="mb-10 grid gap-5 sm:grid-cols-3">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
              {contact.icon}
            </div>

            <div className="min-w-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                {contact.label}
              </p>

              <p className="break-all text-sm font-medium text-slate-700">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Personal CTA */}
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
        <h3 className="text-base font-semibold text-slate-900">
          Have something in mind?
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Whether it’s a Business Analyst opportunity, a systems project, or
          simply a conversation about the work on this portfolio, I’d be glad
          to hear from you.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
  'Portfolio Inquiry'
)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md"
>
  Send Me an Email
  <span aria-hidden="true">→</span>
</a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            {copied ? 'Email Copied ✓' : 'Copy Email'}
          </button>
        </div>
      </div>
    </div>
  )
}