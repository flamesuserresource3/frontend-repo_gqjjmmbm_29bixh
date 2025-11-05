import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Hero3D from './components/Hero3D'
import AboutFounders from './components/AboutFounders'
import ExperienceSections from './components/ExperienceSections'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-[#101225]">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#2a2d3e] bg-[#101225]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold text-[#f4f4f6]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#f19d4b]" /> S V IT Hub
          </a>
          <nav className="hidden gap-6 text-sm text-[#e3e5ec]/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-[#687fe5] to-[#f19d4b] px-4 py-2 text-sm font-medium text-[#101225]">Get in touch</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero3D />
        <AboutFounders />
        <ExperienceSections />
      </main>
    </div>
  )
}

export default App
