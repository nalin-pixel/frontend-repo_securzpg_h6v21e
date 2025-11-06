import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let’s connect</h2>
          <p className="mt-2 text-slate-600">Have a role, idea, or collab in mind? I’d love to hear about it.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a href="mailto:you@example.com" className="group flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
            <Mail className="text-blue-600" size={20} />
            <span className="font-medium text-slate-800">you@example.com</span>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
            <Github size={20} />
            <span className="font-medium text-slate-800">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition">
            <Linkedin size={20} />
            <span className="font-medium text-slate-800">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
