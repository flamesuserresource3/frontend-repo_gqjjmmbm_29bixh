import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero3D() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctasRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from(headlineRef.current, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from(subRef.current, { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
        .from(ctasRef.current?.children || [], { y: 20, opacity: 0, stagger: 0.12, duration: 0.5 }, '-=0.3')

      // subtle parallax on scroll
      gsap.to(headlineRef.current, {
        yPercent: -10,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#101225] text-[#f4f4f6]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient overlay to enhance contrast without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#101225]/40 via-[#101225]/50 to-[#101225]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-6 pt-28 pb-16 md:pt-36">
        <div className="flex items-center gap-3 text-sm text-[#e3e5ec]/70">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2a2d3e]/60 px-3 py-1 backdrop-blur">
            <Rocket size={16} className="text-[#f19d4b]" />
            <span>Next‑gen IT Solutions</span>
          </span>
        </div>

        <h1 ref={headlineRef} className="text-4xl leading-tight font-semibold md:text-6xl">
          S V IT Hub — Building premium software for a connected future
        </h1>
        <p ref={subRef} className="max-w-2xl text-lg text-[#e3e5ec]/80 md:text-xl">
          We craft software, web, and mobile experiences. From custom ERPs to delightful apps, we blend code, design, and motion.
        </p>

        <div ref={ctasRef} className="mt-2 flex flex-wrap gap-4">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#687fe5] to-[#f19d4b] px-6 py-3 font-medium text-[#101225] shadow-lg shadow-[#687fe5]/20">
            View Our Work
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#3a3f57] bg-[#181a27] px-6 py-3 font-medium text-[#f4f4f6] hover:border-[#687fe5]/60">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
