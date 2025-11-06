import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          aria-label="Interactive 3D hero scene"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Building futuristic, minimal tech experiences
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-xl">
            I craft interactive frontends, robust APIs, and delightful 3D moments. Explore highlights below and feel free to reach out.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-white font-medium shadow hover:bg-emerald-600 transition">
              View Projects
            </a>
            <a href="#profile" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-4 py-2 text-slate-100 font-medium ring-1 ring-white/10 hover:bg-white/15 transition">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
