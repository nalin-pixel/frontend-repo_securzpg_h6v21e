import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <main>
        <Hero3D />
        <Profile />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} TechFolio • Built with React, Tailwind, and Spline</p>
          <a className="hover:text-white" href="#hero">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
