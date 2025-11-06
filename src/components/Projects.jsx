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
    <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">
      {children}
    </span>
  )
}

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Featured projects</h2>
          <p className="mt-2 text-slate-300">A few things I loved building recently.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p, i) => (
            <article key={i} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition shadow-sm hover:shadow-lg hover:border-emerald-400/30 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-36 rounded-xl bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 ring-1 ring-inset ring-white/10" />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-block text-sm font-medium text-emerald-400 hover:text-emerald-300">View case study →</a>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-emerald-300/30 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
