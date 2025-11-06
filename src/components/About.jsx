export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">About me</h2>
          <p className="mt-4 text-slate-300">
            I’m a full‑stack engineer focused on expressive UIs and resilient systems. My work blends
            3D, motion, and strong engineering practices to deliver memorable digital products.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-200">
            <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">React & TypeScript</li>
            <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">FastAPI & Python</li>
            <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">Three.js & Spline</li>
            <li className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">Tailwind & Radix</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl bg-zinc-900/60 p-6 ring-1 ring-white/10 shadow-sm">
            <p className="text-sm text-slate-300">
              I love turning complex ideas into simple, joyful interfaces. When I’m not building, you’ll
              find me exploring new tools, sketching concepts, or tuning micro‑interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
