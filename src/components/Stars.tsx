import { useEffect, useRef } from 'react'

export default function Stars() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = ref.current!
    const ctx = c.getContext('2d')!
    let raf: number

    const resize = () => {
      c.width = window.innerWidth
      c.height = document.body.scrollHeight || window.innerHeight * 3
    }

    resize()

    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.5 + 0.2,
      a: Math.random(),
      s: Math.random() * 0.003 + 0.001,
      o: Math.random() * Math.PI * 2,
    }))

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      const g = ctx.createLinearGradient(0, 0, 0, c.height)
      g.addColorStop(0, '#020b18')
      g.addColorStop(1, '#030f22')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, c.width, c.height)

      stars.forEach((s) => {
        const a = s.a + Math.sin(t * s.s * 5 + s.o) * 0.3
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,230,255,${Math.max(0, Math.min(1, a))})`
        ctx.fill()
      })

      t++
      raf = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}

