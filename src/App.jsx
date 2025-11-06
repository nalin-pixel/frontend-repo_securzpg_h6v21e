import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero3D />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} TechFolio • Built with React, Tailwind, and Spline</p>
          <a className="hover:text-slate-900" href="#hero">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
