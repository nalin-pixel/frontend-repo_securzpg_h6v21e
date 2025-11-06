import { useEffect, useState } from 'react'

const demoProjects = [
  {
    title: 'Realtime 3D Product Viewer',
    tags: ['React', 'Spline', 'Three.js'],
    description:
      'An interactive configurator with dynamic materials and smooth camera transitions.',
    link: '#',
  },
  {
    title: 'AI-Powered Portfolio Engine',
    tags: ['FastAPI', 'MongoDB', 'Vite'],
    description:
      'A content system that generates case studies, tracks analytics, and powers a blazing UI.',
    link: '#',
  },
  {
    title: 'Design System Starter',
    tags: ['Tailwind', 'Radix', 'Framer Motion'],
    description:
      'A polished component library with motion primitives and accessible patterns.',
    link: '#',
  },
]

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
      {children}
    </span>
  )
}

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Featured projects</h2>
          <p className="mt-2 text-slate-600">A few things I loved building recently.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p, i) => (
            <article key={i} className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition shadow-sm hover:shadow-md ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-36 rounded-xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700">View case study →</a>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-blue-300 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
