import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
  }`

  const Item = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 md:hover:bg-transparent"
    >
      {children}
    </a>
  )

  return (
    <header className={navClasses}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="font-extrabold text-lg tracking-tight">
            <span className="text-slate-900">Tech</span>
            <span className="text-blue-600">Folio</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <Item href="#projects">Projects</Item>
            <Item href="#about">About</Item>
            <Item href="#contact">Contact</Item>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <Item href="#projects">Projects</Item>
            <Item href="#about">About</Item>
            <Item href="#contact">Contact</Item>
          </div>
        )}
      </nav>
    </header>
  )
}
