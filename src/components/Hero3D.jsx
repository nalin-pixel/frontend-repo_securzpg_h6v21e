import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          aria-label="Interactive 3D hero scene"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Open to opportunities
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Building playful, modern tech experiences
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-xl">
            I craft interactive frontends, robust APIs, and delightful 3D moments.
            Explore highlights below and feel free to reach out.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur px-4 py-2 text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-white transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
