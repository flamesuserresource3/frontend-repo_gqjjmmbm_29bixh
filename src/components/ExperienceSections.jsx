import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Monitor, Smartphone, Layers, Cog, Briefcase, Star, Quote, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { title: 'Software Development', icon: Code, desc: 'Robust desktop and backend systems with clean architectures.' },
  { title: 'Web App Development', icon: Monitor, desc: 'Fast, scalable SPAs and PWAs with modern stacks.' },
  { title: 'Mobile App Development', icon: Smartphone, desc: 'Native‑quality apps with fluid UX across iOS and Android.' },
  { title: 'Custom ERP Systems', icon: Layers, desc: 'Tailored ERPs to streamline finance, ops, inventory, HR.' },
  { title: 'IT Consulting', icon: Cog, desc: 'Architecture, audits, and technology roadmaps that scale.' },
]

const projects = [
  { title: 'ERP Windows System', tag: 'Desktop ERP', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop', desc: 'A complete ERP suite for accounting, inventory, HR, and analytics.' },
  { title: 'Attendance Management App', tag: 'Mobile HRM', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop', desc: 'Real‑time attendance, approvals, and payroll integrations.' },
]

const products = [
  { title: 'S V ERP', glow: '#687fe5', desc: 'Modular ERP with finance, inventory, and analytics. Built for SMBs.' },
  { title: 'S V Attendance', glow: '#f19d4b', desc: 'GPS‑aware time tracking with approvals and insightful dashboards.' },
]

const testimonials = [
  { name: 'Anika Mehta', role: 'COO, BrightWorks', quote: 'Their motion‑rich interfaces make complex workflows feel effortless.' },
  { name: 'Rohit Iyer', role: 'Founder, Nuvia Retail', quote: 'We scaled faster thanks to their reliable ERP and smart guidance.' },
  { name: 'Karthik Rao', role: 'CTO, NovaLabs', quote: 'Exceptional attention to detail — fast, secure, and beautiful.' },
]

export default function ExperienceSections() {
  const sectionRef = useRef(null)
  const testiRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.sv-reveal').forEach((el, i) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: (i % 4) * 0.05,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      // testimonials simple fade carousel
      const quotes = testiRef.current?.querySelectorAll('.q') || []
      if (quotes.length) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
        quotes.forEach((q) => {
          tl.to(q, { autoAlpha: 1, duration: 0.6 }).to(q, { autoAlpha: 0, duration: 0.6 }, '+=2.5')
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-[#101225] text-[#f4f4f6]">
      {/* Services */}
      <div id="services" className="mx-auto max-w-7xl px-6 py-20">
        <h3 className="sv-reveal mb-6 text-2xl font-semibold md:text-4xl">Services</h3>
        <p className="sv-reveal mb-10 max-w-2xl text-[#e3e5ec]/80">From idea to launch, we bring engineering rigor and cinematic design to every project.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="sv-reveal group rounded-2xl border border-[#2a2d3e] bg-[#181a27] p-6 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
              <div className="mb-4 inline-flex rounded-xl bg-[#2a2d3e] p-3">
                <s.icon className="text-[#f19d4b]" size={22} />
              </div>
              <h4 className="text-lg font-semibold">{s.title}</h4>
              <p className="mt-2 text-[#e3e5ec]/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects / Portfolio */}
      <div id="work" className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="sv-reveal mb-6 text-2xl font-semibold md:text-4xl">Selected Work</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="sv-reveal group overflow-hidden rounded-2xl border border-[#2a2d3e] bg-[#181a27]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101225]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-[#2a2d3e]/80 px-3 py-1 text-xs text-[#e3e5ec]/80 backdrop-blur">
                  {p.tag}
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-[#e3e5ec]/75">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div id="products" className="mx-auto max-w-7xl px-6 pb-20">
        <h3 className="sv-reveal mb-6 text-2xl font-semibold md:text-4xl">Products</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <div key={i} className="sv-reveal relative overflow-hidden rounded-2xl border border-[#2a2d3e] bg-[#181a27] p-6">
              <div className="pointer-events-none absolute -inset-20 rounded-full opacity-30 blur-3xl" style={{ background: `radial-gradient(600px 200px at 50% 50%, ${p.glow}, transparent)` }} />
              <h4 className="relative z-10 text-lg font-semibold">{p.title}</h4>
              <p className="relative z-10 mt-2 max-w-xl text-[#e3e5ec]/75">{p.desc}</p>
              <div className="relative z-10 mt-6 grid aspect-video place-items-center rounded-xl border border-[#3a3f57] bg-gradient-to-br from-[#101225] to-[#181a27]">
                <span className="text-sm text-[#e3e5ec]/60">Animated mock screenshot</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="mx-auto max-w-4xl px-6 pb-20">
        <div className="sv-reveal mb-6 flex items-center gap-2 text-[#e3e5ec]/70"><Star size={18} className="text-[#f19d4b]" /> Loved by clients</div>
        <div ref={testiRef} className="relative h-36">
          {testimonials.map((t, i) => (
            <div key={i} className="q absolute inset-0 flex flex-col items-center justify-center text-center opacity-0">
              <Quote className="mb-3 text-[#687fe5]" />
              <p className="max-w-2xl text-lg text-[#e3e5ec]">“{t.quote}”</p>
              <p className="mt-2 text-sm text-[#e3e5ec]/70">{t.name} • {t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Footer */}
      <div id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="sv-reveal">
            <h3 className="text-2xl font-semibold md:text-4xl">Let’s build something great</h3>
            <p className="mt-3 max-w-lg text-[#e3e5ec]/80">Tell us about your project — we’ll reply within 24 hours.</p>
            <div className="mt-6 space-y-3 text-[#e3e5ec]/80">
              <div className="flex items-center gap-3"><Phone size={18} className="text-[#f19d4b]" /> +91 98765 43210</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-[#f19d4b]" /> hello@svithub.com</div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-[#f19d4b]" /> Pune, IN • Remote‑first</div>
            </div>
          </div>
          <form className="sv-reveal space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-[#2a2d3e] bg-[#181a27] p-3 outline-none ring-0 focus:border-[#687fe5]" placeholder="Your name" />
              <input type="email" className="rounded-xl border border-[#2a2d3e] bg-[#181a27] p-3 outline-none ring-0 focus:border-[#687fe5]" placeholder="Email" />
            </div>
            <input className="w-full rounded-xl border border-[#2a2d3e] bg-[#181a27] p-3 outline-none ring-0 focus:border-[#687fe5]" placeholder="Company" />
            <textarea rows="4" className="w-full rounded-xl border border-[#2a2d3e] bg-[#181a27] p-3 outline-none ring-0 focus:border-[#687fe5]" placeholder="Project brief" />
            <button type="button" className="rounded-full bg-gradient-to-r from-[#687fe5] to-[#f19d4b] px-6 py-3 font-medium text-[#101225] shadow-lg shadow-[#687fe5]/20">
              Send Request
            </button>
          </form>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#2a2d3e] pt-8 text-sm text-[#e3e5ec]/70 md:flex-row">
          <p>© {new Date().getFullYear()} S V IT Hub — All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-[#2a2d3e] bg-[#181a27] px-4 py-2">
            <ArrowUp size={16} /> Back to top
          </a>
        </div>
      </div>
    </section>
  )
}
