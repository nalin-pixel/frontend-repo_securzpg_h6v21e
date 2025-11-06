import { Award, GraduationCap, MapPin, User } from 'lucide-react'

export default function Profile() {
  return (
    <section id="profile" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 items-start">
          {/* Profile Card */}
          <div className="relative rounded-3xl bg-zinc-900/80 ring-1 ring-white/10 p-8 overflow-hidden">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-2xl" aria-hidden="true" />
            <div className="relative flex flex-col items-center text-center gap-4">
              <img
                src="https://i.pravatar.cc/300?img=5"
                alt="Profile portrait"
                className="h-32 w-32 rounded-2xl object-cover ring-2 ring-white/10 shadow-lg"
                loading="lazy"
              />
              <div>
                <h2 className="text-2xl font-semibold text-white">Your Name</h2>
                <p className="mt-1 text-sm text-zinc-300">Full‑stack Engineer · 3D & Motion</p>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-300">
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10"><User size={16} /> 4+ yrs exp</span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10"><MapPin size={16} /> Remote‑first</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="rounded-3xl bg-zinc-900/80 ring-1 ring-white/10 p-8">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-emerald-400" size={20} />
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <ol className="mt-6 space-y-5">
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-sm text-zinc-300">B.Tech in Computer Science · 2018 − 2022</p>
                <p className="text-sm text-zinc-400">Tech University, GPA 8.9/10</p>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-sm text-zinc-300">Advanced Web Graphics & 3D · 2023</p>
                <p className="text-sm text-zinc-400">Online Specialization (Three.js, GLSL)</p>
              </li>
            </ol>
          </div>

          {/* Achievements */}
          <div className="rounded-3xl bg-zinc-900/80 ring-1 ring-white/10 p-8">
            <div className="flex items-center gap-2">
              <Award className="text-emerald-400" size={20} />
              <h3 className="text-lg font-semibold text-white">Achievements</h3>
            </div>
            <ul className="mt-6 space-y-4">
              <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-sm text-zinc-200">Winner, Hackathon X (2024)</p>
                <p className="text-xs text-zinc-400 mt-1">Built a realtime 3D data viz app with Spline and WebSockets.</p>
              </li>
              <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-sm text-zinc-200">Top 1% on Frontend Mentor</p>
                <p className="text-xs text-zinc-400 mt-1">Recognized for design fidelity and accessibility.</p>
              </li>
              <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="text-sm text-zinc-200">Open‑source Contributor</p>
                <p className="text-xs text-zinc-400 mt-1">Contributed to UI libraries and motion utilities.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
