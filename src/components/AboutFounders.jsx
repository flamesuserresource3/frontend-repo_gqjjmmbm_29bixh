import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { User, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const founders = [
  {
    name: 'Sanjay Verma',
    role: 'Partner • Strategy & Delivery',
    desc: '15+ years shipping large‑scale platforms. Leads execution and client success.',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Vijaya Rao',
    role: 'Partner • Technology',
    desc: 'Architects robust systems across web, mobile, and desktop with a quality‑first mindset.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Ishaan Shah',
    role: 'Partner • Design & Growth',
    desc: 'Turns ideas into elegant, human‑centered products. Drives brand and growth.',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
  },
]

export default function AboutFounders() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-[#101225] py-20 text-[#f4f4f6]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-[#2a2d3e] px-3 py-1 text-xs text-[#e3e5ec]/70">
            <Star size={14} className="text-[#f19d4b]" />
            About us
          </span>
          <h2 className="reveal mt-4 text-3xl font-semibold md:text-5xl">
            Code. Create. Connect.
          </h2>
          <p className="reveal mt-3 max-w-3xl text-[#e3e5ec]/80">
            We are a partnership of three founders building premium digital products. Our mission is simple: craft reliable software that feels delightful, performs flawlessly, and scales with your business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {founders.map((f, i) => (
            <div key={i} className="reveal group overflow-hidden rounded-2xl border border-[#2a2d3e] bg-[#181a27]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101225]/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-1 flex items-center gap-2 text-sm text-[#e3e5ec]/70"><User size={16} /> Founder</div>
                <h3 className="text-xl font-semibold">{f.name}</h3>
                <p className="text-sm text-[#e3e5ec]/70">{f.role}</p>
                <p className="mt-3 text-[#e3e5ec]/80">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
