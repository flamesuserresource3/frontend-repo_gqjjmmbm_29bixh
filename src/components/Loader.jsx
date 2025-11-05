import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Loader({ onComplete }) {
  const containerRef = useRef(null)
  const barRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        gsap.to(containerRef.current, {
          duration: 0.8,
          opacity: 0,
          yPercent: -10,
          pointerEvents: 'none',
          onComplete: onComplete,
        })
      },
    })

    tl.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        barRef.current,
        { width: '0%' },
        { width: '100%', duration: 1.2 },
        '-=0.3'
      )
      .to(barRef.current, { background: 'linear-gradient(90deg,#687fe5,#f19d4b)', duration: 0.5 })

    return () => tl.kill()
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#101225] text-[#f4f4f6]"
      role="status"
      aria-label="Loading"
    >
      <div className="w-[260px] text-center select-none">
        <div ref={textRef} className="mb-4">
          <p className="text-sm tracking-widest text-[#e3e5ec]/70">S V IT HUB</p>
          <h1 className="text-2xl font-semibold">Code. Create. Connect.</h1>
        </div>
        <div className="h-2 w-full rounded bg-[#2a2d3e] overflow-hidden">
          <div ref={barRef} className="h-full w-0 rounded bg-[#687fe5]" />
        </div>
      </div>
    </div>
  )
}
