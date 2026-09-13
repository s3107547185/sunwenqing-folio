import { useEffect, useRef } from 'react'

// 交互点阵背景：鼠标靠近时点被推开并点亮为荧光色（reactbits Dot Field 风格）
export default function DotField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    let raf = 0
    let running = false
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    const gap = 28
    const max = 150

    const resize = () => {
      const r = parent.getBoundingClientRect()
      canvas.width = Math.floor(r.width * dpr)
      canvas.height = Math.floor(r.height * dpr)
    }

    const draw = () => {
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          const dx = x - mouse.x
          const dy = y - mouse.y
          const dist = Math.hypot(dx, dy)
          let f = 0
          if (dist < max) f = 1 - dist / max
          const ox = dist > 0 ? (dx / dist) * f * 12 : 0
          const oy = dist > 0 ? (dy / dist) * f * 12 : 0
          ctx.beginPath()
          ctx.arc(x + ox, y + oy, 1 + f * 1.8, 0, Math.PI * 2)
          ctx.fillStyle =
            f > 0.02
              ? `rgba(200, 255, 77, ${0.15 + f * 0.5})`
              : 'rgba(244, 244, 240, 0.13)'
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !running) {
          running = true
          raf = requestAnimationFrame(draw)
        } else if (!e.isIntersecting && running) {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 },
    )

    resize()
    io.observe(parent)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('resize', resize)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="dot-field" aria-hidden="true" />
}
