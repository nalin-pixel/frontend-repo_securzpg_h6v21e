export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">About me</h2>
          <p className="mt-4 text-slate-700">
            I’m a full‑stack engineer focused on expressive UIs and resilient systems. My work blends
            3D, motion, and strong engineering practices to deliver memorable digital products.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="rounded-lg bg-white p-3 ring-1 ring-slate-200">React & TypeScript</li>
            <li className="rounded-lg bg-white p-3 ring-1 ring-slate-200">FastAPI & Python</li>
            <li className="rounded-lg bg-white p-3 ring-1 ring-slate-200">Three.js & Spline</li>
            <li className="rounded-lg bg-white p-3 ring-1 ring-slate-200">Tailwind & Radix</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 via-indigo-200/40 to-purple-200/40 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <p className="text-sm text-slate-700">
              I love turning complex ideas into simple, joyful interfaces. When I’m not building, you’ll
              find me exploring new tools, sketching concepts, or tuning micro‑interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
